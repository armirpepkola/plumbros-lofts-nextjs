import type { Metadata } from 'next';
import ServicePageLayout from '@/components/service-page/ServicePageLayout';

// --- SEO METADATA ---
export const metadata: Metadata = {
  title: "Expert Loft Conversions London",
  description: "From architectural design to the final build, we create breathtaking loft conversions that transform your home. This is our story.",
};

// --- UNIQUE CONTENT FOR THIS PAGE ---
const acts = [
  {
    id: "vision",
    title: "Raising The Vision",
    content: "We see the hidden potential within the walls of every home. Our design process is a deeply collaborative journey, where we honor your property's unique character while envisioning a new layer of modern functionality and timeless style. ",
    image: "/homepage/hero-background.jpg",
  },
  {
    id: "transformation",
    title: "The Transformation",
    content: "With meticulous attention to detail, our craftsmen use the finest materials to restore, rebuild, and refine your space, whether it's a single room or a full home renovation. Everything managed with expert coordination and a deep respect for your home's integrity.",
    image: "/homepage/hero-background.jpg",
  },
  {
    id: "reality",
    title: "Reality, Refined",
    content: "A home reborn. It is a stunning synthesis of the timeless and the new, where every detail is perfected to create a space that feels both familiar and wonderfully transformed. This is your vision, realized and backed by our comprehensive 10-year guarantee.",
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

export default function LoftConversionPage() {
  return (
    <ServicePageLayout 
      pageType="loftConversion" // The simple string identifier
      headerTitle="Expert Loft Conversions London"
      headerDescription="From architectural design to the final build, we create breathtaking loft conversions that transform your home. This is our story."
      acts={acts}
      faqItems={faqItems}
    />
  );
}