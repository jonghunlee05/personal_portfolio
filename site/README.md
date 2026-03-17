# Portfolio (Next.js)

Minimal, content-first portfolio. Smart-cheap aesthetic: plain layout, restrained accent, clean typography.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Content

- Replace placeholder copy in each component with your CV content.
- Add project URLs in `components/Projects.tsx` (GitHub, Case Study, Demo); links are disabled until `href` is not `#`.
- Add profile photo: use Next.js `Image` in `components/Hero.tsx` (see comment in layout).
- Add downloadable CV: uncomment and set link in `components/Contact.tsx`.

## Structure

- `app/` — layout, page, globals
- `components/` — Navbar, Hero, About, Education, Experience, Projects, Leadership, Awards, Skills, Contact, Footer, SectionDivider, FocusBlock

Single-page layout with anchor links and smooth scroll.
