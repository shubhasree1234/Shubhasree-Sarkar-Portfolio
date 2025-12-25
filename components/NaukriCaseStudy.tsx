import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Icons
const ProjectDetailsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /></svg>;
const ProjectChallengeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const DiscoveriesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const SuccessMetricsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>;
const MethodologyOverviewIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>;
const OutcomeRecommendationsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>;
const SnapshotIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const MatrixIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" /></svg>;
const ImpactIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const WireframeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M4 9h16m-12 0v10" /></svg>;
const PitchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>;
const PrototypeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;

/* Fix: Define TargetPersonasIcon and AnalyticsIcon */
const TargetPersonasIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
const AnalyticsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;

// Small sub-topic icons
const CategorySubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>;
const SummarySubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>;
const DurationSubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const SkillsSubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
const ToolsSubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const QuestionSubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ContextSubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const GoalsSubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const RocketIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a17.953 17.953 0 01-2.63 12.62M14.37 15.59a17.953 17.953 0 01-12.62 2.63m12.62-2.63a17.953 17.953 0 01-2.63-12.62m2.63 12.62a6 6 0 01-7.38-5.84h4.82m2.56-5.84a17.953 17.953 0 0112.62-2.63M15.59 14.37a17.953 17.953 0 012.63-12.62m-2.63 12.62a6 6 0 015.84-7.38v4.82m-5.84 2.56a17.953 17.953 0 012.63 12.62" /></svg>;
const PillarsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;

// My Approach Icons
const ApproachIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 01-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 013.09-3.09L12 5.25l2.846.813a4.5 4.5 0 013.09 3.09L21.75 12l-2.846.813a4.5 4.5 0 01-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.25 21.75l-.648-1.178a3.375 3.375 0 00-2.456-2.456L12 17.25l1.178-.648a3.375 3.375 0 002.456-2.456L16.25 13.5l.648 1.178a3.375 3.375 0 002.456 2.456L20.25 18l-1.178.648a3.375 3.375 0 00-2.456 2.456z" /></svg>;
const UnderstandingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const SegmentationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const JourneyMapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>;
const AarrrIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
const ProposedFrameworkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a17.953 17.953 0 01-2.63 12.62M14.37 15.59a17.953 17.953 0 01-12.62 2.63m12.62-2.63a17.953 17.953 0 01-2.63-12.62m2.63 12.62a6 6 0 01-7.38-5.84h4.82m2.56-5.84a17.953 17.953 0 0112.62-2.63M15.59 14.37a17.953 17.953 0 012.63-12.62m-2.63 12.62a6 6 0 015.84-7.38v4.82m-5.84 2.56a17.953 17.953 0 012.63 12.62" /></svg>;


const AccordionItem: React.FC<{ title: string; subtitle?: string; body: React.ReactNode; icon: React.ReactNode; index: number }> = ({ title, subtitle, body, icon, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div variants={itemVariants} className="bg-[#111623] rounded-xl border border-gray-800 transition-colors hover:border-gray-700">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-start text-left p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded-lg"
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${index}`}
            >
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{icon}</div>
                    <div className="flex-grow">
                        <h4 className="font-bold text-lg text-gray-100">{title}</h4>
                        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
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
                           <div className="w-0.5 bg-[#C5A059] flex-shrink-0 self-stretch"></div>
                           <div className="text-gray-400 text-sm flex-grow">{body}</div>
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
        title: "Understanding Naukri & Market Position", 
        subtitle: "Platform analysis and competitive landscape",
        body: (
            <div className="space-y-2">
                <p>Conducted comprehensive analysis of Naukri.com's market position as India's leading job portal. Examined demographics of both recruiter and job seeker segments. Analyzed competitive landscape including LinkedIn, Indeed, Monster, and emerging players.</p>
                <p>Identified Naukri's key strengths: extensive resume database, strong brand recognition in India, established recruiter relationships. Recognized challenges: increasing competition, evolving user expectations, need for better conversion optimization.</p>
            </div>
        )
    },
    { 
        icon: <SegmentationIcon />,
        title: "User Segmentation Analysis", 
        subtitle: "Deep dive into B2B and B2C personas",
        body: (
            <div className="space-y-2">
                <p>Segmented users into detailed personas across both sides of marketplace:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong className="text-gray-300">B2B Segment - Recruiters:</strong> Startups, SMEs, Enterprises seeking quality candidates.</li>
                    <li><strong className="text-gray-300">B2C Segment - Job Seekers:</strong> Freshers, Experienced Professionals, Freelancers looking for opportunities.</li>
                </ul>
            </div>
        )
    },
    { 
        icon: <JourneyMapIcon />,
        title: "Jobs To Be Done & Journey Mapping", 
        subtitle: "Understanding core user needs and journey friction",
        body: (
            <div className="space-y-2">
                 <p>Identified core JTBD for each segment:</p>
                 <ul className="list-disc list-inside space-y-1">
                    <li><strong className="text-gray-300">Recruiters' JTBD:</strong> Capture relevant resumes and post visible job listings efficiently.</li>
                    <li><strong className="text-gray-300">Job Seekers' JTBD:</strong> Discover relevant jobs and landing interviews to advance career.</li>
                </ul>
            </div>
        )
    },
    { 
        icon: <AarrrIcon />,
        title: "Current AARRR Analysis & Challenges", 
        subtitle: "Identifying gaps in existing growth funnel",
        body: (
             <div className="space-y-2">
                <p>Analyzed current AARRR framework performance revealing challenges in recruiter onboarding, job seeker profile completion, and return visit rates after initial application.</p>
            </div>
        )
    },
    { 
        icon: <ProposedFrameworkIcon />,
        title: "Proposed AARRR Framework & Solutions", 
        subtitle: "Comprehensive growth strategy across funnel",
        body: (
            <div className="space-y-2">
                <p>Developed enhanced AARRR framework with specific tactics for each stage. Prioritized solutions using problem prioritization matrix based on impact vs effort analysis.</p>
            </div>
        )
    }
];

const aarrrData = [
    {
        title: "Acquisition - Bring the Right Users In",
        body: (
            <div className="space-y-6">
                <div>
                    <h5 className="font-bold text-[#C5A059] uppercase text-xs mb-2">SEO Optimization</h5>
                    <p className="text-gray-400">Rank high on job-specific long-tail keywords. Optimize job listings for search engine visibility. Create content hub for career advice and industry insights. Target "jobs in [city]" and "[role] jobs" search terms.</p>
                </div>
                <div>
                    <h5 className="font-bold text-[#C5A059] uppercase text-xs mb-2">Strategic Partnerships</h5>
                    <p className="text-gray-400">Partner with educational platforms for fresher recruitment. Collaborate with certification providers for co-marketing. Integrate with university career services. Work with industry associations for specialized hiring.</p>
                </div>
                <div>
                    <h5 className="font-bold text-[#C5A059] uppercase text-xs mb-2">Paid Acquisition</h5>
                    <p className="text-gray-400">Targeted LinkedIn ads for recruiter acquisition. Google ads for job seeker acquisition by role and location. Retargeting campaigns for abandoned registrations. Influencer partnerships with career coaches.</p>
                </div>
                <div className="pt-4 border-t border-gray-800">
                    <h5 className="font-bold text-green-400 uppercase text-xs mb-3">Expected Impact</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                        <li>25% increase in organic traffic through SEO</li>
                        <li>15% reduction in paid acquisition costs through partnerships</li>
                        <li>30% improvement in acquisition conversion rate</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "Activation - Deliver \"Aha!\" Moments",
        body: (
            <div className="space-y-6">
                <div>
                    <h5 className="font-bold text-[#C5A059] uppercase text-xs mb-2">Recruiter Activation</h5>
                    <p className="text-gray-400">Redesigned onboarding to post first job in under 3 minutes. Guided walkthrough showing resume database quality. Immediate access to relevant candidate profiles. Quick success: show interested candidates within 24 hours.</p>
                </div>
                <div>
                    <h5 className="font-bold text-[#C5A059] uppercase text-xs mb-2">Job Seeker Activation</h5>
                    <p className="text-gray-400">Progressive profile completion with milestone rewards. Guided walkthrough highlighting key features. Personalized job recommendations from first login. One-click application for relevant opportunities.</p>
                </div>
                <div>
                    <h5 className="font-bold text-[#C5A059] uppercase text-xs mb-2">Personalization Engine</h5>
                    <p className="text-gray-400">Behavioral data tracking for relevant job matching. Skill-based algorithms for better candidate-job fit. Industry and experience level considerations. Location and salary preference matching.</p>
                </div>
                <div className="pt-4 border-t border-gray-800">
                    <h5 className="font-bold text-green-400 uppercase text-xs mb-3">Expected Impact</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                        <li>15% increase in activation rate (completing key first action)</li>
                        <li>40% improvement in profile completion rates</li>
                        <li>25% increase in first-week engagement</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "Retention - Keep Them Coming Back",
        body: (
            <div className="space-y-6">
                <div>
                    <h5 className="font-bold text-[#C5A059] uppercase text-xs mb-2">Recruiter Retention</h5>
                    <p className="text-gray-400">Weekly insights dashboard (views, click-through rate, applicant quality). Competitive intelligence on similar job postings. Recommendations for improving job visibility. Alerts when qualified candidates join platform.</p>
                </div>
                <div>
                    <h5 className="font-bold text-[#C5A059] uppercase text-xs mb-2">Job Seeker Retention</h5>
                    <p className="text-gray-400">Smart job alerts based on profile and behavior. Notification nudges for relevant new postings. Weekly digest of matched opportunities. Profile view notifications showing recruiter interest.</p>
                </div>
                <div className="pt-4 border-t border-gray-800">
                    <h5 className="font-bold text-green-400 uppercase text-xs mb-3">Expected Impact</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                        <li>20% increase in weekly active users</li>
                        <li>35% improvement in 30-day retention rate</li>
                        <li>50% increase in push notification engagement</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "Referral - Turn Users into Advocates",
        body: (
            <div className="space-y-6">
                <div>
                    <h5 className="font-bold text-[#C5A059] uppercase text-xs mb-2">Job Seeker Referral Program</h5>
                    <p className="text-gray-400">Credits for premium features when referring friends. One-click resume sharing with network. Social proof showing friends' success stories. Community features for peer recommendations.</p>
                </div>
                <div>
                    <h5 className="font-bold text-[#C5A059] uppercase text-xs mb-2">Recruiter Referral Program</h5>
                    <p className="text-gray-400">"Refer & Hire" campaigns with visibility boost credits. Incentives for referring other hiring managers. Co-branded job postings for sharing. Testimonials and case studies program.</p>
                </div>
                <div>
                    <h5 className="font-bold text-[#C5A059] uppercase text-xs mb-2">Viral Mechanisms</h5>
                    <p className="text-gray-400">Easy sharing of interesting job listings. Public profiles for personal branding. Success stories and placement announcements. Company review and rating system.</p>
                </div>
                <div className="pt-4 border-t border-gray-800">
                    <h5 className="font-bold text-green-400 uppercase text-xs mb-3">Expected Impact</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                        <li>10% of new users from referrals (from current 3%)</li>
                        <li>25% increase in job listing shares</li>
                        <li>Viral coefficient improvement from 0.15 to 0.35</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "Revenue - Monetize the Value",
        body: (
            <div className="space-y-6">
                <div>
                    <h5 className="font-bold text-[#C5A059] uppercase text-xs mb-2">Recruiter Monetization</h5>
                    <p className="text-gray-400 font-semibold mb-1">New Pricing Tiers:</p>
                    <ul className="list-disc list-inside text-gray-400 text-xs mb-3">
                        <li>Basic: Free job posting with limited visibility</li>
                        <li>Standard: ₹15,000/month - enhanced visibility and 50 resume views</li>
                        <li>Professional: ₹35,000/month - priority listing and 150 resume views</li>
                        <li>Enterprise: Custom pricing - dedicated support and unlimited access</li>
                    </ul>
                    <p className="text-gray-400 font-semibold mb-1">Value-Based Features:</p>
                    <ul className="list-disc list-inside text-gray-400 text-xs">
                        <li>Premium job listings with highlighted placement</li>
                        <li>Featured employer branding on candidate pages</li>
                        <li>Access to resume database search</li>
                        <li>Advanced analytics and reporting</li>
                        <li>Applicant tracking system integration</li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold text-[#C5A059] uppercase text-xs mb-2">Job Seeker Monetization</h5>
                    <p className="text-gray-400 font-semibold mb-1">Freemium Model:</p>
                    <ul className="list-disc list-inside text-gray-400 text-xs mb-3">
                        <li>Free: Basic profile and job applications</li>
                        <li>Premium (₹999/month): Profile boost, priority applications, recruiter insights</li>
                        <li>Premium Plus (₹1,999/month): Resume services, career coaching, skill assessments</li>
                    </ul>
                    <p className="text-gray-400 font-semibold mb-1">Additional Revenue Streams:</p>
                    <ul className="list-disc list-inside text-gray-400 text-xs">
                        <li>Resume writing and optimization services (₹2,500-5,000)</li>
                        <li>Career coaching and interview preparation (₹5,000-10,000 per session)</li>
                        <li>Skill assessment and certification programs (₹1,000-3,000)</li>
                        <li>Online workshops and webinars (₹500-2,000)</li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold text-[#C5A059] uppercase text-xs mb-2">Cross-Selling Opportunities</h5>
                    <p className="text-gray-400">Offer ad slots to education companies. Visibility boosts for urgent hiring. Background verification services. Skill training partnerships with revenue share.</p>
                </div>
                <div className="pt-4 border-t border-gray-800">
                    <h5 className="font-bold text-green-400 uppercase text-xs mb-3">Expected Impact</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                        <li>20% revenue uplift through upselling and cross-selling resume services</li>
                        <li>30% of free users converting to some paid feature</li>
                        <li>50% increase in average revenue per recruiter</li>
                    </ul>
                </div>
            </div>
        )
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

interface NaukriCaseStudyProps {
    navigateTo: (page: string) => void;
}

const NaukriCaseStudy: React.FC<NaukriCaseStudyProps> = ({ navigateTo }) => {
    return (
         <div className="py-24 sm:py-32 bg-[#0C0F1D]">
            <div className="container max-w-7xl mx-auto px-6 lg:px-8">
                {/* 1. Breadcrumbs & Header */}
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-gray-400">
                            <a onClick={() => navigateTo('home')} className="hover:text-white cursor-pointer">Home</a> / 
                            <a onClick={() => navigateTo('projects')} className="hover:text-white cursor-pointer"> Projects</a> / 
                            <span className="text-white"> Product Growth Strategy – Naukri.com</span>
                        </div>
                         <a onClick={() => navigateTo('projects')} className="cursor-pointer px-4 py-2 text-sm font-semibold text-gray-200 border border-gray-600 rounded-lg transition-all duration-300 hover:border-[#C5A059] hover:neon-text">
                            &larr; Back to Projects
                        </a>
                    </div>
                     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#E6EAF2] text-center mt-12 mb-4 flex flex-col items-center gap-4">
                        <RocketIcon />
                        <span>Product Growth Strategy – <span className="text-[#C5A059] text-glow">Naukri.com</span></span>
                    </h1>
                     <p className="text-center text-lg text-gray-400 mb-12">Revenue Optimization via AARRR Framework</p>
                </motion.div>

                 {/* 2 & 3. Two-Column Details & Challenge */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Project Details */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <ProjectDetailsIcon />
                            <h2 className="text-2xl font-bold text-white">Project Details</h2>
                        </div>
                        <div className="bg-[#111623] p-8 rounded-xl border border-gray-800 flex-grow space-y-6">
                            <div>
                                <h4 className="font-semibold text-lg text-[#C5A059] flex items-center gap-2"><CategorySubIcon /> Category</h4>
                                <span className="mt-2 inline-block px-3 py-1 text-sm bg-blue-900/50 text-blue-300 rounded-full font-semibold">Academic</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-[#C5A059] flex items-center gap-2"><SummarySubIcon /> Summary</h4>
                                <p className="text-gray-400 mt-2">Created comprehensive growth strategy to boost Naukri.com’s revenue using the AARRR framework. Analyzed complete product journey from acquisition to monetization, identifying tactical improvements at each stage to increase total revenue both directly and indirectly.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-[#C5A059] flex items-center gap-2"><DurationSubIcon /> Duration</h4>
                                <p className="text-gray-400 mt-2 font-medium">2 weeks</p>
                            </div>
                             <div>
                                <h4 className="font-semibold text-lg text-[#C5A059] flex items-center gap-2"><SkillsSubIcon /> Skills Demonstrated</h4>
                                <div className="flex flex-wrap gap-2 mt-2">
                                   {["AARRR framework", "Customer Journey Map", "Jobs To Be Done", "Market Research", "Personas", "Problem Prioritisation Matrix", "Problem Solving", "Product Growth", "Research Methodology", "Solution Matrix", "User Insights", "User Interviews", "User Problems", "User Research", "Wireframing"].map(s => <span key={s} className="px-3 py-1 text-xs border border-[#C5A059]/20 bg-gray-700/30 text-gray-300 rounded-full">{s}</span>)}
                                </div>
                            </div>
                            <div>
                                 <h4 className="font-semibold text-lg text-[#C5A059] flex items-center gap-2"><ToolsSubIcon /> Tools Used</h4>
                                 <div className="flex flex-wrap gap-2 mt-2">
                                     <span className="px-3 py-1 text-sm border border-[#C5A059]/20 bg-gray-700/30 text-gray-300 rounded-full">Pitch</span>
                                     <span className="px-3 py-1 text-sm border border-[#C5A059]/20 bg-gray-700/30 text-gray-300 rounded-full">Figma</span>
                                     <span className="px-3 py-1 text-sm border border-[#C5A059]/20 bg-gray-700/30 text-gray-300 rounded-full">Google Forms</span>
                                 </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project Challenge side - Content from screenshot */}
                    <motion.div variants={itemVariants}>
                        <div className="flex items-center gap-3 mb-4">
                            <ProjectChallengeIcon />
                             <h2 className="text-2xl font-bold text-white">Project Challenge</h2>
                        </div>
                        <div className="space-y-6">
                             <div className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                                <h3 className="font-semibold text-lg text-[#C5A059] flex items-center gap-2"><QuestionSubIcon /> Main Question</h3>
                                <p className="mt-2 text-gray-300 text-xl italic">“How can we develop a comprehensive growth strategy for Naukri.com that enhances revenue across all user segments while improving the overall user experience?”</p>
                            </div>
                             <div className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                                <h3 className="font-semibold text-lg text-[#C5A059] flex items-center gap-2"><SummarySubIcon /> Brief Description</h3>
                                <p className="mt-2 text-gray-400">Sprint focused on scaling revenue for India’s leading job portal. Analyzed B2B (recruiters) and B2C (job seekers) segments to identify growth opportunities across the entire AARRR funnel. Created actionable strategy combining product-led growth levers, deep user segmentation, and real-time analytics.</p>
                            </div>
                             <div className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                                <h3 className="font-semibold text-lg text-[#C5A059] flex items-center gap-2"><ContextSubIcon /> Business Context</h3>
                                <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                                    <li><strong className="text-gray-200">Recruiters (Startups, SMEs, Enterprises):</strong> seeking quality candidates</li>
                                    <li><strong className="text-gray-200">Job Seekers (Freshers, Experienced, Freelancers):</strong> looking for opportunities</li>
                                    <li><strong className="text-gray-200">Challenge:</strong> optimize growth across both segments while maintaining platform quality and satisfaction</li>
                                </ul>
                            </div>
                             <div className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl">
                                 <h3 className="font-semibold text-lg text-[#C5A059] flex items-center gap-2"><GoalsSubIcon /> Key Growth Goals</h3>
                                 <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
                                     <li>Increase conversion to paid plans for recruiters</li>
                                     <li>Boost job listings and resume database monetization</li>
                                     <li>Improve user lifetime value via retention loops</li>
                                     <li>Create sustainable revenue from both segments</li>
                                 </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* 4. My Approach */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <ApproachIcon />
                        <h2 className="text-3xl font-bold uppercase tracking-widest">My Approach</h2>
                    </div>
                    <div className="space-y-4">
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
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <DiscoveriesIcon />
                        <h2 className="text-3xl font-bold uppercase tracking-widest">What I Discovered</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {/* User Insights Card */}
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl hover:border-[#C5A059]/30 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-8 text-[#C5A059] uppercase tracking-widest text-center flex items-center justify-center gap-2"><SegmentationIcon /> User Insights</h3>
                            <ul className="space-y-6 text-gray-400 text-sm leading-relaxed">
                                <li>
                                    <strong className="text-gray-200 block mb-1">Recruiter Behaviors:</strong> 
                                    Judge quality by first 10 resumes; pricing tied to cost-per-hire; urgency creates willingness to pay.
                                </li>
                                <li>
                                    <strong className="text-gray-200 block mb-1">Job Seeker Behaviors:</strong> 
                                    Frequent visits during search; engagement drops after employment; profile completion drives success.
                                </li>
                                <li>
                                    <strong className="text-gray-200 block mb-1">Pain Point Patterns:</strong> 
                                    Poor match quality; irrelevant recommendations; privacy and legitimacy concerns.
                                </li>
                            </ul>
                         </motion.div>

                         {/* Competitive Insights Card */}
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl hover:border-[#C5A059]/30 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-8 text-[#C5A059] uppercase tracking-widest text-center flex items-center justify-center gap-2"><UnderstandingIcon /> Competitive Insights</h3>
                            <ul className="space-y-6 text-gray-400 text-sm leading-relaxed">
                                <li>
                                    <strong className="text-gray-200 block mb-1">LinkedIn Strengths:</strong> 
                                    Network effects, branding, premium monetization; weak for SMEs due to cost.
                                </li>
                                <li>
                                    <strong className="text-gray-200 block mb-1">Indeed/Monster Approach:</strong> 
                                    Aggregation scale + SEO; commoditized experience.
                                </li>
                                <li>
                                    <strong className="text-gray-200 block mb-1">Naukri’s Position:</strong> 
                                    Deep India penetration, trusted brand, large resume DB; dated UI/UX, limited social features, under-monetized job seekers.
                                </li>
                            </ul>
                         </motion.div>

                         {/* Growth Opportunities Card */}
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl hover:border-[#C5A059]/30 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-8 text-[#C5A059] uppercase tracking-widest text-center flex items-center justify-center gap-2"><RocketIcon /> Growth Opportunities</h3>
                            <ul className="space-y-6 text-gray-400 text-sm leading-relaxed">
                                <li>
                                    <strong className="text-gray-200 block mb-1">Product-Led Growth Potential:</strong> 
                                    Self-serve onboarding, viral features, data network effects.
                                </li>
                                <li>
                                    <strong className="text-gray-200 block mb-1">Revenue Expansion:</strong> 
                                    Resume services, career coaching, enterprise value capture.
                                </li>
                                <li>
                                    <strong className="text-gray-200 block mb-1">Market Expansion:</strong> 
                                    Remote work, freelancer segment, tier-2/3 city penetration, international demand.
                                </li>
                            </ul>
                         </motion.div>
                    </div>
                </motion.section>

                {/* AARRR Framework Breakdown Section */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-20">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <AarrrIcon />
                            <h2 className="text-3xl font-bold uppercase tracking-widest">AARRR Framework Breakdown</h2>
                        </div>
                        <p className="text-gray-400 max-w-2xl mx-auto">Strategic growth roadmap addressing every stage of the user journey.</p>
                    </div>
                    <div className="space-y-4">
                        {aarrrData.map((item, i) => (
                            <AccordionItem 
                                key={i}
                                icon={<div className="w-10 h-10 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center font-bold text-[#C5A059]">{item.title.charAt(0)}</div>}
                                title={item.title} 
                                body={item.body}
                                index={i + 10} 
                            />
                        ))}
                    </div>
                </motion.section>

                {/* Growth Strategy Snapshot */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-24">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <SnapshotIcon />
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest">Growth Strategy Snapshot</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold mb-6 text-[#C5A059] uppercase tracking-widest flex items-center gap-2"><SegmentationIcon /> User Segmentation Summary</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-white mb-2 uppercase text-xs">Recruiters</h4>
                                    <ul className="list-disc list-inside text-gray-400 text-xs space-y-2">
                                        <li><strong className="text-gray-200">Startups:</strong> Price-sensitive, need quick results, volume &lt; 10 hires/year</li>
                                        <li><strong className="text-gray-200">SMEs:</strong> Moderate budgets, 10-50 hires/year, growing employer brand needs</li>
                                        <li><strong className="text-gray-200">Enterprises:</strong> Large budgets, 100+ hires/year, complex requirements, long-term partnerships</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2 uppercase text-xs">Job Seekers</h4>
                                    <ul className="list-disc list-inside text-gray-400 text-xs space-y-2">
                                        <li><strong className="text-gray-200">Freshers:</strong> High volume, entry-level, education-based matching</li>
                                        <li><strong className="text-gray-200">Experienced:</strong> Quality-focused, 3-15 years, skills and projects matter</li>
                                        <li><strong className="text-gray-200">Freelancers:</strong> Project-based, portfolio showcase, flexible arrangements</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold mb-6 text-[#C5A059] uppercase tracking-widest flex items-center gap-2"><TargetPersonasIcon /> Key Strategic Goals</h3>
                            <div className="space-y-6 text-gray-400 text-xs leading-relaxed">
                                <div>
                                    <h4 className="font-bold text-white mb-2 uppercase text-xs">Conversion Optimization</h4>
                                    <p>Increase free-to-paid conversion for recruiters from current 12% to 20%. Improve job seeker profile completion from 35% to 65%. Drive premium feature adoption through value demonstration.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2 uppercase text-xs">Listing Growth</h4>
                                    <p>Boost monthly job postings by 40% through easier posting and better value. Increase resume database by 25% through better activation. Improve match quality driving more applications per listing.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2 uppercase text-xs">LTV Enhancement</h4>
                                    <p>Improve 12-month retention from 45% to 60% through retention loops. Increase frequency of recruiter returns through insights and alerts. Drive repeat purchases through subscription models.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div variants={itemVariants} className="mt-8 bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl">
                         <h3 className="text-xl font-bold mb-8 text-[#C5A059] uppercase tracking-widest text-center flex items-center justify-center gap-2"><SuccessMetricsIcon /> Estimated Business Impact</h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                             <div>
                                 <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest flex items-center gap-2"><AnalyticsIcon /> Revenue Growth</h4>
                                 <ul className="list-disc list-inside text-gray-400 text-xs space-y-3">
                                     <li>+20% from upselling and cross-selling resume services</li>
                                     <li>+15% from improved activation converting free users</li>
                                     <li>+10% from referral program reducing acquisition costs</li>
                                     <li>+25% from new job seeker monetization streams</li>
                                     <li className="font-bold text-[#C5A059] list-none pt-2">Total estimated revenue uplift: 40-50% within 12 months</li>
                                 </ul>
                             </div>
                             <div>
                                 <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest flex items-center gap-2"><TargetPersonasIcon /> User Metrics</h4>
                                 <ul className="list-disc list-inside text-gray-400 text-xs space-y-3">
                                     <li>+15% in activation rates through improved onboarding</li>
                                     <li>+20% in retention through engagement loops</li>
                                     <li>+10% in referrals through incentive programs</li>
                                     <li>+30% in paid conversion through value-based pricing</li>
                                 </ul>
                             </div>
                         </div>
                    </motion.div>
                </motion.section>

                {/* Problem Prioritization Matrix */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold uppercase tracking-widest text-[#E6EAF2] mb-12 flex items-center justify-center gap-3"><PillarsIcon /> Strategic Pillars</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                            {[
                                { title: "Product-Led Growth", body: "Self-serve models reducing sales dependency. Freemium tiers expanding addressable market. Viral mechanisms driving organic acquisition.", icon: <RocketIcon /> },
                                { title: "User Segmentation", body: "Tailored experiences for each persona. Pricing aligned with segment willingness-to-pay. Marketing targeted by segment channels.", icon: <SegmentationIcon /> },
                                { title: "Real-Time Analytics", body: "Performance dashboards for decision-making. A/B testing culture for optimization. Cohort analysis tracking retention.", icon: <AnalyticsIcon /> }
                            ].map((pillar, i) => (
                                <motion.div key={i} variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl flex flex-col items-center text-center">
                                    <div className="mb-4">{pillar.icon}</div>
                                    <h4 className="font-bold text-[#C5A059] mb-4 uppercase text-xs tracking-widest">{pillar.title}</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">{pillar.body}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex items-center justify-center gap-4 mb-12">
                            <MatrixIcon />
                            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest">Problem Prioritization Matrix</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl text-left">
                                <h4 className="font-bold text-green-400 mb-6 uppercase text-xs tracking-widest flex items-center gap-2"><GoalsSubIcon /> High Impact, Low Effort (Quick Wins)</h4>
                                <ul className="list-disc list-inside text-gray-300 text-xs space-y-3">
                                    <li>Improved onboarding flow</li>
                                    <li>Job alert optimization</li>
                                    <li>Profile completion nudges</li>
                                </ul>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl text-left">
                                <h4 className="font-bold text-blue-400 mb-6 uppercase text-xs tracking-widest flex items-center gap-2"><RocketIcon /> High Impact, High Effort (Strategic Bets)</h4>
                                <ul className="list-disc list-inside text-gray-300 text-xs space-y-3">
                                    <li>AI-powered matching engine</li>
                                    <li>Resume services platform</li>
                                    <li>Integrated ATS for recruiters</li>
                                </ul>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl text-left">
                                <h4 className="font-bold text-yellow-400 mb-6 uppercase text-xs tracking-widest flex items-center gap-2"><SummarySubIcon /> Low Impact, Low Effort (Fill-ins)</h4>
                                <ul className="list-disc list-inside text-gray-300 text-xs space-y-3">
                                    <li>UI refresh/mobile optimization</li>
                                    <li>Basic profile options</li>
                                    <li>Email template improvements</li>
                                    <li>Minor enhancements</li>
                                </ul>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl text-left">
                                <h4 className="font-bold text-red-400 mb-6 uppercase text-xs tracking-widest flex items-center gap-2"><QuestionSubIcon /> Low Impact, High Effort (Avoid)</h4>
                                <ul className="list-disc list-inside text-gray-300 text-xs space-y-3">
                                    <li>Complex social networking</li>
                                    <li>Video interviewing platform</li>
                                    <li>Full HRMS suite</li>
                                    <li>Geography expansion without PMF</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Solution Impact Analysis */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-24">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <ImpactIcon />
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-center">Solution Impact Analysis</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {[
                            { 
                                title: "Tiered Pricing for Recruiters", 
                                problem: "Flat pricing excludes SMEs/startups", 
                                solution: "Three-tier model with feature differentiation", 
                                impact: "+₹300Cr opportunity (SME + Startup + Enterprise upsells)", 
                                implementation: "4 weeks",
                                icon: <CategorySubIcon />
                            },
                            { 
                                title: "Job Seeker Premium Subscriptions", 
                                problem: "Under-monetized seeker segment", 
                                solution: "Freemium + ₹999 / ₹1,999 tiers", 
                                impact: "Target 2% of 50M actives; +₹1,200Cr potential incl. resume services", 
                                implementation: "8 weeks",
                                icon: <AnalyticsIcon />
                            },
                            { 
                                title: "Retention & Engagement Loops", 
                                problem: "Low return visits after initial activity", 
                                solution: "Smart alerts, insights dashboards, gamification, digests", 
                                impact: "+20% retention -> +15% LTV; est. +₹400Cr", 
                                implementation: "6 weeks",
                                icon: <JourneyMapIcon />
                            },
                            { 
                                title: "Referral Programs", 
                                problem: "Minimal organic growth; high CAC", 
                                solution: "Incentives for both segments; tracking + credits", 
                                impact: "10% new users via referrals; 30% CAC reduction", 
                                implementation: "4 weeks",
                                icon: <RocketIcon />
                            }
                        ].map((sol, i) => (
                            <motion.div key={i} variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl hover:border-[#C5A059]/20 transition-all duration-300">
                                <h4 className="font-bold text-[#C5A059] mb-4 uppercase text-xs tracking-widest flex items-center gap-2">{sol.icon} {sol.title}</h4>
                                <div className="space-y-4 text-xs">
                                    <p className="text-gray-400 leading-relaxed"><strong className="text-gray-200">Current Problem:</strong> {sol.problem}</p>
                                    <p className="text-gray-400 leading-relaxed"><strong className="text-gray-200">Solution:</strong> {sol.solution}</p>
                                    <p className="text-green-400 leading-relaxed"><strong className="text-gray-200">Revenue Impact:</strong> {sol.impact}</p>
                                    <p className="text-gray-500 leading-relaxed font-bold italic tracking-wider flex items-center gap-1"><DurationSubIcon /> Implementation: {sol.implementation}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Wireframes & Prototypes */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-24">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <WireframeIcon />
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-center">Wireframes & Prototypes</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Redesigned Recruiter Onboarding", icon: <RocketIcon /> },
                            { title: "Job Seeker Profile Completion", icon: <SegmentationIcon /> },
                            { title: "Smart Notification System", icon: <SuccessMetricsIcon /> },
                            { title: "Premium Feature Showcase", icon: <PillarsIcon /> }
                        ].map((wf, i) => (
                            <motion.div key={i} variants={itemVariants} className="bg-[#111623] rounded-xl border border-gray-800 flex flex-col items-center justify-center p-6 text-center hover:border-[#C5A059]/40 transition-all duration-300 group cursor-default shadow-lg gap-3">
                                <div className="text-[#C5A059] group-hover:scale-110 transition-transform">{wf.icon}</div>
                                <span className="text-sm font-bold text-gray-200 group-hover:text-white leading-tight">{wf.title}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Methodology Overview */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-24">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <MethodologyOverviewIcon />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E6EAF2] text-center">Methodology Overview</h2>
                    </div>
                    <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-2xl">
                         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                             <div>
                                 <h4 className="font-bold text-[#C5A059] mb-6 uppercase text-xs tracking-widest flex items-center gap-2"><JourneyMapIcon /> Complete Strategic Process</h4>
                                 <p className="text-gray-400 text-xs leading-relaxed italic">
                                     About Naukri → Understanding Demographics → Competitive Analysis → User Segment Analysis (B2B & B2C) → Analyzing User Personas → User Journey Mapping → Jobs To Be Done Framework → Current AARRR Analysis & Challenges → Proposed AARRR Framework → Problem Prioritization Matrix → Solutions & Impact Analysis → Revenue Impact Projections → Wireframe Development
                                 </p>
                             </div>
                             <div>
                                 <h4 className="font-bold text-[#C5A059] mb-6 uppercase text-xs tracking-widest flex items-center gap-2"><UnderstandingIcon /> Research Methods</h4>
                                 <ul className="list-disc list-inside text-gray-400 text-xs space-y-3">
                                     <li>Competitive benchmarking against LinkedIn, Indeed, Monster</li>
                                     <li>User interviews with 20 recruiters and 30 job seekers</li>
                                     <li>Survey analysis from 500+ respondents via Google Forms</li>
                                     <li>Behavioral data analysis from platform analytics</li>
                                     <li>Market sizing and revenue opportunity assessment</li>
                                 </ul>
                             </div>
                             <div>
                                 <h4 className="font-bold text-[#C5A059] mb-6 uppercase text-xs tracking-widest flex items-center gap-2"><AarrrIcon /> Framework Application</h4>
                                 <ul className="list-disc list-inside text-gray-400 text-xs space-y-3">
                                     <li>AARRR funnel for growth strategy structure</li>
                                     <li>Jobs To Be Done for understanding user motivations</li>
                                     <li>Problem prioritization matrix for solution selection</li>
                                     <li>Impact vs Effort analysis for roadmap prioritization</li>
                                 </ul>
                             </div>
                         </div>
                    </motion.div>
                </motion.section>

                {/* Outcome & Recommendations */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-24">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <OutcomeRecommendationsIcon />
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-center">Outcome & Recommendations</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl">
                             <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest border-b border-gray-800 pb-4 flex items-center gap-2"><DurationSubIcon /> Phase 1 (0-3 months)</h4>
                             <ul className="list-disc list-inside text-gray-400 text-xs space-y-3">
                                 <li>Implement tiered pricing for recruiters</li>
                                 <li>Launch improved onboarding flows</li>
                                 <li>Deploy smart notification system</li>
                                 <li>Start basic referral program</li>
                             </ul>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl">
                             <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest border-b border-gray-800 pb-4 flex items-center gap-2"><DurationSubIcon /> Phase 2 (3-6 months)</h4>
                             <ul className="list-disc list-inside text-gray-400 text-xs space-y-3">
                                 <li>Introduce job seeker premium subscriptions</li>
                                 <li>Build retention loops and gamification</li>
                                 <li>Develop insights dashboards</li>
                                 <li>Enhance matching algorithm</li>
                             </ul>
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl">
                             <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest border-b border-gray-800 pb-4 flex items-center gap-2"><DurationSubIcon /> Phase 3 (6-12 months)</h4>
                             <ul className="list-disc list-inside text-gray-400 text-xs space-y-3">
                                 <li>Launch resume services platform</li>
                                 <li>Expand to adjacent revenue streams</li>
                                 <li>Build integrated ATS features</li>
                                 <li>Scale referral and viral mechanisms</li>
                             </ul>
                         </motion.div>
                    </div>
                    <motion.div variants={itemVariants} className="mt-8 bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-2xl">
                         <h3 className="text-xl font-bold mb-10 text-[#C5A059] uppercase tracking-widest text-center flex items-center justify-center gap-2"><SuccessMetricsIcon /> Expected Cumulative Impact</h3>
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                             <div>
                                 <h4 className="font-bold text-green-400 mb-6 uppercase text-xs tracking-widest flex items-center gap-2"><AnalyticsIcon /> Year 1 Projections</h4>
                                 <ul className="list-disc list-inside text-gray-400 text-xs space-y-3 leading-relaxed">
                                     <li><strong className="text-gray-200">Revenue growth:</strong> +40-50% (₹2,000Cr+ incremental)</li>
                                     <li><strong className="text-gray-200">User growth:</strong> +35% active users</li>
                                     <li><strong className="text-gray-200">Retention improvement:</strong> +25%</li>
                                     <li><strong className="text-gray-200">Paid conversion:</strong> +60%</li>
                                     <li><strong className="text-gray-200">CAC reduction:</strong> -30%</li>
                                 </ul>
                             </div>
                             <div>
                                 <h4 className="font-bold text-blue-400 mb-6 uppercase text-xs tracking-widest flex items-center gap-2"><RocketIcon /> Long-term Strategic Value</h4>
                                 <ul className="list-disc list-inside text-gray-400 text-xs space-y-3 leading-relaxed">
                                     <li>Stronger two-sided marketplace with better liquidity</li>
                                     <li>Multiple revenue streams reducing dependency</li>
                                     <li>Product-led growth reducing sales costs</li>
                                     <li>Data network effects creating moat</li>
                                     <li>Platform stickiness through integrated workflows</li>
                                 </ul>
                             </div>
                         </div>
                    </motion.div>
                </motion.section>

                {/* View Full Strategy & Prototype */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
                    className="mt-24 text-center bg-[#111623] p-12 rounded-xl border border-gray-800 shadow-2xl relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold uppercase tracking-widest mb-6">View Full Strategy & Prototype</h2>
                        <p className="mt-4 text-gray-400 max-w-3xl mx-auto leading-relaxed text-sm">Access the complete growth strategy presentation with detailed analysis, AARRR breakdown, wireframes, and financial projections.</p>
                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a href="https://pitch.com/v/naukri-product-growth-assignment-jbkmju/c672848a-53d6-40db-b81d-85615e03eeff" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-4 w-full sm:w-auto px-10 py-5 text-xs font-bold uppercase tracking-widest text-[#0C0F1D] bg-[#C5A059] rounded-sm transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(197,160,89,0.3)]">
                                View on Pitch.com
                            </a>
                            <a href="https://drive.google.com/file/d/18JwYErgXT_v6utAOi281WEFHgdn_lSow/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-4 w-full sm:w-auto px-10 py-5 text-xs font-bold uppercase tracking-widest text-gray-300 border border-gray-700 rounded-sm transition-all duration-300 hover:border-[#C5A059] hover:text-[#C5A059]">
                                View Video
                            </a>
                            <a href="https://www.figma.com/proto/78cW3MZKMawzjxv3aehI7L/Untitled?node-id=1-2&t=9lRTWa4q5ORBKNol-1&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-4 w-full sm:w-auto px-10 py-5 text-xs font-bold uppercase tracking-widest text-gray-300 border border-gray-700 rounded-sm transition-all duration-300 hover:border-[#C5A059] hover:text-[#C5A059]">
                               View Prototype
                            </a>
                        </div>
                        <div className="mt-12 flex flex-wrap justify-center gap-3">
                            {[
                                "Interactive wireframe prototypes",
                                "Video walkthrough of proposed changes",
                                "Detailed user journey maps",
                                "Revenue model calculations",
                                "Implementation roadmap"
                            ].map((tag, idx) => (
                                <span key={idx} className="px-4 py-2 text-[10px] uppercase font-bold tracking-widest bg-gray-800/40 text-gray-500 border border-gray-800 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="mt-12 text-gray-600 text-xs font-medium italic">For questions or feedback, contact: shubhasree.sarkar3103@gmail.com</p>
                    </div>
                </motion.section>

                 {/* 14. Final CTA */}
                <motion.section
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-extrabold tracking-tight uppercase tracking-widest text-[#E6EAF2] flex items-center justify-center gap-4"><RocketIcon /> Have a similar growth challenge?</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-[#A8B0C2] leading-relaxed">I design pragmatic, metric-driven growth systems. If you have a project in mind, let’s create measurable impact.</p>
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button onClick={() => navigateTo('contact')} className="w-full sm:w-auto px-10 py-4 text-sm font-bold tracking-widest uppercase text-[#0C0F1D] bg-[#C5A059] rounded-sm transition-all duration-300 hover:scale-105 hover:neon-glow">
                           Get In Touch
                        </button>
                        <button onClick={() => navigateTo('projects')} className="w-full sm:w-auto px-10 py-4 text-sm font-bold tracking-widest uppercase text-[#C5A059] border-2 border-[#C5A059]/40 rounded-sm transition-all duration-300 hover:scale-105 hover:border-[#C5A059] hover:neon-text">
                           View My Projects
                        </button>
                    </div>
                </motion.section>
            </div>
         </div>
    );
};

export default NaukriCaseStudy;