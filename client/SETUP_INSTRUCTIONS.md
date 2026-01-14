# 🚀 Complete Contact Form Setup Guide

## Overview

Contact form now uses **PHPMailer** and **MySQL** instead of EmailJS. All submissions are:

- ✅ Saved to database
- ✅ Emailed to admin
- ✅ Confirmation sent to user
- ✅ Tracked with contact ID
- ✅ Status managed (new/read/replied)

---

## Step-by-Step Setup

### Step 1: Database Migration

Run this SQL query in your MySQL database:

```sql
-- Execute the migration script
source /path/to/contact_table.sql

-- Or manually:
CREATE TABLE IF NOT EXISTS contacts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    message LONGTEXT NOT NULL,
    ip_address VARCHAR(45),
    user_agent VARCHAR(500),
    status ENUM('new', 'read', 'replied') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_status (status),
    INDEX idx_email (email),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

### Step 2: Install PHPMailer

```bash
cd backend
composer require phpmailer/phpmailer
```

### Step 3: Configure Email Settings

Edit `backend/api/submit-contact.php` (around line 60-70):

```php
// Server settings
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';           // ← Change this
$mail->SMTPAuth = true;
$mail->Username = 'your-email@gmail.com'; // ← Change this
$mail->Password = 'your-app-password';    // ← Change this
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

// Recipients
$mail->setFrom($email, $name);
$mail->addAddress('davidaniedexp@gmail.com', 'David Aniede'); // ← Change this
```

### Step 4: Set Admin Token

Edit `backend/api/get-contacts.php` (around line 8):

```php
$admin_token = 'your-secret-admin-token-12345'; // ← Change to secure value
```

### Step 5: Frontend (Already Done ✓)

- ✅ Removed `@emailjs/browser` from package.json
- ✅ Updated Contact.jsx to use PHP endpoint
- ✅ Ready to deploy

### Step 6: Update NPM

```bash
npm install
```

---

## 📧 Gmail Setup (Recommended)

### For Gmail Users:

1. Go to: https://myaccount.google.com/apppasswords
2. Select "Mail" and "Windows Computer" (or your device)
3. Generate app password
4. Copy the generated 16-character password
5. Paste in `submit-contact.php` as `$mail->Password`

**Important:** This is different from your regular Gmail password!

### Alternative Email Providers:

- **Office 365:** SMTP host: smtp.office365.com, Port: 587
- **SendGrid:** SMTP host: smtp.sendgrid.net, Port: 587
- **AWS SES:** Check AWS documentation
- **Your hosting provider:** Ask support for SMTP details

---

## 🔧 Testing

### Test 1: Submit Form via Frontend

1. Go to Contact section
2. Fill form and click "Send Message"
3. Should see "Message sent successfully!"

### Test 2: Submit via API

```bash
curl -X POST http://localhost/api/submit-contact.php \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "message": "Testing contact form"
  }'
```

Expected response:

```json
{
  "success": true,
  "message": "Message sent successfully! I will get back to you soon.",
  "contact_id": 1
}
```

### Test 3: Check Database

```sql
SELECT * FROM contacts ORDER BY created_at DESC LIMIT 5;
```

### Test 4: Get Contacts (Admin)

```bash
curl "http://localhost/api/get-contacts.php?token=your-secret-admin-token-12345&limit=10"
```

---

## 📂 File Structure

Created/Modified:

```
client/
├── src/components/
│   └── Contact.jsx                  # Updated ✓
├── package.json                     # Updated ✓
└── CONTACT_IMPLEMENTATION.md        # This file

backend/
├── config.php                       # Existing (no changes needed)
├── contact_table.sql                # Created
├── CONTACT_SETUP.md                 # Created
├── BACKEND_README.md                # Created
└── api/
    ├── submit-contact.php           # Created
    ├── get-contacts.php             # Created
    └── update-contact-status.php    # Created
```

---

## 🔒 Security Checklist

- [ ] Changed admin token to secure value
- [ ] Using app-specific password for Gmail (not main password)
- [ ] Updated admin email recipient
- [ ] HTTPS enabled in production
- [ ] Database credentials in config.php (not in version control)
- [ ] Input validation enabled in all APIs
- [ ] Prepared statements used (SQL injection protected)

---

## 🐛 Troubleshooting

### "SMTP Connect Error"

```
Error: SMTP connect() failed
```

**Solution:**

- Check SMTP host is correct
- Check port is 587
- Check credentials are correct
- Verify firewall allows outbound on port 587

### "Authentication failed"

```
Error: 535 Authentication failed
```

**Solution:**

- For Gmail: Use app password, not main password
- Verify email is correct
- Check password has no extra spaces

### "Connection refused"

```
Error: Connection refused
```

**Solution:**

- Check if using Gmail with app password
- Check SMTP server is online
- Check firewall rules

### "No email received"

**Solutions:**

1. Check email not in spam folder
2. Check admin email in code is correct
3. Check database shows contact was saved
4. Check SMTP error logs

### Database Error

```
Database connection failed
```

**Solution:**

- Verify contact_table.sql was executed
- Check table exists: `SHOW TABLES;`
- Verify database user permissions

---

## 📊 Email Response Examples

### Admin Notification Email

```
Subject: New Contact Message from John Doe

From: John Doe
Email: john@example.com
Phone: +1234567890
Contact ID: #1

Message:
Hello, I'd like to discuss a project...

IP Address: 192.168.1.1
```

### User Confirmation Email

```
Subject: We received your message

Hi John Doe,

Thank you for reaching out. I've received your message and will
get back to you as soon as possible.

Your Reference ID: #1

Best regards,
David Aniede
```

---

## 🚀 Deployment Checklist

### Before Deploying:

- [ ] Database migration completed
- [ ] PHPMailer installed
- [ ] SMTP credentials configured
- [ ] Admin token set
- [ ] All emails configured
- [ ] Local testing successful

### Deployment Steps:

1. Commit all changes
2. Push to production
3. Run database migration on production
4. Run `npm install` on production
5. Test contact form on live site
6. Monitor email logs

---

## 📞 Support & Monitoring

### Monitor Contacts:

```php
// Query to check new contacts
SELECT * FROM contacts WHERE status = 'new' ORDER BY created_at DESC;
```

### Check Email Logs:

Contact form saves all submissions, so you can track:

- When message was received
- Who sent it (email)
- Their phone number
- IP address they used
- Current status

### Update Status Manually:

```bash
curl -X POST http://localhost/api/update-contact-status.php \
  -H "Content-Type: application/json" \
  -d '{"id": 1, "status": "replied"}'
```

---

## 📝 Configuration Files

### `config.php` - Already configured for your database

```php
define('DB_HOST', 'localhost');
define('DB_USER', 'morelink_port');
define('DB_PASSWORD', '96521Aa@!@!@!');
define('DB_NAME', 'morelink_portfolio');
```

### `.env` (Optional, for production)

```
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=davidaniedexp@gmail.com
ADMIN_TOKEN=your-secret-token
```

---

## ✅ Complete!

Your contact form is now:

- **Database-backed** - All submissions saved
- **Email-enabled** - Admin & user notifications
- **Production-ready** - Secure and validated
- **Tracked** - Contact ID and status management
- **Monitored** - IP logging and user agent tracking

**Happy deploying! 🎉**

---

_Last updated: January 14, 2026_
_Questions? Check CONTACT_SETUP.md or BACKEND_README.md_
