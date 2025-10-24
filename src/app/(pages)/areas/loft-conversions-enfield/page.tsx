import type { Metadata } from 'next';

// --- SEO METADATA for Enfield ---
export const metadata: Metadata = {
  title: "Loft Conversion Specialists Enfield | Plum & Bros Lofts",
  description: "Leading loft conversion company serving Enfield. We design and build stunning loft conversions in Southgate and Palmers Green. Get your free quote.",
};

export default function EnfieldPage() {
    return (
        <main className="bg-white">
            <header className="bg-brand-light py-20 md:py-28">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-[var(--font-montserrat)] text-[var(--color-brand-dark)]">
                        Enfield's Trusted Loft Conversion Experts
                    </h1>
                </div>
            </header>

            <div className="container mx-auto max-w-4xl px-6 py-16">
                <div className="prose lg:prose-xl max-w-none">
                    <p>
                        Plum & Bros Lofts is proud to serve homeowners throughout the London Borough of Enfield with our award-winning loft conversion services. We have a strong track record of successful projects in areas like <strong>Southgate</strong> and <strong>Palmers Green</strong>, transforming a diverse range of properties with our commitment to quality and customer satisfaction.
                    </p>
                    
                    <h2>Bespoke Designs for Your Enfield Home</h2>
                    <p>
                        Every home in Enfield has its own unique character, and our design process respects that. We create bespoke loft conversions that are tailored to your specific needs, your budget, and your home's aesthetic, ensuring a final result that is both beautiful and highly functional. All our work is backed by a 10-year guarantee for your peace of mind.
                    </p>
                </div>
            </div>
        </main>
    );
}