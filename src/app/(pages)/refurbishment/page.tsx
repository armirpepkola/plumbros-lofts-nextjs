"use client";

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa';

// --- NEW DATA: Re-written for Refurbishment ---
const acts = [
    { id: 'vision', title: "Act I: The Vision", content: "We see the hidden potential in every space. Our design process honors your home's character while envisioning a modern functionality that breathes new life into every room.", image: "/homepage/hero-background.jpg" },
    { id: 'transformation', title: "Act II: The Transformation", content: "This is where precision meets artistry. With meticulous attention to detail, our craftsmen use the finest materials to restore, rebuild, and refine your space.", image: "/homepage/hero-background.jpg" },
    { id: 'reality', title: "Act III: The Reality", content: "The final reveal—a home reborn. A stunning synthesis of the timeless and the new, delivered with our hallmark commitment to quality and excellence.", image: "/homepage/hero-background.jpg" },
];

const faqItems = [ 
    { q: "What does a full home refurbishment include?", a: "A full refurbishment can be completely bespoke, including structural changes, new kitchens and bathrooms, re-wiring, new plumbing, flooring, and complete redecoration. We tailor the project to your exact needs." }, 
    { q: "Can you work with and preserve period features?", a: "Absolutely. We specialize in blending modern amenities with the timeless character of period properties. Preserving and restoring features like cornices, fireplaces, and original flooring is a passion of ours." }, 
    { q: "Do we need to move out during the refurbishment?", a: "For large-scale, multi-room projects, it is often more efficient and comfortable for clients to move out. For smaller, single-room refurbishments, we work meticulously to minimize disruption to your daily life." }, 
    { q: "How do you manage the project and budget?", a: "We provide a detailed, itemized quote and a clear project timeline from the outset. You'll have a dedicated project manager and regular updates to ensure everything stays on track and on budget." }, 
];

// --- REUSABLE COMPONENTS (Unchanged) ---
const AccordionItem = ({ item, isOpen, onClick }: any) => ( <div className="border-b border-white/10"><button onClick={onClick} className="w-full flex justify-between items-center text-left py-6"><span className="text-xl font-medium font-[var(--font-montserrat)]">{item.q}</span><motion.div animate={{ rotate: isOpen ? 45 : 0 }}><FaPlus size={20} /></motion.div></button><AnimatePresence>{isOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p className="pb-6 text-gray-300">{item.a}</p></motion.div>)}</AnimatePresence></div> );
const ActSection = ({ title, content, image, children, index }: any) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const textOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
    return (<section ref={ref} className="sticky top-0 h-screen overflow-hidden"><motion.div className="absolute inset-0 z-0" style={{ y, scale: 1.15 }}><Image src={image} alt={title} fill className="object-cover opacity-20" /></motion.div><div className="absolute inset-0 bg-[#1a1a1a] bg-opacity-70 z-10" /><div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">{children}</div><motion.div className="relative z-30 h-full flex flex-col items-center justify-center text-center px-6" style={{ opacity: textOpacity }}><h3 className="text-sm font-bold text-[var(--color-brand-primary)] uppercase tracking-widest mb-4">Act {index + 1}</h3><h2 className="text-4xl md:text-6xl font-extrabold font-[var(--font-montserrat)] mb-6">{title}</h2><p className="text-xl text-gray-200 max-w-2xl">{content}</p></motion.div></section>);
};

// --- THE FINAL PAGE ---
export default function RefurbishmentPage() {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

    return (
        <main className="bg-[#1a1a1a] text-white">
            <div className="relative pt-28 pb-16 md:pt-40 md:pb-20 text-center container mx-auto px-6 overflow-hidden">
                {/* --- NEW HEADER ANIMATION: "BEAM OF RESTORATION" --- */}
                <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
                    <svg width="600" height="400" viewBox="0 0 600 400" className="w-full h-full">
                        <defs><pattern id="aged" patternUnits="userSpaceOnUse" width="10" height="10"><path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="white" strokeWidth="0.5" /></pattern><linearGradient id="wipe" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="white" stopOpacity="0.5" /><stop offset="100%" stopColor="white" stopOpacity="0" /></linearGradient></defs>
                        <rect width="100%" height="100%" fill="url(#aged)" />
                        <motion.rect x="0" y="0" width="100%" height="100%" fill="url(#wipe)" initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }} />
                    </svg>
                </div>
                <div className="relative z-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold font-[var(--font-montserrat)] mb-6">Masterful Home Refurbishments</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">We breathe new life into every space, blending timeless character with modern luxury. This is the art of renewal.</p>
                </div>
            </div>

            <div className="relative">
                {/* ACT I: THE VISION (Signature Orbs) */}
                <ActSection index={0} title={acts[0].title} content={acts[0].content} image={acts[0].image}>
                    <div className="w-full h-full relative"><motion.div className="absolute top-[20%] left-[25%] w-32 h-32 rounded-full bg-[var(--color-brand-primary)]/20 blur-3xl" animate={{ x: [0, 50, 0], scale: [1, 1.2, 1] }} transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }} /><motion.div className="absolute bottom-[30%] right-[20%] w-48 h-48 rounded-full bg-white/10 blur-3xl" animate={{ y: [0, -40, 0] }} transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }} /><motion.div className="absolute bottom-[40%] left-[15%] w-24 h-24 rounded-full bg-[var(--color-brand-primary)]/10 blur-2xl" animate={{ scale: [1, 0.8, 1] }} transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }} /></div>
                </ActSection>

                {/* ACT II: THE TRANSFORMATION (New "Interlocking Materials" Animation) */}
                <ActSection index={1} title={acts[1].title} content={acts[1].content} image={acts[1].image}>
                     <motion.div className="grid grid-cols-4 gap-1 w-96 h-96" initial="hidden" whileInView="visible" transition={{ staggerChildren: 0.05 }}>
                        {[...Array(16)].map((_, i) => (
                            <motion.div key={i} className="bg-white/20" variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } }} />
                        ))}
                     </motion.div>
                </ActSection>

                {/* ACT III: THE REALITY (Signature Shutter Reveal) */}
                <section className="sticky top-0 h-screen overflow-hidden">
                    <div className="absolute inset-0 z-0"><Image src={acts[2].image} alt="Final Result" fill className="object-cover" /></div>
                    <motion.div className="absolute top-0 left-0 w-1/2 h-full bg-[#1a1a1a] z-20" initial={{ x: 0 }} whileInView={{ x: '-100%' }} transition={{ duration: 1.2, ease: [0.87, 0, 0.13, 1] }} />
                    <motion.div className="absolute top-0 right-0 w-1/2 h-full bg-[#1a1a1a] z-20" initial={{ x: 0 }} whileInView={{ x: '100%' }} transition={{ duration: 1.2, ease: [0.87, 0, 0.13, 1] }} />
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <motion.div className="relative z-30 h-full flex flex-col items-center justify-center text-center px-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>
                        <h3 className="text-sm font-bold text-[var(--color-brand-primary)] uppercase tracking-widest mb-4">Act 3</h3><h2 className="text-4xl md:text-6xl font-extrabold font-[var(--font-montserrat)] mb-6">{acts[2].title}</h2><p className="text-xl text-gray-200 max-w-2xl">{acts[2].content}</p>
                    </motion.div>
                </section>
            </div>

            <section className="py-20 md:py-28 bg-[#1a1a1a]"><div className="container mx-auto max-w-4xl px-6"><div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold font-[var(--font-montserrat)]">Your Questions, Answered</h2></div><div>{faqItems.map((item, i) => <AccordionItem key={i} item={item} isOpen={expandedFaq === i} onClick={() => setExpandedFaq(expandedFaq === i ? null : i)} />)}</div></div></section>
            <section className="py-20 md:py-28 bg-brand-light"><div className="container mx-auto max-w-7xl px-6 text-center"><h2 className="text-3xl md:text-4xl font-bold font-[var(--font-montserrat)] text-[var(--color-brand-dark)] mb-12">Continue Your Journey</h2><div className="grid grid-cols-1 lg:grid-cols-2 gap-8"><Link href="/portfolio" className="group relative block h-80 rounded-lg overflow-hidden shadow-xl"><Image src="/homepage/hero-background.jpg" alt="View our portfolio" fill className="object-cover group-hover:scale-105" /><div className="absolute inset-0 bg-black/50" /><div className="relative h-full flex flex-col justify-end p-8 text-white"><h3 className="text-3xl font-bold font-[var(--font-montserrat)] mb-2">See The Proof</h3><p>Explore our gallery of completed projects.</p></div></Link><Link href="/blog" className="group relative block h-80 rounded-lg overflow-hidden shadow-xl"><Image src="/homepage/hero-background.jpg" alt="Read our blog" fill className="object-cover group-hover:scale-105" /><div className="absolute inset-0 bg-black/50" /><div className="relative h-full flex flex-col justify-end p-8 text-white"><h3 className="text-3xl font-bold font-[var(--font-montserrat)] mb-2">Get Inspired</h3><p>Read our blog for ideas and insights.</p></div></Link></div></div></section>
        </main>
    );
}