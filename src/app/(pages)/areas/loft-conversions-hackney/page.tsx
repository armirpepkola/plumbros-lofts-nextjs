import type { Metadata } from 'next';
// --- SEO METADATA for Hackney ---
export const metadata: Metadata = {
  title: "Loft Conversion Specialists Hackney | Plum & Bros Lofts",
  description: "Your trusted local Hackney loft conversion builders. We transform properties in Shoreditch, Dalston, and across E8 with bespoke dormer & mansard lofts.",
};

export default function HackneyPage() {
    return (
        <main className="bg-white">
            <header className="bg-brand-light py-20 md:py-28">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-[var(--font-montserrat)] text-[var(--color-brand-dark)]">
                        Your Local Loft Conversion Specialists in Hackney
                    </h1>
                </div>
            </header>

            <div className="container mx-auto max-w-4xl px-6 py-16">
                <div className="prose lg:prose-xl max-w-none">
                    <p>
                        Plum & Bros Lofts is the trusted local choice for homeowners across the London Borough of Hackney. From the vibrant streets of <strong>Shoreditch</strong> and <strong>Dalston</strong> to the leafy terraces of <strong>Stoke Newington</strong> and <strong>Clapton</strong>, we possess deep experience in navigating the unique architectural styles and planning regulations of Hackney Council.
                    </p>
                    
                    <h2>Designs that Enhance Hackney's Character</h2>
                    <p>
                        We specialise in creating loft conversions that are perfectly in sync with the character of Hackney's diverse properties, from modern developments to protected conservation areas. We work diligently to ensure our designs add value and enhance your home's unique aesthetic.
                    </p>
                </div>
            </div>
        </main>
    );
}