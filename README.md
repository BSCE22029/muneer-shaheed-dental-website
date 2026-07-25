# Muneer Shaheed Dental Clinic — Website (Redesign Pitch Build)

Production-ready Next.js 15 marketing site built as a redesign proposal for **Muneer Shaheed Dental Clinic** (Cantt, Lahore) — a 15,900+ Facebook-follower dental practice currently operating with no website of its own.

## Stack
- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS
- Framer Motion (scroll animations)
- Lucide Icons

## What's real vs. sample content
- **Real / verified:** business name, address, phone, Facebook link, follower count.
- **Sample placeholder content (clearly marked in-page):** services & pricing, doctor bio, testimonials, gallery images. Replace with the clinic's actual services/pricing, real doctor credentials, real patient reviews, and real photography before going live.
- Photography is represented with styled placeholder blocks rather than scraped images — swap in licensed/owned photos before launch.

## Pages
Home · About · Services & Pricing · **Our Doctors** · Gallery · Testimonials · FAQs · Contact (with map + form) · **Book Appointment** (dedicated booking form) · Privacy Policy · Custom 404

## Features included
Responsive design, SEO metadata + Open Graph/Twitter cards, JSON-LD Dentist schema + FAQ schema, `sitemap.ts` / `robots.ts`, dynamically generated favicon, WhatsApp floating button (appointment inquiries), click-to-call button, contact form + separate appointment booking form (both stub API routes — need a real email/calendar service wired in), loading skeleton, scroll-triggered Framer Motion animations, `prefers-reduced-motion` support.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Before going live
1. Confirm real doctor name(s)/credentials for `lib/site-config.ts` (`doctors` array) — only the clinic founder's name was used as a placeholder since additional associate dentists were not publicly listed.
2. Replace sample services, pricing, testimonials, and gallery captions with real content.
3. Replace placeholder image blocks with real clinic photography.
4. Wire `app/api/contact/route.ts` and `app/api/booking/route.ts` to a real email/calendar service — see `.env.example`.
5. Update `siteConfig.domain` to the final production domain once purchased.
6. Run `npm run build` locally to confirm a clean production build before deploying.

## Deploying to Vercel
1. Push this folder to its own GitHub repository.
2. Go to vercel.com → **Add New Project** → import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required for the base build.
4. Click **Deploy**. Vercel will assign a URL like `https://muneer-shaheed-dental-website.vercel.app` — a custom domain can be attached afterward.

## Lighthouse target
This build avoids render-blocking patterns, uses `next/font` for zero layout-shift fonts, and lazy-loads below-the-fold content — a clean `npm run build` + Vercel deploy should score 95+ on Performance, Accessibility, Best Practices, and SEO.
