import { Button } from "./ui/button";
import { Calendar, MapPin, Music2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white">
      <div className="container py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <Music2 className="h-8 w-8" />
            <span className="text-sm font-semibold uppercase tracking-wide">Country & Pop Concerts</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Never Miss Your Favorite Artists Live
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Discover the best country and pop concerts in New York City, Philadelphia, and Boston with insider venue tips and exclusive alerts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
              <Calendar className="mr-2 h-5 w-5" />
              Get Event Alerts
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <MapPin className="mr-2 h-5 w-5" />
              Browse Venues
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-purple-400/30">
            <div>
              <div className="text-3xl font-bold mb-1">3</div>
              <div className="text-sm text-purple-200">Major Cities</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-sm text-purple-200">Venues Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">100+</div>
              <div className="text-sm text-purple-200">Events Monthly</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
