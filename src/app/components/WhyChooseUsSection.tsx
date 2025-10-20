export default function WhyChooseUsSection() {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Our Commitment to Excellence
                    </h2>
                    <p className="text-lg text-gray-600">
                        We operate at the highest and most professional standards, ensuring every project is a testament to our reputation for quality, customer satisfaction, and personalized service.
                    </p>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                    {/* Stat 1: Years of Experience */}
                    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                        <div className="flex justify-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                style={{ width: '24px', height: '24px', flexShrink: 0, flexGrow: 0 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p className="text-4xl font-extrabold text-gray-800 mb-2">20+</p>
                        <h3 className="text-lg font-semibold text-gray-600">Years Of Experience</h3>
                    </div>


                    {/* Stat 2: Happy Clients */}
                    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                        <div className="flex justify-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                style={{ width: '24px', height: '24px', flexShrink: 0, flexGrow: 0 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p className="text-4xl font-extrabold text-gray-800 mb-2">500+</p>
                        <h3 className="text-lg font-semibold text-gray-600">Happy Clients</h3>
                    </div>

                    {/* Stat 3: Completed Projects */}
                    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                        <div className="flex justify-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                style={{ width: '24px', height: '24px', flexShrink: 0, flexGrow: 0 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </div>
                        <p className="text-4xl font-extrabold text-gray-800 mb-2">750+</p>
                        <h3 className="text-lg font-semibold text-gray-600">Completed Projects</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}