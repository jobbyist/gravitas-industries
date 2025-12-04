# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/ddc3b80c-cf56-41a0-833b-61d372e45390

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ddc3b80c-cf56-41a0-833b-61d372e45390) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages with a custom domain (gravitas.uno).

**Automatic Deployment:**
- Pushes to the `main` branch automatically trigger a deployment workflow
- The workflow builds the project and deploys it to GitHub Pages
- The site will be available at https://gravitas.uno (once DNS is configured)

**Manual Deployment:**
- Go to the "Actions" tab in GitHub
- Select the "Deploy to GitHub Pages" workflow
- Click "Run workflow" to manually trigger a deployment

**DNS Configuration:**
To use the custom domain, configure your DNS provider with the following records:
1. Add an A record pointing to GitHub Pages IP addresses:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
2. Alternatively, add a CNAME record pointing to `<username>.github.io`

**GitHub Repository Settings:**
1. Go to repository Settings > Pages
2. Under "Source", select "GitHub Actions"
3. The custom domain (gravitas.uno) is automatically configured via the CNAME file

### Lovable Deployment

Alternatively, you can deploy via [Lovable](https://lovable.dev/projects/ddc3b80c-cf56-41a0-833b-61d372e45390) by clicking on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
