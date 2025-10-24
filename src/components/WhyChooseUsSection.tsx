"use client";

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaCalendarAlt, FaRegSmile, FaRegBuilding } from 'react-icons/fa';
import Image from 'next/image';

const tabs = [
    { id: 'commitment', label: 'Our Commitment' },
    { id: 'experience', label: 'Proven Experience' },
    { id: 'affiliations', label: 'Trusted Affiliations' },
];

const affiliations = [
    { name: 'MyBuilder', logoUrl: '/homepage/checkatrade-logo.png' },
    { name: 'Checkatrade', logoUrl: '/homepage/fed_masterbuilders-logo.png' },
    { name: 'Federation of Master Builders', logoUrl: '/homepage/mybuilder-logo.webp' },
    { name: 'Trustmark', logoUrl: '/homepage/trustmark-logo.jpg' },
];

const contentVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } },
};

export default function WhyChooseUsSection() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <section className="bg-white py-20 md:py-28">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-montserrat)] text-[var(--color-brand-dark)]">
                        Quality You Can Trust
                    </h2>
                </div>

                <div className="flex justify-center border-b border-gray-200 mb-12">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative py-4 px-6 font-semibold font-[var(--font-montserrat)] transition-colors duration-200 ${
                                activeTab === tab.id ? 'text-[var(--color-brand-primary)]' : 'text-gray-500 hover:text-[var(--color-brand-dark)]'
                            }`}
                        >
                            {tab.label}
                            {activeTab === tab.id && (
                                <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-brand-primary)]" layoutId="underline" />
                            )}
                        </button>
                    ))}
                </div>

                <div className="min-h-[220px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            variants={contentVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            {activeTab === 'commitment' && (
                                <div className="max-w-3xl mx-auto text-center">
                                    <h3 className="text-2xl font-semibold text-[var(--color-brand-dark)] mb-4">Highest Professional Standards</h3>
                                    <p className="text-lg text-gray-600">We operate at the highest and most professional standards, ensuring every project is a testament to our reputation for quality, customer satisfaction, and personalized service from start to finish.</p>
                                </div>
                            )}

                            {activeTab === 'experience' && (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                    <div className="p-4"><FaCalendarAlt className="h-8 w-8 mx-auto mb-3 text-[var(--color-brand-primary)]" /><p className="text-4xl font-bold text-[var(--color-brand-dark)] mb-1">20+</p><h3 className="text-lg font-medium text-gray-600">Years Of Experience</h3></div>
                                    <div className="p-4"><FaRegSmile className="h-8 w-8 mx-auto mb-3 text-[var(--color-brand-primary)]" /><p className="text-4xl font-bold text-[var(--color-brand-dark)] mb-1">45+</p><h3 className="text-lg font-medium text-gray-600">Happy Clients</h3></div>
                                    <div className="p-4"><FaRegBuilding className="h-8 w-8 mx-auto mb-3 text-[var(--color-brand-primary)]" /><p className="text-4xl font-bold text-[var(--color-brand-dark)] mb-1">50+</p><h3 className="text-lg font-medium text-gray-600">Completed Projects</h3></div>
                                </div>
                            )}

                            {activeTab === 'affiliations' && (
                                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                                    {affiliations.map((aff) => (
                                        <div key={aff.name} className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out">
                                            <Image src={aff.logoUrl} alt={`${aff.name} Logo`} width={150} height={60} className="object-contain" />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}