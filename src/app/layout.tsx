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
  title: {
    default: "Loft Conversion Specialists London | Plum & Bros Lofts",
    template: "%s | Plum & Bros Lofts",
  },
  description: "Family-run loft conversion specialists in London. We build stunning dormer, mansard & hip-to-gable lofts. 10-year guarantee. Get a free quote!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.variable} bg-white`}>
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