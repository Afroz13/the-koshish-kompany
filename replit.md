# The Koshish Kompany Website

## Overview

Full-stack corporate website for "The Koshish Kompany" — an Edutech & Consultancy firm based in India. Built as a 5-page React website with backend contact form API.

## Stack

- **Frontend**: React 19 + TypeScript + Tailwind CSS v4 + Vite (artifact: `koshish-website`)
- **Backend**: Express 5 API server (artifact: `api-server`)
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24

## Pages

- `/` — Home: Hero with anniversary banner, services overview, founder spotlight, CTA
- `/about` — About: Company story, core values, board of members with photos
- `/services` — Services: All 5 services with pricing table
- `/testimonials` — Testimonials: 6 client reviews + feedback CTA
- `/contact` — Contact: Form with validation, contact info, WhatsApp link

## Branding

- Navy Blue: #1E3A8A
- Gold: #D4AF37
- Fonts: Poppins (headings) + Inter (body)

## Images (from word document)

Located in `artifacts/koshish-website/public/images/`:
- `anniversary.jpeg` — 1st Year Anniversary poster (Gaurav + Logo)
- `logo.png` — TKK Triangle/Anchor Logo
- `gaurav-founder.png` — Gaurav Goswami (Founder) professional photo
- `yogesh.png` — Yogesh Singh Nayal (Technical Director)
- `afroz.png` — MD Afroz Ansari (Director of Data & Digital Strategy)
- `team4.jpeg` — Additional team member

## Database Schema

- `contacts` — id, name, email, phone, message, created_at

## Key Commands

- `pnpm --filter @workspace/koshish-website run dev` — run website locally
- `pnpm --filter @workspace/api-server run dev` — run API server
- `pnpm --filter @workspace/db run push` — push DB schema changes

## API Endpoints

- `POST /api/contact` — Submit contact form (validated with Zod, stored in PostgreSQL)

## Contact Details

- Phone: +91 6204077451
- Email: thekoshishkompany@gmail.com
- Instagram: @thekoshishkompany
- WhatsApp: https://wa.me/916204077451
