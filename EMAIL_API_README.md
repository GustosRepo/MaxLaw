/pages/api/send-email.ts - usage

This project includes a small Next.js API route to send email via Nodemailer and a plain SMTP server.

Required environment variables (for local development, add to your .env.local):

- SMTP_HOST (e.g. "smtp.secureserver.net" for GoDaddy)
- SMTP_PORT (e.g. 465 for secure SMTPS, or 587 for STARTTLS)
- SMTP_USER (the SMTP username / from address)
- SMTP_PASS (the SMTP password)
- CONTACT_TO (optional; recipient address for contact emails)
- TEST_EMAIL (optional; set to "true" to use a nodemailer test account and return a preview URL)

Notes:
- The API now expects the full contact form JSON (example shape below). If `TEST_EMAIL=true` the handler will use a Nodemailer test account and return a preview URL (Ethereal) instead of sending real mail.
- If the SMTP_PORT is 465, the code will use secure: true automatically.
- The API sends the email using the SMTP_USER as the From address and the display name "Max Lawn" (or "Max Lawn (TEST)" in test mode).

Example frontend usage (POST full form JSON to /api/send-email):

await fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@example.com',
    phone: '(702) 555-0123',
    caseType: 'Personal Injury',
    piSubtype: 'Car Accident',
    injurySeverity: 'moderate',
    message: 'Brief description here',
  }),
});
