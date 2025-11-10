# 🚀 GoDaddy Email Setup - MaxLaw

## ✅ Configuration Applied

Your `.env.local` is already configured with:

```env
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=587
SMTP_USER=marc@maxlawnv.com
CONTACT_FROM=marc@maxlawnv.com
CONTACT_FROM_NAME=Max Law NV Website
CONTACT_TO=marc@maxlawnv.com,steph@maxlawnv.com
```

**You just need to add the mailbox password!**

---

## 📝 Step 1: Get GoDaddy Mailbox Password

1. **Login to GoDaddy**: https://account.godaddy.com
2. **Navigate to Email**: 
   - Click "Email & Office" or "Workspace Email"
   - Find your `maxlawnv.com` domain
   - Click "Manage"
3. **Find marc@maxlawnv.com mailbox**
4. **Get/Reset Password**:
   - If you know it: Great! Use it.
   - If not: Click "Reset Password" → Create new password
5. **Copy the password**

---

## 🔧 Step 2: Add Password to .env.local

Edit `/Users/agyhernandez/Desktop/maxlaw/MaxLaw/.env.local`:

Find this line:
```env
SMTP_PASS=REPLACE_WITH_MAILBOX_PASSWORD
```

Replace with actual password:
```env
SMTP_PASS=your-actual-godaddy-password
```

**Save the file.**

---

## 🧪 Step 3: Test Locally

```bash
# Start dev server
npm run dev

# Open browser
# Visit: http://localhost:3000/contact

# Submit test form
# Fill out: Name, Email, Phone, Case Type, Message

# Check both email inboxes:
# ✅ marc@maxlawnv.com should receive email
# ✅ steph@maxlawnv.com should receive email
```

---

## 🌐 Step 4: Deploy to Production

### For Vercel:

1. Go to your project: https://vercel.com/dashboard
2. Click your MaxLaw project
3. Go to: Settings → Environment Variables
4. Add these variables:

```
SMTP_HOST = smtpout.secureserver.net
SMTP_PORT = 587
SMTP_USER = marc@maxlawnv.com
SMTP_PASS = [the actual password]
CONTACT_FROM = marc@maxlawnv.com
CONTACT_FROM_NAME = Max Law NV Website
CONTACT_TO = marc@maxlawnv.com,steph@maxlawnv.com
```

5. **Redeploy** (Vercel will auto-redeploy, or trigger manually)

### For Netlify:

Same thing, but:
1. Site settings → Build & deploy → Environment
2. Add same variables
3. Redeploy

---

## 📧 What Happens When Form is Submitted?

**Email will be sent:**
- **FROM**: "Max Law NV Website" <marc@maxlawnv.com>
- **TO**: marc@maxlawnv.com AND steph@maxlawnv.com
- **SUBJECT**: [Website Contact] Personal Injury — John Doe
- **BODY**: All form fields + message

**Both Marc and Steph will receive every contact form submission!**

---

## ⚠️ Common GoDaddy Issues

### "Authentication failed"
- ❌ Wrong password
- ✅ **Fix**: Reset password in GoDaddy dashboard
- ✅ Make sure you're using the **mailbox password**, not GoDaddy account password

### "Relay access denied"
- ❌ Using wrong SMTP_USER
- ✅ **Fix**: Must use `marc@maxlawnv.com` (full email, not just username)

### "Connection timeout"
- ❌ Wrong SMTP host or port
- ✅ **Fix**: 
  - SMTP_HOST must be `smtpout.secureserver.net`
  - SMTP_PORT must be `587` (not 465 or 25)

### Only Marc receives email (Steph doesn't)
- ❌ Wrong CONTACT_TO format
- ✅ **Fix**: Must be comma-separated with NO SPACES:
  ```
  CONTACT_TO=marc@maxlawnv.com,steph@maxlawnv.com
  ```

### Emails go to spam
- ✅ **Fix**: Add SPF record to your DNS:
  - Type: `TXT`
  - Host: `@`
  - Value: `v=spf1 include:secureserver.net ~all`

---

## 🎯 Email Format Example

When someone submits the contact form, both Marc and Steph will receive:

**Subject:**
```
[Website Contact] Personal Injury — Jane Smith
```

**Body:**
```
New contact form submission

Name: Jane Smith
Email: jane@example.com
Phone: (702) 555-0123
Case type: Personal Injury
PI subtype: Car Accident
Injury severity: moderate

Message:
I was injured in a car accident last week and need 
legal representation. The other driver ran a red light...
```

---

## ✅ Ready to Test!

1. ✅ Code is updated (supports custom FROM name & multiple TO)
2. ✅ `.env.local` is configured
3. 👉 **You just need to add the mailbox password**
4. ✅ Test locally
5. ✅ Deploy to production

---

## 🆘 Need Help?

- GoDaddy Email Help: https://www.godaddy.com/help/workspace-email-7924
- Password Reset: GoDaddy Dashboard → Email & Office → Manage
- Check both inboxes after testing

---

## 📍 Current Status

- ✅ Using GoDaddy SMTP (`smtpout.secureserver.net`)
- ✅ Sending FROM: marc@maxlawnv.com
- ✅ Display Name: "Max Law NV Website"
- ✅ Sending TO: Marc AND Steph (both get every email)
- ⏳ **Waiting for**: GoDaddy mailbox password

**Once you add the password, everything is ready to go! 🚀**
