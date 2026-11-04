import { test, expect } from '@playwright/test';
import nodemailer from 'nodemailer';
import { NextRequest } from 'next/server';
import { POST } from '../src/app/api/send-email/route';
import { POST as legacyPOST } from '../src/app/api/contact/route';

const input = { firstName: 'Test', lastName: 'Visitor', email: 'visitor@example.test', message: '<img src=x onerror=alert(1)>', caseType: 'Injury', consent: true, recaptchaToken: 'test-captcha-token' };
const request = (body: unknown) => new NextRequest('http://localhost/api/send-email', {
  method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
});
const originalCreateTransport = nodemailer.createTransport;
const originalFetch = globalThis.fetch;
let settings: Record<string, unknown>;
let messages: Array<Record<string, unknown>>;
let failOffice: boolean;
let failConfirmation: boolean;
let captchaResult: Record<string, unknown>;
let verificationCalls: number;

test.beforeEach(() => {
  Object.assign(process.env, {
    NODE_ENV: 'development', TEST_EMAIL: 'false', SMTP_HOST: 'smtp.example.test',
    SMTP_PORT: '587', SMTP_USER: 'office@example.test', SMTP_PASS: 'test-only-password',
    CONTACT_FROM: 'office@example.test', CONTACT_TO: 'office@example.test',
    RECAPTCHA_SECRET_KEY: 'test-only-secret', RECAPTCHA_MIN_SCORE: '0.5',
    RECAPTCHA_ALLOWED_HOSTNAMES: 'maxlawnv.com,www.maxlawnv.com',
  });
  messages = [];
  failOffice = false;
  failConfirmation = false;
  verificationCalls = 0;
  captchaResult = { success: true, action: 'contact_submit', score: 0.9, hostname: 'www.maxlawnv.com' };
  globalThis.fetch = async (url, options) => {
    expect(String(url)).toBe('https://www.google.com/recaptcha/api/siteverify');
    expect(options?.method).toBe('POST');
    const parameters = new URLSearchParams(String(options?.body));
    expect(parameters.get('secret')).toBe('test-only-secret');
    expect(parameters.get('response')).toBe('test-captcha-token');
    verificationCalls++;
    return Response.json(captchaResult);
  };
  // Replace SMTP locally: these tests must never open an SMTP connection.
  Object.defineProperty(nodemailer, 'createTransport', { configurable: true, writable: true, value: (options: Record<string, unknown>) => {
    settings = options;
    return { sendMail: async (message: Record<string, unknown>) => {
      messages.push(message);
      if ((messages.length === 1 && failOffice) || (messages.length === 2 && failConfirmation)) throw new Error('private SMTP details');
      return { accepted: ['recipient'], rejected: [] };
    } };
  } });
});

test.afterEach(() => {
  globalThis.fetch = originalFetch;
  Object.defineProperty(nodemailer, 'createTransport', { configurable: true, writable: true, value: originalCreateTransport });
});

test('rejects malformed fields, missing consent, header injection and bots before SMTP', async () => {
  for (const body of [null, [], { ...input, consent: 'true' }, { ...input, email: ['bad'] }, { ...input, firstName: 'A\r\nBcc: injected' }, { ...input, message: 'x'.repeat(10001) }, { ...input, company: 'spam' }]) {
    expect((await POST(request(body))).status).toBe(400);
  }
  expect(messages).toHaveLength(0);
});

test('escapes submitted HTML and sends using existing SMTP without exposing transport details', async () => {
  const response = await POST(request(input));
  expect(await response.json()).toEqual({ success: true });
  expect(messages).toHaveLength(2);
  expect(verificationCalls).toBe(1);
  expect(messages[0].replyTo).toBe(input.email);
  expect(messages[0].html).toContain('&lt;img');
  expect(messages[0].html).not.toContain('<img');
  expect(settings).toMatchObject({ secure: false, requireTLS: true, tls: { rejectUnauthorized: true } });
});

test('keeps office submission successful when the visitor confirmation fails', async () => {
  failConfirmation = true;
  const response = await POST(request(input));
  expect(response.status).toBe(200);
  expect(await response.json()).toEqual({ success: true });
  expect(messages).toHaveLength(2);
});

test('reports office SMTP failure without returning private SMTP errors', async () => {
  failOffice = true;
  const response = await POST(request(input));
  expect(response.status).toBe(500);
  const body = await response.json();
  expect(body.success).toBe(false);
  expect(JSON.stringify(body)).not.toContain('private SMTP details');
  expect(messages).toHaveLength(1);
});

test('supports press inquiries and the existing implicit-TLS SMTP option', async () => {
  process.env.SMTP_PORT = '465';
  const response = await POST(request({ ...input, caseType: 'Media / Press' }));
  expect(response.status).toBe(200);
  expect(messages[0].subject).toContain('Media / Press');
  expect(settings).toMatchObject({ secure: true, requireTLS: false, tls: { rejectUnauthorized: true } });
});

test('both email endpoints reject missing tokens and direct bot posts before sending mail', async () => {
  for (const handler of [POST, legacyPOST]) {
    for (const token of [undefined, '', 123, 'x'.repeat(4097)]) {
      const response = await handler(request({ ...input, recaptchaToken: token }));
      expect(response.status).toBe(403);
    }
  }
  expect(messages).toHaveLength(0);
  expect(verificationCalls).toBe(0);
});

test('both endpoints reject failed, expired, low-score, wrong-action and wrong-host verifications', async () => {
  const valid = { ...captchaResult };
  const results = [
    { success: false, 'error-codes': ['timeout-or-duplicate'] },
    { ...valid, score: 0.1 }, { ...valid, score: '0.9' }, { ...valid, score: 2 },
    { ...valid, action: 'another_action' }, { ...valid, hostname: 'attacker.example' },
  ];
  for (const result of results) {
    captchaResult = result;
    for (const handler of [POST, legacyPOST]) expect((await handler(request(input))).status).toBe(403);
  }
  expect(messages).toHaveLength(0);
});

test('missing configuration and verification outages never bypass CAPTCHA', async () => {
  delete process.env.RECAPTCHA_SECRET_KEY;
  for (const handler of [POST, legacyPOST]) expect((await handler(request(input))).status).toBe(503);
  expect(verificationCalls).toBe(0);
  process.env.RECAPTCHA_SECRET_KEY = 'test-only-secret';
  globalThis.fetch = async () => { throw new Error('Verification network unavailable'); };
  for (const handler of [POST, legacyPOST]) expect((await handler(request(input))).status).toBe(503);
  globalThis.fetch = async () => new Response('not JSON', { status: 200 });
  for (const handler of [POST, legacyPOST]) expect((await handler(request(input))).status).toBe(503);
  expect(messages).toHaveLength(0);
});

test('a verified legacy contact request can still use the existing SMTP endpoint', async () => {
  expect((await legacyPOST(request(input))).status).toBe(200);
  expect(verificationCalls).toBe(1);
  expect(messages).toHaveLength(1);
});
