# Email Configuration Guide - MaxLaw Contact Form

## 🎯 TL;DR - Quick Decision

**Use Outlook SMTP if:**
- Client wants emails directly in his Outlook inbox
- Simple setup, no additional services
- **Just update .env.local and you're done!**

**Use Resend if:**
- You want better email deliverability (won't go to spam)
- Want email analytics and monitoring
- Professional setup for long-term

---

## ✅ OPTION 1: Microsoft 365 / Outlook SMTP (Easiest)

### What You Need From Your Client:
1. His Outlook email address (e.g., `marc@maxlawnv.com`)
2. His Outlook password OR an App Password

### Setup Steps:

**Step 1:** Create `.env.local` in your project root:

```env
# Microsoft 365 SMTP Configuration
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=marc@maxlawnv.com
SMTP_PASS=his-password-or-app-password
CONTACT_TO=marc@maxlawnv.com
```

**Step 2:** If he has 2FA enabled (he should!), get an App Password:
1. Visit https://account.microsoft.com/security
2. Click "Advanced security options"
3. Under "App passwords" → Create new password
4. Name it "MaxLaw Website"
5. Copy the generated password (format: `xxxx-xxxx-xxxx-xxxx`)
6. Use that as `SMTP_PASS`

**Step 3:** Test it:
```bash
npm run dev
# Visit http://localhost:3000/contact
# Submit form and check Outlook inbox
```

**Step 4:** Deploy to production:
- Add same env vars to Vercel/Netlify dashboard
- Done!

### Troubleshooting:
- **"Authentication failed"** → Use App Password, not regular password
- **"Connection timeout"** → Try `SMTP_PORT=465` instead
- **Emails going to spam** → Add SPF record: `v=spf1 include:spf.protection.outlook.com -all`

---

## ⚡ OPTION 2: Resend (Better Deliverability)

### Why Consider This?
- ✅ 99.9% deliverability (won't go to spam)
- ✅ No password/2FA issues
- ✅ Email analytics dashboard
- ✅ Free tier: 3,000 emails/month
- ✅ Can still reply from Outlook

### Setup Steps:

**Step 1:** Install Resend:
```bash
npm install resend
```

**Step 2:** Sign up at https://resend.com
- Create account (free)
- Get API key from dashboard

**Step 3:** Verify domain (takes 5 mins):
1. In Resend dashboard → Domains → Add Domain
2. Enter `maxlawnv.com`
3. Add 3 DNS records to your domain (they provide exact values)
4. Wait for verification (usually instant)

**Step 4:** Update `.env.local`:
```env
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_TO=marc@maxlawnv.com
```

**Step 5:** Switch API route:
```bash
# Backup current version
mv pages/api/send-email.ts pages/api/send-email-smtp.ts

# Use Resend version
mv pages/api/send-email-resend.ts pages/api/send-email.ts
```

**Step 6:** Deploy to production:
- Add `RESEND_API_KEY` to Vercel/Netlify
- Done!

### DNS Records (for domain verification):
You'll need to add these to your DNS (Resend provides exact values):
```
TXT  @  resend-verification-code
TXT  resend._domainkey  (DKIM)
TXT  @  v=spf1 include:_spf.resend.com ~all
```

---

## 📊 Comparison

| Feature | Outlook SMTP | Resend |
|---------|-------------|--------|
| **Setup Time** | 2 minutes | 10 minutes |
| **Code Changes** | None | Swap API file |
| **Deliverability** | Good (85-90%) | Excellent (99%+) |
| **Cost** | Free | Free (3K/month) |
| **2FA Issues** | Possible | None |
| **Analytics** | No | Yes |
| **Reply From** | Outlook | Outlook |

---

## 🔥 My Recommendation

**Start with Outlook SMTP (Option 1)** because:
1. ✅ Zero code changes needed
2. ✅ Works with existing setup
3. ✅ 2-minute setup
4. ✅ Client keeps everything in Outlook

**Switch to Resend later if:**
- Emails going to spam
- Want analytics
- Scaling up (lots of contact forms)

---

## What Changed From PHPMailer?

Your old setup (PHPMailer):
```php
$mail = new PHPMailer();
$mail->isSMTP();
$mail->Host = 'smtp.example.com';
$mail->SMTPAuth = true;
$mail->Username = 'user@example.com';
$mail->Password = 'password';
$mail->send();
```

Your new setup (Nodemailer - MUCH better!):
```javascript
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: { 
    user: process.env.SMTP_USER, 
    pass: process.env.SMTP_PASS 
  }
});
await transporter.sendMail({ from, to, subject, html });
```

Benefits over PHPMailer:
- ✅ Environment variables (more secure)
- ✅ Async/await (faster, non-blocking)
- ✅ Better error handling
- ✅ Built-in testing mode
- ✅ Works with modern email services
- ✅ TypeScript support

---

## Testing Without Sending Real Emails

Your current setup already has test mode built in!

Set in `.env.local`:
```env
TEST_EMAIL=true
```

This will:
1. Use Ethereal (fake email service)
2. Return a preview URL
3. Not send any real emails
4. Perfect for development

---

## Production Deployment Checklist

### For Vercel:
1. Go to project settings → Environment Variables
2. Add production variables:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_TO`
3. Redeploy

### For Netlify:
1. Site settings → Build & deploy → Environment
2. Add same variables
3. Redeploy

---

## Need Help?

- Current API route: `/pages/api/send-email.ts`
- Alternative (Resend): `/pages/api/send-email-resend.ts`
- Contact form: `/src/app/components/ContactFormInner.tsx`

Both versions are ready to go! Just pick which one and set up the environment variables.
