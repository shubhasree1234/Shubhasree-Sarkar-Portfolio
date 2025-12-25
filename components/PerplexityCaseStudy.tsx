import React, { useState } from 'react';
// Fix: Import Variants type from framer-motion
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Icons
const SummaryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const SkillsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
const CategoryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
const DurationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ToolsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const CogIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

// Header Icons
const ProjectDetailsHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>;
const ProjectChallengeHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const MainQuestionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const BriefDescriptionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>;
const ApproachIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 01-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 013.09-3.09L12 5.25l2.846.813a4.5 4.5 0 013.09 3.09L21.75 12l-2.846.813a4.5 4.5 0 01-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.25 21.75l-.648-1.178a3.375 3.375 0 00-2.456-2.456L12 17.25l1.178-.648a3.375 3.375 0 002.456-2.456L16.25 13.5l.648 1.178a3.375 3.375 0 002.456 2.456L20.25 18l-1.178.648a3.375 3.375 0 00-2.456 2.456z" /></svg>;
const DiscoveryHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const UserInsightsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const ProductStrengthsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const GrowthOpportunitiesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const RecommendationsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6l-5.072-1.358a.562.562 0 010-1.084l5.072-1.358 1.358-5.072a.562.562 0 011.084 0l1.358 5.072 5.072 1.358a.562.562 0 010 1.084l-5.072 1.358-1.358 5.072a.562.562 0 01-1.084 0zM12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const ImpactHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>;
const WarningTriangleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#F9C344]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
const PitchHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
const CTAHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;


const AccordionItem: React.FC<{ title: string; subtitle: string; body: string; index: number }> = ({ title, subtitle, body, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-800 last:border-b-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-5 px-2 hover:bg-gray-800/30 transition-colors rounded-t-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${index}`}
            >
                <div className="flex items-center gap-4">
                    <CogIcon />
                    <span className="text-sm font-bold text-[#C5A059]">{String(index).padStart(2, '0')}</span>
                    <div>
                        <h4 className="font-semibold text-lg text-gray-200">{title}</h4>
                        <p className="text-sm text-gray-500 text-left">{subtitle}</p>
                    </div>
                </div>
                <motion.div animate={{ rotate: isOpen ? 45 : 0 }} className="text-2xl text-[#C5A059] transition-transform duration-300">+</motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id={`accordion-content-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } }}
                        exit={{ height: 0, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }}
                        className="overflow-hidden"
                        role="region"
                    >
                        <p className="pt-2 pb-5 pl-16 pr-2 text-gray-400">{body}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const approachData = [
  {
    title: "Understanding Perplexity.ai",
    subtitle: "Product deep dive and competitive analysis",
    body: "Conducted a comprehensive analysis of the competitive landscape, including major players like Google and niche AI search tools. Identified market trends and user expectations for AI-powered search engines."
  },
  {
    title: "User Research & Categorisation",
    subtitle: "Identified key user personas (casual browsers to power users)",
    body: "Interviewed target users to understand their search behaviors, pain points with existing tools, and perception of Perplexity.ai. Developed user personas to guide design and feature decisions."
  },
  {
    title: "Problem Identification",
    subtitle: "Discovered core problems the product solves for each persona",
    body: "Synthesized research findings to pinpoint key problem areas such as user onboarding, clarity of features, and differentiation from competitors. Prioritized problems based on user impact and business goals."
  },
  {
    title: "Solution Development",
    subtitle: "Brainstormed high-impact solutions",
    body: "Brainstormed and developed a range of solutions, including UI enhancements, new feature concepts like ‘Deep Dive’ mode, and improved onboarding flows to address the identified problems."
  },
  {
    title: "Wireframing & Visualization",
    subtitle: "Designed clean wireframes to bring solutions to life",
    body: "Created low-fidelity and high-fidelity wireframes to visualize the proposed solutions. Developed interactive prototypes to test usability and gather feedback on the new designs."
  },
  {
    title: "Success Metrics Definition",
    subtitle: "Established KPIs to measure solution effectiveness",
    body: "Established a set of key performance indicators (KPIs) to measure the impact of the proposed changes, including user engagement, retention rates, and conversion metrics."
  }
];

// Fix: Add explicit Variants type
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

// Fix: Add explicit Variants type
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

interface PerplexityCaseStudyProps {
    navigateTo: (page: string) => void;
}

const PerplexityCaseStudy: React.FC<PerplexityCaseStudyProps> = ({ navigateTo }) => {
    return (
         <div className="py-24 sm:py-32 bg-[#0C0F1D]">
            <div className="container max-w-7xl mx-auto px-6 lg:px-8">
                {/* Breadcrumbs & Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-gray-400">
                            <a onClick={() => navigateTo('home')} className="hover:text-white cursor-pointer">Home</a> / 
                            <a onClick={() => navigateTo('projects')} className="hover:text-white cursor-pointer"> Projects</a> / 
                            <span className="text-white"> Product Thinking Case Study – Perplexity.ai</span>
                        </div>
                         <a onClick={() => navigateTo('projects')} className="cursor-pointer px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#C5A059] border-2 border-[#C5A059]/40 rounded-sm transition-all duration-300 hover:scale-105 hover:border-[#C5A059]">
                            &larr; Back to Projects
                        </a>
                    </div>
                     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#E6EAF2] text-center mt-12 mb-12">
                        Product Thinking Case Study – <span className="text-[#C5A059] text-glow">Perplexity.ai</span>
                    </h1>
                     <div className="max-w-md mx-auto bg-[#111623] p-8 rounded-2xl border border-gray-800 shadow-lg text-center">
                        <div className="text-5xl mb-4 inline-block">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <h2 className="text-3xl font-bold uppercase tracking-widest text-[#C5A059]">Perplexity.ai</h2>
                        <p className="text-gray-400 mt-2 font-medium">AI-Powered Search & Research Platform</p>
                    </div>
                </motion.div>

                {/* Project Overview */}
                 <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                     <div className="flex items-center justify-center gap-4 mb-8">
                        <ProjectDetailsHeaderIcon />
                        <h2 className="text-3xl font-bold uppercase tracking-widest">Project Overview</h2>
                     </div>
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                         <motion.div variants={itemVariants} className="lg:col-span-2 bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl">
                            <div className="flex items-center gap-3 mb-4"><SummaryIcon/> <h3 className="font-bold text-xl text-white">Summary</h3></div>
                            <p className="text-gray-400 mb-6 leading-relaxed">Improving Perplexity.ai using Product Thinking steps.</p>
                            <div className="flex items-center gap-3 mb-4"><SkillsIcon/> <h3 className="font-bold text-xl text-white">Skills Demonstrated</h3></div>
                            <div className="flex flex-wrap gap-2">
                                {["Market Research", "Personas", "Problem Solving", "Product Thinking", "Solution Matrix", "Success Metrics", "User Categorisation", "User Problems", "User Research"].map(s => <span key={s} className="px-3 py-1 text-xs border border-[#C5A059]/20 bg-gray-700/30 text-gray-300 rounded-full">{s}</span>)}
                            </div>
                         </motion.div>
                         <div className="space-y-6">
                            <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 flex items-center shadow-lg"><CategoryIcon /> <div><h4 className="font-bold text-xs uppercase tracking-widest">Category</h4><p className="text-[#A8B0C2] text-sm">Academic</p></div></motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 flex items-center shadow-lg"><DurationIcon /> <div><h4 className="font-bold text-xs uppercase tracking-widest">Duration</h4><p className="text-[#A8B0C2] text-sm">3 weeks</p></div></motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 flex items-center shadow-lg"><ToolsIcon /> <div><h4 className="font-bold text-xs uppercase tracking-widest">Tools Used</h4><p className="text-[#A8B0C2] text-sm">Pitch · Figma</p></div></motion.div>
                         </div>
                     </div>
                 </motion.section>

                {/* Project Challenge */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <ProjectChallengeHeaderIcon />
                        <h2 className="text-3xl font-bold uppercase tracking-widest">Project Challenge</h2>
                    </div>
                    <div className="space-y-6">
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl">
                             <h3 className="font-bold text-lg text-[#C5A059] uppercase tracking-widest mb-3 flex items-center gap-3"><MainQuestionIcon /> Main Question</h3>
                             <p className="mt-2 text-gray-300 text-xl italic leading-relaxed">“How would you apply product thinking frameworks to improve Perplexity.ai?”</p>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl">
                             <h3 className="font-bold text-lg text-[#C5A059] uppercase tracking-widest mb-3 flex items-center gap-3"><BriefDescriptionIcon /> Brief Description</h3>
                             <p className="mt-2 text-gray-400 leading-relaxed">Comprehensive product analysis and strategic recommendations for Perplexity.ai, focusing on market positioning and user experience optimization through structured product thinking methodology.</p>
                         </motion.div>
                    </div>
                </motion.section>

                {/* My Approach */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <ApproachIcon />
                        <h2 className="text-3xl font-bold uppercase tracking-widest">My Approach</h2>
                    </div>
                    <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl">
                        {approachData.map((item, i) => <AccordionItem key={item.title} title={item.title} subtitle={item.subtitle} body={item.body} index={i + 1} />)}
                    </motion.div>
                </motion.section>

                {/* What I discovered */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <DiscoveryHeaderIcon />
                        <h2 className="text-3xl font-bold uppercase tracking-widest">What I Discovered</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 shadow-xl hover:border-[#C5A059]/20 transition-colors">
                            <h3 className="text-xl font-bold mb-4 text-[#C5A059] uppercase tracking-widest flex items-center gap-3"><UserInsightsIcon /> User Insights</h3>
                            <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
                                <li><strong>Who’s Using It:</strong> Key user personas identified</li>
                                <li><strong>Core Value Prop:</strong> What users truly value</li>
                                <li><strong>Pain Points:</strong> Primary friction points in UX</li>
                            </ul>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 shadow-xl hover:border-[#C5A059]/20 transition-colors">
                            <h3 className="text-xl font-bold mb-4 text-[#C5A059] uppercase tracking-widest flex items-center gap-3"><ProductStrengthsIcon /> Product Strengths</h3>
                            <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
                                <li><strong>What I Loved:</strong> UX design, speed, understanding</li>
                                <li><strong>Competitive Advantages:</strong> AI search positioning</li>
                                <li><strong>Satisfaction Drivers:</strong> Value-creating features</li>
                            </ul>
                         </motion.div>
                          <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 shadow-xl hover:border-[#C5A059]/20 transition-colors">
                            <h3 className="text-xl font-bold mb-4 text-[#C5A059] uppercase tracking-widest flex items-center gap-3"><GrowthOpportunitiesIcon /> Growth Opportunities</h3>
                            <ul className="list-disc list-inside space-y-3 text-gray-400 text-sm leading-relaxed">
                                <li><strong>User Acquisition:</strong> Scaling strategies</li>
                                <li><strong>Usage Optimization:</strong> Improving engagement</li>
                                <li><strong>Revenue Enhancement:</strong> Monetization approaches</li>
                            </ul>
                         </motion.div>
                    </div>
                </motion.section>
                
                {/* Strategic Recommendations */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                     <div className="flex items-center justify-center gap-4 mb-8">
                        <RecommendationsIcon />
                        <h2 className="text-3xl font-bold uppercase tracking-widest">Strategic Recommendations</h2>
                    </div>
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-3">Enhanced Personalization</h3>
                            <div className="flex gap-2 mt-2 mb-4"><span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-green-900/50 text-green-300 rounded-sm">High Impact</span><span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-yellow-900/50 text-yellow-300 rounded-sm">Medium Effort</span></div>
                            <p className="text-sm text-gray-400"><strong className="text-[#C5A059] block uppercase text-[10px] mb-1">Problem:</strong> Users struggle with generic results</p>
                            <p className="text-sm text-gray-400 mt-2"><strong className="text-[#C5A059] block uppercase text-[10px] mb-1">Impact:</strong> +20% session duration lift</p>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-3">Collaborative Search</h3>
                             <div className="flex gap-2 mt-2 mb-4"><span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-yellow-900/50 text-yellow-300 rounded-sm">Medium Impact</span><span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-red-900/50 text-red-300 rounded-sm">High Effort</span></div>
                            <p className="text-sm text-gray-400"><strong className="text-[#C5A059] block uppercase text-[10px] mb-1">Problem:</strong> Power users need shared spaces</p>
                            <p className="text-sm text-gray-400 mt-2"><strong className="text-[#C5A059] block uppercase text-[10px] mb-1">Impact:</strong> +15% conversion lift</p>
                         </motion.div>
                          <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-3">AI Research Assistant</h3>
                            <div className="flex flex-wrap gap-2 mt-2 mb-4"><span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-orange-900/50 text-orange-300 rounded-sm">Long-term</span><span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-green-900/50 text-green-300 rounded-sm">High Impact</span></div>
                            <p className="text-sm text-gray-400"><strong className="text-[#C5A059] block uppercase text-[10px] mb-1">Problem:</strong> Users need deeper synthesis</p>
                            <p className="text-sm text-gray-400 mt-2"><strong className="text-[#C5A059] block uppercase text-[10px] mb-1">Impact:</strong> +50% engagement uplift</p>
                         </motion.div>
                     </div>
                </motion.section>

                {/* Measuring Impact */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <ImpactHeaderIcon />
                        <h2 className="text-3xl font-bold mb-8 text-center uppercase tracking-widest">Measuring Impact</h2>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold mb-6 text-[#C5A059] uppercase tracking-widest">Primary Metrics</h3>
                            <ul className="space-y-1">
                                <li className="flex justify-between items-center py-3 border-b border-gray-800">
                                  <div>
                                    <p className="text-white font-semibold text-sm">User Acquisition</p>
                                    <p className="text-[10px] text-gray-500 uppercase font-bold mt-1">MAU growth • retention</p>
                                  </div>
                                  <span className="text-white font-mono text-sm px-2 py-1 bg-gray-700/50 rounded">25% monthly</span>
                                </li>
                                <li className="flex justify-between items-center py-3 border-b border-gray-800">
                                   <div>
                                    <p className="text-white font-semibold text-sm">Engagement</p>
                                    <p className="text-[10px] text-gray-500 uppercase font-bold mt-1">Session duration • queries</p>
                                  </div>
                                  <span className="text-white font-mono text-sm px-2 py-1 bg-gray-700/50 rounded">40% increase</span>
                                </li>
                                <li className="flex justify-between items-center py-3">
                                   <div>
                                    <p className="text-white font-semibold text-sm">Satisfaction</p>
                                    <p className="text-[10px] text-gray-500 uppercase font-bold mt-1">NPS score • ratings</p>
                                  </div>
                                  <span className="text-white font-mono text-sm px-2 py-1 bg-gray-700/50 rounded">NPS &gt; 50</span>
                                </li>
                            </ul>
                        </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold mb-6 text-[#C5A059] uppercase tracking-widest">Secondary Metrics</h3>
                             <ul className="space-y-1">
                                <li className="flex justify-between items-center py-3 border-b border-gray-800">
                                   <div>
                                    <p className="text-white font-semibold text-sm">Conversion</p>
                                    <p className="text-[10px] text-gray-500 uppercase font-bold mt-1">Free to paid rate</p>
                                  </div>
                                  <span className="text-white font-mono text-sm px-2 py-1 bg-gray-700/50 rounded">8% conversion</span>
                                </li>
                                <li className="flex justify-between items-center py-3 border-b border-gray-800">
                                   <div>
                                    <p className="text-white font-semibold text-sm">Efficiency</p>
                                    <p className="text-[10px] text-gray-500 uppercase font-bold mt-1">Resolution time • accuracy</p>
                                  </div>
                                  <span className="text-white font-mono text-sm px-2 py-1 bg-gray-700/50 rounded">&lt;2s response</span>
                                </li>
                                <li className="flex justify-between items-center py-3">
                                   <div>
                                    <p className="text-white font-semibold text-sm">Growth</p>
                                    <p className="text-[10px] text-gray-500 uppercase font-bold mt-1">Referral rate • organic</p>
                                  </div>
                                  <span className="text-white font-mono text-sm px-2 py-1 bg-gray-700/50 rounded">15% referral</span>
                                </li>
                            </ul>
                        </motion.div>
                     </div>
                 </motion.section>
                 
                {/* Considerations & Trade-offs */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <WarningTriangleIcon />
                        <h2 className="text-3xl font-bold text-center uppercase tracking-[0.2em] text-[#E6EAF2]">Considerations & Trade-offs</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {[
                             { 
                                 title: "Technical Constraints", 
                                 pitfall: "AI model training challenges", 
                                 mitigation: "Phased rollout with A/B testing" 
                             },
                             { 
                                 title: "Resource Limitations", 
                                 pitfall: "Complex development scope", 
                                 mitigation: "Prioritization matrix, phased releases" 
                             },
                             { 
                                 title: "User Adoption", 
                                 pitfall: "Change management resistance", 
                                 mitigation: "Onboarding + user education" 
                             },
                             { 
                                 title: "Market Risks", 
                                 pitfall: "Competitor response, market shifts", 
                                 mitigation: "Agile strategy + monitoring" 
                             }
                         ].map((item, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 shadow-xl">
                                <h3 className="font-bold text-xl text-[#C5A059] uppercase tracking-widest mb-6">{item.title}</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-red-500 mb-1">Potential Pitfall</p>
                                        <p className="text-sm text-gray-300">{item.pitfall}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-green-500 mb-1">Mitigation</p>
                                        <p className="text-sm text-gray-300">{item.mitigation}</p>
                                    </div>
                                </div>
                            </motion.div>
                         ))}
                    </div>
                </motion.section>

                {/* Explore Full Case Study */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
                    className="mt-20 text-center bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-2xl"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <PitchHeaderIcon />
                        <h2 className="text-2xl font-bold uppercase tracking-widest">Explore the Full Case Study</h2>
                    </div>
                    <p className="mt-2 text-gray-400 max-w-2xl mx-auto leading-relaxed">For a complete walkthrough of the process, research, and high-fidelity designs, view the full presentation.</p>
                    <a href="https://pitch.com/v/final-perplexity-case-study-cohort-28-group-1-gyxttk" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 px-10 py-4 text-xs font-bold uppercase tracking-widest text-[#0C0F1D] bg-[#C5A059] rounded-sm transition-transform duration-300 hover:scale-105 hover:neon-glow">
                        View on Pitch.com
                    </a>
                </motion.section>

                 {/* Final CTA */}
                <motion.section
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <CTAHeaderIcon />
                        <h2 className="text-3xl font-extrabold tracking-tight uppercase tracking-widest text-[#E6EAF2]">Have a similar challenge?</h2>
                    </div>
                    <p className="mt-6 max-w-2xl mx-auto text-[#A8B0C2] leading-relaxed">I’m passionate about tackling complex problems. If you have a project in mind, let’s discuss how we can create something impactful together.</p>
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button onClick={() => navigateTo('contact')} className="w-full sm:w-auto px-10 py-4 text-sm font-bold tracking-widest uppercase text-[#0C0F1D] bg-[#C5A059] rounded-sm transition-all duration-300 hover:scale-105 hover:neon-glow">
                           Get In Touch
                        </button>
                        <button onClick={() => navigateTo('projects')} className="w-full sm:w-auto px-10 py-4 text-sm font-bold tracking-widest uppercase text-[#C5A059] border-2 border-[#C5A059]/40 rounded-sm transition-all duration-300 hover:scale-105 hover:border-[#C5A059] hover:neon-text">
                           View My Projects
                        </button>
                    </div>
                </motion.section>
            </div>
         </div>
    );
};

export default PerplexityCaseStudy;
