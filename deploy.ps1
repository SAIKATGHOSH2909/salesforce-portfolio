# PowerShell script to help deploy your portfolio
# Run this script to prepare and deploy your site

Write-Host "🚀 Portfolio Deployment Helper" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "📦 Initializing Git repository..." -ForegroundColor Yellow
    git init
    git branch -M main
    Write-Host "✅ Git initialized" -ForegroundColor Green
} else {
    Write-Host "✅ Git repository already exists" -ForegroundColor Green
}

Write-Host ""
Write-Host "🔍 Checking build..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Next Steps:" -ForegroundColor Cyan
    Write-Host "1. Create a GitHub account at: https://github.com" -ForegroundColor White
    Write-Host "2. Create a new repository on GitHub" -ForegroundColor White
    Write-Host "3. Run these commands (replace YOUR_USERNAME and REPO_NAME):" -ForegroundColor White
    Write-Host ""
    Write-Host "   git add ." -ForegroundColor Gray
    Write-Host "   git commit -m 'Ready for deployment'" -ForegroundColor Gray
    Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git" -ForegroundColor Gray
    Write-Host "   git push -u origin main" -ForegroundColor Gray
    Write-Host ""
    Write-Host "4. Go to https://vercel.com and sign up with GitHub" -ForegroundColor White
    Write-Host "5. Click 'Add New Project' and import your repository" -ForegroundColor White
    Write-Host "6. Click 'Deploy' - Done! 🎉" -ForegroundColor White
    Write-Host ""
    Write-Host "📖 See SIMPLE_DEPLOY.md for detailed instructions" -ForegroundColor Cyan
} else {
    Write-Host "❌ Build failed. Please fix errors before deploying." -ForegroundColor Red
}
