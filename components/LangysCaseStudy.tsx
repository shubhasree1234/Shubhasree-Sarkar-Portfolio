import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Icons
const ProjectOverviewIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
const SummaryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
const SkillsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0 3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>;
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
                 <p className="font-semibold text-gray-300 mt-2">Revenue Model:</p>
                 <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Subscription-based dashboard access.</li>
                    <li>Custom analytics projects.</li>
                </ul>
            </div>
        )
    },
    { 
        icon: <ObjectivesIcon />,
        title: "Defining Objectives & Scope", 
        subtitle: "Project parameters and success criteria",
        body: "Primary objective: Deliver an actionable dashboard for Langy's India entry. Scope included city selection, pricing, menu-market fit, and customer personas, focusing on Tier 1 & 2 cities."
    },
    { 
        icon: <DataSourcesIcon />,
        title: "Data Sources & User Categorization", 
        subtitle: "Understanding available data and target audiences",
        body: "Mapped Zomato's rich data sources (customer, interaction, technical) to specific stakeholder needs (CEO, Marketing, Operations) to ensure dashboard relevance and usability."
    },
    {
        icon: <FunnelIcon />,
        title: "Funnel Analysis & Metrics Framework",
        subtitle: "Defining measurement approach",
        body: "Developed a dual-funnel analysis for Langy’s business goals and Zomato’s market opportunity. Established key metric categories: Geographic, Consumer Behavior, Menu, and Pricing."
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

interface LangysCaseStudyProps {
    navigateTo: (page: string) => void;
}

const LangysCaseStudy: React.FC<LangysCaseStudyProps> = ({ navigateTo }) => {
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
                            <span className="text-white"> Product Analytics – Langys Intelligent Dashboard</span>
                        </div>
                         <a onClick={() => navigateTo('projects')} className="cursor-pointer px-4 py-2 text-sm font-semibold text-gray-200 border border-gray-600 rounded-lg transition-all duration-300 hover:border-[#88FF55] hover:neon-text">
                            &larr; Back to Projects
                        </a>
                    </div>
                     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#E6EAF2] text-center mt-12 mb-12">
                        Product Analytics – Langys Intelligent Dashboard
                    </h1>
                     <div className="max-w-2xl mx-auto bg-[#111623] p-8 rounded-2xl border border-gray-800 shadow-lg text-center">
                        <h2 className="text-3xl font-bold">Langys Intelligent Dashboard</h2>
                        <p className="text-gray-400 mt-2">Enabling Data-Driven Market Expansion for an International QSR Chain</p>
                    </div>
                </motion.div>

                {/* 2. Project Overview */}
                 <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <ProjectOverviewIcon />
                        <h2 className="text-3xl md:text-4xl font-bold">Project Overview</h2>
                    </div>
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                         <div className="lg:col-span-2 flex flex-col gap-6">
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 flex-grow">
                                <div className="flex items-center gap-4 mb-4"><SummaryIcon/> <h3 className="font-bold text-xl text-white">Summary</h3></div>
                                <p className="text-gray-400">Leveraged Zomato’s extensive consumer, order, and location intelligence to deliver a comprehensive real-time analytics dashboard, enabling Langy’s to make data-driven decisions for India market entry — including ideal launch cities, pricing strategy, menu preferences, and customer segmentation. As Product Manager for Zomato Analytica, I created a robust insight framework guiding decisions on market entry, location strategy, pricing, and competition in India’s food service market.</p>
                            </motion.div>
                             <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                                <div className="flex items-center gap-4 mb-4"><SkillsIcon/> <h3 className="font-bold text-xl text-white">Skills Demonstrated</h3></div>
                                <div className="flex flex-wrap gap-2">
                                    {["Funnel Analytics", "Market Research", "Personas", "Problem Solving", "Product Analytics", "Success Metrics", "User Problems"].map(s => <span key={s} className="px-3 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-full">{s}</span>)}
                                </div>
                            </motion.div>
                         </div>
                         <div className="flex flex-col justify-between gap-6">
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 text-center">
                                <div className="inline-block mb-4"><CategoryIcon /></div>
                                <h4 className="font-bold text-lg">Category</h4>
                                <p className="text-gray-400 mt-2">Academic</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 text-center">
                                <div className="inline-block mb-4"><DurationIcon /></div>
                                <h4 className="font-bold text-lg">Duration</h4>
                                <p className="text-gray-400 mt-2">3 weeks</p>
                            </motion.div>
                             <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 text-center">
                                <div className="inline-block mb-4"><ToolsIcon /></div>
                                <h4 className="font-bold text-lg">Tools Used</h4>
                                <p className="text-gray-400 mt-2">Pitch · MixPanel</p>
                            </motion.div>
                         </div>
                     </div>
                 </motion.section>

                {/* 3. Project Challenge */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">Project Challenge</h2>
                    <div className="space-y-6">
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                             <h3 className="font-semibold text-lg text-[#88FF55]">Main Question</h3>
                             <p className="mt-2 text-gray-300 text-xl italic">“How can we identify the key metrics to support Langy’s entry into the Indian market through Zomato’s Analytica platform?”</p>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                             <h3 className="font-semibold text-lg text-[#88FF55]">Brief Description</h3>
                             <p className="mt-2 text-gray-400">Designed a comprehensive analytics dashboard leveraging Zomato’s data ecosystem to power strategic expansion decisions for Langy’s. Created a real-time insight framework covering city selection, pricing optimization, menu localization, and customer segmentation for a successful India entry.</p>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                             <h3 className="font-semibold text-lg text-[#88FF55]">Business / Product Context</h3>
                             <ul className="list-disc list-inside mt-2 text-gray-400 space-y-2">
                                <li><strong>Client Context — Langy’s:</strong> 1000+ stores in Europe; 500+ in North America; goal 5000 stores by 2030; next target: India; partnered with Zomato Analytica for data-driven expansion.</li>
                                <li><strong>Product Context — Zomato Analytica:</strong> B2B analytics division delivering rich insights to food chains; deepens B2B relationships; opens new revenue streams; empowers brands with market intelligence.</li>
                                <li><strong>Use Cases:</strong> Understand FoodTech trends · Expansion to new geographies · India market-entry strategy · Pricing/menu revamps and new SKU decisions.</li>
                             </ul>
                         </motion.div>
                    </div>
                </motion.section>

                {/* 4. My Approach */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
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
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold mb-4 text-[#88FF55]">Market Intelligence</h3>
                            <ul className="list-disc list-inside space-y-3 text-gray-400">
                                <li><strong>High-Potential Cities Identified</strong> — Tier 1: high volume, intense competition; Tier 2: rapid growth with lower competition (strategic sweet spot).</li>
                                <li><strong>Order Density Patterns</strong> — Metros 3–5× order density but ~2–3× higher CAC; Tier 2 growing 40–60% YoY.</li>
                                <li><strong>Competitive Landscape</strong> — National players strong in Tier 1; local brands strong in Tier 2; clear gaps for premium ₹300–400 and value ₹99–149 positioning.</li>
                            </ul>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold mb-4 text-[#88FF55]">Consumer Insights</h3>
                            <ul className="list-disc list-inside space-y-3 text-gray-400">
                                <li><strong>Target Persona Characteristics</strong> — Urban millennials (25–35) ordering 3–4×/month; families and office workers as secondary segments.</li>
                                <li><strong>Behavioral Patterns</strong> — Lunch/dinner peaks; weekend spikes; premium pricing acceptable for convenience/quality.</li>
                                <li><strong>Food Preferences</strong> — Chicken/veg critical; spicy variants perform well; combos increase order value.</li>
                            </ul>
                         </motion.div>
                          <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold mb-4 text-[#88FF55]">Strategic Opportunities</h3>
                            <ul className="list-disc list-inside space-y-3 text-gray-400">
                                <li><strong>Menu Localization Potential</strong> — India-specific flavors, spice customization, strong vegetarian lineup.</li>
                                <li><strong>Pricing Strategy Recommendations</strong> — Premium in Tier 1; value-focused in Tier 2.</li>
                                <li><strong>Geographic Expansion Priority</strong> — Start with high-growth, lower-competition cities (e.g., Bangalore, Pune), then major metros (Delhi, Mumbai).</li>
                            </ul>
                         </motion.div>
                    </div>
                </motion.section>
                
                {/* 6. Key Metrics Defined */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                     <h2 className="text-3xl font-bold mb-8 text-center">Key Metrics Defined</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800"><h3 className="font-bold text-xl text-green-400 mb-4">Geographic Intelligence Metrics</h3><p className="text-sm text-gray-400 mt-2"><strong className="text-gray-200">City-level:</strong> monthly delivery orders · QSR market size & growth · AOV (burger/fast food) · Competition density (stores/100k) · Delivery infrastructure maturity · Target demographic concentration</p><p className="text-sm text-gray-400 mt-4"><strong className="text-gray-200">Neighborhood:</strong> density heatmaps · peak-hour demand · income/spend capacity · office vs residential mix · saturation levels · delivery radius & times</p></motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800"><h3 className="font-bold text-xl text-blue-400 mb-4">Consumer Segmentation Metrics</h3><p className="text-sm text-gray-400 mt-2"><strong className="text-gray-200">Demographics:</strong> age, menu gender prefs, income proxies, family vs individual, new vs repeat, cross-category behavior</p><p className="text-sm text-gray-400 mt-4"><strong className="text-gray-200">Behavioral segments:</strong> frequency (daily/weekly/monthly/occasional) · value (premium/mid/value) · time (lunch/dinner/late night) · occasion (convenience/celebration/comfort)</p></motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800"><h3 className="font-bold text-xl text-yellow-400 mb-4">Menu Intelligence Metrics</h3><p className="text-sm text-gray-400 mt-2"><strong className="text-gray-200">Demand:</strong> top 20 QSR items · rising trends · seasonal variation · customization/add-ons · veg vs non-veg split · local flavor adoption</p><p className="text-sm text-gray-400 mt-4"><strong className="text-gray-200">Performance:</strong> average ratings · common complaints · repeat orders by item · item profitability proxies · cross-sell/upsell patterns</p></motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800"><h3 className="font-bold text-xl text-red-400 mb-4">Pricing Intelligence Metrics</h3><p className="text-sm text-gray-400 mt-2"><strong className="text-gray-200">Competitive benchmarking:</strong> price ranges by brand · discount depth/frequency · delivery fee strategies · combo effectiveness · premium acceptance</p><p className="text-sm text-gray-400 mt-4"><strong className="text-gray-200">WTP analysis:</strong> order value distributions · elasticity indicators · checkout abandonment by price · like-for-like comparisons · promo effectiveness by discount level</p></motion.div>
                     </div>
                </motion.section>
                
                {/* Success Metrics for Dashboard */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-20"
                    aria-label="Success Metrics for Dashboard"
                >
                    <h2 className="text-3xl font-bold mb-8 text-center">Success Metrics for Dashboard</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-2xl shadow-sm border border-[rgba(136,255,85,0.12)]">
                            <h3 className="text-[#88FF55] text-lg font-medium mb-3">Adoption Metrics</h3>
                            <ul className="list-disc list-inside text-[#A8B0C2] leading-relaxed space-y-2">
                                <li>Daily active users by stakeholder role</li>
                                <li>Time spent in dashboard per session</li>
                                <li>Most viewed metrics and reports</li>
                                <li>Export and sharing frequency</li>
                                <li>Custom report creation</li>
                            </ul>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-2xl shadow-sm border border-[rgba(136,255,85,0.12)]">
                            <h3 className="text-[#88FF55] text-lg font-medium mb-3">Business Impact Metrics</h3>
                            <ul className="list-disc list-inside text-[#A8B0C2] leading-relaxed space-y-2">
                                <li>Confidence scores in decision-making</li>
                                <li>Number of data-backed decisions</li>
                                <li>Alignment between recommendations and actions</li>
                                <li>Speed of strategic decision-making</li>
                                <li>ROI of Analytica subscription</li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.section>

                {/* 7. Dashboard Deliverables */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                     <h2 className="text-3xl font-bold mb-8 text-center">Dashboard Deliverables</h2>
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="text-lg font-bold">Executive Summary Dashboard (CEO/Leadership)</h3>
                            <p className="text-sm text-gray-400 mt-4"><strong className="text-gray-200">Key KPIs:</strong> India QSR TAM & growth · Top 10 recommended cities with potential scores · Estimated revenue by city tier · Competitive positioning recommendations · 3-year expansion roadmap</p>
                            <p className="text-sm text-gray-400 mt-2"><strong className="text-gray-200">Visual Components:</strong> India heat map · city comparison matrix · market sizing waterfalls · growth projections · executive summary</p>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="text-lg font-bold">Marketing Intelligence Dashboard</h3>
                            <p className="text-sm text-gray-400 mt-4"><strong className="text-gray-200">Key KPIs:</strong> Demographic/psychographic profiles · order frequency patterns · channel preferences · price sensitivity & promo response · preferred messaging</p>
                            <p className="text-sm text-gray-400 mt-2"><strong className="text-gray-200">Visual Components:</strong> Launch market sequencing · audience size by city · channel media spend recs · promo calendar · localization needs by region</p>
                         </motion.div>
                          <motion.div variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800">
                            <h3 className="text-lg font-bold">Operations Planning Dashboard</h3>
                            <p className="text-sm text-gray-400 mt-4"><strong className="text-gray-200">Key KPIs:</strong> Neighborhood recommendations · expected volumes by location · delivery radius coverage · competitor proximity · site-selection scoring</p>
                            <p className="text-sm text-gray-400 mt-2"><strong className="text-gray-200">Visual Components:</strong> Peak-hour forecasts · staffing estimates · inventory turnover · kitchen capacity recs · delivery fleet sizing</p>
                         </motion.div>
                     </div>
                </motion.section>

                {/* 8. Outcome & Business Impact */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">Outcome & Business Impact</h2>
                    <div className="space-y-8">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                            <h3 className="font-semibold text-lg text-[#88FF55] mb-4">Project Deliverables</h3>
                            <p className="text-gray-400">50+ metric definitions (with calcs/refresh) · data dictionary · stakeholder wireframes/flows · interactivity specs (filters, drill-downs, exports) · real-time data feeds from Zomato DW · mobile-responsive views · BI handoff specs for Tableau build.</p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                                <h3 className="font-semibold text-lg text-[#88FF55] mb-4">Business Impact for Langy’s</h3>
                                <ul className="list-disc list-inside text-gray-400 space-y-2">
                                    <li><strong>Informed Market Entry:</strong> Confident city selection; clear competitive positioning; realistic revenue projections.</li>
                                    <li><strong>Operational Efficiency:</strong> Region-specific pricing; high-potential micro-locations; optimized staffing/inventory.</li>
                                    <li><strong>Strategic Advantage:</strong> First-mover insights; localized menus; pricing aligned with willingness-to-pay.</li>
                                </ul>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                                <h3 className="font-semibold text-lg text-[#88FF55] mb-4">Impact for Zomato Analytica</h3>
                                <ul className="list-disc list-inside text-gray-400 space-y-2">
                                    <li><strong>Product Validation:</strong> Replicable B2B analytics framework; credibility with international brands.</li>
                                    <li><strong>Revenue Growth:</strong> New analytics subscription stream; upsell opportunities; long-term partnership potential.</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* 9. Methodology Overview */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">Methodology Overview</h2>
                    <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 space-y-8">
                        <div>
                            <h3 className="font-semibold text-lg text-[#88FF55] mb-2">Complete Project Process</h3>
                            <p className="text-gray-400 text-sm">Introduction to goals → Problem understanding (Zomato POV) → Division overview → How Analytica works → Persona analysis → Objectives & scope → Data sources & target users → Data types (customer/interaction/technical) → Funnel & metrics framework → Langy’s funnel analysis → Zomato’s funnel analysis (Langy’s POV) → Segment-wise metrics → Dashboard design & specs</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <div>
                                <h3 className="font-semibold text-lg text-[#88FF55] mb-2">Analytical Framework</h3>
                                <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                                    <li><strong>Data Analysis Approach:</strong> Multi-dimensional segmentation · trend analysis · competitive benchmarking · geographic clustering · demand forecasting.</li>
                                    <li><strong>Validation Methods:</strong> Cross-reference sources · statistical significance · outlier handling · seasonal normalization · sensitivity checks.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-[#88FF55] mb-2">Tools & Technologies</h3>
                                <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                                    <li><strong>MixPanel for Analytics:</strong> Funnels, cohorts, retention, segmentation, custom dashboards.</li>
                                    <li><strong>Pitch for Presentation:</strong> Visual storytelling, stakeholder reviews, methodology & findings docs.</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* 10. Explore Full Case Study */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
                    className="mt-20 text-center bg-[#111623] p-8 rounded-xl border border-gray-800"
                >
                    <h2 className="text-2xl font-bold">View Full Analytics Framework</h2>
                    <p className="mt-2 text-gray-400 max-w-2xl mx-auto">Access the complete product analytics presentation with detailed metric definitions, dashboard mockups, market insights, and strategic recommendations.</p>
                    <a href="https://pitch.com/v/zomato-analytica-langys-india-expansion-ww74ks" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 px-8 py-3 text-lg font-semibold text-[#0C0F1D] bg-[#88FF55] rounded-lg transition-transform duration-300 hover:scale-105 hover:neon-glow">
                        View on Pitch.com
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                    <div className="mt-6">
                        <p className="text-sm text-gray-500 mb-3">Includes:</p>
                        <div className="flex flex-wrap justify-center gap-2">
                           {["Comprehensive metric framework", "Dashboard wireframes and user flows", "Market intelligence insights", "Competitive analysis", "Strategic recommendations"].map(tag => (
                                <span key={tag} className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full">{tag}</span>
                           ))}
                        </div>
                    </div>
                     <p className="mt-6 text-sm text-gray-500">For questions or feedback, contact: <a href="mailto:shubhasree.sarkar3103@gmail.com" className="hover:text-[#88FF55] transition-colors">shubhasree.sarkar3103@gmail.com</a></p>
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
                    <p className="mt-4 max-w-2xl mx-auto text-gray-400">I help teams turn messy market data into clear, credible decisions. If you have a product analytics or market-entry problem, let’s build something impactful.</p>
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

export default LangysCaseStudy;