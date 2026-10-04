# Madheshwarr MM, QA Engineer Portfolio

A responsive portfolio website for a software QA engineer (manual and automation testing, with research into Generative AI in testing). All content comes from the candidate's résumé.

Suggested repository name: `madheshwarr-qa-portfolio`

## Tech stack

- Next.js 14 (App Router) and React 18
- TypeScript
- Tailwind CSS 3, with light and dark themes driven by CSS variables
- `next/font` (Space Grotesk, IBM Plex Sans, IBM Plex Mono)

No API keys or environment variables are needed.

## Run locally

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build, run `npm run build` then `npm start`.

## Project structure

```
app/            layout, global styles, home page
components/     one component per section, plus Header, Footer, ThemeToggle
data/           portfolio.ts, the single source of all site content
public/         résumé PDF used by the download buttons
```

## Customize the content

- **Text, projects, experience, skills, certifications:** edit `data/portfolio.ts`. Components only render what is in that file.
- **LinkedIn / GitHub:** add entries to `profile.links` in `data/portfolio.ts`; they appear in the Contact section automatically.
- **Résumé PDF:** replace `public/Madheshwarr_MM_Resume.pdf` (keep the filename, or update `profile.resume`).
- **Colors:** change the CSS variables in `app/globals.css` (`:root` for light, `.dark` for dark).
- **Fonts:** change the imports in `app/layout.tsx`.
- **Section order:** reorder the components in `app/page.tsx` and the links in `components/Header.tsx`.

## Deploy

Push the repository to GitHub and import it into Vercel (or any Next.js host). No configuration is required.
