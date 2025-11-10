# Email Setup Guide - Outlook Integration

## Quick Setup (Using Microsoft 365/Outlook SMTP)

Your contact form is already set up to work with any SMTP server. To connect it to your client's Outlook:

### Step 1: Get Outlook Credentials

**If your client has Microsoft 365 Business:**
1. Email address: (e.g., `marc@maxlawnv.com`)
2. Password: If 2FA is enabled (recommended), create an App Password:
   - Go to: https://account.microsoft.com/security
   - Security → Advanced security options
   - App passwords → Create new app password
   - Copy the generated password

**If using basic Outlook.com:**
- May need to enable "Let apps that use less secure sign-in" (not recommended)
- Better to upgrade to Microsoft 365 Business

### Step 2: Create `.env.local` File

In your project root (`/Users/agyhernandez/Desktop/maxlaw/MaxLaw/`), create a file named `.env.local`:

```env
# Microsoft 365 SMTP Configuration
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=marc@maxlawnv.com
SMTP_PASS=xxxx-xxxx-xxxx-xxxx
CONTACT_TO=marc@maxlawnv.com
```

Replace with actual credentials!

### Step 3: Test Locally

```bash
# Start your dev server
npm run dev

# Visit http://localhost:3000/contact
# Fill out and submit the contact form
# Check the Outlook inbox for the email
```

### Step 4: Production Deployment

When deploying to Vercel/Netlify:

1. Go to your project settings
2. Add Environment Variables:
   - `SMTP_HOST` = `smtp.office365.com`
   - `SMTP_PORT` = `587`
   - `SMTP_USER` = `marc@maxlawnv.com`
   - `SMTP_PASS` = `[app password]`
   - `CONTACT_TO` = `marc@maxlawnv.com`

---

## Alternative: Using Resend (Recommended for Better Deliverability)

If you want better email deliverability and a modern setup:

### 1. Install Resend

```bash
npm install resend
```

### 2. Sign up & Get API Key

- Visit: https://resend.com
- Sign up (free tier: 3,000 emails/month)
- Get your API key from dashboard
- Verify your domain (maxlawnv.com)

### 3. Update Environment Variables

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_TO=marc@maxlawnv.com
```

### 4. Update API Route (Optional - only if using Resend)

See the commented-out Resend implementation in `/pages/api/send-email-resend.ts`

---

## Troubleshooting

### "Authentication failed" error
- Check if 2FA is enabled → Use App Password instead
- Verify SMTP_USER and SMTP_PASS are correct
- Try SMTP_PORT=465 with SSL instead of 587

### Emails going to spam
- Add SPF record to DNS: `v=spf1 include:spf.protection.outlook.com -all`
- Add DKIM if available
- Consider using Resend for better deliverability

### "SMTP configuration incomplete" error
- Make sure all environment variables are set
- Restart your dev server after changing `.env.local`

---

## What's Different from PHPMailer?

| PHPMailer (Old) | Nodemailer (Current) |
|-----------------|----------------------|
| PHP backend | Node.js/Next.js API |
| Blocking calls | Async/await (faster) |
| Limited error handling | Better error messages |
| Basic SMTP | SMTP + modern services |

Your current setup is **better** than PHPMailer! It's:
- ✅ More secure
- ✅ Better error handling
- ✅ Async (non-blocking)
- ✅ Easy to test
- ✅ Works with any email provider

---

## Need Help?

Common issues and their fixes are in the troubleshooting section above. If you need to switch to a different email service (SendGrid, Mailgun, etc.), the code is already flexible enough to support it with minimal changes.
