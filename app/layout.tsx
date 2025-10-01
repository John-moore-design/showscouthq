import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShowScoutHQ - Country & Pop Concerts in Dallas, Nashville & Chicago",
  description: "Discover the best country and pop concerts with insider venue tips, curated picks, and exclusive alerts. Never miss your favorite artists.",
  keywords: "country concerts, pop concerts, Dallas events, Nashville shows, Chicago concerts, concert tickets, venue guides",
  openGraph: {
    title: "ShowScoutHQ - Your Concert Discovery Platform",
    description: "Discover the best country and pop concerts with insider venue tips and exclusive alerts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
