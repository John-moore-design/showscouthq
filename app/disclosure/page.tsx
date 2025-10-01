import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Affiliate Disclosure | ShowScoutHQ",
  description: "Learn about our affiliate partnerships and how we earn commissions.",
};

export default function DisclosurePage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Affiliate Disclosure</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>How We Make Money</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none">
          <p>
            ShowScoutHQ participates in affiliate marketing programs. This means we earn 
            commissions when you purchase tickets through our links. This comes at no 
            additional cost to you—prices are the same whether you use our links or not.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Affiliate Partners</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none">
          <p>We partner with the following ticket marketplaces:</p>
          <ul>
            <li><strong>TicketNetwork:</strong> We earn up to 12.5% commission on ticket sales</li>
            <li><strong>Vivid Seats:</strong> We earn 4-7% commission on ticket sales</li>
            <li><strong>StubHub:</strong> We earn 9% commission on ticket sales</li>
            <li><strong>Ticketmaster:</strong> We earn $0.30 per ticket sale</li>
          </ul>
          <p>
            These commissions help us provide free content, venue guides, and concert 
            recommendations to our readers.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Commitment to You</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none">
          <p>
            <strong>We only recommend what we genuinely believe in.</strong> Our affiliate 
            relationships do not influence our editorial content. We provide honest reviews, 
            accurate venue information, and unbiased recommendations.
          </p>
          <p>Key principles we follow:</p>
          <ul>
            <li>We disclose all affiliate relationships clearly</li>
            <li>We compare multiple ticket sources to help you find the best deals</li>
            <li>We provide genuine value through detailed venue guides and concert insights</li>
            <li>We never recommend events or venues solely for commission</li>
            <li>We respect your trust and privacy</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>How Affiliate Links Work</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none">
          <p>
            When you click an affiliate link on our site, a cookie is placed in your browser. 
            If you purchase tickets within the cookie duration (typically 30-45 days), we 
            receive a commission.
          </p>
          <p>
            <strong>Important:</strong> You pay the same price whether you use our links or 
            go directly to the ticket site. The commission comes from the ticket marketplace, 
            not from you.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Questions?</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none">
          <p>
            If you have any questions about our affiliate relationships or how we make money, 
            please contact us. We're committed to transparency and building trust with our 
            readers.
          </p>
        </CardContent>
      </Card>

      <div className="mt-8 p-6 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>FTC Compliance:</strong> This disclosure is in accordance with the Federal 
          Trade Commission's 16 CFR, Part 255: "Guides Concerning the Use of Endorsements 
          and Testimonials in Advertising."
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Last updated: October 2025
        </p>
      </div>
    </div>
  );
}
