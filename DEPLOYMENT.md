# GitHub Pages Deployment Guide

This repository is configured to automatically deploy to GitHub Pages with the custom domain **gravitas.uno**.

## 🚀 Deployment Configuration

### Automatic Deployment

The site automatically deploys to GitHub Pages when:
- Changes are pushed to the `main` branch
- The workflow is manually triggered via GitHub Actions

### Deployment Workflow

Located at `.github/workflows/deploy.yml`, this workflow:

1. **Builds** the application using Vite
2. **Uploads** the build artifacts from the `dist/` directory
3. **Deploys** to GitHub Pages using the official GitHub Actions

## 🌐 Custom Domain Setup

### Repository Configuration

The custom domain `gravitas.uno` is configured via:
- **CNAME file**: `public/CNAME` containing `gravitas.uno`
- **Vite base URL**: Set to `/` in `vite.config.ts` (correct for custom domains)
- **.nojekyll file**: `public/.nojekyll` to bypass Jekyll processing

### DNS Configuration Required

To make `gravitas.uno` point to this GitHub Pages site, configure DNS records at your domain registrar:

#### For Apex Domain (gravitas.uno):

Add these A records:
```
Type: A
Name: @
Values:
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
```

#### For www Subdomain (www.gravitas.uno):

Add a CNAME record:
```
Type: CNAME
Name: www
Value: jobbyist.github.io
```

### GitHub Pages Settings

Ensure GitHub Pages is configured correctly:

1. Navigate to: **Repository Settings → Pages**
2. **Source**: Should be set to "GitHub Actions"
3. **Custom domain**: Will be automatically set to `gravitas.uno` via the CNAME file
4. **Enforce HTTPS**: Enable this option (recommended)

## 🔧 Local Development

### Prerequisites

- Node.js 20.x or higher
- npm

### Commands

```bash
# Install dependencies
npm ci

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📦 Build Output

The build process creates a `dist/` directory containing:

- `index.html` - Main HTML file
- `assets/` - JavaScript, CSS, and image files
- `CNAME` - Custom domain configuration
- `.nojekyll` - Prevents Jekyll processing
- `favicon.ico`, `robots.txt`, and other static files

## 🔍 Troubleshooting

### Site not accessible at gravitas.uno

1. **Check DNS propagation**: DNS changes can take up to 24-48 hours to propagate globally
2. **Verify DNS records**: Use a DNS lookup tool to confirm A/CNAME records are set correctly
3. **Check GitHub Pages settings**: Ensure the custom domain is configured in repository settings
4. **Check deployment status**: View the Actions tab to see if deployments are successful

### Deployment fails

1. **Check workflow logs**: Go to Actions tab and review the failed workflow
2. **Verify build locally**: Run `npm run build` locally to check for build errors
3. **Check dependencies**: Ensure all dependencies are correctly installed with `npm ci`

### 404 errors on routes

If you're getting 404 errors on client-side routes (e.g., `/privacy`, `/terms`):
- This is expected behavior with GitHub Pages and client-side routing
- The application uses a 404.html fallback or hash-based routing if needed
- Ensure the router configuration supports GitHub Pages deployment

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Configuring a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

## 🎯 Deployment Checklist

- [x] GitHub Actions workflow configured
- [x] CNAME file with custom domain
- [x] .nojekyll file to bypass Jekyll
- [x] Vite base URL configured for custom domain
- [ ] DNS records configured at domain registrar
- [ ] GitHub Pages settings verified
- [ ] HTTPS enforced (after DNS propagation)

## 🔐 Security

- Always use HTTPS for the deployed site
- Keep dependencies up to date
- Review and merge Dependabot security updates regularly
