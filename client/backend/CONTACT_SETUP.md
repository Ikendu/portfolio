# Contact Form Setup Guide

## Database Setup

1. **Run the SQL query** to create the contacts table:

   ```sql
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

2. Or run the provided SQL file: `contact_table.sql`

## Backend Setup

### Install PHPMailer

Navigate to your backend directory and install PHPMailer via Composer:

```bash
cd backend
composer require phpmailer/phpmailer
```

### Configure Email Settings

Edit `api/submit-contact.php` and update the email configuration:

```php
$mail->Host = 'smtp.gmail.com'; // Your SMTP server
$mail->Username = 'your-email@gmail.com'; // Your email
$mail->Password = 'your-app-password'; // App-specific password
```

**For Gmail:**

1. Enable 2-Factor Authentication
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the generated password in the configuration

**For other providers:**

- Contact provider for SMTP credentials

### Update Admin Email

Change the admin email in `api/submit-contact.php`:

```php
$mail->addAddress('your-admin-email@example.com', 'Your Name');
```

## Frontend Setup

The Contact component is already configured to send to:

- `https://portfolio.morelinks.com.ng/api/submit-contact.php`

### Npm Installation

Remove the old emailjs dependency:

```bash
npm uninstall @emailjs/browser
npm install
```

## API Endpoints

### Submit Contact Form

**POST** `/api/submit-contact.php`

Request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "Your message here"
}
```

Response:

```json
{
  "success": true,
  "message": "Message sent successfully!",
  "contact_id": 1
}
```

### Get Contacts (Admin)

**GET** `/api/get-contacts.php?token=your-secret-admin-token&status=new&limit=50&offset=0`

**Parameters:**

- `token` (required): Admin authentication token
- `status` (optional): Filter by status (new, read, replied)
- `limit` (optional): Number of records (default: 50)
- `offset` (optional): Pagination offset (default: 0)

### Update Contact Status (Admin)

**POST** `/api/update-contact-status.php`

Request body:

```json
{
  "id": 1,
  "status": "read"
}
```

## Features

✅ Contact form with name, email, phone, and message
✅ Database storage of all contacts
✅ Email notifications to admin
✅ Confirmation email to user
✅ Contact ID tracking
✅ IP address logging
✅ Status management (new, read, replied)
✅ Admin API endpoints
✅ CORS support
✅ Input sanitization
✅ Email validation

## Security Considerations

1. **Change the admin token** in `get-contacts.php` to a secure value
2. **Use HTTPS** in production
3. **Validate all inputs** (already done in the code)
4. **Use environment variables** for sensitive credentials (recommended for production)
5. **Implement rate limiting** to prevent spam
6. **Use app-specific passwords** for email authentication

## Troubleshooting

### "SMTP connection failed"

- Check SMTP credentials
- Verify firewall isn't blocking port 587
- Check if 2FA is enabled (for Gmail)

### "Database connection failed"

- Verify database credentials in `config.php`
- Check database server is running

### "Message not saving"

- Verify contacts table exists
- Check file permissions on uploads directory

### "Email not sending but message saved"

- This is normal - the message is still saved even if email fails
- Check SMTP credentials and error logs
