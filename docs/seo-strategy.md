# SEO Strategy

## Keyword Research

### Primary Keywords (High Priority)

**Venue-Specific:**
- "[venue name] seating chart" (1k-10k searches/month)
- "[venue name] best seats" (500-2k searches/month)
- "[venue name] parking" (500-1k searches/month)
- "[venue name] section [X] view" (100-500 searches/month)

**City-Specific:**
- "concerts in [city]" (5k-20k searches/month)
- "[genre] concerts [city]" (1k-5k searches/month)
- "best concerts in [city]" (500-2k searches/month)
- "[city] concert calendar" (500-1k searches/month)

**Artist-Specific:**
- "[artist] [city] tickets" (1k-10k searches/month)
- "[artist] [venue] seating" (100-1k searches/month)
- "[artist] [city] setlist" (100-500 searches/month)

### Long-Tail Keywords (Quick Wins)

- "where to park at [venue]"
- "best seats for country concert at [venue]"
- "how early to arrive at [venue]"
- "is section [X] good at [venue]"
- "cheap tickets to [artist] in [city]"

### Keyword Mapping

| Content Type | Primary Keyword | Secondary Keywords |
|--------------|----------------|-------------------|
| Venue Guide | [venue] seating chart | best seats, parking, section views |
| City Guide | concerts in [city] | [genre] concerts, calendar, this month |
| Review | [artist] [city] review | setlist, tickets, [venue] |

## On-Page SEO

### Title Tags

**Format:** Primary Keyword - Secondary Keyword | ShowScoutHQ

**Examples:**
- "American Airlines Center Seating Chart - Best Seats & Parking | ShowScoutHQ"
- "Best Country Concerts in Dallas This Month | ShowScoutHQ"
- "Luke Combs Dallas Review - Setlist & Best Seats | ShowScoutHQ"

**Best Practices:**
- 50-60 characters
- Primary keyword first
- Include brand name
- Compelling and clickable

### Meta Descriptions

**Format:** [Value proposition] [Primary keyword] [Secondary keyword] [Call to action]

**Examples:**
- "Complete American Airlines Center seating guide with best seats, parking tips, and section views. Never buy bad seats again!"
- "Discover the best country concerts in Dallas this month. Curated picks, ticket deals, and insider venue tips. Get alerts!"

**Best Practices:**
- 150-160 characters
- Include primary keyword
- Compelling CTA
- Unique for each page

### Header Structure

```html
<h1>Primary Keyword - Secondary Keyword</h1>

<h2>Main Section with Secondary Keyword</h2>
  <h3>Subsection</h3>
  <h3>Subsection</h3>

<h2>Another Main Section</h2>
  <h3>Subsection</h3>

<h2>How to Get Tickets (Affiliate Section)</h2>
```

**Best Practices:**
- One H1 per page
- Include primary keyword in H1
- Use H2s for main sections
- Natural keyword usage

### URL Structure

**Format:** /[content-type]/[primary-keyword]

**Examples:**
- `/venues/american-airlines-center-seating-guide`
- `/cities/dallas/country-concerts-october-2025`
- `/reviews/luke-combs-dallas-2025`

**Best Practices:**
- Short and descriptive
- Include primary keyword
- Use hyphens (not underscores)
- Lowercase only
- No dates in URL (update content instead)

### Internal Linking

**Strategy:**
- Link from high-authority pages to new content
- Use descriptive anchor text
- 3-5 internal links per article
- Create topic clusters

**Example Structure:**
```
Homepage
  ↓
City Hub Page (Dallas)
  ↓
├─ Venue Guides
│  ├─ American Airlines Center
│  └─ House of Blues Dallas
├─ Monthly Event Guides
│  ├─ October 2025
│  └─ November 2025
└─ Concert Reviews
   ├─ Luke Combs Review
   └─ Taylor Swift Review
```

### Image Optimization

**File Names:**
- `american-airlines-center-seating-chart.jpg`
- `luke-combs-dallas-concert-2025.jpg`

**Alt Text:**
- "American Airlines Center seating chart showing best sections for concerts"
- "Luke Combs performing at American Airlines Center in Dallas"

**Best Practices:**
- Compress images (WebP format)
- Descriptive file names
- Keyword-rich alt text
- Proper dimensions
- Lazy loading

## Schema Markup

### Event Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Luke Combs Live in Dallas",
  "startDate": "2025-10-15T19:30",
  "location": {
    "@type": "Place",
    "name": "American Airlines Center",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2500 Victory Avenue",
      "addressLocality": "Dallas",
      "addressRegion": "TX",
      "postalCode": "75219"
    }
  },
  "offers": {
    "@type": "Offer",
    "url": "[affiliate link]",
    "price": "49.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
```

### Article Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "American Airlines Center Seating Guide",
  "author": {
    "@type": "Person",
    "name": "ShowScout Team"
  },
  "datePublished": "2025-10-01",
  "dateModified": "2025-10-15",
  "image": "[image url]",
  "publisher": {
    "@type": "Organization",
    "name": "ShowScoutHQ",
    "logo": {
      "@type": "ImageObject",
      "url": "[logo url]"
    }
  }
}
```

### FAQ Schema

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What are the best seats at American Airlines Center?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The best seats for concerts are in sections 101-103..."
    }
  }]
}
```

### LocalBusiness Schema (Venue Pages)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "American Airlines Center",
  "image": "[venue image]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2500 Victory Avenue",
    "addressLocality": "Dallas",
    "addressRegion": "TX",
    "postalCode": "75219"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "1000"
  }
}
```

## Content Strategy

### Content Pillars

**Pillar 1: Venue Guides**
- Target: "[venue] seating chart"
- Length: 2,000+ words
- Update: Quarterly

**Pillar 2: City Event Guides**
- Target: "concerts in [city]"
- Length: 2,500+ words
- Update: Monthly

**Pillar 3: Concert Reviews**
- Target: "[artist] [city] review"
- Length: 1,500+ words
- Update: As events happen

### Content Calendar

**Week 1:**
- Monday: City guide update
- Wednesday: Venue spotlight
- Friday: Concert review

**Week 2:**
- Monday: Genre-specific roundup
- Wednesday: Venue comparison
- Friday: Artist feature

**Week 3:**
- Monday: Budget guide
- Wednesday: VIP experience guide
- Friday: Concert review

**Week 4:**
- Monday: Next month preview
- Wednesday: Venue tips
- Friday: Month recap

### Content Quality Checklist

- [ ] 1,500+ words (2,000+ for pillar content)
- [ ] Primary keyword in H1, first paragraph, URL
- [ ] Secondary keywords in H2s
- [ ] 3-5 internal links
- [ ] 2-3 external links (authoritative sources)
- [ ] Images with alt text
- [ ] Schema markup
- [ ] Meta description
- [ ] FAQ section
- [ ] Affiliate CTAs (2-3)

## Technical SEO

### Site Speed

**Target Metrics:**
- Lighthouse score: 90+
- First Contentful Paint: <1.8s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- Time to Interactive: <3.8s

**Optimization:**
- Image compression (WebP)
- Code splitting
- Lazy loading
- CDN (Vercel Edge Network)
- Minification

### Mobile Optimization

- [ ] Responsive design
- [ ] Touch-friendly buttons (44px min)
- [ ] Readable font size (16px min)
- [ ] No horizontal scrolling
- [ ] Fast mobile load time

### Sitemap

**Structure:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://showscouthq.com/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://showscouthq.com/venues/american-airlines-center</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

**Submit to:**
- Google Search Console
- Bing Webmaster Tools

### Robots.txt

```
User-agent: *
Allow: /

Sitemap: https://showscouthq.com/sitemap.xml
```

## Link Building

### Strategy

**Month 1-2: Foundation**
- Local directories
- Google Business Profile
- Social profiles
- Easy wins

**Month 3-6: Outreach**
- Guest posts on music blogs
- Venue partnerships
- Local media
- Resource page links

**Month 6+: Authority**
- High-quality guest posts
- Digital PR
- Influencer partnerships
- Natural link acquisition

### Target Sites

**Local:**
- Dallas Observer
- Nashville Scene
- Chicago Reader
- Local event calendars

**Music Blogs:**
- Music festival blogs
- Genre-specific blogs
- Concert photography sites
- Fan communities

**Directories:**
- Google Business Profile
- Yelp
- TripAdvisor
- Eventbrite

### Outreach Template

```
Subject: [City] Concert Resource for [Their Site]

Hi [Name],

I'm [Your Name] from ShowScoutHQ, a new concert guide 
for [city] focusing on [genre] shows.

I noticed your article on [their article] and thought 
your readers might find our [venue] seating guide helpful:
[link]

We've been to 50+ shows at [venue] and created the most 
comprehensive seating guide available, including:
- Best seats by budget
- Parking tips
- Section-by-section views

Would you consider linking to it as a resource?

Happy to return the favor or contribute a guest post.

Thanks!
[Your Name]
```

## Local SEO

### Google Business Profile

- [ ] Create profile
- [ ] Add all business info
- [ ] Upload photos
- [ ] Get reviews
- [ ] Post updates weekly

### Local Citations

**Submit to:**
- Yelp
- Yellow Pages
- Bing Places
- Apple Maps
- Facebook

**NAP Consistency:**
Ensure Name, Address, Phone are identical everywhere.

### Local Content

- City-specific landing pages
- Local event coverage
- Venue partnerships
- Local news mentions

## Tracking & Reporting

### Google Search Console

**Monitor:**
- Search queries
- Click-through rate
- Average position
- Impressions
- Coverage issues

**Weekly Review:**
- Top performing pages
- Queries driving traffic
- CTR opportunities
- Technical issues

### Google Analytics 4

**Track:**
- Organic traffic
- Top landing pages
- Bounce rate
- Time on page
- Conversions

**Set Up Goals:**
- Email signups
- Affiliate clicks
- Page views
- Time on site

### Rank Tracking

**Tools:**
- Google Search Console
- Ahrefs (paid)
- SEMrush (paid)
- Ubersuggest (free/paid)

**Track Keywords:**
- Top 20 target keywords
- Check weekly
- Monitor competitors
- Identify opportunities

## Competitive Analysis

### Identify Competitors

**Direct:**
- Other concert guide sites
- Local event calendars
- Music blogs

**Indirect:**
- Ticketing sites
- Venue websites
- Artist fan sites

### Analyze

**What to check:**
- Their top pages (Ahrefs/SEMrush)
- Their backlinks
- Their content strategy
- Their keywords
- Their social presence

**Find Opportunities:**
- Keywords they rank for (you don't)
- Content gaps
- Broken links
- Outdated content

## Quick Wins

### Month 1

- [ ] Optimize existing pages
- [ ] Add schema markup
- [ ] Submit to Google Search Console
- [ ] Create Google Business Profile
- [ ] Fix technical issues

### Month 2

- [ ] Build 10-20 easy backlinks
- [ ] Optimize images
- [ ] Add FAQ sections
- [ ] Internal linking
- [ ] Update meta descriptions

### Month 3

- [ ] Guest post outreach
- [ ] Update old content
- [ ] Build topic clusters
- [ ] Local citations
- [ ] Monitor rankings

## Long-Term Strategy

### Year 1 Goals

- **Traffic:** 15,000-25,000 monthly sessions
- **Rankings:** Top 3 for 20+ keywords
- **Backlinks:** 50-100 quality links
- **Content:** 100+ articles

### Scaling

**What works:**
- Double down on top content
- Expand to more cities
- Cover more venues
- Build authority

**What doesn't:**
- Stop or improve
- Learn and iterate
- Test new approaches

---

**Remember:** SEO is a long game. Consistency and quality win over time.
