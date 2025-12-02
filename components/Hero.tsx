
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
    navigateTo: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
       <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[#0C0F1D]"></div>
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#88ff55]/10 to-transparent rounded-full"
          animate={{
            x: ['-50%', '-60%', '-50%'],
            y: ['-50%', '-40%', '-50%'],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 40,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Hi, I’m <span className="neon-text text-glow">Shubhasree Sarkar</span>
          </h1>
          <h2 className="mt-4 text-xl md:text-2xl lg:text-3xl text-gray-300">
            A Decision Scientist & Product Enthusiast
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed">
            I bridge the gap between data and decisions, leveraging advanced analytics and machine learning to build intelligent products that drive business growth and user engagement.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
