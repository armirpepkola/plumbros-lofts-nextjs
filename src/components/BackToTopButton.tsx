"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // This effect adds a scroll listener to the window
    useEffect(() => {
        const toggleVisibility = () => {
            // If the user scrolls down more than 300px, show the button
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // Clean up the listener when the component unmounts
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // This function scrolls the page to the top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 w-14 h-14 bg-[var(--color-brand-primary)] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 z-50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ ease: 'easeOut', duration: 0.3 }}
                    aria-label="Go to top"
                >
                    <FaArrowUp size={20} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}