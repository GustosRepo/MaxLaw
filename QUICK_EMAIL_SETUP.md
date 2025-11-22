# 🚀 Quick Start - Email Setup for MaxLaw

## ⏱️ 2-Minute Setup (Outlook SMTP)

### Step 1: Get Credentials from Your Client
Ask Marc for:
- ✉️ His Outlook email: `marc@maxlawnv.com`
- 🔑 His password OR App Password (if 2FA enabled)

### Step 2: Create `.env.local`
In your project root, create this file:

```bash
# Copy the template
cp .env.local.template .env.local

# Edit with real values
nano .env.local  # or use VS Code
```

Add these values:
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=marc@maxlawnv.com
SMTP_PASS=his-actual-password
CONTACT_TO=marc@maxlawnv.com
```

### Step 3: Test It
```bash
# Start dev server
npm run dev

# Visit http://localhost:3000/contact
# Submit form
# Check Marc's Outlook inbox
```

✅ **Done!** That's literally it.

---

## 📝 If You Get "Authentication Failed"

Marc probably has 2FA enabled. Get an App Password:

1. Have Marc visit: https://account.microsoft.com/security
2. Click "Advanced security options"
3. Scroll to "App passwords" → "Create a new app password"
4. Name it: "MaxLaw Website"
5. Copy the generated password (looks like: `xxxx-xxxx-xxxx-xxxx`)
6. Use THAT in `.env.local` as `SMTP_PASS`

---

## 🌐 Deploy to Production

### Vercel:
```bash
# In Vercel dashboard:
Settings → Environment Variables → Add:

SMTP_HOST = smtp.office365.com
SMTP_PORT = 587
SMTP_USER = marc@maxlawnv.com
SMTP_PASS = [the password]
CONTACT_TO = marc@maxlawnv.com
```

Then redeploy.

### Netlify:
Same thing but in: Site settings → Build & deploy → Environment

made changes test

---

## 🎯 What Happens When Someone Submits Contact Form?

1. User fills out form at `/contact`
2. Form posts to `/api/send-email`
3. API validates data (checks case type)
4. Email sent via Outlook SMTP to Marc's inbox
5. User sees success message
6. Marc gets email with all form data

---

## 📧 Email Format

Marc will receive emails that look like:

**Subject:** `[Website Contact] Personal Injury — John Doe`

**Body:**
```
New contact form submission

Name: John Doe
Email: john@example.com
Phone: (702) 555-0123
Case type: Personal Injury
PI subtype: Car Accident
Injury severity: moderate

Message:
I was injured in a car accident last week and need legal help...
```

---

## 🔍 Already Better Than PHPMailer

Your current setup is already superior:

| PHPMailer (Old) | Nodemailer (Current) |
|-----------------|----------------------|
| ❌ Blocking | ✅ Async (faster) |
| ❌ Basic errors | ✅ Detailed errors |
| ❌ PHP only | ✅ Modern Node.js |
| ❌ No test mode | ✅ Built-in testing |
| ❌ Hardcoded config | ✅ Environment vars |

---

## 🆘 Common Issues

**Issue:** Emails going to spam
**Fix:** Add SPF record to DNS or switch to Resend

**Issue:** "Connection timeout"
**Fix:** Try `SMTP_PORT=465` instead of `587`

**Issue:** "Invalid credentials"
**Fix:** Use App Password, not regular password

**Issue:** No emails arriving
**Fix:** Check Marc's spam folder first!

---

## 📚 Want More?

- Full guide: `COMPLETE_EMAIL_GUIDE.md`
- Resend setup: `EMAIL_SETUP_OUTLOOK.md`
- API code: `pages/api/send-email.ts`

---

## ✨ That's It!

You literally just need:
1. Create `.env.local` with Marc's credentials
2. Test locally
3. Add same vars to production

No code changes needed. Your email system is ready to go! 🎉
