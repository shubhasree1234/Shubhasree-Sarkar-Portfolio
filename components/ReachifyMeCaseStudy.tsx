import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Icons
const SummaryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const SkillsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
const CategoryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#88FF55] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
const DurationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#88FF55] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ToolsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#88FF55] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const TrophyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>;
const SwotIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const RecommendationsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>;
const ConsiderationsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;

// Icons for GTM Framework section
const GtmFrameworkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
const UnderstandingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const SegmentationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const JourneyMapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>;
const StrategyDevIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;


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
    opacity: 1,
    y: 0,
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
                         <a onClick={() => navigateTo('projects')} className="cursor-pointer px-4 py-2 text-sm font-semibold text-gray-200 border border-gray-600 rounded-lg transition-all duration-300 hover:border-[#88FF55] hover:neon-text">
                            &larr; Back to Projects
                        </a>
                    </div>
                     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#E6EAF2] text-center mt-12 mb-12">
                        GTM Strategy – ReachifyMe User Acquisition
                    </h1>
                     <div className="max-w-md mx-auto bg-[#111623] p-8 rounded-2xl border border-gray-800 shadow-lg text-center">
                        <div className="text-5xl mb-4 inline-block">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                        </div>
                        <h2 className="text-3xl font-bold">ReachifyMe</h2>
                        <p className="text-gray-400 mt-2">Grow & Monetize Your Personal Brand</p>
                    </div>
                </motion.div>

                {/* 2. Project Details */}
                 <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                     <h2 className="text-3xl font-bold mb-8 text-center">Project Details</h2>
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                         <motion.div variants={itemVariants} className="lg:col-span-2 bg-[#111623] p-8 rounded-xl border border-gray-800">
                            <div className="flex items-center gap-3 mb-4"><SummaryIcon/> <h3 className="font-semibold text-lg">Summary</h3></div>
                            <p className="text-gray-400 mb-6">ReachifyMe is an AI-powered LinkedIn content platform designed for early-stage startups and Micro SMEs. Within 3 months, it acquired 4,000+ free users and 200+ paid users. As Growth Product Manager, I designed a GTM strategy to expand the user base by 40% in 3 months targeting Micro SMEs and content creators through LinkedIn-first acquisition channels.</p>
                            <div className="flex items-center gap-3 mb-4"><SkillsIcon/> <h3 className="font-semibold text-lg">Skills Demonstrated</h3></div>
                            <div className="flex flex-wrap gap-2">
                                {["Competitor Analysis", "Customer Journey Map", "Funnel Analytics", "GTM Strategies", "Market Analysis", "Personas", "Product Launch", "Product Roadmap", "SWOT Analysis", "Success Metrics", "User Segmentation"].map(s => <span key={s} className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full">{s}</span>)}
                            </div>
                         </motion.div>
                         <div className="space-y-6">
                            <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 flex items-center"><CategoryIcon /> <div><h4 className="font-semibold">Category</h4><p className="text-gray-400">Hackathon</p></div></motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 flex items-center"><DurationIcon /> <div><h4 className="font-semibold">Duration</h4><p className="text-gray-400">3 weeks</p></div></motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 flex items-center"><ToolsIcon /> <div><h4 className="font-semibold">Tools Used</h4><p className="text-gray-400">Figma · Notion · Canva</p></div></motion.div>
                         </div>
                     </div>
                 </motion.section>

                {/* 3. Project Challenge */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">Project Challenge</h2>
                    <div className="space-y-6">
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                             <h3 className="font-semibold text-lg text-[#88FF55]">Main Question</h3>
                             <p className="mt-2 text-gray-300 text-xl italic">“How might we drive discovery and conversion within Micro SMEs, solopreneurs, and creators unfamiliar with AI tools using a lean, scalable GTM motion?”</p>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                             <h3 className="font-semibold text-lg text-[#88FF55]">Brief Description</h3>
                             <p className="mt-2 text-gray-400">Designed a comprehensive GTM strategy to scale ReachifyMe’s user base by 40% in 3 months. Created persona-led playbook with tiered pricing, multi-channel acquisition strategy, and measurable KPIs. Winning submission for GenAI Hackathon.</p>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                             <h3 className="font-semibold text-lg text-[#88FF55]">Context</h3>
                             <p className="mt-2 text-gray-400">ReachifyMe helps users generate personalized LinkedIn posts, carousels, and images using AI through user-defined prompts, trending topics, and SME-specific insights. Despite early traction (4,000+ free users and 200+ paid users), visibility gaps existed among target segments — creating opportunity for strategic GTM expansion.</p>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                             <h3 className="font-semibold text-lg text-[#88FF55]">Market Landscape</h3>
                             <ul className="list-disc list-inside mt-2 text-gray-400 space-y-2">
                                <li>22% YoY growth in solopreneur LinkedIn creators</li>
                                <li>60% of SME founders use LinkedIn for lead generation</li>
                                <li>AI tools for LinkedIn remain under-penetrated in emerging markets</li>
                                <li>Significant whitespace opportunity for hyper-targeted positioning</li>
                             </ul>
                         </motion.div>
                    </div>
                </motion.section>

                {/* 4. My Strategic GTM Framework */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <GtmFrameworkIcon />
                            <h2 className="text-3xl font-bold">My strategic GTM framework</h2>
                        </div>
                        <p className="text-lg text-gray-400 mb-12">Research & Analysis Phase</p>
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

                {/* 5. What I discovered */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">What I Discovered</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold mb-4 text-[#88FF55]">User Insights</h3>
                            <ul className="list-disc list-inside space-y-3 text-gray-400">
                                <li>Solopreneurs and micro SMEs looking to scale personal brands</li>
                                <li>80% content creation time saved via AI personalization</li>
                                <li>Pain points: AI adoption learning curve, content quality doubts, price sensitivity</li>
                            </ul>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold mb-4 text-[#88FF55]">Product Strengths</h3>
                            <ul className="list-disc list-inside space-y-3 text-gray-400">
                                <li>Fast, intuitive onboarding</li>
                                <li>SME-specific AI content prompts</li>
                                <li>4,000+ users in 3 months proving product–market fit</li>
                            </ul>
                         </motion.div>
                          <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold mb-4 text-[#88FF55]">Growth Opportunities</h3>
                            <ul className="list-disc list-inside space-y-3 text-gray-400">
                                <li>Expand solopreneur market (22% YoY)</li>
                                <li>Boost DAU/MAU ratio via habit loops and community challenges</li>
                                <li>Enhance trial-to-paid conversion with tiered pricing</li>
                            </ul>
                         </motion.div>
                    </div>
                </motion.section>
                
                {/* 6. SWOT Analysis */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                     <div className="flex items-center justify-center gap-4 mb-8">
                        <SwotIcon />
                        <h2 className="text-3xl font-bold">SWOT Analysis</h2>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-green-500/30">
                            <h3 className="font-bold text-xl text-green-400 mb-4">Strengths</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Fast, intuitive onboarding experience</li>
                                <li>Relevant AI content prompts showing SME understanding</li>
                                <li>Proven early traction (4K+ users in 3 months)</li>
                                <li>LinkedIn-first positioning in growing market</li>
                            </ul>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-red-500/30">
                            <h3 className="font-bold text-xl text-red-400 mb-4">Weaknesses</h3>
                             <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Limited brand awareness in target segments</li>
                                <li>Flat pricing structure lacking flexibility</li>
                                <li>Minimal differentiation in crowded AI tools market</li>
                                <li>High customer acquisition cost relative to pricing</li>
                            </ul>
                        </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-blue-500/30">
                            <h3 className="font-bold text-xl text-blue-400 mb-4">Opportunities</h3>
                             <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Rising solopreneur economy (22% YoY growth)</li>
                                <li>High AI curiosity and adoption momentum</li>
                                <li>Under-penetrated emerging markets</li>
                                <li>LinkedIn's expanding creator tools ecosystem</li>
                            </ul>
                        </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-yellow-500/30">
                            <h3 className="font-bold text-xl text-yellow-400 mb-4">Threats</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Larger platforms (LinkedIn, Buffer) launching competing features</li>
                                <li>Commoditization of LinkedIn automation tools</li>
                                <li>Intense competition from established players</li>
                                <li>Pricing pressure from free alternatives</li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.section>

                {/* 7. Strategic Recommendations */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                     <div className="flex items-center justify-center gap-4 mb-8">
                        <RecommendationsIcon />
                        <h2 className="text-3xl font-bold">Strategic Recommendations</h2>
                    </div>
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 flex flex-col">
                            <p className="text-sm font-semibold text-gray-400 mb-2">High Impact - Quick Win</p>
                            <h3 className="text-2xl font-bold mb-4">Tiered Pricing Model</h3>
                            <div className="flex gap-2 mb-6">
                                <span className="px-3 py-1 text-xs bg-green-900/50 text-green-300 rounded-full">High Impact</span>
                                <span className="px-3 py-1 text-xs bg-yellow-900/50 text-yellow-300 rounded-full">Medium Effort</span>
                            </div>
                            <div className="space-y-4 text-sm text-gray-400 flex-grow">
                                <div><strong className="text-gray-200 block">Problem Addressed:</strong> Flat ₹7,500 annual pricing creates barrier to entry and limits addressable market segments. Price-sensitive users unable to try paid features. No flexibility for users wanting monthly commitment.</div>
                                <div><strong className="text-gray-200 block">Proposed Solution:</strong> Launch three-tier pricing structure: - Solo Starter: ₹299/month for individual creators - Pro+: ₹7,500/year for established professionals - Enterprise: Custom pricing for agencies (future). Add monthly billing option across all tiers for flexibility.</div>
                                <div><strong className="text-gray-200 block">Expected Impact:</strong> 35% increase in trial-to-paid conversion rate. Broader market reach capturing price-sensitive segments. Reduced perceived risk with lower upfront commitment.</div>
                            </div>
                        </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 flex flex-col">
                            <p className="text-sm font-semibold text-gray-400 mb-2">Medium Impact - Strategic</p>
                            <h3 className="text-2xl font-bold mb-4">LinkedIn Creator Challenge</h3>
                            <div className="flex gap-2 mb-6">
                                <span className="px-3 py-1 text-xs bg-yellow-900/50 text-yellow-300 rounded-full">Medium Impact</span>
                                <span className="px-3 py-1 text-xs bg-red-900/50 text-red-300 rounded-full">High Effort</span>
                            </div>
                            <div className="space-y-4 text-sm text-gray-400 flex-grow">
                                <div><strong className="text-gray-200 block">Problem Addressed:</strong> Low brand awareness in target market. Minimal viral coefficient limiting organic growth. Need for community engagement and user-generated content.</div>
                                <div><strong className="text-gray-200 block">Proposed Solution:</strong> Monthly LinkedIn content challenge with leaderboard, community recognition, and prizes. Viral carousel templates as challenge prompts. Referral rewards for participation and sharing. Gamification elements driving engagement.</div>
                                <div><strong className="text-gray-200 block">Expected Impact:</strong> 50% increase in organic user acquisition. Boost viral coefficient from 0.2 to 0.8. Strengthen community bonds and platform stickiness. Generate authentic user testimonials and case studies.</div>
                            </div>
                         </motion.div>
                          <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 flex flex-col">
                            <p className="text-sm font-semibold text-gray-400 mb-2">Long-term Transformative</p>
                            <h3 className="text-2xl font-bold mb-4">Persona-Based Onboarding</h3>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 text-xs bg-green-900/50 text-green-300 rounded-full">High Impact</span>
                                <span className="px-3 py-1 text-xs bg-red-900/50 text-red-300 rounded-full">High Effort</span>
                            </div>
                            <div className="space-y-4 text-sm text-gray-400 flex-grow">
                                <div><strong className="text-gray-200 block">Problem Addressed:</strong> Generic onboarding fails to address specific user needs causing early drop-offs. Users don't discover features relevant to their goals. First-time experience doesn't create immediate value perception.</div>
                                <div><strong className="text-gray-200 block">Proposed Solution:</strong> Customized onboarding flows per identified persona. A/B test different onboarding nudges and feature introductions. Progressive disclosure of advanced features. Ensure quick-win content generation in first session.</div>
                                <div><strong className="text-gray-200 block">Expected Impact:</strong> 25% reduction in first-week churn rate. Higher feature adoption and engagement. Improved user satisfaction scores. Better conversion through relevant feature discovery.</div>
                            </div>
                         </motion.div>
                     </div>
                </motion.section>

                {/* 8. Measuring Impact */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                     <h2 className="text-3xl font-bold mb-8 text-center">Measuring Impact</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800"><h3 className="font-semibold text-lg text-[#88FF55]">User Acquisition</h3><p className="text-3xl font-bold mt-2">6,000+</p><p className="text-sm text-gray-500">users in 3 months (↑ 40%)</p></motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800"><h3 className="font-semibold text-lg text-[#88FF55]">Engagement</h3><p className="text-3xl font-bold mt-2">&gt; 0.30</p><p className="text-sm text-gray-500">DAU/MAU (↑ 40%)</p></motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800"><h3 className="font-semibold text-lg text-[#88FF55]">Satisfaction</h3><p className="text-3xl font-bold mt-2">&lt; 5%</p><p className="text-sm text-gray-500">Churn, NPS > 50</p></motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800"><h3 className="font-semibold text-lg text-[#88FF55]">Conversion</h3><p className="text-3xl font-bold mt-2">8%</p><p className="text-sm text-gray-500">trial-to-paid (↑ from 5%)</p></motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800"><h3 className="font-semibold text-lg text-[#88FF55]">Efficiency</h3><p className="text-3xl font-bold mt-2">&lt; 2s</p><p className="text-sm text-gray-500">generation time, 99.5% uptime</p></motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800"><h3 className="font-semibold text-lg text-[#88FF55]">Growth</h3><p className="text-3xl font-bold mt-2">&gt; 0.5</p><p className="text-sm text-gray-500">15% referral rate, viral coefficient</p></motion.div>
                     </div>
                     <motion.div variants={itemVariants} className="mt-8 bg-[#111623] p-6 rounded-xl border border-gray-800 text-center"><h3 className="font-semibold text-lg text-[#88FF55]">Measurement Framework</h3><p className="text-sm text-gray-400 mt-2">30/60/90-day tracking · Real-time dashboards · Weekly reviews · Monthly iteration cycles</p></motion.div>
                 </motion.section>

                 {/* 9. Business Model Canvas */}
                <motion.section variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">Business Model Canvas</h2>
                    <div className="bg-[#111623] p-8 rounded-xl border border-gray-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="md:col-span-1"><h3 className="font-semibold text-lg text-[#88FF55]">Key Activities</h3><p className="text-sm text-gray-400 mt-2">AI engine dev · Onboarding automation · Community management</p></div>
                        <div className="md:col-span-1"><h3 className="font-semibold text-lg text-[#88FF55]">Value Proposition</h3><p className="text-sm text-gray-400 mt-2">Simplify content creation · Save 80% time · Professional AI output</p></div>
                        <div className="md:col-span-1"><h3 className="font-semibold text-lg text-[#88FF55]">Customer Segments</h3><p className="text-sm text-gray-400 mt-2">Micro SMEs · Solopreneurs · Content creators</p></div>
                        <div className="md:col-span-1"><h3 className="font-semibold text-lg text-[#88FF55]">Channels</h3><p className="text-sm text-gray-400 mt-2">LinkedIn content · Referrals · Webinars · Influencers</p></div>
                        <div className="md:col-span-1"><h3 className="font-semibold text-lg text-[#88FF55]">Revenue Streams</h3><p className="text-sm text-gray-400 mt-2">Subscription with tiered pricing · Monthly/annual billing</p></div>
                        <div className="md:col-span-1"><h3 className="font-semibold text-lg text-[#88FF55]">Key Metrics</h3><p className="text-sm text-gray-400 mt-2">Conversion rate · CAC vs LTV · Viral coefficient · Revenue per segment</p></div>
                    </div>
                </motion.section>
                 
                {/* 10. Outcome & Recognition */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <TrophyIcon />
                         <h2 className="text-3xl font-bold">Outcome & Recognition</h2>
                    </div>
                    <motion.div variants={itemVariants} className="text-center bg-[#111623] p-8 rounded-xl border border-gray-800">
                        <TrophyIcon />
                        <p className="text-xl font-bold text-[#88FF55] mt-2">Winner of GenAI Hackathon for most effective and cost-efficient GTM strategy.</p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 text-left">
                           <div className="bg-[#0C0F1D] p-6 rounded-lg border border-gray-700">
                                <h3 className="font-semibold text-lg text-white mb-2">Key Deliverables</h3>
                                <ul className="list-disc list-inside text-sm text-gray-400 space-y-2">
                                    <li>Created comprehensive persona-led GTM playbook tailored to LinkedIn-first audiences</li>
                                    <li>Outlined detailed 3-month growth sprint targeting 40% user base increase</li>
                                    <li>Delivered scalable frameworks for product positioning, pricing, and funnel optimization</li>
                                    <li>Developed tiered pricing strategy with accessible ₹299/month entry point</li>
                                    <li>Designed multi-channel acquisition strategy with measurable KPIs and success metrics</li>
                                </ul>
                            </div>
                            <div className="bg-[#0C0F1D] p-6 rounded-lg border border-gray-700">
                                <h3 className="font-semibold text-lg text-white mb-2">Projected Business Impact</h3>
                                <ul className="list-disc list-inside text-sm text-gray-400 space-y-2">
                                    <li>User Growth: 40% increase (4,000 to 6,000+ users in 3 months)</li>
                                    <li>Conversion Rate: Improvement from 5% to 8% trial-to-paid</li>
                                    <li>Revenue Growth: 60% increase through tiered pricing adoption</li>
                                    <li>CAC Reduction: 30% decrease through organic and referral channels</li>
                                    <li>Market Positioning: Establish thought leadership in SME LinkedIn content space</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* 11. Considerations & Trade-offs */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <ConsiderationsIcon />
                        <h2 className="text-3xl font-bold">Considerations & Trade-offs</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>Technical Constraints</h3>
                            <div className="space-y-3 text-sm">
                                <div><strong className="text-gray-200 block">Potential Challenge:</strong> Tiered pricing requires payment system infrastructure changes and billing automation updates.</div>
                                <div><strong className="text-gray-200 block">Mitigation Strategy:</strong> Phased rollout starting with monthly billing option. Parallel testing environment before full migration. Gradual transition plan for existing paid users.</div>
                            </div>
                        </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                             <h3 className="font-semibold text-lg mb-4 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>Market Competition</h3>
                             <div className="space-y-3 text-sm">
                                <div><strong className="text-gray-200 block">Potential Challenge:</strong> Larger platforms like LinkedIn or Buffer could launch competing AI features with distribution advantages.</div>
                                <div><strong className="text-gray-200 block">Mitigation Strategy:</strong> Focus on niche differentiation for SME-specific needs. Build strong community moat through engagement programs. Maintain rapid iteration cycle based on user feedback. Establish thought leadership in SME content space.</div>
                            </div>
                        </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>User Education</h3>
                            <div className="space-y-3 text-sm">
                                <div><strong className="text-gray-200 block">Potential Challenge:</strong> Target users may resist AI adoption or find tools too complex, limiting conversion rates.</div>
                                <div><strong className="text-gray-200 block">Mitigation Strategy:</strong> Comprehensive onboarding education with video tutorials. Quick-win first experience demonstrating immediate value. Responsive customer support for troubleshooting. Template library reducing learning curve.</div>
                            </div>
                        </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>Resource Constraints</h3>
                            <div className="space-y-3 text-sm">
                                <div><strong className="text-gray-200 block">Potential Challenge:</strong> Limited marketing budget restricts ability to compete with well-funded competitors on paid acquisition.</div>
                                <div><strong className="text-gray-200 block">Mitigation Strategy:</strong> Prioritize organic and viral growth strategies. Community-led acquisition through referral programs. Strategic influencer partnerships for credibility. Performance-based marketing with clear ROI targets.</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* 12. Methodology */}
                <motion.section variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">Methodology</h2>
                    <div className="bg-[#111623] p-8 rounded-xl border border-gray-800 text-center">
                        <p className="text-gray-400">Exploring Company Overview → Market Trends → Persona Definition → Consumer Journey Mapping → Product Roadmap → Pricing & Funnel Design → SWOT Analysis → Business Canvas → Strategic Framework → Impact Metrics</p>
                    </div>
                </motion.section>


                {/* 13. Explore Full Case Study */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
                    className="mt-20 text-center bg-[#111623] p-8 rounded-xl border border-gray-800"
                >
                    <h2 className="text-2xl font-bold">Explore the Full Case Study</h2>
                    <p className="mt-2 text-gray-400 max-w-2xl mx-auto">For a complete walkthrough of the process, framework, and impact metrics, view the full presentation.</p>
                    <a href="https://www.canva.com/design/DAGaZOcBIaA/Lm42bnbzkhUXmUyA-zzJyw/edit?utm_content=DAGaZOcBIaA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 px-8 py-3 text-lg font-semibold text-[#0C0F1D] bg-[#88FF55] rounded-lg transition-transform duration-300 hover:scale-105 hover:neon-glow">
                        View on Canva
                    </a>
                </motion.section>

                 {/* 14. Final CTA */}
                <motion.section
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-extrabold tracking-tight">Have a similar challenge?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-400">Let’s collaborate on building data-driven GTM strategies and growth frameworks that scale.</p>
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

export default ReachifyMeCaseStudy;