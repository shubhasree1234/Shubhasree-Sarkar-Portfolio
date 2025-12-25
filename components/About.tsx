import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

// Section & Header Icons
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>;
const BriefcaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125v-4.25m16.5 0a2.25 2.25 0 00-1.875-2.217 12.073 12.073 0 00-9.75 0 2.25 2.25 0 00-1.875 2.217m16.5 0a2.25 2.25 0 01-1.875 2.217 12.073 12.073 0 01-9.75 0 2.25 2.25 0 01-1.875-2.217m16.5 0V9.25c0-.621-.504-1.125-1.125-1.125h-4.25m-11.25 0H4.875c-.621 0-1.125.504-1.125 1.125v4.9m13.125-4.9V4.875c0-.621-.504-1.125-1.125-1.125h-4.5c-.621 0-1.125.504-1.125 1.125V8.25m7.5 0H8.25" /></svg>;
const BoltIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>;
const CompassIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>;
const TargetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>;
const ActivityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const BuildingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>;
const RocketIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a17.953 17.953 0 01-2.63 12.62M14.37 15.59a17.953 17.953 0 01-12.62 2.63m12.62-2.63a17.953 17.953 0 01-2.63-12.62m2.63 12.62a6 6 0 01-7.38-5.84h4.82m2.56-5.84a17.953 17.953 0 0112.62-2.63M15.59 14.37a17.953 17.953 0 012.63-12.62m-2.63 12.62a6 6 0 015.84-7.38v4.82m-5.84 2.56a17.953 17.953 0 012.63 12.62" /></svg>;

// Outside Work Icons
const BrandAnalysisIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const MarketMovementsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>;
const MusicIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>;
const AdventureIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

interface AboutProps {
    navigateTo: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ navigateTo }) => {
  return (
    <div className="bg-[#0C0F1D] min-h-screen">
        {/* About Me Section */}
        <section className="py-24 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <motion.div
                    className="text-center mb-16 md:mb-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 mb-6">
                        <UserIcon />
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white uppercase tracking-[0.1em]">
                            About Me
                        </h1>
                    </motion.div>
                    <motion.div variants={itemVariants} className="w-24 h-1.5 mx-auto bg-gradient-to-r from-transparent via-[#C5A059] to-transparent rounded-full"></motion.div>
                    <motion.p 
                        variants={itemVariants}
                        className="mt-8 max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed font-medium"
                    >
                        A passionate product generalist with 6+ years of experience transforming data into actionable strategies that drive growth and efficiency.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Professional Background */}
                    <motion.div
                        className="lg:col-span-2 p-10 bg-[#111623] rounded-2xl border border-gray-800 shadow-xl"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <BriefcaseIcon />
                            <h2 className="text-2xl font-bold text-[#C5A059] uppercase tracking-widest">Professional Background</h2>
                        </div>
                        <div className="space-y-10">
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <ActivityIcon />
                                    <h3 className="text-lg font-bold text-white uppercase tracking-widest">What I Do</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed">
                                    I drive growth and efficiency by streamlining and building scalable processes and user-centric products using design thinking and first principles. My expertise spans Data Science, Analytics, and Consulting, with a strong focus on product strategy and user experience.
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <BuildingIcon />
                                    <h3 className="text-lg font-bold text-white uppercase tracking-widest">Industries & Experience</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {['Consumer Goods', 'Financial Services', 'Technology', 'Analytics'].map(tag => (
                                        <span key={tag} className="px-4 py-1.5 text-xs font-semibold border border-gray-700 bg-gray-800/40 text-gray-300 rounded-full transition-colors hover:border-[#C5A059]/30">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Stats */}
                    <motion.div
                        className="p-10 bg-[#111623] rounded-2xl border border-gray-800 shadow-xl"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <BoltIcon />
                            <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Quick Stats</h2>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <p className="text-5xl font-black text-[#C5A059] tracking-tight">30M+</p>
                                <p className="text-sm text-gray-400 mt-1 uppercase tracking-[0.1em] font-medium">Media Investment Managed</p>
                            </div>
                            <div>
                                <p className="text-5xl font-black text-[#C5A059] tracking-tight">6+ Years</p>
                                <p className="text-sm text-gray-400 mt-1 uppercase tracking-[0.1em] font-medium">Experience</p>
                            </div>
                            <div>
                                <p className="text-5xl font-black text-[#C5A059] tracking-tight">GenAI</p>
                                <p className="text-sm text-gray-400 mt-1 uppercase tracking-[0.1em] font-medium">Hackathon Winner</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* My Approach Title & Grid */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center justify-center gap-4 mb-10">
                            <CompassIcon />
                            <h2 className="text-2xl font-bold text-white uppercase tracking-widest">My Approach</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: 'Design Thinking', desc: 'User-centric approach to problem-solving and product development.' },
                                { title: 'First Principles', desc: 'Decomposing problems into fundamental truths.' },
                                { title: 'Data-Driven Decisions', desc: 'Leveraging analytics and insights to guide strategy.' },
                                { title: 'Scalable Processes', desc: 'Building systems that evolve with business growth.' }
                            ].map(item => (
                                <div key={item.title} className="p-8 bg-[#111623] rounded-xl border border-gray-800 shadow-lg group hover:border-[#C5A059]/30 transition-all duration-300">
                                    <h3 className="font-extrabold text-gray-100 uppercase tracking-widest mb-3 text-sm">{item.title}</h3>
                                    <p className="text-xs text-gray-400 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Current Focus Box */}
                    <motion.div
                        className="p-10 bg-[#111623] rounded-2xl border border-gray-800 shadow-xl flex flex-col"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex-grow">
                            <div className="flex items-center gap-4 mb-6">
                                <TargetIcon />
                                <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Current Focus</h2>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed font-medium">Transitioning to Product Management, combining analytical rigor with user-centric design principles.</p>
                        </div>
                        <button 
                            onClick={() => navigateTo('experience')} 
                            className="mt-10 w-full px-6 py-4 text-xs font-bold tracking-[0.2em] uppercase text-[#0C0F1D] bg-[#C5A059] rounded-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] flex items-center justify-center gap-3"
                        >
                            View Experience <span>&rarr;</span>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Outside Work Section */}
        <section className="py-24 bg-[#0A0C16]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <motion.div
                    className="text-center mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 mb-6">
                        <HeartIcon />
                        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase tracking-[0.15em]">
                            Outside Work
                        </h2>
                    </motion.div>
                    <motion.p 
                        variants={itemVariants}
                        className="mt-6 max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed font-medium"
                    >
                        When I’m not building data-driven products, I explore creativity and balance through music, sports, and travel.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: <BrandAnalysisIcon />, title: 'Brand Analysis', desc: 'Success/failure analysis of brands and market dynamics.' },
                        { icon: <MarketMovementsIcon />, title: 'Market Movements', desc: 'Macroeconomics and trend forecasting.' },
                        { icon: <MusicIcon />, title: 'Sports & Music', desc: 'Cricket, concerts, and guitar sessions.' },
                        { icon: <AdventureIcon />, title: 'Adventure', desc: 'Travel and outdoor exploration.' }
                    ].map((card, index) => (
                        <motion.div
                            key={index}
                            className="p-10 bg-[#111623] rounded-2xl border border-gray-800 shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:border-[#C5A059]/40 hover:-translate-y-2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <div className="w-16 h-16 rounded-full bg-gray-800/50 flex items-center justify-center mb-8 border border-gray-700/50">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-widest">{card.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed font-medium">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA Area */}
        <section className="py-24 text-center">
            <div className="container mx-auto px-4 max-w-4xl">
                 <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-col items-center gap-4 mb-10">
                        <RocketIcon />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white uppercase tracking-[0.2em]">Have a similar challenge?</h2>
                    </div>
                    <p className="text-lg text-gray-400 mb-12 font-medium">I design pragmatic, metric-driven growth systems. If you have a project in mind, let’s create measurable impact.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button onClick={() => navigateTo('contact')} className="w-full sm:w-auto px-10 py-5 text-xs font-bold tracking-[0.2em] uppercase text-[#0C0F1D] bg-[#C5A059] rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(197,160,89,0.5)]">
                           Get In Touch
                        </button>
                        <button onClick={() => navigateTo('projects')} className="w-full sm:w-auto px-10 py-5 text-xs font-bold tracking-[0.2em] uppercase text-[#C5A059] border-2 border-[#C5A059]/40 rounded-sm transition-all duration-300 hover:scale-105 hover:border-[#C5A059] hover:text-[#C5A059]">
                           View My Projects
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    </div>
  )
}

export default About;