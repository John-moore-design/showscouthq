# 🚀 DEPLOY NOW - Get Your Site Live in 15 Minutes

## Step 1: Initialize Git (2 minutes)

Open terminal and run these commands:

```bash
cd /Users/johnmoore/Library/Mobile\ Documents/com~apple~CloudDocs/Media-Assets/income

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - ShowScoutHQ ticket affiliate website"
```

---

## Step 2: Create GitHub Repository (3 minutes)

### Option A: Using GitHub Website
1. Go to https://github.com/new
2. Repository name: `showscouthq`
3. Description: "Ticket affiliate website for country and pop concerts"
4. Keep it **Private** (for now)
5. **DO NOT** initialize with README (we already have one)
6. Click "Create repository"

### Option B: Using GitHub CLI (if installed)
```bash
gh repo create showscouthq --private --source=. --remote=origin
```

---

## Step 3: Push to GitHub (2 minutes)

After creating the repo, GitHub will show you commands. Run:

```bash
# Add GitHub as remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/showscouthq.git

# Push code
git branch -M main
git push -u origin main
```

**Your code is now on GitHub!** ✅

---

## Step 4: Deploy to Vercel (5 minutes)

### A. Create Vercel Account
1. Go to https://vercel.com/signup
2. Sign up with GitHub (easiest)
3. Authorize Vercel to access your repos

### B. Import Project
1. Click "Add New..." → "Project"
2. Select your `showscouthq` repository
3. Vercel will auto-detect Next.js settings ✅

### C. Configure Environment Variables
Click "Environment Variables" and add:

```bash
# Leave these empty for now - add later when you have keys
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=
NEXT_PUBLIC_CONVERTKIT_FORM_ID=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
TICKET_NETWORK_AFFILIATE_ID=
VIVID_SEATS_AFFILIATE_ID=
STUBHUB_AFFILIATE_ID=
NEXT_PUBLIC_SITE_URL=
```

**Note:** You can add these later. The site will work without them.

### D. Deploy
1. Click "Deploy"
2. Wait 2-3 minutes
3. Click the deployment URL

**Your site is LIVE!** 🎉

You'll get a URL like: `https://showscouthq.vercel.app`

---

## Step 5: Add Custom Domain (Optional - 5 minutes)

### A. Register Domain
If you haven't already:
- Go to Namecheap, Google Domains, or Cloudflare
- Register: `showscouthq.com` (or your preferred name)
- Cost: ~$12/year

### B. Connect to Vercel
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain: `showscouthq.com`
4. Vercel will show you DNS records to add

### C. Update DNS
1. Go to your domain registrar
2. Add the DNS records Vercel provided
3. Wait 10-60 minutes for DNS propagation
4. Vercel will automatically provision SSL certificate

**Your site is now at your custom domain!** ✅

---

## Quick Commands Reference

```bash
# Navigate to project
cd /Users/johnmoore/Library/Mobile\ Documents/com~apple~CloudDocs/Media-Assets/income

# Initialize git
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/showscouthq.git
git branch -M main
git push -u origin main

# For future updates
git add .
git commit -m "Update content"
git push
```

---

## Future Deployments (Automatic!)

Once connected to Vercel:

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```
3. Vercel automatically deploys! ✨

**No manual deployment needed!**

---

## Troubleshooting

### "Git not found"
Install git:
- Mac: `brew install git` or download from https://git-scm.com
- Already installed on most Macs

### "Permission denied (publickey)"
Use HTTPS instead of SSH:
```bash
git remote set-url origin https://github.com/YOUR-USERNAME/showscouthq.git
```

### "Build failed on Vercel"
1. Check build logs in Vercel dashboard
2. Most common: Missing environment variables (that's OK for now)
3. The site should still deploy

### "Domain not working"
- DNS can take up to 24 hours (usually 10-60 minutes)
- Check DNS propagation: https://dnschecker.org
- Verify DNS records match Vercel's instructions

---

## What Happens Next?

### Immediately
- ✅ Your site is live on Vercel
- ✅ You get a free `.vercel.app` domain
- ✅ HTTPS is automatic
- ✅ Global CDN (fast worldwide)

### When You Add Environment Variables
1. Go to Vercel dashboard
2. Settings → Environment Variables
3. Add your API keys (Contentful, ConvertKit, etc.)
4. Redeploy (automatic or click "Redeploy")

### When You Add Content
1. Add content to Contentful CMS
2. It appears on your site automatically
3. No redeployment needed!

---

## Vercel Features You Get (Free Tier)

- ✅ Unlimited deployments
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN (fast loading)
- ✅ Preview deployments (for testing)
- ✅ Analytics (basic)
- ✅ 100GB bandwidth/month
- ✅ Automatic scaling

**Perfect for starting out!**

---

## Next Steps After Deployment

1. ✅ Site is live
2. 👉 Add environment variables (when you have them)
3. 👉 Set up Contentful CMS
4. 👉 Apply to affiliate programs
5. 👉 Create content
6. 👉 Start promoting!

---

## Your Deployment Checklist

- [ ] Run `git init`
- [ ] Run `git add .`
- [ ] Run `git commit -m "Initial commit"`
- [ ] Create GitHub repository
- [ ] Push to GitHub
- [ ] Create Vercel account
- [ ] Import project to Vercel
- [ ] Deploy (click button)
- [ ] Visit your live site!
- [ ] (Optional) Add custom domain
- [ ] Celebrate! 🎉

---

## Important URLs to Bookmark

- **GitHub:** https://github.com/YOUR-USERNAME/showscouthq
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Your Live Site:** https://showscouthq.vercel.app (or your domain)
- **Vercel Docs:** https://vercel.com/docs

---

## Cost Breakdown

| Service | Cost | Notes |
|---------|------|-------|
| Vercel Hosting | **FREE** | Free tier is generous |
| GitHub | **FREE** | Private repos included |
| Domain | **~$12/year** | Optional, can use .vercel.app |
| Contentful | **FREE** | Up to 25,000 records |
| ConvertKit | **FREE** | Up to 1,000 subscribers |
| **Total** | **$0-12/year** | Incredibly cheap! |

---

## Ready? Let's Deploy!

**Open your terminal and run:**

```bash
cd /Users/johnmoore/Library/Mobile\ Documents/com~apple~CloudDocs/Media-Assets/income
git init
git add .
git commit -m "Initial commit - ShowScoutHQ"
```

Then follow the steps above to push to GitHub and deploy to Vercel.

**You'll be live in 15 minutes!** 🚀

---

## Need Help?

- **Git issues:** https://docs.github.com/en/get-started
- **Vercel issues:** https://vercel.com/docs
- **General questions:** Check the other docs in this project

**You've got this!** 💪
