"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import FaqAccordion from "@/components/FaqAccordion";
import NextSteps from "@/components/NextSteps";

// ============================================================
// SEO-RICH CONTENT FOR LOFT CONVERSIONS
// ============================================================
const acts = [
  {
    id: "vision",
    title: "Raising The Vision",
    content:
      "We see the hidden potential within the walls of every home. Our design process is a deeply collaborative journey, where we honor your property's unique character while envisioning a new layer of modern functionality and timeless style. ",
    image: "/homepage/hero-background.jpg",
  },
  {
    id: "transformation",
    title: "The Transformation",
    content:
      "With meticulous attention to detail, our craftsmen use the finest materials to restore, rebuild, and refine your space, whether it's a single room or a full home renovation. Everything managed with expert coordination and a deep respect for your home's integrity.",
    image: "/homepage/hero-background.jpg",
  },
  {
    id: "reality",
    title: "Reality, Refined",
    content:
      "A home reborn. It is a stunning synthesis of the timeless and the new, where every detail is perfected to create a space that feels both familiar and wonderfully transformed. This is your vision, realized and backed by our comprehensive 10-year guarantee.",
    image: "/conversion/conversion1.jpeg",
  },
];

const faqItems = [
  {
    q: "What are the main types of loft conversions?",
    a: "The most common types are Dormer, Hip-to-Gable, Mansard, and Velux (rooflight) conversions. The best choice depends on your roof structure, property type, and budget. We provide a full consultation to determine the optimal solution for your home.",
  },
  {
    q: "Do I need planning permission for a loft conversion?",
    a: "Many loft conversions fall under 'Permitted Development' rights, meaning they don't require full planning permission. However, this is subject to specific criteria, especially in conservation areas. We handle all architectural drawings and submissions to the local authority to ensure your project is fully compliant.",
  },
  {
    q: "How long does the average loft conversion take?",
    a: "A typical loft conversion project takes between 6 to 10 weeks from the start of construction. We provide a detailed, phase-by-phase project timeline upfront so you always know what to expect and when.",
  },
  {
    q: "How much value does a loft conversion add?",
    a: "A well-executed loft conversion is one of the best investments you can make in your home, often adding up to 20-25% to your property's value by increasing its square footage and functionality.",
  },
];

// ============================================================
// REUSABLE HELPER COMPONENT
// ============================================================
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
      <motion.div className="absolute inset-0 z-0" style={{ y, scale: 1.15 }}>
        <Image src={image} alt={title} fill className="object-cover opacity-20" />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1a1a1a] bg-opacity-70 z-10" />

      {/* Children Layer */}
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

// ============================================================
// MAIN PAGE COMPONENT
// ============================================================
export default function LoftConversionPage() {
  return (
    <main className="bg-[#1a1a1a] text-white">
      {/* Hero Section */}
      <div className="relative pt-28 pb-16 md:pt-40 md:pb-20 text-center container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold font-[var(--font-montserrat)] mb-6">
          Expert Loft Conversions London
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          From architectural design to the final build, we create breathtaking
          loft conversions that transform your home. This is our story.
        </p>
      </div>

      {/* Acts Timeline */}
      <div className="relative">
        {/* --- ACT I --- */}
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

        {/* --- ACT II --- */}
        <ActSection
          index={1}
          title={acts[1].title}
          content={acts[1].content}
          image={acts[1].image}
        >
          <motion.div
            className="w-64 h-64 border-4 border-white/30"
            whileInView={{ rotateY: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformStyle: "preserve-3d" }}
          />
        </ActSection>

        {/* --- ACT III --- */}
        <section className="sticky top-0 h-screen overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src={acts[2].image}
              alt="Final Result"
              fill
              className="object-cover"
            />
          </div>

          {/* Sliding Panels */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-[#1a1a1a] z-20"
            initial={{ x: 0 }}
            whileInView={{ x: "-100%" }}
            transition={{ duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
          />
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full bg-[#1a1a1a] z-20"
            initial={{ x: 0 }}
            whileInView={{ x: "100%" }}
            transition={{ duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />

          {/* Text Content */}
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

      {/* FAQ + NEXT STEPS */}
      <FaqAccordion items={faqItems} />
      <NextSteps />
    </main>
  );
}