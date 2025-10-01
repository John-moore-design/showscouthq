import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Building2, Star } from "lucide-react";

const venues = [
  {
    name: 'American Airlines Center',
    city: 'Dallas',
    capacity: '20,000',
    rating: 4.5,
    bestFor: 'Major arena shows',
  },
  {
    name: 'Bridgestone Arena',
    city: 'Nashville',
    capacity: '20,000',
    rating: 4.8,
    bestFor: 'Country superstars',
  },
  {
    name: 'United Center',
    city: 'Chicago',
    capacity: '23,500',
    rating: 4.6,
    bestFor: 'Stadium experiences',
  },
];

export function VenueSpotlight() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Venue Spotlight</h2>
          <p className="text-lg text-muted-foreground">
            Get the inside scoop on the best concert venues
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {venues.map((venue) => (
            <Card key={venue.name}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{venue.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{venue.city}</p>
                  </div>
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(venue.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {venue.rating}
                  </span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Capacity:</span>
                    <span className="font-medium">{venue.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Best for:</span>
                    <span className="font-medium">{venue.bestFor}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
