"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import FaqAccordion from "@/components/FaqAccordion";
import NextSteps from "@/components/NextSteps";

// -----------------------------------------------------------------------------
// SEO-RICH CONTENT FOR REFURBISHMENT
// -----------------------------------------------------------------------------
const acts = [
  {
    id: "vision",
    title: "Reimagining the Space",
    content:
      "We see the hidden potential within the walls of every home. Is a deeply collaborative journey, we meticulously consider every detail, from the flow of light to the texture of materials, to craft a comprehensive vision that will elevate your daily life and stand the test of time.",
    image: "/homepage/hero-background.jpg",
  },
  {
    id: "transformation",
    title: "Reshaping with Precision",
    content:
      "This is where precision meets artistry. The crucial phase where structural changes are made and new aesthetic elements are introduced, all managed with expert coordination and a deep respect for your home's integrity.",
    image: "/homepage/hero-background.jpg",
  },
  {
    id: "reality",
    title: "Rediscovering Home",
    content:
      "The transformation is complete. Every surface, line, and light now works in harmony to reflect your lifestyle and taste. What was once familiar feels entirely new, a space reborn with warmth, character, and purpose, ready to be lived in and loved again.",
    image: "/refurbishment/refurb1.jpg",
  },
];

const faqItems = [
  {
    q: "What does a full home refurbishment include?",
    a: "A full refurbishment can be completely bespoke, including structural changes, new kitchens and bathrooms, re-wiring, new plumbing, flooring, and complete redecoration. We tailor the project to your exact needs.",
  },
  {
    q: "Can you work with and preserve period features?",
    a: "Absolutely. We specialize in blending modern amenities with the timeless character of period properties. Preserving and restoring features like cornices, fireplaces, and original flooring is a passion of ours.",
  },
  {
    q: "Do we need to move out during the refurbishment?",
    a: "For large-scale, multi-room projects, it is often more efficient and comfortable for clients to move out. For smaller, single-room refurbishments, we work meticulously to minimize disruption to your daily life.",
  },
  {
    q: "How do you manage the project and budget?",
    a: "We provide a detailed, itemized quote and a clear project timeline from the outset. You'll have a dedicated project manager and regular updates to ensure everything stays on track and on budget.",
  },
];

// -----------------------------------------------------------------------------
// REUSABLE HELPER COMPONENT
// -----------------------------------------------------------------------------
const ActSection = ({ title, content, image, children, index }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <section ref={ref} className="sticky top-0 h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, scale: 1.15 }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-20"
        />
      </motion.div>

      {/* Overlay Layers */}
      <div className="absolute inset-0 bg-[#1a1a1a] bg-opacity-70 z-10" />
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        {children}
      </div>

      {/* Text Content */}
      <motion.div
        className="relative z-30 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ opacity: textOpacity }}
      >
        <h3 className="text-sm font-bold text-[var(--color-brand-primary)] uppercase tracking-widest mb-4">
          Act {index + 1}
        </h3>
        <h2 className="text-4xl md:text-6xl font-extrabold font-[var(--font-montserrat)] mb-6">
          {title}
        </h2>
        <p className="text-xl text-gray-200 max-w-2xl">{content}</p>
      </motion.div>
    </section>
  );
};

// -----------------------------------------------------------------------------
// MAIN PAGE COMPONENT
// -----------------------------------------------------------------------------
export default function RefurbishmentPage() {
  return (
    <main className="bg-[#1a1a1a] text-white">
      {/* Hero Section */}
      <div className="relative pt-28 pb-16 md:pt-40 md:pb-20 text-center container mx-auto px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
          <svg
            width="600"
            height="400"
            viewBox="0 0 600 400"
            className="w-full h-full"
          >
            <defs>
              <pattern
                id="aged"
                patternUnits="userSpaceOnUse"
                width="10"
                height="10"
              >
                <path
                  d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
              <linearGradient id="wipe" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0.5" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>

            <rect width="100%" height="100%" fill="url(#aged)" />
            <motion.rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#wipe)"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </svg>
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold font-[var(--font-montserrat)] mb-6">
            Masterful Home Refurbishments
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We breathe new life into every space, blending timeless character
            with modern luxury. This is the art of renewal.
          </p>
        </div>
      </div>

      {/* Act I */}
      <div className="relative">
        <ActSection
          index={0}
          title={acts[0].title}
          content={acts[0].content}
          image={acts[0].image}
        >
          <div className="w-full h-full relative">
            <motion.div
              className="absolute top-[20%] left-[25%] w-32 h-32 rounded-full bg-[var(--color-brand-primary)]/20 blur-3xl"
              animate={{ x: [0, 50, 0], scale: [1, 1.2, 1] }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
            <motion.div
              className="absolute bottom-[30%] right-[20%] w-48 h-48 rounded-full bg-white/10 blur-3xl"
              animate={{ y: [0, -40, 0] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
            <motion.div
              className="absolute bottom-[40%] left-[15%] w-24 h-24 rounded-full bg-[var(--color-brand-primary)]/10 blur-2xl"
              animate={{ scale: [1, 0.8, 1] }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          </div>
        </ActSection>

        {/* Act II */}
        <ActSection
          index={1}
          title={acts[1].title}
          content={acts[1].content}
          image={acts[1].image}
        >
          <motion.div
            className="grid grid-cols-4 gap-1 w-96 h-96"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.05 }}
          >
            {[...Array(16)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-white/20"
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1 },
                }}
              />
            ))}
          </motion.div>
        </ActSection>

        {/* Act III */}
        <section className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={acts[2].image}
              alt="Final Result"
              fill
              className="object-cover"
            />
          </div>

          {/* Transition Curtains */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-[#1a1a1a] z-20"
            initial={{ x: 0 }}
            whileInView={{ x: "-100%" }}
            transition={{
              duration: 1.2,
              ease: [0.87, 0, 0.13, 1],
            }}
          />
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full bg-[#1a1a1a] z-20"
            initial={{ x: 0 }}
            whileInView={{ x: "100%" }}
            transition={{
              duration: 1.2,
              ease: [0.87, 0, 0.13, 1],
            }}
          />

          {/* Overlay and Text */}
          <div className="absolute inset-0 bg-black/50 z-10" />
          <motion.div
            className="relative z-30 h-full flex flex-col items-center justify-center text-center px-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-sm font-bold text-[var(--color-brand-primary)] uppercase tracking-widest mb-4">
              Act 3
            </h3>
            <h2 className="text-4xl md:text-6xl font-extrabold font-[var(--font-montserrat)] mb-6">
              {acts[2].title}
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl">{acts[2].content}</p>
          </motion.div>
        </section>
      </div>

      {/* FAQ + Next Steps */}
      <FaqAccordion items={faqItems} />
      <NextSteps />
    </main>
  );
}