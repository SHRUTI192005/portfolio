# Shruti Tyagi – Personal Engineering Portfolio

A modern, high-performance personal portfolio website built with **React 18**, **Vite 5**, **Tailwind CSS**, and **Framer Motion**, engineered specifically for showcasing achievements in **Embedded Systems**, **IoT**, **Hardware Engineering**, and **PCB Design**.

Winner of **Smart India Hackathon (SIH) 2025 – Hardware Edition** (1st Place Nationally against 1,000+ teams) & Co-author in *Pattern Recognition Letters* (Elsevier).

---

## ⚡ Technical Highlights

- **Framework**: React 18 + Vite 5 + Tailwind CSS 3
- **Design Aesthetic**: Apple-inspired minimalism, deep dark theme (`#030712`), cyan/electric blue/violet accents, subtle glassmorphism (`backdrop-blur-md`).
- **Interactive Background**: Custom HTML5 Canvas rendering interactive PCB circuit traces, IC pins, signal nodes, and traveling data packets.
- **Deep-Dive System Specs**: Interactive project modals with hardware signal flow, transducer-to-actuation architecture blocks, and key engineering contributions.
- **Strictly Grounded in Resume**: Zero invented metrics or filler descriptions. Every project, skill, publication, patent, and certification directly reflects Shruti Tyagi's verified resume.
- **Integrated Dual-Mode Resume Modal**: In-browser PDF inspection modal, ATS-exact structured document view, and direct one-click download for `Shruti_Tyagi_Resume.pdf`.
- **Working Contact Section**: Direct email/phone quick copy, LinkedIn/GitHub links, and an interactive contact form with celebratory confetti animation and direct mail client integration.
- **Production & GitHub Ready**: Pre-configured with `.gitignore`, relative asset resolution (`base: './'`), and automated GitHub Pages deployment workflow (`.github/workflows/deploy.yml`).

---

## 🛠️ Local Development

```bash
# Navigate to the project directory
cd shruti-portfolio

# Install dependencies (if cloning fresh)
npm install

# Start the local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🚀 Pushing to GitHub & Deploying Live

### Step 1: Initialize Git and Commit
```bash
cd ~/Downloads/shruti-portfolio

git init
git add .
git commit -m "feat: initial commit of Shruti Tyagi personal portfolio"
git branch -M main
```

### Step 2: Push to Your GitHub Account
Create a new repository on [GitHub](https://github.com/new) (e.g., `portfolio` or `shruti-portfolio`), then run:
```bash
git remote add origin https://github.com/SHRUTI192005/<YOUR-REPO-NAME>.git
git push -u origin main
```

### Step 3: Enable Free GitHub Pages Hosting
1. On GitHub, go to your repository **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. The included `.github/workflows/deploy.yml` will automatically build and publish your portfolio!

---

## 🌐 Deploying to Vercel or Netlify

### Option A: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option B: Netlify
1. Run `npm run build`
2. Drag and drop the generated `dist` folder to [app.netlify.com/drop](https://app.netlify.com/drop).

---

## 📂 Project Structure

```
shruti-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml                  # Automated GitHub Actions Pages deployment
├── public/
│   └── Shruti_Tyagi_Resume.pdf         # Official technical resume PDF (107 KB)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                  # Glassmorphic navigation & active section spy
│   │   ├── HeroCanvas.jsx              # High-performance interactive circuit simulation
│   │   ├── Hero.jsx                    # Hero section with SIH 2025 trophy badge & CTAs
│   │   ├── About.jsx                   # ECE narrative, AKGEC background, hardware philosophy
│   │   ├── Skills.jsx                  # Filterable skills matrix & instant keyword search
│   │   ├── Projects.jsx                # Featured project cards with preview flow
│   │   ├── ProjectModal.jsx            # System architecture & pinout inspection modal
│   │   ├── Publications.jsx            # Pattern Recognition Letters & Patent spotlight
│   │   ├── Experience.jsx              # NTPC Dadri C&I & NCC Cadet professional timeline
│   │   ├── Achievements.jsx            # SIH 2025 National Winner trophy showcase
│   │   ├── EducationCertifications.jsx # AKGEC B.Tech ECE, NI LabVIEW & Udemy KiCad
│   │   ├── Contact.jsx                 # Interactive contact form & direct channels
│   │   ├── ResumeModal.jsx             # Dual-mode (PDF + ATS Text View) modal & download
│   │   └── Footer.jsx                  # Back-to-top button & build diagnostics
│   ├── data/
│   │   └── portfolioData.js            # Central source of truth from resume
│   ├── App.jsx                         # Main app component
│   ├── index.css                       # Tailwind layers, glassmorphism & custom scrollbar
│   └── main.jsx                        # React root entry
├── index.html                          # SEO meta tags, Google Fonts & favicon
├── package.json
├── tailwind.config.js
├── vite.config.js                      # Configured with base: './' for universal hosting
└── .gitignore                          # Clean ignore rules for git
```
