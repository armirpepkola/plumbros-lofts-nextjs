"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const categories =['All', 'Loft Conversion', 'House Extension', 'Refurbishment'];

export default function PortfolioGrid({ projects }: { projects: any[] }) {
    const[activeCategory, setActiveCategory] = useState('All');
    
    const filteredProjects = activeCategory === 'All' 
        ? projects 
        : projects.filter(p => p.frontmatter.category === activeCategory);

    return (
        <>
            <div className="flex justify-center border-b border-gray-200 mb-12">
                {categories.map(category => (
                    <button key={category} onClick={() => setActiveCategory(category)} className="relative py-3 px-4 md:px-6 font-semibold transition-colors duration-200">
                        <span className={activeCategory === category ? 'text-brand-primary' : 'text-gray-500 hover:text-brand-dark'}>{category}</span>
                        {activeCategory === category && <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary" layoutId="filter-underline" />}
                    </button>
                ))}
            </div>

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
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                                    
                                    {/* ============================================================ */}
                                    {/* NEW: PULSING LIVE BADGE */}
                                    {/* ============================================================ */}
                                    {project.frontmatter.status === 'live' && (
                                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full flex items-center shadow-lg z-10">
                                            {/* The pulsing dot */}
                                            <span className="relative flex h-2.5 w-2.5 mr-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                                            </span>
                                            Live Project
                                        </div>
                                    )}

                                    <div className="absolute bottom-0 left-0 p-4 text-white">
                                        <h3 className="text-lg font-bold">{project.frontmatter.title}</h3>
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