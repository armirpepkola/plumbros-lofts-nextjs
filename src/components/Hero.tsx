"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, Variants, LazyMotion, domAnimation, m } from 'framer-motion';
import { MouseEvent } from 'react';

const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.4 } },
};

const textItemVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const buttonTextVariants: Variants = {
    rest: { color: "#fff" },
    hover: { color: "var(--color-brand-primary)" }
};

const bgSlideVariants: Variants = {
    rest: { x: "-101%" },
    hover: { x: 0 }
};

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const wireframeX = useTransform(x, (latest) => latest * 0.03);
  const wireframeY = useTransform(y, (latest) => latest * 0.03);
  const scale = useTransform(y, [-300, 300], [1.05, 1]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.section 
        className="relative w-full overflow-hidden bg-[#111111]"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
      >
        <motion.div className="absolute inset-0 z-0 opacity-5 text-white" style={{ x: wireframeX, y: wireframeY }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 800 L800 100 L1500 800" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M800 100 L800 600" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" fill="none" />
            <path d="M400 500 L800 100" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M1200 500 L800 100" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </motion.div>
        
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
            
            <div className="flex flex-col justify-center text-white p-8 md:p-12 text-center lg:text-left z-10">
              <motion.div variants={textContainerVariants} initial="hidden" animate="visible">
                <motion.h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight" variants={textItemVariants}>
                  Design. Build. Transform.
                </motion.h1>
                <motion.p className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 text-gray-300" variants={textItemVariants}>
                  We are a London-based design and build family specializing in bespoke loft conversions and extensions that redefine your home.
                </motion.p>
                
                <motion.div variants={textItemVariants}>
                  <motion.div
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="relative inline-block"
                  >
                    <Link 
                      href="/contact" 
                      className="relative inline-flex items-center overflow-hidden bg-brand-primary text-white font-bold uppercase py-4 px-10 rounded-md shadow-lg transition-shadow duration-300"
                    >
                      <motion.span
                          variants={buttonTextVariants}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="relative z-10"
                      >
                          Start Your Project
                      </motion.span>
                      <motion.div 
                          className="absolute inset-0 z-0 bg-white"
                          variants={bgSlideVariants}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            <div className="relative hidden lg:block">
              <motion.div className="absolute inset-0 bg-[#111111] z-20" initial={{ x: 0 }} animate={{ x: '100%' }} transition={{ duration: 1.2, ease: [0.87, 0, 0.13, 1], delay: 0.2 }}/>
              <motion.div className="absolute inset-0 z-10" style={{ scale: scale }}>
                <Image
                  src="/homepage/hero-background.jpg"
                  alt="Plum & Bros Lofts Hero Image"
                  fill
                  priority={true} // FORCES preloading. Critical for LCP.
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </m.section>
    </LazyMotion>
  );
}