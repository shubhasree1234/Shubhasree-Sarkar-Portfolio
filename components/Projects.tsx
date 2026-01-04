import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'Academic' | 'Hackathon';
type Domain = 'Product Management' | 'Data Science';
type Filter = 'All' | Domain;

interface Project {
    id: number;
    title: string;
    duration: string;
    description: string;
    tags: string[];
    tools: string[];
    category: Category;
    domains: Domain[];
    caseStudyPage?: string; 
}

const projectsData: Project[] = [
    { 
        id: 1, 
        title: "Product Thinking Case Study – Perplexity.ai", 
        duration: "3 weeks", 
        description: "Comprehensive product analysis and strategic recommendations for Perplexity.ai, focusing on market positioning and user experience optimization.", 
        tags: ["Market Research", "Personas", "Product Thinking", "+1"], 
        tools: ["Pitch", "Figma"], 
        category: "Academic", 
        domains: ["Product Management"],
        caseStudyPage: "projects/perplexity-case-study" 
    },
    { 
        id: 2, 
        title: "User Research & Product Discovery – AI Note-taking App", 
        duration: "3 weeks", 
        description: "In-depth user research analyzing AI adoption barriers and user behavior patterns in productivity tools.", 
        tags: ["User Research", "Behavioral Analysis"], 
        tools: ["Pitch", "Google Forms"], 
        category: "Academic", 
        domains: ["Product Management"],
        caseStudyPage: "projects/ai-note-taking-app" 
    },
    { 
        id: 3, 
        title: "Product Growth Strategy – Naukri.com", 
        duration: "2 weeks", 
        description: "AARRR framework implementation for revenue optimization and user engagement improvement.", 
        tags: ["Growth Strategy", "AARRR Framework"], 
        tools: ["Pitch", "Google Forms", "Figma"], 
        category: "Academic", 
        domains: ["Product Management"],
        caseStudyPage: "projects/product-growth-naukri" 
    },
    { 
        id: 4, 
        title: "Product Analytics – Langys Intelligent Dashboard", 
        duration: "3 weeks", 
        description: "Market entry analysis using Zomato data with real-time dashboard for data-driven decision making.", 
        tags: ["Product Analytics", "Market Analysis"], 
        tools: ["Pitch", "MixPanel"], 
        category: "Academic", 
        domains: ["Product Management"],
        caseStudyPage: "projects/product-analytics-langys-dashboard" 
    },
    { 
        id: 5, 
        title: "Product Improvement of YouTube", 
        duration: "3 Weeks", 
        description: "Session duration optimization through personalization and user experience enhancements.", 
        tags: ["Product Improvement", "Personalization", "GTM Strategy", "User Segmentation", "+1"], 
        tools: ["Figma", "Notion", "Pitch", "Google Forms"], 
        category: "Academic", 
        domains: ["Product Management"],
        caseStudyPage: "projects/product-improvement-of-youtube" 
    },
    { 
        id: 6, 
        title: "GTM Strategy – ReachifyMe User Acquisition", 
        duration: "3 weeks", 
        description: "Winning GTM strategy for B2B SaaS US market expansion with cost-efficient acquisition plan.", 
        tags: ["GTM Strategy", "Market Analysis", "Hackathon Winner", "+1"], 
        tools: ["Figma", "Notion", "Canva"], 
        category: "Hackathon", 
        domains: ["Product Management"],
        caseStudyPage: "projects/reachifyme-gtm-strategy" 
    }
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
                    className="relative w-full max-w-2xl bg-[#111623] rounded-xl border border-[#C5A059]/20 shadow-2xl p-8"
                >
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <h2 className="text-2xl font-bold text-[#C5A059]">{project.title}</h2>
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
                    <p className="mt-6 text-sm text-center text-[#C5A059] font-semibold uppercase tracking-widest">Full Case Study Coming Soon!</p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const Projects: React.FC<ProjectsProps> = ({ navigateTo }) => {
    const [activeFilter, setActiveFilter] = useState<Filter>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = useMemo(() => {
        return projectsData.filter(project => {
            const matchesCategory = activeFilter === 'All' || project.domains.includes(activeFilter as Domain);
            const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                 project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [activeFilter, searchQuery]);

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
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.h1 
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="text-4xl md:text-5xl font-bold tracking-tight text-[#C5A059] text-glow relative inline-block cursor-default"
                        >
                            My Projects
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
                            A selection of my work, from academic deep-dives to fast-paced hackathons. Each project reflects my passion for solving complex problems with data and design.
                        </motion.p>
                    </motion.div>

                    {/* Search Bar */}
                    <motion.div 
                        className="max-w-xl mx-auto mb-10 relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search projects by name, keyword or tag..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-12 pr-4 py-4 border border-gray-800 rounded-xl bg-[#111623] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all duration-300 shadow-xl"
                        />
                        {searchQuery && (
                            <button 
                                onClick={() => setSearchQuery('')}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-white transition-colors"
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </motion.div>

                    {/* Filter Tabs */}
                    <motion.div 
                        className="flex justify-center gap-2 sm:gap-4 mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {(['All', 'Product Management', 'Data Science'] as Filter[]).map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${activeFilter === filter ? 'bg-[#C5A059] text-[#0C0F1D] shadow-[0_0_15px_rgba(197,160,89,0.3)]' : 'bg-transparent text-[#A8B0C2] border border-gray-700 hover:bg-gray-800 hover:text-white'}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div 
                        layout 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map(project => (
                                    <motion.div
                                        key={project.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        exit={{ opacity: 0, scale: 0.8, filter: 'blur(4px)' }}
                                        whileHover={{ scale: 1.02, y: -6 }}
                                        transition={{ duration: 0.4, ease: 'easeOut' }}
                                        className="cursor-pointer flex flex-col bg-[#111623] rounded-[14px] border border-[rgba(197,160,89,0.14)] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-[#C5A059]/40 hover:shadow-[0_0_20px_rgba(197,160,89,0.15),0_10px_30px_rgba(0,0,0,0.4)] group"
                                        tabIndex={0}
                                        onClick={() => handleCardClick(project)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleCardClick(project)}
                                    >
                                        <div className="p-6 flex-grow flex flex-col">
                                            <div className="flex justify-between items-start">
                                                <span className={`text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-sm ${project.category === 'Academic' ? 'bg-blue-900/50 text-blue-300 border border-blue-800/30' : 'bg-purple-900/50 text-purple-300 border border-purple-800/30'}`}>{project.category}</span>
                                                <div className="text-gray-500 group-hover:text-[#C5A059] transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-bold text-[#E6EAF2] mt-4 group-hover:text-white transition-colors">{project.title}</h3>
                                            <p className="text-xs font-bold text-[#C5A059] mt-1 uppercase tracking-wider">{project.duration}</p>
                                            <p className="text-sm text-[#A8B0C2] mt-4 flex-grow leading-relaxed">{project.description}</p>
                                            <div className="mt-6 flex flex-wrap gap-2">
                                                {project.tags.map(tag => <span key={tag} className="px-2 py-1 text-[10px] font-bold uppercase border border-gray-700 bg-gray-800/40 text-gray-400 rounded-sm">{tag}</span>)}
                                            </div>
                                        </div>
                                        <div className="border-t border-gray-800/50 px-6 py-4 bg-[#0C0F1D]/30 rounded-b-[14px]">
                                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Tools: <span className="text-gray-400">{project.tools.join(' · ')}</span></p>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div 
                                    initial={{ opacity: 0 }} 
                                    animate={{ opacity: 1 }} 
                                    className="col-span-full py-20 text-center"
                                >
                                    <svg className="mx-auto h-12 w-12 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <h3 className="mt-4 text-lg font-semibold text-gray-400">No projects found</h3>
                                    <p className="text-gray-500 mt-2">Try adjusting your search keywords or filter.</p>
                                    <button 
                                        onClick={() => { setSearchQuery(''); setActiveFilter('All'); }}
                                        className="mt-6 text-[#C5A059] font-bold uppercase text-xs tracking-widest hover:underline"
                                    >
                                        Clear all filters
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        className="mt-24 md:mt-32 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.h2 
                            whileHover={{ scale: 1.02 }}
                            className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#E6EAF2] cursor-default inline-block uppercase tracking-widest"
                        >
                            Interested in My Approach?
                        </motion.h2>
                        <motion.p 
                            whileHover={{ color: '#FFFFFF' }}
                            className="mt-4 max-w-2xl mx-auto text-[#A8B0C2] cursor-default transition-colors duration-300"
                        >
                            Every project is a journey of discovery. If you’re curious about my process or want to discuss a potential collaboration, I’d love to chat.
                        </motion.p>
                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button onClick={() => navigateTo('contact')} className="w-full sm:w-auto px-10 py-4 text-xs font-bold tracking-widest uppercase text-[#0C0F1D] bg-[#C5A059] rounded-sm transition-all duration-300 hover:scale-105 hover:neon-glow">
                               Let's Talk
                            </button>
                            <button onClick={() => navigateTo('resume')} className="w-full sm:w-auto px-10 py-4 text-xs font-bold tracking-widest uppercase text-[#C5A059] border-2 border-[#C5A059]/40 rounded-sm transition-all duration-300 hover:scale-105 hover:border-[#C5A059] hover:text-[#C5A059]">
                                View My Resume
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Projects;