import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Icons
const ProjectOverviewIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
const SummaryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
const SkillsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const CategoryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
const DurationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ToolsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;

// My Approach Icons
const ApproachSparkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442a.562.562 0 01.311.988l-4.135 3.547a.563.563 0 00-.184.563l1.113 5.473a.562.562 0 01-.846.615L12 17.581a.563.563 0 00-.532 0l-4.896 2.477a.562.562 0 01-.846-.615l1.113-5.473a.563.563 0 00-.184-.563L2.552 10.39a.562.562 0 01.311-.988l5.518-.442a.563.563 0 00.475-.345l2.125-5.111z" /></svg>;
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const UserGroupIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>;
const BookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>;
const WarningIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>;
const StrategyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>;

// New Section Icons
const ChallengeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const QuestionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const DescriptionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const ContextIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const DiscoveryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const IntelIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const InsightsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const OpportunityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const MetricsHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const GeoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const SegmentIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
const PriceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>;
const SuccessHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>;
const AdoptionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>;
const ImpactIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const DeliverablesHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
const DashboardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M4 9h16m-12 0v10" /></svg>;
const OutcomeHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>;
const DeliverablesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>;
const MethodologyHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>;
const ProcessIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>;
const FrameworkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
const PitchHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
const CTAHeaderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;


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
        title: "Understanding Langy’s Expansion Goals", 
        subtitle: "Client context and strategic objectives",
        body: (
            <div className="space-y-4">
                <p>Analyzed Langy's global expansion and strategic priorities, identifying India as a key market.</p>
                <div>
                    <p className="font-bold text-gray-200 mb-2">Key Questions:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Which cities offer highest potential?</li>
                        <li>What’s the optimal pricing strategy?</li>
                        <li>What menu items resonate locally?</li>
                        <li>Who are the target customer segments?</li>
                    </ul>
                </div>
            </div>
        )
    },
    { 
        icon: <UserGroupIcon />,
        title: "Zomato Analytica Division Strategy", 
        subtitle: "B2B analytics platform and capabilities",
        body: (
            <div className="space-y-4">
                <p>Positioned Zomato Analytica to leverage Zomato’s vast dataset for B2B insights.</p>
                <div>
                    <p className="font-bold text-gray-200 mb-2">Core Value:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Access to India’s largest food ordering data.</li>
                        <li>Real-time market and consumer behavior trends.</li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold text-gray-200 mb-2">Revenue Model:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Subscription-based dashboard access.</li>
                        <li>Custom analytics projects.</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        icon: <BookIcon />,
        title: "Defining Objectives & Scope",
        subtitle: "Project parameters and success criteria",
        body: (
            <div className="space-y-4">
                <p>Primary objective: Deliver an actionable dashboard for Langy's India entry. Scope included city selection, pricing, menu-market fit, and customer personas, focusing on Tier 1 & 2 cities.</p>
            </div>
        )
    },
    {
        icon: <WarningIcon />,
        title: "Data Sources & User Categorization",
        subtitle: "Understanding available data and target audiences",
        body: (
            <div className="space-y-4">
                <p>Mapped Zomato's rich data sources (customer, interaction, technical) to specific stakeholder needs (CEO, Marketing, Operations) to ensure dashboard relevance and usability.</p>
            </div>
        )
    },
    {
        icon: <StrategyIcon />,
        title: "Funnel Analysis & Metrics Framework",
        subtitle: "Defining measurement approach",
        body: (
            <div className="space-y-4">
                <p>Developed a dual-funnel analysis for Langy’s business goals and Zomato’s market opportunity. Established key metric categories: Geographic, Consumer Behavior, Menu, and Pricing.</p>
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

interface LangysCaseStudyProps {
    navigateTo: (page: string) => void;
}

const LangysCaseStudy: React.FC<LangysCaseStudyProps> = ({ navigateTo }) => {
    return (
         <div className="py-24 sm:py-32 bg-[#0C0F1D]">
            <div className="container max-w-7xl mx-auto px-6 lg:px-8">
                {/* Breadcrumbs & Header */}
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-gray-400" aria-label="Breadcrumb">
                            <a onClick={() => navigateTo('home')} className="hover:text-white cursor-pointer">Home</a> / 
                            <a onClick={() => navigateTo('projects')} className="hover:text-white cursor-pointer"> Projects</a> / 
                            <span className="text-white"> Product Analytics – Langys Intelligent Dashboard</span>
                        </div>
                         <a onClick={() => navigateTo('projects')} className="cursor-pointer px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#C5A059] border-2 border-[#C5A059]/40 rounded-sm transition-all duration-300 hover:scale-105 hover:border-[#C5A059]">
                            &larr; Back to Projects
                        </a>
                    </div>
                     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#E6EAF2] text-center mt-12 mb-12">
                        Product Analytics – <span className="text-[#C5A059] text-glow">Langys Intelligent Dashboard</span>
                    </h1>
                     <div className="max-w-2xl mx-auto bg-[#111623] p-8 rounded-2xl border border-gray-800 shadow-lg text-center">
                        <h2 className="text-3xl font-bold uppercase tracking-widest text-[#C5A059]">Market Expansion</h2>
                        <p className="text-gray-400 mt-2 font-medium">Enabling Data-Driven Market Expansion for an International QSR Chain</p>
                    </div>
                </motion.div>

                {/* Project Overview */}
                 <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-24">
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <ProjectOverviewIcon />
                        <h2 className="text-3xl md:text-4xl font-bold text-[#E6EAF2]">Project Overview</h2>
                    </div>
                     
                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                         <div className="lg:col-span-8 flex flex-col gap-6">
                            <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl flex-grow h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="mt-1"><SummaryIcon/></div>
                                    <h3 className="font-bold text-2xl text-white">Summary</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Leveraged Zomato's extensive consumer, order, and location intelligence to deliver a comprehensive real-time analytics dashboard, enabling Langy's to make data-driven decisions for India market entry — including ideal launch cities, pricing strategy, menu preferences, and customer segmentation. As Product Manager for Zomato Analytica, I created a robust insight framework guiding decisions on market entry, location strategy, pricing, and competition in India's food service market.
                                </p>
                            </motion.div>
                         </div>
                         
                         <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 flex flex-col items-center justify-center text-center shadow-lg flex-grow">
                                <CategoryIcon />
                                <h4 className="font-bold text-lg text-white mt-4 uppercase tracking-widest">Category</h4>
                                <p className="text-[#A8B0C2] text-md mt-1">Academic</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 flex flex-col items-center justify-center text-center shadow-lg flex-grow">
                                <DurationIcon />
                                <h4 className="font-bold text-lg text-white mt-4 uppercase tracking-widest">Duration</h4>
                                <p className="text-[#A8B0C2] text-md mt-1">3 weeks</p>
                            </motion.div>
                         </div>

                         <div className="lg:col-span-8">
                            <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="mt-1"><SkillsIcon/></div>
                                    <h3 className="font-bold text-2xl text-white">Skills Demonstrated</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {["Funnel Analytics", "Market Research", "Personas", "Problem Solving", "Product Analytics", "Success Metrics", "User Problems"].map(s => (
                                        <span key={s} className="px-4 py-2 text-sm bg-gray-800/60 text-gray-300 rounded-full border border-gray-700/50">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                         </div>

                         <div className="lg:col-span-4">
                            <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl h-full flex flex-col items-center justify-center text-center">
                                <ToolsIcon />
                                <h4 className="font-bold text-lg text-white mt-4 uppercase tracking-widest">Tools Used</h4>
                                <p className="text-gray-400 text-md mt-2">Pitch · MixPanel</p>
                            </motion.div>
                         </div>
                     </div>
                 </motion.section>

                {/* Project Challenge */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-32">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <ChallengeIcon />
                            <h2 className="text-3xl md:text-4xl font-bold text-[#E6EAF2]">Project Challenge</h2>
                        </div>
                    </div>
                    
                    <div className="space-y-6 max-w-6xl mx-auto">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="font-bold text-xl text-[#C5A059] mb-4 flex items-center gap-3"><QuestionIcon /> Main Question</h3>
                            <p className="text-gray-200 text-2xl leading-relaxed italic">
                                “How can we identify the key metrics to support Langy's entry into the Indian market through Zomato's Analytica platform?”
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="font-bold text-xl text-[#C5A059] mb-4 flex items-center gap-3"><DescriptionIcon /> Brief Description</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Designed a comprehensive analytics dashboard leveraging Zomato's data ecosystem to power strategic expansion decisions for Langy's. Created a real-time insight framework covering city selection, pricing optimization, menu localization, and customer segmentation for a successful India entry.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="font-bold text-xl text-[#C5A059] mb-6 flex items-center gap-3"><ContextIcon /> Business / Product Context</h3>
                            <ul className="space-y-4 text-gray-400 text-lg leading-relaxed">
                                <li className="flex gap-3">
                                    <span className="text-[#C5A059] flex-shrink-0 mt-2">•</span>
                                    <span><strong className="text-white">Client Context — Langy's:</strong> 1000+ stores in Europe; 500+ in North America; goal 5000 stores by 2030; next target: India; partnered with Zomato Analytica for data-driven expansion.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#C5A059] flex-shrink-0 mt-2">•</span>
                                    <span><strong className="text-white">Product Context — Zomato Analytica:</strong> B2B analytics division delivering rich insights to food chains; deepens B2B relationships; opens new revenue streams; empowers brands with market intelligence.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#C5A059] flex-shrink-0 mt-2">•</span>
                                    <span><strong className="text-white">Use Cases:</strong> Understand FoodTech trends · Expansion to new geographies · India market-entry strategy · Pricing/menu revamps and new SKU decisions.</span>
                                </li>
                            </ul>
                        </motion.div>
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

                {/* What I Discovered */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-32">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <DiscoveryIcon />
                            <h2 className="text-3xl md:text-4xl font-bold text-[#E6EAF2] uppercase tracking-widest">What I Discovered</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold text-[#C5A059] mb-8 uppercase tracking-widest flex items-center gap-3"><IntelIcon /> Market Intelligence</h3>
                            <div className="space-y-6 text-gray-400">
                                <div>
                                    <h4 className="text-white font-bold mb-2">High-Potential Cities Identified</h4>
                                    <p className="text-sm">Tier 1: high volume, intense competition; Tier 2: rapid growth with lower competition (strategic sweet spot).</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-2">Order Density Patterns</h4>
                                    <p className="text-sm">Metros 3-5x order density but ~2-3x higher CAC; Tier 2 growing 40-60% YoY.</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-2">Competitive Landscape</h4>
                                    <p className="text-sm">National players strong in Tier 1; local brands strong in Tier 2; clear gaps for premium ₹300-400 and value ₹99-149 positioning.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold text-[#C5A059] mb-8 uppercase tracking-widest flex items-center gap-3"><InsightsIcon /> Consumer Insights</h3>
                            <div className="space-y-6 text-gray-400">
                                <div>
                                    <h4 className="text-white font-bold mb-2">Target Persona Characteristics</h4>
                                    <p className="text-sm">Urban millennials (25-35) ordering 3-4x/month; families and office workers as secondary segments.</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-2">Behavioral Patterns</h4>
                                    <p className="text-sm">Lunch/dinner peaks; weekend spikes; premium pricing acceptable for convenience/quality.</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-2">Food Preferences</h4>
                                    <p className="text-sm">Chicken/veg critical; spicy variants perform well; combos increase order value.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold text-[#C5A059] mb-8 uppercase tracking-widest flex items-center gap-3"><OpportunityIcon /> Strategic Opportunities</h3>
                            <div className="space-y-6 text-gray-400">
                                <div>
                                    <h4 className="text-white font-bold mb-2">Menu Localization Potential</h4>
                                    <p className="text-sm">India-specific flavors, spice customization, strong vegetarian lineup.</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-2">Pricing Strategy Recommendations</h4>
                                    <p className="text-sm">Premium in Tier 1; value-focused in Tier 2.</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-2">Geographic Expansion Priority</h4>
                                    <p className="text-sm">Start with high-growth, lower-competition cities (e.g., Bangalore, Pune), then major metros (Delhi, Mumbai).</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Key Metrics Defined */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-32">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <MetricsHeaderIcon />
                            <h2 className="text-3xl md:text-4xl font-bold text-[#E6EAF2] uppercase tracking-widest">Key Metrics Defined</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold text-[#C5A059] mb-6 flex items-center gap-3"><GeoIcon /> Geographic Intelligence Metrics</h3>
                            <div className="space-y-4 text-gray-400 text-sm">
                                <p><strong className="text-white">City-level:</strong> monthly delivery orders · QSR market size & growth · AOV (burger/fast food) · Competition density (stores/100k) · Delivery infrastructure maturity · Target demographic concentration</p>
                                <p><strong className="text-white">Neighborhood:</strong> density heatmaps · peak-hour demand · income/spend capacity · office vs residential mix · saturation levels · delivery radius & times</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold text-[#C5A059] mb-6 flex items-center gap-3"><SegmentIcon /> Consumer Segmentation Metrics</h3>
                            <div className="space-y-4 text-gray-400 text-sm">
                                <p><strong className="text-white">Demographics:</strong> age, menu gender prefs, income proxies, family vs individual, new vs repeat, cross-category behavior</p>
                                <p><strong className="text-white">Behavioral segments:</strong> frequency (daily/weekly/monthly/occasional) · value (premium/mid/value) · time (lunch/dinner/late night) · occasion (convenience/celebration/comfort)</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold text-[#C5A059] mb-6 flex items-center gap-3"><MenuIcon /> Menu Intelligence Metrics</h3>
                            <div className="space-y-4 text-gray-400 text-sm">
                                <p><strong className="text-white">Demand:</strong> top 20 QSR items · rising trends · seasonal variation · customization/add-ons · veg vs non-veg split · local flavor adoption</p>
                                <p><strong className="text-white">Performance:</strong> average ratings · common complaints · repeat orders by item · item profitability proxies · cross-sell/upsell patterns</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold text-[#C5A059] mb-6 flex items-center gap-3"><PriceIcon /> Pricing Intelligence Metrics</h3>
                            <div className="space-y-4 text-gray-400 text-sm">
                                <p><strong className="text-white">Competitive benchmarking:</strong> price ranges by brand · discount depth/frequency · delivery fee strategies · combo effectiveness · premium acceptance</p>
                                <p><strong className="text-white">WTP analysis:</strong> order value distributions · elasticity indicators · checkout abandonment by price · like-for-like comparisons · promo effectiveness by discount level</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Success Metrics for Dashboard */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-32">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <SuccessHeaderIcon />
                            <h2 className="text-3xl md:text-4xl font-bold text-[#E6EAF2] uppercase tracking-widest">Success Metrics for Dashboard</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold text-[#C5A059] mb-8 uppercase tracking-widest flex items-center gap-3"><AdoptionIcon /> Adoption Metrics</h3>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></div>
                                    <span>Daily active users by stakeholder role</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></div>
                                    <span>Time spent in dashboard per session</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></div>
                                    <span>Most viewed metrics and reports</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></div>
                                    <span>Export and sharing frequency</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></div>
                                    <span>Custom report creation</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold text-[#C5A059] mb-8 uppercase tracking-widest flex items-center gap-3"><ImpactIcon /> Business Impact Metrics</h3>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></div>
                                    <span>Confidence scores in decision-making</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></div>
                                    <span>Number of data-backed decisions</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></div>
                                    <span>Alignment between recommendations and actions</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></div>
                                    <span>Speed of strategic decision-making</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></div>
                                    <span>ROI of Analytica subscription</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Dashboard Deliverables */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-32">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <DeliverablesHeaderIcon />
                            <h2 className="text-3xl md:text-4xl font-bold text-[#E6EAF2] uppercase tracking-widest">Dashboard Deliverables</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-6 leading-tight flex items-center gap-3"><DashboardIcon /> Executive Summary Dashboard (CEO/Leadership)</h3>
                            <div className="space-y-4 text-xs text-gray-400">
                                <p><strong className="text-[#C5A059] uppercase tracking-widest block mb-1">Key KPIs:</strong> India QSR TAM & growth · Top 10 recommended cities with potential scores · Estimated revenue by city tier · Competitive positioning recommendations · 3-year expansion roadmap</p>
                                <p><strong className="text-[#C5A059] uppercase tracking-widest block mb-1">Visual Components:</strong> India heat map · city comparison matrix · market sizing waterfalls · growth projections · executive summary</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-6 leading-tight flex items-center gap-3"><DashboardIcon /> Marketing Intelligence Dashboard</h3>
                            <div className="space-y-4 text-xs text-gray-400">
                                <p><strong className="text-[#C5A059] uppercase tracking-widest block mb-1">Key KPIs:</strong> Demographic/psychographic profiles · order frequency patterns · channel preferences · price sensitivity & promo response · preferred messaging</p>
                                <p><strong className="text-[#C5A059] uppercase tracking-widest block mb-1">Visual Components:</strong> Launch market sequencing · audience size by city · channel media spend recs · promo calendar · localization needs by region</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-6 leading-tight flex items-center gap-3"><DashboardIcon /> Operations Planning Dashboard</h3>
                            <div className="space-y-4 text-xs text-gray-400">
                                <p><strong className="text-[#C5A059] uppercase tracking-widest block mb-1">Key KPIs:</strong> Neighborhood recommendations · expected volumes by location · delivery radius coverage · competitor proximity · site-selection scoring</p>
                                <p><strong className="text-[#C5A059] uppercase tracking-widest block mb-1">Visual Components:</strong> Peak-hour forecasts · staffing estimates · inventory turnover · kitchen capacity recs · delivery fleet sizing</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Outcome & Business Impact */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-32">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <OutcomeHeaderIcon />
                            <h2 className="text-3xl md:text-4xl font-bold text-[#E6EAF2] uppercase tracking-widest">Outcome & Business Impact</h2>
                        </div>
                    </div>
                    <div className="max-w-6xl mx-auto space-y-8">
                        <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold text-[#C5A059] mb-4 uppercase tracking-widest flex items-center gap-3"><DeliverablesIcon /> Project Deliverables</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                50+ metric definitions (with calcs/refresh) · data dictionary · stakeholder wireframes/flows · interactivity specs (filters, drill-downs, exports) · real-time data feeds from Zomato DW · mobile-responsive views · BI handoff specs for Tableau build.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                                <h3 className="text-xl font-bold text-[#C5A059] mb-6 uppercase tracking-widest flex items-center gap-3"><ImpactIcon /> Business Impact for Langy's</h3>
                                <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
                                    <li><strong className="text-white">Informed Market Entry:</strong> Confident city selection; clear competitive positioning; realistic revenue projections.</li>
                                    <li><strong className="text-white">Operational Efficiency:</strong> Region-specific pricing; high-potential micro-locations; optimized staffing/inventory.</li>
                                    <li><strong className="text-white">Strategic Advantage:</strong> First-mover insights; localized menus; pricing aligned with willingness-to-pay.</li>
                                </ul>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                                <h3 className="text-xl font-bold text-[#C5A059] mb-6 uppercase tracking-widest flex items-center gap-3"><ImpactIcon /> Impact for Zomato Analytica</h3>
                                <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
                                    <li><strong className="text-white">Product Validation:</strong> Replicable B2B analytics framework; credibility with international brands.</li>
                                    <li><strong className="text-white">Revenue Growth:</strong> New analytics subscription stream; upsell opportunities; long-term partnership potential.</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Methodology Overview */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-32">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <MethodologyHeaderIcon />
                            <h2 className="text-3xl md:text-4xl font-bold text-[#E6EAF2] uppercase tracking-widest">Methodology Overview</h2>
                        </div>
                    </div>
                    <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl max-w-6xl mx-auto">
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-xl font-bold text-[#C5A059] mb-4 uppercase tracking-widest text-center lg:text-left flex items-center gap-3"><ProcessIcon /> Complete Project Process</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Introduction to goals → Problem understanding (Zomato POV) → Division overview → How Analytica works → Persona analysis → Objectives & scope → Data sources & target users → Data types (customer/interaction/technical) → Funnel & metrics framework → Langy's funnel analysis → Zomato's funnel analysis (Langy's POV) → Segment-wise metrics → Dashboard design & specs
                                </p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-xl font-bold text-[#C5A059] mb-6 uppercase tracking-widest flex items-center gap-3"><FrameworkIcon /> Analytical Framework</h3>
                                    <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
                                        <li className="flex gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0 mt-2"></div>
                                            <span><strong className="text-white">Data Analysis Approach:</strong> Multi-dimensional segmentation · trend analysis · competitive benchmarking · geographic clustering · demand forecasting.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0 mt-2"></div>
                                            <span><strong className="text-white">Validation Methods:</strong> Cross-reference sources · statistical significance · outlier handling · seasonal normalization · sensitivity checks.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#C5A059] mb-6 uppercase tracking-widest flex items-center gap-3"><ToolsIcon /> Tools & Technologies</h3>
                                    <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
                                        <li className="flex gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0 mt-2"></div>
                                            <span><strong className="text-white">MixPanel for Analytics:</strong> Funnels, cohorts, retention, segmentation, custom dashboards.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0 mt-2"></div>
                                            <span><strong className="text-white">Pitch for Presentation:</strong> Visual storytelling, stakeholder reviews, methodology & findings docs.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Explore Full Case Study */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
                    className="mt-32 text-center bg-[#111623] p-12 rounded-xl border border-gray-800 shadow-2xl relative overflow-hidden max-w-6xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <PitchHeaderIcon />
                        <h2 className="text-3xl font-bold uppercase tracking-widest">View Full Analytics Framework</h2>
                    </div>
                    <p className="mt-4 text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg mb-12">Access the complete product analytics presentation with detailed metric definitions, dashboard mockups, market insights, and strategic recommendations.</p>
                    <a href="https://pitch.com/v/zomato-analytica-langys-india-expansion-ww74ks" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 px-10 py-5 text-sm font-bold uppercase tracking-widest text-[#0C0F1D] bg-[#C5A059] rounded-sm transition-transform duration-300 hover:scale-105 hover:neon-glow">
                        View on Pitch.com
                    </a>
                    <div className="mt-12 flex flex-wrap justify-center gap-3">
                        {["Comprehensive metric framework", "Dashboard wireframes and user flows", "Market intelligence insights", "Competitive analysis", "Strategic recommendations"].map((tag, idx) => (
                            <span key={idx} className="px-4 py-2 text-[10px] uppercase font-bold tracking-widest bg-gray-800/40 text-gray-500 border border-gray-800 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="mt-12 text-gray-600 text-xs font-medium italic">For questions or feedback, contact: shubhasree.sarkar3103@gmail.com</p>
                </motion.section>

                 {/* Final CTA */}
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
                    <p className="mt-6 max-w-2xl mx-auto text-[#A8B0C2] leading-relaxed text-lg">I help teams turn messy market data into clear, credible decisions. If you have a product analytics or market-entry problem, let’s build something impactful.</p>
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

export default LangysCaseStudy;