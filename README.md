# Siam Sheikh — Personal Portfolio & Client Showcase

Personal portfolio website of **Siam Sheikh**, Web Developer & Foreign Communication Executive at Softvence IT Ltd. Built using React 19, Vite, Tailwind CSS v4, DaisyUI v5, and Framer Motion.

Live URL: [https://siam-sk.github.io/](https://siam-sk.github.io/)

---

## ✨ Highlights & Features

- **Multi-Page Architecture:** Powered by `react-router-dom` with SPA 404 fallback configured for GitHub Pages clean URLs.
- **Work Experience Timeline:** Highlights professional tenure at **Softvence IT Ltd** as Web Developer (CMS) and Foreign Communication Executive, managing international client communications, technical scoping, and deliverables.
- **Client Website Showcase (34+ Live Sites):** Dedicated showcase of production websites delivered across **Wix**, **Squarespace**, and **Custom code** spanning healthcare, e-commerce, real estate, consulting, therapy, wellness, construction, events, and bookings.
- **Interactive Full-Stack Web Apps:** Modals, multi-screenshot carousels, live demos, and GitHub repository links for full-stack MERN applications (*SharedSpoon*, *TalentSphere*, *OAHMS*).
- **Dynamic Dual Theme:** Smooth toggle between `dim` (dark mode) and `winter` (light mode), persisted across sessions in `localStorage`.
- **Integrated CV / Resume:** Direct local PDF download (`/SIAM_SHEIKH_Resume.pdf`) from any page.
- **Contact Form:** Interactive messaging powered by EmailJS with direct WhatsApp and phone channels.

---

## 🛠️ Tech Stack & Tools

- **Core & Routing:** [React 19](https://react.dev/), [Vite 7](https://vitejs.dev/), [React Router](https://reactrouter.com/)
- **CMS & No-Code Platforms:** Wix, Squarespace, Shopify, WordPress
- **Styling & UI:** [Tailwind CSS v4](https://tailwindcss.com/), [DaisyUI v5](https://daisyui.com/)
- **Animations & Effects:** [Framer Motion](https://www.framer.com/motion/), [React Fast Marquee](https://www.react-fast-marquee.com/), [tsparticles](https://particles.js.org/)
- **Email Service:** [EmailJS](https://www.emailjs.com/)

---

## 📁 Repository Structure

```
├── public/
│   ├── 404.html               # SPA fallback redirect for GitHub Pages clean URLs
│   ├── SIAM_SHEIKH_Resume.pdf # Official updated CV
│   └── screenshots/           # Drop-in folder for client site screenshots ([id].png)
├── src/
│   ├── assets/                # Logos, hero photos, project graphics
│   ├── components/            # Reusable UI components (Navbar, Footer, Hero, Skills, etc.)
│   ├── data/
│   │   ├── clientProjectsData.js # 34 live client websites across Wix & Squarespace
│   │   ├── experienceData.js     # Work experience history at Softvence IT Ltd
│   │   └── projectsData.js       # Full-stack MERN application details
│   ├── pages/
│   │   ├── Home.jsx           # Overview, role spotlight, featured work, skills, CTA
│   │   ├── Experience.jsx     # Professional timeline & stats
│   │   ├── ProjectsPage.jsx   # Dual-tab catalog (34 Client Sites + Full-Stack Apps)
│   │   ├── AboutPage.jsx      # Bio, Education credentials, and Skills
│   │   └── ContactPage.jsx    # EmailJS form & direct channels
│   ├── App.jsx                # Main layout, router & persistent theme provider
│   └── main.jsx               # React DOM entrypoint
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/siam-sk/siam-sk.github.io.git
   cd siam-sk.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID="your_service_id"
   VITE_EMAILJS_TEMPLATE_ID="your_template_id"
   VITE_EMAILJS_PUBLIC_KEY="your_public_key"
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

---

## 📝 License

This project is licensed under the MIT License.
