# AGENT.md — BAJUS Gold Industry Landing Page

## Project Name
**BAJUS** — Bangladesh Bullion and Jewellers Association  
*Official Digital Platform for Bangladesh's Gold Industry*

---

## Mission
Build a world-class, production-grade **Next.js 15 landing page** for BAJUS — the premier trade body representing Bangladesh's gold, bullion, and jewellery industry. This page must evoke trust, authority, and the timeless prestige of gold, while delivering modern UX and rich data-driven content.

---

## Tech Stack (Strict)

| Layer | Choice |
|---|---|
| Framework | **Next.js 15** (App Router) |
| Styling | **Tailwind CSS v4** |
| Animation | **Framer Motion** |
| State Management | **Zustand** (ALL UI state — no useState/useReducer anywhere) |
| Language | **TypeScript** (strict mode) |
| Icons | **Lucide React** |
| Charts | **Recharts** |
| Font | Google Fonts via `next/font` |

---

## Design Direction

### Color Palette (from brand reference)
```
--gold-warm:     #B59D86   (primary gold/sand)
--gold-deep:     #8B7D6B   (muted khaki gold)
--gold-brown:    #7A6354   (deep warm brown)
--gold-bright:   #D4AF6A   (bright accent gold)
--gold-light:    #F5EDD6   (parchment/cream)
--dark-bg:       #0F0B07   (near-black warm)
--dark-surface:  #1A1510   (dark warm surface)
--text-primary:  #F0E8D8   (warm white)
--text-muted:    #A89880   (muted text)
```

### Aesthetic
- **Luxury Editorial** — think World Gold Council meets a premium financial journal
- Dark hero with warm gold gradients, NOT purple/blue
- Serif display font (e.g., `Playfair Display`) for headings — evokes craftsmanship
- Clean sans-serif (e.g., `DM Sans`) for body text
- Subtle gold particle/grain texture overlay on hero
- Framer Motion: staggered reveal on scroll, smooth page load entrance
- Gold shimmer/glint animations on CTAs and section headers

---

## Zustand Store Architecture

Create dedicated stores in `/store/`:

```
/store/
  useMenuStore.ts         # mobile nav open/close
  useGoldPriceStore.ts    # live/mock gold price data + last updated timestamp
  useMarketStore.ts       # market tab selection, filter state
  useResearchStore.ts     # research category filter, pagination
  useMemberStore.ts       # member directory filters
  useModalStore.ts        # any modal/dialog open state
  useThemeStore.ts        # (optional) theme preferences
```

**Rule**: Zero `useState` or `useReducer` for UI state. All component state via Zustand.

---

## Component Architecture

All components in `/components/` must be **reusable, typed, and composable**:

```
/components/
  /layout/
    Navbar.tsx            # sticky, transparent→solid on scroll, mobile hamburger
    Footer.tsx            # rich footer with quick links, socials, contact
    MobileMenu.tsx        # full-screen mobile drawer (Zustand controlled)
  /sections/
    HeroSection.tsx       # full-screen hero with gold particle bg
    GoldTickerBar.tsx     # live scrolling gold price ticker (top bar)
    AboutSection.tsx      # BAJUS mission/vision
    GoldPriceSection.tsx  # today's gold prices (22K/21K/18K karat)
    MarketInsightsSection.tsx
    IndustryLeadersSection.tsx   # "Bytes of Industry Leaders"
    ResearchSection.tsx          # research sharing hub
    CraftsmanSection.tsx         # documentary/craftsman spotlight
    InvestmentSection.tsx        # opportunity & strength of gold
    NewsSection.tsx              # news, predictions, forecasts
    EventsSection.tsx            # fairs, initiatives
    MembersSection.tsx           # member directory preview
    CSRSection.tsx
    MediaSection.tsx
    PartnersSection.tsx          # strategic partners logos
    ContactSection.tsx           # helpdesk + feedback
    CTASection.tsx               # membership signup CTA
  /ui/
    GoldCard.tsx          # reusable card with gold border/glow
    SectionHeader.tsx     # animated section title with gold underline
    GoldButton.tsx        # primary CTA button with shimmer animation
    PriceTable.tsx        # gold price karat table
    StatCard.tsx          # animated number stat card
    ResearchCard.tsx      # research paper/article card
    LeaderCard.tsx        # industry leader quote card
    NewsCard.tsx          # news article card
    ChartWrapper.tsx      # recharts wrapper with gold theme
    Ticker.tsx            # horizontal scrolling price ticker
    Badge.tsx             # karat/category badge
    Modal.tsx             # reusable modal (Zustand controlled)
    Divider.tsx           # decorative gold divider
```

---

## Landing Page Sections (in order)

### 1. Gold Price Ticker Bar
- Top of page, full width
- Horizontally scrolling: 24K | 22K | 21K | 18K prices in BDT
- Auto-updates via Zustand store (mock data OK for now with realistic BDT values)
- Gold text on dark background

### 2. Navbar
- Logo: "BAJUS" with gold emblem
- Links: About | Industry | Market Data | Research | Members | News | Contact
- Sticky — transparent hero → solid dark on scroll (Zustand scroll state)
- Mobile: hamburger → full-screen overlay menu
- "Member Login" button (gold outlined)

### 3. Hero Section
- Full-screen (100vh)
- Background: dark with subtle gold bokeh/particle animation (CSS or Framer Motion)
- Grain texture overlay
- Headline: "Bangladesh's Premier Gold Industry Authority"
- Subheadline: "Empowering bullion traders, jewellers, investors & craftsmen across Bangladesh"
- Two CTAs: "Explore Market Data" (gold filled) | "Become a Member" (outlined)
- Animated gold price counters at bottom of hero (22K, 21K, 18K BDT per gram)
- Framer Motion: fade+slide up on load with stagger

### 4. Live Gold Price Section
- "Today's Gold Prices" — BAJUS indicative retail rates
- Table: Fine Gold 999 / 22KT / 21KT / 18KT / 14KT
- Prices in BDT per gram
- Small disclaimer: "Rates exclude 5% VAT and making charges"
- Recharts line chart: 30-day price trend
- Zustand: `useGoldPriceStore`

### 5. Market Insights Section
- Three tabs: **Market Monitoring** | **Predictions** | **Expert Views**
- Zustand: `useMarketStore` for active tab
- Market Monitoring: demand/supply stats, Recharts bar/area chart
- Predictions: upcoming price forecast cards
- Expert Views: local + global expert writeup cards with avatar

### 6. Industry & Corporates Section
Three cards layout:
- **Bytes of Industry Leaders** — short video/quote snippets from BAJUS leaders
- **Gold Opportunities in Bangladesh** — infographic-style stats
- **Craftsman Documentary** — feature spotlight on artisans

### 7. Research Hub Section
- "Share & Discover Gold Research"
- Filter tabs: Bangladesh | Global | Student Research
- Cards with title, author, institution, abstract snippet
- CTA: "Submit Your Research" (signup-gated, with honorium note)
- Zustand: `useResearchStore` for filters/pagination

### 8. News & Forecasts Section
- Three-column grid of NewsCards
- Categories: Price Forecast | Policy & Regulation | International Markets
- "BAJUS in the News" subsection (press mentions)

### 9. Investment Opportunities Section
- "Why Invest in Gold?"
- Four StatCards with animated counters (Framer Motion):
  - Gold demand growth %
  - Bangladesh import volume
  - Global gold reserves
  - 5-year price growth
- Two columns: "Opportunity" vs "Strength" (icon + text list)
- Recharts: global gold demand chart

### 10. Members Section
- "BAJUS Trusted Members"
- Member category tabs: Retailer | Wholesaler | Manufacturer | Bullion Dealer
- Preview grid of member cards
- CTA: "View Full Directory" | "Apply for Membership"

### 11. Events & Fairs Section
- Upcoming Events cards
- Past Highlights gallery strip

### 12. CSR & Media Section
- CSR initiatives brief
- Media gallery / press coverage logos

### 13. Circulars & Policies Section
- Downloadable circulars list (accordion)
- Latest regulatory updates

### 14. Strategic Partners Section
- Logo grid of partner organizations
- Reference: BAJUS, FBCCI, Bangladesh Bank, etc.

### 15. Follow Us / Social Section
- Social media links with animated hover states
- Newsletter signup form

### 16. Ads Positioning
- Designated ad slots: horizontal banner between sections
- Component: `AdSlot.tsx` — accepts size prop, placeholder with "Advertisement" label
- Positions: below hero, between research and news, above footer

### 17. Member Payment Portal CTA
- Prominent card section
- "Pay Your Membership Dues Online"
- CTA → member portal (external link placeholder)

### 18. Helpdesk & Feedback Section
- Contact form with fields: Name | Email | Category | Message
- Category options: Feedback | Complaint | Inquiry | Media
- Submit via Zustand form state

### 19. Footer
- Four columns: Quick Links | Services | Resources | Contact
- BAJUS address, phone, email
- Social icons
- "© 2025 BAJUS. All Rights Reserved."
- Bottom: Sitemap | Privacy Policy | Terms

---

## Animation Guidelines (Framer Motion)

```tsx
// Standard section entrance — use this pattern everywhere
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.1 }
  }
}

// Use whileInView for scroll-triggered animations
<motion.div
  variants={sectionVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
>
```

Key animations:
- Hero: staggered text reveal on mount
- Stats: count-up number animation on scroll enter
- Gold price ticker: continuous horizontal scroll
- Cards: hover lift + gold glow border
- Navbar: smooth background transition on scroll
- Mobile menu: slide-in from right with backdrop blur
- Section headers: gold underline draw animation

---

## Reference Websites (for inspiration — do NOT copy)
- https://www.gold.org — data presentation, authority tone
- https://www.ibja.co — industry association structure
- https://www.dubaicityofgold.com — luxury jewellery aesthetic
- https://www.gjepc.org — trade body layout ideas
- https://www.fbcci.org — Bangladesh business body reference

---

## File Structure

```
bajus-landing/
├── app/
│   ├── layout.tsx
│   ├── page.tsx           # imports all sections in order
│   └── globals.css        # Tailwind v4 + CSS variables
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── store/
│   ├── useMenuStore.ts
│   ├── useGoldPriceStore.ts
│   ├── useMarketStore.ts
│   ├── useResearchStore.ts
│   ├── useMemberStore.ts
│   └── useModalStore.ts
├── lib/
│   ├── mockData.ts        # all mock gold prices, research, news, members
│   └── utils.ts
├── types/
│   └── index.ts           # all TypeScript interfaces
├── public/
│   └── assets/
└── AGENT.md
```

---

## Mock Data Requirements (`/lib/mockData.ts`)

Provide realistic mock data for:
- Gold prices: BDT per gram for 999/22K/21K/18K/14K
- 30-day price history array
- 5 industry leader quotes with name/title/photo placeholder
- 8 research papers with title/author/category/abstract
- 10 news articles with title/date/category/excerpt
- 6 member listings
- 4 upcoming events
- Investment stats (realistic Bangladesh gold market figures)

---

## TypeScript Interfaces (`/types/index.ts`)

```typescript
interface GoldPrice {
  karat: string
  pricePerGram: number
  change: number
  changePercent: number
}

interface MarketData {
  date: string
  price: number
  demand: number
  supply: number
}

interface Research {
  id: string
  title: string
  author: string
  institution: string
  category: 'bangladesh' | 'global' | 'student'
  abstract: string
  publishedAt: string
  honorium: boolean
}

interface NewsArticle {
  id: string
  title: string
  excerpt: string
  category: 'forecast' | 'policy' | 'international'
  publishedAt: string
  source: string
}

interface IndustryLeader {
  id: string
  name: string
  title: string
  organization: string
  quote: string
  imageUrl: string
}

interface Member {
  id: string
  name: string
  category: 'retailer' | 'wholesaler' | 'manufacturer' | 'bullion'
  location: string
  verified: boolean
  since: number
}
```

---

## Quality Checklist

Before finishing, verify:
- [ ] Zero `useState`/`useReducer` — all state in Zustand
- [ ] All components fully typed with TypeScript
- [ ] Framer Motion on every section (scroll-triggered)
- [ ] Gold shimmer on all primary CTAs
- [ ] Responsive: mobile (375px) → tablet (768px) → desktop (1440px)
- [ ] Navbar collapses to hamburger on mobile (Zustand controlled)
- [ ] All section titles use `SectionHeader` component
- [ ] All cards use `GoldCard` base component
- [ ] Recharts charts have gold color theme matching palette
- [ ] No hardcoded colors — all via Tailwind theme or CSS variables
- [ ] `AdSlot` components placed correctly (3 positions)
- [ ] Footer has all required links
- [ ] Accessibility: aria-labels on interactive elements
- [ ] Performance: images use `next/image`, fonts use `next/font`

---

## Agent Instructions

1. Start with `types/index.ts` — define all interfaces first
2. Create all Zustand stores next
3. Build `mockData.ts` with realistic BDT gold prices
4. Build UI primitives (`/components/ui/`) 
5. Build layout components (`Navbar`, `Footer`, `MobileMenu`)
6. Build sections top to bottom
7. Wire everything in `app/page.tsx`
8. Add Framer Motion animations last as a polish pass
9. Final responsive check

**The result should feel like a premium financial + cultural institution website — authoritative, beautiful, and unmistakably gold.**
