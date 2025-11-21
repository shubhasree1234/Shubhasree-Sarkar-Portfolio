import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Icons
const SummaryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const SkillsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const CategoryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
const DurationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ToolsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const SwotIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const OutcomeImpactIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>;
const SuccessMetricsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>;
const ProjectChallengeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const MainQuestionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const BriefDescriptionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const PlatformContextIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const CoreChallengeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
const StrategicImportanceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;

// My Approach Icons
const ApproachIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 01-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 013.09-3.09L12 5.25l2.846.813a4.5 4.5 0 013.09 3.09L21.75 12l-2.846.813a4.5 4.5 0 01-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.25 21.75l-.648-1.178a3.375 3.375 0 00-2.456-2.456L12 17.25l1.178-.648a3.375 3.375 0 002.456-2.456L16.25 13.5l.648 1.178a3.375 3.375 0 002.456 2.456L20.25 18l-1.178.648a3.375 3.375 0 00-2.456 2.456z" /></svg>;
const UnderstandingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const MarketResearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>;
const SegmentationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const JourneyMapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>;
const PrioritizationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a17.953 17.953 0 01-2.63 12.62M14.37 15.59a17.953 17.953 0 01-12.62 2.63m12.62-2.63a17.953 17.953 0 01-2.63-12.62m2.63 12.62a6 6 0 01-7.38-5.84h4.82m2.56-5.84a17.953 17.953 0 0112.62-2.63M15.59 14.37a17.953 17.953 0 012.63-12.62m-2.63 12.62a6 6 0 015.84-7.38v4.82m-5.84 2.56a17.953 17.953 0 012.63 12.62" /></svg>;


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
    title: "Understanding the Challenge & Platform",
    subtitle: "YouTube's position and engagement dynamics",
    body: (
        <div className="space-y-4">
            <p>Analyzed YouTube's unique position as world's largest video platform with diverse content spanning education, entertainment, music, and more. Unlike Netflix's curated catalog or TikTok's infinite scroll, YouTube balances intentional search behavior with discovery-driven consumption.</p>
            <div>
                <strong className="text-gray-300">Current State Assessment:</strong>
                <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Average session: 40 minutes (industry benchmark)</li>
                    <li>Users often have specific intent when arriving (search-driven)</li>
                    <li>Drop-off occurs between videos when recommendation relevance declines</li>
                    <li>Interface complexity sometimes creates decision fatigue</li>
                    <li>Cross-device usage patterns fragmenting watch sessions</li>
                </ul>
            </div>
            <p><strong className="text-gray-300">Key Insight:</strong> YouTube's challenge differs from pure entertainment platforms - must balance intentional viewing with serendipitous discovery while maintaining content quality standards.</p>
        </div>
    )
  },
  {
    icon: <MarketResearchIcon />,
    title: "Market Research & Competitive Analysis",
    subtitle: "Learning from competitors and market trends",
    body: (
        <div className="space-y-4">
            <p>Conducted comprehensive competitive analysis studying engagement strategies from leading platforms:</p>
            <div>
                <strong className="text-gray-300">Netflix Insights:</strong>
                <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Auto-play next episode creates seamless continuation</li>
                    <li>"Continue Watching" prominent placement reduces friction</li>
                    <li>Episode cliffhangers and series structure encourage binging</li>
                </ul>
            </div>
            <div>
                <strong className="text-gray-300">TikTok Insights:</strong>
                <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Infinite scroll eliminating decision points</li>
                    <li>Powerful personalization algorithm learning rapidly</li>
                </ul>
            </div>
            <div>
                <strong className="text-gray-300">Market Trends Identified:</strong>
                 <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Users increasingly prefer personalized, seamless experiences</li>
                    <li>Decision fatigue major cause of session abandonment</li>
                    <li>Cross-platform syncing expected as standard</li>
                </ul>
            </div>
        </div>
    )
  },
  {
    icon: <SegmentationIcon />,
    title: "User Segmentation & Persona Development",
    subtitle: "Understanding different viewer behaviors",
    body: (
        <div className="space-y-2">
            <p>Segmented YouTube users into three primary personas based on viewing behavior:</p>
            <ul className="list-disc list-inside space-y-1">
                <li><strong className="text-gray-300">Casual Viewers (35%):</strong> Watch sporadically, high drop-off. Pain points: Decision fatigue, unclear next video.</li>
                <li><strong className="text-gray-300">Binge Watchers (40%):</strong> Consume multiple videos, frustrated by interruptions. Pain points: Losing place, irrelevant suggestions.</li>
                <li><strong className="text-gray-300">Niche Enthusiasts (25%):</strong> Deeply interested in specific topics, want more curation. Pain points: Limited curation tools, missing new content from favorite creators.</li>
            </ul>
        </div>
    )
  },
  {
    icon: <JourneyMapIcon />,
    title: "Jobs To Be Done & Journey Mapping",
    subtitle: "Understanding user motivations and experience",
    body: (
         <div className="space-y-4">
            <div>
                <strong className="text-gray-300">Identified core JTBD for different contexts:</strong>
                <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Entertainment: Discover engaging content without constant decision-making.</li>
                    <li>Education: Find comprehensive content in logical sequence.</li>
                    <li>Background Content: Enjoy passive consumption without constant interaction.</li>
                </ul>
            </div>
            <p>Mapped journey stages (Discovery → Engagement → Transition → Retention/Exit) and identified critical pain points, especially in the transition phase where recommendation relevance drops and friction increases.</p>
        </div>
    )
  },
  {
    icon: <PrioritizationIcon />,
    title: "Problem Prioritization & Solution Development",
    subtitle: "Framework-based prioritization and solutions",
    body: (
        <div className="space-y-4">
            <p>Used problem prioritization matrix evaluating issues by impact on watch session, feasibility, user segment, and competitive differentiation.</p>
            <div>
                <strong className="text-gray-300">High Priority Problems:</strong>
                <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Transition Friction: Solved with enhanced auto-play and transparent personalization.</li>
                    <li>Content Continuity: Addressed with 'Continue Watching' feature and playlist intelligence.</li>
                    <li>Discovery Overwhelming: Mitigated with mood-based content curation and simplified UI.</li>
                </ul>
            </div>
        </div>
    )
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

interface YouTubeCaseStudyProps {
    navigateTo: (page: string) => void;
}

const YouTubeCaseStudy: React.FC<YouTubeCaseStudyProps> = ({ navigateTo }) => {
    return (
         <div className="py-24 sm:py-32 bg-[#0C0F1D]">
            <div className="container max-w-7xl mx-auto px-6 lg:px-8">
                {/* 1. Breadcrumbs & Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-gray-400" aria-label="Breadcrumb">
                            <a onClick={() => navigateTo('home')} className="hover:text-white cursor-pointer">Home</a> / 
                            <a onClick={() => navigateTo('projects')} className="hover:text-white cursor-pointer"> Projects</a> / 
                            <span className="text-white"> Product Improvement of YouTube</span>
                        </div>
                         <a onClick={() => navigateTo('projects')} className="cursor-pointer px-4 py-2 text-sm font-semibold text-gray-200 border border-gray-600 rounded-lg transition-all duration-300 hover:border-[#88FF55] hover:neon-text">
                            &larr; Back to Projects
                        </a>
                    </div>
                     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#E6EAF2] text-center mt-12 mb-4">
                        Product Improvement of YouTube
                    </h1>
                     <p className="text-center text-lg text-gray-400 mb-12">Enhancing Watch Session Duration Through Strategic Product Interventions</p>
                </motion.div>

                {/* 2. Project Overview */}
                 <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                     <h2 className="text-3xl font-bold mb-8 text-center">Project Overview</h2>
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                         <motion.div variants={itemVariants} className="lg:col-span-2 bg-[#111623] p-8 rounded-xl border border-gray-800 flex flex-col">
                            <div className="space-y-6 flex-grow">
                                <div>
                                    <div className="flex items-center gap-3 mb-2"><SummaryIcon/> <h3 className="font-bold text-xl text-white">Summary</h3></div>
                                    <p className="text-gray-400 text-sm">Boost user engagement on YouTube by increasing average watch session time through a product-led strategy focused on personalization, seamless content discovery, and improved content continuity.</p>
                                    <p className="text-gray-400 text-sm mt-2">As Product Strategist, devised a comprehensive strategy combining feature enhancements, user research insights, and competitive analysis to increase watch session duration, thereby boosting user engagement and platform retention while driving higher ad revenues.</p>
                                </div>
                                <div>
                                     <div className="flex items-center gap-3 mb-2"><SkillsIcon/> <h3 className="font-bold text-xl text-white">Skills Demonstrated</h3></div>
                                    <div className="flex flex-wrap gap-2">
                                        {["Competitor Analysis", "Customer Journey Map", "GTM Strategies", "Jobs To Be Done", "Market Analysis", "Market Research", "Personas", "Problem Prioritisation Matrix", "Product Launch", "Product Roadmap", "Solution Matrix", "Success Metrics", "SWOT Analysis", "User Segmentation", "Wireframing"].map(s => <span key={s} className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full">{s}</span>)}
                                    </div>
                                </div>
                            </div>
                         </motion.div>
                         <div className="flex flex-col gap-6">
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 md:p-10 rounded-xl border border-gray-800 flex-grow">
                                <div className="flex flex-col items-center justify-center text-center h-full gap-4">
                                    <CategoryIcon />
                                    <h4 className="text-lg md:text-xl font-semibold">Category</h4>
                                    <p className="text-base md:text-lg font-medium text-[#E6EAF2]">Academic</p>
                                </div>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 md:p-10 rounded-xl border border-gray-800 flex-grow">
                                <div className="flex flex-col items-center justify-center text-center h-full gap-4">
                                    <DurationIcon />
                                    <h4 className="text-lg md:text-xl font-semibold">Duration</h4>
                                    <p className="text-base md:text-lg font-medium text-[#E6EAF2]">3 Weeks</p>
                                </div>
                            </motion.div>
                             <motion.div variants={itemVariants} className="bg-[#111623] p-8 md:p-10 rounded-xl border border-gray-800 flex-grow">
                                <div className="flex flex-col items-center justify-center text-center h-full gap-4">
                                    <ToolsIcon />
                                    <h4 className="text-lg md:text-xl font-semibold">Tools Used</h4>
                                    <p className="text-base md:text-lg font-medium text-[#E6EAF2]">Figma · Notion · Pitch · Google Forms</p>
                                </div>
                            </motion.div>
                         </div>
                     </div>
                 </motion.section>

                {/* 3. Project Challenge */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-20">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <ProjectChallengeIcon />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E6EAF2]">Project Challenge</h2>
                    </div>
                    
                    <div className="space-y-6">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                            <div className="flex items-center gap-3 mb-4"><MainQuestionIcon/> <h3 className="font-semibold text-lg text-white">Main Question</h3></div>
                            <p className="text-gray-300 text-xl italic">“How can YouTube increase average watch session duration to boost user engagement and platform retention through strategic product interventions?”</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                             <div className="flex items-center gap-3 mb-4"><BriefDescriptionIcon/> <h3 className="font-semibold text-lg text-white">Brief Description</h3></div>
                            <p className="text-gray-400">Developed product-led strategy to enhance YouTube's watch session time by focusing on three core pillars: advanced personalization algorithms, seamless content discovery mechanisms, and improved content continuity features. Created comprehensive roadmap addressing user pain points while leveraging competitive insights from Netflix and TikTok's binge-watching success.</p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                            <div className="flex items-center gap-3 mb-4"><PlatformContextIcon/> <h3 className="font-semibold text-lg text-white">Platform Context</h3></div>
                            <p className="text-gray-400 text-sm">YouTube is leading video-sharing platform aiming to maximize user engagement by increasing watch session duration. Longer sessions enhance user satisfaction while driving higher advertising revenues. Current average session duration: approximately 40 minutes.</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                            <div className="flex items-center gap-3 mb-4"><CoreChallengeIcon/> <h3 className="font-semibold text-lg text-white">Core Challenge</h3></div>
                            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                                <li>Retaining users for extended periods beyond initial intent</li>
                                <li>Encouraging continuous content consumption across multiple videos</li>
                                <li>Reducing drop-off rates between videos and maintaining momentum</li>
                                <li>Competing with platforms like Netflix and TikTok that excel at binge-watching</li>
                            </ul>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                            <div className="flex items-center gap-3 mb-4"><StrategicImportanceIcon/> <h3 className="font-semibold text-lg text-white">Strategic Importance</h3></div>
                            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                                <li>User satisfaction and platform stickiness</li>
                                <li>Advertising revenue through increased ad impressions</li>
                                <li>Creator ecosystem health through more views</li>
                                <li>Competitive positioning against emerging platforms</li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.section>

                {/* 4. My Approach */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-20">
                     <div className="text-center">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <ApproachIcon />
                            <h2 className="text-3xl font-bold">My Approach</h2>
                        </div>
                    </div>
                    <div className="space-y-4 mt-8">
                        {approachData.map((item, i) => (
                            <AccordionItem 
                                key={i}
                                icon={item.icon}
                                title={item.title} 
                                subtitle={item.subtitle} 
                                body={item.body}
                                index={i + 1} 
                            />
                        ))}
                    </div>
                </motion.section>

                {/* 5. What I discovered */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">What I Discovered</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 h-full">
                            <h3 className="text-xl font-bold mb-4 text-[#88FF55]">User Behavior Insights</h3>
                            <ul className="list-disc list-inside space-y-3 text-gray-400">
                                <li>Session patterns: intent vs. exploration; drop-offs at 15 and 40 mins</li>
                                <li>Decision fatigue after 3–4 selections</li>
                                <li>Cross-device switching (43%) causing session loss</li>
                            </ul>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 h-full">
                            <h3 className="text-xl font-bold mb-4 text-[#88FF55]">Competitive Intelligence</h3>
                            <ul className="list-disc list-inside space-y-3 text-gray-400">
                                <li>Netflix reduces friction via “Continue Watching”</li>
                                <li>TikTok’s transitions achieve 52-min avg sessions</li>
                                <li>Spotify creates habit-forming playlists</li>
                                <li>YouTube advantages: diversity, SEO, creator base</li>
                            </ul>
                         </motion.div>
                          <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 h-full">
                            <h3 className="text-xl font-bold mb-4 text-[#88FF55]">Product Opportunities</h3>
                            <ul className="list-disc list-inside space-y-3 text-gray-400">
                                <li>Quick Wins (0–3 months): Continue Watching, Auto-Play optimization</li>
                                <li>Strategic Bets (3–9 months): Interactive playlists, personalization</li>
                                <li>Transformative (9–18 months): AI-powered curation, social co-watching</li>
                            </ul>
                         </motion.div>
                    </div>
                </motion.section>
                
                {/* 6. Strategic Recommendations */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                     <h2 className="text-3xl font-bold mb-8 text-center">Strategic Recommendations</h2>
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="text-lg font-bold">“Continue Watching” Reimagined</h3>
                            <p className="text-sm text-gray-400 mt-2">Dedicated section + cross-device sync + smart detection</p>
                            <p className="text-sm text-gray-400 mt-2 font-semibold">→ 25% session abandonment reduction, 15% completion lift</p>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="text-lg font-bold">Auto-Play Intelligence</h3>
                            <p className="text-sm text-gray-400 mt-2">ML-based adaptive auto-play, real-time feedback loops</p>
                            <p className="text-sm text-gray-400 mt-2 font-semibold">→ +20% recommendation relevance, –18% drop-offs</p>
                         </motion.div>
                          <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="text-lg font-bold">Interactive Playlists</h3>
                            <p className="text-sm text-gray-400 mt-2">Dynamic, mood-based, creator-collaborative playlists</p>
                            <p className="text-sm text-gray-400 mt-2 font-semibold">→ +30% longer sessions, higher creator engagement</p>
                         </motion.div>
                     </div>
                </motion.section>

                {/* 7. SWOT Analysis */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <SwotIcon />
                        <h2 className="text-3xl font-bold">SWOT Analysis</h2>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-green-500/30">
                            <h3 className="font-bold text-xl text-green-400 mb-4">Strengths</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Vast Content Library: Unmatched variety, constant freshness.</li>
                                <li>Advanced Recommendation Technology: Sophisticated algorithms, real-time trending.</li>
                                <li>Creator Ecosystem: Millions of creators, strong monetization.</li>
                                <li>Platform Maturity: Established habits, strong SEO.</li>
                            </ul>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-red-500/30">
                            <h3 className="font-bold text-xl text-red-400 mb-4">Weaknesses</h3>
                             <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Interface Complexity: Overwhelming choices, decision fatigue.</li>
                                <li>Limited Content Curation Control: Users want more influence, basic playlist features.</li>
                                <li>Ad Experience: Frequent interruptions, ad fatigue.</li>
                                <li>Recommendation Staleness: Algorithms get stuck, difficulty discovering new content.</li>
                            </ul>
                        </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-blue-500/30">
                            <h3 className="font-bold text-xl text-blue-400 mb-4">Opportunities</h3>
                             <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Personalized Experience Demand: Growing user expectation for tailored content.</li>
                                <li>Technology Advancements: Improved streaming, AR/VR opportunities.</li>
                                <li>Educational Content Growth: Opportunity for structured learning paths.</li>
                                <li>Premium Features Acceptance: Users willing to pay for enhanced experiences.</li>
                                <li>Social Viewing Trends: Co-watching and community curation gaining popularity.</li>
                            </ul>
                        </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-yellow-500/30">
                            <h3 className="font-bold text-xl text-yellow-400 mb-4">Threats</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Emerging Competitors: TikTok, Netflix, Twitch capturing different segments.</li>
                                <li>Changing Consumption Habits: Shorter attention spans, preference for curated content.</li>
                                <li>Creator Platform Competition: Creators exploring alternative platforms.</li>
                                <li>Regulatory Challenges: Content moderation and privacy regulations.</li>
                                <li>Ad Blockers & Premium Migration: Growing ad blocker usage, pressure on free tier.</li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.section>

                {/* 8. Success Metrics */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-20">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <SuccessMetricsIcon />
                        <h2 className="text-3xl font-bold">Success Metrics</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 text-left">
                            <h3 className="text-xl font-bold text-white mb-2">Average Session Duration</h3>
                            <p className="text-3xl font-bold text-[#88FF55]">50 minutes (+25%)</p>
                            <p className="text-sm text-gray-400 mt-4">Average time from session start to last video end</p>
                            <p className="text-sm text-gray-400 mt-2">Primary indicator of engagement increase directly impacting ad revenue</p>
                            <p className="text-xs text-gray-500 mt-2">Baseline: 40 minutes</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 text-left">
                            <h3 className="text-xl font-bold text-white mb-2">Feature Adoption Rate</h3>
                            <p className="text-3xl font-bold text-[#88FF55]">60% "Continue Watching" usage</p>
                            <p className="text-sm text-gray-400 mt-4">Auto-play acceptance: Target 75% (up from current ~60%). Interactive playlist engagement: Target 40% of users</p>
                            <p className="text-sm text-gray-400 mt-2">Validates effectiveness of new implementations</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 text-left">
                            <h3 className="text-xl font-bold text-white mb-2">Drop-off Rate Reduction</h3>
                            <p className="text-3xl font-bold text-[#88FF55]">&lt;15% between-video (from ~22%)</p>
                            <p className="text-sm text-gray-400 mt-4">15-minute mark retention: Target &gt;85%. 40-minute mark retention: Target &gt;60%</p>
                            <p className="text-sm text-gray-400 mt-2">Identifies friction points and improvement areas</p>
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 text-left">
                            <h3 className="text-xl font-bold text-white mb-4">Secondary Metrics</h3>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-semibold text-gray-200">User Satisfaction Score</h4>
                                    <p className="text-sm text-gray-400">Target: NPS &gt;40 for new features<br/>Ensures engagement increases don't sacrifice user experience</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-200">Revenue Impact</h4>
                                    <p className="text-sm text-gray-400">Target: +18% revenue per user<br/>Business viability of engagement improvements</p>
                                </div>
                                 <div>
                                    <h4 className="font-semibold text-gray-200">Content Diversity</h4>
                                    <p className="text-sm text-gray-400">Target: +15% topics explored per session<br/>Ensures recommendation improvements don't create echo chambers</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 text-left">
                            <h3 className="text-xl font-bold text-white mb-4">Success Criteria Timeline</h3>
                             <div className="space-y-4 text-sm">
                                <div>
                                    <h4 className="font-semibold text-white">3-Month Goals</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-1 mt-1">
                                        <li>Deploy ‘Continue Watching’ & auto-play improvements</li>
                                        <li>Achieve 10% session duration increase</li>
                                        <li>Reach 50% feature adoption</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">6-Month Goals</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-1 mt-1">
                                        <li>Full cross-device sync implementation</li>
                                        <li>18% session duration increase</li>
                                        <li>Improvement in user satisfaction scores</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">12-Month Goals</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-1 mt-1">
                                        <li>25% session duration increase achieved</li>
                                        <li>Market-leading engagement metrics</li>
                                        <li>Sustainable revenue impact demonstrated</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
                 
                {/* 9. Outcome & Impact */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-20">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <OutcomeImpactIcon />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E6EAF2]">Outcome & Impact</h2>
                    </div>
                    <div className="space-y-12">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">Strategic Deliverables</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div>
                                    <h4 className="font-semibold text-[#88FF55] mb-2">Comprehensive Product Roadmap</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                                        <li>User-centric feature prioritization</li>
                                        <li>Phased implementation plan spanning 18 months</li>
                                        <li>Clear success metrics and measurement framework</li>
                                        <li>Resource requirements and team allocation</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#88FF55] mb-2">Feature Specifications</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                                        <li>Detailed wireframes and user flows</li>
                                        <li>Technical requirements documentation</li>
                                        <li>Design system integration guidelines</li>
                                        <li>Implementation complexity assessment</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#88FF55] mb-2">Go-to-Market Strategy</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                                        <li>Phased rollout plan minimizing risk</li>
                                        <li>User education and communication strategy</li>
                                        <li>Creator partnership programs</li>
                                        <li>Marketing and PR timeline</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">Anticipated Business Impact</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                <div>
                                    <h4 className="font-semibold text-[#88FF55] mb-2">Engagement Improvements</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                                        <li>25% increase in average session duration (40 → 50 minutes)</li>
                                        <li>18% reduction in between-video drop-offs</li>
                                        <li>30% improvement in recommendation relevance scores</li>
                                        <li>65% increase in "Continue Watching" feature usage</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#88FF55] mb-2">Revenue Implications</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                                        <li>20% increase in ad impressions per session</li>
                                        <li>Higher ad revenue without increased user acquisition costs</li>
                                        <li>Potential Premium conversion uplift through feature gating</li>
                                        <li>Improved creator satisfaction driving content quality</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#88FF55] mb-2">Competitive Positioning</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                                        <li>Market-leading session duration metrics</li>
                                        <li>Differentiation through seamless experience and personalization</li>
                                        <li>Reduced churn to competitors like TikTok</li>
                                        <li>Enhanced platform moat through switching costs</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#88FF55] mb-2">User Experience</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                                        <li>Reduced frustration and decision fatigue</li>
                                        <li>Improved content discovery and satisfaction</li>
                                        <li>Seamless cross-device experience</li>
                                        <li>Greater control and transparency in recommendations</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* 10. Explore Full Case Study */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
                    className="mt-20 text-center bg-[#111623] p-10 rounded-xl border border-gray-800"
                >
                    <h2 className="text-3xl font-bold">View Full Strategy & Wireframes</h2>
                    <p className="mt-4 text-gray-400 max-w-3xl mx-auto">Access the complete product improvement strategy with detailed competitive analysis, user research findings, wireframes, mockups, and implementation roadmap.</p>
                    <a href="https://pitch.com/v/youtube-kkisyi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-8 px-8 py-3 text-lg font-semibold text-[#0C0F1D] bg-[#88FF55] rounded-lg transition-transform duration-300 hover:scale-105 hover:neon-glow">
                        View on Pitch.com
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                    <div className="mt-8">
                        <p className="text-sm text-gray-500 mb-3">Includes:</p>
                        <div className="flex flex-wrap justify-center gap-2">
                           {["Comprehensive market analysis", "Detailed user personas and journey maps", "Interactive wireframes and mockups", "Implementation timeline and resource planning", "Success metrics framework"].map(tag => (
                                <span key={tag} className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full">{tag}</span>
                           ))}
                        </div>
                    </div>
                     <p className="mt-6 text-sm text-gray-500">For questions or feedback, contact: <a href="mailto:shubhasree.sarkar3103@gmail.com" className="hover:text-[#88FF55]">shubhasree.sarkar3103@gmail.com</a></p>
                </motion.section>


                 {/* 11. Final CTA */}
                <motion.section
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-extrabold tracking-tight">Have a similar challenge?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-400">I’m passionate about tackling complex problems. If you have a project in mind, let’s create something impactful together.</p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button onClick={() => navigateTo('contact')} className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-[#0C0F1D] bg-[#88FF55] rounded-lg transition-transform duration-300 hover:scale-105 hover:neon-glow">
                           Get In Touch
                        </button>
                        <button onClick={() => navigateTo('projects')} className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-gray-200 border-2 border-gray-600 rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#88FF55] hover:neon-text">
                           View My Projects
                        </button>
                    </div>
                    <p className="mt-6 text-sm text-gray-400">shubhasree.sarkar3103@gmail.com</p>
                </motion.section>
            </div>
         </div>
    );
};

export default YouTubeCaseStudy;
