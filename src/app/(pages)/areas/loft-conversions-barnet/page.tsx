import type { Metadata } from 'next';

// --- SEO METADATA for Barnet ---
export const metadata: Metadata = {
  title: "Loft Conversion Specialists Barnet | Plum & Bros Lofts",
  description: "Trusted loft conversion builders in Barnet. We create beautiful loft conversions in Finchley, Hendon, and Edgware. 10-year guarantee.",
};

export default function BarnetPage() {
    return (
        <main className="bg-white">
            <header className="bg-brand-light py-20 md:py-28">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-[var(--font-montserrat)] text-[var(--color-brand-dark)]">
                        Your Loft Conversion Specialists in Barnet
                    </h1>
                </div>
            </header>

            <div className="container mx-auto max-w-4xl px-6 py-16">
                <div className="prose lg:prose-xl max-w-none">
                    <p>
                        For homeowners across the London Borough of Barnet, Plum & Bros Lofts is the go-to specialist for high-quality loft conversions. We have extensive experience working on a wide range of properties, from the classic 1930s family homes in <strong>Finchley</strong> and <strong>Hendon</strong> to the diverse housing stock of <strong>Edgware</strong>. We understand the local architectural styles and deliver projects that add significant space and value.
                    </p>
                    
                    <h2>Maximising Space for Barnet Families</h2>
                    <p>
                        Our team excels at designing loft conversions that meet the needs of growing families in Barnet. Whether you need a spacious master bedroom, a dedicated home office, or a playroom for the children, we craft bespoke solutions that are built to the highest standards of quality and craftsmanship.
                    </p>
                </div>
            </div>
        </main>
    );
}