"use client"; // Error components must be Client Components

export default function Error({ error: _error, reset }: { error: Error; reset: () => void; }) {
    return (
        <main className="bg-brand-light">
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-3xl font-bold font-[var(--font-montserrat)] text-[var(--color-brand-dark)] mb-4">
                    Something Went Wrong
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    We're sorry, an unexpected error occurred. Please try again.
                </p>
                <button
                    onClick={() => reset()}
                    className="inline-block bg-[var(--color-brand-primary)] text-white font-bold font-[var(--font-montserrat)] uppercase py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    Try Again
                </button>
            </div>
        </main>
    );
}