# Netlify Deployment Guide

This project is configured for deployment on Netlify.

## Configuration Files

- **netlify.toml**: Contains build settings and redirects
- **package.json**: Contains dependencies and build scripts
- **.gitignore**: Excludes build artifacts and dependencies

## Build Settings

- **Build Command**: `npm run build`
- **Publish Directory**: `build`
- **Node Version**: 18

## Deployment Steps

### Option 1: Deploy via Netlify UI

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Netlify will automatically detect the settings from `netlify.toml`
5. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Initialize and deploy:
   ```bash
   netlify init
   netlify deploy --prod
   ```

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Environment Variables

If you need to set environment variables:
1. Go to Site settings → Environment variables in Netlify dashboard
2. Add your variables there
3. They will be available during build and runtime

## Notes

- The `netlify.toml` includes a redirect rule for client-side routing (SPA)
- All routes redirect to `index.html` to support React Router if needed
- Build output is in the `build` directory (created by `react-scripts build`)
