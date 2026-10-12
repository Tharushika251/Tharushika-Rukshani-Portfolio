# Tharushika Rukshani – Portfolio

A modern, responsive, single-page developer portfolio built with **React 18 + Vite**.

**Sections:** Hero, About (with your photo), Experience, Skills, Projects, Education, Contact.
**Features:** light/dark theme, scroll animations, active-link highlighting, and a contact form that
delivers messages straight to your inbox (via Formspree).

---

## 1. Run it locally

Requires **Node.js 18+** (check with `node -v`).

```bash
npm install
npm run dev        # opens at http://localhost:5173
```

Production build (to test before deploying):

```bash
npm run build
npm run preview
```

---

## 2. Add your photo

Copy one photo to `public/images/me.jpg`. It is used in the About section and as the hero avatar,
so choose a clear, well-lit portrait (portrait orientation works best, about 1000-1600 px, under 400 KB).

Different name or format? Edit `about.photo` in `src/data.js`.
Until the file exists, a placeholder is shown.

---

## 3. Add your CV and links

All of these are in `src/data.js`:

- **CV:** put your CV PDF in `public/` and name it `Tharushika_Rukshani_CV.pdf`
  (or change `profile.cv`).
- **Social links:** replace the `linkedin` and `github` placeholders with your real URLs.
- **Projects:** fill in `github` and `live` for each project (leave `""` to hide a button).

---

## 4. Set up the contact form (Formspree)

The form needs an endpoint to actually deliver messages.

1. Sign up at https://formspree.io using the email where you want to receive messages.
2. Click **New Form**, name it "Portfolio", and copy the endpoint
   (looks like `https://formspree.io/f/abcdwxyz`).
3. In `src/data.js`, paste it into `profile.formEndpoint`:

```js
   formEndpoint: "https://formspree.io/f/abcdwxyz",
```

4. Run the site, send yourself a test message, and click the confirmation link Formspree emails you
   the first time. After that, messages arrive in your inbox.

The free plan allows about 50 submissions per month. If the form fails, visitors see a message
with your email address as a fallback.

---

## 5. Editing content

- **All text** (profile, about, education, experience, skills, projects) lives in `src/data.js`.
- **Colors and spacing** are CSS variables at the top of `src/index.css` (`--primary`, `--accent`, ...).

---

## 6. Deploy

Before deploying, finish steps 2-4 (photo, CV, links, form endpoint) and run `npm run build`
once to make sure there are no errors.

### Step A: Put the project on GitHub

1. Create a free account at https://github.com, then click **New repository**
   (e.g. `portfolio`, public, no README).
2. In the project folder, run:

```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
```

   (`node_modules` and `dist` are already ignored by `.gitignore`.)

### Step B (recommended): Deploy on Vercel

1. Go to https://vercel.com and sign in with GitHub.
2. Click **Add New → Project** and import your `portfolio` repository.
3. Vercel detects Vite automatically. Confirm these settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. In about a minute you get a live link like `https://portfolio-xxxx.vercel.app`.

### Alternative: Deploy on Netlify

1. Go to https://netlify.com and sign in with GitHub.
2. Click **Add new site → Import an existing project** and choose your repository.
3. Build command: `npm run build`, publish directory: `dist`.
4. Click **Deploy site**.

### Alternative: Deploy on GitHub Pages

GitHub Pages serves your site from `/your-repo-name/`, so two extra changes are needed:

1. In `vite.config.js`, set the base path:

```js
   export default defineConfig({
     base: "/portfolio/",
     plugins: [react()],
   });
```

2. In `src/data.js`, make the photo and CV paths base-aware:

```js
   cv: `${import.meta.env.BASE_URL}Tharushika_Rukshani_CV.pdf`,
   photo: { src: `${import.meta.env.BASE_URL}images/me.jpg`, alt: "..." },
```

3. In `index.html`, change the favicon link to `href="%BASE_URL%favicon.svg"`.
4. Add a GitHub Actions workflow (or run `npm run build` and publish the `dist` folder with the
   `gh-pages` package), then in the repo go to **Settings → Pages** and select the source.

Vercel or Netlify are simpler because they need none of these changes.

### Updating the site later

Edit your files, then:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel and Netlify redeploy automatically within a minute.

### Optional: custom domain

Buy a domain (e.g. `tharushika.dev`), then in Vercel go to **Project → Settings → Domains**
(or Netlify **Domain management**) and follow the DNS instructions shown there.

---

## Deployment checklist

- [ ] `public/images/me.jpg` added
- [ ] `public/Tharushika_Rukshani_CV.pdf` added
- [ ] LinkedIn and GitHub URLs updated in `src/data.js`
- [ ] Project GitHub/live links added (optional)
- [ ] `formEndpoint` pasted and a test message received
- [ ] `npm run build` succeeds
- [ ] Pushed to GitHub and deployed
- [ ] Tested the live site on your phone, including the contact form

---

## Project structure

```
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   ├── Tharushika_Rukshani_CV.pdf   <- add your CV
│   └── images/
│       └── me.jpg                   <- add your photo
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data.js                      <- all your content
    ├── index.css
    └── components/
        ├── Navbar.jsx  Hero.jsx  About.jsx  Experience.jsx
        ├── Skills.jsx  Projects.jsx  Education.jsx  Contact.jsx
        └── Footer.jsx  Reveal.jsx  SectionHeading.jsx
```