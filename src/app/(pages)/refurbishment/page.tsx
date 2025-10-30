import type { Metadata } from 'next';
import ServicePageLayout from '@/components/service-page/ServicePageLayout';

// --- SEO METADATA ---
export const metadata: Metadata = {
  title: "Masterful Home Refurbishments London",
  description: "Breathe new life into your home with a full refurbishment. We blend timeless character with modern luxury. 10-year guarantee.",
};

// --- UNIQUE CONTENT FOR THIS PAGE ---
const acts = [
    { 
      id: 'vision', 
      title: "Reimagining the Space", 
      content: "We see the hidden potential within the walls of every home. Is a deeply collaborative journey, we meticulously consider every detail, from the flow of light to the texture of materials, to craft a comprehensive vision that will elevate your daily life and stand the test of time.", 
      image: "/homepage/hero-background.jpg" 
    },
    { 
      id: 'transformation', 
      title: "Reshaping with Precision", 
      content: "This is where precision meets artistry. The crucial phase where structural changes are made and new aesthetic elements are introduced, all managed with expert coordination and a deep respect for your home's integrity.", 
      image: "/homepage/hero-background.jpg" 
    },
    { 
      id: 'reality', 
      title: "Rediscovering Home", 
      content: "The transformation is complete. Every surface, line, and light now works in harmony to reflect your lifestyle and taste. What was once familiar feels entirely new, a space reborn with warmth, character, and purpose, ready to be lived in and loved again.", 
      image: "/refurbishment/refurb1.jpg" 
    },
];

const faqItems = [ 
  { 
    q: "What does a full home refurbishment include?", 
    a: "A full refurbishment can be completely bespoke, including structural changes, new kitchens and bathrooms, re-wiring, new plumbing, flooring, and complete redecoration. We tailor the project to your exact needs." 
  }, 
  { 
    q: "Can you work with and preserve period features?", 
    a: "Absolutely. We specialize in blending modern amenities with the timeless character of period properties. Preserving and restoring features like cornices, fireplaces, and original flooring is a passion of ours." 
  }, 
  { 
    q: "Do we need to move out during the refurbishment?", 
    a: "For large-scale, multi-room projects, it is often more efficient and comfortable for clients to move out. For smaller, phased projects like a single kitchen or bathroom renovation, we work meticulously to section off the work area and minimize disruption to your daily life." }, 
  { 
    q: "How do you manage the project and budget?", 
    a: "We provide a detailed, itemized quote and a clear project timeline from the outset. You'll have a dedicated project manager and regular updates to ensure everything stays on track and on budget." 
  }, 
];

export default function RefurbishmentPage() {
  return (
    <ServicePageLayout 
      pageType="refurbishment" // The simple string identifier
      headerTitle="Masterful Home Refurbishments"
      headerDescription="We breathe new life into every space, blending timeless character with modern luxury. This is the art of renewal."
      acts={acts}
      faqItems={faqItems}
    />
  );
}