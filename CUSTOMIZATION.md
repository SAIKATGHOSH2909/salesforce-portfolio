# Customization Guide

This guide will help you personalize the portfolio with your own information.

## Quick Start Customization

### 1. Personal Information

#### Hero Section (`components/sections/Hero.tsx`)
- Line 45: Change "Your Name" to your actual name
- Lines 54-59: Update title if needed
- Lines 67-69: Customize the description

#### About Section (`data/about.ts`)
- Update `title`, `subtitle`, `description`
- Modify `consultantMindset` and `developerExpertise`
- Update `focusAreas` array with your areas
- Customize `values` array

### 2. Experience (`data/experience.ts`)

Replace the example experiences with your own:
```typescript
{
  id: "exp-1",
  role: "Your Role",
  company: "Company Name",
  location: "City, State",
  startDate: "YYYY-MM-DD",
  endDate: undefined, // or "YYYY-MM-DD" if ended
  technologies: ["Tech1", "Tech2"],
  achievements: [
    "Achievement 1",
    "Achievement 2",
  ],
}
```

### 3. Projects (`data/projects.ts`)

Replace with your actual projects:
```typescript
{
  id: "project-1",
  title: "Project Title",
  category: "Sales Cloud", // or other category
  businessProblem: "Describe the problem",
  solution: "Describe your solution",
  technologies: ["Tech1", "Tech2"],
  impact: [
    { metric: "Metric Name", value: "Result" }
  ],
  details: "Additional details",
}
```

### 4. Skills (`data/skills.ts`)

Update skills to match your expertise:
- Modify `category` names
- Update `technologies` arrays
- Change `icon` to match Lucide React icon names
- Update `description` if needed

### 5. Social Links (`lib/constants.ts`)

Update `SOCIAL_LINKS`:
```typescript
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  email: "mailto:your.email@example.com",
};
```

### 6. Resume

Replace `public/resume.pdf` with your actual resume PDF file.

### 7. SEO Metadata (`app/layout.tsx`)

Update the metadata object:
- `title`: Your portfolio title
- `description`: Your description
- `keywords`: Add relevant keywords
- `authors`: Your name

### 8. Structured Data (`components/SEO/StructuredData.tsx`)

Update the JSON-LD structured data:
- `name`: Your name
- `jobTitle`: Your title
- `url`: Your portfolio URL
- `sameAs`: Your social media links

## Advanced Customization

### Colors (`tailwind.config.ts`)

The color palette is defined in the `theme.extend.colors` section:
- `primary`: Main brand color (indigo/blue)
- `secondary`: Neutral colors (slate grays)
- `accent`: Accent colors

### Animations (`components/animations/`)

- `variants.ts`: Animation variants
- `transitions.ts`: Transition timings

### Typography

Font settings are in:
- `app/layout.tsx`: Font loading
- `tailwind.config.ts`: Font family configuration

## Deployment

1. Update all personal information
2. Replace resume PDF
3. Test locally: `npm run dev`
4. Build: `npm run build`
5. Deploy to Vercel or your preferred platform

## Need Help?

- Check the main README.md for setup instructions
- Review Next.js documentation for App Router
- Check Tailwind CSS docs for styling
- Review Framer Motion docs for animations
