import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

// --- SEO METADATA IMPLEMENTED ---
export const metadata: Metadata = {
  metadataBase: new URL('https://www.plumbroslofts.co.uk'),
  title: {
    default: "Loft Conversion Specialists London | Plum & Bros Lofts",
    template: "%s | Plum & Bros Lofts",
  },
  description: "Family-run loft conversion specialists in London. We build stunning dormer, mansard & hip-to-gable lofts. 10-year guarantee. Get a free quote!",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Plum & Bros Lofts",
  "image": "/images/logo.png",
  "url": "https://www.plumbroslofts.co.uk/",
  "telephone": "+447915635702",
  "priceRange": "££",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "159 Willesden Lane",
    "addressLocality": "London",
    "postalCode": "NW6 7YA",
    "addressCountry": "GB"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "North London" },
    { "@type": "AdministrativeArea", "name": "South London" },
    { "@type": "AdministrativeArea", "name": "West London" },
    { "@type": "AdministrativeArea", "name": "East London" },
    { "@type": "AdministrativeArea", "name": "Greater London" }
  ],
  "hasOfferCatalog": [
    {
      "@type": "OfferCatalog",
      "name": "Loft Conversion Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dormer Loft Conversions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hip-to-Gable Loft Conversions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mansard Loft Conversions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "L-Shaped Dormer Conversions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Velux (Rooflight) Conversions" } }
      ]
    },
    {
      "@type": "OfferCatalog",
      "name": "House Extension Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rear House Extensions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Side Return Extensions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wrap-Around Extensions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Double Storey Extensions" } }
      ]
    },
    {
      "@type": "OfferCatalog",
      "name": "Home Refurbishment Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Home Refurbishments" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchen Renovations" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathroom Refurbishments" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Structural Alterations" } }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.variable} bg-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <BackToTopButton />
      </body>
    </html>
  );
}