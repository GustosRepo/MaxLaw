import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import type { SentMessageInfo } from 'nodemailer';

interface FormPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
  caseType?: string;
  piSubtype?: string;
  injurySeverity?: string;
  medicalEstimate?: string;
  atFault?: string;
  otherDriverInsurance?: string;
  wereYouInjured?: string;
  injuryList?: string;
  passengers?: string;
  vehicleDamageSeverity?: string;
  chargeName?: string;
  arrested?: string;
  financialAbility?: string;
}

type Success = { success: true; info: SentMessageInfo | { preview: string | null; raw: SentMessageInfo } };
type Failure = { success: false; error: string };
type Data = Success | Failure;

const ACCEPTED_CASE_TYPES = ['Personal Injury', 'Criminal Defense'];

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
  const rows = (label: string, value?: string) => value ? `<tr><td style="padding:6px 8px;border:1px solid #eee;font-weight:600">${label}</td><td style="padding:6px 8px;border:1px solid #eee">${value}</td></tr>` : '';
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#111">
      <h2>New contact form submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">${rows('Name', `${form.firstName || ''} ${form.lastName || ''}`)}${rows('Email', form.email)}${rows('Phone', form.phone)}${rows('Case type', form.caseType)}${rows('PI subtype', form.piSubtype)}${rows('Injury severity', form.injurySeverity)}${rows('Estimated medical bills', form.medicalEstimate)}${rows('At fault', form.atFault)}${rows('Other driver insurance', form.otherDriverInsurance)}${rows('Were you injured', form.wereYouInjured)}${rows('Injuries', form.injuryList)}${rows('Passengers', form.passengers)}${rows('Vehicle damage', form.vehicleDamageSeverity)}${rows('Charge', form.chargeName)}${rows('Arrested', form.arrested)}${rows('Financial ability', form.financialAbility)}</table>
      <h3 style="margin-top:18px">Message</h3>
      <div style="white-space:pre-wrap;border:1px solid #eee;padding:12px;background:#fafafa">${(form.message || '')}</div>
    </div>
  `;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const form = req.body || {};

  // Basic required fields
  if (!form.firstName || !form.lastName || !form.email || !form.message) {
    return res.status(400).json({ success: false, error: 'Missing required fields: firstName, lastName, email, or message' });
  }

  const caseType = form.caseType || '';
  if (!ACCEPTED_CASE_TYPES.includes(caseType)) {
    // Return 422 with referral message so client can surface it
    return res.status(422).json({ success: false, error: 'We do not handle that matter. Please call for a referral or check our practice areas.' });
  }

  const TEST_EMAIL = process.env.TEST_EMAIL === 'true' || process.env.NODE_ENV === 'test';

  // Common message payload
  const subject = `[Website Contact] ${caseType} — ${form.firstName || ''} ${form.lastName || ''}`;
  const text = buildPlainText(form);
  const html = buildHtml(form);

  try {
    if (TEST_EMAIL) {
      // Use nodemailer test account (Ethereal) for safe testing
      const testAccount = await nodemailer.createTestAccount();
      const transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: { user: testAccount.user, pass: testAccount.pass },
      });

      const from = `"Max Lawn (TEST)" <${testAccount.user}>`;
      const to = testAccount.user;

      const info = await transporter.sendMail({ from, to, subject, text, html });
      const preview = nodemailer.getTestMessageUrl(info) || null;
      return res.status(200).json({ success: true, info: { preview, raw: info } });
    }

    const host = process.env.SMTP_HOST;
    const portRaw = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !portRaw || !user || !pass) {
      return res.status(500).json({ success: false, error: 'SMTP configuration is incomplete' });
    }

    const port = parseInt(portRaw, 10);

    // GoDaddy SMTP requires TLS on port 587
    // Use secure: false with port 587 to enable STARTTLS
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: false, // Use false for port 587 (use STARTTLS)
      requireTLS: true, // Force TLS
      auth: { user, pass },
      tls: {
        // Don't fail on invalid certs (GoDaddy sometimes has cert issues)
        rejectUnauthorized: false
      }
    });

    // Use custom FROM name if provided, otherwise default to "Max Lawn"
    const fromEmail = process.env.CONTACT_FROM || user;
    const fromName = process.env.CONTACT_FROM_NAME || 'Max Lawn';
    const from = `"${fromName}" <${fromEmail}>`;
    
    // Support multiple recipients (comma-separated)
    const to = process.env.CONTACT_TO || user; // prefer CONTACT_TO, fallback to SMTP_USER

    // Send email to lawyers with all form details
    const info = await transporter.sendMail({ from, to, subject, text, html });

    // Send confirmation email to client
    const clientSubject = 'Thank you for contacting The Law Offices of Saggese & Associates';
    const clientHtml = `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#111;max-width:600px">
        <h2 style="color:#d4af37">Thank You for Reaching Out</h2>
        <p>Dear ${form.firstName || ''},</p>
        <p>We have received your inquiry regarding <strong>${form.caseType || 'your legal matter'}</strong>. A member of our team will review your information and contact you shortly.</p>
        <p style="margin-top:20px"><strong>What to expect next:</strong></p>
        <ul style="line-height:1.8">
          <li>A member of our team will review your case details</li>
          <li>We will contact you within 1-2 business days</li>
          <li>Have any questions? Call us at <strong>(702) 778-8883</strong></li>
        </ul>
        <p style="margin-top:20px">In the meantime, please gather any relevant documents, photos, or information related to your case.</p>
        <div style="margin-top:30px;padding:20px;background:#f8f8f8;border-left:4px solid #d4af37">
          <p style="margin:0"><strong>The Law Offices of Saggese & Associates</strong></p>
          <p style="margin:5px 0">732 S 6th St #200c</p>
          <p style="margin:5px 0">Las Vegas, NV 89101</p>
          <p style="margin:5px 0">Phone: (702) 778-8883</p>
          <p style="margin:5px 0">Web: <a href="https://www.maxlawnv.com" style="color:#d4af37">www.maxlawnv.com</a></p>
        </div>
        <p style="margin-top:20px;font-size:12px;color:#666">This email is a confirmation of your inquiry. If you did not submit this form, please disregard this message or contact us.</p>
      </div>
    `;
    const clientText = `
Thank you for contacting The Law Offices of Saggese & Associates

Dear ${form.firstName || ''},

We have received your inquiry regarding ${form.caseType || 'your legal matter'}. A member of our team will review your information and contact you shortly.

What to expect next:
- A member of our team will review your case details
- We will contact you within 1-2 business days
- Have any questions? Call us at (702) 778-8883

The Law Offices of Saggese & Associates
732 S 6th St #200c, Las Vegas, NV 89101
Phone: (702) 778-8883
Web: www.maxlawnv.com
    `;

    await transporter.sendMail({
      from,
      to: form.email,
      subject: clientSubject,
      text: clientText,
      html: clientHtml,
    });

    return res.status(200).json({ success: true, info });
  } catch (err: unknown) {
    console.error('send-email error:', err);
    const message = err instanceof Error ? err.message : String(err);
    return res.status(500).json({ success: false, error: message });
  }
}

// Note: frontend should post the entire form JSON to /api/send-email. The API validates caseType and returns 422 for unsupported matters.
