"use client"; // This component needs state, so it must be a Client Component

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';

// Define the shape of a single FAQ item for TypeScript
interface FaqItemProps {
    q: string;
    a: string;
}

// The AccordionItem sub-component now lives inside this file
const AccordionItem = ({ item, isOpen, onClick }: { item: FaqItemProps, isOpen: boolean, onClick: () => void }) => (
    <div className="border-b border-white/10">
        <button 
            onClick={onClick} 
            className="w-full flex justify-between items-center text-left py-6"
        >
            <span className="text-xl font-medium font-[var(--font-montserrat)]">{item.q}</span>
            <motion.div animate={{ rotate: isOpen ? 45 : 0 }}>
                <FaPlus size={20} />
            </motion.div>
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }}
                >
                    <p className="pb-6 text-gray-300">{item.a}</p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

// The main component, which now accepts 'items' as a prop
export default function FaqAccordion({ items }: { items: FaqItemProps[] }) {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

    return (
        <section className="py-20 md:py-28 bg-[#1a1a1a]">
            <div className="container mx-auto max-w-4xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-montserrat)]">
                        Your Questions, Answered
                    </h2>
                </div>
                <div>
                    {items.map((item, i) => (
                        <AccordionItem
                            key={i}
                            item={item}
                            isOpen={expandedFaq === i}
                            onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}