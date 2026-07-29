# AndrewBrought.com v2 — Overhaul specification

Status: Draft — implementation will begin on branch `overhaul/init`.

Goal
------
- Reposition the site as an executive personal platform for a technical founder-operator.
- Produce a static site build that can be uploaded to Hostinger (`public_html` / zip).

Constraints
-----------
- Hostinger will be served from static files in `public_html` — final artifact must be a zip of the built `public_html` folder.
- Avoid autoplay media and heavy runtime requirements (no server-side runtime on Hostinger shared hosting).
- Preserve a subtle teal/green accent from the current identity.

High-level information architecture
----------------------------------
Pages:
- Home (primary, single-screen narrative)
- Work (selected case studies)
- Essays (thinking)
- About / Contact

Home sections (priority order)
-----------------------------
1. Hero — editorial headline, concise professional positioning, two CTAs (Explore work, Start a conversation). No autoplay video; use still or subtle motion only.
2. Operating range — three or four focused cards: Build the foundation, Shape the product, Create momentum.
3. Selected work — prioritized projects (vigour, platform/data, GTM). Cards with 1–2 image thumbnails, short outcome bullets, role, link to case study.
4. Thinking — 3–6 short working essays; each item shows central question and one-sentence thesis.
5. From stage to systems — split layout with an expressive stage image + portrait; short narrative line.
6. Contact — clear CTAs for role discussions, ventures, speaking.

Design & visual direction
------------------------
- Tone: mature, editorial, confident, human.
- Typography: editorial serif for headings and a clean sans for body (e.g., Lora / Inter). Use system fonts if licensing is a concern.
- Palette: neutral background (#0f1724 / near black), paper-white content surfaces, teal accent (faint): #0ea5a4 or similar.
- Imagery: real photography (portrait + contextual images). Avoid generic sci-fi imagery.

Accessibility & performance
--------------------------
- High contrast text on content surfaces.
- Mobile-first responsive layout.
- Images optimized and lazy-loaded.
- Minimal JavaScript; keep 3D or heavy scenes behind an optional route or progressive enhancement toggles.

Stack decision
--------------
- Keep existing Vite + React + Tailwind stack to accelerate development and reuse components.
- Output: static `dist` → `public_html` (we already have `package:hostinger` script and `scripts/package-for-hostinger.sh`).

Implementation plan (short)
---------------------------
Phase A — Design & content (this file + content CSV/MD)
Phase B — Scaffold: create `src/overhaul/` folder with `HomeSkeleton.jsx`, minimal CSS/Tailwind classes, placeholder images.
Phase C — Implement components: `Hero`, `OperatingRange`, `SelectedWork`, `Thinking`, `StageSystems`, `Contact`.
Phase D — Content population, image/asset migration to `/public/images/`.
Phase E — QA, build, package, and deploy zip for Hostinger.

Immediate next steps (I'll execute now)
-------------------------------------
1. Create this spec (done).
2. Scaffold `src/overhaul/HomeSkeleton.jsx` and wire it as the default in `overhaul/init` (I will implement after you confirm or I can proceed now).

Deliverables
------------
- `design/overhaul_spec.md` (this file)
- Initial scaffold in `src/overhaul/` (on `overhaul/init`) — components and pages
- Hostinger packaging script (already added)

Notes
-----
If you want a different stack (Astro, Next.js), I can scaffold that instead — you'll lose reuse of current components but may gain SEO/SSR benefits. For fastest path to Hostinger static files, Vite + React + Tailwind is appropriate.

End of spec.
