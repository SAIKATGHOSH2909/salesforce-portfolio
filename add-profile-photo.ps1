# Script to help add profile photo
# This script will guide you to add your profile photo

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Add Profile Photo to Portfolio" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$profilePhotoPath = "public\images\profile\saikat-ghosh.png"

Write-Host "To add your profile photo:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Save your profile photo image file" -ForegroundColor White
Write-Host "2. Copy it to: $profilePhotoPath" -ForegroundColor White
Write-Host "3. Make sure the file is named: saikat-ghosh.png (or .jpg)" -ForegroundColor White
Write-Host ""
Write-Host "Supported formats: PNG, JPG, JPEG" -ForegroundColor Gray
Write-Host "Recommended size: 400x400px or larger (square format)" -ForegroundColor Gray
Write-Host ""

# Check if file exists
if (Test-Path $profilePhotoPath) {
    Write-Host "[SUCCESS] Profile photo found at: $profilePhotoPath" -ForegroundColor Green
    Write-Host ""
    Write-Host "The image should now be visible in your portfolio!" -ForegroundColor Green
} else {
    Write-Host "[INFO] Profile photo not found yet." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Please add your profile photo to:" -ForegroundColor White
    Write-Host "  $profilePhotoPath" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Once added, refresh your browser to see it!" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
