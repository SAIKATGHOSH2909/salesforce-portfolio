# Enhanced Startup Script with Better Error Handling
# This script checks for Node.js and starts the portfolio

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Salesforce Portfolio - Startup Check" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Function to check Node.js
function Test-NodeJS {
    try {
        $nodeVersion = node --version 2>$null
        if ($nodeVersion) {
            return $true, $nodeVersion
        }
    } catch {
        return $false, $null
    }
    return $false, $null
}

# Check Node.js installation
$nodeInstalled, $nodeVersion = Test-NodeJS

if (-not $nodeInstalled) {
    Write-Host "[ERROR] Node.js is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "To fix this issue:" -ForegroundColor Yellow
    Write-Host "1. Download Node.js from: https://nodejs.org/" -ForegroundColor White
    Write-Host "2. Install the LTS (Long Term Support) version" -ForegroundColor White
    Write-Host "3. Make sure to check 'Add to PATH' during installation" -ForegroundColor White
    Write-Host "4. Restart Cursor/terminal after installation" -ForegroundColor White
    Write-Host "5. Run this script again: .\check-and-start.ps1" -ForegroundColor White
    Write-Host ""
    
    $openBrowser = Read-Host "Would you like to open the Node.js download page? (Y/N)"
    if ($openBrowser -eq "Y" -or $openBrowser -eq "y") {
        Start-Process "https://nodejs.org/"
    }
    
    Write-Host ""
    Write-Host "Press Enter to exit..."
    Read-Host
    exit 1
}

Write-Host "[SUCCESS] Node.js found: $nodeVersion" -ForegroundColor Green

# Check npm
try {
    $npmVersion = npm --version
    Write-Host "[SUCCESS] npm found: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "[ERROR] npm is not available" -ForegroundColor Red
    Write-Host "Please reinstall Node.js from https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "[INFO] Installing dependencies..." -ForegroundColor Yellow
    Write-Host "This may take a few minutes..." -ForegroundColor Yellow
    Write-Host ""
    
    npm install
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERROR] Failed to install dependencies." -ForegroundColor Red
        Write-Host "Try running: npm cache clean --force" -ForegroundColor Yellow
        Read-Host "Press Enter to exit"
        exit 1
    }
    
    Write-Host ""
    Write-Host "[SUCCESS] Dependencies installed!" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "[INFO] Dependencies already installed." -ForegroundColor Green
    Write-Host ""
}

Write-Host "[INFO] Starting development server..." -ForegroundColor Cyan
Write-Host "[INFO] The portfolio will be available at: http://localhost:3000" -ForegroundColor Cyan
Write-Host "[INFO] Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Start the dev server and open browser
$env:BROWSER = "none"  # Prevent auto-open, we'll do it manually
npm run dev
