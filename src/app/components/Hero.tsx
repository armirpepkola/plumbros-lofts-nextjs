import Link from 'next/link';

export default function Hero() {
    return (
        <section 
        className="relative bg-cover bg-center bg-no-repeat h-[60vh] md:h-[80vh] flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/hero-background.jpg')" }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                    Loft Conversion in London
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                    We are a family-owned business with over 20 years of experience, dedicated to creating beautiful and functional living spaces for you and your family.
                </p>
                <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Call Us
                </Link>
            </div>
        </section>
    );
}