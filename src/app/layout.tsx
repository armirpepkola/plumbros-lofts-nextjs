import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google"; // Import Montserrat
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Configure the primary font for the body content
const inter = Inter({ subsets: ["latin"] });

// Configure the Montserrat font for use with a CSS variable
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'], // Include a range of weights
  variable: '--font-montserrat', // This is the key part
});

export const metadata: Metadata = {
  title: "Plumbros Lofts - London Loft Conversion Specialists",
  description: "Expert loft conversion and house extension services in London.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply both font variables to the body */}
      <body className={`${inter.className} ${montserrat.variable}`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}