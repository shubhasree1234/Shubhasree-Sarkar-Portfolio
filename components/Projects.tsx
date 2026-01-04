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
    context?: string;
    tags: string[];
    tools: string[];
    category: Category;
    domains: Domain[];
    caseStudyPage?: string;
    githubUrl?: string;
    highlights?: string[];
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
    },
    {
        id: 7,
        title: "Loan Prediction – ML Case Study",
        duration: "Machine Learning Project",
        description: "Automated real-time loan eligibility prediction using customer demographic and financial data. Multiple ML models were evaluated to identify the most accurate and scalable solution.",
        tags: ["Machine Learning", "Classification", "Model Comparison", "Feature Engineering", "+1"],
        tools: ["PYTHON", "SCIKIT-LEARN", "XGBOOST"],
        category: "Academic",
        domains: ["Data Science"],
        githubUrl: "https://github.com/shubhasree1234/LoanPrediction",
        highlights: [
            "Best Model: XGBoost",
            "Accuracy: 86.6%",
            "Feature Selection: Mutual Information"
        ]
    },
    {
        id: 8,
        title: "Credit Card Fraud Detection",
        duration: "Machine Learning Case Study",
        description: "A hands-on machine learning case study focused on detecting fraudulent credit card transactions in real time. The project explores data science techniques used in the banking and finance industry to build accurate and scalable fraud detection systems.",
        context: "Banking and financial institutions rely on machine learning for fraud detection, risk modelling, customer lifetime value prediction, and personalised marketing. This project demonstrates how modern ML techniques can classify fraudulent transactions efficiently with high accuracy.",
        tags: ["Machine Learning", "Fraud Detection", "Classification", "EDA", "Model Evaluation", "+1"],
        tools: ["PYTHON", "PANDAS", "NUMPY", "SCIKIT-LEARN", "ML CLASSIFIERS"],
        category: "Academic",
        domains: ["Data Science"],
        githubUrl: "https://github.com/shubhasree1234/Credit-Card-Fraud-Detection",
        highlights: [
            "Problem understanding and industry impact analysis",
            "Exploratory Data Analysis (EDA): size, diversity, and granularity",
            "Data visualization to identify patterns and anomalies",
            "Handling class imbalance, outliers, and missing values",
            "Data cleaning and preprocessing",
            "Train-test split",
            "Training multiple classification models",
            "Model evaluation using appropriate performance metrics",
            "Discussion on model improvement, feedback loops, and model persistence"
        ]
    },
    {
        id: 9,
        title: "Life Insurance Sales – Performance & Bonus Prediction",
        duration: "Machine Learning Case Study",
        description: "A machine learning case study using life insurance sales data to predict agent bonus eligibility. The goal is to support data-driven engagement strategies for high-performing agents and targeted upskilling programs for low-performing agents.",
        context: "Insurance companies use data science to improve sales performance, incentive design, and workforce engagement. This project focuses on predicting agent performance outcomes to enable smarter bonus allocation and personalized development initiatives.",
        tags: ["Machine Learning", "Insurance Analytics", "Sales Performance", "Bonus Prediction", "EDA", "+1"],
        tools: ["PYTHON", "PANDAS", "NUMPY", "SCIKIT-LEARN", "ML MODELS"],
        category: "Academic",
        domains: ["Data Science"],
        githubUrl: "https://github.com/shubhasree1234/Life-Insurance-Sales",
        highlights: [
            "Business problem understanding and KPI identification",
            "Exploratory Data Analysis (EDA) of agent performance and sales trends",
            "Feature engineering for sales behavior and productivity indicators",
            "Handling missing values, outliers, and data inconsistencies",
            "Data preprocessing and normalization",
            "Train-test split",
            "Training multiple machine learning models",
            "Model evaluation using appropriate regression or classification metrics",
            "Insights on performance drivers and recommendations for agent engagement strategies"
        ]
    },
    {
        id: 10,
        title: "Credit Risk – Default Prediction for Indian Companies",
        duration: "Machine Learning Case Study",
        description: "A machine learning case study focused on predicting loan default risk for Indian companies using historical financial and performance data. The objective is to support credit risk assessment and improve lending decision accuracy.",
        context: "Credit risk modelling is a core function in financial institutions to reduce default losses and improve portfolio health. This project applies data science techniques to identify high-risk companies before loan repayment failures occur.",
        tags: ["Machine Learning", "Credit Risk", "Default Prediction", "Financial Analytics", "Classification", "+1"],
        tools: ["PYTHON", "PANDAS", "NUMPY", "SCIKIT-LEARN", "ML CLASSIFIERS"],
        category: "Academic",
        domains: ["Data Science"],
        githubUrl: "https://github.com/shubhasree1234/Credit-Risk",
        highlights: [
            "Understanding credit risk drivers and default behavior",
            "Exploratory Data Analysis (EDA) of company financial performance",
            "Feature engineering for financial ratios and risk indicators",
            "Handling missing values, outliers, and skewed distributions",
            "Data preprocessing and scaling",
            "Train-test split",
            "Training multiple machine learning classification models",
            "Model evaluation using risk-appropriate metrics (ROC-AUC, precision-recall)",
            "Insights on risk segmentation and model improvement strategies"
        ]
    },
    {
        id: 11,
        title: "Financial Risk Analysis – Portfolio Construction",
        duration: "Finance & Data Analysis Case Study",
        description: "A financial risk analysis case study focused on building an optimized stock portfolio by analyzing risk and return across multiple large-cap companies from different industry verticals.",
        context: "Risk–return analysis is fundamental to portfolio management and investment decision-making. This project applies quantitative techniques to evaluate stock performance, assess volatility, and construct a balanced portfolio aligned with risk tolerance.",
        tags: ["Financial Analysis", "Risk & Return", "Portfolio Management", "Quantitative Finance", "Data Analysis", "+1"],
        tools: ["PYTHON", "PANDAS", "NUMPY", "FINANCIAL ANALYSIS LIBRARIES"],
        category: "Academic",
        domains: ["Data Science"],
        githubUrl: "https://github.com/shubhasree1234/Financial-Risk-Analysis-Project",
        highlights: [
            "Selection of large-cap stocks across diverse industry verticals",
            "Historical price and return analysis",
            "Volatility and risk measurement using statistical metrics",
            "Risk–return trade-off evaluation",
            "Portfolio diversification analysis",
            "Stock selection based on optimized risk-adjusted returns",
            "Portfolio performance comparison and insights"
        ]
    },
    {
        id: 12,
        title: "Marketing & Retail Analytics – Customer Buying Patterns",
        duration: "Data Analytics Case Study",
        description: "A marketing analytics case study analyzing three years of transaction data from an automobile parts manufacturer to uncover customer buying patterns and enable targeted, data-driven marketing strategies.",
        context: "Understanding customer purchasing behavior is critical for effective retail marketing. This project focuses on segmenting customers based on historical transaction data to design customized engagement and promotional strategies.",
        tags: ["Marketing Analytics", "Retail Analytics", "Customer Segmentation", "Buying Patterns", "Data Analysis", "+1"],
        tools: ["PYTHON", "PANDAS", "NUMPY", "DATA ANALYSIS", "SEGMENTATION"],
        category: "Academic",
        domains: ["Data Science"],
        githubUrl: "https://github.com/shubhasree1234/Marketing-Retail-Analytics-1",
        highlights: [
            "Understanding business objectives and marketing KPIs",
            "Exploratory Data Analysis (EDA) on three years of transaction data",
            "Customer behavior analysis based on purchase frequency, volume, and value",
            "Feature engineering for customer-level metrics",
            "Customer segmentation using analytical or clustering techniques",
            "Identification of high-value, medium-value, and low-value customer segments",
            "Mapping customer segments to targeted marketing strategies",
            "Business insights and recommendations"
        ]
    },
    {
        id: 13,
        title: "Marketing & Retail Analytics – POS Data Analysis",
        duration: "Data Analytics Case Study",
        description: "A retail analytics case study focused on analyzing Point of Sale (POS) data from a grocery store to identify revenue growth opportunities through optimized combo deals and discount strategies.",
        context: "POS data provides deep insights into customer purchasing behavior. This project leverages transaction-level analysis to design data-driven combo offers and promotional strategies aimed at increasing basket size and overall store revenue.",
        tags: ["Retail Analytics", "POS Data", "Market Basket Analysis", "Revenue Optimization", "Data Analysis", "+1"],
        tools: ["PYTHON", "PANDAS", "NUMPY", "DATA ANALYSIS", "ASSOCIATION RULES"],
        category: "Academic",
        domains: ["Data Science"],
        githubUrl: "https://github.com/shubhasree1234/Marketing-Retail-Analytics-2",
        highlights: [
            "Understanding retail business objectives and revenue drivers",
            "Exploratory Data Analysis (EDA) of POS transaction data",
            "Analysis of item-level sales, frequency, and co-purchase patterns",
            "Market basket analysis to identify commonly bought item combinations",
            "Identification of high-performing and low-performing products",
            "Design of combo offers and discount strategies",
            "Revenue uplift analysis and business recommendations"
        ]
    },
    {
        id: 14,
        title: "Online Retail Orders Analysis – Order Management Insights",
        duration: "Data Analytics Case Study",
        description: "A data analytics case study focused on analyzing the order management database of an online retail store to answer key business questions and enable data-driven decisions for overall business growth.",
        context: "Order-level data is critical for understanding customer behavior, operational efficiency, and revenue performance in e-commerce. This project uses structured query-based analysis to derive actionable insights from retail order data.",
        tags: ["Online Retail", "Order Management", "SQL Analysis", "Data Analytics", "Business Insights", "+1"],
        tools: ["SQL", "DATABASE QUERIES", "DATA ANALYSIS"],
        category: "Academic",
        domains: ["Data Science"],
        githubUrl: "https://github.com/shubhasree1234/Online-retail-Orders-Analysis",
        highlights: [
            "Understanding the online retail business model and order lifecycle",
            "Exploring the orders database schema and relationships",
            "Writing analytical queries to answer business-critical questions",
            "Analysis of order volume, revenue trends, and customer activity",
            "Identification of high-performing products and customers",
            "Operational insights related to order fulfillment and growth",
            "Translating query results into data-driven business recommendations"
        ]
    }
];

interface ProjectsProps {
    navigateTo: (page: string) => void;
}

// NEW: Data Science specific card for horizontal placement
const DataScienceProjectCard: React.FC<{ project: Project; navigateTo: (page: string) => void }> = ({ project, navigateTo }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleAction = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (project.githubUrl) {
            window.open(project.githubUrl, '_blank');
        } else if (project.caseStudyPage) {
            navigateTo(project.caseStudyPage);
        }
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-[#111623]/80 rounded-xl border border-[rgba(197,160,89,0.1)] p-8 mb-6 hover:border-[#C5A059]/30 transition-all duration-300 shadow-xl"
        >
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-[10px] uppercase tracking-[0.15em] font-black px-2.5 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-800/30">
                            {project.category}
                        </span>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                            {project.duration}
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight leading-tight mb-2">
                        {project.title}
                    </h3>
                </div>
                <div className="flex gap-4 items-center">
                    <button onClick={handleAction} className="text-gray-500 hover:text-[#C5A059] transition-colors" aria-label="External Link">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="mt-8 space-y-6">
                <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-3">TOPICS COVERED:</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 text-[10px] font-black uppercase tracking-wider border border-gray-800 bg-gray-900/40 text-gray-300 rounded-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-3">TOOLS & TECHNOLOGIES:</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tools.map(tool => (
                            <span key={tool} className="px-3 py-1 text-[10px] font-black uppercase tracking-wider bg-[#2D2235] text-[#D4B3FF] rounded-sm border border-[#443355]/50">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pt-8 mt-8 border-t border-gray-800/50 space-y-8">
                            {project.context && (
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-3">CONTEXT:</h4>
                                    <p className="text-sm text-gray-400 italic leading-relaxed max-w-4xl border-l-2 border-gray-800 pl-4">
                                        {project.context}
                                    </p>
                                </div>
                            )}
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-3">PROJECT DESCRIPTION:</h4>
                                <p className="text-sm text-gray-400 leading-relaxed max-w-4xl">
                                    {project.description}
                                </p>
                            </div>
                            {project.highlights && (
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-3">METHODOLOGY HIGHLIGHTS:</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                        {project.highlights.map((h, i) => (
                                            <li key={i} className="text-[11px] text-gray-300 flex items-start gap-2">
                                                <span className="text-[#C5A059] mt-1 text-[8px] flex-shrink-0">•</span>
                                                <span className="leading-tight">{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex flex-wrap items-center gap-4 mt-10">
                <button
                    onClick={handleAction}
                    className="px-10 py-3.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#0C0F1D] bg-[#C5A059] rounded-sm transition-all duration-300 hover:scale-105 hover:neon-glow"
                >
                    {project.githubUrl ? 'VERIFY CREDENTIALS' : 'FULL CASE STUDY'}
                </button>
                
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 px-8 py-3.5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 border border-gray-800 rounded-sm hover:text-white hover:border-gray-700 transition-all"
                >
                    {isExpanded ? 'HIDE DETAILS' : 'SHOW DETAILS'}
                    <svg className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </motion.div>
    );
};

// Original card format for Product Management
const ProductProjectCard: React.FC<{ project: Project; onClick: (p: Project) => void }> = ({ project, onClick }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        exit={{ opacity: 0, scale: 0.8, filter: 'blur(4px)' }}
        whileHover={{ scale: 1.02, y: -6 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="cursor-pointer flex flex-col bg-[#111623] rounded-[14px] border border-[rgba(197,160,89,0.14)] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-[#C5A059]/40 hover:shadow-[0_0_20px_rgba(197,160,89,0.15),0_10px_30px_rgba(0,0,0,0.4)] group"
        tabIndex={0}
        onClick={() => onClick(project)}
        onKeyDown={(e) => e.key === 'Enter' && onClick(project)}
    >
        <div className="p-6 flex-grow flex flex-col relative">
            <div className="flex justify-between items-start mb-4">
                <span className={`text-[9px] uppercase tracking-[0.15em] font-black px-2.5 py-1 rounded-full ${project.category === 'Academic' ? 'bg-blue-900/30 text-blue-300 border border-blue-800/30' : 'bg-purple-900/30 text-purple-300 border border-purple-800/30'}`}>
                    {project.category}
                </span>
                <div className="text-gray-500 group-hover:text-[#C5A059] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </div>
            </div>

            <h3 className="text-lg font-bold text-[#E6EAF2] mt-2 group-hover:text-white transition-colors leading-tight">
                {project.title}
            </h3>
            
            <p className="text-[10px] font-bold text-[#C5A059] mt-1 uppercase tracking-widest">
                {project.duration}
            </p>

            <p className="text-sm text-[#A8B0C2] mt-4 flex-grow leading-relaxed">
                {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-[9px] font-black uppercase tracking-wider border border-gray-800 bg-gray-900/40 text-gray-500 rounded-sm group-hover:border-gray-700 transition-colors">
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        <div className="border-t border-gray-800/50 px-6 py-4 bg-[#0C0F1D]/30 rounded-b-[14px]">
            <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.15em]">
                Tools: <span className="text-gray-400">{project.tools.join(' • ')}</span>
            </p>
        </div>
    </motion.div>
);

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
        if (project.githubUrl) {
            window.open(project.githubUrl, '_blank');
            return;
        }
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
                            className="text-4xl md:text-5xl font-bold tracking-tight text-[#C5A059] text-glow relative inline-block cursor-default uppercase"
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

                    {/* Projects Container */}
                    <div className="min-h-[400px]">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.length > 0 ? (
                                // Conditional Layout based on Tab
                                activeFilter === 'Data Science' ? (
                                    <div className="flex flex-col max-w-6xl mx-auto">
                                        {filteredProjects.map(project => (
                                            <DataScienceProjectCard key={project.id} project={project} navigateTo={navigateTo} />
                                        ))}
                                    </div>
                                ) : (
                                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {filteredProjects.map(project => (
                                            <ProductProjectCard key={project.id} project={project} onClick={handleCardClick} />
                                        ))}
                                    </motion.div>
                                )
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
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

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
                            className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#E6EAF2] cursor-default inline-block uppercase tracking-[0.2em]"
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