# Bhanu Teja Portfolio

Personal portfolio website showcasing skills, projects, education, certifications, and contact details.

## Live Tech Stack
- HTML5
- CSS3
- JavaScript (vanilla)
- Font Awesome icons

## Project Structure
- `index.html` - Main page structure
- `components.css` - Core styling for sections and components
- `base.css` - Base/global styles
- `animations.css` - Animation utilities and keyframes
- `main.js` - Interactive behavior (typing effect, navbar behavior)
- `images/` - Images and assets

## Run Locally
This is a static website, so no build step is required.

**Option 1:** Open `index.html` directly in your browser.

**Option 2 (recommended):** Use VS Code Live Server extension.
- Right-click `index.html` → Open with Live Server.

## Customization Guide
- Update personal details in `index.html`
- Edit colors/spacing/components in `components.css`
- Adjust background/theme effects in `components.css` (night-sky section)
- Change skill labels and progress bars in the Skills section of `index.html`
- Replace profile and project images in `images/` and update paths in `index.html`

## Deployment (Vercel)

### Method 1: GitHub + Vercel (Recommended)
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Go to https://vercel.com and sign in with GitHub

3. Click **Add New Project** and import your repository

4. Configuration (Vercel auto-detects static):
   - Framework Preset: **Other** (static site)
   - Build Command: *(leave empty)*
   - Output Directory: *(leave empty)*
   - Root Directory: `./`

5. Click **Deploy** — your site goes live instantly!

### Method 2: Vercel CLI
1. Install Node.js from https://nodejs.org (LTS version)
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. In your project folder:
   ```bash
   vercel
   ```
4. Follow the prompts (scope, project name, etc.)
5. For production:
   ```bash
   vercel --prod
   ```

### Method 3: Vercel Drop (Drag & Drop)
1. Go to https://vercel.com/new
2. Scroll to bottom: **Deploy from a Git repository** → **Or use Vercel for Git**
3. Or use: https://vercel.com/new/clone?demo-title=&demo-description=&demo-url=&env=
4. Drag and drop your project folder into the deployment area

## Live URL
After deployment, Vercel will provide a URL like:
```
https://your-project.vercel.app
```

## Custom Domain (Optional)
1. In Vercel Dashboard → Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## Notes
- Keep all file names and paths consistent with references in `index.html`
- If updates are not visible after deployment, clear browser cache (Ctrl+Shift+Delete)
- Netlify is an alternative to Vercel for static site hosting

## License
This project is for personal portfolio use.
