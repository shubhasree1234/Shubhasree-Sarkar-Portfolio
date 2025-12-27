import React from 'react';
import { motion } from 'framer-motion';

interface CaseStudyProps {
    navigateTo: (page: string) => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ navigateTo }) => {
    return (
        <div className="py-24 sm:py-32 bg-[#0C0F1D] min-h-[70vh]">
            <div className="container max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.h1 
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-[#C5A059] text-glow relative inline-block cursor-default uppercase"
                    >
                        Case Studies
                        <motion.span
                            className="absolute bottom-[-8px] left-0 w-full h-1 bg-[#C5A059]"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut' }}
                        />
                    </motion.h1>
                    <motion.p 
                        whileHover={{ color: '#FFFFFF', scale: 1.01 }}
                        className="mt-8 max-w-3xl mx-auto text-lg text-[#A8B0C2] cursor-default transition-all duration-300"
                    >
                        Detailed deep dives into my analytical processes, methodologies, and outcomes.
                    </motion.p>
                </motion.div>

                {/* Content Placeholder */}
                <motion.div 
                    className="mt-20 flex flex-col items-center justify-center min-h-[300px] border-2 border-dashed border-gray-800 rounded-3xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <p className="text-gray-600 font-bold uppercase tracking-[0.3em] text-sm">Content Coming Soon</p>
                </motion.div>
            </div>
        </div>
    );
};

export default CaseStudy;