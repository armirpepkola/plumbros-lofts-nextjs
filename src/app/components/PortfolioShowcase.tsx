import Image from 'next/image';
import Link from 'next/link';

// We'll define our project data here for now.
// Later, this could come from a CMS or an API.
const projects = [
    {
        id: 1,
        title: 'Modern Loft Conversion',
        category: 'Loft Conversion',
        imageUrl: '/portfolio-1.jpg',
    },
    {
        id: 2,
        title: 'Spacious House Extension',
        category: 'House Extension',
        imageUrl: '/portfolio-2.jpg',
    },
    {
        id: 3,
        title: 'Complete Home Refurbishment',
        category: 'Refurbishment',
        imageUrl: '/portfolio-3.jpg',
    },
];

export default function PortfolioShowcase() {
    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Our Latest Work
                    </h2>
                    <p className="text-lg text-gray-600">
                        Have a look at some of our recently completed projects. Each one is a testament to our commitment to quality, craftsmanship, and client satisfaction.
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                            <div className="relative h-64 w-full">
                                {/* --- CORRECTED CODE IS HERE --- */}
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    width={120}
                                    height={100}
                                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <p className="text-sm font-semibold text-blue-600 uppercase mb-1">{project.category}</p>
                                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* "View More" Button */}
                <div className="text-center mt-12">
                    <Link 
                        href="/portfolio" 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out"
                    >
                        View Full Portfolio
                    </Link>
                </div>
            </div>
        </section>
    );
}