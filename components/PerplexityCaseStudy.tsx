import React, { useState } from 'react';
// Fix: Import Variants type from framer-motion
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Icons
const SummaryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const SkillsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
const CategoryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#88FF55] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
const DurationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#88FF55] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ToolsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#88FF55] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const CogIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;


const AccordionItem: React.FC<{ title: string; subtitle: string; body: string; index: number }> = ({ title, subtitle, body, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-800 last:border-b-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-5 px-2 hover:bg-gray-800/30 transition-colors rounded-t-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#88FF55]"
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${index}`}
            >
                <div className="flex items-center gap-4">
                    <CogIcon />
                    <span className="text-sm font-bold text-[#88FF55]">{String(index).padStart(2, '0')}</span>
                    <div>
                        <h4 className="font-semibold text-lg text-gray-200">{title}</h4>
                        <p className="text-sm text-gray-500 text-left">{subtitle}</p>
                    </div>
                </div>
                <motion.div animate={{ rotate: isOpen ? 45 : 0 }} className="text-2xl text-[#88FF55] transition-transform duration-300">+</motion.div>
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
                         <a onClick={() => navigateTo('projects')} className="cursor-pointer px-4 py-2 text-sm font-semibold text-gray-200 border border-gray-600 rounded-lg transition-all duration-300 hover:border-[#88FF55] hover:neon-text">
                            &larr; Back to Projects
                        </a>
                    </div>
                     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#E6EAF2] text-center mt-12 mb-12">
                        Product Thinking Case Study – <span className="text-[#88FF55]">Perplexity.ai</span>
                    </h1>
                     <div className="max-w-md mx-auto bg-[#111623] p-8 rounded-2xl border border-gray-800 shadow-lg text-center">
                        <div className="text-5xl mb-4 inline-block">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <h2 className="text-3xl font-bold">Perplexity.ai</h2>
                        <p className="text-gray-400 mt-2">AI-Powered Search & Research Platform</p>
                    </div>
                </motion.div>

                {/* Project Overview */}
                 <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                     <h2 className="text-3xl font-bold mb-8 text-center">Project Overview</h2>
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                         <motion.div variants={itemVariants} className="lg:col-span-2 bg-[#111623] p-8 rounded-xl border border-gray-800">
                            <div className="flex items-center gap-3 mb-4"><SummaryIcon/> <h3 className="font-semibold text-lg">Summary</h3></div>
                            <p className="text-gray-400 mb-6">Improving Perplexity.ai using Product Thinking steps.</p>
                            <div className="flex items-center gap-3 mb-4"><SkillsIcon/> <h3 className="font-semibold text-lg">Skills Demonstrated</h3></div>
                            <div className="flex flex-wrap gap-2">
                                {["Market Research", "Personas", "Problem Solving", "Product Thinking", "Solution Matrix", "Success Metrics", "User Categorisation", "User Problems", "User Research"].map(s => <span key={s} className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full">{s}</span>)}
                            </div>
                         </motion.div>
                         <div className="space-y-6">
                            <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 flex items-center"><CategoryIcon /> <div><h4 className="font-semibold">Category</h4><p className="text-gray-400">Academic</p></div></motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 flex items-center"><DurationIcon /> <div><h4 className="font-semibold">Duration</h4><p className="text-gray-400">3 weeks</p></div></motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 flex items-center"><ToolsIcon /> <div><h4 className="font-semibold">Tools Used</h4><p className="text-gray-400">Pitch · Figma</p></div></motion.div>
                         </div>
                     </div>
                 </motion.section>

                {/* Project Challenge */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">Project Challenge</h2>
                    <div className="space-y-6">
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                             <h3 className="font-semibold text-lg text-[#88FF55]">Main Question</h3>
                             <p className="mt-2 text-gray-300 text-xl italic">“How would you apply product thinking frameworks to improve Perplexity.ai?”</p>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                             <h3 className="font-semibold text-lg text-[#88FF55]">Brief Description</h3>
                             <p className="mt-2 text-gray-400">Comprehensive product analysis and strategic recommendations for Perplexity.ai, focusing on market positioning and user experience optimization through structured product thinking methodology.</p>
                         </motion.div>
                    </div>
                </motion.section>

                {/* My Approach */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">My Approach</h2>
                    <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                        {approachData.map((item, i) => <AccordionItem key={item.title} title={item.title} subtitle={item.subtitle} body={item.body} index={i + 1} />)}
                    </motion.div>
                </motion.section>

                {/* What I discovered */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">What I Discovered</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold mb-4 text-[#88FF55]">User Insights</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li><strong>Who’s Using It:</strong> Key user personas</li>
                                <li><strong>Core Value Prop:</strong> What users value</li>
                                <li><strong>Pain Points:</strong> Primary friction points in UX</li>
                            </ul>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold mb-4 text-[#88FF55]">Product Strengths</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li><strong>What I Loved:</strong> UX design, speed, user understanding</li>
                                <li><strong>Competitive Advantages:</strong> AI search positioning</li>
                                <li><strong>User Satisfaction Drivers:</strong> Value-creating features</li>
                            </ul>
                         </motion.div>
                          <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold mb-4 text-[#88FF55]">Growth Opportunities</h3>
                            <ul className="list-disc list-inside text-gray-400 space-y-3 text-sm">
                                <li><strong>User Acquisition:</strong> Scaling strategies</li>
                                <li><strong>Usage Optimization:</strong> Improving engagement</li>
                                <li><strong>Revenue Enhancement:</strong> Monetization approaches</li>
                            </ul>
                         </motion.div>
                    </div>
                </motion.section>
                
                {/* Strategic Recommendations */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                     <h2 className="text-3xl font-bold mb-8 text-center">Strategic Recommendations</h2>
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="text-lg font-bold">Enhanced Personalization Engine</h3>
                            <div className="flex gap-2 mt-2 mb-4"><span className="px-2 py-0.5 text-xs bg-green-900 text-green-300 rounded-full">High Impact</span><span className="px-2 py-0.5 text-xs bg-yellow-900 text-yellow-300 rounded-full">Medium Effort</span></div>
                            <p className="text-sm text-gray-400"><strong className="text-gray-200">Problem Addressed:</strong> Users struggle with irrelevant search results</p>
                            <p className="text-sm text-gray-400 mt-2"><strong className="text-gray-200">Proposed Solution:</strong> ML-driven personalization</p>
                            <p className="text-sm text-gray-400 mt-2"><strong className="text-gray-200">Expected Impact:</strong> +20% session duration, +35% satisfaction</p>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="text-lg font-bold">Collaborative Search Features</h3>
                             <div className="flex gap-2 mt-2 mb-4"><span className="px-2 py-0.5 text-xs bg-yellow-900 text-yellow-300 rounded-full">Medium Impact</span><span className="px-2 py-0.5 text-xs bg-red-900 text-red-300 rounded-full">High Effort</span></div>
                            <p className="text-sm text-gray-400"><strong className="text-gray-200">Problem Addressed:</strong> Power users need shared workspaces</p>
                            <p className="text-sm text-gray-400 mt-2"><strong className="text-gray-200">Proposed Solution:</strong> Team collaboration + shared collections</p>
                            <p className="text-sm text-gray-400 mt-2"><strong className="text-gray-200">Expected Impact:</strong> +15% conversion lift</p>
                            <p className="text-sm text-gray-400 mt-2"><strong className="text-gray-200">Timeline:</strong> 6–8 months</p>
                         </motion.div>
                          <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="text-lg font-bold">AI-Powered Research Assistant</h3>
                            <div className="flex flex-wrap gap-2 mt-2 mb-4"><span className="px-2 py-0.5 text-xs bg-orange-900 text-orange-300 rounded-full">Long-term</span><span className="px-2 py-0.5 text-xs bg-green-900 text-green-300 rounded-full">High Impact</span><span className="px-2 py-0.5 text-xs bg-red-900 text-red-300 rounded-full">High Effort</span></div>
                            <p className="text-sm text-gray-400"><strong className="text-gray-200">Problem Addressed:</strong> Users need deeper research capabilities</p>
                            <p className="text-sm text-gray-400 mt-2"><strong className="text-gray-200">Proposed Solution:</strong> Comprehensive document synthesis</p>
                            <p className="text-sm text-gray-400 mt-2"><strong className="text-gray-200">Expected Impact:</strong> +50% engagement</p>
                             <p className="text-sm text-gray-400 mt-2"><strong className="text-gray-200">Resources:</strong> Requires ML/AI expansion</p>
                         </motion.div>
                     </div>
                </motion.section>

                {/* Measuring Impact */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                     <h2 className="text-3xl font-bold mb-8 text-center">Measuring Impact</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold mb-4 text-[#88FF55]">Primary Metrics</h3>
                            <ul className="space-y-1">
                                <li className="flex justify-between items-center py-3 border-b border-gray-800">
                                  <div>
                                    <p className="text-white font-semibold">User Acquisition</p>
                                    <p className="text-xs text-gray-500 mt-1">MAU growth • user retention</p>
                                  </div>
                                  <span className="text-white font-mono text-sm px-2 py-1 bg-gray-700/50 rounded">25% monthly growth</span>
                                </li>
                                <li className="flex justify-between items-center py-3 border-b border-gray-800">
                                   <div>
                                    <p className="text-white font-semibold">Engagement</p>
                                    <p className="text-xs text-gray-500 mt-1">Session duration • queries per session • feature adoption</p>
                                  </div>
                                  <span className="text-white font-mono text-sm px-2 py-1 bg-gray-700/50 rounded">40% increase</span>
                                </li>
                                <li className="flex justify-between items-center py-3">
                                   <div>
                                    <p className="text-white font-semibold">Satisfaction</p>
                                    <p className="text-xs text-gray-500 mt-1">NPS score • user feedback ratings</p>
                                  </div>
                                  <span className="text-white font-mono text-sm px-2 py-1 bg-gray-700/50 rounded">NPS &gt; 50</span>
                                </li>
                            </ul>
                        </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold mb-4 text-[#88FF55]">Secondary Metrics</h3>
                             <ul className="space-y-1">
                                <li className="flex justify-between items-center py-3 border-b border-gray-800">
                                   <div>
                                    <p className="text-white font-semibold">Conversion</p>
                                    <p className="text-xs text-gray-500 mt-1">Free to paid conversion rate</p>
                                  </div>
                                  <span className="text-white font-mono text-sm px-2 py-1 bg-gray-700/50 rounded">8% conversion</span>
                                </li>
                                <li className="flex justify-between items-center py-3 border-b border-gray-800">
                                   <div>
                                    <p className="text-white font-semibold">Efficiency</p>
                                    <p className="text-xs text-gray-500 mt-1">Query resolution time • search accuracy</p>
                                  </div>
                                  <span className="text-white font-mono text-sm px-2 py-1 bg-gray-700/50 rounded">&lt;2s response</span>
                                </li>
                                <li className="flex justify-between items-center py-3">
                                   <div>
                                    <p className="text-white font-semibold">Growth</p>
                                    <p className="text-xs text-gray-500 mt-1">Referral rate • organic growth metrics</p>
                                  </div>
                                  <span className="text-white font-mono text-sm px-2 py-1 bg-gray-700/50 rounded">15% referral rate</span>
                                </li>
                            </ul>
                        </motion.div>
                     </div>
                 </motion.section>
                 
                {/* Considerations & Trade-offs */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">Considerations & Trade-offs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800"><h3 className="font-semibold text-lg mb-2">Technical Constraints</h3><p className="text-sm text-gray-400"><strong className="text-yellow-400">Potential Pitfall:</strong> AI model training challenges</p><p className="text-sm text-gray-400 mt-2"><strong className="text-green-400">Mitigation:</strong> Phased rollout with A/B testing</p></motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800"><h3 className="font-semibold text-lg mb-2">Resource Limitations</h3><p className="text-sm text-gray-400"><strong className="text-yellow-400">Potential Pitfall:</strong> Complex development scope</p><p className="text-sm text-gray-400 mt-2"><strong className="text-green-400">Mitigation:</strong> Prioritization matrix, phased releases</p></motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800"><h3 className="font-semibold text-lg mb-2">User Adoption</h3><p className="text-sm text-gray-400"><strong className="text-yellow-400">Potential Pitfall:</strong> Change management resistance</p><p className="text-sm text-gray-400 mt-2"><strong className="text-green-400">Mitigation:</strong> Onboarding + user education</p></motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800"><h3 className="font-semibold text-lg mb-2">Market Risks</h3><p className="text-sm text-gray-400"><strong className="text-yellow-400">Potential Pitfall:</strong> Competitor response, market shifts</p><p className="text-sm text-gray-400 mt-2"><strong className="text-green-400">Mitigation:</strong> Agile strategy + monitoring</p></motion.div>
                    </div>
                </motion.section>

                {/* Explore Full Case Study */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
                    className="mt-20 text-center bg-[#111623] p-8 rounded-xl border border-gray-800"
                >
                    <h2 className="text-2xl font-bold">Explore the Full Case Study</h2>
                    <p className="mt-2 text-gray-400 max-w-2xl mx-auto">For a complete walkthrough of the process, research, and high-fidelity designs, view the full presentation.</p>
                    <a href="https://pitch.com/v/final-perplexity-case-study-cohort-28-group-1-gyxttk" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 px-8 py-3 text-lg font-semibold text-[#0C0F1D] bg-[#88FF55] rounded-lg transition-transform duration-300 hover:scale-105 hover:neon-glow">
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
                    <h2 className="text-3xl font-extrabold tracking-tight">Have a similar challenge?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-400">I’m passionate about tackling complex problems. If you have a project in mind, let’s discuss how we can create something impactful together.</p>
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

export default PerplexityCaseStudy;