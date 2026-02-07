# Portfolio Deployment Guide

This guide will help you deploy your Salesforce Portfolio website to various hosting platforms.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest for Next.js)

**Why Vercel?**
- Made by the creators of Next.js
- Free tier with excellent performance
- Automatic deployments from GitHub
- Zero configuration needed
- Custom domain support

#### Steps to Deploy on Vercel:

1. **Prepare Your Code:**
   ```bash
   # Make sure your code is ready
   npm run build
   ```

2. **Push to GitHub:**
   - Create a GitHub account if you don't have one
   - Create a new repository
   - Push your code:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
     git push -u origin main
     ```

3. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site will be live at `your-project.vercel.app`

4. **Add Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

---

### Option 2: Netlify

**Why Netlify?**
- Free tier available
- Easy GitHub integration
- Good for static sites

#### Steps to Deploy on Netlify:

1. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Or use: `out` (if using static export)

2. **Deploy:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "New site from Git"
   - Connect your repository
   - Configure build settings
   - Click "Deploy site"

**Note:** For Next.js on Netlify, you may need to use `next export` for static sites or use Netlify's Next.js runtime.

---

### Option 3: GitHub Pages (Static Export)

**Steps:**

1. **Update next.config.js:**
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true
     }
   }
   ```

2. **Build and Export:**
   ```bash
   npm run build
   # This creates an 'out' folder
   ```

3. **Deploy:**
   - Push the `out` folder to GitHub Pages
   - Or use GitHub Actions for automatic deployment

---

### Option 4: AWS Amplify

**Steps:**

1. Go to [aws.amazon.com/amplify](https://aws.amazon.com/amplify)
2. Sign in with AWS account
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
5. Deploy

---

### Option 5: Railway

**Steps:**

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create new project
4. Connect your repository
5. Railway auto-detects Next.js
6. Deploy

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All images are in the `public` folder
- [ ] Your profile image is at `public/images/profile/saikat-ghosh.jpg`
- [ ] Environment variables are set (if any)
- [ ] `package.json` has correct scripts
- [ ] Build runs successfully: `npm run build`
- [ ] No console errors
- [ ] All links work correctly

---

## 🔧 Build Configuration

### For Static Export (GitHub Pages, Netlify Static):

Update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Required for static export
    domains: ['media.licdn.com', 'linkedin.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'https',
        hostname: '**.licdn.com',
      },
    ],
  },
}

module.exports = nextConfig
```

Then build:
```bash
npm run build
```

---

## 🌐 Custom Domain Setup

### For Vercel:

1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records:
   - Add CNAME: `www` → `cname.vercel-dns.com`
   - Or A record: `@` → Vercel IP addresses

### For Netlify:

1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records as shown

---

## 📝 Environment Variables

If you have environment variables:

1. **Vercel:** Project Settings → Environment Variables
2. **Netlify:** Site Settings → Environment Variables
3. **AWS Amplify:** App Settings → Environment Variables

---

## 🎯 Recommended: Vercel Deployment Steps

### Step-by-Step:

1. **Create GitHub Repository:**
   ```bash
   git init
   git add .
   git commit -m "Ready for deployment"
   ```

2. **Push to GitHub:**
   - Create repo on GitHub
   - Push your code

3. **Deploy on Vercel:**
   - Visit vercel.com
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your repository
   - Click "Deploy"
   - Done! 🎉

4. **Get Your Live URL:**
   - Your site will be at: `your-project-name.vercel.app`
   - Share this URL with others!

---

## 🐛 Troubleshooting

### Build Fails:
- Check `package.json` scripts
- Ensure all dependencies are listed
- Run `npm install` locally first

### Images Not Loading:
- Verify images are in `public` folder
- Check image paths are correct
- For static export, ensure `images.unoptimized: true`

### 404 Errors:
- Check routing configuration
- Verify all pages exist
- Check `next.config.js` settings

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Netlify Docs: https://docs.netlify.com

---

## ✅ Quick Start (Vercel - Recommended)

**Fastest way to go live:**

1. Push code to GitHub
2. Go to vercel.com
3. Import repository
4. Deploy
5. Share your live URL!

**That's it! Your portfolio will be live in minutes.** 🚀
