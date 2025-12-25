import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Icons
const SummaryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const SkillsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
const CategoryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
const DurationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ToolsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const StarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442a.562.562 0 01.311.988l-4.135 3.547a.563.563 0 00-.184.563l1.113 5.473a.562.562 0 01-.846.615L12 17.581a.563.563 0 00-.532 0l-4.896 2.477a.562.562 0 01-.846-.615l1.113-5.473a.563.563 0 00-.184-.563L2.552 10.39a.562.562 0 01.311-.988l5.518-.442a.563.563 0 00.475-.345l2.125-5.111z" /></svg>;
const WarningTriangleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F9C344]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
const RecommendationsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6l-5.072-1.358a.562.562 0 010-1.084l5.072-1.358 1.358-5.072a.562.562 0 011.084 0l1.358 5.072 5.072 1.358a.562.562 0 010 1.084l-5.072 1.358-1.358 5.072a.562.562 0 01-1.084 0zM12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;

// Icons for GTM Framework section
const GtmFrameworkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
const UnderstandingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const SegmentationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const JourneyMapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>;
const StrategyDevIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;

// New Headers and Topic Icons
const ProjectDetailsHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>;
const ProjectChallengeHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const MainQuestionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const BriefDescriptionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>;
const ContextTopicIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const MarketLandscapeTopicIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const DiscoveryHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const UserInsightsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const ProductStrengthsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const GrowthOpportunitiesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const ImpactHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>;
const BusinessCanvasHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
const MethodologyHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>;
const SwotChartHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;

const AccordionItem: React.FC<{ title: string; subtitle: string; body: React.ReactNode; icon: React.ReactNode; index: number }> = ({ title, subtitle, body, icon, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div variants={itemVariants} className="bg-[#111623] rounded-xl border border-gray-800 transition-colors hover:border-gray-700">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-start text-left p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded-lg"
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
                           <div className="w-0.5 bg-[#C5A059] flex-shrink-0 self-stretch"></div>
                           <div className="text-gray-400 text-sm flex-grow">{body}</div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const gtmFrameworkData = [
    { 
        icon: <UnderstandingIcon />,
        title: "Understanding the Company & Market", 
        subtitle: "Product overview and market opportunity analysis",
        body: "Conducted comprehensive analysis of ReachifyMe's positioning in the AI content creation space. Identified that LinkedIn saw explosive growth in professional content creation, yet AI tools remained under-adopted among target segments. Analyzed competitive landscape including major players and niche AI search tools. Mapped market trends showing rising solopreneur economy and increasing AI tool curiosity among SMEs."
    },
    { 
        icon: <SegmentationIcon />,
        title: "Target User Segmentation", 
        subtitle: "Identifying and categorizing key user personas",
        body: (
            <div className="space-y-2">
                <p>Identified three primary user segments:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong className="text-gray-300">The Solo Hustler:</strong> Freelancers and consultants scaling their personal brand.</li>
                    <li><strong className="text-gray-300">The Scrappy Founder:</strong> Micro SME leaders driving inbound leads on a budget.</li>
                    <li><strong className="text-gray-300">The Content Newbie:</strong> Creators new to LinkedIn lacking a content strategy.</li>
                </ul>
                <p>Each persona was mapped to pain points, goals, and pricing sensitivity to inform GTM tactics.</p>
            </div>
        )
    },
    { 
        icon: <JourneyMapIcon />,
        title: "Consumer Journey Mapping", 
        subtitle: "End-to-end user experience and friction points",
        body: "Mapped the user journey across five stages: Discovery → Trial → Engagement → Conversion → Referral. Identified critical friction points, including initial content generation, unclear value proposition post-trial, and a rigid pricing structure. These insights directly informed the proposed product roadmap and GTM strategy."
    },
    { 
        icon: <StrategyDevIcon />,
        title: "GTM Strategy Development", 
        subtitle: "Comprehensive go-to-market playbook",
        body: "Developed a multi-faceted GTM strategy including a product roadmap with a new 'Creator Starter Plan', A/B testing for onboarding, and a LinkedIn Creator Challenge. The pricing strategy shifted to a tiered model with monthly options. Marketing focused on creator-led webinars and referral rewards, while the sales strategy adopted an education-first approach."
    }
];


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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

interface ReachifyMeCaseStudyProps {
    navigateTo: (page: string) => void;
}

const ReachifyMeCaseStudy: React.FC<ReachifyMeCaseStudyProps> = ({ navigateTo }) => {
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
                            <span className="text-white"> GTM Strategy – ReachifyMe User Acquisition</span>
                        </div>
                         <a onClick={() => navigateTo('projects')} className="cursor-pointer px-4 py-2 text-sm font-semibold text-gray-200 border border-gray-600 rounded-lg transition-all duration-300 hover:border-[#C5A059] hover:neon-text">
                            &larr; Back to Projects
                        </a>
                    </div>
                     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#E6EAF2] text-center mt-12 mb-12 flex flex-col items-center gap-4">
                        <span>GTM Strategy – ReachifyMe User Acquisition</span>
                    </h1>
                     <div className="max-w-md mx-auto bg-[#111623] p-8 rounded-2xl border border-gray-800 shadow-lg text-center">
                        <div className="text-5xl mb-4 inline-block">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                        </div>
                        <h2 className="text-3xl font-bold uppercase tracking-widest text-[#C5A059]">ReachifyMe</h2>
                        <p className="text-gray-400 mt-2 font-medium">Grow & Monetize Your Personal Brand</p>
                    </div>
                </motion.div>

                {/* 2. Project Details */}
                 <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-24">
                     <div className="flex items-center justify-center gap-4 mb-12">
                        <ProjectDetailsHeaderIcon />
                        <h2 className="text-3xl font-bold text-center uppercase tracking-widest text-[#E6EAF2]">Project Details</h2>
                     </div>
                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                         {/* Left Box: Summary & Skills */}
                         <div className="lg:col-span-8 flex flex-col gap-6">
                            <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl flex-grow">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="mt-1"><SummaryIcon/></div>
                                    <div>
                                        <h3 className="font-bold text-xl text-white">Summary</h3>
                                        <p className="text-gray-400 mt-3 leading-relaxed text-base">
                                            ReachifyMe is an AI-powered LinkedIn content platform designed for early-stage startups and Micro SMEs. Within 3 months, it acquired 4,000+ free users and 200+ paid users. As Growth Product Manager, I designed a GTM strategy to expand the user base by 40% in 3 months targeting Micro SMEs and content creators through LinkedIn-first acquisition channels.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 pt-4 border-t border-gray-800/50">
                                    <div className="mt-1"><SkillsIcon/></div>
                                    <div>
                                        <h3 className="font-bold text-xl text-white">Skills Demonstrated</h3>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {[
                                                "Competitor Analysis", "Customer Journey Map", "Funnel Analytics", "GTM Strategies", "Market Analysis", 
                                                "Personas", "Product Launch", "Product Roadmap", "SWOT Analysis", "Success Metrics", "User Segmentation"
                                            ].map(s => (
                                                <span key={s} className="px-3 py-1.5 text-xs font-medium border border-[#C5A059]/20 bg-gray-700/30 text-gray-300 rounded-full transition-colors hover:border-[#C5A059]/40 hover:bg-gray-700/50">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                         </div>

                         {/* Right Column: Three Stacked Boxes */}
                         <div className="lg:col-span-4 flex flex-col gap-6">
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 flex items-center gap-5 shadow-lg flex-grow transition-all duration-300 hover:border-[#C5A059]/30">
                                <div className="p-3 bg-gray-800/40 rounded-lg"><CategoryIcon /></div>
                                <div>
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-white">Category</h4>
                                    <p className="text-[#A8B0C2] text-base mt-1">Hackathon</p>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 flex items-center gap-5 shadow-lg flex-grow transition-all duration-300 hover:border-[#C5A059]/30">
                                <div className="p-3 bg-gray-800/40 rounded-lg"><DurationIcon /></div>
                                <div>
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-white">Duration</h4>
                                    <p className="text-[#A8B0C2] text-base mt-1">3 weeks</p>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 flex items-center gap-5 shadow-lg flex-grow transition-all duration-300 hover:border-[#C5A059]/30">
                                <div className="p-3 bg-gray-800/40 rounded-lg"><ToolsIcon /></div>
                                <div>
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-white">Tools Used</h4>
                                    <p className="text-[#A8B0C2] text-base mt-1">Figma · Notion · Canva</p>
                                </div>
                            </motion.div>
                         </div>
                     </div>
                 </motion.section>

                {/* 3. Project Challenge */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-32">
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <ProjectChallengeHeaderIcon />
                        <h2 className="text-3xl font-bold tracking-tight text-[#E6EAF2] uppercase tracking-widest text-center">Project Challenge</h2>
                    </div>
                    
                    <div className="space-y-6 max-w-6xl mx-auto">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <MainQuestionIcon />
                                <h3 className="font-bold text-lg text-[#C5A059] uppercase tracking-widest">Main Question</h3>
                            </div>
                            <p className="text-gray-200 text-xl italic leading-relaxed">
                                “How might we drive discovery and conversion within Micro SMEs, solopreneurs, and creators unfamiliar with AI tools using a lean, scalable GTM motion?”
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <BriefDescriptionIcon />
                                <h3 className="font-bold text-lg text-[#C5A059] uppercase tracking-widest">Brief Description</h3>
                            </div>
                            <p className="text-gray-400 text-base leading-relaxed">
                                Designed a comprehensive GTM strategy to scale ReachifyMe’s user base by 40% in 3 months. Created persona-led playbook with tiered pricing, multi-channel acquisition strategy, and measurable KPIs. Winning submission for GenAI Hackathon.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <ContextTopicIcon />
                                <h3 className="font-bold text-lg text-[#C5A059] uppercase tracking-widest">Context</h3>
                            </div>
                            <p className="text-gray-400 text-base leading-relaxed">
                                ReachifyMe helps users generate personalized LinkedIn posts, carousels, and images using AI through user-defined prompts, trending topics, and SME-specific insights. Despite early traction (4,000+ free users and 200+ paid users), visibility gaps existed among target segments — creating opportunity for strategic GTM expansion.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <MarketLandscapeTopicIcon />
                                <h3 className="font-bold text-lg text-[#C5A059] uppercase tracking-widest">Market Landscape</h3>
                            </div>
                            <ul className="list-disc list-inside text-gray-400 space-y-3 text-base leading-relaxed marker:text-[#C5A059]">
                                <li>22% YoY growth in solopreneur LinkedIn creators</li>
                                <li>60% of SME founders use LinkedIn for lead generation</li>
                                <li>AI tools for LinkedIn remain under-penetrated in emerging markets</li>
                                <li>Significant whitespace opportunity for hyper-targeted positioning</li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.section>

                {/* 4. My Strategic GTM Framework */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-32">
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <GtmFrameworkIcon />
                            <h2 className="text-3xl font-bold uppercase tracking-widest">My Strategic GTM Framework</h2>
                        </div>
                        <p className="text-lg text-gray-400 mb-12 font-medium">Research & Analysis Phase</p>
                    </div>
                    <div className="space-y-4">
                        {gtmFrameworkData.map((item, i) => (
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

                {/* 5. WHAT I DISCOVERED */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-32">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <DiscoveryHeaderIcon />
                            <h2 className="text-3xl font-bold uppercase tracking-[0.4em] text-[#E6EAF2]">WHAT I DISCOVERED</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-3 mb-8 text-[#C5A059]">
                                <UserInsightsIcon />
                                <h3 className="text-xl font-bold uppercase tracking-wider">USER INSIGHTS</h3>
                            </div>
                            <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
                                <li className="flex gap-2 items-start"><span className="text-gray-200 mt-1">•</span> Solopreneurs and micro SMEs looking to scale personal brands</li>
                                <li className="flex gap-2 items-start"><span className="text-gray-200 mt-1">•</span> 80% content creation time saved via AI personalization</li>
                                <li className="flex gap-2 items-start"><span className="text-gray-200 mt-1">•</span> Pain points: AI adoption learning curve, content quality doubts, price sensitivity</li>
                            </ul>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-3 mb-8 text-[#C5A059]">
                                <ProductStrengthsIcon />
                                <h3 className="text-xl font-bold uppercase tracking-wider">PRODUCT STRENGTHS</h3>
                            </div>
                            <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
                                <li className="flex gap-2 items-start"><span className="text-gray-200 mt-1">•</span> Fast, intuitive onboarding experience</li>
                                <li className="flex gap-2 items-start"><span className="text-gray-200 mt-1">•</span> SME-specific AI content prompts</li>
                                <li className="flex gap-2 items-start"><span className="text-gray-200 mt-1">•</span> 4,000+ users in 3 months proving PMF</li>
                            </ul>
                         </motion.div>
                          <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-3 mb-8 text-[#C5A059]">
                                <GrowthOpportunitiesIcon />
                                <h3 className="text-xl font-bold uppercase tracking-wider">GROWTH OPPORTUNITIES</h3>
                            </div>
                            <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
                                <li className="flex gap-2 items-start"><span className="text-gray-200 mt-1">•</span> Expand solopreneur market (22% YoY growth)</li>
                                <li className="flex gap-2 items-start"><span className="text-gray-200 mt-1">•</span> Boost DAU/MAU ratio via habit loops</li>
                                <li className="flex gap-2 items-start"><span className="text-gray-200 mt-1">•</span> Enhance trial-to-paid conversion with tiers</li>
                            </ul>
                         </motion.div>
                    </div>
                </motion.section>
                
                {/* 6. SWOT Analysis */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-32">
                     <div className="flex items-center justify-center gap-4 mb-12">
                        <SwotChartHeaderIcon />
                        <h2 className="text-3xl font-bold uppercase tracking-widest text-[#E6EAF2]">SWOT Analysis</h2>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-[#C5A059]/30 shadow-lg">
                            <h3 className="font-bold text-xl text-[#C5A059] mb-6 flex items-center gap-2">Strengths</h3>
                            <ul className="space-y-4 text-[#A8B0C2] text-sm leading-relaxed">
                                <li className="flex gap-3 items-start"><span className="text-[#C5A059] mt-1">•</span> Fast, intuitive onboarding experience</li>
                                <li className="flex gap-3 items-start"><span className="text-[#C5A059] mt-1">•</span> Relevant AI content prompts showing SME understanding</li>
                                <li className="flex gap-3 items-start"><span className="text-[#C5A059] mt-1">•</span> Proven early traction (4K+ users in 3 months)</li>
                                <li className="flex gap-3 items-start"><span className="text-[#C5A059] mt-1">•</span> LinkedIn-first positioning in growing market</li>
                            </ul>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-[#352121] shadow-lg">
                            <h3 className="font-bold text-xl text-[#F94444] mb-6 flex items-center gap-2">Weaknesses</h3>
                             <ul className="space-y-4 text-[#A8B0C2] text-sm leading-relaxed">
                                <li className="flex gap-3 items-start"><span className="text-[#F94444] mt-1">•</span> Limited brand awareness in target segments</li>
                                <li className="flex gap-3 items-start"><span className="text-[#F94444] mt-1">•</span> Flat pricing structure lacking flexibility</li>
                                <li className="flex gap-3 items-start"><span className="text-[#F94444] mt-1">•</span> Minimal differentiation in crowded AI tools market</li>
                                <li className="flex gap-3 items-start"><span className="text-[#F94444] mt-1">•</span> High customer acquisition cost relative to pricing</li>
                             </ul>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-[#212835] shadow-lg">
                            <h3 className="font-bold text-xl text-[#44A3F9] mb-6 flex items-center gap-2">Opportunities</h3>
                             <ul className="space-y-4 text-[#A8B0C2] text-sm leading-relaxed">
                                <li className="flex gap-3 items-start"><span className="text-[#44A3F9] mt-1">•</span> Rising solopreneur economy (22% YoY growth)</li>
                                <li className="flex gap-3 items-start"><span className="text-[#44A3F9] mt-1">•</span> High AI curiosity and adoption momentum</li>
                                <li className="flex gap-3 items-start"><span className="text-[#44A3F9] mt-1">•</span> Under-penetrated emerging markets</li>
                                <li className="flex gap-3 items-start"><span className="text-[#44A3F9] mt-1">•</span> LinkedIn's expanding creator tools ecosystem</li>
                             </ul>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-[#353321] shadow-lg">
                            <h3 className="font-bold text-xl text-[#F9C344] mb-6 flex items-center gap-2">Threats</h3>
                             <ul className="space-y-4 text-[#A8B0C2] text-sm leading-relaxed">
                                <li className="flex gap-3 items-start"><span className="text-[#F9C344] mt-1">•</span> Larger platforms (LinkedIn, Buffer) launching competing features</li>
                                <li className="flex gap-3 items-start"><span className="text-[#F9C344] mt-1">•</span> Commoditization of LinkedIn automation tools</li>
                                <li className="flex gap-3 items-start"><span className="text-[#F9C344] mt-1">•</span> Intense competition from established players</li>
                                <li className="flex gap-3 items-start"><span className="text-[#F9C344] mt-1">•</span> Pricing pressure from free alternatives</li>
                             </ul>
                        </motion.div>
                    </div>
                </motion.section>

                {/* 7. Strategic Recommendations */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-32">
                     <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <RecommendationsIcon />
                            <h2 className="text-3xl font-bold uppercase tracking-[0.2em] text-[#E6EAF2]">STRATEGIC RECOMMENDATIONS</h2>
                        </div>
                    </div>
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl flex flex-col">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-8">HIGH IMPACT - QUICK WIN</p>
                            <h3 className="text-2xl font-bold mb-10 text-white uppercase tracking-wider leading-tight">TIERED PRICING MODEL</h3>
                            <div className="space-y-8 flex-grow">
                                <div>
                                    <h5 className="text-[10px] font-bold text-[#C5A059] mb-2 uppercase tracking-widest">PROPOSED SOLUTION:</h5>
                                    <p className="text-sm text-gray-400 leading-relaxed">Launch three tiers: Solo Starter (₹299/mo), Pro+ (₹7,500/yr), and Enterprise. Add monthly billing options.</p>
                                </div>
                                <div>
                                    <h5 className="text-[10px] font-bold text-[#C5A059] mb-2 uppercase tracking-widest">EXPECTED IMPACT:</h5>
                                    <p className="text-sm text-gray-400 leading-relaxed">35% increase in trial-to-paid conversion rate. Capture price-sensitive segments.</p>
                                </div>
                            </div>
                        </motion.div>
                        {/* Card 2 */}
                         <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl flex flex-col">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-8">MEDIUM IMPACT - STRATEGIC</p>
                            <h3 className="text-2xl font-bold mb-10 text-white uppercase tracking-wider leading-tight">CREATOR CHALLENGE</h3>
                            <div className="space-y-8 flex-grow">
                                <div>
                                    <h5 className="text-[10px] font-bold text-[#C5A059] mb-2 uppercase tracking-widest">PROPOSED SOLUTION:</h5>
                                    <p className="text-sm text-gray-400 leading-relaxed">Monthly LinkedIn content challenge with leaderboards, prizes, and referral rewards.</p>
                                </div>
                                <div>
                                    <h5 className="text-[10px] font-bold text-[#C5A059] mb-2 uppercase tracking-widest">EXPECTED IMPACT:</h5>
                                    <p className="text-sm text-gray-400 leading-relaxed">50% increase in organic acquisition. Boost viral coefficient significantly.</p>
                                </div>
                            </div>
                         </motion.div>
                         {/* Card 3 */}
                          <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl flex flex-col">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-8">LONG-TERM TRANSFORMATIVE</p>
                            <h3 className="text-2xl font-bold mb-10 text-white uppercase tracking-wider leading-tight">PERSONA ONBOARDING</h3>
                            <div className="space-y-8 flex-grow">
                                <div>
                                    <h5 className="text-[10px] font-bold text-[#C5A059] mb-2 uppercase tracking-widest">PROPOSED SOLUTION:</h5>
                                    <p className="text-sm text-gray-400 leading-relaxed">Customized onboarding flows per persona (Solo, SME, Creator) to ensure immediate value perception.</p>
                                </div>
                                <div>
                                    <h5 className="text-[10px] font-bold text-[#C5A059] mb-2 uppercase tracking-widest">EXPECTED IMPACT:</h5>
                                    <p className="text-sm text-gray-400 leading-relaxed">25% reduction in first-week churn rate. Higher feature adoption.</p>
                                </div>
                            </div>
                         </motion.div>
                     </div>
                </motion.section>

                {/* 8. Measuring Impact */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-32">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <ImpactHeaderIcon />
                            <h2 className="text-3xl font-bold uppercase tracking-[0.2em] text-[#E6EAF2]">MEASURING IMPACT</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            { label: "User Acquisition", value: "6,000+", desc: "users in 3 months (↑ 40%)" },
                            { label: "Engagement", value: "> 0.30", desc: "DAU/MAU (↑ 40%)" },
                            { label: "Satisfaction", value: "< 5%", desc: "Churn, NPS > 50" },
                            { label: "Conversion", value: "8%", desc: "trial-to-paid (↑ from 5%)" },
                            { label: "Efficiency", value: "< 2s", desc: "generation time, 99.5% uptime" },
                            { label: "Growth", value: "> 0.5", desc: "15% referral rate, viral coefficient" }
                        ].map((metric, i) => (
                            <motion.div key={i} variants={itemVariants} className="bg-[#111623] p-12 rounded-xl border border-gray-800 text-center flex flex-col justify-center shadow-lg hover:border-[#C5A059]/20 transition-all">
                                <h4 className="text-[#C5A059] font-bold uppercase text-[10px] tracking-widest mb-4">{metric.label}</h4>
                                <p className="text-5xl font-bold text-white mb-3">{metric.value}</p>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest">{metric.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div variants={itemVariants} className="max-w-6xl mx-auto mt-8 bg-[#111623] p-8 rounded-xl border border-gray-800 text-center shadow-lg">
                         <h4 className="text-[#C5A059] font-bold uppercase text-[10px] tracking-widest mb-3">Measurement Framework</h4>
                         <p className="text-xs text-gray-500 uppercase tracking-[0.15em]">30/60/90-day tracking · Real-time dashboards · Weekly reviews · Monthly iteration cycles</p>
                    </motion.div>
                </motion.section>

                {/* 9. Business Model Canvas */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-32">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <BusinessCanvasHeaderIcon />
                            <h2 className="text-3xl font-bold uppercase tracking-[0.2em] text-[#E6EAF2]">Business Model Canvas</h2>
                        </div>
                    </div>
                    <div className="bg-[#111623] p-16 rounded-xl border border-gray-800 shadow-xl max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                            <div className="space-y-16">
                                <div>
                                    <h4 className="text-[#C5A059] font-bold uppercase text-[10px] tracking-[0.2em] mb-4">Key Activities</h4>
                                    <p className="text-xs text-gray-400 leading-relaxed font-medium">AI engine dev · Onboarding automation · Community management</p>
                                </div>
                                <div>
                                    <h4 className="text-[#C5A059] font-bold uppercase text-[10px] tracking-[0.2em] mb-4">Channels</h4>
                                    <p className="text-xs text-gray-400 leading-relaxed font-medium">LinkedIn content · Referrals · Webinars · Influencers</p>
                                </div>
                            </div>
                            <div className="space-y-16">
                                <div>
                                    <h4 className="text-[#C5A059] font-bold uppercase text-[10px] tracking-[0.2em] mb-4">Value Proposition</h4>
                                    <p className="text-xs text-gray-400 leading-relaxed font-medium">Simplify content creation · Save 80% time · Professional AI output</p>
                                </div>
                                <div>
                                    <h4 className="text-[#C5A059] font-bold uppercase text-[10px] tracking-[0.2em] mb-4">Revenue Streams</h4>
                                    <p className="text-xs text-gray-400 leading-relaxed font-medium">Subscription with tiered pricing · Monthly/annual billing</p>
                                </div>
                            </div>
                            <div className="space-y-16">
                                <div>
                                    <h4 className="text-[#C5A059] font-bold uppercase text-[10px] tracking-[0.2em] mb-4">Customer Segments</h4>
                                    <p className="text-xs text-gray-400 leading-relaxed font-medium">Micro SMEs · Solopreneurs · Content creators</p>
                                </div>
                                <div>
                                    <h4 className="text-[#C5A059] font-bold uppercase text-[10px] tracking-[0.2em] mb-4">Key Metrics</h4>
                                    <p className="text-xs text-gray-400 leading-relaxed font-medium">Conversion rate · CAC vs LTV · Viral coefficient · Revenue per segment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* 10. Outcome & Recognition */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-32">
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <StarIcon />
                        <h2 className="text-3xl font-bold uppercase tracking-[0.2em] text-[#E6EAF2]">Outcome & Recognition</h2>
                    </div>
                    <motion.div variants={itemVariants} className="bg-[#111623] p-12 rounded-xl border border-[#C5A059]/20 shadow-2xl relative overflow-hidden max-w-6xl mx-auto">
                        <div className="absolute top-10 left-10 opacity-30"><StarIcon /></div>
                        <div className="text-center mb-16 px-12">
                            <p className="text-3xl font-bold text-[#C5A059] leading-snug">Winner of GenAI Hackathon for most effective and cost-efficient GTM strategy.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                           <div className="p-10 rounded-xl border border-gray-800 bg-[#0C0F1D]/50">
                                <h3 className="font-bold text-white text-lg mb-8 uppercase tracking-widest border-b border-gray-800 pb-4">Key Deliverables</h3>
                                <ul className="space-y-6 text-sm text-gray-400 leading-relaxed">
                                    <li className="flex gap-4 items-start"><span className="text-[#C5A059] mt-1 text-lg">•</span> <span>Created comprehensive persona-led GTM playbook tailored to LinkedIn-first audiences</span></li>
                                    <li className="flex gap-4 items-start"><span className="text-[#C5A059] mt-1 text-lg">•</span> <span>Outlined detailed 3-month growth sprint targeting 40% user base increase</span></li>
                                    <li className="flex gap-4 items-start"><span className="text-[#C5A059] mt-1 text-lg">•</span> <span>Delivered scalable frameworks for product positioning, pricing, and funnel optimization</span></li>
                                    <li className="flex gap-4 items-start"><span className="text-[#C5A059] mt-1 text-lg">•</span> <span>Developed tiered pricing strategy with accessible ₹299/month entry point</span></li>
                                    <li className="flex gap-4 items-start"><span className="text-[#C5A059] mt-1 text-lg">•</span> <span>Designed multi-channel acquisition strategy with measurable KPIs and success metrics</span></li>
                                </ul>
                            </div>
                            <div className="p-10 rounded-xl border border-gray-800 bg-[#0C0F1D]/50">
                                <h3 className="font-bold text-white text-lg mb-8 uppercase tracking-widest border-b border-gray-800 pb-4">Projected Business Impact</h3>
                                <ul className="space-y-6 text-sm text-gray-400 leading-relaxed">
                                    <li className="flex gap-4 items-start"><span className="text-[#C5A059] mt-1 text-lg">•</span> <span>User Growth: 40% increase (4,000 to 6,000+ users in 3 months)</span></li>
                                    <li className="flex gap-4 items-start"><span className="text-[#C5A059] mt-1 text-lg">•</span> <span>Conversion Rate: Improvement from 5% to 8% trial-to-paid</span></li>
                                    <li className="flex gap-4 items-start"><span className="text-[#C5A059] mt-1 text-lg">•</span> <span>Revenue Growth: 60% increase through tiered pricing adoption</span></li>
                                    <li className="flex gap-4 items-start"><span className="text-[#C5A059] mt-1 text-lg">•</span> <span>CAC Reduction: 30% decrease through organic and referral channels</span></li>
                                    <li className="flex gap-4 items-start"><span className="text-[#C5A059] mt-1 text-lg">•</span> <span>Market Positioning: Establish thought leadership in SME LinkedIn content space</span></li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* 11. Considerations & Trade-offs */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-32">
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <WarningTriangleIcon />
                        <h2 className="text-3xl font-bold uppercase tracking-[0.2em] text-[#E6EAF2]">CONSIDERATIONS & TRADE-OFFS</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {[
                            { 
                                title: "Technical Constraints", 
                                challenge: "Tiered pricing requires payment system infrastructure changes and billing automation updates.",
                                mitigation: "Phased rollout starting with monthly billing option. Parallel testing environment before full migration. Gradual transition plan for existing paid users."
                            },
                            { 
                                title: "Market Competition", 
                                challenge: "Larger platforms like LinkedIn or Buffer could launch competing AI features with distribution advantages.",
                                mitigation: "Focus on niche differentiation for SME-specific needs. Build strong community moat through engagement programs. Maintain rapid iteration cycle based on user feedback."
                            },
                            { 
                                title: "User Education", 
                                challenge: "Target users may resist AI adoption or find tools too complex, limiting conversion rates.",
                                mitigation: "Comprehensive onboarding education with video tutorials. Quick-win first experience demonstrating immediate value. Responsive customer support."
                            },
                            { 
                                title: "Resource Constraints", 
                                challenge: "Limited marketing budget restricts ability to compete with well-funded competitors on paid acquisition.",
                                mitigation: "Prioritize organic and viral growth strategies. Community-led acquisition through referral programs. Strategic influencer partnerships."
                            }
                        ].map((item, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="bg-[#111623] p-12 rounded-xl border border-gray-800 shadow-lg transition-all hover:border-[#F9C344]/30">
                                <h4 className="text-[#F9C344] font-bold uppercase text-[10px] tracking-[0.2em] mb-10 flex items-center gap-4">
                                    <WarningTriangleIcon />
                                    {item.title}
                                </h4>
                                <div className="space-y-8">
                                    <div>
                                        <p className="text-[10px] font-bold text-white mb-2 uppercase tracking-widest opacity-80">POTENTIAL CHALLENGE:</p>
                                        <p className="text-sm text-gray-400 leading-relaxed">{item.challenge}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-white mb-2 uppercase tracking-widest opacity-80">MITIGATION STRATEGY:</p>
                                        <p className="text-sm text-gray-400 leading-relaxed">{item.mitigation}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* 12. Methodology */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-32">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <MethodologyHeaderIcon />
                            <h2 className="text-3xl font-bold uppercase tracking-[0.2em] text-[#E6EAF2]">METHODOLOGY</h2>
                        </div>
                    </div>
                    <motion.div variants={itemVariants} className="max-w-6xl mx-auto bg-[#111623] p-12 rounded-xl border border-gray-800 text-center shadow-lg">
                        <p className="text-xs text-gray-500 leading-relaxed tracking-[0.2em] uppercase font-bold px-12">
                            EXPLORING COMPANY OVERVIEW → MARKET TRENDS → PERSONA DEFINITION → CONSUMER JOURNEY MAPPING → PRODUCT ROADMAP → PRICING & FUNNEL DESIGN → SWOT ANALYSIS → BUSINESS CANVAS → STRATEGIC FRAMEWORK → IMPACT METRICS
                        </p>
                    </motion.div>
                </motion.section>

                {/* 13. Explore Full Presentation */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
                    className="mt-32 text-center bg-[#111623] p-16 rounded-xl border border-gray-800 shadow-2xl max-w-6xl mx-auto relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent"></div>
                    <h2 className="text-3xl font-bold uppercase tracking-[0.1em] mb-8">Explore the Full Presentation</h2>
                    <p className="mt-4 text-[#A8B0C2] max-w-2xl mx-auto text-lg leading-relaxed">For a complete walkthrough of the research, frameworks, and impact metrics, view the winning submission.</p>
                    <a href="https://www.canva.com/design/DAGaZOcBIaA/Lm42bnbzkhUXmUyA-zzJyw/edit?utm_content=DAGaZOcBIaA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" className="inline-block mt-14 px-14 py-5 text-xs font-bold uppercase tracking-[0.3em] text-[#0C0F1D] bg-[#C5A059] rounded-sm transition-transform duration-300 hover:scale-105 hover:neon-glow">
                        VIEW ON CANVA
                    </a>
                </motion.section>

                 {/* 14. Final CTA */}
                <motion.section
                    className="mt-32 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-extrabold tracking-tight uppercase tracking-[0.2em] text-[#E6EAF2]">Have a similar challenge?</h2>
                    <p className="mt-8 max-w-2xl mx-auto text-[#A8B0C2] leading-relaxed text-lg font-medium">Let’s collaborate on building data-driven GTM strategies and growth frameworks that scale.</p>
                    <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8">
                        <button onClick={() => navigateTo('contact')} className="w-full sm:w-auto px-12 py-5 text-xs font-bold tracking-[0.2em] uppercase text-[#0C0F1D] bg-[#C5A059] rounded-sm transition-all duration-300 hover:scale-105 hover:neon-glow">
                           GET IN TOUCH
                        </button>
                        <button onClick={() => navigateTo('projects')} className="w-full sm:w-auto px-12 py-5 text-xs font-bold tracking-[0.2em] uppercase text-[#C5A059] border-2 border-[#C5A059]/40 rounded-sm transition-all duration-300 hover:scale-105 hover:border-[#C5A059] hover:neon-text">
                           VIEW MY PROJECTS
                        </button>
                    </div>
                </motion.section>
            </div>
         </div>
    );
};

export default ReachifyMeCaseStudy;
