import type { Metadata } from 'next';
import ServicePageLayout from '@/components/service-page/ServicePageLayout';

// --- SEO METADATA (Works perfectly) ---
export const metadata: Metadata = {
  title: "Bespoke House Extensions London",
  description: "Create the space you need with a beautiful house extension. Our family-run team designs and builds seamless extensions across London.",
};

// ============================================================
// DATA
// ============================================================
const acts = [
  {
    id: "vision",
    title: "The Architectural Vision",
    content:
      "Our journey begins by exploring the full potential of your property. We create detailed architectural plans and 3D models for your extension, navigating planning permission and permitted development to design a space that is both beautiful and compliant.",
    image: "/homepage/hero-background.jpg",
  },
  {
    id: "transformation",
    title: "The Master Build",
    content:
      "From laying the foundations to ensuring structural integrity, our dedicated project managers oversee every detail. We handle all party wall agreements and building regulations, ensuring a seamless and stress-free construction phase.",
    image: "/homepage/hero-background.jpg",
  },
  {
    id: "reality",
    title: "The Flawless Finish",
    content:
      "The final reveal is a masterpiece of craftsmanship. From fitting high-end kitchens and installing stunning bi-fold doors to the final decorative touches, your new space is delivered with our comprehensive 10-year guarantee.",
    image: "/extension/extension1.jpg",
  },
];

const faqItems = [
  {
    q: "What are the main types of house extensions?",
    a: "Common types include rear extensions, side-return extensions, and wrap-around extensions. The best option depends on your property, garden space, and goals, which we explore in our initial design consultation.",
  },
  {
    q: "Will I need planning permission for an extension?",
    a: "Many single-storey rear extensions fall under 'Permitted Development.' However, larger or more complex projects often require planning permission. We manage this entire process for you, from drawings to submission.",
  },
  {
    q: "How long does a house extension take to build?",
    a: "A typical single-storey extension can take between 10 to 16 weeks for construction. We provide a detailed, phase-by-phase timeline so you are always informed.",
  },
  {
    q: "Can you match the brickwork to my existing house?",
    a: "Absolutely. Sourcing materials that seamlessly blend the new with the old is a cornerstone of our craft. We go to great lengths to ensure your extension feels like it was always part of your home.",
  },
];

export default function HouseExtensionPage() {
  return (
    <ServicePageLayout 
      pageType="houseExtension" // The simple string identifier
      headerTitle="Bespoke House Extensions London"
      headerDescription="We craft seamless, light-filled extensions that expand your living space and connect your home to the outdoors. This is our art."
      acts={acts}
      faqItems={faqItems}
    />
  );
}