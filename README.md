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

This project is configured for **automatic deployment to GitHub Pages** with the custom domain **gravitas.uno**.

### Automatic Deployment

- **Every push to `main`** triggers an automatic deployment via GitHub Actions
- **Manual deployment** can be triggered from the Actions tab in GitHub

### Deployment Documentation

For detailed deployment configuration, DNS setup, and troubleshooting, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Alternative: Deploy via Lovable

You can also deploy using [Lovable](https://lovable.dev/projects/ddc3b80c-cf56-41a0-833b-61d372e45390) by clicking Share -> Publish.

## Custom Domain

This project is configured with the custom domain **gravitas.uno**. 

The domain is configured via:
- CNAME file in the `public/` directory
- GitHub Actions workflow for automated deployment
- DNS records (must be configured at domain registrar)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete DNS configuration instructions.
