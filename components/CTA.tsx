import React from 'react';
import { motion } from 'framer-motion';

interface CTAProps {
    navigateTo: (page: string) => void;
}

const CTA: React.FC<CTAProps> = ({ navigateTo }) => {
  return (
    <section id="contact" className="relative py-24 bg-[#0C0F1D] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at center, #88FF55 0%, transparent 60%)' }}></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Ready to Build Something Amazing?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            I’m currently open to new opportunities and collaborations. Let's connect and explore how my skills in data science and product strategy can bring your next project to life.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigateTo('contact')}
              className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-[#0C0F1D] bg-[#88FF55] rounded-lg transition-transform duration-300 hover:scale-105 hover:neon-glow"
            >
              Get In Touch
            </button>
            <button
              onClick={() => navigateTo('projects')}
              className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-gray-200 border-2 border-gray-600 rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#88FF55] hover:neon-text"
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