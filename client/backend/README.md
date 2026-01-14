# Testimonial System - Quick Start

## What's New

Your portfolio now has a complete testimonial system with:

- ✅ **Frontend Carousel** - Auto-rotating, draggable testimonial cards
- ✅ **Submission Form** - Beautiful form for users to submit feedback
- ✅ **Backend API** - PHP endpoints for storing and retrieving testimonials
- ✅ **MySQL Database** - Persistent storage with image support

## File Structure

```
portfolio/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Testimonials.jsx (Updated - now a carousel)
│   │   │   └── SubmitTestimonial.jsx (New - submission form)
│   │   └── App.jsx (Updated - routing)
│   └── package.json
│
└── backend/
    ├── api/
    │   ├── submit-testimonial.php (New - handle form submissions)
    │   ├── testimonials.php (New - get testimonials from DB)
    │   └── uploads/
    │       └── testimonials/ (Auto-created - image storage)
    ├── config.php (New - database configuration)
    ├── database.sql (New - database schema)
    └── DEPLOYMENT.md (Full setup guide)
```

## Quick Setup (5 minutes)

### Frontend (Already Done!)

Just run the dev server:

```bash
cd client
npm install
npm run dev
```

Visit: `http://localhost:5173/submit-testimonial` to test the form

### Backend Setup

#### 1. Create Database (MySQL)

```bash
# Option A: Command line
mysql -u root -p < backend/database.sql

# Option B: Via phpMyAdmin
# 1. Create database: portfolio_testimonials
# 2. Import backend/database.sql
```

#### 2. Update config.php

Edit `backend/config.php` with your database credentials:

```php
define('DB_USER', 'your_username');
define('DB_PASSWORD', 'your_password');
define('DB_NAME', 'portfolio_testimonials');
```

#### 3. Create Uploads Directory

```bash
mkdir -p backend/api/uploads/testimonials
chmod 777 backend/api/uploads/testimonials
```

#### 4. Test Backend

```bash
# Get testimonials
curl http://localhost/portfolio/backend/api/testimonials.php

# Submit testimonial
curl -X POST http://localhost/portfolio/backend/api/submit-testimonial.php \
  -F "name=John Doe" \
  -F "role=Developer" \
  -F "company=My Company" \
  -F "feedback=Amazing work!" \
  -F "image=@your_image.jpg"
```

## Features

### Testimonials Carousel

- **Auto-rotate** every 6 seconds
- **Draggable** - swipe/drag to browse
- **Responsive** - adapts to all screen sizes
- **Custom arrows** - manual navigation
- **Fetch from DB** - displays approved testimonials
- **"Share Feedback" button** - links to submission form

### Submission Form

- **5 fields** - name, role, company, feedback, image
- **Image upload** - max 2MB (JPG, PNG, GIF)
- **Form validation** - client-side checks
- **Success feedback** - confirmation message
- **Error handling** - user-friendly error messages
- **Auto-redirect** - button to return to testimonials

### Backend API

- **GET /api/testimonials.php** - Fetch all testimonials
  - Pagination support (page, limit)
  - Returns image URLs
- **POST /api/submit-testimonial.php** - Submit new testimonial
  - Validates all inputs
  - Handles image uploads
  - Returns created testimonial data

## Frontend Routes

- `/` - Main portfolio (includes testimonial carousel)
- `/submit-testimonial` - Testimonial submission form

## Database Schema

### testimonials table

| Column     | Type         | Notes                                        |
| ---------- | ------------ | -------------------------------------------- |
| id         | INT          | Primary key, auto-increment                  |
| name       | VARCHAR(255) | User's name                                  |
| role       | VARCHAR(255) | Job title/role                               |
| company    | VARCHAR(255) | Company name                                 |
| feedback   | LONGTEXT     | The testimonial text                         |
| image_path | VARCHAR(500) | Path to uploaded image                       |
| status     | ENUM         | pending/approved/rejected (default: pending) |
| created_at | TIMESTAMP    | Auto-set on creation                         |
| updated_at | TIMESTAMP    | Auto-updated on modification                 |

## To Deploy to portfolio.morelinks.com.ng

Follow the full guide: `backend/DEPLOYMENT.md`

Quick summary:

1. Upload `backend/` folder via FTP to `public_html/portfolio/`
2. Create database via cPanel
3. Update `config.php` with real credentials
4. Set proper permissions (chmod)
5. Test endpoints
6. Build and deploy frontend

## Sample Response Format

### Getting Testimonials

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Alex Johnson",
      "role": "Project Manager",
      "company": "Tech StartUp",
      "feedback": "David delivered exceptional work...",
      "image": "https://portfolio.morelinks.com.ng/api/uploads/testimonials/...",
      "avatar": null,
      "created_at": "2026-01-12 10:30:00"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 15,
    "total_pages": 2
  }
}
```

### Submitting Testimonial

```json
{
  "success": true,
  "message": "Testimonial submitted successfully!",
  "data": {
    "id": 4,
    "name": "Jane Smith",
    "role": "CTO",
    "company": "Tech Corp",
    "feedback": "Amazing development skills...",
    "image": "https://portfolio.morelinks.com.ng/api/uploads/testimonials/...",
    "created_at": "2026-01-13 14:22:15"
  }
}
```

## Troubleshooting

### Form doesn't submit

- Check browser console for errors
- Verify backend endpoint URL (should be HTTPS for production)
- Ensure CORS headers are correct in `config.php`

### Images not uploading

- Check `/api/uploads/testimonials/` directory exists
- Verify permissions are 777
- Check file size (max 2MB)

### Database connection fails

- Verify credentials in `config.php`
- Ensure MySQL is running
- Check database and user were created

## What's Next?

1. ✅ Test locally
2. ✅ Deploy backend to portfolio.morelinks.com.ng
3. ✅ Deploy frontend
4. ✅ Collect real testimonials!
5. ✅ Monitor submissions
6. ✅ Approve/manage testimonials (via database)

Enjoy your new testimonial system! 🚀
