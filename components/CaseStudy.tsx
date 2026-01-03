import React from 'react';
import { motion, Variants } from 'framer-motion';

interface CaseStudyProps {
    navigateTo: (page: string) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const CaseStudy: React.FC<CaseStudyProps> = ({ navigateTo }) => {
    const handleCardClick = () => {
        window.open('https://www.canva.com/design/DAG8583E7tw/k1phJCeKwiq_W36tC1Sy_A/edit', '_blank');
    };

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

                {/* Case Study Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
                >
                    {/* Product Teardown Card */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, y: -6 }}
                        onClick={handleCardClick}
                        className="cursor-pointer flex flex-col bg-[#111623] rounded-[14px] border border-[rgba(197,160,89,0.14)] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-[#C5A059]/40 hover:shadow-[0_0_20px_rgba(197,160,89,0.15),0_10px_30px_rgba(0,0,0,0.4)] group overflow-hidden"
                    >
                        <div className="p-6 flex-grow flex flex-col relative">
                            {/* External Link Arrow */}
                            <div className="absolute top-6 right-6 text-gray-500 group-hover:text-[#C5A059] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>

                            <div className="flex justify-between items-start mb-4">
                                <span className="text-[10px] uppercase tracking-[0.15em] font-black px-3 py-1 rounded-sm bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/20">
                                    Product Teardown
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-[#E6EAF2] mt-2 group-hover:text-white transition-colors leading-snug">
                                Product Teardown – Flash.co (Flash AI)
                            </h3>
                            
                            <p className="text-xs font-bold text-[#C5A059] mt-2 uppercase tracking-widest">
                                3 Weeks
                            </p>

                            <p className="text-sm text-[#A8B0C2] mt-5 flex-grow leading-relaxed">
                                End-to-end product teardown of Flash.co’s AI-powered shopping platform, covering user journeys, core problems, prioritization using RICE, and UX-driven solution proposals.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-2">
                                {["PRODUCT THINKING", "UX ANALYSIS", "RICE FRAMEWORK", "USER RESEARCH"].map(tag => (
                                    <span key={tag} className="px-2 py-1 text-[9px] font-black uppercase tracking-wider border border-gray-700 bg-gray-800/40 text-gray-400 rounded-sm group-hover:border-gray-600 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Placeholder for future case studies */}
                    <div className="hidden lg:flex flex-col items-center justify-center border-2 border-dashed border-gray-800/50 rounded-[14px] min-h-[300px] opacity-40">
                         <p className="text-gray-600 font-bold uppercase tracking-[0.3em] text-[10px]">More Coming Soon</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CaseStudy;