import React, { useEffect } from 'react';
import { motion, Variants, useMotionValue, useTransform } from 'framer-motion';

interface HeroProps {
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 100);
      mouseY.set((clientY / innerHeight - 0.5) * 100);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const backgroundX = useTransform(mouseX, (v) => -v * 0.5);
  const backgroundY = useTransform(mouseY, (v) => -v * 0.5);

  return (
    <section id="home" className="relative min-h-screen flex items-start justify-center pt-24 md:pt-32 pb-20 overflow-hidden bg-[#0C0F1D]">
       {/* Background Elements */}
       <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#C5A059]/10 to-transparent rounded-full blur-[100px]"
          style={{ x: backgroundX, y: backgroundY }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-[1100px] relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start text-left order-2 lg:order-1">
            <motion.div 
              variants={itemVariants}
              className="mb-6"
            >
              <p className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-5xl md:text-[72px]">
                Shubhasree Sarkar
              </p>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-xl md:text-2xl font-bold leading-[1.3] text-white tracking-tight mb-6"
            >
              Decision Scientist & <span className="text-[#C5A059]">Product Enthusiast</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-[#A8B0C2] font-medium leading-relaxed mb-6"
            >
              I bridge the gap between complex data systems and user-centric product strategies.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-base text-[#A8B0C2]/80 leading-relaxed mb-10 max-w-lg"
            >
              Leveraging advanced analytics and machine learning to build intelligent products that drive business growth and user engagement across industries.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-5"
            >
              <button
                onClick={() => navigateTo('projects')}
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold tracking-[0.1em] uppercase text-[#0C0F1D] bg-[#C5A059] rounded-sm transition-all duration-300 hover:scale-105 hover:neon-glow active:scale-95"
              >
                Explore Work
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold tracking-[0.1em] uppercase text-[#C5A059] border border-[#C5A059]/40 rounded-sm transition-all duration-300 hover:scale-105 hover:border-[#C5A059] hover:text-[#C5A059] active:scale-95"
              >
                Get In Touch
              </button>
            </motion.div>
          </div>

          {/* Right Column: Visual / Highlight Card */}
          <motion.div 
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C5A059]/20 to-[#C5A059]/5 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-[#111623] border border-gray-800 rounded-2xl p-8 shadow-2xl w-full max-w-[400px] overflow-hidden">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-gray-800/50 px-2.5 py-1 rounded">Analytics Focus</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">Impact Driven</h3>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                  Transforming raw datasets into actionable product insights that scale business performance.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#0C0F1D] rounded-xl border border-gray-800/50">
                    <p className="text-2xl font-bold text-[#C5A059]">30M+</p>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Media Managed</p>
                  </div>
                  <div className="p-4 bg-[#0C0F1D] rounded-xl border border-gray-800/50">
                    <p className="text-2xl font-bold text-[#C5A059]">6+ Yrs</p>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Experience</p>
                  </div>
                </div>

                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                   <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" stroke="#C5A059" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="50" cy="50" r="25" stroke="#C5A059" strokeWidth="1" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 border border-gray-700 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-1 bg-[#C5A059] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;