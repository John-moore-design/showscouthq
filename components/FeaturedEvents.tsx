import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, MapPin, Music } from "lucide-react";
import { AffiliateButton } from "./AffiliateButton";

// Mock data - will be replaced with Contentful data
const mockEvents = [
  {
    id: '1',
    title: 'Luke Combs',
    venue: 'American Airlines Center',
    city: 'Dallas',
    date: '2025-10-15',
    genre: 'Country',
    image: '/placeholder-concert.jpg',
  },
  {
    id: '2',
    title: 'Taylor Swift',
    venue: 'United Center',
    city: 'Chicago',
    date: '2025-10-22',
    genre: 'Pop',
    image: '/placeholder-concert.jpg',
  },
  {
    id: '3',
    title: 'Morgan Wallen',
    venue: 'Bridgestone Arena',
    city: 'Nashville',
    date: '2025-11-05',
    genre: 'Country',
    image: '/placeholder-concert.jpg',
  },
];

export function FeaturedEvents() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Events</h2>
            <p className="text-muted-foreground">Don't miss these upcoming shows</p>
          </div>
          <Button variant="outline">View All Events</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                <Music className="h-16 w-16 text-white/50" />
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded">
                    {event.genre}
                  </span>
                  <span className="text-xs text-muted-foreground">{event.city}</span>
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  {event.venue}
                </div>
              </CardContent>

              <CardFooter>
                <AffiliateButton
                  program="ticketnetwork"
                  artist={event.title}
                  venue={event.venue}
                  city={event.city}
                  className="w-full"
                >
                  Get Tickets
                </AffiliateButton>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
