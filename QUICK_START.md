# Quick Start Guide

## Prerequisites

**Node.js is required** to run this Next.js portfolio. If you don't have it installed:

1. Download Node.js from: https://nodejs.org/ (LTS version recommended)
2. Install it (includes npm automatically)
3. Restart your terminal/IDE after installation

## Quick Start (3 Steps)

### Option 1: Using Startup Scripts (Easiest)

**Windows PowerShell:**
```powershell
.\start.ps1
```

**Windows Command Prompt:**
```cmd
start.bat
```

### Option 2: Manual Commands

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   - The server will start at `http://localhost:3000`
   - It should open automatically, or manually navigate to that URL

## What Happens Next?

- The development server will start
- Your portfolio will be available at `http://localhost:3000`
- Any changes you make will automatically reload (hot reload)
- Press `Ctrl+C` to stop the server

## Troubleshooting

### "npm is not recognized"
- Node.js is not installed or not in PATH
- Install Node.js from nodejs.org
- Restart your terminal after installation

### Port 3000 already in use
- Another application is using port 3000
- Stop that application or change the port:
  ```bash
  npm run dev -- -p 3001
  ```

### Installation fails
- Check your internet connection
- Try clearing npm cache: `npm cache clean --force`
- Delete `node_modules` folder and `package-lock.json`, then run `npm install` again

## Next Steps

1. **Customize your portfolio:**
   - See `CUSTOMIZATION.md` for detailed instructions
   - Update your name, experience, projects, etc.

2. **Replace resume:**
   - Add your PDF resume to `public/resume.pdf`

3. **Deploy:**
   - See `README.md` for deployment instructions
   - Recommended: Deploy to Vercel (free and easy)

## Need Help?

- Check `README.md` for full documentation
- Check `CUSTOMIZATION.md` for personalization guide
- Review Next.js docs: https://nextjs.org/docs
