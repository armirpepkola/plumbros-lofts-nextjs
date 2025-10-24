import type { Metadata } from 'next';

// --- SEO METADATA for Islington ---
export const metadata: Metadata = {
  title: "Loft Conversion Specialists Islington N1 | Plum & Bros Lofts",
  description: "Local Islington loft conversion builders (N1, N5, N7). We transform Victorian terraces with bespoke dormer & mansard lofts. 10-year guarantee.",
};

export default function IslingtonPage() {
    return (
        <main className="bg-white">
            <header className="bg-brand-light py-20 md:py-28">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-[var(--font-montserrat)] text-[var(--color-brand-dark)]">
                        Your Local Loft Conversion Specialists in Islington
                    </h1>
                </div>
            </header>

            <div className="container mx-auto max-w-4xl px-6 py-16">
                <div className="prose lg:prose-xl max-w-none">
                    <p>
                        Plum & Bros Lofts is proud to be the trusted local choice for homeowners throughout the London Borough of Islington. From the elegant Victorian terraces of <strong>Canonbury</strong> and <strong>Barnsbury</strong> to the family homes of <strong>Highbury</strong> and <strong>Tufnell Park</strong>, we have deep experience navigating the unique character and strict planning regulations of Islington Council to deliver stunning, compliant loft conversions.
                    </p>
                    
                    <h2>Designs that Respect Islington's Heritage</h2>
                    <p>
                        We specialise in loft conversions that are sensitive to the character of Islington's many conservation areas. We understand the importance of adhering to local guidelines and work diligently to ensure our designs enhance your home's aesthetic, adding value and space in perfect harmony with your property.
                    </p>

                    <blockquote className="border-l-4 border-[var(--color-brand-primary)] pl-6 italic text-gray-700">
                        <h3 className="font-bold not-italic">Case Study: Mansard Conversion, Canonbury N1</h3>
                        <p>"We designed and built a beautiful mansard loft conversion on a four-storey Victorian terrace, adding a master suite that perfectly matched the property's original brickwork. The project received full planning approval from Islington Council on the first submission."</p>
                        <footer>- The Davies Family, Canonbury</footer>
                    </blockquote>
                </div>
            </div>
        </main>
    );
}