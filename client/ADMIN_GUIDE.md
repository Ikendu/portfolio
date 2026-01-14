# Admin Panel Documentation

## Access Admin Panel

Navigate to: `https://portfolio.morelinks.com.ng/admin` or click the **Admin** link in the navbar.

## Login

**Default Admin Password:** `Admin@2024`

⚠️ **IMPORTANT:** Change this password immediately in the admin page! Edit the password in `/src/components/Admin.jsx`

## Features

### 1. **View All Testimonials**

- Displays all testimonials in a list format
- Shows testimonial details (name, role, company, feedback)
- Displays status of each testimonial

### 2. **Search Testimonials**

Search by:

- Testimonial author name
- Company name
- Feedback content

### 3. **Filter by Status**

- **All** - Show all testimonials
- **Pending** - Testimonials awaiting approval
- **Approved** - Published testimonials (visible on main page)
- **Rejected** - Declined testimonials

### 4. **Edit Testimonials**

1. Click **Edit** button on any testimonial
2. Modify: Name, Role, Company, or Feedback
3. Click **Save** to update
4. Click **Cancel** to discard changes

### 5. **Change Status**

- Click the status dropdown on any testimonial
- Select: Pending, Approved, or Rejected
- Changes apply immediately
- **Only "Approved" testimonials appear on the main portfolio**

### 6. **Delete Testimonials**

1. Click **Delete** button
2. Confirm deletion when prompted
3. Testimonial and associated image are removed

### 7. **Statistics Dashboard**

View quick stats:

- Total Testimonials
- Approved Count
- Pending Review Count
- Rejected Count

## API Endpoints

The admin panel uses these backend endpoints:

### GET Testimonials

```
GET https://portfolio.morelinks.com.ng/api/testimonials.php?limit=100
```

### Update Testimonial

```
POST https://portfolio.morelinks.com.ng/api/update-testimonial.php

Body:
{
  "id": 1,
  "name": "John Doe",
  "role": "Project Manager",
  "company": "Tech Company",
  "feedback": "Great work!"
}
```

### Update Status

```
POST https://portfolio.morelinks.com.ng/api/update-status.php

Body:
{
  "id": 1,
  "status": "approved" // or "pending", "rejected"
}
```

### Delete Testimonial

```
POST https://portfolio.morelinks.com.ng/api/delete-testimonial.php

Body:
{
  "id": 1
}
```

## Workflow Example

1. **User submits testimonial** → Status: `pending`
2. **Admin reviews** → Click **Edit** if needed
3. **Admin approves** → Change status to `approved`
4. **Testimonial appears** on main portfolio homepage
5. **Or reject** → Change status to `rejected`
6. **Delete if needed** → Click **Delete** button

## Security Notes

- Password is stored in frontend code (change in Admin.jsx)
- For production: Implement proper backend authentication
- Consider adding IP whitelist
- Use HTTPS only
- Add rate limiting to prevent brute force

## Future Enhancements

- [ ] Backend authentication system
- [ ] Password reset functionality
- [ ] Testimonial approval notifications
- [ ] Bulk actions (approve/reject multiple)
- [ ] Export testimonials to CSV
- [ ] Testimonial analytics
- [ ] Admin activity log
- [ ] Two-factor authentication
