import React from 'react';
import { motion, Variants } from 'framer-motion';

interface HeroProps {
    navigateTo: (page: string) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
       <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[#0C0F1D]"></div>
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#C5A059]/10 to-transparent rounded-full blur-[120px]"
          animate={{
            x: ['-50%', '-55%', '-50%'],
            y: ['-50%', '-45%', '-50%'],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight cursor-default inline-block select-none mb-4"
          >
            <span className="neon-text text-glow transition-all duration-500 hover:brightness-125">SHUBHASREE SARKAR</span>
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="mt-4 text-xl md:text-2xl lg:text-3xl text-[#E0E0E0] font-semibold tracking-[0.3em] uppercase cursor-default transition-colors duration-300"
          >
            Decision Scientist & Product Enthusiast
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="mt-10 max-w-2xl mx-auto text-lg md:text-xl text-[#A8B0C2] leading-relaxed cursor-default transition-colors duration-300"
          >
            I bridge the gap between data and decisions, leveraging advanced analytics and machine learning to build intelligent products that drive business growth and user engagement.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
             <button
              onClick={() => navigateTo('projects')}
              className="w-full sm:w-auto px-10 py-4 text-sm font-bold tracking-[0.15em] uppercase text-[#0C0F1D] bg-[#C5A059] rounded-sm transition-all duration-300 hover:scale-105 hover:neon-glow active:scale-95"
            >
              Explore My Work
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="w-full sm:w-auto px-10 py-4 text-sm font-bold tracking-[0.15em] uppercase text-[#C5A059] border-2 border-[#C5A059]/40 rounded-sm transition-all duration-300 hover:scale-105 hover:border-[#C5A059] hover:text-[#C5A059] active:scale-95"
            >
              Get In Touch
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center p-1"
        >
          <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;