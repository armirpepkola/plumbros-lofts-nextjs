import Link from 'next/link';

export default function AboutSection() {
    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Transform Your Space with London's Leading Loft Specialists
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                    With over 20 years of dedicated experience, Plumbros Lofts is a family-run business that prides itself on delivering the highest professional standards. We turn your vision into a reality, creating beautiful, functional spaces that add value and joy to your home.
                </p>
                <div className="flex justify-center space-x-4">
                    <Link 
                        href="/portfolio" 
                        className="bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-3 px-8 border border-blue-500 hover:border-transparent rounded-lg transition duration-300 ease-in-out"
                    >
                        OUR WORK
                    </Link>
                    <Link 
                        href="/contact" 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out"
                    >
                        CONTACT US
                    </Link>
                </div>
            </div>
        </section>
    );
}