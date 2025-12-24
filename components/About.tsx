import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate, Variants, TargetAndTransition } from 'framer-motion';

const AnimatedCounter: React.FC<{ from: number; to: number; text: string; label: string; }> = ({ from, to, text, label }) => {
  const nodeRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration: 2.5,
        ease: 'easeOut',
        onUpdate(value) {
          node.textContent = value.toFixed(0).toLocaleString() + text;
        },
      });
      return () => controls.stop();
    }
  }, [from, to, isInView, text]);
  
  return (
    <div>
        <p ref={nodeRef} className="text-4xl font-bold neon-text text-glow">{from}{text}</p>
        <p className="text-sm text-gray-400 mt-1">{label}</p>
    </div>
    );
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

// Fix: Explicitly type variants as TargetAndTransition to resolve ease and orchestration property inference issues
const textHover: TargetAndTransition = {
  scale: 1.02,
  x: 8,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

interface AboutProps {
    navigateTo: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ navigateTo }) => {
  return (
    <div className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                className="text-center mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <motion.h1 
                    variants={itemVariants}
                    whileHover={textHover}
                    className="text-4xl md:text-5xl font-extrabold tracking-tight cursor-default inline-block"
                >
                    About Me
                </motion.h1>
                <motion.div variants={itemVariants} className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[#88FF55] to-transparent"></motion.div>
                <motion.p 
                    variants={itemVariants}
                    whileHover={{ scale: 1.01, color: '#FFFFFF' }}
                    className="mt-6 max-w-3xl mx-auto text-lg text-gray-400 cursor-default transition-all duration-300"
                >
                    A passionate product generalist with 6+ years of experience transforming data into actionable strategies that drive growth and efficiency.
                </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                <motion.div
                    className="lg:col-span-2 space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div variants={itemVariants} className="p-8 bg-gray-500/5 rounded-2xl border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-[#88FF55]/30">
                        <h2 className="text-2xl font-bold neon-text">Professional Background</h2>
                        <h3 className="mt-6 text-lg font-semibold text-gray-200">What I Do</h3>
                        <p className="mt-2 text-gray-400">
                            I drive growth and efficiency by streamlining and building scalable processes and user-centric products using design thinking and first principles. My expertise spans Data Science, Analytics, and Consulting, with a strong focus on product strategy and user experience.
                        </p>
                        <h3 className="mt-6 text-lg font-semibold text-gray-200">Industries & Experience</h3>
                        <div className="mt-3 flex flex-wrap gap-3">
                            {['Consumer Goods', 'Financial Services', 'Technology', 'Analytics'].map(tag => (
                                <span key={tag} className="px-3 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-full">{tag}</span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h2 className="text-2xl font-bold mb-6">My Approach</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: 'Design Thinking', desc: 'User-centric approach to problem-solving and product development.' },
                                { title: 'First Principles', desc: 'Decomposing problems into fundamental truths.' },
                                { title: 'Data-Driven Decisions', desc: 'Leveraging analytics and insights to guide strategy.' },
                                { title: 'Scalable Processes', desc: 'Building systems that evolve with business growth.' }
                            ].map(item => (
                                <div key={item.title} className="p-6 bg-gray-500/5 rounded-xl border border-gray-800 transition-all duration-300 hover:border-[#88FF55]/50 hover:-translate-y-1 group">
                                    <h3 className="font-bold text-gray-100 group-hover:neon-text transition-colors">{item.title}</h3>
                                    <p className="mt-1 text-sm text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="p-8 bg-gray-500/5 rounded-2xl border border-gray-800 transition-all duration-300 hover:border-[#88FF55]/30">
                        <h2 className="text-2xl font-bold mb-6">Quick Stats</h2>
                        <div className="space-y-6">
                            <AnimatedCounter from={0} to={30} text="M+" label="Media Investment Managed" />
                            <AnimatedCounter from={0} to={6} text="+ Years" label="Experience" />
                            <div>
                                <p className="text-4xl font-bold neon-text text-glow">GenAI</p>
                                <p className="text-sm text-gray-400 mt-1">Hackathon Winner</p>
                            </div>
                        </div>
                    </div>
                     <div className="p-8 bg-gray-500/5 rounded-2xl border border-gray-800 transition-all duration-300 hover:border-[#88FF55]/30">
                        <h2 className="text-2xl font-bold mb-4">Current Focus</h2>
                        <p className="text-gray-400">Transitioning to Product Management, combining analytical rigor with user-centric design principles.</p>
                        <button onClick={() => navigateTo('experience')} className="inline-block mt-6 px-5 py-2.5 text-sm font-semibold text-[#0C0F1D] bg-[#88FF55] rounded-lg transition-all duration-300 hover:scale-105 hover:neon-glow">
                          View Experience &rarr;
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About;