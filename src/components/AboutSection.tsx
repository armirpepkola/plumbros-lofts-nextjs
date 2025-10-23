"use client";

import Link from 'next/link';
import { motion, useMotionValue, Variants } from 'framer-motion';
import { MouseEvent } from 'react';

const containerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.5 } },
}

export default function AboutSection() {
  const mouseX = useMotionValue(Infinity);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
  }

  const headline = "Transform Your Space with London's Leading Loft Specialists";

  return (
    <motion.section 
      className="relative bg-[var(--color-brand-light)] py-20 md:py-24 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(350px circle at ${mouseX}px, rgba(148, 18, 49, 0.1), transparent 80%)`,
        }}
      />
      
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-[var(--color-brand-dark)] mb-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {headline.split(" ").map((word, index) => (
            <motion.span key={index} variants={wordVariants} className="inline-block mr-2">
              {word}
            </motion.span>
          ))}
        </motion.h2>
        
        <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
          With over 20 years of dedicated experience, Plumbros Lofts is a family-run business that prides itself on delivering the highest professional standards. We turn your vision into a reality, creating beautiful, functional spaces that add value and joy to your home.
        </motion.p>
        
        <motion.div 
            className="flex justify-center space-x-4"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
          <Link 
            href="/portfolio" 
            className="bg-transparent hover:bg-[var(--color-brand-primary)] text-[var(--color-brand-primary)] font-semibold hover:text-white py-3 px-8 border-2 border-[var(--color-brand-primary)] rounded-md transition-all duration-300"
          >
            OUR WORK
          </Link>
          <Link 
            href="/contact" 
            className="bg-[var(--color-brand-primary)] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300"
          >
            CONTACT US
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}