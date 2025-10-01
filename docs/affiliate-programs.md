# Affiliate Programs Guide

## Program Comparison

| Program | Commission | Cookie | Avg/Sale | Rating | Best For |
|---------|-----------|---------|----------|--------|----------|
| TicketNetwork | Up to 12.5% | 45 days | $44 | ⭐⭐⭐⭐⭐ | Primary choice |
| Vivid Seats | 4-7% | 30 days | $30-50 | ⭐⭐⭐⭐ | Broad inventory |
| StubHub | 9% | 30 days | $35-45 | ⭐⭐⭐⭐ | Fallback option |
| Ticketmaster | $0.30/sale | 30 days | $0.30 | ⭐⭐ | Official only |

## 1. TicketNetwork (Primary)

### Why It's Best
- **Highest commission:** Up to 12.5%
- **Longest cookie:** 45 days
- **Best average:** $44 per sale
- **Great inventory:** Wide selection of events

### Application Process
1. Go to [TicketNetwork Affiliate Program](https://www.ticketnetwork.com/affiliates)
2. Fill out application form
3. Approval typically within 2-3 business days
4. Request API access for deep linking

### Integration
```typescript
// Already implemented in lib/affiliate.ts
generateAffiliateUrl({
  program: 'ticketnetwork',
  artist: 'Luke Combs',
  city: 'Dallas'
})
```

### Dashboard Access
- Login: [TicketNetwork Partner Portal](https://partners.ticketnetwork.com)
- Track: Clicks, conversions, commissions
- Reports: Real-time and monthly

### Best Practices
- Use deep links to specific events when possible
- Test links before publishing
- Monitor conversion rates by event type
- Request promotional materials

## 2. Vivid Seats (Secondary)

### Why Use It
- **Good commission:** 4-7%
- **Strong brand:** Well-known and trusted
- **Good inventory:** Comprehensive event coverage
- **Marketing support:** Banners and creatives provided

### Application Process
1. Go to [Vivid Seats Affiliate Program](https://www.vividseats.com/affiliates)
2. Apply through their network (Impact or ShareASale)
3. Approval within 1-2 weeks
4. Access affiliate dashboard

### Integration
```typescript
generateAffiliateUrl({
  program: 'vividseats',
  artist: 'Taylor Swift',
  venue: 'United Center'
})
```

### When to Use
- When TicketNetwork doesn't have inventory
- For A/B testing against TicketNetwork
- When Vivid Seats has better pricing
- For specific promotional campaigns

## 3. StubHub (Tertiary)

### Why Use It
- **Solid commission:** 9%
- **Huge brand:** Most recognized ticket marketplace
- **Global reach:** International events
- **Mobile app:** Strong mobile conversion

### Application Process
1. Go to [StubHub Partner Program](https://www.stubhub.com/partners)
2. Apply through eBay Partner Network
3. Approval within 1-2 weeks
4. Set up tracking

### Integration
```typescript
generateAffiliateUrl({
  program: 'stubhub',
  eventSlug: 'morgan-wallen-nashville'
})
```

### When to Use
- When TicketNetwork and Vivid Seats don't have inventory
- For major sporting events
- International events
- When StubHub has exclusive deals

## 4. Ticketmaster (Last Resort)

### Why It's Last
- **Lowest payout:** Only $0.30 per sale
- **Not worth it:** Unless exclusive official tickets
- **Better alternatives:** Almost always

### When to Use
- Official on-sale events only
- When it's the only option
- For brand credibility (link to official source)

### Application Process
1. Go to [Ticketmaster Affiliate Program](https://www.ticketmaster.com/affiliates)
2. Apply through their network
3. Approval varies
4. Limited tracking capabilities

## Link Strategy

### Priority Waterfall

```
1. Check TicketNetwork inventory
   ↓ (if not available)
2. Check Vivid Seats inventory
   ↓ (if not available)
3. Check StubHub inventory
   ↓ (if not available)
4. Link to Ticketmaster (official)
```

### Implementation

The affiliate system automatically prioritizes TicketNetwork:

```typescript
// In lib/affiliate.ts
export function getRecommendedProgram(): AffiliateProgram {
  return 'ticketnetwork'; // Default to highest commission
}
```

### A/B Testing

Test different programs to find best converters:

```typescript
// Example: 80/20 split test
const program = Math.random() < 0.8 
  ? 'ticketnetwork' 
  : 'vividseats';
```

## Tracking & Attribution

### UTM Parameters

All links include:
- `utm_source=showscouthq`
- `utm_medium=affiliate`
- `utm_campaign=[content-type]`
- `utm_content=[article-slug]`
- `utm_term=[city]`

### Conversion Tracking

Track in Google Analytics:
```javascript
gtag('event', 'affiliate_click', {
  event_category: 'affiliate',
  event_label: program,
  value: eventSlug
});
```

### Revenue Attribution

Create a tracking spreadsheet:

| Date | Program | Clicks | Conversions | Revenue | EPC |
|------|---------|--------|-------------|---------|-----|
| 10/1 | TN | 150 | 5 | $220 | $1.47 |
| 10/1 | VS | 50 | 2 | $70 | $1.40 |

**EPC = Earnings Per Click**

## Optimization Tips

### 1. Link Placement

**Best Performing:**
- In-article CTAs (after value content)
- Comparison tables
- Event cards with "Get Tickets" buttons
- Exit-intent popups

**Poor Performing:**
- Header/footer links only
- Sidebar without context
- Too many links (choice paralysis)

### 2. Copy That Converts

**Good:**
- "Get Tickets from $49"
- "See Available Seats"
- "Compare Prices & Save"

**Bad:**
- "Click here"
- "Affiliate link"
- Generic CTAs

### 3. Trust Signals

- Show affiliate disclosure
- Explain why you recommend the program
- Include "Best Price Guarantee" messaging
- Show real-time availability (if API available)

### 4. Mobile Optimization

- Large, tappable buttons
- Fast loading affiliate pages
- Mobile-optimized landing pages
- One-tap checkout when possible

## Compliance & Disclosure

### FTC Requirements

**Required disclosure on every affiliate link:**

```html
<p class="text-sm text-muted-foreground">
  We earn a commission if you make a purchase, at no additional cost to you.
</p>
```

**Footer disclosure:**
```
We participate in affiliate programs and earn commissions from ticket 
purchases made through our links. This helps us provide free content 
and guides. Prices are the same whether you use our links or not.
```

### Best Practices

1. **Be transparent:** Always disclose affiliate relationships
2. **Be honest:** Only recommend programs you trust
3. **Add value:** Provide genuine insights, not just links
4. **Test links:** Verify all links work before publishing
5. **Monitor performance:** Track which programs convert best

## Program-Specific Tips

### TicketNetwork
- Request custom banners for your cities
- Use their event feed API for real-time inventory
- Join their seasonal promotions
- Ask for higher commission tier after 90 days

### Vivid Seats
- Use their "Rewards" program messaging
- Leverage their mobile app for mobile traffic
- Request exclusive promo codes
- Use their provided banner ads

### StubHub
- Emphasize their FanProtect guarantee
- Use their mobile app deep links
- Leverage their brand recognition
- Promote their last-minute deals

## Revenue Projections

### Conservative (Month 1-3)
- 1,000 monthly visitors
- 2% click-through rate = 20 clicks
- 5% conversion rate = 1 sale
- $44 avg commission = $44/month

### Moderate (Month 4-6)
- 5,000 monthly visitors
- 3% CTR = 150 clicks
- 7% conversion = 10 sales
- $44 avg = $440/month

### Optimistic (Month 7-12)
- 15,000 monthly visitors
- 4% CTR = 600 clicks
- 10% conversion = 60 sales
- $44 avg = $2,640/month

## Troubleshooting

### Low Click-Through Rate
- Improve CTA placement
- Use more compelling copy
- Add urgency (limited seats, prices rising)
- Test button colors and sizes

### Low Conversion Rate
- Check link functionality
- Verify deep links go to correct events
- Test mobile experience
- Ensure fast page load times

### Tracking Issues
- Verify affiliate IDs are correct
- Check cookie settings
- Test in incognito mode
- Contact program support

## Next Steps

1. **Apply to programs** in priority order
2. **Get approved** and add IDs to `.env.local`
3. **Test all links** before going live
4. **Set up tracking** spreadsheet
5. **Monitor performance** weekly
6. **Optimize** based on data
