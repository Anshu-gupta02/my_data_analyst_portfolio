# Using EmailJS with Your Portfolio Contact Form

This guide explains how to set up and use EmailJS with the contact form in your portfolio website.

## What is EmailJS?

EmailJS is a service that allows you to send emails directly from your client-side JavaScript code without the need for a backend server. It's perfect for contact forms on portfolio websites.

## Setup Steps

1. **Create an EmailJS Account**
   - Sign up at [https://www.emailjs.com/](https://www.emailjs.com/) (the free tier allows 200 emails per month)

2. **Add an Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the instructions to connect your email account

3. **Create an Email Template**
   - In your EmailJS dashboard, go to "Email Templates"
   - Click "Create New Template"
   - Design your email template using the variables from the contact form:
     - `{{from_name}}`: The sender's name
     - `{{from_email}}`: The sender's email address
     - `{{subject}}`: The email subject
     - `{{message}}`: The message content
   - Save your template

4. **Get Your Credentials**
   - Service ID: Found in the "Email Services" section
   - Template ID: Found in the "Email Templates" section
   - Public Key: Found in the "Account" section under "API Keys"

5. **Configure Your Environment Variables**
   - Copy `.env.example` to `.env` in your project root
   - Fill in your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Testing Your Setup

1. Start your development server:
   ```
   npm run dev
   ```

2. Navigate to the Contact section of your portfolio

3. Fill out the contact form and submit it

4. Check your email inbox to verify the email was sent correctly

## Troubleshooting

- **Emails not sending**: Double-check your credentials in the `.env` file
- **Error in the console**: Check that your template variables match the form field names
- **Rate limit reached**: The free plan has a limit of 200 emails per month

## Security Note

EmailJS is secure for portfolio contact forms, but your public key is visible in the client-side code. This is normal and acceptable for this use case, but don't use EmailJS for sensitive communications.
