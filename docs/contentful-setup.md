# Contentful CMS Setup Guide

## 1. Create Contentful Account

1. Go to [contentful.com](https://www.contentful.com/)
2. Sign up for free account
3. Create a new space called "ShowScoutHQ"

## 2. Content Models

### Event Content Model

**Content Type ID:** `event`

| Field Name | Field ID | Type | Required | Help Text |
|------------|----------|------|----------|-----------|
| Title | title | Short text | Yes | Event name (e.g., "Luke Combs Live") |
| Slug | slug | Short text | Yes | URL-friendly version (e.g., "luke-combs-dallas-2025") |
| Artist | artist | Short text | Yes | Artist/performer name |
| Venue | venue | Short text | Yes | Venue name |
| City | city | Short text (dropdown) | Yes | Options: New York City, Philadelphia, Boston |
| Date | date | Date & time | Yes | Event date and time |
| Genre | genre | Short text (dropdown) | Yes | Options: Country, Pop |
| Featured Image | featuredImage | Media | Yes | Event promotional image |
| Description | description | Long text | Yes | Event description (markdown) |
| Ticket Program | ticketProgram | Short text (dropdown) | Yes | Options: ticketnetwork, vividseats, stubhub |
| Meta Description | metaDescription | Short text | No | SEO meta description |

### Article Content Model

**Content Type ID:** `article`

| Field Name | Field ID | Type | Required | Help Text |
|------------|----------|------|----------|-----------|
| Title | title | Short text | Yes | Article title |
| Slug | slug | Short text | Yes | URL-friendly slug |
| Type | type | Short text (dropdown) | Yes | Options: review, venue-guide, city-guide |
| City | city | Short text (dropdown) | Yes | Options: Dallas, Nashville, Chicago |
| Genre | genre | Short text (dropdown) | No | Options: Country, Pop |
| Excerpt | excerpt | Long text | Yes | Short summary (150-200 chars) |
| Content | content | Rich text | Yes | Full article content |
| Featured Image | featuredImage | Media | Yes | Article header image |
| Publish Date | publishDate | Date & time | Yes | Publication date |
| Author | author | Short text | Yes | Author name |
| Meta Description | metaDescription | Short text | No | SEO meta description |
| Related Events | relatedEvents | Reference (multiple) | No | Link to Event entries |

### Venue Content Model

**Content Type ID:** `venue`

| Field Name | Field ID | Type | Required | Help Text |
|------------|----------|------|----------|-----------|
| Name | name | Short text | Yes | Venue name |
| Slug | slug | Short text | Yes | URL-friendly slug |
| City | city | Short text (dropdown) | Yes | Options: Dallas, Nashville, Chicago |
| Address | address | Short text | Yes | Full address |
| Capacity | capacity | Integer | Yes | Venue capacity |
| Description | description | Long text | Yes | Venue overview |
| Seating Chart | seatingChart | Media | No | Seating chart image |
| Best Sections | bestSections | Long text | Yes | Guide to best seats |
| Parking Info | parkingInfo | Long text | Yes | Parking and transit info |
| Rating | rating | Number (decimal) | No | Average rating (0-5) |
| Featured Image | featuredImage | Media | Yes | Venue photo |

## 3. API Keys

1. Go to Settings → API keys
2. Create new API key called "ShowScoutHQ Production"
3. Copy the following:
   - Space ID
   - Content Delivery API - access token
   - Content Preview API - access token

4. Add to `.env.local`:
```bash
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_delivery_token_here
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token_here
```

## 4. Sample Content

### Sample Event Entry

```
Title: Luke Combs - Beer Never Broke My Heart Tour
Slug: luke-combs-nyc-october-2025
Artist: Luke Combs
Venue: Madison Square Garden
City: New York City
Date: 2025-10-15T19:30:00
Genre: Country
Description: Country superstar Luke Combs brings his chart-topping hits to NYC...
Ticket Program: ticketnetwork
```

### Sample Venue Guide Article

```
Title: Madison Square Garden Seating Guide: Best Seats for Concerts
Slug: madison-square-garden-seating-guide
Type: venue-guide
City: New York City
Content: [Rich text with sections on seating, parking, tips]
Publish Date: 2025-10-01
Author: ShowScout Team
```

### Sample City Guide Article

```
Title: Best Country Concerts in Philadelphia This Month
Slug: best-country-concerts-philadelphia-october-2025
Type: city-guide
City: Philadelphia
Genre: Country
Content: [Rich text with curated event picks]
Publish Date: 2025-10-01
Author: ShowScout Team
```

## 5. Content Strategy

### Initial Content (First 2 Weeks)

**Venue Guides (3):**
1. Madison Square Garden Seating Guide (New York City)
2. Wells Fargo Center Seating Guide (Philadelphia)
3. TD Garden Seating Guide (Boston)

**City Guides (6):**
1. Best Country Concerts in New York City This Month
2. Best Pop Concerts in New York City This Month
3. Best Country Concerts in Philadelphia This Month
4. Best Pop Concerts in Philadelphia This Month
5. Best Country Concerts in Boston This Month
6. Best Pop Concerts in Boston This Month

**Concert Reviews (3):**
1. Recent major country show review
2. Recent major pop show review
3. Local venue spotlight review

### Ongoing Content Calendar

**Weekly:**
- 2-3 new articles
- Update monthly city guides
- Add new events as announced

**Monthly:**
- Venue spotlight feature
- Genre-specific roundup
- Artist interview/feature (if possible)

## 6. SEO Best Practices

### Article Structure

```markdown
# [Primary Keyword] - [Secondary Keyword]

[150-word introduction with target keywords]

## Quick Take (TL;DR)
- Bullet points
- Key information
- Best seats/deals

## [Main Section 1]
[Content with affiliate CTAs]

## [Main Section 2]
[Content with affiliate CTAs]

## How to Get Tickets
[Affiliate buttons for multiple programs]

## FAQ
[Schema.org FAQ markup]
```

### Keyword Targeting

**Venue Guides:**
- "[Venue name] seating chart"
- "[Venue name] best seats"
- "[Venue name] parking"

**City Guides:**
- "[Genre] concerts in [city]"
- "Best concerts in [city] this month"
- "[City] concert calendar"

**Reviews:**
- "[Artist] [city] review"
- "[Artist] setlist [city]"
- "[Artist] [venue] experience"

## 7. Rich Text Components

Create reusable components in Contentful:

1. **Affiliate CTA Block**
   - Embedded entry with program selection
   - Custom rendering in Next.js

2. **Event Calendar Widget**
   - Displays upcoming events
   - Filterable by city/genre

3. **Venue Comparison Table**
   - Compare seating, pricing, amenities

## 8. Webhooks (Optional)

Set up webhooks to trigger:
- Vercel rebuild on content publish
- Email notifications for new events
- Social media auto-posting

Settings → Webhooks → Add webhook:
- URL: `https://api.vercel.com/v1/integrations/deploy/[your-hook-id]`
- Trigger: Entry publish

## 9. Content Workflow

1. **Draft** → Write in Contentful
2. **Review** → Preview on staging
3. **Publish** → Goes live immediately
4. **Update** → Edit and republish as needed

## 10. Backup Strategy

- Contentful automatically backs up content
- Export content monthly via API
- Keep local copies of images

## Next Steps

1. Create content models as specified above
2. Add 3-5 sample entries for testing
3. Verify API connection in Next.js app
4. Start creating initial content batch
