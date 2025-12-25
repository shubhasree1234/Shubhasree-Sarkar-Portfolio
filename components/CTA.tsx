import React from 'react';
import { motion } from 'framer-motion';

interface CTAProps {
    navigateTo: (page: string) => void;
}

const CTA: React.FC<CTAProps> = ({ navigateTo }) => {
  return (
    <section id="contact" className="relative py-24 bg-[#0C0F1D] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #C5A059 0%, transparent 70%)' }}></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2 
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight cursor-default inline-block uppercase tracking-widest"
          >
            Ready to Build Something Amazing?
          </motion.h2>
          <motion.p 
            whileHover={{ color: '#E0E0E0', transition: { duration: 0.3 } }}
            className="mt-4 max-w-2xl mx-auto text-[#A8B0C2] cursor-default leading-relaxed"
          >
            I’m currently open to new opportunities and collaborations. Let's connect and explore how my skills in data science and product strategy can bring your next project to life.
          </motion.p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => navigateTo('contact')}
              className="w-full sm:w-auto px-10 py-4 text-sm font-bold tracking-widest uppercase text-[#0C0F1D] bg-[#C5A059] rounded-sm transition-all duration-300 hover:scale-105 hover:neon-glow"
            >
              Get In Touch
            </button>
            <button
              onClick={() => navigateTo('projects')}
              className="w-full sm:w-auto px-10 py-4 text-sm font-bold tracking-widest uppercase text-[#C5A059] border-2 border-[#C5A059]/40 rounded-sm transition-all duration-300 hover:scale-105 hover:border-[#C5A059] hover:neon-text"
            >
              View Projects
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;