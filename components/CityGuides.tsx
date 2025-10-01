import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const cities = [
  {
    name: 'New York City',
    slug: 'new-york-city',
    description: 'From Madison Square Garden to Brooklyn Steel, NYC offers world-class concerts every night.',
    venues: 12,
    upcomingEvents: 45,
  },
  {
    name: 'Philadelphia',
    slug: 'philadelphia',
    description: 'Historic venues and a passionate fan base make Philly a must for live music.',
    venues: 18,
    upcomingEvents: 67,
  },
  {
    name: 'Boston',
    slug: 'boston',
    description: 'Iconic theaters and arenas across Boston deliver unforgettable shows.',
    venues: 15,
    upcomingEvents: 52,
  },
];

export function CityGuides() {
  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">City Guides</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the best venues, upcoming events, and insider tips for each city
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Card key={city.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <CardTitle className="text-2xl">{city.name}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {city.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 py-4 border-t border-b">
                  <div>
                    <div className="text-2xl font-bold text-primary">{city.venues}</div>
                    <div className="text-sm text-muted-foreground">Venues</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{city.upcomingEvents}</div>
                    <div className="text-sm text-muted-foreground">Events</div>
                  </div>
                </div>

                <Link href={`/cities/${city.slug}`}>
                  <Button variant="outline" className="w-full">
                    Explore {city.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
