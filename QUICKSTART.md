# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Your portfolio will be running at `http://localhost:5173`

### 3. Customize Your Content

Update these files with your information:

#### Personal Info (5 minutes)
- `src/components/Navbar.jsx` - Update LinkedIn URL
- `src/components/Contact.jsx` - Update email and LinkedIn
- `src/components/Hero.jsx` - Customize introduction

#### Projects (Already configured!)
Your GitHub repositories are already integrated in `src/components/Projects.jsx`

## 📦 What's Included

✅ Animated asteroid background with dark blue theme  
✅ Responsive navigation bar  
✅ Hero section with code snippet animation  
✅ About section with skill badges  
✅ Projects section with GitHub repos  
✅ Contact form with social links  
✅ CV download functionality  
✅ AWS S3 deployment guide  

## 🎨 Theme Colors

The portfolio uses a dark blue space theme:
- Primary: `#4a9eff` (bright blue)
- Background: `#0a1128` (deep blue)
- Accent: `#80bdff` (light blue)
- Text: `#ffffff` and `#b0c4de`

## 🔧 Common Customizations

### Change Your Name
Find and replace "Victor Castañeda" in:
- `index.html` (page title)
- `src/components/Navbar.jsx`
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`

### Update Email
Find and replace "your.email@example.com" in:
- `src/components/Navbar.jsx`
- `src/components/Contact.jsx`

### Modify Skills
Edit the `skills` array in `src/components/About.jsx`

### Change Asteroid Count
Edit line 25 in `src/components/AsteroidBackground.jsx`:
```javascript
for (let i = 0; i < 100; i++) {  // Change 100 to desired number
```

## 📱 Test Responsiveness

Open Chrome DevTools (F12) and test these views:
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

## 🚀 Deploy to AWS S3

See `AWS_DEPLOYMENT_GUIDE.md` for complete instructions.

**Quick deploy:**
```bash
deploy.bat YOUR-BUCKET-NAME
```

## ❓ Need Help?

Check the full `README.md` for detailed documentation.

## 📋 Checklist Before Deploying

- [ ] Updated personal information (name, email, LinkedIn)
- [ ] Placed CV PDF in root folder as `victor_castaneda-4-1.pdf`
- [ ] Tested on desktop, tablet, and mobile
- [ ] Built project successfully (`npm run build`)
- [ ] Configured AWS CLI with credentials
- [ ] Created S3 bucket
- [ ] Applied bucket policy for public access

Enjoy your new portfolio! 🎉
