"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, ReactNode } from "react";
import FaqAccordion from "@/components/FaqAccordion";
import NextSteps from "@/components/NextSteps";

// ============================================================
// ANIMATION DEFINITIONS
// ============================================================
// All unique animation JSX now lives safely inside this Client Component.
// ============================================================

// -----------------------------
// Universal Animation
// -----------------------------
const Act1Animation = (
  <div className="w-full h-full relative">
    <motion.div
      className="absolute top-[20%] left-[25%] w-32 h-32 rounded-full bg-[var(--color-brand-primary)]/20 blur-3xl"
      animate={{ x: [0, 50, 0], scale: [1, 1.2, 1] }}
      transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
    />
    <motion.div
      className="absolute bottom-[30%] right-[20%] w-48 h-48 rounded-full bg-white/10 blur-3xl"
      animate={{ y: [0, -40, 0] }}
      transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
    />
    <motion.div
      className="absolute bottom-[40%] left-[15%] w-24 h-24 rounded-full bg-[var(--color-brand-primary)]/10 blur-2xl"
      animate={{ scale: [1, 0.8, 1] }}
      transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
    />
  </div>
);

// -----------------------------
// Loft Conversion Animations
// -----------------------------
const LoftConversionHeaderAnimation = (
  <svg
    width="600"
    height="400"
    viewBox="0 0 600 400"
    className="w-full h-full"
  >
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
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 2,
      }}
    />

    <motion.path
      d="M50 350 L50 150 L300 50 L550 150 L550 350 Z M50 150 L550 150"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: 1,
      }}
    />
  </svg>
);

const LoftConversionAct2Animation = (
  <motion.div
    className="w-64 h-64 border-4 border-white/30"
    whileInView={{ rotateY: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    style={{ transformStyle: "preserve-3d" }}
  />
);

// -----------------------------
// House Extension Animations
// -----------------------------
const HouseExtensionHeaderAnimation = (
  <svg
    width="600"
    height="400"
    viewBox="0 0 600 400"
    className="w-full h-full"
  >
    <defs>
      <linearGradient id="beam" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="white" stopOpacity="0" />
        <stop offset="50%" stopColor="white" stopOpacity="0.5" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>

    <motion.path
      d="M100 100 L300 100 L300 300 L100 300 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      }}
    />

    <motion.path
      d="M300 150 L500 150 L500 250 L300 250"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 2,
        delay: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      }}
    />

    <motion.rect
      x="300"
      y="150"
      width="200"
      height="100"
      fill="url(#beam)"
      initial={{ x: 300, width: 0 }}
      animate={{ x: [300, 500, 300], width: [0, 200, 0] }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 2,
      }}
    />
  </svg>
);

const HouseExtensionAct2Animation = (
  <motion.div
    className="w-96 h-96 relative"
    initial={{ rotateY: -20 }}
    whileInView={{ rotateY: 20 }}
    transition={{
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    }}
    style={{ transformStyle: "preserve-3d", perspective: "2000px" }}
  >
    <div
      className="absolute inset-10 border-2 border-white/50"
      style={{ transform: "translateZ(-50px)" }}
    />
    <motion.div
      className="absolute inset-10 border-2 border-[var(--color-brand-primary)]"
      style={{ transform: "translateZ(120px)" }}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
  </motion.div>
);

// -----------------------------
// Refurbishment Animations
// -----------------------------
const RefurbishmentHeaderAnimation = (
  <svg
    width="600"
    height="400"
    viewBox="0 0 600 400"
    className="w-full h-full"
  >
    <defs>
      <pattern id="aged" patternUnits="userSpaceOnUse" width="10" height="10">
        <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="white" strokeWidth="0.5" />
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
);

const RefurbishmentAct2Animation = (
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
);

// ============================================================
// PROP TYPES & HELPER COMPONENTS
// ============================================================
interface ServicePageLayoutProps {
  pageType: "loftConversion" | "houseExtension" | "refurbishment";
  headerTitle: string;
  headerDescription: string;
  acts: any[];
  faqItems: any[];
}

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

      <div className="absolute inset-0 bg-[#1a1a1a] bg-opacity-70 z-10" />
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        {children}
      </div>

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
// MAIN LAYOUT COMPONENT
// ============================================================
export default function ServicePageLayout({
  pageType,
  headerTitle,
  headerDescription,
  acts,
  faqItems,
}: ServicePageLayoutProps) {
  let headerAnimation;
  let act2Animation;

  // --- Animation Selector Logic ---
  switch (pageType) {
    case "houseExtension":
      headerAnimation = HouseExtensionHeaderAnimation;
      act2Animation = HouseExtensionAct2Animation;
      break;

    case "refurbishment":
      headerAnimation = RefurbishmentHeaderAnimation;
      act2Animation = RefurbishmentAct2Animation;
      break;

    case "loftConversion":
    default:
      headerAnimation = LoftConversionHeaderAnimation;
      act2Animation = LoftConversionAct2Animation;
      break;
  }

  return (
    <main className="bg-[#1a1a1a] text-white">
      {/* Header Section */}
      <div className="relative pt-28 pb-16 md:pt-40 md:pb-20 text-center container mx-auto px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
          {headerAnimation}
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold font-[var(--font-montserrat)] mb-6">
            {headerTitle}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {headerDescription}
          </p>
        </div>
      </div>

      {/* Acts Sections */}
      <div className="relative">
        <ActSection
          index={0}
          title={acts[0].title}
          content={acts[0].content}
          image={acts[0].image}
        >
          {Act1Animation}
        </ActSection>

        <ActSection
          index={1}
          title={acts[1].title}
          content={acts[1].content}
          image={acts[1].image}
        >
          {act2Animation}
        </ActSection>

        {/* Final Act */}
        <section className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={acts[2].image}
              alt="Final Result"
              fill
              className="object-cover"
            />
          </div>

          {/* Split reveal animation */}
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
            <p className="text-xl text-gray-200 max-w-2xl">
              {acts[2].content}
            </p>
          </motion.div>
        </section>
      </div>

      {/* FAQ & Next Steps */}
      <FaqAccordion items={faqItems} />
      <NextSteps />
    </main>
  );
}