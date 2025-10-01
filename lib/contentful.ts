import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

export interface Event {
  sys: { id: string };
  fields: {
    title: string;
    slug: string;
    artist: string;
    venue: string;
    city: 'New York City' | 'Philadelphia' | 'Boston';
    date: string;
    genre: 'Country' | 'Pop';
    featuredImage: any;
    description: string;
    ticketProgram: 'ticketnetwork' | 'vividseats' | 'stubhub';
  };
}

export interface Article {
  sys: { id: string };
  fields: {
    title: string;
    slug: string;
    type: 'review' | 'venue-guide' | 'city-guide';
    city: 'New York City' | 'Philadelphia' | 'Boston';
    genre?: 'Country' | 'Pop';
    excerpt: string;
    content: any;
    featuredImage: any;
    publishDate: string;
    author: string;
  };
}

export async function getEvents(limit = 10): Promise<Event[]> {
  try {
    const entries = await client.getEntries({
      content_type: 'event',
      limit,
      order: ['-fields.date'],
    });
    return entries.items as unknown as Event[];
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  try {
    const entries = await client.getEntries({
      content_type: 'event',
      'fields.slug': slug,
      limit: 1,
    });
    return entries.items[0] as unknown as Event || null;
  } catch (error) {
    console.error('Error fetching event:', error);
    return null;
  }
}

export async function getArticles(limit = 10): Promise<Article[]> {
  try {
    const entries = await client.getEntries({
      content_type: 'article',
      limit,
      order: ['-fields.publishDate'],
    });
    return entries.items as unknown as Article[];
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const entries = await client.getEntries({
      content_type: 'article',
      'fields.slug': slug,
      limit: 1,
    });
    return entries.items[0] as unknown as Article || null;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

export async function getArticlesByCity(city: string, limit = 6): Promise<Article[]> {
  try {
    const entries = await client.getEntries({
      content_type: 'article',
      'fields.city': city,
      limit,
      order: ['-fields.publishDate'],
    });
    return entries.items as unknown as Article[];
  } catch (error) {
    console.error('Error fetching articles by city:', error);
    return [];
  }
}
