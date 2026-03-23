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

Option 1:
- Open `index.html` directly in your browser.

Option 2 (recommended):
- Use VS Code Live Server extension.
- Right-click `index.html` -> Open with Live Server.

## Customization Guide
- Update personal details in `index.html`.
- Edit colors/spacing/components in `components.css`.
- Adjust background/theme effects in `components.css` (night-sky section).
- Change skill labels and progress bars in the Skills section of `index.html`.
- Replace profile and project images in `images/` and update paths in `index.html`.

## Deployment (Netlify)
### Method 1: GitHub + Netlify (Recommended)
1. Push this folder to a GitHub repository.
2. Go to https://app.netlify.com and sign in with GitHub.
3. Click **Add new site** -> **Import an existing project**.
4. Configuration for this static site:
   - Branch to deploy: `main`
   - Build Command: *(leave empty)*
   - Publish Directory: `.`
5. Click **Deploy**.

### Method 2: Manual Drag-and-Drop
1. Go to https://app.netlify.com/drop.
2. Drag the full project folder into Netlify Drop.
3. Netlify will generate a live URL instantly.

## Notes
- Keep all file names and paths consistent with references in `index.html`.
- If updates are not visible after deployment, clear browser cache or hard refresh.

## License
This project is for personal portfolio use.
