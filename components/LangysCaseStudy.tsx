
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Icons
const ProjectOverviewIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
const SummaryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
const SkillsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>;
const CategoryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
const DurationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ToolsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>;

// My Approach Icons
const ApproachIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" /></svg>;
const UnderstandingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const AnalyticsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const ObjectivesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
const DataSourcesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const FunnelIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;

// FIX: Define itemVariants and containerVariants for use in motion components before they are accessed
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const AccordionItem: React.FC<{ title: string; subtitle: string; body: React.ReactNode; icon: React.ReactNode; index: number }> = ({ title, subtitle, body, icon, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div variants={itemVariants} className="bg-[#111623] rounded-xl border border-gray-800 transition-colors hover:border-gray-700">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-start text-left p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#88FF55] rounded-lg"
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${index}`}
            >
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{icon}</div>
                    <div className="flex-grow">
                        <h4 className="font-bold text-lg text-gray-100">{title}</h4>
                        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
                    </div>
                </div>
                <div className="text-gray-500 text-2xl flex-shrink-0 ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${isOpen ? '' : 'rotate-45'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id={`accordion-content-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeInOut', opacity: { delay: 0.1 } } }}
                        exit={{ height: 0, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }}
                        className="overflow-hidden"
                        role="region"
                    >
                        <div className="pl-[4.5rem] pr-8 pb-6 flex gap-4">
                           <div className="w-0.5 bg-[#88FF55] flex-shrink-0 self-stretch"></div>
                           <div className="text-gray-400 text-sm">{body}</div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const approachData = [
    { 
        icon: <UnderstandingIcon />,
        title: "Understanding Langy’s Expansion Goals", 
        subtitle: "Client context and strategic objectives",
        body: (
            <div className="space-y-2">
                <p>Analyzed Langy's global expansion and strategic priorities, identifying India as a key market.</p>
                <p className="font-semibold text-gray-300 mt-2">Key Questions:</p>
                <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Which cities offer highest potential?</li>
                    <li>What’s the optimal pricing strategy?</li>
                    <li>What menu items resonate locally?</li>
                    <li>Who are the target customer segments?</li>
                </ul>
            </div>
        )
    },
    { 
        icon: <AnalyticsIcon />,
        title: "Zomato Analytica Division Strategy", 
        subtitle: "B2B analytics platform and capabilities",
        body: (
            <div className="space-y-2">
                <p>Positioned Zomato Analytica to leverage Zomato’s vast dataset for B2B insights.</p>
                <p className="font-semibold text-gray-300 mt-2">Core Value:</p>
                <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Access to India’s largest food ordering data.</li>
                    <li>Real-time market and consumer behavior trends.</li>
                </ul>
            </div>
        )
    },
    { 
        icon: <ObjectivesIcon />,
        title: "Data Objectives & KPIs", 
        subtitle: "Defining success metrics for India expansion",
        body: "Established key performance indicators focusing on market penetration, customer acquisition costs, and average order value. Defined success through data-driven benchmarks for city-wise performance and menu popularity."
    },
    { 
        icon: <DataSourcesIcon />,
        title: "Data Sources & Architecture", 
        subtitle: "Leveraging Zomato's data ecosystem",
        body: "Integrated various data sources including historical order data, user demographics, and location-based trends. Designed an architecture that allows for real-time dashboard updates and multi-dimensional analysis."
    },
    { 
        icon: <FunnelIcon />,
        title: "Funnel Analysis & Insights", 
        subtitle: "Optimizing the conversion journey",
        body: "Performed deep funnel analysis to identify drop-off points in the ordering process. Leveraged Zomato data to understand user intent and preferences, resulting in actionable insights for menu optimization and targeted marketing."
    }
];

interface LangysCaseStudyProps {
    navigateTo: (page: string) => void;
}

const LangysCaseStudy: React.FC<LangysCaseStudyProps> = ({ navigateTo }) => {
    return (
        <div className="py-24 sm:py-32 bg-[#0C0F1D]">
            <div className="container max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-gray-400">
                            <a onClick={() => navigateTo('home')} className="hover:text-white cursor-pointer">Home</a> / 
                            <a onClick={() => navigateTo('projects')} className="hover:text-white cursor-pointer"> Projects</a> / 
                            <span className="text-white"> Product Analytics – Langys Intelligent Dashboard</span>
                        </div>
                         <a onClick={() => navigateTo('projects')} className="cursor-pointer px-4 py-2 text-sm font-semibold text-gray-200 border border-gray-600 rounded-lg transition-all duration-300 hover:border-[#88FF55] hover:neon-text">
                            &larr; Back to Projects
                        </a>
                    </div>
                     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#E6EAF2] text-center mt-12 mb-12">
                        Product Analytics – <span className="text-[#88FF55]">Langys Intelligent Dashboard</span>
                    </h1>
                     <div className="max-w-md mx-auto bg-[#111623] p-8 rounded-2xl border border-gray-800 shadow-lg text-center">
                        <div className="text-5xl mb-4 inline-block">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        </div>
                        <h2 className="text-3xl font-bold">Langys Analytics</h2>
                        <p className="text-gray-400 mt-2">Market Expansion Intelligence for Food Brands</p>
                    </div>
                </motion.div>

                {/* Overview */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">Project Overview</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                         <motion.div variants={itemVariants} className="lg:col-span-2 bg-[#111623] p-8 rounded-xl border border-gray-800">
                            <div className="flex items-center gap-3 mb-4"><SummaryIcon/> <h3 className="font-semibold text-lg">Summary</h3></div>
                            <p className="text-gray-400 mb-6">Designed an intelligent analytics dashboard for Langy’s to guide their market entry into India using Zomato’s proprietary data. The dashboard provided real-time insights into consumer preferences, competitive landscape, and optimal location strategies.</p>
                            <div className="flex items-center gap-3 mb-4"><SkillsIcon/> <h3 className="font-semibold text-lg">Skills Demonstrated</h3></div>
                            <div className="flex flex-wrap gap-2">
                                {["Market Analysis", "Data Visualization", "Product Analytics", "B2B Strategy", "KPI Definition", "User Segmentation"].map(s => <span key={s} className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full">{s}</span>)}
                            </div>
                         </motion.div>
                         <div className="space-y-6">
                            <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 flex items-center"><CategoryIcon /> <div><h4 className="font-semibold">Category</h4><p className="text-gray-400">Academic</p></div></motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 flex items-center"><DurationIcon /> <div><h4 className="font-semibold">Duration</h4><p className="text-gray-400">3 weeks</p></div></motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 flex items-center"><ToolsIcon /> <div><h4 className="font-semibold">Tools Used</h4><p className="text-gray-400">Pitch · MixPanel</p></div></motion.div>
                         </div>
                    </div>
                </motion.section>

                {/* My Approach */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">My Approach</h2>
                    <div className="space-y-4">
                        {approachData.map((item, i) => <AccordionItem key={item.title} title={item.title} subtitle={item.subtitle} body={item.body} icon={item.icon} index={i + 1} />)}
                    </div>
                </motion.section>

                {/* Final CTA */}
                <motion.section
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-extrabold tracking-tight">Interested in my approach?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-400">Every project is a journey of discovery. Let’s connect and discuss how data can drive your next big decision.</p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button onClick={() => navigateTo('contact')} className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-[#0C0F1D] bg-[#88FF55] rounded-lg transition-transform duration-300 hover:scale-105 hover:neon-glow">
                           Get In Touch
                        </button>
                        <button onClick={() => navigateTo('projects')} className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-gray-200 border-2 border-gray-600 rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#88FF55] hover:neon-text">
                           View My Projects
                        </button>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

// FIX: Added default export to fix module resolution in App.tsx
export default LangysCaseStudy;
