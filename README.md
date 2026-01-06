# Portfolio - Geospatial Developer & Analyst

A modern, responsive portfolio website showcasing geospatial development projects, client work, and professional experience.

## 🚀 Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **React Icons** - Icon library
- **React Globe.gl** - 3D globe visualization

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` folder.

Preview the production build locally:

```bash
npm run preview
```

## 📤 Deployment

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Vite settings
4. Deploy!

### Other Platforms

The `dist/` folder contains static files that can be deployed to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Azure Static Web Apps
- Any web server

## 📁 Project Structure

```
portfolio-react/
├── public/          # Static assets (images, resume)
├── src/
│   ├── components/ # React components
│   ├── data/       # Data files (projects, experience, etc.)
│   ├── pages/      # Page components
│   └── styles/     # CSS files
└── dist/           # Production build output (generated)
```

## ✅ Pre-Deployment Checklist

- ✅ All assets are in `public/` folder
- ✅ All imports use relative paths within `src/`
- ✅ No external file dependencies outside `portfolio-react/`
- ✅ Images referenced as `/images/...` (maps to `public/images/`)
- ✅ Build command configured (`npm run build`)
- ✅ Production build tested locally (`npm run preview`)

## 📝 Notes

- All project data is self-contained within the `portfolio-react` folder
- Images are stored in `public/images/` and referenced as `/images/...`
- The "Oil spill mapping & GIS data collection" folder contains reference documentation and is excluded from deployment
