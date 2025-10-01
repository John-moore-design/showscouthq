# ShowScoutHQ - Ticket Affiliate Website

**Positioning:** We help country and pop superfans in Dallas, Nashville, and Chicago discover the best shows with insider venue tips, curated picks, and exclusive alerts—so they never miss their favorite artists and always get premium seats.

## 🎯 Business Model

- **Revenue:** Affiliate commissions from ticket sales
- **Primary Programs:** TicketNetwork (12.5%), Vivid Seats (4-7%), StubHub (9%)
- **Target Market:** $63B+ live events market
- **Audience:** Country & Pop superfans/VIP buyers (higher AOV)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

```bash
# Contentful CMS
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_token

# ConvertKit Email
NEXT_PUBLIC_CONVERTKIT_FORM_ID=your_form_id
CONVERTKIT_API_KEY=your_api_key

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Affiliate Programs
TICKET_NETWORK_AFFILIATE_ID=your_tn_id
VIVID_SEATS_AFFILIATE_ID=your_vivid_id
STUBHUB_AFFILIATE_ID=your_stubhub_id

# Site Config
NEXT_PUBLIC_SITE_URL=https://showscouthq.com
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📋 Setup Checklist

### Phase 1: Foundation (Week 1)

- [ ] **Domain & Hosting**
  - [ ] Register showscouthq.com (or alternative)
  - [ ] Deploy to Vercel (connect GitHub repo)
  - [ ] Configure custom domain
  - [ ] Set up SSL certificate

- [ ] **Affiliate Programs**
  - [ ] Apply to TicketNetwork affiliate program
  - [ ] Apply to Vivid Seats affiliate program
  - [ ] Apply to StubHub affiliate program
  - [ ] Request API/deeplink access
  - [ ] Add affiliate IDs to `.env.local`

- [ ] **Content Management**
  - [ ] Create Contentful account (free tier)
  - [ ] Set up content models (see `docs/contentful-setup.md`)
  - [ ] Add API keys to `.env.local`

- [ ] **Email Marketing**
  - [ ] Create ConvertKit account
  - [ ] Set up main signup form
  - [ ] Configure custom domain sending
  - [ ] Set up SPF/DKIM/DMARC records
  - [ ] Add form ID to `.env.local`

### Phase 2: Content & SEO (Week 2-3)

- [ ] **Initial Content**
  - [ ] 3 venue guides (one per city)
  - [ ] 6 "Best of" city posts (2 per city)
  - [ ] 3 concert reviews
  - [ ] Add all to Contentful

- [ ] **SEO Setup**
  - [ ] Google Search Console verification
  - [ ] Submit sitemap
  - [ ] Set up Google Analytics 4
  - [ ] Add schema.org markup
  - [ ] Optimize meta tags

### Phase 3: Email Automation (Week 3-4)

- [ ] **Lead Magnets**
  - [ ] Create events calendar (downloadable .ics)
  - [ ] Set up city-specific alert signup
  - [ ] Design landing pages

- [ ] **Email Sequences**
  - [ ] Welcome sequence (3 emails)
  - [ ] Weekly digest template
  - [ ] Genre-specific alerts
  - [ ] Artist follow notifications

### Phase 4: Monetization & Tracking (Week 4)

- [ ] **Affiliate Placements**
  - [ ] In-article CTAs
  - [ ] Banner ads
  - [ ] Sidebar widgets
  - [ ] Exit-intent popups

- [ ] **Analytics Dashboard**
  - [ ] Set up affiliate tracking spreadsheet
  - [ ] Configure conversion tracking
  - [ ] Set up revenue attribution
  - [ ] Weekly KPI monitoring

### Phase 5: Growth (Ongoing)

- [ ] **Content Calendar**
  - [ ] 2-3 posts per week
  - [ ] Monthly venue spotlights
  - [ ] Seasonal event roundups

- [ ] **SEO & Backlinks**
  - [ ] Local venue partnerships
  - [ ] Guest posts on music blogs
  - [ ] Social media promotion

- [ ] **Optimization**
  - [ ] A/B test affiliate placements
  - [ ] Track which programs convert best
  - [ ] Optimize for Core Web Vitals

## 🏗️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **CMS:** Contentful
- **Email:** ConvertKit
- **Analytics:** Google Analytics 4
- **Hosting:** Vercel
- **Language:** TypeScript

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Homepage
│   ├── events/            # Events listing & detail pages
│   ├── venues/            # Venue guides
│   ├── cities/            # City-specific pages
│   └── blog/              # Blog articles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── AffiliateButton.tsx  # Smart affiliate link component
│   └── ...
├── lib/                   # Utility functions
│   ├── affiliate.ts      # Affiliate link management
│   ├── contentful.ts     # CMS integration
│   └── utils.ts
└── docs/                  # Documentation
```

## 🔗 Affiliate Link System

The affiliate link system automatically:
- Prioritizes TicketNetwork (highest commission)
- Adds UTM tracking parameters
- Tracks clicks in Google Analytics
- Supports A/B testing

### Usage Example

```tsx
import { AffiliateButton } from '@/components/AffiliateButton';

<AffiliateButton
  program="ticketnetwork"
  artist="Luke Combs"
  venue="American Airlines Center"
  city="Dallas"
  utmCampaign="homepage"
>
  Get Tickets
</AffiliateButton>
```

## 📊 Revenue Projections

**Conservative (90 days):**
- Traffic: 3-5k monthly sessions
- Email list: 1,000 subscribers
- Conversions: 30-50 ticket sales/month
- Revenue: $300-$800/month

**Optimistic (6 months):**
- Traffic: 15-20k monthly sessions
- Email list: 5,000 subscribers
- Conversions: 150-250 ticket sales/month
- Revenue: $2,000-$5,000/month

## 🎯 KPIs to Track

1. **Traffic Metrics**
   - Organic search traffic
   - Direct traffic
   - Referral traffic

2. **Engagement Metrics**
   - Email signup rate (target: 2-3%)
   - Average session duration
   - Pages per session

3. **Revenue Metrics**
   - Affiliate click-through rate
   - Conversion rate per program
   - Average commission per sale
   - Monthly recurring revenue

4. **Content Metrics**
   - Top performing articles
   - Search rankings for target keywords
   - Backlink growth

## 📝 Content Templates

See `docs/content-templates.md` for detailed templates:
- Concert review template
- Venue guide template
- City events roundup template

## 🔒 Compliance

- **FTC Disclosure:** Affiliate disclosure in footer and on all affiliate links
- **Privacy Policy:** GDPR/CCPA compliant
- **Terms of Service:** Standard terms
- **Cookie Consent:** Cookie banner for EU visitors

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

```bash
npm run build
vercel --prod
```

## 📚 Additional Resources

- [Contentful Setup Guide](docs/contentful-setup.md)
- [ConvertKit Integration](docs/convertkit-setup.md)
- [Affiliate Program Details](docs/affiliate-programs.md)
- [SEO Checklist](docs/seo-checklist.md)
- [Content Calendar Template](docs/content-calendar.md)

## 🤝 Support

For questions or issues, refer to the documentation in the `docs/` folder.

## 📄 License

Private project - All rights reserved
