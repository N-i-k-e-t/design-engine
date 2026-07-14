# Design Engine — Pre-Launch Website

> AI-Powered Product Visualization, Mockup Generation & Manufacturing Platform

## 🚀 Launch Date: July 22, 2026

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **Animation**: Framer Motion 12
- **Forms**: React Hook Form + Zod
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deploy to Vercel

1. Push this repository to GitHub
2. Import the repo in [Vercel Dashboard](https://vercel.com/new)
3. Vercel auto-detects Next.js — no extra configuration needed
4. (Optional) Set environment variables in Vercel:
   - `WAITLIST_WEBHOOK_URL` — webhook to receive signups

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `WAITLIST_WEBHOOK_URL` | No | Webhook URL for waitlist signups (Zapier, Make, n8n) |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics measurement ID |

## Project Structure

```
src/
├── app/
│   ├── api/waitlist/     # Waitlist API endpoint
│   ├── globals.css       # Design system & utilities
│   ├── layout.tsx        # Root layout with SEO
│   └── page.tsx          # Landing page (all sections)
├── components/
│   ├── sections/         # 12 landing page sections
│   │   ├── HeroSection.tsx
│   │   ├── TrustSection.tsx
│   │   ├── WhoIsThisForSection.tsx
│   │   ├── ProductEcosystemSection.tsx
│   │   ├── AIFeaturesSection.tsx
│   │   ├── ManufacturingSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── RoadmapSection.tsx
│   │   ├── WaitlistSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── FooterSection.tsx
│   ├── Navbar.tsx
│   ├── Button.tsx
│   ├── GlassCard.tsx
│   ├── SectionWrapper.tsx
│   ├── SectionHeading.tsx
│   ├── Placeholder.tsx
│   └── CountdownTimer.tsx
public/
└── assets/               # Images & video
```

## Waitlist Integration

The `/api/waitlist` endpoint accepts POST requests:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "profession": "Graphic Designer",
  "keepUpdated": true
}
```

For production, connect to a database or use the webhook URL.

## License

© 2026 Design Engine. All rights reserved.
