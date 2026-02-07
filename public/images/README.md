# Image Assets Directory

This directory contains all image assets for the portfolio website.

## Directory Structure

```
images/
├── profile/              # Profile photos
│   ├── saikat-ghosh.jpg  # Main profile photo (REPLACE THIS)
│   └── placeholder.jpg   # Fallback placeholder
├── companies/            # Company logos
│   ├── salesforce-logo.png
│   ├── cognizant-logo.png
│   └── placeholder-logo.png
├── certifications/       # Certification badges
│   ├── salesforce-admin-badge.png
│   ├── salesforce-platform-dev-1-badge.png
│   ├── salesforce-platform-dev-2-badge.png
│   ├── salesforce-sales-cloud-badge.png
│   ├── salesforce-app-builder-badge.png
│   ├── salesforce-service-cloud-badge.png
│   ├── salesforce-advanced-admin-badge.png
│   ├── salesforce-js-dev-badge.png
│   ├── salesforce-integration-arch-badge.png
│   ├── copado-fundamentals-badge.png
│   └── placeholder-badge.png
└── projects/            # Project screenshots
    ├── sales-cloud-implementation.jpg
    ├── api-integration.jpg
    ├── lwc-development.jpg
    ├── flow-automation.jpg
    ├── data-migration.jpg
    ├── release-management.jpg
    └── placeholder.jpg
```

## Image Requirements

### Profile Photo
- **Location**: `profile/saikat-ghosh.jpg`
- **Size**: Minimum 400x400px, recommended 800x800px
- **Format**: JPG or PNG
- **Aspect Ratio**: Square (1:1)
- **Content**: Professional headshot

### Company Logos
- **Size**: Minimum 200x200px
- **Format**: PNG with transparent background
- **Sources**:
  - Salesforce: Download from [Salesforce Brand Guidelines](https://www.salesforce.com/form/signup/brand-guidelines/)
  - Cognizant: Download from Cognizant brand resources

### Certification Badges
- **Size**: Minimum 200x200px
- **Format**: PNG
- **Sources**: Download from Salesforce Trailhead/Certification portal or Credly
- **Note**: Official badges can be downloaded from your Salesforce certification account

### Project Screenshots
- **Size**: Minimum 1920x1080px (16:9 aspect ratio)
- **Format**: JPG or PNG
- **Content**: Screenshots of Salesforce implementations, dashboards, or custom components
- **Note**: Ensure screenshots are anonymized and don't contain sensitive data

## How to Replace Placeholders

1. **Profile Photo**: 
   - Download your LinkedIn profile photo or use a professional headshot
   - Save as `saikat-ghosh.jpg` in `profile/` directory
   - Ensure it's square and properly cropped

2. **Company Logos**:
   - Download official logos from company brand guidelines
   - Save as PNG with transparent background
   - Replace placeholder files

3. **Certification Badges**:
   - Log into your Salesforce Trailhead account
   - Navigate to Certifications section
   - Download badge images
   - Replace placeholder files with actual badges

4. **Project Screenshots**:
   - Take screenshots of your Salesforce implementations
   - Ensure they're anonymized (no real customer data)
   - Save with descriptive filenames
   - Replace placeholder files

## Image Optimization

All images are automatically optimized by Next.js Image component. However, for best performance:

- Compress images before uploading
- Use appropriate formats (JPG for photos, PNG for logos/badges)
- Keep file sizes reasonable (< 500KB for most images)
- Use WebP format when possible for better compression

## Notes

- All placeholder files are text files - replace them with actual images
- Ensure you have rights to use company logos and certification badges
- Project screenshots should be anonymized and not contain sensitive information
- LinkedIn profile photos may have usage restrictions - check LinkedIn's terms
