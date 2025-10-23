"use client";

import { motion, useMotionValue, Variants } from 'framer-motion';
import { MouseEvent } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

// Animation Variants (unchanged)
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};
const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};
const buttonTextVariants: Variants = {
    rest: { color: "#fff" },
    hover: { color: "var(--color-brand-primary)" }
};
const bgSlideVariants: Variants = {
    rest: { x: "-101%" },
    hover: { x: 0 }
};

export default function ContactPage() {
    const mouseX = useMotionValue(Infinity);
    const mouseY = useMotionValue(Infinity);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const mapLocation = "159 Willesden Lane, Kilburn, United Kingdom";
    const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapLocation)}&output=embed`;

    return (
        // Use a fragment <> to wrap both sections
        <>
            <motion.section
                className="relative w-full overflow-hidden bg-[#111111] text-white py-20 md:py-32"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => { mouseX.set(Infinity); mouseY.set(Infinity); }}
            >
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(148, 18, 49, 0.2), transparent 80%)`,
                    }}
                />

                <div className="container mx-auto max-w-7xl px-6 relative z-10">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            <div className="lg:sticky lg:top-32">
                                <motion.h1 className="text-5xl md:text-6xl font-extrabold font-[var(--font-montserrat)] mb-6" variants={itemVariants}>
                                    Get in Touch
                                </motion.h1>
                                <motion.p className="text-lg text-gray-300 mb-10" variants={itemVariants}>
                                    Have a project in mind? We'd love to hear from you. Use the form or contact us directly through one of the channels below.
                                </motion.p>
                                <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" variants={itemVariants}>
                                    <a href="mailto:info@plumbroslofts.co.uk" className="group relative p-6 bg-white/5 border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300">
                                        <FaEnvelope className="text-3xl text-[var(--color-brand-primary)] mb-4" />
                                        <h3 className="font-bold font-[var(--font-montserrat)] mb-1">Email Us</h3>
                                        <p className="text-gray-400 group-hover:text-white transition-colors">info@plumbroslofts.co.uk</p>
                                    </a>
                                    <a href="tel:+441234567890" className="group relative p-6 bg-white/5 border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300">
                                        <FaPhone className="text-3xl text-[var(--color-brand-primary)] mb-4" />
                                        <h3 className="font-bold font-[var(--font-montserrat)] mb-1">Call Us</h3>
                                        <p className="text-gray-400 group-hover:text-white transition-colors">(123) 456-7890</p>
                                    </a>
                                </motion.div>
                            </div>

                            <motion.div className="bg-white/5 border border-white/10 rounded-lg p-8" variants={itemVariants}>
                                <form action="#" method="POST" className="space-y-8">
                                    <div className="relative pt-4">
                                        <input type="text" id="name" name="name" placeholder=" " required className="peer w-full bg-transparent border-b-2 border-white/20 focus:border-[var(--color-brand-primary)] text-white p-2 outline-none transition-colors" />
                                        <label htmlFor="name" className="absolute left-2 -top-3.5 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[var(--color-brand-primary)]">Name</label>
                                    </div>
                                    <div className="relative pt-4">
                                        <input type="email" id="email" name="email" placeholder=" " required className="peer w-full bg-transparent border-b-2 border-white/20 focus:border-[var(--color-brand-primary)] text-white p-2 outline-none transition-colors" />
                                        <label htmlFor="email" className="absolute left-2 -top-3.5 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[var(--color-brand-primary)]">Email Address</label>
                                    </div>
                                    {/* --- NEW PHONE NUMBER FIELD --- */}
                                    <div className="relative pt-4">
                                        <input type="tel" id="phone" name="phone" placeholder=" " required className="peer w-full bg-transparent border-b-2 border-white/20 focus:border-[var(--color-brand-primary)] text-white p-2 outline-none transition-colors" />
                                        <label htmlFor="phone" className="absolute left-2 -top-3.5 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[var(--color-brand-primary)]">Phone Number</label>
                                    </div>
                                    <div className="relative pt-4">
                                        <textarea id="message" name="message" rows={4} placeholder=" " required className="peer w-full bg-transparent border-b-2 border-white/20 focus:border-[var(--color-brand-primary)] text-white p-2 outline-none transition-colors"></textarea>
                                        <label htmlFor="message" className="absolute left-2 -top-3.5 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[var(--color-brand-primary)]">Message</label>
                                    </div>
                                    
                                    <motion.div initial="rest" whileHover="hover" animate="rest" className="relative inline-block">
                                        <button type="submit" className="relative inline-flex items-center overflow-hidden bg-[var(--color-brand-primary)] text-white font-bold font-[var(--font-montserrat)] uppercase py-3 px-8 rounded-md shadow-lg transition-shadow duration-300">
                                            <motion.span variants={buttonTextVariants} transition={{ duration: 0.3, ease: 'easeOut' }} className="relative z-10">Send Message</motion.span>
                                            <motion.div className="absolute inset-0 z-0 bg-white" variants={bgSlideVariants} transition={{ duration: 0.3, ease: 'easeOut' }}/>
                                        </button>
                                    </motion.div>
                                </form>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* --- NEW MAP SECTION --- */}
            <section className="w-full h-[500px] bg-gray-200 -mb-12">
                <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy" // Native browser lazy-loading for performance
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </>
    );
}