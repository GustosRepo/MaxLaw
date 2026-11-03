import { test, expect } from '@playwright/test';
import nodemailer from 'nodemailer';
import { POST } from '../src/app/api/send-email/route';

const input = { firstName: 'Test', lastName: 'Visitor', email: 'visitor@example.test', message: '<img src=x onerror=alert(1)>', caseType: 'Injury', consent: true };
const request = (body: unknown) => new Request('http://localhost/api/send-email', {
  method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
});
const originalCreateTransport = nodemailer.createTransport;
let settings: Record<string, unknown>;
let messages: Array<Record<string, unknown>>;
let failOffice: boolean;
let failConfirmation: boolean;

test.beforeEach(() => {
  Object.assign(process.env, {
    NODE_ENV: 'development', TEST_EMAIL: 'false', SMTP_HOST: 'smtp.example.test',
    SMTP_PORT: '587', SMTP_USER: 'office@example.test', SMTP_PASS: 'test-only-password',
    CONTACT_FROM: 'office@example.test', CONTACT_TO: 'office@example.test',
  });
  messages = [];
  failOffice = false;
  failConfirmation = false;
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
