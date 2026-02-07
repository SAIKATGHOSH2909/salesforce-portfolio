# 🔐 GitHub Authentication Setup

The push failed because you need to authenticate with GitHub. Here are the solutions:

## Option 1: Use GitHub Desktop (Easiest)

1. Download GitHub Desktop: https://desktop.github.com
2. Sign in with your GitHub account
3. Add your repository
4. Push from GitHub Desktop

---

## Option 2: Use Personal Access Token (Recommended)

### Step 1: Create Personal Access Token

1. Go to GitHub.com → Settings → Developer settings
2. Click "Personal access tokens" → "Tokens (classic)"
3. Click "Generate new token (classic)"
4. Name it: "Portfolio Deployment"
5. Select scopes: ✅ **repo** (all checkboxes under repo)
6. Click "Generate token"
7. **Copy the token** (you won't see it again!)

### Step 2: Push Using Token

Run this command (replace YOUR_TOKEN with your actual token):

```bash
git push https://YOUR_TOKEN@github.com/SAIKATGHOSH2909/salesforce-portfolio.git main
```

Or update remote URL:
```bash
git remote set-url origin https://YOUR_TOKEN@github.com/SAIKATGHOSH2909/salesforce-portfolio.git
git push -u origin main
```

---

## Option 3: Use SSH (More Secure)

### Step 1: Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

### Step 2: Add SSH Key to GitHub

1. Copy your public key: `cat ~/.ssh/id_ed25519.pub`
2. Go to GitHub → Settings → SSH and GPG keys
3. Click "New SSH key"
4. Paste your key
5. Save

### Step 3: Update Remote URL

```bash
git remote set-url origin git@github.com:SAIKATGHOSH2909/salesforce-portfolio.git
git push -u origin main
```

---

## Option 4: Check Repository Exists

Make sure the repository exists on GitHub:

1. Go to: https://github.com/SAIKATGHOSH2909/salesforce-portfolio
2. If it doesn't exist, create it:
   - Go to github.com
   - Click "+" → "New repository"
   - Name: `salesforce-portfolio`
   - Make it **Public**
   - **Don't** initialize with README
   - Click "Create repository"

---

## ✅ Quick Fix (Try This First)

1. **Make sure repository exists** on GitHub
2. **Use GitHub Desktop** (easiest option)
3. Or create a **Personal Access Token** and use it

---

## 🚀 After Successful Push

Once your code is on GitHub:

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Deploy!

---

**Need help?** Let me know which option you want to use!
