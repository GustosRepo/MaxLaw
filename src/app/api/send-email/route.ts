import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { join } from 'node:path';
import { ContactInputError, escapeHtml, validateContactForm, type ContactForm } from '../../../lib/contact-form';
import { RecaptchaError, verifyRecaptcha } from '../../../lib/recaptcha-server';
import {
  FIRM_ADDRESS_LINE1,
  FIRM_ADDRESS_LINE2,
  FIRM_NAME,
  FIRM_PHONE_DISPLAY,
  FIRM_PHONE_E164,
  SITE_URL,
} from '../../../lib/constants';

type FormPayload = ContactForm;

const EMAIL_LOGO_CID = 'saggese-logo@maxlawnv.com';
const EMAIL_LOGO_PATH = join(process.cwd(), 'public', 'home-logo.png');
const CONTACT_FROM_DISPLAY_NAME = 'Saggese – Lawyers';

function buildPlainText(form: FormPayload) {
  const lines: string[] = [];
  lines.push(`Name: ${form.firstName || ''} ${form.lastName || ''}`);
  lines.push(`Email: ${form.email || ''}`);
  lines.push(`Phone: ${form.phone || ''}`);
  lines.push(`Case type: ${form.caseType || ''}`);
  if (form.piSubtype) lines.push(`PI subtype: ${form.piSubtype}`);
  if (form.injurySeverity) lines.push(`Injury severity: ${form.injurySeverity}`);
  if (form.medicalEstimate) lines.push(`Estimated medical bills: ${form.medicalEstimate}`);
  if (form.atFault) lines.push(`At fault: ${form.atFault}`);
  if (form.otherDriverInsurance) lines.push(`Other driver insurance: ${form.otherDriverInsurance}`);
  if (form.wereYouInjured) lines.push(`Were you injured: ${form.wereYouInjured}`);
  if (form.injuryList) lines.push(`Injuries: ${form.injuryList}`);
  if (form.passengers) lines.push(`Passengers: ${form.passengers}`);
  if (form.vehicleDamageSeverity) lines.push(`Vehicle damage severity: ${form.vehicleDamageSeverity}`);
  if (form.chargeName) lines.push(`Charge: ${form.chargeName}`);
  if (form.arrested) lines.push(`Arrested: ${form.arrested}`);
  if (form.financialAbility) lines.push(`Financial ability: ${form.financialAbility}`);
  lines.push('');
  lines.push('Message:');
  lines.push(form.message || '');
  return lines.join('\n');
}

function buildHtml(form: FormPayload) {
  const rows = (label: string, value?: string) => value ? `<tr><td style="padding:6px 8px;border:1px solid #eee;font-weight:600">${label}</td><td style="padding:6px 8px;border:1px solid #eee">${escapeHtml(value)}</td></tr>` : '';
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#111">
      <h2>New contact form submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">${rows('Name', `${form.firstName || ''} ${form.lastName || ''}`)}${rows('Email', form.email)}${rows('Phone', form.phone)}${rows('Case type', form.caseType)}${rows('PI subtype', form.piSubtype)}${rows('Injury severity', form.injurySeverity)}${rows('Estimated medical bills', form.medicalEstimate)}${rows('At fault', form.atFault)}${rows('Other driver insurance', form.otherDriverInsurance)}${rows('Were you injured', form.wereYouInjured)}${rows('Injuries', form.injuryList)}${rows('Passengers', form.passengers)}${rows('Vehicle damage', form.vehicleDamageSeverity)}${rows('Charge', form.chargeName)}${rows('Arrested', form.arrested)}${rows('Financial ability', form.financialAbility)}</table>
      <h3 style="margin-top:18px">Message</h3>
      <div style="white-space:pre-wrap;border:1px solid #eee;padding:12px;background:#fafafa">${escapeHtml(form.message || '')}</div>
    </div>
  `;
}

export async function POST(req: Request) {
  try {
    const input: unknown = await req.json();
    const form = validateContactForm(input);
    await verifyRecaptcha((input as Record<string, unknown>).recaptchaToken);

    const TEST_EMAIL = process.env.TEST_EMAIL === 'true' || process.env.NODE_ENV === 'test';

    const normalizedForm = form;
    const subject = `[Website Contact] ${normalizedForm.caseType} — ${form.firstName || ''} ${form.lastName || ''}`;
    const text = buildPlainText(normalizedForm);
    const html = buildHtml(normalizedForm);

    if (TEST_EMAIL) {
      const testAccount = await nodemailer.createTestAccount();
      const transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: { user: testAccount.user, pass: testAccount.pass },
      });

      const from = `"${CONTACT_FROM_DISPLAY_NAME} (TEST)" <${testAccount.user}>`;
      const to = testAccount.user;
      const info = await transporter.sendMail({ from, to, subject, text, html });
      const preview = nodemailer.getTestMessageUrl(info) || null;
      return NextResponse.json({ success: true, info: { preview, raw: info } });
    }

    const host = process.env.SMTP_HOST;
    const portRaw = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !portRaw || !user || !pass) {
      return NextResponse.json({ success: false, error: 'SMTP configuration is incomplete' }, { status: 500 });
    }

    const port = parseInt(portRaw, 10);

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      requireTLS: port !== 465,
      auth: { user, pass },
      tls: { rejectUnauthorized: true },
    });

    const fromEmail = process.env.CONTACT_FROM || user;
    const from = `"${CONTACT_FROM_DISPLAY_NAME}" <${fromEmail}>`;
    const to = process.env.CONTACT_TO || user;

    const info = await transporter.sendMail({
      from, to, subject, text, html, replyTo: form.email,
    });
    if (!info.accepted?.length) throw new Error('Office notification was not accepted');

    // A visitor confirmation failure must not invalidate a successful office notification.
    const clientSubject = 'Thank you for contacting The Law Offices of Saggese & Associates';
    const clientHtml = `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#111;max-width:600px">
        <div style="margin-bottom:22px">
          <img src="cid:${EMAIL_LOGO_CID}" alt="${FIRM_NAME}" width="220" style="display:block;max-width:220px;width:100%;height:auto" />
        </div>
        <h2 style="color:#d4af37;margin:0 0 14px">Thank You for Reaching Out</h2>
        <p>Dear ${escapeHtml(form.firstName || '')},</p>
        <p>We have received your inquiry regarding <strong>${escapeHtml(form.caseType || 'your legal matter')}</strong>. A member of our team will review your information and contact you shortly.</p>
        <div style="margin-top:22px;padding-top:16px;border-top:1px solid #ddd;color:#333;font-size:14px;line-height:1.5">
          <strong>${FIRM_NAME}</strong><br />
          ${FIRM_ADDRESS_LINE1}<br />
          ${FIRM_ADDRESS_LINE2}<br />
          Phone: <a href="tel:${FIRM_PHONE_E164}" style="color:#111">${FIRM_PHONE_DISPLAY}</a><br />
          Website: <a href="${SITE_URL}" style="color:#111">${SITE_URL}</a>
        </div>
      </div>
    `;
    const clientText = `Thank you for contacting The Law Offices of Saggese & Associates\n\nDear ${form.firstName || ''},\n\nWe have received your inquiry regarding ${form.caseType || 'your legal matter'}.\n\n${FIRM_NAME}\n${FIRM_ADDRESS_LINE1}\n${FIRM_ADDRESS_LINE2}\nPhone: ${FIRM_PHONE_DISPLAY}\nWebsite: ${SITE_URL}`;

    try {
      await transporter.sendMail({
        from,
        to: form.email,
        subject: clientSubject,
        text: clientText,
        html: clientHtml,
        attachments: [{
          filename: 'saggese-logo.png',
          path: EMAIL_LOGO_PATH,
          cid: EMAIL_LOGO_CID,
        }],
      });
    } catch {
      console.error('Contact confirmation email failed after the office notification was accepted');
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    if (err instanceof RecaptchaError) {
      return NextResponse.json({ success: false, error: err.message }, { status: err.status });
    }
    if (err instanceof ContactInputError) {
      return NextResponse.json({ success: false, error: err.message }, { status: err.status });
    }
    if (err instanceof SyntaxError) {
      return NextResponse.json({ success: false, error: 'Please check the submitted form.' }, { status: 400 });
    }
    console.error('Contact form email failed');
    return NextResponse.json({ success: false, error: 'Failed to send your inquiry. Please try again or call (702) 778-8883.' }, { status: 500 });
  }
}
