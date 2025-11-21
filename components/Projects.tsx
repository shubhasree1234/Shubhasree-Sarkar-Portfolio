import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'Academic' | 'Hackathon';
type Filter = 'All' | Category;

interface Project {
    id: number;
    title: string;
    duration: string;
    description: string;
    tags: string[];
    tools: string[];
    category: Category;
    caseStudyPage?: string; // Route for the case study page
}

const projectsData: Project[] = [
    { id: 1, title: "Product Thinking Case Study – Perplexity.ai", duration: "3 weeks", description: "Comprehensive product analysis and strategic recommendations for Perplexity.ai, focusing on market positioning and user experience optimization.", tags: ["Market Research", "Personas", "Product Thinking", "+1"], tools: ["Pitch", "Figma"], category: "Academic", caseStudyPage: "projects/perplexity-case-study" },
    { id: 2, title: "User Research & Product Discovery – AI Note-taking App", duration: "3 weeks", description: "In-depth user research analyzing AI adoption barriers and user behavior patterns in productivity tools.", tags: ["User Research", "Behavioral Analysis"], tools: ["Pitch", "Google Forms"], category: "Academic", caseStudyPage: "projects/ai-note-taking-app" },
    { id: 3, title: "Product Growth Strategy – Naukri.com", duration: "2 weeks", description: "AARRR framework implementation for revenue optimization and user engagement improvement.", tags: ["Growth Strategy", "AARRR Framework"], tools: ["Pitch", "Google Forms", "Figma"], category: "Academic", caseStudyPage: "projects/product-growth-naukri" },
    { id: 4, title: "Product Analytics – Langys Intelligent Dashboard", duration: "3 weeks", description: "Market entry analysis using Zomato data with real-time dashboard for data-driven decision making.", tags: ["Product Analytics", "Market Analysis"], tools: ["Pitch", "MixPanel"], category: "Academic", caseStudyPage: "projects/product-analytics-langys-dashboard" },
    { id: 5, title: "Product Improvement of YouTube", duration: "3 Weeks", description: "Session duration optimization through personalization and user experience enhancements.", tags: ["Product Improvement", "Personalization", "GTM Strategy", "User Segmentation", "+1"], tools: ["Figma", "Notion", "Pitch", "Google Forms"], category: "Academic", caseStudyPage: "projects/product-improvement-of-youtube" },
    { id: 6, title: "GTM Strategy – ReachifyMe User Acquisition", duration: "3 weeks", description: "Winning GTM strategy for B2B SaaS US market expansion with cost-efficient acquisition plan.", tags: ["GTM Strategy", "Market Analysis", "Hackathon Winner", "+1"], tools: ["Figma", "Notion", "Canva"], category: "Hackathon", caseStudyPage: "projects/reachifyme-gtm-strategy" }
];

interface ProjectsProps {
    navigateTo: (page: string) => void;
}

const ProjectModal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-2xl bg-[#111623] rounded-xl border border-[#88FF55]/20 shadow-2xl p-8"
                >
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">&times;</button>
                    <h2 className="text-2xl font-bold text-[#88FF55]">{project.title}</h2>
                    <p className="mt-4 text-gray-300">A detailed case study for this project is currently being written. Here's a quick summary:</p>
                    <p className="mt-2 text-gray-400">{project.description}</p>
                    <div className="mt-6">
                        <h3 className="font-semibold text-gray-200">Key Learnings & Outcomes</h3>
                        <ul className="list-disc list-inside mt-2 text-gray-400 space-y-1">
                            <li>Successfully identified key market opportunities.</li>
                            <li>Developed a user-centric solution based on research.</li>
                            <li>Presented actionable recommendations to stakeholders.</li>
                        </ul>
                    </div>
                    <p className="mt-6 text-sm text-center text-[#88FF55]">Full Case Study Coming Soon!</p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};


const Projects: React.FC<ProjectsProps> = ({ navigateTo }) => {
    const [activeFilter, setActiveFilter] = useState<Filter>('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') return projectsData;
        return projectsData.filter(p => p.category === activeFilter);
    }, [activeFilter]);

    const handleCardClick = (project: Project) => {
        if (project.caseStudyPage) {
            navigateTo(project.caseStudyPage);
        } else {
            setSelectedProject(project);
        }
    }

    return (
        <>
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            <div className="py-24 sm:py-32 bg-[#0C0F1D]">
                <div className="container max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Page Header */}
                    <motion.div
                        className="text-center mb-16 md:mb-20"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#88FF55] text-glow relative inline-block">
                            My Projects
                            <motion.span
                                className="absolute bottom-[-8px] left-0 w-full h-1 bg-[#88FF55]"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut' }}
                            />
                        </h1>
                        <p className="mt-8 max-w-3xl mx-auto text-lg text-[#A8B0C2]">
                            A selection of my work, from academic deep-dives to fast-paced hackathons. Each project reflects my passion for solving complex problems with data and design.
                        </p>
                    </motion.div>

                    {/* Filter Tabs */}
                    <motion.div 
                        className="flex justify-center gap-2 sm:gap-4 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {(['All', 'Academic', 'Hackathon'] as Filter[]).map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${activeFilter === filter ? 'bg-[#88FF55] text-[#0C0F1D]' : 'bg-transparent text-[#A8B0C2] border border-gray-700 hover:bg-gray-800 hover:text-white'}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div 
                        layout 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence>
                            {filteredProjects.map(project => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4, ease: 'easeOut' }}
                                    className="cursor-pointer flex flex-col bg-[#111623] rounded-[14px] border border-[rgba(136,255,85,0.14)] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 motion-safe:hover:-translate-y-1.5 hover:border-[rgba(136,255,85,0.35)] focus-within:border-[rgba(136,255,85,0.35)] group"
                                    tabIndex={0}
                                    onClick={() => handleCardClick(project)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleCardClick(project)}
                                >
                                    <div className="p-6 flex-grow flex flex-col">
                                        <div className="flex justify-between items-start">
                                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${project.category === 'Academic' ? 'bg-blue-900/50 text-blue-300' : 'bg-purple-900/50 text-purple-300'}`}>{project.category}</span>
                                            <div className="text-gray-500 group-hover:text-[#88FF55] transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-bold text-[#E6EAF2] mt-4">{project.title}</h3>
                                        <p className="text-sm text-[#A8B0C2] mt-1">{project.duration}</p>
                                        <p className="text-sm text-[#A8B0C2] mt-3 flex-grow">{project.description}</p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {project.tags.map(tag => <span key={tag} className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full">{tag}</span>)}
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-800 px-6 py-3">
                                        <p className="text-xs text-gray-500">Tools: {project.tools.join(', ')}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        className="mt-24 md:mt-32 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#E6EAF2]">Interested in My Approach?</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-[#A8B0C2]">Every project is a journey of discovery. If you’re curious about my process or want to discuss a potential collaboration, I’d love to chat.</p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button onClick={() => navigateTo('contact')} className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-[#0C0F1D] bg-[#88FF55] rounded-lg transition-transform duration-300 hover:scale-105 hover:neon-glow">
                               Let's Talk
                            </button>
                            <button onClick={() => navigateTo('resume')} className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-gray-200 border-2 border-gray-600 rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#88FF55] hover:neon-text">
                                View My Resume
                            </button>
                        </div>
                        <p className="mt-6 text-sm text-[#A8B0C2]">shubhasree.sarkar3103@gmail.com</p>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Projects;