# Anshu Gupta Portfolio

A modern, responsive portfolio website showcasing expertise in data analysis, machine learning, and business intelligence. Built with React, TypeScript, Tailwind CSS, and Vite.

## ✨ Features

- 📱 Fully responsive design for all screen sizes
- 🚀 Interactive project showcase
- 📄 Downloadable resume
- 📝 Contact form with EmailJS integration
- ⚡ Optimized performance

## 🛠️ Tech Stack

- React 18 + TypeScript
- Tailwind CSS
- Vite
- EmailJS
- Vercel deployment

## 🚀 Getting Started

```bash
# Clone and install
git clone <repository-url>
cd Anshu-Gupta-portfolio
npm install

# Development
npm run dev

# Build for production
npm run build
```

## 📧 EmailJS Setup

This project uses EmailJS to handle contact form submissions. Follow these steps to set it up:

1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Create a new Email Service (Gmail, Outlook, or other)
3. Create an Email Template with the following variables:
   - `from_name` - Sender's name
   - `from_email` - Sender's email
   - `subject` - Email subject
   - `message` - Email message
4. Get your Service ID, Template ID, and Public Key from the EmailJS dashboard
5. Create a `.env` file in the root directory with the following variables:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🎨 Customization

- Update resume: Replace `public/Anshu_resume.pdf`
- Profile image: Update `public/profilePhoto.jpg`
- Content: Edit components in `src/components/`
- Email settings: Update your EmailJS credentials in the `.env` file

## 📄 License

This project is for personal portfolio use. Feel free to use as a template with proper attribution.

---

Built with React, TypeScript, Tailwind CSS, and Vite
