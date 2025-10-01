# Revenue Tracking Template

## Google Sheets Setup

Create a Google Sheet with these tabs:

### Tab 1: Daily Metrics

| Date | Sessions | New Users | Bounce Rate | Avg Session | Email Signups | Signup Rate | Affiliate Clicks | CTR | Notes |
|------|----------|-----------|-------------|-------------|---------------|-------------|------------------|-----|-------|
| 10/1 | 150 | 120 | 65% | 1:45 | 5 | 3.3% | 12 | 8% | Launch day |
| 10/2 | 180 | 145 | 62% | 2:10 | 7 | 3.9% | 15 | 8.3% | |

**Formulas:**
- Signup Rate: `=E2/B2` (Email Signups / Sessions)
- CTR: `=G2/B2` (Affiliate Clicks / Sessions)

### Tab 2: Affiliate Performance

| Date | Program | Clicks | Conversions | Revenue | EPC | Conv Rate | Notes |
|------|---------|--------|-------------|---------|-----|-----------|-------|
| 10/1 | TicketNetwork | 8 | 1 | $44.00 | $5.50 | 12.5% | First sale! |
| 10/1 | Vivid Seats | 4 | 0 | $0 | $0 | 0% | |
| 10/2 | TicketNetwork | 10 | 2 | $88.00 | $8.80 | 20% | |

**Formulas:**
- EPC (Earnings Per Click): `=E2/C2`
- Conv Rate: `=D2/C2`

**Summary Row:**
```
Total Clicks: =SUM(C2:C100)
Total Conversions: =SUM(D2:D100)
Total Revenue: =SUM(E2:E100)
Avg EPC: =E101/C101
Avg Conv Rate: =D101/C101
```

### Tab 3: Monthly Summary

| Month | Sessions | Users | Email List | New Subs | Aff Clicks | Conversions | Revenue | EPC | Rev/Session |
|-------|----------|-------|------------|----------|------------|-------------|---------|-----|-------------|
| Oct 2025 | 5,000 | 4,200 | 150 | 150 | 400 | 10 | $440 | $1.10 | $0.088 |
| Nov 2025 | 8,500 | 7,100 | 380 | 230 | 680 | 18 | $792 | $1.17 | $0.093 |

**Key Metrics:**
- Email List Growth: `=(C3-C2)/C2`
- Revenue Growth: `=(H3-H2)/H2`

### Tab 4: Content Performance

| URL | Title | Publish Date | Sessions | Aff Clicks | CTR | Conversions | Revenue | Rev/Session |
|-----|-------|--------------|----------|------------|-----|-------------|---------|-------------|
| /venues/aac | AAC Seating Guide | 10/1 | 450 | 36 | 8% | 3 | $132 | $0.29 |
| /cities/dallas | Dallas Concerts Oct | 10/1 | 380 | 30 | 7.9% | 2 | $88 | $0.23 |

**Sort by Revenue to find top performers**

### Tab 5: Email Performance

| Date | Campaign | Sent | Opens | Open Rate | Clicks | CTR | Unsubs | Unsub Rate | Aff Clicks | Revenue |
|------|----------|------|-------|-----------|--------|-----|--------|------------|------------|---------|
| 10/7 | Welcome 1 | 50 | 28 | 56% | 8 | 16% | 0 | 0% | 5 | $44 |
| 10/8 | Weekly Digest | 150 | 52 | 34.7% | 12 | 8% | 1 | 0.7% | 8 | $88 |

**Benchmarks:**
- Good Open Rate: 25-35%
- Good CTR: 3-5%
- Acceptable Unsub: <1%

### Tab 6: SEO Rankings

| Keyword | Target URL | Oct 1 | Oct 15 | Nov 1 | Nov 15 | Dec 1 | Trend |
|---------|------------|-------|--------|-------|--------|-------|-------|
| AAC seating chart | /venues/aac | 45 | 28 | 18 | 12 | 8 | ↑ |
| concerts in dallas | /cities/dallas | 67 | 52 | 38 | 25 | 18 | ↑ |

**Track top 20 keywords weekly**

### Tab 7: Expenses

| Date | Category | Description | Amount | Notes |
|------|----------|-------------|--------|-------|
| 10/1 | Domain | showscouthq.com | $12.99 | Annual |
| 10/1 | Hosting | Vercel Pro (optional) | $0 | Free tier |
| 10/15 | Tools | Ahrefs | $99 | Monthly |
| 10/20 | Content | Freelance writer | $150 | 3 articles |

**Monthly Total:** `=SUM(D2:D100)`

### Tab 8: Profit & Loss

| Month | Revenue | Expenses | Profit | Margin | Notes |
|-------|---------|----------|--------|--------|-------|
| Oct | $440 | $262 | $178 | 40.5% | First month |
| Nov | $792 | $249 | $543 | 68.6% | Growing |
| Dec | $1,250 | $249 | $1,001 | 80.1% | Profitable |

**Formulas:**
- Profit: `=B2-C2`
- Margin: `=D2/B2`

## Weekly Review Checklist

Every Monday morning:

### Traffic Review (10 min)
- [ ] Check Google Analytics
- [ ] Note total sessions
- [ ] Identify top pages
- [ ] Check traffic sources
- [ ] Note any anomalies

### Affiliate Review (10 min)
- [ ] Check each affiliate dashboard
- [ ] Record clicks and conversions
- [ ] Calculate revenue
- [ ] Update tracking sheet
- [ ] Identify top performers

### Email Review (5 min)
- [ ] Check ConvertKit stats
- [ ] Note new subscribers
- [ ] Review email performance
- [ ] Update tracking sheet

### Content Review (5 min)
- [ ] Identify top content
- [ ] Note what's working
- [ ] Plan next week's content
- [ ] Update content calendar

### Action Items (5 min)
- [ ] What to do more of?
- [ ] What to improve?
- [ ] What to stop?
- [ ] Next week's priorities

## Monthly Review Checklist

First Monday of each month:

### Performance Analysis (30 min)
- [ ] Review all metrics vs goals
- [ ] Calculate month-over-month growth
- [ ] Identify trends
- [ ] Update projections

### Content Audit (30 min)
- [ ] Review all published content
- [ ] Update top performers
- [ ] Identify content gaps
- [ ] Plan next month's content

### SEO Review (20 min)
- [ ] Check Search Console
- [ ] Review rankings
- [ ] Identify opportunities
- [ ] Plan SEO improvements

### Email Review (20 min)
- [ ] Review list growth
- [ ] Analyze engagement
- [ ] Review automation performance
- [ ] Plan improvements

### Financial Review (20 min)
- [ ] Calculate total revenue
- [ ] Review expenses
- [ ] Calculate profit
- [ ] Update projections

### Goal Setting (10 min)
- [ ] Set next month's goals
- [ ] Identify key priorities
- [ ] Plan major initiatives
- [ ] Update strategy

## Key Metrics Dashboard

### Traffic Metrics
- **Sessions:** Total visits to site
- **Users:** Unique visitors
- **Bounce Rate:** % who leave after one page (lower is better)
- **Avg Session Duration:** Time on site (higher is better)
- **Pages/Session:** Engagement metric (higher is better)

### Email Metrics
- **List Size:** Total subscribers
- **Growth Rate:** New subs / total subs
- **Open Rate:** % who open emails (target: 25-35%)
- **Click Rate:** % who click links (target: 3-5%)
- **Unsubscribe Rate:** % who unsub (target: <1%)

### Affiliate Metrics
- **Clicks:** Total affiliate link clicks
- **CTR:** Clicks / Sessions (target: 5-10%)
- **Conversions:** Actual ticket sales
- **Conversion Rate:** Conversions / Clicks (target: 5-15%)
- **Revenue:** Total commissions earned
- **EPC:** Earnings Per Click (higher is better)
- **Rev/Session:** Revenue / Sessions (measures efficiency)

### SEO Metrics
- **Organic Traffic:** Visitors from search
- **Rankings:** Position for target keywords
- **Impressions:** How often you appear in search
- **CTR:** Clicks / Impressions in search results
- **Backlinks:** Number of sites linking to you

## Goal Tracking

### Month 1 Goals
- [ ] 500-1,000 sessions
- [ ] 50-100 email subscribers
- [ ] $50-200 revenue
- [ ] 12-15 articles published
- [ ] Top 50 for 5 keywords

### Month 3 Goals
- [ ] 3,000-5,000 sessions
- [ ] 500-1,000 email subscribers
- [ ] $300-800 revenue
- [ ] 30-40 articles published
- [ ] Top 20 for 10 keywords

### Month 6 Goals
- [ ] 10,000-15,000 sessions
- [ ] 2,000-3,000 email subscribers
- [ ] $1,500-3,000 revenue
- [ ] 60-80 articles published
- [ ] Top 10 for 15 keywords

### Month 12 Goals
- [ ] 25,000-35,000 sessions
- [ ] 5,000-8,000 email subscribers
- [ ] $4,000-7,000 revenue
- [ ] 100+ articles published
- [ ] Top 5 for 25 keywords

## Automation Tips

### Google Analytics
- Set up custom reports
- Create email alerts for traffic spikes
- Set up goal tracking
- Connect to Google Sheets (optional)

### Affiliate Dashboards
- Check daily for first 30 days
- Then check weekly
- Set up email alerts if available
- Export monthly reports

### ConvertKit
- Automated weekly reports
- Tag performance tracking
- Automation analytics
- Revenue tracking (if selling products)

## Red Flags to Watch

### Traffic Issues
- ⚠️ Sudden traffic drop (>20%)
- ⚠️ Increasing bounce rate
- ⚠️ Decreasing session duration
- ⚠️ No organic growth

### Email Issues
- ⚠️ Open rate <20%
- ⚠️ Unsubscribe rate >2%
- ⚠️ No list growth
- ⚠️ High spam complaints

### Affiliate Issues
- ⚠️ Clicks but no conversions (>100 clicks)
- ⚠️ Decreasing CTR
- ⚠️ Account warnings
- ⚠️ Payment issues

### SEO Issues
- ⚠️ Ranking drops
- ⚠️ Manual penalties
- ⚠️ Indexing issues
- ⚠️ Core update impacts

## Success Indicators

### Early Wins (Month 1-3)
✅ First 100 visitors
✅ First email subscriber
✅ First affiliate click
✅ First conversion
✅ First $100 revenue

### Growth Phase (Month 4-6)
✅ 1,000+ monthly sessions
✅ 500+ email subscribers
✅ $500+ monthly revenue
✅ Top 20 for target keywords
✅ Consistent growth

### Scale Phase (Month 7-12)
✅ 10,000+ monthly sessions
✅ 2,000+ email subscribers
✅ $2,000+ monthly revenue
✅ Top 10 for target keywords
✅ Profitable after expenses

## Next Steps

1. **Copy this template** to Google Sheets
2. **Set up tracking** from day one
3. **Review weekly** (30 min)
4. **Review monthly** (2 hours)
5. **Adjust strategy** based on data
6. **Celebrate wins** 🎉
7. **Learn from failures** 📚
8. **Keep improving** 📈
