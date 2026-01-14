# Portfolio Backend - Quick Start

## What's Included

### Database Tables

1. **testimonials** - Stores user testimonials
2. **contacts** - Stores contact form submissions

### API Endpoints

#### Contact Form

- `POST /api/submit-contact.php` - Submit contact form
- `GET /api/get-contacts.php` - Retrieve contacts (admin)
- `POST /api/update-contact-status.php` - Update contact status (admin)

#### Testimonials

- `POST /api/submit-testimonial.php` - Submit testimonial
- `GET /api/testimonials.php` - Get all testimonials
- `POST /api/update-testimonial.php` - Update testimonial (admin)
- `POST /api/delete-testimonial.php` - Delete testimonial (admin)
- `POST /api/update-status.php` - Update testimonial status (admin)

## Installation Steps

### 1. Database Setup

```bash
mysql -u username -p < database.sql
mysql -u username -p < contact_table.sql
```

### 2. Install Dependencies

```bash
composer install
```

### 3. Configuration

Edit `config.php` with your database credentials:

```php
define('DB_HOST', 'localhost');
define('DB_USER', 'your_username');
define('DB_PASSWORD', 'your_password');
define('DB_NAME', 'your_database');
```

### 4. Email Configuration

For contact form emails, edit `api/submit-contact.php`:

```php
$mail->Host = 'smtp.gmail.com';
$mail->Username = 'your-email@gmail.com';
$mail->Password = 'your-app-password';
$mail->addAddress('admin@example.com', 'Admin Name');
```

### 5. Admin Access

In `api/get-contacts.php`, set a secure admin token:

```php
$admin_token = 'your-super-secret-token-here';
```

## Environment Variables (Recommended)

Create a `.env` file:

```
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@example.com
ADMIN_TOKEN=your-secret-token
```

Then load in `config.php`:

```php
require_once __DIR__ . '/.env.local';
```

## Testing

### Test Contact Form

```bash
curl -X POST http://localhost/api/submit-contact.php \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "message": "Test message"
  }'
```

### Test Get Contacts

```bash
curl "http://localhost/api/get-contacts.php?token=your-token&limit=10"
```

## File Structure

```
backend/
├── config.php                    # Database configuration
├── database.sql                  # Testimonials table schema
├── contact_table.sql             # Contacts table schema
├── CONTACT_SETUP.md              # Contact form setup guide
├── api/
│   ├── submit-contact.php        # Submit contact form
│   ├── get-contacts.php          # Get contacts (admin)
│   ├── update-contact-status.php # Update contact status
│   ├── submit-testimonial.php    # Submit testimonial
│   ├── testimonials.php          # Get testimonials
│   ├── update-testimonial.php    # Update testimonial
│   ├── delete-testimonial.php    # Delete testimonial
│   └── update-status.php         # Update testimonial status
└── uploads/
    └── testimonials/             # Uploaded testimonial images
```

## Security Best Practices

1. **Never commit credentials** - Use environment variables
2. **Validate all inputs** - Already implemented with `sanitize()`
3. **Use HTTPS** in production
4. **Implement CORS** properly - Currently allows all origins (update for production)
5. **Rate limiting** - Consider implementing to prevent spam/abuse
6. **Use prepared statements** - Already done in all queries
7. **Keep dependencies updated** - Run `composer update` regularly

## Troubleshooting

| Issue                      | Solution                                         |
| -------------------------- | ------------------------------------------------ |
| Database connection failed | Check credentials in config.php                  |
| SMTP connection failed     | Verify email credentials and SMTP settings       |
| 405 Method Not Allowed     | Use correct HTTP method (POST/GET)               |
| 401 Unauthorized           | Check admin token for API endpoints              |
| CORS errors                | Update Access-Control-Allow-Origin in config.php |

## Support

For issues with specific endpoints, check the respective PHP file comments.

For email setup help:

- Gmail: https://support.google.com/accounts/answer/185833
- Other providers: Contact your hosting provider

---

Last Updated: January 2026
Portfolio Owner: David Aniede
