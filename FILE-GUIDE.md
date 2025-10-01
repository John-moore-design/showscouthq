# 📁 File Guide - What Everything Does

## 🎯 Start Here Files

| File | Purpose | When to Read |
|------|---------|--------------|
| **START-HERE.md** | Your entry point | Read first |
| **QUICKSTART.md** | 30-minute setup guide | Read second |
| **PROJECT-SUMMARY.md** | Complete overview | Read third |
| **README.md** | Full documentation | Reference |

---

## 📂 Project Structure

```
income/
│
├── 📄 START-HERE.md              ← Read this first!
├── 📄 QUICKSTART.md              ← 30-min setup
├── 📄 PROJECT-SUMMARY.md         ← What you have
├── 📄 README.md                  ← Full docs
├── 📄 FILE-GUIDE.md              ← This file
│
├── ⚙️ Configuration Files
│   ├── package.json              ← Dependencies
│   ├── tsconfig.json             ← TypeScript config
│   ├── tailwind.config.ts        ← Styling config
│   ├── next.config.mjs           ← Next.js config
│   ├── postcss.config.mjs        ← CSS processing
│   ├── .env.local.example        ← Environment template
│   └── .gitignore                ← Git ignore rules
│
├── 📱 app/                       ← Next.js pages
│   ├── layout.tsx                ← Main layout (header/footer)
│   ├── page.tsx                  ← Homepage
│   ├── globals.css               ← Global styles
│   ├── disclosure/               ← Affiliate disclosure page
│   │   └── page.tsx
│   ├── sitemap.ts                ← Auto sitemap
│   └── robots.ts                 ← SEO robots.txt
│
├── 🧩 components/                ← React components
│   ├── ui/                       ← Base UI components
│   │   ├── button.tsx            ← Button component
│   │   └── card.tsx              ← Card component
│   ├── Header.tsx                ← Site header
│   ├── Footer.tsx                ← Site footer
│   ├── Hero.tsx                  ← Homepage hero
│   ├── FeaturedEvents.tsx        ← Event cards
│   ├── CityGuides.tsx            ← City sections
│   ├── VenueSpotlight.tsx        ← Venue highlights
│   ├── NewsletterCTA.tsx         ← Email signup
│   ├── AffiliateButton.tsx       ← Smart affiliate links
│   └── Analytics.tsx             ← Google Analytics
│
├── 🔧 lib/                       ← Core utilities
│   ├── affiliate.ts              ← Affiliate link system
│   ├── contentful.ts             ← CMS integration
│   └── utils.ts                  ← Helper functions
│
└── 📚 docs/                      ← Documentation
    ├── contentful-setup.md       ← CMS setup guide
    ├── affiliate-programs.md     ← Affiliate details
    ├── content-templates.md      ← Writing templates
    ├── email-marketing.md        ← Email strategy
    ├── launch-checklist.md       ← Launch steps
    ├── seo-strategy.md           ← SEO guide
    └── tracking-template.md      ← Revenue tracking
```

---

## 📄 File Descriptions

### Root Level Files

#### START-HERE.md
**What:** Your entry point to the project  
**When:** Read first, before anything else  
**Contains:** Quick overview, next steps, navigation

#### QUICKSTART.md
**What:** 30-minute setup guide  
**When:** After reading START-HERE.md  
**Contains:** Step-by-step setup instructions

#### PROJECT-SUMMARY.md
**What:** Complete project overview  
**When:** After QUICKSTART.md  
**Contains:** What's built, how it works, revenue projections

#### README.md
**What:** Full project documentation  
**When:** Reference as needed  
**Contains:** Complete setup, features, tech stack

#### FILE-GUIDE.md
**What:** This file - explains project structure  
**When:** When you need to find something  
**Contains:** File descriptions and navigation

---

### Configuration Files

#### package.json
**What:** Project dependencies and scripts  
**Edit:** Only to add new packages  
**Commands:**
- `npm install` - Install dependencies
- `npm run dev` - Start dev server
- `npm run build` - Build for production

#### .env.local.example
**What:** Environment variable template  
**Edit:** Copy to `.env.local` and add your keys  
**Contains:** API keys, affiliate IDs, site config

#### tsconfig.json
**What:** TypeScript configuration  
**Edit:** Rarely (already optimized)

#### tailwind.config.ts
**What:** Tailwind CSS configuration  
**Edit:** To customize colors/theme  
**Contains:** Design tokens, theme settings

#### next.config.mjs
**What:** Next.js configuration  
**Edit:** To add image domains  
**Contains:** Build settings, image config

---

### App Directory (Pages)

#### app/layout.tsx
**What:** Main layout wrapper  
**Contains:** Header, Footer, Analytics  
**Edit:** To change site-wide layout

#### app/page.tsx
**What:** Homepage  
**Contains:** Hero, Featured Events, City Guides  
**Edit:** To change homepage content

#### app/globals.css
**What:** Global styles  
**Contains:** Tailwind imports, CSS variables  
**Edit:** To customize colors/fonts

#### app/disclosure/page.tsx
**What:** Affiliate disclosure page  
**URL:** /disclosure  
**Edit:** To update disclosure text

#### app/sitemap.ts
**What:** Auto-generated sitemap  
**URL:** /sitemap.xml  
**Edit:** To add/remove pages

#### app/robots.ts
**What:** SEO robots.txt  
**URL:** /robots.txt  
**Edit:** To change crawl rules

---

### Components Directory

#### components/ui/
**What:** Base UI components (shadcn/ui)  
**Contains:** Button, Card, etc.  
**Edit:** Rarely (already styled)

#### components/Header.tsx
**What:** Site header with navigation  
**Contains:** Logo, nav menu, CTA button  
**Edit:** To change navigation

#### components/Footer.tsx
**What:** Site footer  
**Contains:** Links, social, disclosure  
**Edit:** To change footer content

#### components/Hero.tsx
**What:** Homepage hero section  
**Contains:** Headline, CTA buttons, stats  
**Edit:** To change hero content

#### components/FeaturedEvents.tsx
**What:** Event cards section  
**Contains:** Mock events (replace with Contentful)  
**Edit:** To change event display

#### components/CityGuides.tsx
**What:** City sections  
**Contains:** Dallas, Nashville, Chicago cards  
**Edit:** To add/remove cities

#### components/VenueSpotlight.tsx
**What:** Venue highlights  
**Contains:** Top venue cards  
**Edit:** To change featured venues

#### components/NewsletterCTA.tsx
**What:** Email signup form  
**Contains:** ConvertKit integration  
**Edit:** To change signup copy

#### components/AffiliateButton.tsx
**What:** Smart affiliate link button  
**Contains:** Link generation, tracking  
**Edit:** Rarely (already optimized)  
**Usage:**
```tsx
<AffiliateButton
  program="ticketnetwork"
  artist="Luke Combs"
  city="Dallas"
>
  Get Tickets
</AffiliateButton>
```

#### components/Analytics.tsx
**What:** Google Analytics integration  
**Contains:** GA4 script  
**Edit:** Never (uses env variables)

---

### Lib Directory (Core Logic)

#### lib/affiliate.ts
**What:** Affiliate link management system  
**Contains:**
- Link generation
- UTM tracking
- Program priority
- Click tracking

**Key Functions:**
```typescript
generateAffiliateUrl() // Create affiliate link
trackAffiliateClick()  // Track clicks
getRecommendedProgram() // Get best program
```

**Edit:** To add new affiliate programs

#### lib/contentful.ts
**What:** Contentful CMS integration  
**Contains:**
- Content fetching
- Type definitions
- API calls

**Key Functions:**
```typescript
getEvents()           // Fetch events
getArticles()         // Fetch articles
getArticleBySlug()    // Fetch single article
```

**Edit:** To add new content types

#### lib/utils.ts
**What:** Helper utilities  
**Contains:**
- Class name merger (cn)
- Date formatter

**Edit:** To add utility functions

---

### Docs Directory (Guides)

#### docs/contentful-setup.md
**What:** Complete CMS setup guide  
**Contains:**
- Account setup
- Content models
- API keys
- Sample content

**Read:** Before setting up Contentful

#### docs/affiliate-programs.md
**What:** Affiliate program details  
**Contains:**
- Program comparison
- Application process
- Link strategy
- Optimization tips

**Read:** Before applying to programs

#### docs/content-templates.md
**What:** Writing templates  
**Contains:**
- Concert review template
- Venue guide template
- City roundup template
- SEO checklists

**Read:** Before writing content

#### docs/email-marketing.md
**What:** Email strategy guide  
**Contains:**
- ConvertKit setup
- Email sequences
- Lead magnets
- Automation workflows

**Read:** Before setting up email

#### docs/launch-checklist.md
**What:** Pre-launch checklist  
**Contains:**
- Setup steps
- Testing checklist
- Launch day tasks
- Post-launch monitoring

**Read:** Before launching

#### docs/seo-strategy.md
**What:** SEO tactics guide  
**Contains:**
- Keyword research
- On-page SEO
- Link building
- Technical SEO

**Read:** Before creating content

#### docs/tracking-template.md
**What:** Revenue tracking guide  
**Contains:**
- Google Sheets template
- Metrics to track
- Weekly review process
- Goal tracking

**Read:** After launching

---

## 🔍 Finding What You Need

### "I want to..."

#### ...get started quickly
→ Read `START-HERE.md` then `QUICKSTART.md`

#### ...understand the whole project
→ Read `PROJECT-SUMMARY.md` then `README.md`

#### ...set up the CMS
→ Read `docs/contentful-setup.md`

#### ...apply to affiliate programs
→ Read `docs/affiliate-programs.md`

#### ...write content
→ Read `docs/content-templates.md`

#### ...improve SEO
→ Read `docs/seo-strategy.md`

#### ...set up email marketing
→ Read `docs/email-marketing.md`

#### ...launch the site
→ Read `docs/launch-checklist.md`

#### ...track revenue
→ Read `docs/tracking-template.md`

#### ...change the homepage
→ Edit `app/page.tsx`

#### ...change the header/footer
→ Edit `components/Header.tsx` or `components/Footer.tsx`

#### ...add a new page
→ Create file in `app/[page-name]/page.tsx`

#### ...customize colors
→ Edit `tailwind.config.ts` and `app/globals.css`

#### ...add affiliate links
→ Use `<AffiliateButton>` component

#### ...fetch content from CMS
→ Use functions in `lib/contentful.ts`

---

## 📝 Editing Guide

### Files You'll Edit Often

| File | Why | How Often |
|------|-----|-----------|
| `app/page.tsx` | Update homepage | Monthly |
| `components/FeaturedEvents.tsx` | Update events | Weekly |
| `.env.local` | Add API keys | Once |

### Files You'll Edit Sometimes

| File | Why | How Often |
|------|-----|-----------|
| `components/Header.tsx` | Change navigation | Rarely |
| `components/Footer.tsx` | Update links | Rarely |
| `tailwind.config.ts` | Customize theme | Once |

### Files You'll Never Edit

| File | Why |
|------|-----|
| `lib/affiliate.ts` | Already optimized |
| `components/Analytics.tsx` | Uses env variables |
| `tsconfig.json` | Already configured |
| `next.config.mjs` | Already configured |

---

## 🚀 Common Tasks

### Add New Page
1. Create `app/[page-name]/page.tsx`
2. Add to `app/sitemap.ts`
3. Link from header/footer

### Add New Component
1. Create `components/[ComponentName].tsx`
2. Import in page: `import { ComponentName } from '@/components/ComponentName'`
3. Use: `<ComponentName />`

### Change Colors
1. Edit `tailwind.config.ts` (color definitions)
2. Edit `app/globals.css` (CSS variables)
3. Restart dev server

### Add Affiliate Link
```tsx
import { AffiliateButton } from '@/components/AffiliateButton';

<AffiliateButton
  program="ticketnetwork"
  artist="Artist Name"
  venue="Venue Name"
  city="City"
>
  Get Tickets
</AffiliateButton>
```

### Fetch Content from CMS
```tsx
import { getArticles } from '@/lib/contentful';

const articles = await getArticles(10);
```

---

## 🆘 Troubleshooting

### "I can't find..."

**...where to start**
→ `START-HERE.md`

**...setup instructions**
→ `QUICKSTART.md`

**...how to write content**
→ `docs/content-templates.md`

**...affiliate program info**
→ `docs/affiliate-programs.md`

**...the homepage code**
→ `app/page.tsx`

**...the affiliate link code**
→ `lib/affiliate.ts`

**...the header/footer**
→ `components/Header.tsx` and `components/Footer.tsx`

---

## 📚 Reading Order

### For Quick Launch
1. START-HERE.md
2. QUICKSTART.md
3. docs/contentful-setup.md
4. docs/affiliate-programs.md
5. Launch!

### For Deep Understanding
1. START-HERE.md
2. QUICKSTART.md
3. PROJECT-SUMMARY.md
4. README.md
5. All docs in docs/ folder

### For Content Creation
1. docs/content-templates.md
2. docs/seo-strategy.md
3. docs/email-marketing.md

### For Launch
1. docs/launch-checklist.md
2. docs/tracking-template.md

---

## 🎯 Quick Reference

| Need | File |
|------|------|
| Start | `START-HERE.md` |
| Setup | `QUICKSTART.md` |
| Overview | `PROJECT-SUMMARY.md` |
| Full docs | `README.md` |
| This guide | `FILE-GUIDE.md` |
| CMS | `docs/contentful-setup.md` |
| Affiliates | `docs/affiliate-programs.md` |
| Content | `docs/content-templates.md` |
| SEO | `docs/seo-strategy.md` |
| Email | `docs/email-marketing.md` |
| Launch | `docs/launch-checklist.md` |
| Tracking | `docs/tracking-template.md` |

---

**Now you know where everything is!** 🎉

Go back to `START-HERE.md` and begin your journey.
