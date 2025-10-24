"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Loft Conversion', 'House Extension', 'Refurbishment'];

// This component now receives the projects as a prop
export default function PortfolioGrid({ projects }: { projects: any[] }) {
    const [activeCategory, setActiveCategory] = useState('All');
    
    const filteredProjects = activeCategory === 'All' 
        ? projects 
        : projects.filter(p => p.frontmatter.category === activeCategory);

    return (
        <>
            {/* --- FILTER CONTROLS --- */}
            <div className="flex justify-center border-b border-gray-200 mb-12">
                {categories.map(category => (
                    <button key={category} onClick={() => setActiveCategory(category)} className="relative py-3 px-4 md:px-6 font-semibold font-[var(--font-montserrat)] transition-colors duration-200">
                        <span className={activeCategory === category ? 'text-[var(--color-brand-primary)]' : 'text-gray-500 hover:text-[var(--color-brand-dark)]'}>{category}</span>
                        {activeCategory === category && <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-brand-primary)]" layoutId="filter-underline" />}
                    </button>
                ))}
            </div>

            {/* --- ANIMATED GRID --- */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <AnimatePresence>
                    {filteredProjects.map(project => (
                        <motion.div
                            key={project.slug}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            <Link href={`/portfolio/${project.slug}`} className="group block">
                                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                                    <Image src={project.frontmatter.featured_image} alt={project.frontmatter.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-4 text-white">
                                        <h3 className="text-lg font-bold font-[var(--font-montserrat)]">{project.frontmatter.title}</h3>
                                        <p className="text-sm opacity-80">{project.frontmatter.category}</p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </>
    );
}