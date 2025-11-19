# BuildaBaller - Professional Football Coaching

A modern, responsive website for BuildaBaller, featuring professional football coaching services for kids.

**GitHub Repository**: https://github.com/Mejrifx/astroturf-baller-build

## Project info

**Lovable URL**: https://lovable.dev/projects/29730cc9-1664-4c9c-b5cc-ce984d6c5558

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/29730cc9-1664-4c9c-b5cc-ce984d6c5558) and start prompting.

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

### Deploy to Netlify

This project is configured for Netlify deployment with a `netlify.toml` file.

**Option 1: Connect via GitHub (Recommended)**
1. Go to [Netlify](https://www.netlify.com/) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select this repository: `Mejrifx/astroturf-baller-build`
4. Netlify will automatically detect the build settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"
6. Your site will be live and automatically deploy on every push to the `main` branch!

**Option 2: Deploy via Netlify CLI**
```sh
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

**Lovable Deployment**
You can also deploy via [Lovable](https://lovable.dev/projects/29730cc9-1664-4c9c-b5cc-ce984d6c5558) by clicking Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
