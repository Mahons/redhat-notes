# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the MTechSolutions professional consulting website, built with Next.js and Tailwind CSS, deployed to GitHub Pages via static export.

## Development Commands

### Running the site locally

```bash
cd mtechsolutions-site
npm run dev
```

Visit `http://localhost:3000`.

### Installing dependencies

```bash
cd mtechsolutions-site
npm install
```

### Building for production

```bash
cd mtechsolutions-site
npm run build
```

Output is written to `mtechsolutions-site/out/`.

## Site Architecture

The Next.js app is located in `mtechsolutions-site/`.

### Key directories

- **app/**: Next.js App Router pages and layout
  - `page.tsx`: Home page — composes all section components
  - `layout.tsx`: Root layout with metadata and Google Analytics
  - `globals.css`: Global styles and Tailwind imports
  - `components/`: One component per page section (see below)

- **public/**: Static assets (images, favicon, CNAME)

### Components

| File | Section |
|------|---------|
| `Navigation.tsx` | Top nav bar |
| `Hero.tsx` | Hero/landing section |
| `Services.tsx` | Services offered |
| `CaseStudies.tsx` | Case studies |
| `About.tsx` | About Me, expertise, certifications |
| `Contact.tsx` | Contact form |
| `Footer.tsx` | Site footer |
| `GoogleAnalytics.tsx` | GA4 script injection |

### Configuration

- **next.config.ts**: Enables static export (`output: 'export'`)
- **tailwind.config.ts**: Tailwind CSS configuration
- **tsconfig.json**: TypeScript configuration

## Domain and Deployment

- Production URL: https://www.mtechsolutions.ie
- CNAME file in `public/` for custom domain
- Repository: mahons/redhat-notes
- Deployed via GitHub Actions on push to `main` (see `.github/workflows/deploy.yml`)
- Static output from `mtechsolutions-site/out/` is deployed to GitHub Pages
