'use client';

import { Button } from "./ui/button";
import { generateAffiliateUrl, trackAffiliateClick, type AffiliateProgram } from "@/lib/affiliate";
import { ExternalLink } from "lucide-react";

interface AffiliateButtonProps {
  program: AffiliateProgram;
  artist?: string;
  venue?: string;
  city?: string;
  eventSlug?: string;
  utmCampaign?: string;
  utmContent?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "secondary";
}

export function AffiliateButton({
  program,
  artist,
  venue,
  city,
  eventSlug,
  utmCampaign,
  utmContent,
  children,
  className,
  variant = "default",
}: AffiliateButtonProps) {
  const handleClick = () => {
    const url = generateAffiliateUrl({
      program,
      artist,
      venue,
      city,
      eventSlug,
      utmCampaign,
      utmContent,
    });

    trackAffiliateClick(program, eventSlug);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button 
      onClick={handleClick} 
      className={className}
      variant={variant}
    >
      {children}
      <ExternalLink className="ml-2 h-4 w-4" />
    </Button>
  );
}
