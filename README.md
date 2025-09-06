# Sagor Portfolio v4 — Dark Neon (with Resume)
Tech: React + Vite + Tailwind + Lucide

## Run
npm install
npm run dev

## Build
npm run build   # outputs dist/

## Replace Resume
Place your own file at: public/resume.pdf
Navbar "Resume" and Hero "Download CV" both download that file.

## Deploy
- Netlify drag & drop: upload dist/
- Netlify CLI: npx netlify-cli deploy --prod --dir=dist
- Vercel: build command `npm run build`, output `dist`
