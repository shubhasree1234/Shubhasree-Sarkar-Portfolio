import React, { useEffect, useRef } from 'react';
import { motion, Variants, useInView } from 'framer-motion';

const BrainIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 01-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 013.09-3.09L12 5.25l2.846.813a4.5 4.5 0 013.09 3.09L21.75 12l-2.846.813a4.5 4.5 0 01-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.25 21.75l-.648-1.178a3.375 3.375 0 00-2.456-2.456L12 17.25l1.178-.648a3.375 3.375 0 002.456-2.456L16.25 13.5l.648 1.178a3.375 3.375 0 002.456 2.456L20.25 18l-1.178.648a3.375 3.375 0 00-2.456 2.456z" /></svg>;
const DatabaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#88FF55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;

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
            backgroundColor: 'rgba(136, 255, 85, 0.2)',
            borderColor: '#88FF55',
            borderWidth: 2.5,
            pointBackgroundColor: '#88FF55',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#88FF55'
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
                                    font: { size: 12, family: 'Inter, sans-serif', weight: '500' }
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
                                borderColor: 'rgba(136, 255, 85, 0.5)',
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
                        className="text-4xl md:text-5xl font-bold tracking-tight text-[#88FF55] text-glow relative inline-block cursor-default"
                    >
                        My Skills & Expertise
                        <motion.span
                            className="absolute bottom-[-8px] left-0 w-full h-1 bg-[#88FF55]"
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
                            className="bg-[#111623] p-8 rounded-[14px] border border-[rgba(136,255,85,0.14)] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 motion-safe:hover:-translate-y-2 hover:border-[rgba(136,255,85,0.35)] group"
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
                    <div className="max-w-3xl mx-auto p-6 md:p-8 bg-[#111623] rounded-[14px] border border-[rgba(136,255,85,0.14)] shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex justify-center transition-all duration-300 hover:border-[#88FF55]/30">
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
                        <button onClick={() => navigateTo('contact')} className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-[#0C0F1D] bg-[#88FF55] rounded-lg transition-transform duration-300 hover:scale-105 hover:neon-glow">
                            Contact Me &rarr;
                        </button>
                        <button onClick={() => navigateTo('experience')} className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-gray-200 border-2 border-gray-600 rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#88FF55] hover:neon-text">
                            View My Experience
                        </button>
                    </div>
                     <p className="mt-6 text-sm text-[#A8B0C2]">
                        shubhasree.sarkar3103@gmail.com
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;