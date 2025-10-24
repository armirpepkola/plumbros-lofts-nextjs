import Image from 'next/image';
import Link from 'next/link';

export default function NextSteps() {
    return (
        <section className="py-20 md:py-28 bg-brand-light">
            <div className="container mx-auto max-w-7xl px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-montserrat)] text-[var(--color-brand-dark)] mb-12">
                    Continue Your Journey
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Portfolio Link */}
                    <Link
                        href="/portfolio"
                        className="group relative block h-80 rounded-lg overflow-hidden shadow-xl"
                    >
                        <Image
                            src="/proof.jpeg" // Using your new image path
                            alt="View our portfolio"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                        <div className="relative h-full flex flex-col justify-end p-8 text-white">
                            <h3 className="text-3xl font-bold font-[var(--font-montserrat)] mb-2">
                                See The Proof
                            </h3>
                            <p className="group-hover:underline">Explore our gallery of completed projects.</p>
                        </div>
                    </Link>

                    {/* Blog Link */}
                    <Link
                        href="/blog"
                        className="group relative block h-80 rounded-lg overflow-hidden shadow-xl"
                    >
                        <Image
                            src="/inspire.jpg" // Using your new image path
                            alt="Read our blog"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                        <div className="relative h-full flex flex-col justify-end p-8 text-white">
                            <h3 className="text-3xl font-bold font-[var(--font-montserrat)] mb-2">
                                Get Inspired
                            </h3>
                            <p className="group-hover:underline">Read our blog for ideas and insights.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}