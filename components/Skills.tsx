import React, { useEffect, useRef } from 'react';
import { motion, Variants, useInView } from 'framer-motion';

const BrainIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 01-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 013.09-3.09L12 5.25l2.846.813a4.5 4.5 0 013.09 3.09L21.75 12l-2.846.813a4.5 4.5 0 01-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.25 21.75l-.648-1.178a3.375 3.375 0 00-2.456-2.456L12 17.25l1.178-.648a3.375 3.375 0 002.456-2.456L16.25 13.5l.648 1.178a3.375 3.375 0 002.456 2.456L20.25 18l-1.178.648a3.375 3.375 0 00-2.456 2.456z" /></svg>;
const DatabaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;

// Tools Category Icons
const DocIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>;
const DesignIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l9.37-9.37a2.121 2.121 0 00-3-3l-9.37 9.37a4.5 4.5 0 106.364 6.364l1.046-1.047a.75.75 0 111.06 1.06l-1.047 1.047a6 6 0 01-8.485-8.485l9.19-9.19a3.621 3.621 0 015.12 5.12l-9.19 9.19a.75.75 0 11-1.06-1.06z" /></svg>;
const CollabIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>;
const PresentationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0h.5m-1 0h-9m0 0h-.5" /></svg>;
const CollectionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" /></svg>;
const DatabaseSmallIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0v3.75" /></svg>;
const CodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>;
const SheetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a2.25 2.25 0 01-2.25-2.25M3.375 19.5h1.5m17.25 0a2.25 2.25 0 002.25-2.25M20.625 19.5h-1.5M2.25 9.375a2.25 2.25 0 012.25-2.25h15a2.25 2.25 0 012.25 2.25m-19.5 0v7.875A2.25 2.25 0 004.5 17.25h15a2.25 2.25 0 002.25-2.25V9.375m-19.5 0h19.5" /></svg>;
const AnalyticsSmallIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125v-6.75zm6.75 3c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125v-3.75zm6.75-3c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125v-6.75zM3 6.75C3 6.129 3.504 5.625 4.125 5.625h15.75c.621 0 1.125.504 1.125 1.125v.75c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 7.5v-.75z" /></svg>;
const VizIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>;
const AiPlatformIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const RadarChart: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const chartRef = useRef<any>(null); 
    const isInView = useInView(canvasRef, { once: true, amount: 0.5 });
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const chartData = {
        labels: [
            ['Data', 'Science'], 
            ['Data', 'Visualization'], 
            ['User', 'Research'], 
            'Strategy', 
            'Analytics', 
            ['Machine', 'Learning'], 
            ['Business', 'Intelligence'], 
            ['Product', 'Management']
        ],
        datasets: [{
            label: 'Proficiency',
            data: [7, 8, 8, 7, 8, 7, 7, 7],
            backgroundColor: 'rgba(197, 160, 89, 0.2)',
            borderColor: '#C5A059',
            borderWidth: 2.5,
            pointBackgroundColor: '#C5A059',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#C5A059'
        }]
    };

    useEffect(() => {
        if (canvasRef.current && isInView && !chartRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx && typeof (window as any).Chart !== 'undefined') {
                chartRef.current = new (window as any).Chart(ctx, {
                    type: 'radar',
                    data: chartData,
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        animation: prefersReducedMotion ? false : { duration: 900, easing: 'easeOutQuart' },
                        layout: { padding: 20 },
                        scales: {
                            r: {
                                angleLines: { color: 'rgba(230, 234, 242, 0.1)' },
                                grid: { color: 'rgba(230, 234, 242, 0.1)' },
                                pointLabels: {
                                    color: '#E6EAF2',
                                    font: { size: 12, family: 'Poppins, sans-serif', weight: '500' }
                                },
                                ticks: {
                                    color: '#A8B0C2',
                                    backdropColor: 'transparent',
                                    stepSize: 2,
                                    font: { size: 12 }
                                },
                                suggestedMin: 0,
                                suggestedMax: 10
                            }
                        },
                        plugins: {
                            legend: { display: false },
                            tooltip: {
                                backgroundColor: '#0C0F1D',
                                titleColor: '#E6EAF2',
                                bodyColor: '#A8B0C2',
                                borderColor: 'rgba(197, 160, 89, 0.5)',
                                borderWidth: 1
                            }
                        }
                    }
                });
            }
        }

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
                chartRef.current = null;
            }
        };
    }, [isInView, prefersReducedMotion]);

    return <canvas ref={canvasRef} aria-label="Radar chart showing core competencies" role="img" className="w-full h-full" />;
};

interface SkillsProps {
    navigateTo: (page: string) => void;
}

const Skills: React.FC<SkillsProps> = ({ navigateTo }) => {

    const toolsCategories = [
        { category: "Documentation & Knowledge", tools: "Notion, NotebookLM", icon: <DocIcon /> },
        { category: "Design & Creative", tools: "Figma, Canva", icon: <DesignIcon /> },
        { category: "Collaboration", tools: "Miro", icon: <CollabIcon /> },
        { category: "Presentations", tools: "Pitch, MS PowerPoint", icon: <PresentationIcon /> },
        { category: "Data Collection", tools: "Google Form", icon: <CollectionIcon /> },
        { category: "Databases", tools: "MS Access", icon: <DatabaseSmallIcon /> },
        { category: "Programming Languages", tools: "Python, SQL, R", icon: <CodeIcon /> },
        { category: "Spreadsheets", tools: "MS Excel, Google Sheets", icon: <SheetIcon /> },
        { category: "Product Analytics", tools: "Mixpanel", icon: <AnalyticsSmallIcon /> },
        { category: "BI & Visualization", tools: "Power BI, Tableau, Google Data Studio", icon: <VizIcon /> },
        { category: "AI & No-Code Platforms", tools: "Lovable, Google AI Studio, Google Antigravity", icon: <AiPlatformIcon /> }
    ];

    return (
        <div className="py-24 sm:py-32 bg-[#0C0F1D]">
            <div className="container max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.h1 
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-[#C5A059] text-glow relative inline-block cursor-default"
                    >
                        My Skills & Expertise
                        <motion.span
                            className="absolute bottom-[-8px] left-0 w-full h-1 bg-[#C5A059]"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut' }}
                        />
                    </motion.h1>
                    <motion.p 
                        whileHover={{ color: '#FFFFFF', scale: 1.01 }}
                        className="mt-8 max-w-3xl mx-auto text-lg text-[#A8B0C2] cursor-default transition-all duration-300"
                    >
                        The tools and methodologies I use to turn ideas into reality and data into decisions.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {[
                      {
                        title: "Product & AI",
                        icon: <BrainIcon />,
                        skills: ["Generative AI", "Product Strategy", "User Research", "Wireframing"]
                      },
                      {
                        title: "Data & Analytics",
                        icon: <DatabaseIcon />,
                        skills: ["Machine Learning", "SQL & Databases", "Data Visualization", "Python"]
                      },
                      {
                        title: "Professional",
                        icon: <UsersIcon />,
                        skills: ["Agile Methodologies", "Technical Writing", "Stakeholder Management", "Leadership"]
                      }
                    ].map((category) => (
                        <motion.div
                            key={category.title}
                            variants={itemVariants}
                            className="bg-[#111623] p-8 rounded-[14px] border border-[rgba(197,160,89,0.14)] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 motion-safe:hover:-translate-y-2 hover:border-[rgba(197,160,89,0.35)] group"
                        >
                            <h3 className="text-xl font-bold text-[#E6EAF2] mb-6 group-hover:text-white transition-colors">{category.title}</h3>
                            <ul className="space-y-4">
                                {category.skills.map(skill => (
                                    <li key={skill} className="flex items-center gap-3 transition-transform duration-200 group-hover:translate-x-1">
                                        {category.icon}
                                        <span className="text-[#A8B0C2] group-hover:text-gray-200">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Tools & Technologies Section */}
                <motion.div
                    className="mt-24 md:mt-32"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E6EAF2] cursor-default inline-block uppercase tracking-widest">Tools & Technologies</h2>
                        <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[#C5A059] to-transparent rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {toolsCategories.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="bg-[#111623] p-6 rounded-xl border border-[rgba(197,160,89,0.1)] shadow-xl flex items-start gap-4 transition-all duration-300 hover:border-[#C5A059]/30"
                            >
                                <div className="p-3 bg-gray-800/40 rounded-lg flex-shrink-0 mt-1">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-xs uppercase tracking-[0.15em] text-[#C5A059] mb-2">{item.category}</h4>
                                    <p className="text-sm text-gray-400 font-medium leading-relaxed">{item.tools}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                     className="mt-24 md:mt-32"
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, amount: 0.3 }}
                     transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="text-center mb-12">
                        <motion.h2 
                            whileHover={{ scale: 1.02 }}
                            className="text-3xl md:text-4xl font-bold tracking-tight text-[#E6EAF2] cursor-default inline-block"
                        >
                            Core Competencies
                        </motion.h2>
                        <p className="mt-4 max-w-3xl mx-auto text-[#A8B0C2] transition-colors duration-300 hover:text-white cursor-default">Leveraging data-driven insights and product management frameworks to drive business growth and user engagement.</p>
                    </div>
                    <div className="max-w-3xl mx-auto p-6 md:p-8 bg-[#111623] rounded-[14px] border border-[rgba(197,160,89,0.14)] shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex justify-center transition-all duration-300 hover:border-[#C5A059]/30">
                        <div className="w-full max-w-lg aspect-square">
                            <RadarChart />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="mt-24 md:mt-32 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.h2 
                        whileHover={{ scale: 1.02 }}
                        className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#E6EAF2] cursor-default inline-block"
                    >
                        Let’s Build Together
                    </motion.h2>
                    <p className="mt-4 max-w-2xl mx-auto text-[#A8B0C2] hover:text-white transition-colors cursor-default">
                        If my skills align with what you’re looking for, I’d be excited to learn more about your project and how I can contribute.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button onClick={() => navigateTo('contact')} className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-[#0C0F1D] bg-[#C5A059] rounded-lg transition-transform duration-300 hover:scale-105 hover:neon-glow">
                            Contact Me &rarr;
                        </button>
                        <button onClick={() => navigateTo('experience')} className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-gray-200 border-2 border-gray-600 rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#C5A059] hover:neon-text">
                            View My Experience
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;