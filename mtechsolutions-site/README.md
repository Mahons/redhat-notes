# MTechSolutions - Enterprise Architecture Consulting

Professional consulting website for Stephen Mahon / MTechSolutions, showcasing enterprise architecture expertise and award-winning project portfolio.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern utility-first styling
- **Static Export** - Optimized for GitHub Pages deployment

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit http://localhost:3000 to view the site.

## Site Structure

### Sections

1. **Hero** - Value proposition with key stats (17+ years, 90% efficiency, 15+ years uptime)
2. **Services** - Six core service areas including Enterprise Architecture, Application Modernization, API Strategy
3. **Case Studies** - Four award-winning projects:
   - eVetting Modernization (13+ weeks to <5 days)
   - Enterprise Mobility Infrastructure
   - API-First Digital Foundation
   - Court Services Integration (15+ years running)
4. **About** - Professional background, expertise, certifications
5. **Blog** - Preview of Red Hat technical content
6. **Contact** - Clear CTA with email and LinkedIn

### Key Features

- Responsive design (mobile-first)
- Smooth scroll navigation
- SEO optimized metadata
- Fast loading with static generation
- Professional color scheme (primary blue palette)

## Deployment

### GitHub Pages

The site is configured for static export. To deploy:

1. Build the site:
   ```bash
   npm run build
   ```

2. The output will be in the `out/` directory

3. Push to GitHub and configure GitHub Pages to serve from the `out/` directory, or:

4. Use GitHub Actions to automate deployment (add workflow file)

### Custom Domain

Already configured for `mtechsolutions.ie` - update DNS settings to point to GitHub Pages.

## Content Updates

### Updating Case Studies

Edit `app/components/CaseStudies.tsx` - modify the `caseStudies` array.

### Updating Services

Edit `app/components/Services.tsx` - modify the `services` array.

### Adding Blog Posts

Currently showing preview of existing Red Hat notes. To add full blog functionality:

1. Create `app/blog/` directory
2. Add MDX support: `npm install @next/mdx @mdx-js/loader`
3. Create individual blog post pages
4. Update `app/components/Blog.tsx` to link to full posts

## Contact Information

- **Email**: stephen@mtechsolutions.ie
- **LinkedIn**: https://www.linkedin.com/company/mtechsolutions/
- **Website**: http://www.mtechsolutions.ie

## License

© 2024 MTechSolutions. All rights reserved.
