
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Icons
const SummaryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const SkillsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
const CategoryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#88FF55] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
const DurationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#88FF55] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ToolsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#88FF55] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const WireframeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>;
const MethodologyOverviewIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>;
const OutcomeRecommendationsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>;
const PitchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>;
const PlayIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const PrototypeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;

// Icons for My Approach section
const ApproachIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 01-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 013.09-3.09L12 5.25l2.846.813a4.5 4.5 0 013.09 3.09L21.75 12l-2.846.813a4.5 4.5 0 01-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.25 21.75l-.648-1.178a3.375 3.375 0 00-2.456-2.456L12 17.25l1.178-.648a3.375 3.375 0 002.456-2.456L16.25 13.5l.648 1.178a3.375 3.375 0 002.456 2.456L20.25 18l-1.178.648a3.375 3.375 0 00-2.456 2.456z" /></svg>;
const UnderstandingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const SegmentationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const JourneyMapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>;
const AarrrIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
const ProposedFrameworkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a17.953 17.953 0 01-2.63 12.62M14.37 15.59a17.953 17.953 0 01-12.62 2.63m12.62-2.63a17.953 17.953 0 01-2.63-12.62m2.63 12.62a6 6 0 01-7.38-5.84h4.82m2.56-5.84a17.953 17.953 0 0112.62-2.63M15.59 14.37a17.953 17.953 0 012.63-12.62m-2.63 12.62a6 6 0 015.84-7.38v4.82m-5.84 2.56a17.953 17.953 0 012.63 12.62" /></svg>;
const GrowthSnapshotIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;


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
        title: "Understanding Naukri & Market Position", 
        subtitle: "Platform analysis and competitive landscape",
        body: (
            <div className="space-y-2">
                <p>Conducted comprehensive analysis of Naukri.com's market position as India's leading job portal. Examined demographics of both recruiter and job seeker segments. Analyzed competitive landscape including LinkedIn, Indeed, Monster, and emerging players.</p>
                <p>Identified Naukri's key strengths: extensive resume database, strong brand recognition in India, established recruiter relationships. Recognized challenges: increasing competition, evolving user expectations, need for better conversion optimization.</p>
                <p>Understanding revealed dual-sided marketplace dynamics requiring balanced growth strategy serving both supply (job seekers) and demand (recruiters) sides effectively.</p>
            </div>
        )
    },
    { 
        icon: <SegmentationIcon />,
        title: "User Segmentation Analysis", 
        subtitle: "Deep dive into B2B and B2C personas",
        body: (
            <div className="space-y-2">
                <p>Segmented users into detailed personas across both sides of marketplace:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong className="text-gray-300">B2B Segment - Recruiters:</strong> Startup Recruiters (Small teams, budget-conscious, need quick hiring), SME Recruiters (Growing companies, moderate budgets, volume hiring), Enterprise Recruiters (Large organizations, complex needs, employer branding focus).</li>
                    <li><strong className="text-gray-300">B2C Segment - Job Seekers:</strong> Freshers (Recent graduates, entry-level positions, high volume applications), Experienced Professionals (3-10 years experience, selective applications, quality focus), Freelancers/Consultants (Project-based work, portfolio showcase needs).</li>
                </ul>
                <p>For each persona, mapped specific pain points, workflows, device preferences, and monetization potential.</p>
            </div>
        )
    },
    { 
        icon: <JourneyMapIcon />,
        title: "Jobs To Be Done & Journey Mapping", 
        subtitle: "Understanding core user needs and journey friction",
        body: (
            <div className="space-y-2">
                 <p>Identified core JTBD for each segment:</p>
                 <ul className="list-disc list-inside space-y-1">
                    <li><strong className="text-gray-300">Recruiters' JTBD:</strong> "When I need to hire quality candidates quickly, I want to access relevant resumes and post visible job listings, so I can fill positions efficiently without wasting time or budget."</li>
                    <li><strong className="text-gray-300">Job Seekers' JTBD:</strong> "When I'm looking for career opportunities, I want to discover relevant jobs and showcase my profile effectively, so I can land interviews and advance my career."</li>
                </ul>
                <p>Mapped complete user journey for both segments identifying friction points:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Acquisition: Discovery and first visit challenges</li>
                    <li>Activation: Onboarding and first value perception</li>
                    <li>Retention: Reasons users return or abandon platform</li>
                    <li>Referral: What drives word-of-mouth and sharing</li>
                    <li>Revenue: Payment friction and perceived value gaps</li>
                </ul>
            </div>
        )
    },
    { 
        icon: <AarrrIcon />,
        title: "Current AARRR Analysis & Challenges", 
        subtitle: "Identifying gaps in existing growth funnel",
        body: (
             <div className="space-y-2">
                <p>Analyzed current AARRR framework performance revealing several challenges:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong className="text-gray-300">Acquisition Challenges:</strong> High organic traffic but low conversion to registration, Paid acquisition costs increasing with competition, Limited partnerships for co-marketing opportunities.</li>
                    <li><strong className="text-gray-300">Activation Challenges:</strong> Complex onboarding for recruiters causing drop-offs, Job seekers not completing profiles reducing match quality, Unclear value proposition in first experience.</li>
                    <li><strong className="text-gray-300">Retention Challenges:</strong> Low return visit rate after initial job application, Recruiters posting once then abandoning platform, No compelling reason to return daily or weekly.</li>
                    <li><strong className="text-gray-300">Referral Challenges:</strong> Minimal viral mechanisms built into product, No incentives for users to share or refer others, Limited social proof and community features.</li>
                    <li><strong className="text-gray-300">Revenue Challenges:</strong> Flat pricing limiting addressable market, Under-monetization of job seeker segment, Missed cross-sell and upsell opportunities.</li>
                </ul>
            </div>
        )
    },
    { 
        icon: <ProposedFrameworkIcon />,
        title: "Proposed AARRR Framework & Solutions", 
        subtitle: "Comprehensive growth strategy across funnel",
        body: (
            <div className="space-y-2">
                <p>Developed enhanced AARRR framework with specific tactics for each stage, detailed in subsequent sections. Prioritized solutions using problem prioritization matrix based on impact vs effort analysis.</p>
                <p>Created wireframes for key improvements including redesigned onboarding, notification systems, referral mechanisms, and new revenue features. Estimated revenue impact and implementation timeline for each initiative.</p>
            </div>
        )
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
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

interface NaukriCaseStudyProps {
    navigateTo: (page: string) => void;
}

const NaukriCaseStudy: React.FC<NaukriCaseStudyProps> = ({ navigateTo }) => {
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
                            <span className="text-white"> Product Growth Strategy – Naukri.com</span>
                        </div>
                         <a onClick={() => navigateTo('projects')} className="cursor-pointer px-4 py-2 text-sm font-semibold text-gray-200 border border-gray-600 rounded-lg transition-all duration-300 hover:border-[#88FF55] hover:neon-text">
                            &larr; Back to Projects
                        </a>
                    </div>
                     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#E6EAF2] text-center mt-12 mb-12">
                        Product Growth Strategy – Naukri.com
                    </h1>
                     <div className="max-w-xl mx-auto bg-[#111623] p-8 rounded-2xl border border-gray-800 shadow-lg text-center">
                        <h2 className="text-3xl font-bold">Revenue Optimization & User Engagement Improvement</h2>
                        <p className="text-gray-400 mt-2">AARRR-led growth plan across B2B and B2C segments</p>
                    </div>
                </motion.div>

                {/* 2. Project Details */}
                 <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                     <h2 className="text-3xl font-bold mb-8 text-center">Project Details</h2>
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                         <motion.div variants={itemVariants} className="lg:col-span-2 bg-[#111623] p-8 rounded-xl border border-gray-800">
                            <div className="flex items-center gap-3 mb-4"><SummaryIcon/> <h3 className="font-semibold text-lg">Summary</h3></div>
                            <p className="text-gray-400 mb-6">Created comprehensive growth strategy to boost Naukri.com’s revenue using the AARRR framework. Analyzed complete product journey from acquisition to monetization, identifying tactical improvements at each stage to increase total revenue both directly and indirectly.</p>
                            <div className="flex items-center gap-3 mb-4"><SkillsIcon/> <h3 className="font-semibold text-lg">Skills Demonstrated</h3></div>
                            <div className="flex flex-wrap gap-2">
                                {["AARRR framework", "Customer Journey Map", "Jobs To Be Done", "Market Research", "Personas", "Problem Prioritisation Matrix", "Problem Solving", "Product Growth", "Research Methodology", "Solution Matrix", "User Insights", "User Interviews", "User Problems", "User Research", "Wireframing"].map(s => <span key={s} className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full">{s}</span>)}
                            </div>
                         </motion.div>
                         <div className="space-y-6">
                            <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 flex items-center"><CategoryIcon /> <div><h4 className="font-semibold">Category</h4><p className="text-gray-400">Academic</p></div></motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 flex items-center"><DurationIcon /> <div><h4 className="font-semibold">Duration</h4><p className="text-gray-400">2 weeks</p></div></motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 flex items-center"><ToolsIcon /> <div><h4 className="font-semibold">Tools Used</h4><p className="text-gray-400">Pitch · Google Forms · Figma</p></div></motion.div>
                         </div>
                     </div>
                 </motion.section>

                {/* 3. Project Challenge */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">Project Challenge</h2>
                    <div className="space-y-6">
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                             <h3 className="font-semibold text-lg text-[#88FF55]">Main Question</h3>
                             <p className="mt-2 text-gray-300 text-xl italic">“How can we develop a comprehensive growth strategy for Naukri.com that enhances revenue across all user segments while improving the overall user experience?”</p>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                             <h3 className="font-semibold text-lg text-[#88FF55]">Brief Description</h3>
                             <p className="mt-2 text-gray-400">Sprint focused on scaling revenue for India’s leading job portal. Analyzed B2B (recruiters) and B2C (job seekers) segments to identify growth opportunities across the entire AARRR funnel. Created actionable strategy combining product-led growth levers, deep user segmentation, and real-time analytics.</p>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                             <h3 className="font-semibold text-lg text-[#88FF55]">Business Context</h3>
                             <ul className="list-disc list-inside mt-2 text-gray-400 space-y-2">
                                <li><strong>Recruiters (Startups, SMEs, Enterprises):</strong> seeking quality candidates</li>
                                <li><strong>Job Seekers (Freshers, Experienced, Freelancers):</strong> looking for opportunities</li>
                                <li><strong>Challenge:</strong> optimize growth across both segments while maintaining platform quality and satisfaction</li>
                             </ul>
                         </motion.div>
                          <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                             <h3 className="font-semibold text-lg text-[#88FF55]">Key Growth Goals</h3>
                             <ul className="list-disc list-inside mt-2 text-gray-400 space-y-2">
                                <li>Increase conversion to paid plans for recruiters</li>
                                <li>Boost job listings and resume database monetization</li>
                                <li>Improve user lifetime value via retention loops</li>
                                <li>Create sustainable revenue from both segments</li>
                             </ul>
                         </motion.div>
                    </div>
                </motion.section>

                {/* 4. My Approach */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <ApproachIcon />
                        <h2 className="text-3xl font-bold">My Approach</h2>
                    </div>
                    <div className="space-y-4">
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
                            <h3 className="text-xl font-bold mb-4 text-[#88FF55]">User Insights</h3>
                            <ul className="list-disc list-inside space-y-3 text-gray-400 text-sm">
                                <li><strong>Recruiter Behaviors:</strong> judge quality by first 10 resumes; pricing tied to cost-per-hire; urgency creates willingness to pay</li>
                                <li><strong>Job Seeker Behaviors:</strong> frequent visits during search; engagement drops after employment; profile completion drives success</li>
                                <li><strong>Pain Point Patterns:</strong> poor match quality; irrelevant recommendations; privacy and legitimacy concerns</li>
                            </ul>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 h-full">
                            <h3 className="text-xl font-bold mb-4 text-[#88FF55]">Competitive Insights</h3>
                             <ul className="list-disc list-inside space-y-3 text-gray-400 text-sm">
                                <li><strong>LinkedIn Strengths:</strong> network effects, branding, premium monetization; weak for SMEs due to cost</li>
                                <li><strong>Indeed/Monster Approach:</strong> aggregation scale + SEO; commoditized experience</li>
                                <li><strong>Naukri’s Position:</strong> deep India penetration, trusted brand, large resume DB; dated UI/UX, limited social features, under-monetized job seekers</li>
                            </ul>
                         </motion.div>
                          <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 h-full">
                            <h3 className="text-xl font-bold mb-4 text-[#88FF55]">Growth Opportunities</h3>
                            <ul className="list-disc list-inside space-y-3 text-gray-400 text-sm">
                                <li><strong>Product-Led Growth Potential:</strong> self-serve onboarding, viral features, data network effects</li>
                                <li><strong>Revenue Expansion:</strong> resume services, career coaching, enterprise value capture</li>
                                <li><strong>Market Expansion:</strong> remote work, freelancer segment, tier-2/3 city penetration, international demand</li>
                            </ul>
                         </motion.div>
                    </div>
                </motion.section>
                
                 {/* 6. AARRR Framework Breakdown */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-24">
                    <h2 className="text-3xl font-bold mb-8 text-center">AARRR Framework Breakdown</h2>
                    <div className="space-y-8">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                            <h3 className="text-2xl font-bold text-white mb-6">Acquisition - Bring the Right Users In</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-[#88FF55]">SEO Optimization</h4>
                                    <p className="text-gray-400 mt-1 text-sm">Rank high on job-specific long-tail keywords. Optimize job listings for search engine visibility. Create content hub for career advice and industry insights. Target "jobs in [city]" and "[role] jobs" search terms.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#88FF55]">Strategic Partnerships</h4>
                                    <p className="text-gray-400 mt-1 text-sm">Partner with educational platforms for fresher recruitment. Collaborate with certification providers for co-marketing. Integrate with university career services. Work with industry associations for specialized hiring.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#88FF55]">Paid Acquisition</h4>
                                    <p className="text-gray-400 mt-1 text-sm">Targeted LinkedIn ads for recruiter acquisition. Google ads for job seeker acquisition by role and location. Retargeting campaigns for abandoned registrations. Influencer partnerships with career coaches.</p>
                                </div>
                                <div className="border-t border-gray-700 pt-4 mt-4">
                                    <h4 className="font-semibold text-[#88FF55]">Expected Impact</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-1 mt-2 text-sm">
                                        <li>25% increase in organic traffic through SEO</li>
                                        <li>15% reduction in paid acquisition costs through partnerships</li>
                                        <li>30% improvement in acquisition conversion rate</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                            <h3 className="text-2xl font-bold text-white mb-6">Activation - Deliver "Aha!" Moments</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-[#88FF55]">Recruiter Activation</h4>
                                    <p className="text-gray-400 mt-1 text-sm">Redesigned onboarding to post first job in under 3 minutes. Guided walkthrough showing resume database quality. Immediate access to relevant candidate profiles. Quick success: show interested candidates within 24 hours.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#88FF55]">Job Seeker Activation</h4>
                                    <p className="text-gray-400 mt-1 text-sm">Progressive profile completion with milestone rewards. Guided walkthrough highlighting key features. Personalized job recommendations from first login. One-click application for relevant opportunities.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#88FF55]">Personalization Engine</h4>
                                    <p className="text-gray-400 mt-1 text-sm">Behavioral data tracking for relevant job matching. Skill-based algorithms for better candidate-job fit. Industry and experience level considerations. Location and salary preference matching.</p>
                                </div>
                                <div className="border-t border-gray-700 pt-4 mt-4">
                                    <h4 className="font-semibold text-[#88FF55]">Expected Impact</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-1 mt-2 text-sm">
                                        <li>15% increase in activation rate (completing key first action)</li>
                                        <li>40% improvement in profile completion rates</li>
                                        <li>25% increase in first-week engagement</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                            <h3 className="text-2xl font-bold text-white mb-6">Retention - Keep Them Coming Back</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-[#88FF55]">Recruiter Retention</h4>
                                    <p className="text-gray-400 mt-1 text-sm">Weekly insights dashboard (views, click-through rate, applicant quality). Competitive intelligence on similar job postings. Recommendations for improving job visibility. Alerts when qualified candidates join platform.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#88FF55]">Job Seeker Retention</h4>
                                    <p className="text-gray-400 mt-1 text-sm">Smart job alerts based on profile and behavior. Notification nudges for relevant new postings. Weekly digest of matched opportunities. Profile view notifications showing recruiter interest.</p>
                                </div>
                                <div className="border-t border-gray-700 pt-4 mt-4">
                                    <h4 className="font-semibold text-[#88FF55]">Expected Impact</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-1 mt-2 text-sm">
                                        <li>20% increase in weekly active users</li>
                                        <li>35% improvement in 30-day retention rate</li>
                                        <li>50% increase in push notification engagement</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                            <h3 className="text-2xl font-bold text-white mb-6">Referral - Turn Users into Advocates</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-[#88FF55]">Job Seeker Referral Program</h4>
                                    <p className="text-gray-400 mt-1 text-sm">Credits for premium features when referring friends. One-click resume sharing with network. Social proof showing friends' success stories. Community features for peer recommendations.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#88FF55]">Recruiter Referral Program</h4>
                                    <p className="text-gray-400 mt-1 text-sm">"Refer & Hire" campaigns with visibility boost credits. Incentives for referring other hiring managers. Co-branded job postings for sharing. Testimonials and case studies program.</p>
                                </div>
                                 <div>
                                    <h4 className="font-semibold text-[#88FF55]">Viral Mechanisms</h4>
                                    <p className="text-gray-400 mt-1 text-sm">Easy sharing of interesting job listings. Public profiles for personal branding. Success stories and placement announcements. Company review and rating system.</p>
                                </div>
                                <div className="border-t border-gray-700 pt-4 mt-4">
                                    <h4 className="font-semibold text-[#88FF55]">Expected Impact</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-1 mt-2 text-sm">
                                        <li>10% of new users from referrals (from current 3%)</li>
                                        <li>25% increase in job listing shares</li>
                                        <li>Viral coefficient improvement from 0.15 to 0.35</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                            <h3 className="text-2xl font-bold text-white mb-6">Revenue - Monetize the Value</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-[#88FF55]">Recruiter Monetization</h4>
                                    <p className="text-gray-300 font-medium mt-2 text-sm">New Pricing Tiers:</p>
                                    <ul className="list-disc list-inside text-gray-400 text-sm">
                                        <li>Basic: Free job posting with limited visibility</li>
                                        <li>Standard: ₹15,000/month - enhanced visibility and 50 resume views</li>
                                        <li>Professional: ₹35,000/month - priority listing and 150 resume views</li>
                                        <li>Enterprise: Custom pricing - dedicated support and unlimited access</li>
                                    </ul>
                                     <p className="text-gray-300 font-medium mt-2 text-sm">Value-Based Features:</p>
                                     <ul className="list-disc list-inside text-gray-400 text-sm">
                                        <li>Premium job listings with highlighted placement</li>
                                        <li>Featured employer branding on candidate pages</li>
                                        <li>Access to resume database search</li>
                                        <li>Advanced analytics and reporting</li>
                                        <li>Applicant tracking system integration</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#88FF55]">Job Seeker Monetization</h4>
                                    <p className="text-gray-300 font-medium mt-2 text-sm">Freemium Model:</p>
                                     <ul className="list-disc list-inside text-gray-400 text-sm">
                                        <li>Free: Basic profile and job applications</li>
                                        <li>Premium (₹999/month): Profile boost, priority applications, recruiter insights</li>
                                        <li>Premium Plus (₹1,999/month): Resume services, career coaching, skill assessments</li>
                                    </ul>
                                     <p className="text-gray-300 font-medium mt-2 text-sm">Additional Revenue Streams:</p>
                                     <ul className="list-disc list-inside text-gray-400 text-sm">
                                        <li>Resume writing and optimization services (₹2,500-5,000)</li>
                                        <li>Career coaching and interview preparation (₹5,000-10,000 per session)</li>
                                        <li>Skill assessment and certification programs (₹1,000-3,000)</li>
                                        <li>Online workshops and webinars (₹500-2,000)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#88FF55]">Cross-Selling Opportunities</h4>
                                    <p className="text-gray-400 mt-1 text-sm">Offer ad slots to education companies. Visibility boosts for urgent hiring. Background verification services. Skill training partnerships with revenue share.</p>
                                </div>
                                <div className="border-t border-gray-700 pt-4 mt-4">
                                    <h4 className="font-semibold text-[#88FF55]">Expected Impact</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-1 mt-2 text-sm">
                                        <li>20% revenue uplift through upselling and cross-selling resume services</li>
                                        <li>30% of free users converting to some paid feature</li>
                                        <li>50% increase in average revenue per recruiter</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* 7. Growth Strategy Snapshot */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-24">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <GrowthSnapshotIcon />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E6EAF2]">Growth Strategy Snapshot</h2>
                    </div>
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                                <h3 className="text-2xl font-bold text-white mb-6">User Segmentation Summary</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-[#88FF55]">Recruiters</h4>
                                        <ul className="list-disc list-inside text-gray-400 space-y-1 mt-2 text-sm">
                                            <li>Startups: Price-sensitive, need quick results, volume &lt; 10 hires/year</li>
                                            <li>SMEs: Moderate budgets, 10-50 hires/year, growing employer brand needs</li>
                                            <li>Enterprises: Large budgets, 100+ hires/year, complex requirements, long-term partnerships</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#88FF55]">Job Seekers</h4>
                                        <ul className="list-disc list-inside text-gray-400 space-y-1 mt-2 text-sm">
                                            <li>Freshers: High volume, entry-level, education-based matching</li>
                                            <li>Experienced: Quality-focused, 3-15 years, skills and projects matter</li>
                                            <li>Freelancers: Project-based, portfolio showcase, flexible arrangements</li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                                <h3 className="text-2xl font-bold text-white mb-6">Key Strategic Goals</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-[#88FF55]">Conversion Optimization</h4>
                                        <p className="text-gray-400 mt-1 text-sm">Increase free-to-paid conversion for recruiters from current 12% to 20%. Improve job seeker profile completion from 35% to 65%. Drive premium feature adoption through value demonstration.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#88FF55]">Listing Growth</h4>
                                        <p className="text-gray-400 mt-1 text-sm">Boost monthly job postings by 40% through easier posting and better value. Increase resume database by 25% through better activation. Improve match quality driving more applications per listing.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#88FF55]">LTV Enhancement</h4>
                                        <p className="text-gray-400 mt-1 text-sm">Improve 12-month retention from 45% to 60% through retention loops. Increase frequency of recruiter returns through insights and alerts. Drive repeat purchases through subscription models.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                           <h3 className="text-2xl font-bold text-white mb-6">Estimated Business Impact</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-semibold text-[#88FF55]">Revenue Growth</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-1 mt-2 text-sm">
                                        <li>+20% from upselling and cross-selling resume services</li>
                                        <li>+15% from improved activation converting free users</li>
                                        <li>+10% from referral program reducing acquisition costs</li>
                                        <li>+25% from new job seeker monetization streams</li>
                                    </ul>
                                    <p className="text-gray-400 mt-2 text-sm">Total estimated revenue uplift: 40-50% within 12 months</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#88FF55]">User Metrics</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-1 mt-2 text-sm">
                                        <li>+15% in activation rates through improved onboarding</li>
                                        <li>+20% in retention through engagement loops</li>
                                        <li>+10% in referrals through incentive programs</li>
                                        <li>+30% in paid conversion through value-based pricing</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                             <h3 className="text-2xl font-bold text-white mb-6 text-center">Strategic Pillars</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                                <div>
                                    <h4 className="font-semibold text-[#88FF55]">Product-Led Growth</h4>
                                    <p className="text-gray-400 mt-1 text-sm">Self-serve models reducing sales dependency. Freemium tiers expanding addressable market. Viral mechanisms driving organic acquisition. Data network effects improving over time.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#88FF55]">User Segmentation</h4>
                                    <p className="text-gray-400 mt-1 text-sm">Tailored experiences for each persona. Pricing aligned with segment willingness-to-pay. Features prioritized by segment value. Marketing targeted by segment channels.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#88FF55]">Real-Time Analytics</h4>
                                    <p className="text-gray-400 mt-1 text-sm">Performance dashboards for decision-making. A/B testing culture for optimization. Cohort analysis tracking retention. Funnel metrics identifying drop-off points.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* 8. Problem Prioritization Matrix */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                     <h2 className="text-3xl font-bold mb-8 text-center">Problem Prioritization Matrix</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-green-500/30"><h3 className="font-bold text-xl text-green-400 mb-4">High Impact, Low Effort (Quick Wins)</h3><ul className="list-disc list-inside space-y-2 text-gray-400"><li>Improved onboarding flow</li><li>Job alert optimization</li><li>Profile completion nudges</li></ul></motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-blue-500/30"><h3 className="font-bold text-xl text-blue-400 mb-4">High Impact, High Effort (Strategic Bets)</h3><ul className="list-disc list-inside space-y-2 text-gray-400"><li>AI-powered matching engine</li><li>Resume services platform</li><li>Integrated ATS for recruiters</li></ul></motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-yellow-500/30"><h3 className="font-bold text-xl text-yellow-400 mb-4">Low Impact, Low Effort (Fill-ins)</h3><ul className="list-disc list-inside space-y-2 text-gray-400"><li>UI refresh/mobile optimization</li><li>Basic profile options</li><li>Email template improvements</li><li>Minor enhancements</li></ul></motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-red-500/30"><h3 className="font-bold text-xl text-red-400 mb-4">Low Impact, High Effort (Avoid)</h3><ul className="list-disc list-inside space-y-2 text-gray-400"><li>Complex social networking</li><li>Video interviewing platform</li><li>Full HRMS suite</li><li>Geography expansion without PMF</li></ul></motion.div>
                     </div>
                </motion.section>

                {/* 9. Solution Impact Analysis */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">Solution Impact Analysis</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800"><h3 className="font-semibold text-lg mb-2 text-[#88FF55]">Tiered Pricing for Recruiters</h3><p className="text-sm text-gray-400"><strong>Current Problem:</strong> flat pricing excludes SMEs/startups</p><p className="text-sm text-gray-400 mt-1"><strong>Solution:</strong> three-tier model with feature differentiation</p><p className="text-sm text-gray-400 mt-1"><strong>Revenue Impact:</strong> +₹300Cr opportunity (SME + Startup + Enterprise upsells)</p><p className="text-sm text-gray-400 mt-1"><strong>Implementation:</strong> 4 weeks</p></motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800"><h3 className="font-semibold text-lg mb-2 text-[#88FF55]">Job Seeker Premium Subscriptions</h3><p className="text-sm text-gray-400"><strong>Problem:</strong> under-monetized seeker segment</p><p className="text-sm text-gray-400 mt-1"><strong>Solution:</strong> freemium + ₹999 / ₹1,999 tiers</p><p className="text-sm text-gray-400 mt-1"><strong>Revenue Impact:</strong> target 2% of 50M actives; +₹1,200Cr potential incl. resume services</p><p className="text-sm text-gray-400 mt-1"><strong>Implementation:</strong> 8 weeks</p></motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800"><h3 className="font-semibold text-lg mb-2 text-[#88FF55]">Retention & Engagement Loops</h3><p className="text-sm text-gray-400"><strong>Problem:</strong> low return visits after initial activity</p><p className="text-sm text-gray-400 mt-1"><strong>Solution:</strong> smart alerts, insights dashboards, gamification, digests</p><p className="text-sm text-gray-400 mt-1"><strong>Revenue Impact:</strong> +20% retention → +15% LTV; est. +₹400Cr</p><p className="text-sm text-gray-400 mt-1"><strong>Implementation:</strong> 6 weeks</p></motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800"><h3 className="font-semibold text-lg mb-2 text-[#88FF55]">Referral Programs</h3><p className="text-sm text-gray-400"><strong>Problem:</strong> minimal organic growth; high CAC</p><p className="text-sm text-gray-400 mt-1"><strong>Solution:</strong> incentives for both segments; tracking + credits</p><p className="text-sm text-gray-400 mt-1"><strong>Revenue Impact:</strong> 10% new users via referrals; 30% CAC reduction</p><p className="text-sm text-gray-400 mt-1"><strong>Implementation:</strong> 4 weeks</p></motion.div>
                     </div>
                </motion.section>

                {/* 10. Wireframes & Prototypes */}
                 <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                     <div className="flex items-center justify-center gap-4 mb-8">
                        <WireframeIcon />
                        <h2 className="text-3xl font-bold">Wireframes & Prototypes</h2>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 text-center"><h3 className="font-semibold text-lg">Redesigned Recruiter<br />Onboarding</h3></motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 text-center"><h3 className="font-semibold text-lg">Job Seeker Profile<br />Completion</h3></motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 text-center"><h3 className="font-semibold text-lg">Smart Notification<br />System</h3></motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 text-center"><h3 className="font-semibold text-lg">Premium Feature<br />Showcase</h3></motion.div>
                     </div>
                 </motion.section>

                {/* 11. Methodology Overview */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-24">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <MethodologyOverviewIcon />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E6EAF2]">Methodology Overview</h2>
                    </div>
                    <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div>
                                <h3 className="font-semibold text-lg text-white mb-4">Complete Strategic Process</h3>
                                <p className="text-gray-400 text-sm">About Naukri → Understanding Demographics → Competitive Analysis → User Segment Analysis (B2B & B2C) → Analyzing User Personas → User Journey Mapping → Jobs To Be Done Framework → Current AARRR Analysis & Challenges → Proposed AARRR Framework → Problem Prioritization Matrix → Solutions & Impact Analysis → Revenue Impact Projections → Wireframe Development</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-white mb-4">Research Methods</h3>
                                <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                                    <li>Competitive benchmarking against LinkedIn, Indeed, Monster</li>
                                    <li>User interviews with 20 recruiters and 30 job seekers</li>
                                    <li>Survey analysis from 500+ respondents via Google Forms</li>
                                    <li>Behavioral data analysis from platform analytics</li>
                                    <li>Market sizing and revenue opportunity assessment</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-white mb-4">Framework Application</h3>
                                <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                                    <li>AARRR funnel for growth strategy structure</li>
                                    <li>Jobs To Be Done for understanding user motivations</li>
                                    <li>Problem prioritization matrix for solution selection</li>
                                    <li>Impact vs Effort analysis for roadmap prioritization</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* 12. Outcome & Recommendations */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-24">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <OutcomeRecommendationsIcon />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E6EAF2]">Outcome & Recommendations</h2>
                    </div>
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                                <h3 className="text-xl font-bold text-white mb-4">Phase 1 (0-3 months)</h3>
                                <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                                    <li>Implement tiered pricing for recruiters</li>
                                    <li>Launch improved onboarding flows</li>
                                    <li>Deploy smart notification system</li>
                                    <li>Start basic referral program</li>
                                </ul>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                                <h3 className="text-xl font-bold text-white mb-4">Phase 2 (3-6 months)</h3>
                                <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                                    <li>Introduce job seeker premium subscriptions</li>
                                    <li>Build retention loops and gamification</li>
                                    <li>Develop insights dashboards</li>
                                    <li>Enhance matching algorithm</li>
                                </ul>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                                <h3 className="text-xl font-bold text-white mb-4">Phase 3 (6-12 months)</h3>
                                <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                                    <li>Launch resume services platform</li>
                                    <li>Expand to adjacent revenue streams</li>
                                    <li>Build integrated ATS features</li>
                                    <li>Scale referral and viral mechanisms</li>
                                </ul>
                            </motion.div>
                        </div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                            <h3 className="text-2xl font-bold text-white mb-6">Expected Cumulative Impact</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-semibold text-[#88FF55]">Year 1 Projections</h4>
                                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mt-2">
                                        <li>Revenue growth: +40-50% (₹2,000Cr+ incremental)</li>
                                        <li>User growth: +35% active users</li>
                                        <li>Retention improvement: +25%</li>
                                        <li>Paid conversion: +60%</li>
                                        <li>CAC reduction: -30%</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#88FF55]">Long-term Strategic Value</h4>
                                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mt-2">
                                        <li>Stronger two-sided marketplace with better liquidity</li>
                                        <li>Multiple revenue streams reducing dependency</li>
                                        <li>Product-led growth reducing sales costs</li>
                                        <li>Data network effects creating moat</li>
                                        <li>Platform stickiness through integrated workflows</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* 13. View Full Strategy & Prototype */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
                    className="mt-24 text-center bg-[#111623] p-10 rounded-xl border border-gray-800"
                >
                    <h2 className="text-3xl font-bold">View Full Strategy & Prototype</h2>
                    <p className="mt-4 text-gray-400 max-w-3xl mx-auto">Access the complete growth strategy presentation with detailed analysis, AARRR breakdown, wireframes, and financial projections.</p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="https://pitch.com/v/naukri-product-growth-assignment-jbkmju/c672848a-53d6-40db-b81d-85615e03eeff" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-base font-semibold text-[#0C0F1D] bg-[#88FF55] rounded-lg transition-transform duration-300 hover:scale-105 hover:neon-glow">
                            <PitchIcon /> View on Pitch.com
                        </a>
                        <a href="https://drive.google.com/file/d/18JwYErgXT_v6utAOi281WEFHgdn_lSow/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-base font-semibold text-gray-200 border-2 border-gray-600 rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#88FF55] hover:neon-text">
                            <PlayIcon /> View Video
                        </a>
                        <a href="https://www.figma.com/proto/78cW3MZKMawzjxv3aehI7L/Untitled?node-id=1-2&t=9lRTWa4q5ORBKNol-1&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-base font-semibold text-gray-200 border-2 border-gray-600 rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#88FF55] hover:neon-text">
                           <PrototypeIcon /> View Prototype
                        </a>
                    </div>
                    <div className="mt-8 flex flex-wrap justify-center gap-2">
                        {["Interactive wireframe prototypes", "Video walkthrough of proposed changes", "Detailed user journey maps", "Revenue model calculations", "Implementation roadmap"].map(tag => (
                            <span key={tag} className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full">{tag}</span>
                        ))}
                    </div>
                    <p className="mt-6 text-sm text-gray-500">For questions or feedback, contact: <a href="mailto:shubhasree.sarkar3103@gmail.com" className="hover:text-[#88FF55]">shubhasree.sarkar3103@gmail.com</a></p>
                </motion.section>

                 {/* 14. Final CTA */}
                <motion.section
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-extrabold tracking-tight">Have a similar growth challenge?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-400">I design pragmatic, metric-driven growth systems. If you have a project in mind, let’s create measurable impact.</p>
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

export default NaukriCaseStudy;
