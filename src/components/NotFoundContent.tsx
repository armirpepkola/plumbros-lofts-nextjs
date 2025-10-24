"use client"; // This is the crucial line

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFoundContent() {
    return (
        <main className="bg-[#1a1a1a] text-white -mb-12 ">
            <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                {/* The animated background, which requires "use client" */}
                <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
                    <svg width="600" height="400" viewBox="0 0 600 400" className="w-full h-full">
                        <defs>
                            <linearGradient id="lightBeam" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <motion.rect 
                            x="0" 
                            width="100%" 
                            height="100%" 
                            fill="url(#lightBeam)" 
                            initial={{ y: "-100%" }}
                            animate={{ y: ["-100%", "100%"] }}
                            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
                        />
                        <motion.path 
                            d="M50 350 L50 150 L300 50 L550 150 L550 350 Z M50 150 L550 150" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            fill="none" 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", repeatDelay: 1 }}
                        />
                    </svg>
                </div>

                {/* The text content */}
                <div className="relative z-10">
                    <h1 className="text-9xl font-extrabold font-[var(--font-montserrat)] text-[var(--color-brand-primary)]">
                        404
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-montserrat)] mt-4 mb-6">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-gray-300 max-w-md mx-auto mb-10">
                        Oops! The page you're looking for seems to have been misplaced. Let's get you back on track.
                    </p>
                    <Link 
                        href="/" 
                        className="inline-block bg-white text-[var(--color-brand-primary)] font-bold font-[var(--font-montserrat)] uppercase py-4 px-10 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Return to Homepage
                    </Link>
                </div>
            </div>
        </main>
    );
}