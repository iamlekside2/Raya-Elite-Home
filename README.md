# Raya Elite — Home & Office Cleaning

Marketing website for **Raya Elite Home & Office Cleaning Services LLC**, a luxury residential & commercial cleaning company serving Maryland and Washington D.C.

Built per the MMUSA Website Development Guide (v2.0).

## Stack

- **Next.js 14** (App Router) · React 18 · TypeScript
- **Tailwind CSS** (custom brand tokens)
- `next/font` (Playfair Display + Lato), `next/image`
- Deployed on **Vercel**

## Pages

`/` · `/services` · `/about` · `/book` · `/testimonials` · `/gallery` · `/contact`
plus `app/api/contact/route.ts` (server-side form handler).

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in. On Vercel, set the same keys
under **Project → Settings → Environment Variables**.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 |
| `NEXT_PUBLIC_FB_PIXEL_ID` | Facebook Pixel |
| `NEXT_PUBLIC_TIDIO_KEY` | Tidio live chat |
| `NEXT_PUBLIC_BIRDEYE_WIDGET_ID` | Birdeye reviews widget |
| `NEXT_PUBLIC_JOBBER_BOOKING_URL` | Jobber online booking embed |
| `NEXT_PUBLIC_GOOGLE_MAPS_KEY` | Google Maps embed |
| `CONTACT_FORM_EMAIL` | Destination for `/api/contact` |
| `SENDGRID_API_KEY` | Email delivery (or Resend) |
| `GHL_WEBHOOK_URL` | GoHighLevel CRM capture |

All third-party scripts are env-gated — they render nothing until their key is set,
so the site runs cleanly without any of them configured.

## Before launch

- Replace Unsplash placeholder photography with real Raya Elite photos (WebP, `next/image`).
- Add the two leadership headshots (currently monogram avatars).
- Wire the live Jobber, Birdeye, GoHighLevel, Maps, and analytics keys.
- Confirm the real business phone number (placeholder: `(240) 555-0147`).
