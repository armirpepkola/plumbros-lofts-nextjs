import Image from 'next/image';

const affiliations = [
    {
        name: 'MyBuilder',
        logoUrl: '/mybuilder-logo.png',
        width: 150,
        height: 50,
    },
    {
        name: 'Checkatrade',
        logoUrl: '/checkatrade-logo.png',
        width: 160,
        height: 50,
    },
    {
        name: 'Federation of Master Builders',
        logoUrl: '/fmb-logo.png',
        width: 120,
        height: 50,
    },
];

export default function TrustBadges() {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl font-semibold text-gray-600 mb-8">
                    Proudly Affiliated With
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                    {affiliations.map((aff) => (
                        <div 
                        key={aff.name} 
                        className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                        >
                            <Image
                                src={aff.logoUrl}
                                alt={`${aff.name} Logo`}
                                width={aff.width}
                                height={aff.height}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}