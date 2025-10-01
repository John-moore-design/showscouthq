import { Hero } from "@/components/Hero";
import { FeaturedEvents } from "@/components/FeaturedEvents";
import { CityGuides } from "@/components/CityGuides";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import { VenueSpotlight } from "@/components/VenueSpotlight";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedEvents />
      <CityGuides />
      <VenueSpotlight />
      <NewsletterCTA />
    </>
  );
}
