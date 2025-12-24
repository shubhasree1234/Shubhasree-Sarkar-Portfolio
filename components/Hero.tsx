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
        {/* Animated Background Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#88ff55]/10 to-transparent rounded-full blur-[100px]"
          animate={{
            x: ['-50%', '-55%', '-50%'],
            y: ['-50%', '-45%', '-50%'],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
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
          {/* Main Title */}
          <motion.h1 
            variants={itemVariants}
            whileHover={{ y: -5, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight cursor-default inline-block select-none"
          >
            Hi, I’m <span className="neon-text text-glow transition-all duration-500 hover:brightness-125">Shubhasree Sarkar</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.h2 
            variants={itemVariants}
            whileHover={{ scale: 1.02, color: '#88FF55', transition: { duration: 0.3 } }}
            className="mt-6 text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium tracking-wide cursor-default transition-colors duration-300"
          >
            Decision Scientist & Product Enthusiast
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            whileHover={{ color: '#FFFFFF', transition: { duration: 0.4 } }}
            className="mt-8 max-w-3xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed cursor-default transition-colors duration-300"
          >
            I bridge the gap between data and decisions, leveraging advanced analytics and machine learning to build intelligent products that drive business growth and user engagement.
          </motion.p>

          {/* CTA Buttons - Added to Hero for better UX */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
             <button
              onClick={() => navigateTo('projects')}
              className="w-full sm:w-auto px-8 py-3.5 text-lg font-semibold text-[#0C0F1D] bg-[#88FF55] rounded-xl transition-all duration-300 hover:scale-105 hover:neon-glow active:scale-95"
            >
              Explore My Work
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="w-full sm:w-auto px-8 py-3.5 text-lg font-semibold text-gray-200 border-2 border-gray-700 rounded-xl transition-all duration-300 hover:scale-105 hover:border-[#88FF55] hover:text-white active:scale-95"
            >
              Get In Touch
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
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
          <div className="w-1.5 h-1.5 bg-[#88FF55] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;