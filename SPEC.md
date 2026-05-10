# CreatorFund - Specification

## 1. Concept & Vision

CreatorFund is a grant and funding tracker for independent creators. It aggregates grants from YouTube, TikTok, Spotify, brands, and government programs — showing who's eligible, what's the deadline, and how much you can get. Built for creators who don't have agents or managers. The vibe is confident, optimistic, and warm — like a trusted friend who happens to know where all the free money is.

## 2. Design Language

**Aesthetic:** Warm, confident, professional but approachable. Think "premium farmer's market meets startup pitch deck."

**Color Palette:**
- Background: `#fefce8` (warm cream)
- Surface: `#ffffff` (white cards)
- Border: `#fde047` (yellow border accents)
- Primary: `#ca8a04` (gold — value/reward)
- Secondary: `#16a34a` (green — growth/success)
- Success: `#22c55e` (bright green)
- Text: `#1c1917` (near-black)
- Muted: `#78716c` (warm gray)

**Typography:** Inter (sans-serif fallback)

**Spatial System:** 8px base unit, generous padding, relaxed line heights

**Motion:** Subtle and purposeful — fade-ins on scroll, hover lifts on cards

## 3. Layout & Structure

- **NavBar:** Logo | Grants | Deadline Tracker | Pricing | Login | Get Funded CTA
- **Hero:** Centered headline, subtext, dual CTAs
- **Grant Preview:** Mock card showing grant name, funder, amount, deadline, eligibility badge
- **Features Grid:** 6 features in 3×2 grid
- **How It Works:** 4-step horizontal flow
- **Stats Bar:** 3 metrics in a row
- **Testimonials:** 3 testimonial cards
- **Pricing:** 3-tier pricing table
- **CTA:** Final call to action
- **Footer:** Links and copyright

## 4. Features & Interactions

- Static marketing landing page
- Smooth scroll navigation
- Card hover states with subtle lift
- Pricing tier selection (visual only)
- Responsive: mobile-first breakpoints

## 5. Component Inventory

- NavBar (sticky, logo + links + CTA)
- HeroSection (headline, subtext, dual buttons)
- GrantPreviewCard (grant details, badge, deadline)
- FeatureCard (icon, title, description)
- HowItWorksStep (number, title, description)
- StatCard (value, label)
- TestimonialCard (quote, name, platform, avatar placeholder)
- PricingCard (tier name, price, features, CTA button)
- CTASection (headline, button)
- Footer (logo, links, copyright)

## 6. Technical Approach

- **Framework:** Next.js 15 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"`, `@theme {}`)
- **Icons:** Lucide React
- **Font:** Inter via next/font or CDN
- **Deployment:** Vercel (auto-deploy from repo)
