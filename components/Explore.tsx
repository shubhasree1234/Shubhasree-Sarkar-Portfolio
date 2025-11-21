import React from 'react';
import { motion, Variants } from 'framer-motion';

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 neon-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 neon-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const ChartBarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 neon-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 neon-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const EXPLORE_CARDS = [
  { icon: <CodeIcon />, title: 'Projects', description: 'Discover my data-driven solutions and product designs.', page: 'projects' },
  { icon: <UserIcon />, title: 'About', description: 'Learn about my journey and professional philosophy.', page: 'about' },
  { icon: <ChartBarIcon />, title: 'Skills', description: 'See my technical and analytical capabilities.', page: 'skills' },
  { icon: <MailIcon />, title: 'Contact', description: 'Let’s discuss how we can work together.', page: 'contact' },
];

interface ExploreProps {
    navigateTo: (page: string) => void;
}

const Explore: React.FC<ExploreProps> = ({ navigateTo }) => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };
    
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <section id="explore" className="py-24 bg-[#0C0F1D]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y:20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Explore My World</h2>
                    <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[#88FF55] to-transparent"></div>
                </motion.div>
                
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {EXPLORE_CARDS.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ 
                                y: -10, 
                                boxShadow: '0 20px 25px -5px rgba(136, 255, 85, 0.1), 0 8px 10px -6px rgba(136, 255, 85, 0.1)' 
                            }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div 
                                onClick={() => navigateTo(card.page)}
                                className="cursor-pointer block h-full bg-[#111526] p-8 rounded-xl border border-gray-800 transition-colors duration-300 hover:border-[#88FF55]/50 group"
                            >
                                <div className="flex flex-col h-full">
                                    <div className="mb-4">{card.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-100">{card.title}</h3>
                                    <p className="mt-2 text-gray-400 flex-grow">{card.description}</p>
                                    <div className="mt-6 font-semibold neon-text flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                                        View More <span>&rarr;</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Explore;