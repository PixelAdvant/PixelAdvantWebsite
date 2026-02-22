# Forms Setup Guide

This guide explains how to set up the three new forms and enable email notifications.

## Forms Created

### 1. **Client Request Form** (Contact Us)
- **Location:** `/contact` page
- **Features:** Name, Email, Phone, Company, Message
- **Email:** Admin receives notification at `sonu.rahul4evr@gmail.com`
- **Status:** ✅ Ready to use (requires EmailJS setup)

### 2. **Product Demo Request Form**
- **Location:** Home page (Hero section & Services section)
- **Button:** "Request Demo" button on home page
- **Features:** Full Name, Email, Phone, Company, Service Interest, Message
- **Opens as:** Modal popup
- **Email:** Admin receives notification + User confirmation
- **Status:** ✅ Ready to use (requires EmailJS setup)

### 3. **Job Application Form**
- **Location:** `/jobs` page (Careers tab)
- **Features:** Job Listings + Application Form
- **Available Positions:** 6 open positions
- **Features:** Full Name, Email, Phone, Experience, LinkedIn, Cover Letter
- **Email:** Admin receives application + Applicant confirmation
- **Status:** ✅ Ready to use (requires EmailJS setup)

---

## Email Notifications Setup

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email

### Step 2: Set Up Gmail Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add Service** → Select **Gmail**
3. Connect your Gmail account (gmail.com or Google Workspace)
4. Click **Create Service**
5. Note your **Service ID** (e.g., `service_xxxxx`)

### Step 3: Create Email Templates

Create 4 email templates in EmailJS dashboard → **Email Templates**:

#### Template 1: Client Request
- **Template Name:** `template_client_request`
- **Subject:** `New Client Request from {{from_name}}`
- **Email Variables:**
  - `to_email` (recipient)
  - `from_name` (client name)
  - `from_email` (client email)
  - `phone` (client phone)
  - `company` (company name)
  - `message` (request message)
  - `subject` (inquiry subject)

#### Template 2: Demo Request
- **Template Name:** `template_demo_request`
- **Subject:** `New Demo Request - {{full_name}}`
- **Email Variables:**
  - `to_email`
  - `full_name`
  - `user_email`
  - `phone`
  - `company_name`
  - `service_interest`
  - `message`

#### Template 3: Job Application
- **Template Name:** `template_job_application`
- **Subject:** `New Job Application - {{position}}`
- **Email Variables:**
  - `to_email`
  - `full_name`
  - `applicant_email`
  - `phone`
  - `position`
  - `experience`
  - `linkedin`
  - `cover_letter`

#### Template 4: Confirmation Email (Universal)
- **Template Name:** `template_confirmation`
- **Subject:** `{{subject}}`
- **Email Variables:**
  - `to_email`
  - `user_name`
  - `subject`

### Step 4: Get Your Credentials
1. In EmailJS dashboard → **Account** → **API Keys**
2. Copy your **Public Key**
3. You already have your **Service ID** from Step 2

### Step 5: Update emailConfig.ts

Edit `src/lib/emailConfig.ts`:

```typescript
const SERVICE_ID = 'your_service_id_here'; // Replace with your Service ID
const PUBLIC_KEY = 'your_public_key_here'; // Replace with your Public Key
```

### Step 6: Update Admin Email

If you want to use a different admin email, update:

```typescript
const ADMIN_EMAIL = 'your-admin@gmail.com'; // Update this
```

---

## Testing the Forms

### Test Contact Form
1. Go to `/contact`
2. Fill out the form
3. Click "Send Message"
4. You should receive an email at your admin email

### Test Demo Request
1. Go to `/` (home page)
2. Scroll to hero section
3. Click "Request Demo" button
4. Fill out the modal form
5. Click "Request Demo"
6. Check admin email inbox

### Test Job Application
1. Go to `/jobs`
2. Select a job position
3. Fill out the application form
4. Click "Submit Application"
5. Check admin email inbox

---

## Email Variables Reference

### Contact Request Email Variables
```
{{to_email}} - Admin email
{{from_name}} - Client name
{{from_email}} - Client email
{{phone}} - Client phone
{{company}} - Company name
{{message}} - Request message
{{subject}} - Subject line
```

### Demo Request Email Variables
```
{{to_email}} - Admin email
{{full_name}} - Requester name
{{user_email}} - Requester email
{{phone}} - Requester phone
{{company_name}} - Company name
{{service_interest}} - Service they're interested in
{{message}} - Additional message
```

### Job Application Email Variables
```
{{to_email}} - Admin email
{{full_name}} - Applicant name
{{applicant_email}} - Applicant email
{{phone}} - Applicant phone
{{position}} - Position applied for
{{experience}} - Years of experience
{{linkedin}} - LinkedIn profile URL
{{cover_letter}} - Cover letter content
```

---

## Troubleshooting

### Issue: "EmailJS not properly configured"
- **Solution:** Make sure your Service ID and Public Key are correct in `emailConfig.ts`

### Issue: Emails not being sent
1. Check that templates are named exactly as specified
2. Verify Gmail service is active in EmailJS dashboard
3. Check browser console for errors (F12 → Console tab)
4. Verify email templates have correct variable names

### Issue: Templates not receiving variables
- Make sure template variable names match exactly (case-sensitive)
- Use double curly braces: `{{variable_name}}`

---

## Free Plan Limits

EmailJS Free Plan includes:
- 200 emails/month
- Up to 5 email templates
- Up to 1,000 API requests/month

For higher limits, upgrade to a paid plan.

---

## Frontend Code Files

- **Contact Form:** `src/components/sections/contact/contactForm.tsx`
- **Demo Modal:** `src/components/sections/demoRequest/demoRequestModal.tsx`
- **Job Listings:** `src/components/sections/jobs/jobListings.tsx`
- **Job Application Form:** `src/components/sections/jobs/jobApplicationForm.tsx`
- **Jobs Page:** `src/pages/jobs.tsx`
- **Email Configuration:** `src/lib/emailConfig.ts`
- **Routes:** `src/route/router.tsx`

---

## Menu Navigation

The "Careers" link has been added to the main navigation menu, pointing to `/jobs`.

---

## Next Steps

1. ✅ Complete the EmailJS setup above
2. ✅ Update credentials in `emailConfig.ts`
3. ✅ Test all three forms
4. ✅ Deploy to production

