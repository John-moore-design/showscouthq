import Link from "next/link";
import { Music, Mail, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Music className="h-5 w-5 text-primary" />
              <span className="font-bold">ShowScoutHQ</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your guide to the best country and pop concerts in New York City, Philadelphia, and Boston.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Follow us on Twitter" title="Follow us on Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Follow us on Instagram" title="Follow us on Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Email us" title="Email us">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Cities</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/cities/new-york-city" className="text-muted-foreground hover:text-primary">New York City</Link></li>
              <li><Link href="/cities/philadelphia" className="text-muted-foreground hover:text-primary">Philadelphia</Link></li>
              <li><Link href="/cities/boston" className="text-muted-foreground hover:text-primary">Boston</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/venues" className="text-muted-foreground hover:text-primary">Venue Guides</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/events" className="text-muted-foreground hover:text-primary">Upcoming Events</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/disclosure" className="text-muted-foreground hover:text-primary">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ShowScoutHQ. All rights reserved.</p>
          <p className="mt-2">
            <strong>Affiliate Disclosure:</strong> We earn commissions from ticket purchases made through our links. This helps us provide free content and guides.
          </p>
        </div>
      </div>
    </footer>
  );
}
