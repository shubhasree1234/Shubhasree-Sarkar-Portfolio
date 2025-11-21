import React, { useEffect, useRef } from 'react';
// Fix: Import Variants type from framer-motion
import { motion, useInView, animate, Variants } from 'framer-motion';

// Icons for the "Outside Work" section
const BrandIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 neon-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const MarketIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 neon-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const MusicIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 neon-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 6l12-3" /></svg>;
const AdventureIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 neon-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;


// Re-usable Animated Counter for stats
const AnimatedCounter: React.FC<{ from: number; to: number; text: string; label: string; }> = ({ from, to, text, label }) => {
  const nodeRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

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

// Fix: Add explicit Variants type to the variant objects
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

// Fix: Add explicit Variants type to the variant objects
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

interface AboutProps {
    navigateTo: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ navigateTo }) => {
  return (
    <div className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* 1. Page Header */}
            <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">About Me</h1>
                <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[#88FF55] to-transparent"></div>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
                    A passionate product generalist with 6+ years of experience transforming data into actionable strategies that drive growth and efficiency.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                {/* 2. Left Column: Professional Background */}
                <motion.div
                    className="lg:col-span-2 space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div variants={itemVariants} className="p-8 bg-gray-500/5 rounded-2xl border border-gray-800 backdrop-blur-sm">
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
                                <div key={item.title} className="p-6 bg-gray-500/5 rounded-xl border border-gray-800 transition-all duration-300 hover:border-[#88FF55]/50 hover:-translate-y-1">
                                    <h3 className="font-bold text-gray-100">{item.title}</h3>
                                    <p className="mt-1 text-sm text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* 3. Right Column: Quick Stats & Focus */}
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="p-8 bg-gray-500/5 rounded-2xl border border-gray-800">
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
                     <div className="p-8 bg-gray-500/5 rounded-2xl border border-gray-800">
                        <h2 className="text-2xl font-bold mb-4">Current Focus</h2>
                        <p className="text-gray-400">Transitioning to Product Management, combining analytical rigor with user-centric design principles.</p>
                        <button onClick={() => navigateTo('experience')} className="inline-block mt-6 px-5 py-2.5 text-sm font-semibold text-[#0C0F1D] bg-[#88FF55] rounded-lg transition-all duration-300 hover:bg-white hover:neon-glow">
                          View Experience &rarr;
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* 4. Outside Work Section */}
            <motion.div
              className="mt-24"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div variants={itemVariants} className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Outside Work</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-gray-400">When I’m not building data-driven products, I explore creativity and balance through music, sports, and travel.</p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {[
                        { icon: <BrandIcon />, title: 'Brand Analysis', desc: 'Success/failure analysis of brands and market dynamics.' },
                        { icon: <MarketIcon />, title: 'Market Movements', desc: 'Macroeconomics and trend forecasting.' },
                        { icon: <MusicIcon />, title: 'Sports & Music', desc: 'Cricket, concerts, and guitar sessions.' },
                        { icon: <AdventureIcon />, title: 'Adventure', desc: 'Travel and outdoor exploration.' },
                    ].map(item => (
                        <motion.div
                            key={item.title}
                            variants={itemVariants}
                             whileHover={{ 
                                y: -8, 
                                boxShadow: '0 10px 15px -3px rgba(136, 255, 85, 0.07), 0 4px 6px -4px rgba(136, 255, 85, 0.07)' 
                            }}
                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                            className="p-8 text-center bg-[#111526] rounded-xl border border-gray-800 transition-colors duration-300 hover:border-[#88FF55]/50"
                        >
                            <div className="inline-block p-4 bg-gray-800/50 rounded-full mb-4">{item.icon}</div>
                            <h3 className="font-bold text-lg text-gray-100">{item.title}</h3>
                            <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* 5. CTA Section */}
            <motion.div
                className="mt-24 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                 <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    Ready to Build Something Amazing?
                  </h2>
                  <p className="mt-4 max-w-2xl mx-auto text-gray-400">
                    I’m open to collaborations and new opportunities. Let’s connect and explore how my skills can bring value to your team.
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button onClick={() => navigateTo('contact')} className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-[#0C0F1D] bg-[#88FF55] rounded-lg transition-transform duration-300 hover:scale-105 hover:neon-glow">
                      Get In Touch
                    </button>
                    <button onClick={() => navigateTo('projects')} className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-gray-200 border-2 border-gray-600 rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#88FF55] hover:neon-text">
                      View My Projects
                    </button>
                  </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About;