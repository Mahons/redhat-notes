# Deployment Guide

## GitHub Pages Deployment (Automated)

This site is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Initial Setup

1. **Create a new GitHub repository** for the site (e.g., `mtechsolutions-website`)

2. **Push your code** to the repository:
   ```bash
   cd mtechsolutions-site
   git init
   git add .
   git commit -m "Initial commit: MTechSolutions consulting website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/mtechsolutions-website.git
   git push -u origin main
   ```

3. **Configure GitHub Pages**:
   - Go to your repository Settings
   - Navigate to Pages (left sidebar)
   - Under "Build and deployment":
     - Source: GitHub Actions
   - Save

4. **The site will automatically deploy** when you push to the main branch

### Custom Domain Setup

To use `mtechsolutions.ie`:

1. **Add CNAME file** (already configured if you copy from old repo):
   ```
   mtechsolutions.ie
   ```

2. **Update DNS settings** with your domain registrar:
   ```
   Type: CNAME
   Host: www
   Value: YOUR_USERNAME.github.io

   Type: A (for apex domain)
   Host: @
   Values:
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
   ```

3. **Configure custom domain in GitHub**:
   - Go to repository Settings > Pages
   - Under "Custom domain", enter `mtechsolutions.ie`
   - Check "Enforce HTTPS"

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build the site
npm run build

# The output is in the 'out' directory
# You can upload this to any static hosting service
```

## Alternative Hosting Options

### Vercel (Recommended for Next.js)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow prompts to link to your account and deploy

### Netlify

1. Create account at netlify.com
2. Connect your GitHub repository
3. Build command: `npm run build`
4. Publish directory: `out`

## Development Workflow

1. **Make changes locally**:
   ```bash
   npm run dev
   ```

2. **Test the build**:
   ```bash
   npm run build
   ```

3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Your changes"
   git push
   ```

4. **GitHub Actions will automatically build and deploy**

## Monitoring Deployments

- View deployment status in the "Actions" tab of your GitHub repository
- Each push triggers a new build
- Deployments typically complete in 2-3 minutes

## Troubleshooting

### Build fails in GitHub Actions

1. Check the Actions tab for error messages
2. Test the build locally: `npm run build`
3. Ensure all dependencies are in package.json

### Custom domain not working

1. Verify DNS settings with your registrar
2. DNS changes can take 24-48 hours to propagate
3. Check GitHub Pages settings show "DNS check successful"

### Site shows 404

1. Ensure GitHub Pages is enabled in repository settings
2. Check that the workflow ran successfully
3. Verify the deployment shows in the Environments tab

## Performance Optimization

The site is already optimized for production:
- Static export for fast loading
- Next.js automatic code splitting
- Tailwind CSS purging unused styles
- Images should be optimized before adding

## Security

- HTTPS is enforced via GitHub Pages
- No server-side code (static export)
- No environment variables needed
- Contact form uses email links (no backend)
