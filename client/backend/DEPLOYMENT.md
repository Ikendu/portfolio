# Portfolio Backend Setup Guide

## Overview

This guide covers setting up the testimonial backend with PHP and MySQL, including database creation, configuration, and deployment to your server.

## Prerequisites

- PHP 7.4+ installed on your server
- MySQL 5.7+ database server
- FTP/SFTP access to your server (portfolio.morelinks.com.ng)
- A domain with SSL certificate

## Local Development Setup

### 1. Database Setup

**Option A: Using MySQL Command Line**

```bash
mysql -u root -p < backend/database.sql
```

**Option B: Using phpMyAdmin**

1. Login to phpMyAdmin
2. Create new database: `portfolio_testimonials`
3. Import `backend/database.sql` file
4. Or manually create the table from `database.sql`

### 2. Configuration

Edit `backend/config.php` with your database credentials:

```php
define('DB_HOST', 'localhost');     // Your database host
define('DB_USER', 'root');          // Your MySQL username
define('DB_PASSWORD', '');          // Your MySQL password
define('DB_NAME', 'portfolio_testimonials');
define('DB_PORT', 3306);
```

### 3. Create Uploads Directory

```bash
mkdir -p backend/api/uploads/testimonials
chmod 755 backend/api/uploads/testimonials
```

### 4. Test Endpoints Locally

```bash
# Get testimonials
curl http://localhost:8000/backend/api/testimonials.php

# Submit testimonial (requires form data)
curl -X POST http://localhost:8000/backend/api/submit-testimonial.php \
  -F "name=John Doe" \
  -F "role=Developer" \
  -F "company=Tech Co" \
  -F "feedback=Great work!" \
  -F "image=@/path/to/image.jpg"
```

## Production Deployment to portfolio.morelinks.com.ng

### Step 1: Upload Backend Files

1. Connect via SFTP to your server
2. Navigate to your domain root directory
3. Create `portfolio` folder structure:
   ```
   public_html/
   ├── portfolio/
   │   ├── backend/
   │   │   ├── api/
   │   │   │   ├── submit-testimonial.php
   │   │   │   ├── testimonials.php
   │   │   │   └── uploads/
   │   │   │       └── testimonials/
   │   │   ├── config.php
   │   │   └── database.sql
   │   ├── client/ (React frontend)
   │   └── index.html
   ```

### Step 2: Create Remote Database

1. Login to cPanel or your hosting control panel
2. Go to MySQL Databases
3. Create database: `youruser_portfolio_testimonials`
4. Create user: `youruser_portfolio` with strong password
5. Grant all privileges to the user on the database

### Step 3: Update Configuration

Edit `/public_html/portfolio/backend/config.php` with remote database info:

```php
define('DB_HOST', 'localhost');
define('DB_USER', 'youruser_portfolio');
define('DB_PASSWORD', 'your_strong_password');
define('DB_NAME', 'youruser_portfolio_testimonials');
```

### Step 4: Import Database

Option A: SSH/Terminal

```bash
mysql -u youruser_portfolio -p youruser_portfolio_testimonials < backend/database.sql
# When prompted, enter the password you set
```

Option B: phpMyAdmin (via cPanel)

1. Open phpMyAdmin
2. Select your database
3. Click Import
4. Choose `database.sql` file
5. Click Go

### Step 5: Set Permissions

```bash
chmod 755 /public_html/portfolio/backend/
chmod 755 /public_html/portfolio/backend/api/
chmod 755 /public_html/portfolio/backend/api/uploads/
chmod 777 /public_html/portfolio/backend/api/uploads/testimonials/
chmod 644 /public_html/portfolio/backend/*.php
chmod 644 /public_html/portfolio/backend/api/*.php
```

### Step 6: Test Endpoints

```bash
# Test GET endpoint
curl https://portfolio.morelinks.com.ng/backend/api/testimonials.php

# Test POST endpoint
curl -X POST https://portfolio.morelinks.com.ng/backend/api/submit-testimonial.php \
  -F "name=Test User" \
  -F "role=Tester" \
  -F "company=Test Company" \
  -F "feedback=This is a test testimonial." \
  -F "image=@test-image.jpg"
```

## Frontend Integration

The React frontend is already configured to:

- Fetch testimonials from: `https://portfolio.morelinks.com.ng/api/testimonials.php`
- Submit testimonials to: `https://portfolio.morelinks.com.ng/api/submit-testimonial.php`

### Key Files

- `src/components/Testimonials.jsx` - Display carousel
- `src/components/SubmitTestimonial.jsx` - Submission form

## API Documentation

### GET /api/testimonials.php

Fetch all approved testimonials with pagination.

**Query Parameters:**

- `page` (optional, default: 1) - Page number
- `limit` (optional, default: 10, max: 100) - Items per page

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Alex Johnson",
      "role": "Project Manager",
      "company": "Tech StartUp",
      "feedback": "...",
      "image": "https://portfolio.morelinks.com.ng/api/uploads/testimonials/...",
      "avatar": null,
      "created_at": "2026-01-12 10:30:00"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 25,
    "total_pages": 3
  }
}
```

### POST /api/submit-testimonial.php

Submit a new testimonial.

**Form Data:**

- `name` (required, string) - Your name
- `role` (required, string) - Your job role
- `company` (required, string) - Your company
- `feedback` (required, string, min 10 chars) - Your feedback
- `image` (optional, file) - Profile image (max 2MB, jpg/png/gif)

**Response:**

```json
{
  "success": true,
  "message": "Testimonial submitted successfully!",
  "data": {
    "id": 4,
    "name": "John Doe",
    "role": "Developer",
    "company": "Tech Co",
    "feedback": "Great work!",
    "image": "https://portfolio.morelinks.com.ng/api/uploads/testimonials/...",
    "created_at": "2026-01-12 14:45:30"
  }
}
```

## Maintenance

### Review New Testimonials

Connect to your database and check:

```sql
SELECT * FROM testimonials WHERE status = 'pending';
```

Approve testimonials:

```sql
UPDATE testimonials SET status = 'approved' WHERE id = YOUR_ID;
```

### Backup Database

```bash
# Monthly backup
mysqldump -u youruser_portfolio -p youruser_portfolio_testimonials > backup_$(date +%Y%m%d).sql
```

### Monitor Uploads

Clean old images (optional - run monthly):

```bash
find /public_html/portfolio/backend/api/uploads/testimonials/ -type f -mtime +90 -delete
```

## Troubleshooting

### CORS Issues

If frontend can't reach backend, ensure config.php has:

```php
header('Access-Control-Allow-Origin: *');
```

### Image Upload Fails

1. Check directory permissions (should be 777)
2. Verify max upload size in php.ini: `upload_max_filesize = 10M`
3. Ensure `/api/uploads/testimonials/` directory exists

### Database Connection Error

1. Verify credentials in `config.php`
2. Check MySQL is running
3. Confirm database and user were created
4. Test connection: `mysql -u user -p -h host database_name`

### Form Submission Returns 405 Error

Ensure endpoints only accept POST (submit) or GET (retrieve) methods.

## Security Notes

1. **Sanitization**: All inputs are sanitized using mysqli prepared statements
2. **File Validation**: Images are validated by type and size
3. **CORS**: Configured to allow all origins (you can restrict to your domain)
4. **Status Field**: New testimonials default to 'pending' (optional approval workflow)

## Next Steps

1. ✅ Upload backend files to server
2. ✅ Create and import database
3. ✅ Update configuration with real credentials
4. ✅ Set proper file permissions
5. ✅ Test endpoints
6. ✅ Deploy React frontend
7. ✅ Monitor submissions

## Support

For issues or questions:

- Check server error logs: `/public_html/error_log`
- Review MySQL logs via cPanel
- Test endpoints using curl or Postman
