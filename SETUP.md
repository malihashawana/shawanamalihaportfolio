# Portfolio Setup Instructions

## 📍 Location

Your portfolio has been created in the folder: **`shawanasportfolio`**

If you're in the project root, the path is: `./shawanasportfolio/`

## 🚀 Quick Start

### 1. Navigate to the portfolio folder
```bash
cd shawanasportfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add your photo
- Place your photo in the `public` folder
- Name it `photo.jpg` (or update the path in `src/components/Hero.jsx`)
- Recommended: Square image, 300x300px or larger

### 4. Update your information
Edit these files to add your personal details:

**Contact Information** (`src/components/Contact.jsx`):
- Email: `your.email@example.com`
- GitHub: `https://github.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourusername`

**Social Links** (`src/components/Hero.jsx`):
- Update GitHub and LinkedIn links
- Update email link

**Projects** (`src/components/Projects.jsx`):
- Update project GitHub links
- Update project demo links
- Customize project descriptions

**Resume** (`src/components/Hero.jsx`):
- Add your resume PDF to the `public` folder
- Update the resume path in the `downloadResume` function

### 5. Run the development server
```bash
npm run dev
```

The portfolio will open at `http://localhost:5173`

### 6. Build for production
```bash
npm run build
```

The production files will be in the `dist` folder.

## 📁 Project Structure

```
shawanasportfolio/
├── public/
│   ├── photo.jpg          ← ADD YOUR PHOTO HERE
│   └── resume.pdf         ← OPTIONAL: Add your resume
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Research.jsx
│   │   ├── Contact.jsx
│   │   └── ThemeToggle.jsx
│   ├── App.jsx
│   ├── App.css            ← Light blue theme styling
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## ✨ Features Included

✅ Modern, minimalist design with light blue theme
✅ Dark/Light mode toggle (top right)
✅ Fully responsive (desktop, tablet, mobile)
✅ Smooth scroll animations
✅ Project filtering by category (Web/ML/QA)
✅ All required sections (Hero, About, Skills, Projects, Experience, Research, Contact)
✅ Professional typography and spacing
✅ SEO-friendly meta tags

## 🎨 Customization

### Colors
The color scheme is defined in `src/App.css` using CSS variables. You can modify:
- `--accent-blue`: Main accent color
- `--bg-primary`: Background color
- `--bg-hero`: Hero section gradient

### Fonts
Currently using system fonts. To use custom fonts, add them to `index.html` and update `App.css`.

## 📦 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Follow GitHub Pages setup for Vite projects

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`

## 🔍 Where to Find Everything

- **Main App**: `src/App.jsx`
- **Styling**: `src/App.css`
- **Hero Section**: `src/components/Hero.jsx`
- **Skills Data**: `src/components/Skills.jsx`
- **Projects Data**: `src/components/Projects.jsx`
- **Contact Info**: `src/components/Contact.jsx`

## 💡 Tips

1. Test the dark/light mode toggle - it saves your preference
2. Update all placeholder links before deploying
3. Add your resume PDF for the download button to work
4. Customize project descriptions to match your actual work
5. The photo will show a placeholder (SM) if not found

## ❓ Need Help?

Check the `README.md` file for more details about the project structure and dependencies.
