import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Icons
const SummaryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const SkillsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const CategoryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
const DurationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ToolsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const ProjectChallengeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const DiscoveriesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const SwotIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const OutcomeImpactIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>;
const SuccessMetricsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>;
const ContextIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const WarningIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
const TrendingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const LightbulbIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;

// My Approach Icons
const ApproachSparkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442a.562.562 0 01.311.988l-4.135 3.547a.563.563 0 00-.184.563l1.113 5.473a.562.562 0 01-.846.615L12 17.581a.563.563 0 00-.532 0l-4.896 2.477a.562.562 0 01-.846-.615l1.113-5.473a.563.563 0 00-.184-.563L2.552 10.39a.562.562 0 01.311-.988l5.518-.442a.563.563 0 00.475-.345l2.125-5.111z" /></svg>;
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const AnalysisIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const UserGroupIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const BookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
const PriorityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 013 0m-6 3V11m0 2.5v-9a1.5 1.5 0 10-3 0v9" /></svg>;

// Generic Header Icons
const ProjectDetailsHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>;
const ProjectChallengeHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const SwotChartHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const RecommendationsHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6l-5.072-1.358a.562.562 0 010-1.084l5.072-1.358 1.358-5.072a.562.562 0 011.084 0l1.358 5.072 5.072 1.358a.562.562 0 010 1.084l-5.072 1.358-1.358 5.072a.562.562 0 01-1.084 0zM12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const PitchHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
const CTAHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
const MainQuestionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const BriefDescriptionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>;


const AccordionItem: React.FC<{ title: string; subtitle: string; body: React.ReactNode; icon: React.ReactNode; index: number }> = ({ title, subtitle, body, icon, index }) => {
    const [isOpen, setIsOpen] = useState(false); // Collapsed by default
    return (
        <motion.div variants={itemVariants} className="bg-[#111623] rounded-xl border border-gray-800 transition-colors hover:border-gray-700 overflow-hidden shadow-lg mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-start text-left p-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded-lg"
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${index}`}
            >
                <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 mt-1">{icon}</div>
                    <div className="flex-grow">
                        <h4 className="font-bold text-xl text-gray-100">{title}</h4>
                        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
                    </div>
                </div>
                <div className="text-gray-500 text-2xl flex-shrink-0 ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4.5v15m7.5-7.5h-15" /></svg>
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={`accordion-content-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                        exit={{ height: 0, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }}
                        className="overflow-hidden"
                        role="region"
                    >
                        <div className="pl-[5.5rem] pr-12 pb-8 flex gap-5">
                           <div className="w-1 bg-[#C5A059]/40 flex-shrink-0 self-stretch rounded-full"></div>
                           <div className="text-gray-400 text-base leading-relaxed flex-grow">{body}</div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const approachData = [
  {
    icon: <SearchIcon />,
    title: "Understanding the Challenge & Platform",
    subtitle: "YouTube's position and engagement dynamics",
    body: (
        <div className="space-y-4">
            <p>Analyzed YouTube's unique position as world's largest video platform with diverse content spanning education, entertainment, music, and more. Unlike Netflix's curated catalog or TikTok's infinite scroll, YouTube balances intentional search behavior with discovery-driven consumption.</p>
            <div>
                <p className="font-bold text-gray-200 mb-2">Current State Assessment:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Average session: 40 minutes (industry benchmark)</li>
                    <li>Users often have specific intent when arriving (search-driven)</li>
                    <li>Drop-off occurs between videos when recommendation relevance declines</li>
                    <li>Interface complexity sometimes creates decision fatigue</li>
                    <li>Cross-device usage patterns fragmenting watch sessions</li>
                </ul>
            </div>
            <p className="font-bold text-[#C5A059] italic mt-2">Key Insight: YouTube's challenge differs from pure entertainment platforms - must balance intentional viewing with serendipitous discovery while maintaining content quality standards.</p>
        </div>
    )
  },
  {
    icon: <AnalysisIcon />,
    title: "Market Research & Competitive Analysis",
    subtitle: "Learning from competitors and market trends",
    body: (
        <div className="space-y-4">
            <p>Conducted comprehensive analysis studying engagement strategies from leading platforms:</p>
            <div>
                <p className="font-bold text-gray-200 mb-2">Netflix Insights:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Auto-play next episode creates seamless continuation</li>
                    <li>"Continue Watching" prominent placement reduces friction</li>
                    <li>Episode cliffhangers and series structure encourage binging</li>
                </ul>
            </div>
            <div>
                <p className="font-bold text-gray-200 mb-2">TikTok Insights:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Infinite scroll eliminating decision points</li>
                    <li>Powerful personalization algorithm learning rapidly</li>
                </ul>
            </div>
            <div>
                <p className="font-bold text-gray-200 mb-2">Market Trends Identified:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Users increasingly prefer personalized, seamless experiences</li>
                    <li>Decision fatigue major cause of session abandonment</li>
                    <li>Cross-platform syncing expected as standard</li>
                </ul>
            </div>
        </div>
    )
  },
  {
    icon: <UserGroupIcon />,
    title: "User Segmentation & Persona Development",
    subtitle: "Understanding different viewer behaviors",
    body: (
        <div className="space-y-4">
            <p>Segmented YouTube users into three primary personas based on viewing behavior:</p>
            <ul className="space-y-4">
                <li>
                    <strong className="text-gray-200 block mb-1">Casual Viewers (35%):</strong> 
                    Watch sporadically, high drop-off. <span className="text-[#C5A059] font-medium">Pain points:</span> Decision fatigue, unclear next video.
                </li>
                <li>
                    <strong className="text-gray-200 block mb-1">Binge Watchers (40%):</strong> 
                    Consume multiple videos, frustrated by interruptions. <span className="text-[#C5A059] font-medium">Pain points:</span> Losing place, irrelevant suggestions.
                </li>
                <li>
                    <strong className="text-gray-200 block mb-1">Niche Enthusiasts (25%):</strong> 
                    Deeply interested in specific topics, want more curation. <span className="text-[#C5A059] font-medium">Pain points:</span> Limited curation tools, missing new content from favorite creators.
                </li>
            </ul>
        </div>
    )
  },
  {
    icon: <BookIcon />,
    title: "Jobs To Be Done & Journey Mapping",
    subtitle: "Understanding user motivations and experience",
    body: (
        <div className="space-y-4">
            <p className="font-bold text-gray-200">Identified core JTBD for different contexts:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong className="text-gray-300">Entertainment:</strong> Discover engaging content without constant decision-making.</li>
                <li><strong className="text-gray-300">Education:</strong> Find comprehensive content in logical sequence.</li>
                <li><strong className="text-gray-300">Background Content:</strong> Enjoy passive consumption without constant interaction.</li>
            </ul>
            <p>Mapped journey stages (Discovery → Engagement → Transition → Retention/Exit) and identified critical pain points, especially in the transition phase where recommendation relevance drops and friction increases.</p>
        </div>
    )
  },
  {
    icon: <PriorityIcon />,
    title: "Problem Prioritization & Solution Development",
    subtitle: "Framework-based prioritization and solutions",
    body: (
        <div className="space-y-4">
            <p>Used problem prioritization matrix evaluating issues by impact on watch session, feasibility, user segment, and competitive differentiation.</p>
            <div>
                <p className="font-bold text-gray-200 mb-2">High Priority Problems:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                    <li><strong className="text-gray-300">Transition Friction:</strong> Solved with enhanced auto-play and transparent personalization.</li>
                    <li><strong className="text-gray-300">Content Continuity:</strong> Addressed with 'Continue Watching' feature and playlist intelligence.</li>
                    <li><strong className="text-gray-300">Discovery Overwhelming:</strong> Mitigated with mood-based content curation and simplified UI.</li>
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

interface YouTubeCaseStudyProps {
    navigateTo: (page: string) => void;
}

const YouTubeCaseStudy: React.FC<YouTubeCaseStudyProps> = ({ navigateTo }) => {
    return (
         <div className="py-24 sm:py-32 bg-[#0C0F1D]">
            <div className="container max-w-7xl mx-auto px-6 lg:px-8">
                {/* 1. Breadcrumbs & Header */}
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-gray-400" aria-label="Breadcrumb">
                            <a onClick={() => navigateTo('home')} className="hover:text-white cursor-pointer">Home</a> / 
                            <a onClick={() => navigateTo('projects')} className="hover:text-white cursor-pointer"> Projects</a> / 
                            <span className="text-white"> Product Improvement of YouTube</span>
                        </div>
                         <a onClick={() => navigateTo('projects')} className="cursor-pointer px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#C5A059] border-2 border-[#C5A059]/40 rounded-sm transition-all duration-300 hover:scale-105 hover:border-[#C5A059]">
                            &larr; Back to Projects
                        </a>
                    </div>
                     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#E6EAF2] text-center mt-12 mb-4">
                        Product Improvement of <span className="text-[#C5A059] text-glow">YouTube</span>
                    </h1>
                     <p className="text-center text-xl md:text-2xl text-gray-400 mb-12 uppercase tracking-widest font-bold">Watch Session Optimization</p>
                </motion.div>

                {/* 2. Project Overview */}
                 <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-20">
                     <div className="flex items-center justify-center gap-4 mb-12">
                        <ProjectDetailsHeaderIcon />
                        <h2 className="text-3xl font-bold text-center uppercase tracking-widest text-[#E6EAF2]">Project Overview</h2>
                     </div>
                     
                     <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 mb-10 shadow-xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <div className="flex items-center gap-3 mb-6"><SummaryIcon/> <h3 className="font-bold text-2xl text-white">Summary</h3></div>
                                <p className="text-gray-400 text-lg leading-relaxed">Boost user engagement on YouTube by increasing average watch session time through a product-led strategy focused on personalization, seamless content discovery, and improved content continuity. Created a comprehensive roadmap addressing user pain points while leveraging competitive insights.</p>
                            </div>
                            <div>
                                 <div className="flex items-center gap-3 mb-6"><SkillsIcon/> <h3 className="font-bold text-2xl text-white">Skills Demonstrated</h3></div>
                                <div className="flex flex-wrap gap-2">
                                    {["Competitor Analysis", "Customer Journey Map", "GTM Strategies", "Market Analysis", "Market Research", "Personas", "Problem Prioritisation Matrix", "Product Launch", "Product Roadmap", "Solution Matrix", "Success Metrics", "SWOT Analysis", "User Segmentation", "Wireframing"].map(s => <span key={s} className="px-3 py-1.5 text-xs border border-[#C5A059]/20 bg-gray-700/30 text-gray-300 rounded-full">{s}</span>)}
                                </div>
                            </div>
                        </div>
                     </motion.div>

                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 flex flex-col items-center justify-center text-center shadow-lg hover:border-[#C5A059]/20 transition-colors">
                            <div className="mb-4"><CategoryIcon /></div>
                            <h4 className="font-bold text-xs uppercase tracking-widest text-white">Category</h4>
                            <p className="text-[#A8B0C2] text-md mt-2">Academic</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 flex flex-col items-center justify-center text-center shadow-lg hover:border-[#C5A059]/20 transition-colors">
                            <div className="mb-4"><DurationIcon /></div>
                            <h4 className="font-bold text-xs uppercase tracking-widest text-white">Duration</h4>
                            <p className="text-[#A8B0C2] text-md mt-2">3 Weeks</p>
                        </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 flex flex-col items-center justify-center text-center shadow-lg hover:border-[#C5A059]/20 transition-colors">
                            <div className="mb-4"><ToolsIcon /></div>
                            <h4 className="font-bold text-xs uppercase tracking-widest text-white">Tools Used</h4>
                            <p className="text-[#A8B0C2] text-md mt-2">Figma · Notion · Pitch · Forms</p>
                        </motion.div>
                     </div>
                 </motion.section>

                {/* 3. Project Challenge */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-32">
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <ProjectChallengeHeaderIcon />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E6EAF2] uppercase tracking-widest">Project Challenge</h2>
                    </div>
                    
                    <div className="space-y-6 max-w-6xl mx-auto">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <div className="flex items-center gap-3 mb-4 text-[#C5A059]"><MainQuestionIcon /> <h3 className="font-bold text-xl uppercase tracking-widest">Main Question</h3></div>
                            <p className="text-gray-200 text-2xl leading-relaxed italic">
                                “How can YouTube increase average watch session duration to boost user engagement and platform retention through strategic product interventions?”
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <div className="flex items-center gap-3 mb-4 text-[#C5A059]"><BriefDescriptionIcon /> <h3 className="font-bold text-xl uppercase tracking-widest">Brief Description</h3></div>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Developed product-led strategy to enhance YouTube's watch session time by focusing on three core pillars: advanced personalization algorithms, seamless content discovery mechanisms, and improved content continuity. Created comprehensive roadmap addressing user pain points while leveraging competitive insights from Netflix and TikTok's binge-watching success.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl">
                                <div className="flex items-center gap-3 mb-6 text-[#C5A059]"><ContextIcon /> <h4 className="font-bold text-lg uppercase tracking-widest">Platform Context</h4></div>
                                <p className="text-gray-400 text-sm leading-relaxed">YouTube is leading video-sharing platform aiming to maximize user engagement by increasing watch session duration. Longer sessions enhance user satisfaction while driving higher advertising revenues. Current average session duration: approximately 40 minutes.</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl">
                                <div className="flex items-center gap-3 mb-6 text-[#C5A059]"><WarningIcon /> <h4 className="font-bold text-lg uppercase tracking-widest">Core Challenge</h4></div>
                                <ul className="list-disc list-inside text-gray-400 text-sm space-y-3 leading-relaxed marker:text-[#C5A059]">
                                    <li>Retaining users for extended periods beyond initial intent</li>
                                    <li>Encouraging continuous content consumption across multiple videos</li>
                                    <li>Reducing drop-off rates between videos and maintaining momentum</li>
                                    <li>Competing with platforms like Netflix and TikTok that excel at binge-watching</li>
                                </ul>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl">
                                <div className="flex items-center gap-3 mb-6 text-[#C5A059]"><TrendingIcon /> <h4 className="font-bold text-lg uppercase tracking-widest">Strategic Importance</h4></div>
                                <ul className="list-disc list-inside text-gray-400 text-sm space-y-3 leading-relaxed marker:text-[#C5A059]">
                                    <li>User satisfaction and platform stickiness</li>
                                    <li>Advertising revenue through increased ad impressions</li>
                                    <li>Creator ecosystem health through more views</li>
                                    <li>Competitive positioning against emerging platforms</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* MY APPROACH - Restructured Section */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-32">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <ApproachSparkIcon />
                            <h2 className="text-3xl font-bold uppercase tracking-[0.2em] text-[#E6EAF2]">MY APPROACH</h2>
                        </div>
                    </div>
                    <div className="max-w-6xl mx-auto">
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

                {/* 5. What I Discovered */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-32">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <DiscoveriesIcon />
                            <h2 className="text-3xl md:text-4xl font-bold text-[#E6EAF2] uppercase tracking-widest">What I Discovered</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl hover:border-[#C5A059]/20 transition-all duration-300">
                            <h3 className="text-xl font-bold text-[#C5A059] mb-8 uppercase tracking-widest">User Behavior Insights</h3>
                            <ul className="list-disc list-inside space-y-6 text-gray-400 text-sm leading-relaxed marker:text-[#C5A059]">
                                <li><strong className="text-white">Session patterns:</strong> Intent vs. exploration; significant drop-offs at 15 and 40 mins marks.</li>
                                <li><strong className="text-white">Decision fatigue:</strong> Users often abandon platform after 3-4 manual selections due to choice overload.</li>
                                <li><strong className="text-white">Cross-device switching:</strong> 43% of users experience session loss when switching from mobile to desktop.</li>
                            </ul>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl hover:border-[#C5A059]/20 transition-all duration-300">
                            <h3 className="text-xl font-bold text-[#C5A059] mb-8 uppercase tracking-widest">Competitive Intelligence</h3>
                            <ul className="list-disc list-inside space-y-6 text-gray-400 text-sm leading-relaxed marker:text-[#C5A059]">
                                <li><strong className="text-white">Netflix:</strong> Reduces friction via prominent "Continue Watching" and auto-play next episode.</li>
                                <li><strong className="text-white">TikTok:</strong> Achievement of 52-min average sessions through frictionless infinite transitions.</li>
                                <li><strong className="text-white">Spotify:</strong> Creation of habit-forming personalized daily mix playlists.</li>
                                <li><strong className="text-white">YouTube Advantages:</strong> Content diversity, SEO, established creator ecosystem.</li>
                            </ul>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl hover:border-[#C5A059]/20 transition-all duration-300">
                            <h3 className="text-xl font-bold text-[#C5A059] mb-8 uppercase tracking-widest">Product Opportunities</h3>
                            <ul className="list-disc list-inside space-y-6 text-gray-400 text-sm leading-relaxed marker:text-[#C5A059]">
                                <li><strong className="text-white">Quick Wins (0-3 months):</strong> Continue Watching UI optimization, Auto-Play intent detection.</li>
                                <li><strong className="text-white">Strategic Bets (3-9 months):</strong> Interactive smart playlists, cross-device session syncing.</li>
                                <li><strong className="text-white">Transformative (9-18 months):</strong> AI-powered mood-based curation, social co-watching features.</li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.section>

                {/* 6. Strategic Recommendations */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-32">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <RecommendationsHeaderIcon />
                            <h2 className="text-3xl md:text-4xl font-bold text-[#E6EAF2] uppercase tracking-widest">Strategic Recommendations</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">“Continue Watching” Reimagined</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Dedicated home section + cross-device sync + smart progress detection.</p>
                            <div className="mt-8 pt-6 border-t border-gray-800">
                                <p className="text-[#C5A059] font-bold text-lg">→ 25% session abandonment reduction, 15% completion lift</p>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">Auto-Play Intelligence</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">ML-based adaptive auto-play, real-time feedback loops based on viewer engagement.</p>
                            <div className="mt-8 pt-6 border-t border-gray-800">
                                <p className="text-[#C5A059] font-bold text-lg">→ +20% recommendation relevance, -18% drop-offs</p>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">Interactive Playlists</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Dynamic, mood-based, creator-collaborative playlists that adapt live.</p>
                            <div className="mt-8 pt-6 border-t border-gray-800">
                                <p className="text-[#C5A059] font-bold text-lg">→ +30% longer sessions, higher creator engagement</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* 7. SWOT Analysis */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-32">
                     <div className="flex items-center justify-center gap-4 mb-16">
                        <SwotChartHeaderIcon />
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#E6EAF2]">SWOT Analysis</h2>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-green-500/20 shadow-lg">
                            <h3 className="font-bold text-xl text-green-400 mb-6 uppercase tracking-widest flex items-center gap-2">Strengths</h3>
                            <ul className="list-disc list-inside space-y-3 text-gray-400 text-sm leading-relaxed marker:text-green-500/60">
                                <li>Vast Content Library: Unmatched variety, constant freshness.</li>
                                <li>Advanced Recommendation Technology: Sophisticated algorithms, real-time trending.</li>
                                <li>Creator Ecosystem: Millions of creators, strong monetization paths.</li>
                                <li>Platform Maturity: Established habits, strong global SEO.</li>
                            </ul>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-red-500/20 shadow-lg">
                            <h3 className="font-bold text-xl text-red-400 mb-6 uppercase tracking-widest flex items-center gap-2">Weaknesses</h3>
                             <ul className="list-disc list-inside space-y-3 text-gray-400 text-sm leading-relaxed marker:text-red-500/60">
                                <li>Interface Complexity: Overwhelming choices, decision fatigue.</li>
                                <li>Limited Content Curation Control: Users want more influence over feed.</li>
                                <li>Ad Experience: Frequent interruptions leading to ad fatigue.</li>
                                <li>Recommendation Staleness: Algorithms sometimes get stuck in loops.</li>
                            </ul>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-blue-500/20 shadow-lg">
                            <h3 className="font-bold text-xl text-blue-400 mb-6 uppercase tracking-widest flex items-center gap-2">Opportunities</h3>
                             <ul className="list-disc list-inside space-y-3 text-gray-400 text-sm leading-relaxed marker:text-blue-500/60">
                                <li>Personalized Experience Demand: Growing user expectation for tailoring.</li>
                                <li>Technology Advancements: Improved streaming, AR/VR integration.</li>
                                <li>Educational Content Growth: Opportunity for structured learning paths.</li>
                                <li>Premium Features Acceptance: Users willing to pay for enhanced UX.</li>
                                <li>Social Viewing Trends: Co-watching and community curation.</li>
                            </ul>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-orange-500/20 shadow-lg">
                            <h3 className="font-bold text-xl text-orange-400 mb-6 uppercase tracking-widest flex items-center gap-2">Threats</h3>
                             <ul className="list-disc list-inside space-y-3 text-gray-400 text-sm leading-relaxed marker:text-orange-500/60">
                                <li>Emerging Competitors: TikTok, Netflix, Twitch capturing segments.</li>
                                <li>Changing Consumption Habits: Shorter attention spans, preferences.</li>
                                <li>Creator Platform Competition: Alternative platforms for creators.</li>
                                <li>Regulatory Challenges: Content moderation and privacy regulations.</li>
                                <li>Ad Blockers: Growing usage, pressure on free tier revenue.</li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.section>

                {/* 8. Success Metrics */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-32">
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <SuccessMetricsIcon />
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#E6EAF2]">Success Metrics</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest leading-tight">Average Session Duration</h3>
                            <p className="text-4xl font-bold text-[#C5A059] text-glow">50 minutes (+25%)</p>
                            <p className="text-sm text-gray-400 mt-6 leading-relaxed">Average time from session start to last video end. Primary indicator of engagement increase directly impacting ad revenue. (Baseline: 40 minutes)</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest leading-tight">Feature Adoption Rate</h3>
                            <p className="text-4xl font-bold text-[#C5A059] text-glow">60% usage</p>
                            <p className="text-sm text-gray-400 mt-6 leading-relaxed">60% "Continue Watching" usage. Auto-play acceptance: Target 75% (up from 60%). Interactive playlist engagement: Target 40% of users. Validates effectiveness.</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest leading-tight">Drop-off Rate Reduction</h3>
                            <p className="text-4xl font-bold text-[#C5A059] text-glow">&lt;15% between-video</p>
                            <p className="text-sm text-gray-400 mt-6 leading-relaxed">Reduced from ~22%. 15-minute mark retention: Target &gt;85%. 40-minute mark retention: Target &gt;60%. Identifies friction points and improvement areas.</p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-2xl font-bold text-[#C5A059] mb-8 uppercase tracking-widest">Secondary Metrics</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase mb-2">User Satisfaction Score</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Target: NPS &gt;40 for new features. Ensures engagement increases don't sacrifice user experience quality.</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase mb-2">Revenue Impact</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Target: +18% revenue per user. Business viability of engagement improvements through more impressions.</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase mb-2">Content Diversity</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Target: +15% topics explored per session. Ensures recommendation improvements don't create echo chambers.</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-2xl font-bold text-[#C5A059] mb-8 uppercase tracking-widest">Success Criteria Timeline</h3>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase mb-3 flex items-center gap-2">3-Month Goals</h4>
                                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 ml-2">
                                        <li>Deploy 'Continue Watching' & auto-play improvements</li>
                                        <li>Achieve 10% session duration increase</li>
                                        <li>Reach 50% feature adoption</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase mb-3 flex items-center gap-2">6-Month Goals</h4>
                                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 ml-2">
                                        <li>Full cross-device sync implementation</li>
                                        <li>18% session duration increase achieved</li>
                                        <li>Measurable improvement in user satisfaction scores</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase mb-3 flex items-center gap-2">12-Month Goals</h4>
                                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 ml-2">
                                        <li>25% session duration increase achieved</li>
                                        <li>Market-leading engagement metrics established</li>
                                        <li>Sustainable positive revenue impact demonstrated</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* 9. Outcome & Impact */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-32">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <OutcomeImpactIcon />
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E6EAF2] uppercase tracking-widest">Outcome & Impact</h2>
                        </div>
                    </div>
                    <div className="max-w-6xl mx-auto space-y-12">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-2xl font-bold text-[#C5A059] mb-10 uppercase tracking-widest text-center">Strategic Deliverables</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                <div>
                                    <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest flex items-center gap-2">Comprehensive Product Roadmap</h4>
                                    <ul className="list-disc list-inside text-gray-400 text-xs space-y-3 leading-relaxed marker:text-[#C5A059]">
                                        <li>User-centric feature prioritization</li>
                                        <li>Phased implementation plan spanning 18 months</li>
                                        <li>Clear success metrics and measurement framework</li>
                                        <li>Resource requirements and team allocation</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest flex items-center gap-2">Feature Specifications</h4>
                                    <ul className="list-disc list-inside text-gray-400 text-xs space-y-3 leading-relaxed marker:text-[#C5A059]">
                                        <li>Detailed wireframes and user flows</li>
                                        <li>Technical requirements documentation</li>
                                        <li>Design system integration guidelines</li>
                                        <li>Implementation complexity assessment</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest flex items-center gap-2">Go-to-Market Strategy</h4>
                                    <ul className="list-disc list-inside text-gray-400 text-xs space-y-3 leading-relaxed marker:text-[#C5A059]">
                                        <li>Phased rollout plan minimizing risk</li>
                                        <li>User education and communication strategy</li>
                                        <li>Creator partnership programs</li>
                                        <li>Marketing and PR timeline</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-2xl font-bold text-[#C5A059] mb-10 uppercase tracking-widest text-center">Anticipated Business Impact</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="space-y-4">
                                    <h4 className="font-bold text-white text-xs uppercase tracking-widest">Engagement Improvements</h4>
                                    <ul className="list-disc list-inside text-gray-400 text-[10px] space-y-2 leading-relaxed marker:text-[#C5A059]">
                                        <li>25% increase in average session duration (40 → 50 mins)</li>
                                        <li>18% reduction in between-video drop-offs</li>
                                        <li>30% improvement in recommendation relevance scores</li>
                                        <li>65% increase in "Continue Watching" feature usage</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-bold text-white text-xs uppercase tracking-widest">Revenue Implications</h4>
                                    <ul className="list-disc list-inside text-gray-400 text-[10px] space-y-2 leading-relaxed marker:text-[#C5A059]">
                                        <li>20% increase in ad impressions per session</li>
                                        <li>Higher ad revenue without increased user acquisition costs</li>
                                        <li>Potential Premium conversion uplift through feature gating</li>
                                        <li>Improved creator satisfaction driving content quality</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-bold text-white text-xs uppercase tracking-widest">Competitive Positioning</h4>
                                    <ul className="list-disc list-inside text-gray-400 text-[10px] space-y-2 leading-relaxed marker:text-[#C5A059]">
                                        <li>Market-leading session duration metrics</li>
                                        <li>Differentiation through seamless experience and personalization</li>
                                        <li>Reduced churn to competitors like TikTok</li>
                                        <li>Enhanced platform moat through switching costs</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-bold text-white text-xs uppercase tracking-widest">User Experience</h4>
                                    <ul className="list-disc list-inside text-gray-400 text-[10px] space-y-2 leading-relaxed marker:text-[#C5A059]">
                                        <li>Reduced frustration and decision fatigue</li>
                                        <li>Improved content discovery and satisfaction</li>
                                        <li>Seamless cross-device experience</li>
                                        <li>Greater control and transparency in recommendations</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* 10. View Full Strategy & Wireframes */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
                    className="mt-32 text-center bg-[#111623] p-12 rounded-xl border border-gray-800 shadow-2xl relative overflow-hidden max-w-6xl mx-auto"
                >
                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <PitchHeaderIcon />
                            <h2 className="text-3xl font-bold uppercase tracking-widest">View Full Strategy & Wireframes</h2>
                        </div>
                        <p className="mt-4 text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg mb-12">Access the complete product improvement strategy with detailed competitive analysis, user research findings, wireframes, mockups, and implementation roadmap.</p>
                        <a href="https://pitch.com/v/youtube-kkisyi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 px-10 py-5 text-sm font-bold uppercase tracking-widest text-[#0C0F1D] bg-[#C5A059] rounded-sm transition-transform duration-300 hover:scale-105 hover:neon-glow">
                           View on Pitch.com
                        </a>
                        <div className="mt-12 flex flex-wrap justify-center gap-3">
                            {[
                                "Comprehensive market analysis",
                                "Detailed user personas and journey maps",
                                "Interactive wireframes and mockups",
                                "Implementation timeline and resource planning",
                                "Success metrics framework"
                            ].map((tag, idx) => (
                                <span key={idx} className="px-4 py-2 text-[10px] uppercase font-bold tracking-widest bg-gray-800/40 text-gray-500 border border-gray-800 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="mt-12 text-gray-600 text-xs font-medium italic">For questions or feedback, contact: shubhasree.sarkar3103@gmail.com</p>
                    </div>
                </motion.section>

                 {/* 11. Final CTA */}
                <motion.section
                    className="mt-32 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <CTAHeaderIcon />
                        <h2 className="text-3xl font-extrabold tracking-tight uppercase tracking-widest text-[#E6EAF2]">Have a similar challenge?</h2>
                    </div>
                    <p className="mt-6 max-w-2xl mx-auto text-[#A8B0C2] leading-relaxed text-lg">I’m passionate about tackling complex problems and building habit-forming products. If you have a project in mind, let’s create something impactful together.</p>
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

export default YouTubeCaseStudy;
