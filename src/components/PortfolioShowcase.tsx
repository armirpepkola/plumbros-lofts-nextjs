"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const projects = [
  { id: 1, title: 'Loft Conversion', imageUrl: '/homepage/showcase-conversion.jpg', url: '/loft-conversion' },
  { id: 2, title: 'House Extension', imageUrl: '/homepage/showcase-extension.jpg', url: '/house-extension' },
  { id: 3, title: 'Refurbishment', imageUrl: '/homepage/showcase-refurb.jpg', url: '/refurbishment' },
];

const contentVariants: Variants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 } },
};

export default function PortfolioShowcase() {
  const [expandedId, setExpandedId] = useState<number | null>(projects[0].id);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-montserrat)] text-[var(--color-brand-dark)] mb-4">
            Conversion. Extension. Refurbishment.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            If it adds value and comfort to your home, we do it! Hover or tap a project to see the transformative results of our dedication to quality and design.
          </p>
        </div>
        
        <div 
          className="flex h-[500px] w-full gap-4"
          onMouseLeave={() => setExpandedId(projects[0].id)}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
              layout
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              animate={{ flexGrow: project.id === expandedId ? 4 : 1 }}
              onHoverStart={() => setExpandedId(project.id)}
              // --- THIS IS THE KEY FOR MOBILE ---
              // Add the 'onTap' handler for touch devices
              onTap={() => setExpandedId(project.id)}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 ease-in-out"
                style={{ transform: project.id === expandedId ? 'scale(1.05)' : 'scale(1.15)' }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500" style={{ opacity: project.id === expandedId ? 0.5 : 0.7 }}/>
              
              <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                <motion.h3 
                  className="text-2xl font-bold font-[var(--font-montserrat)] origin-bottom-left"
                  animate={{ 
                    writingMode: project.id === expandedId ? 'horizontal-tb' : 'vertical-rl',
                    rotate: project.id === expandedId ? 0 : 180,
                  }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  {project.title}
                </motion.h3>

                {project.id === expandedId && (
                  <motion.div
                    variants={contentVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <Link 
                      href={project.url}
                      className="inline-block mt-2 text-white font-semibold hover:underline"
                    >
                      Learn More &rarr;
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-right">
            <Link 
                href="/portfolio"
                className="inline-block text-[var(--color-brand-primary)] font-bold hover:underline transition-colors duration-200"
            >
                View Full Portfolio &rarr;
            </Link>
        </div>
      </div>
    </section>
  );
}