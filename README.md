# Muhammad Ali Alam — Research & Professional Portfolio

This repository contains the source code for the personal, academic, and research portfolio of **Muhammad Ali Alam**, specializing in NLP, Multimodal AI, and Computational Genomics.

Live Site: [m-ali-alam.github.io](https://m-ali-alam.github.io)

---

## 🚀 Tech Stack & Design

* **Framework:** [Astro](https://astro.build) (v7)
* **Styling:** [Tailwind CSS](https://tailwindcss.com) (v4) with custom "Academic Rigor" editorial design system
* **Content:** MDX (via Astro Content Layer) for dynamic and rich project write-ups
* **Interactivity:** Progressive enhancement via vanilla JavaScript and client-side IntersectionObserver scroll spy
* **Deployment:** Automated deployments via GitHub Actions to GitHub Pages

---

## 📁 Key Directories & Architecture

```text
/
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions workflow for automated Pages deployment
├── public/
│   ├── favicon.svg          # Site icon
│   └── Muhammad_Ali_Alam_CV.pdf # Professional Curriculum Vitae (PDF)
├── src/
│   ├── components/
│   │   ├── Navigation.astro # Responsive top navigation header with scroll spy
│   │   └── Footer.astro     # Editorial footer component
│   ├── content/
│   │   └── research/
│   │       ├── echo.mdx      # Case study for ECHO depression detection system
│   │       └── genobench.mdx # Project page for GenoBench benchmarking framework
│   ├── layouts/
│   │   └── Layout.astro     # Global layout (Google Fonts, styling, metadata)
│   ├── pages/
│   │   ├── index.astro      # Main landing page containing all sections
│   │   └── research/
│   │       └── [slug].astro  # Dynamic route compiling MDX research pages
│   └── styles/
│       └── global.css       # Tailwind v4 theme extensions & custom prose styles
├── astro.config.mjs         # Astro integrations & Shiki syntax highlighting settings
├── src/content.config.ts    # Content collections schema configuration
└── package.json             # Project dependencies and script endpoints
```

---

## 🧞 Local Development

All commands are run from the root of the project:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
To run in standard mode:
```bash
npm run dev
```

To run in the background (as per project rules):
```bash
npx astro dev --background
```
*Manage the background server with `npx astro dev status`, `npx astro dev logs`, and `npx astro dev stop`.*

### 3. Production Build
Builds the static assets to the `./dist/` directory:
```bash
npm run build
```

---

## 🛡️ License

This project is open-source and licensed under the [MIT License](LICENSE) (or see repository defaults).
