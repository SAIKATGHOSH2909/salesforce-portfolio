# Salesforce Developer Portfolio

An enterprise-grade, animated portfolio website for Salesforce Developers and Consultants built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🌐 Live Website

**🔗 [View Live Site](https://salesforce-portfolio.vercel.app)** *(Deploy on Vercel to get your live link)*

**Repository:** https://github.com/SAIKATGHOSH2909/salesforce-portfolio

## Features

- **Enterprise Design**: Professional, premium look inspired by SaaS dashboards (Salesforce, Stripe, Linear)
- **Smooth Animations**: Framer Motion powered animations with scroll-triggered reveals
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark Mode**: Enterprise theme with dark mode as default
- **Type-Safe**: Built with TypeScript for type safety and better developer experience
- **Performance Optimized**: Code splitting, lazy loading, and optimized animations

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── sections/           # Page sections
│   ├── animations/         # Animation variants
│   └── layout/             # Layout components
├── data/                   # Content data
├── lib/                    # Utilities
├── types/                  # TypeScript types
└── public/                 # Static assets
```

## Customization

### Update Personal Information

1. **Hero Section**: Edit `components/sections/Hero.tsx` to update name and title
2. **About Section**: Modify `data/about.ts` with your information
3. **Experience**: Update `data/experience.ts` with your work history
4. **Projects**: Add your projects to `data/projects.ts`
5. **Skills**: Customize `data/skills.ts` with your technologies
6. **Social Links**: Update `lib/constants.ts` with your social media links
7. **Resume**: Replace `public/resume.pdf` with your actual resume

### Styling

- **Colors**: Modify `tailwind.config.ts` to change the color palette
- **Typography**: Update font settings in `app/layout.tsx` and `tailwind.config.ts`
- **Animations**: Customize animation variants in `components/animations/variants.ts`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Performance

- Automatic code splitting with Next.js App Router
- Image optimization with Next.js Image component
- Optimized Framer Motion animations
- Reduced motion support for accessibility

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Reduced motion preferences respected

## License

MIT License - feel free to use this portfolio for your own purposes.

## Support

For issues or questions, please open an issue on GitHub.
