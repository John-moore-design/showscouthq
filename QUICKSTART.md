# 🚀 Quick Start Guide

Get ShowScoutHQ running in 30 minutes.

## Step 1: Install Dependencies (2 min)

```bash
cd /Users/johnmoore/Library/Mobile\ Documents/com~apple~CloudDocs/Media-Assets/income
npm install
```

## Step 2: Environment Setup (5 min)

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your keys (get these from the services):

```bash
# Start with these - others can be added later
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_token
NEXT_PUBLIC_CONVERTKIT_FORM_ID=your_form_id
```

**Don't have keys yet?** That's okay! The site will run without them (affiliate links won't work until you add them).

## Step 3: Run Development Server (1 min)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## Step 4: Deploy to Vercel (10 min)

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin [your-repo-url]
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Add environment variables
6. Click "Deploy"

**Your site is live!** 🚀

## Step 5: Set Up Affiliate Programs (varies)

Apply to these in order:

### 1. TicketNetwork (Priority 1)
- Apply: https://www.ticketnetwork.com/affiliates
- Approval: 2-3 days
- Add ID to `.env.local`: `TICKET_NETWORK_AFFILIATE_ID=your_id`

### 2. Vivid Seats (Priority 2)
- Apply: https://www.vividseats.com/affiliates
- Approval: 1-2 weeks
- Add ID to `.env.local`: `VIVID_SEATS_AFFILIATE_ID=your_id`

### 3. StubHub (Priority 3)
- Apply: https://www.stubhub.com/partners
- Approval: 1-2 weeks
- Add ID to `.env.local`: `STUBHUB_AFFILIATE_ID=your_id`

## Step 6: Set Up Contentful CMS (15 min)

1. Create account: https://www.contentful.com
2. Create space: "ShowScoutHQ"
3. Create content models (see `docs/contentful-setup.md`)
4. Add API keys to `.env.local`
5. Create 3-5 sample entries

## Step 7: Set Up ConvertKit Email (10 min)

1. Create account: https://convertkit.com
2. Create signup form
3. Get form ID
4. Add to `.env.local`: `NEXT_PUBLIC_CONVERTKIT_FORM_ID=your_id`
5. Test signup on your site

## Step 8: Add Google Analytics (5 min)

1. Create GA4 property: https://analytics.google.com
2. Get measurement ID
3. Add to `.env.local`: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
4. Verify tracking works

## Next Steps

### Immediate (Today)
- [ ] Register domain (showscouthq.com or alternative)
- [ ] Connect domain to Vercel
- [ ] Create 3 initial articles in Contentful

### This Week
- [ ] Apply to all affiliate programs
- [ ] Write 6-10 articles
- [ ] Set up email welcome sequence
- [ ] Submit to Google Search Console

### This Month
- [ ] Publish 12-15 articles
- [ ] Build 500+ email list
- [ ] Get first affiliate conversions
- [ ] Optimize based on data

## Need Help?

Check the detailed guides:
- **Full Setup:** `README.md`
- **Contentful:** `docs/contentful-setup.md`
- **Affiliates:** `docs/affiliate-programs.md`
- **Email:** `docs/email-marketing.md`
- **SEO:** `docs/seo-strategy.md`
- **Launch:** `docs/launch-checklist.md`

## Revenue Timeline

**Month 1:** $50-200
- Focus: Content + email list
- Goal: 500-1,000 visitors

**Month 2-3:** $300-800
- Focus: SEO + conversions
- Goal: 3,000-5,000 visitors

**Month 6+:** $2,000-5,000
- Focus: Scale what works
- Goal: 15,000-25,000 visitors

## Tech Stack Summary

- **Framework:** Next.js 14 (React)
- **Styling:** Tailwind CSS + shadcn/ui
- **CMS:** Contentful
- **Email:** ConvertKit
- **Analytics:** Google Analytics 4
- **Hosting:** Vercel (free tier works great)
- **Domain:** Any registrar

## Key Features Built-In

✅ **Affiliate Link System**
- Automatic UTM tracking
- Multi-program support
- Click tracking
- Smart routing

✅ **Email Capture**
- Multiple signup forms
- Lead magnets ready
- ConvertKit integration

✅ **SEO Optimized**
- Schema markup ready
- Fast loading (90+ Lighthouse)
- Mobile responsive
- Sitemap generation

✅ **Analytics**
- Google Analytics 4
- Conversion tracking
- Affiliate click tracking

✅ **Content Management**
- Contentful CMS
- Easy updates
- No coding needed

## Common Issues

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Environment variables not working
- Restart dev server after changing `.env.local`
- Check variable names match exactly
- No quotes around values needed

### Affiliate links not working
- Verify affiliate IDs are correct
- Check links in incognito mode
- Test each program separately

### Images not loading
- Check Contentful API keys
- Verify image URLs in Contentful
- Check Next.js image domains config

## Pro Tips

1. **Start Simple:** Get 3-5 articles live before worrying about perfection
2. **Focus on One City:** Master Dallas before expanding
3. **Email First:** Build list from day one
4. **Test Everything:** Verify all affiliate links work
5. **Track Metrics:** What gets measured gets improved

## Support

- **Documentation:** Check `docs/` folder
- **Issues:** Create GitHub issue
- **Community:** Join affiliate marketing subreddits

---

**You're ready to launch!** 🎸

Focus on creating great content and the revenue will follow.
