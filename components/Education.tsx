import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const educationData = [
  {
    degree: "MBA",
    specialization: "Finance, Marketing",
    institution: "KIIT School of Management, Bhubaneswar",
    topics: ["Portfolio Management", "Marketing", "Accounting", "Business Development", "Management", "Financial Services"],
    certificateUrl: "https://drive.google.com/file/d/1z_xXgB3LqNRU9ZhYlOMWt_LS6JiZ14Mn/view"
  },
  {
    degree: "M.Sc.",
    specialization: "Applied Geology",
    institution: "University of Calcutta, Kolkata",
    topics: ["Geological Mapping", "Structural Geology", "ArcGIS", "Petroleum Geology", "AutoCAD", "Geology", "Geophysics", "Geochemistry"],
    certificateUrl: "https://drive.google.com/file/d/1YPjy9Y3TI5MkxEaWOSQ0U9o9ub1FUwXM/view"
  },
  {
    degree: "B.Sc.",
    specialization: "Geology",
    institution: "University of Calcutta, Kolkata",
    topics: ["Mineral Exploration", "Geological Mapping", "Structural Geology", "Economic Geology", "Petroleum Geology", "Crystallography"],
    certificateUrl: "https://drive.google.com/file/d/15HVXW1NXBLA5klytHOUGiqvEK4sGHGMw/view"
  }
];

const certificationData = [
  {
    title: "Product Management Bootcamp",
    issuer: "Issued by Hello PM",
    date: "Aug, 2024 – Mar, 2025",
    summary: "An intensive and immersive live learning program for product management and growth concepts coached by product mentors.",
    topics: ["Product Thinking", "User & Market Research", "Product Growth", "User Acquisition & Product Marketing", "Product Roadmap & Execution", "Technology for PMs and Product Analytics", "GTM strategy"],
    verifyUrl: "https://drive.google.com/file/d/1AcuwPQG8V_27TUN1GnQlHVg40yrG6N3Y/view"
  },
  {
    title: "Post Graduate Program in Data Science and Business Analytics",
    issuer: "Issued by Texas McCombs School of Business, Great Lakes Executive Learning",
    date: "Jul, 2021 – Aug, 2022",
    topics: ["Statistics", "Probability", "EDA", "Data Mining", "ML algorithms (Clustering, CART, Random Forest, ANN, Decision Tree)", "Predictive Modelling (LDA)", "Linear/Logistic Regression", "Time Series Forecasting", "Data Analytics", "Data Visualization", "Marketing & Retail Analytics", "Finance & Risk Analytics"],
    languages: ["Python", "SQL", "R"],
    tools: ["Power BI", "Tableau"],
    verifyUrl: "https://drive.google.com/file/d/1XVpMYznyzo-LJla4g7NdjDuqM0wI_3gY/view"
  }
];


interface EducationProps {
    navigateTo: (page: string) => void;
}

const Education: React.FC<EducationProps> = ({ navigateTo }) => {
    return (
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
                        Education & Learning
                        <motion.span
                            className="absolute bottom-[-8px] left-0 w-full h-1 bg-[#88FF55]"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut' }}
                        />
                    </h1>
                    <p className="mt-8 max-w-3xl mx-auto text-lg text-[#A8B0C2]">
                        My academic foundation and continuous pursuit of knowledge in the fields of business, data, and product.
                    </p>
                </motion.div>

                {/* Formal Education */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {educationData.map((edu) => (
                        <motion.div
                            key={edu.degree}
                            variants={itemVariants}
                            className="flex flex-col bg-[#111623] p-6 rounded-[14px] border border-[rgba(136,255,85,0.14)] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 motion-safe:hover:-translate-y-1.5 hover:border-[rgba(136,255,85,0.35)] focus-within:border-[rgba(136,255,85,0.35)]"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-[#E6EAF2]">{edu.degree}</h3>
                                    <p className="text-sm text-[#A8B0C2]">{edu.specialization}</p>
                                </div>
                            </div>
                             <p className="text-md text-[#A8B0C2] my-4">{edu.institution}</p>
                            <div className="flex-grow">
                                <h4 className="text-sm font-semibold text-[#E6EAF2] mb-2">Topics Covered:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {edu.topics.map(topic => <span key={topic} className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full">{topic}</span>)}
                                </div>
                            </div>
                            <a href={edu.certificateUrl} target="_blank" rel="noopener noreferrer" className="block text-center mt-6 w-full px-4 py-2 text-sm font-semibold text-[#E6EAF2] border-2 border-gray-600 rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#88FF55] hover:neon-text">
                                View Certificate
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Certifications & Fellowships */}
                <motion.div
                    className="mt-24 md:mt-32 space-y-8"
                     variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                     {certificationData.map(cert => (
                        <motion.div key={cert.title} variants={itemVariants} className="bg-[#111623] p-8 rounded-[14px] border border-[rgba(136,255,85,0.14)] shadow-lg">
                           <div className="flex justify-between items-start flex-col sm:flex-row">
                               <div>
                                   <h3 className="text-2xl font-bold text-[#E6EAF2]">{cert.title}</h3>
                                   <p className="text-md text-[#A8B0C2] mt-1">{cert.issuer}</p>
                               </div>
                               <p className="text-sm text-[#A8B0C2] mt-2 sm:mt-0">{cert.date}</p>
                           </div>
                           {cert.summary && <p className="mt-4 text-[#A8B0C2] text-sm italic">"{cert.summary}"</p>}
                           <div className="mt-4">
                               <h4 className="text-sm font-semibold text-[#E6EAF2] mb-2">Topics Covered:</h4>
                               <div className="flex flex-wrap gap-2">
                                   {cert.topics.map(topic => <span key={topic} className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full">{topic}</span>)}
                               </div>
                           </div>
                           {cert.languages && <div className="mt-4"><h4 className="text-sm font-semibold text-[#E6EAF2] mb-2">Programming Languages:</h4><div className="flex flex-wrap gap-2">{cert.languages.map(lang => <span key={lang} className="px-3 py-1 text-xs bg-blue-900/50 text-blue-300 rounded-full">{lang}</span>)}</div></div>}
                           {cert.tools && <div className="mt-4"><h4 className="text-sm font-semibold text-[#E6EAF2] mb-2">Visualization Tools:</h4><div className="flex flex-wrap gap-2">{cert.tools.map(tool => <span key={tool} className="px-3 py-1 text-xs bg-purple-900/50 text-purple-300 rounded-full">{tool}</span>)}</div></div>}
                           <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 px-6 py-2 text-sm font-semibold text-[#0C0F1D] bg-[#88FF55] rounded-lg transition-transform duration-300 hover:scale-105 hover:neon-glow">
                               Verify
                           </a>
                        </motion.div>
                     ))}
                </motion.div>

                {/* Research Publication */}
                <motion.div
                     className="mt-24 md:mt-32"
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, amount: 0.3 }}
                     transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#E6EAF2]">Research Publication</h2>
                    <div className="bg-[#111623] p-8 rounded-[14px] border border-[rgba(136,255,85,0.14)] shadow-lg motion-safe:hover:-translate-y-1.5 hover:border-[rgba(136,255,85,0.35)] transition-all duration-300">
                        <p className="text-sm font-semibold text-[#88FF55]">Advanced Machine Intelligence and Signal Processing • Springer • June 2022</p>
                        <h3 className="text-2xl font-bold text-[#E6EAF2] mt-2">Study of Machine Learning Techniques to Mitigate Fraudulent Transactions in Credit Cards</h3>
                        <p className="mt-4 text-[#A8B0C2]">“Research paper on machine learning approaches for credit card fraud detection, published in Springer Advanced Machine Intelligence and Signal Processing series.”</p>
                        <p className="mt-4 text-xs text-gray-500 italic">Citation: “Sarkar, S. et al. (2022). Study of Machine Learning Techniques to Mitigate Fraudulent Transactions in Credit Cards. Springer.”</p>
                        <div className="mt-6 flex items-center gap-4 flex-wrap">
                            <a href="https://link.springer.com/chapter/10.1007/978-981-19-0840-8_42" target="_blank" rel="noopener noreferrer" className="px-6 py-2 text-sm font-semibold text-[#0C0F1D] bg-[#88FF55] rounded-lg transition-transform duration-300 hover:scale-105 hover:neon-glow">
                                Read Publication
                            </a>
                            <span className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/50 rounded-full">Peer Reviewed</span>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                 <motion.div
                    className="mt-24 md:mt-32 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#E6EAF2]">Curious about my skills?</h2>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button onClick={() => navigateTo('skills')} className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-[#0C0F1D] bg-[#88FF55] rounded-lg transition-transform duration-300 hover:scale-105 hover:neon-glow">
                           Explore Skills
                        </button>
                        <button onClick={() => navigateTo('contact')} className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-gray-200 border-2 border-gray-600 rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#88FF55] hover:neon-text">
                           Get In Touch
                        </button>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Education;