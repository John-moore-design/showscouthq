import Link from "next/link";
import { Music, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Music className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">ShowScoutHQ</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/events" className="transition-colors hover:text-primary">
            Events
          </Link>
          <Link href="/venues" className="transition-colors hover:text-primary">
            Venues
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/cities/new-york-city" className="transition-colors hover:text-primary">
              New York City
            </Link>
            <Link href="/cities/philadelphia" className="transition-colors hover:text-primary">
              Philadelphia
            </Link>
            <Link href="/cities/boston" className="transition-colors hover:text-primary">
              Boston
            </Link>
          </div>
          <Link href="/blog" className="transition-colors hover:text-primary">
            Blog
          </Link>
        </nav>

        <Button size="sm">
          Get Alerts
        </Button>
      </div>
    </header>
  );
}

