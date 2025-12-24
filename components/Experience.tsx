import React from 'react';
import { motion, Variants } from 'framer-motion';

const TrophyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>;
const DocumentIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const ChartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const timelineData = [
    {
        role: "Decision Scientist",
        org: "Fractal Analytics",
        duration: "2021 – Present",
        responsibilities: [
            <>Optimized <strong>$30M Media Spend</strong> across European markets, resulting in ~<strong>10% uplift</strong> in incremental media net revenue and enhanced MROI.</>,
            <>Supported <strong>Market Mix Modeling (MMM)</strong> for <strong>10 brands</strong> in Europe, <strong>reducing model delivery turnaround by 7–10 days</strong>.</>,
            <>Delivered <strong>Quarterly Performance Reports</strong>, highlighting key metrics like <strong>ROI</strong> and media effectiveness.</>,
            <>Presented strategic insights from MMM outputs to address diverse market learning objectives.</>,
            <>Built <strong>Power BI</strong> dashboards to visualize complex MMM data, accelerating decision-making.</>
        ],
        skills: ["Market Mix Modelling", "Media Spend Optimization", "Stakeholder Engagement", "Power BI", "Performance Reporting"]
    },
    {
        role: "Data Analyst Intern",
        org: "IVY Professional School",
        duration: "2020 – 2021",
        responsibilities: [
            <>Developed and implemented <strong>Regression</strong> and <strong>Classification</strong> models in <strong>Python</strong> for data-driven decision-making.</>,
            <>Conducted in-depth <strong>SQL</strong> analysis; used <strong>MS Excel</strong> for data manipulation and exploration.</>,
            <>Built dynamic visualizations and reports in <strong>Power BI</strong>, <strong>Google Data Studio</strong>, and <strong>Tableau</strong>.</>
        ],
        skills: ["Python", "SQL", "MS Excel", "Power BI", "Tableau", "Google Data Studio", "Machine Learning"]
    },
    {
        role: "Sales & Marketing Manager",
        org: "HDFC Mutual Fund",
        duration: "2018 – 2020",
        responsibilities: [
            <>Achieved <strong>₹15 Cr+</strong> in sales, surpassing targets with <strong>9% YoY</strong> revenue growth.</>,
            <>Increased <strong>Assets Under Management</strong> by <strong>10%</strong> through new user engagement initiatives.</>,
            <>Boosted investor participation by <strong>40%</strong> during COVID via digital onboarding and education programs.</>,
            <>Expanded bank partnerships by <strong>18%</strong> and onboarded <strong>20%</strong> more retail agents.</>
        ],
        skills: ["Sales Growth", "Digital Marketing", "Partnership Management", "Business Development", "Key Negotiations"]
    }
];

const focusData = [
    { 
        icon: "📘", 
        title: "Learning Goals", 
        points: [
            "Advanced LLM applications and generative AI integration",
            "Scalable system design and experimentation",
            "Product launch and go-to-market strategy expertise"
        ] 
    },
    { 
        icon: "👁️", 
        title: "Areas of Interest", 
        points: [
            "AI-native SaaS and growth intelligence platforms",
            "Product analytics and user behavior modeling",
            "Market research automation and strategy frameworks"
        ] 
    },
    { 
        icon: "🤝", 
        title: "Open to Collaboration", 
        points: [
            "Seeking cross-functional roles blending data science and product management",
            "Collaborating on AI-driven innovation and growth initiatives",
            "Open to consulting or product development partnerships with measurable impact"
        ] 
    },
];

interface ExperienceProps {
    navigateTo: (page: string) => void;
}

const Experience: React.FC<ExperienceProps> = ({ navigateTo }) => {

    return (
        <div className="py-24 sm:py-32 bg-[#0C0F1D]">
            <div className="container max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16 md:mb-24"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.h1 
                        whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-[#E6EAF2] relative inline-block cursor-default"
                    >
                        My Professional Journey
                        <motion.span
                            className="absolute bottom-[-8px] left-0 w-full h-1 bg-[#88FF55]"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut' }}
                        />
                    </motion.h1>
                    <motion.p 
                        whileHover={{ color: '#E6EAF2', transition: { duration: 0.3 } }}
                        className="mt-8 max-w-3xl mx-auto text-lg text-[#A8B0C2] cursor-default"
                    >
                        From sales to analytics to decision science, my career has been a continuous path of growth and learning.
                    </motion.p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="absolute left-4 top-2 h-full w-0.5 bg-[#88FF55]/20 lg:left-1/2 lg:-translate-x-1/2" aria-hidden="true" />

                    <div className="space-y-16">
                        {timelineData.map((item, index) => (
                            <div key={index} className="relative">
                                <motion.div 
                                    className="absolute left-4 top-2 h-5 w-5 -translate-x-1/2 rounded-full bg-[#111623] border-2 border-[#88FF55] lg:left-1/2"
                                    whileInView={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                />
                                
                                <motion.div
                                    className={`pl-12 lg:pl-0 lg:w-[calc(50%-2.5rem)] ${index % 2 === 0 ? 'lg:ml-[calc(50%+2.5rem)]' : ''}`}
                                    initial={{ opacity: 0, x: index % 2 !== 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="p-6 bg-[#111623] rounded-xl border border-[#88FF55]/[0.16] shadow-2xl shadow-black/20 hover:border-[#88FF55]/40 hover:-translate-y-1.5 transition-all duration-300 group">
                                        <div className="flex justify-between items-start mb-2 flex-col sm:flex-row">
                                            <h3 className="text-xl font-bold text-[#E6EAF2] group-hover:text-white transition-colors">{item.role}</h3>
                                            <p className="text-sm text-[#A8B0C2] whitespace-nowrap mt-1 sm:mt-0">{item.duration}</p>
                                        </div>
                                        <p className="text-md text-[#A8B0C2] mb-4">{item.org}</p>
                                        <ul className="list-disc list-inside text-[#A8B0C2] space-y-2 text-sm marker:text-[#88FF55]">
                                            {item.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                                        </ul>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {item.skills.map(skill => <span key={skill} className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full">{skill}</span>)}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="mt-24 md:mt-32"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#E6EAF2]">Key Achievements</motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <TrophyIcon/>, title: "GenAI Hackathon Winner", desc: "Led a team to victory by developing a winning GTM strategy." },
                            { icon: <DocumentIcon/>, title: "Published Researcher", desc: "Co-authored a study on online buying behavior, published in Springer." },
                            { icon: <ChartIcon/>, title: "Media Spend Influence", desc: "Strategic insights influenced over $30M in media spend for CPG clients." },
                        ].map(ach => (
                            <motion.div key={ach.title} variants={itemVariants} className="p-6 bg-[#111623] rounded-xl border border-[#88FF55]/[0.16] transition-all duration-300 hover:border-[#88FF55]/40 hover:-translate-y-1.5 shadow-lg shadow-black/20">
                                <div className="flex items-center gap-4">
                                    {ach.icon}
                                    <h3 className="font-bold text-lg text-[#E6EAF2]">{ach.title}</h3>
                                </div>
                                <p className="mt-3 text-sm text-[#A8B0C2]">{ach.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                 <motion.div
                    className="mt-24 md:mt-32"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div variants={itemVariants} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E6EAF2]">Current Focus & Interests</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-[#A8B0C2]">I am committed to lifelong learning and staying at the forefront of technology and product innovation. My current efforts are focused on bridging the gap between advanced AI capabilities and user-friendly product experiences.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {focusData.map((focus) => (
                            <motion.div
                                key={focus.title}
                                variants={itemVariants}
                                tabIndex={0}
                                className="group cursor-pointer grid grid-cols-[min-content_1fr] gap-x-[14px] gap-y-2 px-7 pt-7 pb-6 rounded-[14px] bg-[#111623] border border-[rgba(136,255,85,0.12)] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-[220ms] ease-out motion-safe:hover:-translate-y-0.5 motion-safe:focus-visible:-translate-y-0.5 hover:border-[rgba(136,255,85,0.45)] focus-visible:border-[rgba(136,255,85,0.45)] focus-visible:outline-none hover:shadow-[0_14px_40px_rgba(136,255,85,0.18),_0_10px_30px_rgba(0,0,0,0.35)] focus-visible:shadow-[0_14px_40px_rgba(136,255,85,0.18),_0_10px_30px_rgba(0,0,0,0.35)]"
                            >
                                <span className="text-2xl row-span-2 place-self-start pt-1 motion-safe:group-hover:-translate-y-px transition-transform duration-[220ms]">{focus.icon}</span>
                                <h3 className="font-bold text-lg text-[#E6EAF2]">{focus.title}</h3>
                                <ul className="list-disc list-inside text-sm text-[#A8B0C2] col-start-2 space-y-2 marker:text-[#88FF55]">
                                    {focus.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                 </motion.div>

                <motion.div
                    className="mt-24 md:mt-32 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#E6EAF2]">Ready to Build Something Amazing?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-[#A8B0C2]">I’m open to collaborations and new opportunities. Let’s connect and explore how my skills can bring value to your team.</p>
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
    );
}

export default Experience;