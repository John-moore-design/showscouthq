/**
 * Affiliate Link Management System
 * Priority: TicketNetwork (12.5%) > Vivid Seats (4-7%) > StubHub (9%)
 */

export type AffiliateProgram = 'ticketnetwork' | 'vividseats' | 'stubhub' | 'ticketmaster';

export interface AffiliateLink {
  program: AffiliateProgram;
  baseUrl: string;
  affiliateId: string;
  commission: string;
  cookieDuration: number;
}

const AFFILIATE_PROGRAMS: Record<AffiliateProgram, Omit<AffiliateLink, 'affiliateId'>> = {
  ticketnetwork: {
    program: 'ticketnetwork',
    baseUrl: 'https://www.ticketnetwork.com',
    commission: '12.5%',
    cookieDuration: 45,
  },
  vividseats: {
    program: 'vividseats',
    baseUrl: 'https://www.vividseats.com',
    commission: '4-7%',
    cookieDuration: 30,
  },
  stubhub: {
    program: 'stubhub',
    baseUrl: 'https://www.stubhub.com',
    commission: '9%',
    cookieDuration: 30,
  },
  ticketmaster: {
    program: 'ticketmaster',
    baseUrl: 'https://www.ticketmaster.com',
    commission: '$0.30',
    cookieDuration: 30,
  },
};

interface GenerateAffiliateUrlParams {
  program: AffiliateProgram;
  eventSlug?: string;
  artist?: string;
  venue?: string;
  city?: string;
  utmCampaign?: string;
  utmContent?: string;
}

/**
 * Generate affiliate URL with tracking parameters
 */
export function generateAffiliateUrl({
  program,
  eventSlug = '',
  artist = '',
  venue = '',
  city = '',
  utmCampaign = 'content',
  utmContent = 'article',
}: GenerateAffiliateUrlParams): string {
  const config = AFFILIATE_PROGRAMS[program];
  const affiliateId = getAffiliateId(program);
  
  if (!affiliateId) {
    console.warn(`Missing affiliate ID for ${program}`);
    return config.baseUrl;
  }

  // Build search query
  const searchQuery = artist || venue || eventSlug;
  
  // Base URL with affiliate parameter (varies by program)
  let url = config.baseUrl;
  const params = new URLSearchParams();

  switch (program) {
    case 'ticketnetwork':
      url += '/tickets';
      params.set('afflky', affiliateId);
      if (searchQuery) params.set('q', searchQuery);
      break;
    
    case 'vividseats':
      url += '/concerts';
      params.set('wsUser', affiliateId);
      if (searchQuery) params.set('q', searchQuery);
      break;
    
    case 'stubhub':
      url += '/find';
      params.set('aid', affiliateId);
      if (searchQuery) params.set('q', searchQuery);
      break;
    
    case 'ticketmaster':
      url += '/search';
      params.set('tm_link', affiliateId);
      if (searchQuery) params.set('q', searchQuery);
      break;
  }

  // Add UTM parameters
  params.set('utm_source', 'showscouthq');
  params.set('utm_medium', 'affiliate');
  params.set('utm_campaign', utmCampaign);
  params.set('utm_content', utmContent);
  
  if (city) params.set('utm_term', city.toLowerCase());

  return `${url}?${params.toString()}`;
}

/**
 * Get affiliate ID from environment
 */
function getAffiliateId(program: AffiliateProgram): string {
  const envMap: Record<AffiliateProgram, string> = {
    ticketnetwork: process.env.TICKET_NETWORK_AFFILIATE_ID || '',
    vividseats: process.env.VIVID_SEATS_AFFILIATE_ID || '',
    stubhub: process.env.STUBHUB_AFFILIATE_ID || '',
    ticketmaster: process.env.TICKETMASTER_AFFILIATE_ID || '',
  };
  
  return envMap[program];
}

/**
 * Get recommended program based on event type and expected value
 */
export function getRecommendedProgram(eventType: 'concert' | 'sports' | 'theater' = 'concert'): AffiliateProgram {
  // Default priority: TicketNetwork for highest commission
  // Can be enhanced with A/B testing data
  return 'ticketnetwork';
}

/**
 * Track affiliate click (for analytics)
 */
export function trackAffiliateClick(program: AffiliateProgram, eventSlug?: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'affiliate_click', {
      event_category: 'affiliate',
      event_label: program,
      value: eventSlug || 'general',
    });
  }
}
