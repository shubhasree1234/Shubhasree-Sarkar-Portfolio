import React from 'react';
import { motion, Variants } from 'framer-motion';

// Icons
const ProjectDetailsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /></svg>;
const ProjectChallengeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const DiscoveriesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const KeyUserProblemsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" /></svg>;
const TargetPersonasIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
const ResearchMethodologyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const CustomerJourneyMapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>;
const OutcomeImpactIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>;
const MethodologyOverviewIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

interface AINoteTakerCaseStudyProps {
    navigateTo: (page: string) => void;
}

const AINoteTakerCaseStudy: React.FC<AINoteTakerCaseStudyProps> = ({ navigateTo }) => {
    return (
        <div className="py-24 sm:py-32 bg-[#0C0F1D]">
            <div className="container max-w-7xl mx-auto px-6 lg:px-8">
                {/* Breadcrumbs & Header */}
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-gray-400">
                            <a onClick={() => navigateTo('home')} className="hover:text-white cursor-pointer">Home</a> / 
                            <a onClick={() => navigateTo('projects')} className="hover:text-white cursor-pointer"> Projects</a> / 
                            <span className="text-white"> AI Note-taking App Case Study</span>
                        </div>
                        <a onClick={() => navigateTo('projects')} className="cursor-pointer px-4 py-2 text-sm font-semibold text-gray-200 border border-gray-600 rounded-lg transition-all duration-300 hover:border-[#C5A059] hover:neon-text">
                            &larr; Back to Projects
                        </a>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#E6EAF2] text-center mt-12 mb-4">
                        User Research & Product Discovery - AI Note-taking App
                    </h1>
                     <p className="text-center text-lg text-gray-400 mb-12">User Research & Product Discovery - Automated AI Note-taking app</p>
                </motion.div>

                 {/* Two-Column Layout */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <ProjectDetailsIcon />
                            <h2 className="text-2xl font-bold text-white">Project Details</h2>
                        </div>
                        <div className="bg-[#111623] p-8 rounded-xl border border-gray-800 flex-grow space-y-6">
                            <div>
                                <h4 className="font-semibold text-lg text-[#C5A059]">Category</h4>
                                <span className="mt-2 inline-block px-3 py-1 text-sm bg-blue-900/50 text-blue-300 rounded-full font-semibold">Academic</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-[#C5A059]">Summary</h4>
                                <p className="text-gray-400 mt-2">Comprehensive user research study for building a next-generation AI-powered notetaker competing with Otter.ai and Fireflies.ai. Two primary research focus areas:</p>
                                <ul className="list-disc list-inside text-gray-400 space-y-1 mt-2">
                                    <li>To understand what users do for note-taking and what kind of major users actually takes notes</li>
                                    <li>To understand what problems users are facing while using AI Note-taking tools</li>
                                </ul>
                                <p className="text-gray-400 mt-4">As Founding Product Manager, conducted end-to-end user research combining quantitative surveys and qualitative interviews to uncover functional and emotional user needs.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-[#C5A059]">Duration</h4>
                                <p className="text-gray-400 mt-2 font-medium">3 weeks</p>
                            </div>
                             <div>
                                <h4 className="font-semibold text-lg text-[#C5A059]">Skills Demonstrated</h4>
                                <div className="flex flex-wrap gap-2 mt-2">
                                   {["Customer Journey Map", "Customer Voice & Analytics", "Data Analysis & Interpretation", "Jobs To Be Done", "Market Research", "Personas", "Problem Solving", "Product Thinking", "Research Methodology", "User Insights", "User Interviews", "User Problems", "User Research", "User Surveys"].map(s => <span key={s} className="px-3 py-1 text-xs border border-[#C5A059]/20 bg-gray-700/30 text-gray-300 rounded-full">{s}</span>)}
                                </div>
                            </div>
                            <div>
                                 <h4 className="font-semibold text-lg text-[#C5A059]">Tools Used</h4>
                                 <div className="flex flex-wrap gap-2 mt-2">
                                     <span className="px-3 py-1 text-sm border border-[#C5A059]/20 bg-gray-700/30 text-gray-300 rounded-full">Pitch</span>
                                     <span className="px-3 py-1 text-sm border border-[#C5A059]/20 bg-gray-700/30 text-gray-300 rounded-full">Google Forms</span>
                                 </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                     <motion.div variants={itemVariants}>
                        <div className="flex items-center gap-3 mb-4">
                            <ProjectChallengeIcon />
                             <h2 className="text-2xl font-bold text-white">Project Challenge</h2>
                        </div>
                        <div className="space-y-6">
                             <div className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                                <h3 className="font-semibold text-lg text-[#C5A059]">Main Question</h3>
                                <p className="mt-2 text-gray-300 text-xl italic">“How can we build an AI-powered notetaker that users actually trust and adopt, when most still fall back on manual note-taking despite a decade of AI solutions?”</p>
                            </div>
                             <div className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                                <h3 className="font-semibold text-lg text-[#C5A059]">Brief Description</h3>
                                <p className="mt-2 text-gray-400">Despite AI notetakers existing for over a decade, most users still resort to manual note-taking—typing or writing during meetings, losing focus and missing key takeaways. There's a clear gap between automation capability and user trust, usability, and relevance. This research aimed to uncover why and identify opportunities for the next generation of AI note-taking tools.</p>
                            </div>
                             <div className="bg-[#111623] p-8 rounded-xl border border-gray-800">
                                <h3 className="font-semibold text-lg text-[#C5A059]">Research Context</h3>
                                <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                                    <li><strong>Role:</strong> Founding Product Manager for new AI-powered notetaker</li>
                                    <li><strong>Market:</strong> Competing with established players like Otter.ai and Fireflies.ai</li>
                                    <li><strong>Opportunity:</strong> Gap between automation potential and actual user adoption</li>
                                </ul>
                            </div>
                             <div className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl">
                                 <h3 className="font-semibold text-lg text-[#C5A059]">Core JTBD (Job To Be Done)</h3>
                                 <div className="mt-4 border-l-2 border-[#C5A059] pl-4">
                                     <p className="text-gray-300 italic">“When I’m in a meeting, I want to capture important details effortlessly, so I can stay focused and never miss a critical point.”</p>
                                     <p className="mt-3 text-sm text-gray-500 uppercase tracking-widest font-bold">Mapped core JTBD</p>
                                 </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>
                
                {/* What I Discovered */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-24">
                    <div className="flex items-center justify-center gap-4 mb-12">
                         <DiscoveriesIcon />
                         <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E6EAF2]">What I Discovered</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                        {/* Card 1: User Behaviors & Patterns */}
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 flex flex-col hover:border-[#C5A059]/30 transition-colors shadow-xl">
                            <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-8 text-center">User Behaviors & Patterns</h3>
                            <div className="space-y-8 flex-grow">
                                <div>
                                    <h4 className="font-semibold text-lg text-[#C5A059] mb-2">Current Note-Taking Habits</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Most users still use manual methods (typing, handwriting) despite AI tool availability. Primary reason: lack of trust in AI accuracy for important content. Secondary concern: information overload from verbose transcripts.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-[#C5A059] mb-2">JTBD Insights</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Core job isn't transcription - it's staying present in conversation while capturing key points. Emotional dimension: anxiety about missing critical information. Social dimension: appearing engaged while documenting.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-[#C5A059] mb-2">Adoption Barriers</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm leading-relaxed marker:text-[#C5A059]">
                                        <li>Privacy concerns with AI listening to confidential meetings</li>
                                        <li>Cost perception - unclear value proposition for paid tiers</li>
                                        <li>Integration friction - doesn't fit existing workflows</li>
                                        <li>Setup complexity - too much configuration required</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Pain Points Across Journey */}
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 flex flex-col hover:border-[#C5A059]/30 transition-colors shadow-xl">
                            <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-8 text-center">Pain Points Across Journey</h3>
                            <div className="space-y-8 flex-grow">
                                <div>
                                    <h4 className="font-semibold text-lg text-[#C5A059] mb-2">Pre-Meeting Stage</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm leading-relaxed marker:text-[#C5A059]">
                                        <li>Unclear which tool to use for different meetings</li>
                                        <li>Setup time cutting into actual meeting time</li>
                                        <li>Permission and access issues with platforms</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-[#C5A059] mb-2">During Meeting</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm leading-relaxed marker:text-[#C5A059]">
                                        <li>Lack of real-time verification of capture quality</li>
                                        <li>Can't tag or mark important moments easily</li>
                                        <li>Transcription lag creating uncertainty</li>
                                        <li>Overload of irrelevant information being captured</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-[#C5A059] mb-2">Post-Meeting Stage</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm leading-relaxed marker:text-[#C5A059]">
                                        <li>Too much text to review and process</li>
                                        <li>Poor organization making specific info hard to find</li>
                                        <li>No intelligent summary or action item extraction</li>
                                        <li>Manual work required to make notes useful</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-[#C5A059] mb-2">Long-Term Usage</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm leading-relaxed marker:text-[#C5A059]">
                                        <li>No cross-referencing between related meetings</li>
                                        <li>Search inadequate for finding specific content</li>
                                        <li>No learning or personalization over time</li>
                                        <li>Export limitations to other tools</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3: Competitive Landscape Gaps */}
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 flex flex-col hover:border-[#C5A059]/30 transition-colors shadow-xl">
                            <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-8 text-center">Competitive Landscape Gaps</h3>
                            <div className="space-y-8 flex-grow">
                                <div>
                                    <h4 className="font-semibold text-lg text-[#C5A059] mb-2">Current Tool Limitations</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Otter.ai, Fireflies.ai, and similar tools focus heavily on transcription accuracy but miss contextual intelligence. Generate verbose transcripts requiring manual processing. Limited personalization to user's specific needs.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-[#C5A059] mb-2">Opportunity Areas</h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm leading-relaxed marker:text-[#C5A059]">
                                        <li>Intelligent summarization showing only what matters</li>
                                        <li>Real-time tagging and moment-marking during meetings</li>
                                        <li>Automatic action item and decision extraction</li>
                                        <li>Seamless integration with productivity tools</li>
                                        <li>Privacy-first architecture addressing security concerns</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-[#C5A059] mb-2">Market Positioning</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Move from "AI transcription tool" to "AI meeting intelligence platform". Focus on context and relevance over pure transcription volume. Emphasize trust, usability, and actual adoption.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Key User Problems in Journey */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-24">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <KeyUserProblemsIcon />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E6EAF2]">Key User Problems in Journey</h2>
                    </div>
                    <p className="text-center text-lg text-gray-400 mb-12">Mapped end-to-end user journey revealing friction points:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {
                            [
                                { title: "Lack of Transcription Accuracy", points: ["Technical terminology jargon misrecognized", "Accents/speech patterns causing errors", "Multiple overlapping speakers", "Background noise impact"] },
                                { title: "Missed Real-Time Tagging", points: ["No ability to mark moments live", "Can't flag actions or decisions", "Missing context for importance", "Delayed tagging issues"] },
                                { title: "Overload of Irrelevant Info", points: ["Pages of verbatim transcript", "No small talk distinction", "Lack of intelligent filtering", "Cognitive burden of review"] },
                                { title: "Poor Organization", points: ["Flat list without structure", "Difficult to find info across meetings", "No thematic grouping", "Limited search functionality"] }
                            ].map(problem => (
                                <motion.div key={problem.title} variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 hover:border-[#C5A059]/20 transition-colors">
                                    <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-widest">{problem.title}</h3>
                                    <ul className="list-disc list-inside text-gray-400 space-y-3 text-sm marker:text-[#C5A059]">
                                        {problem.points.map((point, i) => <li key={i}>{point}</li>)}
                                    </ul>
                                </motion.div>
                            ))
                        }
                    </div>
                </motion.section>

                {/* Target Personas */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-24">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <TargetPersonasIcon />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E6EAF2]">Target Personas</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {
                            [
                                { 
                                    name: "Corporate Professional (Sarah)", 
                                    info: "32, Marketing Manager, 5-8 meetings daily", 
                                    behavior: "Types notes in Google Docs during meetings", 
                                    painPoints: ["Misses nuances while trying to capture everything", "Hard to stay engaged when focused on documenting", "Post-meeting notes often incomplete or unclear"], 
                                    goals: ["Stay fully present in discussions", "Capture action items and decisions automatically", "Quick retrieval of past meeting decisions"], 
                                    device: "Laptop during video calls, phone for in-person" 
                                },
                                { 
                                    name: "Student (Raj)", 
                                    info: "21, Engineering Student, 15-20 lectures weekly", 
                                    behavior: "Handwritten notes with audio recording backup", 
                                    painPoints: ["Can't keep up with fast-paced technical lectures", "Reviewing hours of recordings is time-prohibitive", "Misses connections between related concepts"], 
                                    goals: ["Understand concepts during lecture, not just transcribe", "Create structured study materials from lectures", "Find specific topics quickly when reviewing"], 
                                    device: "Laptop or tablet in class" 
                                },
                                { 
                                    name: "Content Creator (Maria)", 
                                    info: "28, Podcast Host, 3-5 interviews weekly", 
                                    behavior: "Records everything, manually timestamps key moments", 
                                    painPoints: ["Hours spent finding good quotes for social media", "Difficult to create show notes and timestamps", "Missing subtle moments buried in long conversations"], 
                                    goals: ["Easy identification of shareable moments", "Automated show notes with timestamps", "Searchable archive of past guest insights"], 
                                    device: "Professional recording equipment with backup" 
                                },
                                { 
                                    name: "Educator (James)", 
                                    info: "45, University Professor, 10-12 class sessions weekly", 
                                    behavior: "Lecture from notes, students record", 
                                    painPoints: ["Students miss key points while trying to transcribe", "No way to provide official study materials", "Repeated questions about content already covered"], 
                                    goals: ["Provide accurate lecture transcripts to students", "Focus on teaching rather than students' note-taking", "Create searchable course content library"], 
                                    device: "Classroom AV system integration" 
                                }
                            ].map(persona => (
                                <motion.div key={persona.name} variants={itemVariants} className="bg-[#111623] p-6 rounded-xl border border-gray-800 space-y-6 hover:border-[#C5A059]/20 transition-colors shadow-lg flex flex-col">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-gray-700/30 rounded-full border border-[#C5A059]/20 flex-shrink-0"><TargetPersonasIcon /></div>
                                        <div>
                                            <h3 className="font-bold text-white text-base leading-tight">{persona.name}</h3>
                                            <p className="text-[10px] text-[#C5A059] font-bold uppercase tracking-widest mt-1">{persona.info}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 text-xs leading-relaxed flex-grow">
                                        <div><h4 className="font-bold text-[#C5A059] uppercase tracking-wider mb-1">Current Behavior</h4><p className="text-gray-300">{persona.behavior}</p></div>
                                        <div><h4 className="font-bold text-[#C5A059] uppercase tracking-wider mb-1">Pain Points</h4><ul className="list-disc list-inside text-gray-400 space-y-1">{persona.painPoints.map((p,i)=><li key={i}>{p}</li>)}</ul></div>
                                        <div><h4 className="font-bold text-[#C5A059] uppercase tracking-wider mb-1">Goals</h4><ul className="list-disc list-inside text-gray-400 space-y-1">{persona.goals.map((g,i)=><li key={i}>{g}</li>)}</ul></div>
                                        <div><h4 className="font-bold text-[#C5A059] uppercase tracking-wider mb-1">Device Preference</h4><p className="text-gray-300 italic">{persona.device}</p></div>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </div>
                </motion.section>

                {/* Research Methodology Detail */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-24">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <ResearchMethodologyIcon />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E6EAF2]">Research Methodology Detail</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Phase I: Surveys */}
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 space-y-8 hover:border-[#C5A059]/30 transition-colors shadow-xl">
                            <h3 className="text-2xl font-bold text-white uppercase tracking-widest text-center">User Research Phase I: Surveys</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-[#C5A059] mb-3">Process Flow</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Identifying Objectives → Problem Prioritization → Strategy & Process → Building Hypothesis → Conducting Surveys → Results & Insights Generation → Identifying JTBD → Identifying User Personas → Building Summary</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-[#C5A059] mb-3">Survey Distribution</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Google Forms with 45 questions across 6 sections. Distributed through LinkedIn, Twitter, university groups. Incentivized with Amazon gift cards for completion. 127 responses collected over 2-week period.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-[#C5A059] mb-3">Key Survey Findings</h4>
                                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-2 leading-relaxed marker:text-[#C5A059]">
                                        <li>68% of respondents still use manual note-taking primarily</li>
                                        <li>43% have tried AI tools but reverted to manual methods</li>
                                        <li>Top concern: AI accuracy (mentioned by 71%)</li>
                                        <li>Second concern: Information overload (mentioned by 54%)</li>
                                        <li>Willingness to pay: $10-15/month for solution that solves both issues</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Phase II: Interviews */}
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 space-y-8 hover:border-[#C5A059]/30 transition-colors shadow-xl">
                            <h3 className="text-2xl font-bold text-white uppercase tracking-widest text-center">User Research Phase II: Interviews</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-[#C5A059] mb-3">Process Flow</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Identifying Right Users to Interview → Building Questions per MOM's Test → Strategy & Process → Building Hypothesis around Objectives → Conducting User Interviews → Generating Insights → Opportunity Areas → Discovery in Context → Problem Prioritization using Customer Voice & Analytics Data → Customer Journey Map</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-[#C5A059] mb-3">Interview Structure</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">18 total interviews across 4 persona segments. 50-minute sessions via Zoom with screen sharing. Contextual inquiry: observed 8 real meetings in progress. Post-interview surveys for quantitative validation.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-[#C5A059] mb-3">Key Interview Insights</h4>
                                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-2 leading-relaxed marker:text-[#C5A059]">
                                        <li>Users want control over what gets captured, not everything</li>
                                        <li>Trust issues stem from past experiences with errors in critical moments</li>
                                        <li>Post-meeting review time is actually bigger pain than real-time capture</li>
                                        <li>Integration with existing workflows more important than standalone features</li>
                                        <li>Privacy and security concerns prevent enterprise adoption</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
                
                {/* Customer Journey Map */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-24">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <CustomerJourneyMapIcon />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E6EAF2]">Journey Map</h2>
                    </div>
                    <div className="space-y-8">
                        {
                            [
                                { stage: "Awareness & Consideration", touchpoints: "Search, colleague recommendation, seeing others use tool", painPoints: "Unclear value proposition, difficult to compare options", thoughts: "\"Will this actually work for me?\" \"Is it worth the learning curve?\"", opportunities: "Clear demonstration of value, free trial with no setup friction", emotions: "Curious but skeptical, hesitant to change established workflow" },
                                { stage: "First Use / Onboarding", touchpoints: "Account setup, first meeting recording, initial transcript review", painPoints: "Complex configuration, unclear how to start, permission issues", thoughts: "\"This setup is taking too long.\" \"Will it work with my meeting platform?\"", opportunities: "One-click setup, guided first experience, immediate value demonstration", emotions: "Impatient, anxious about missing current meeting" },
                                { stage: "Active Usage", touchpoints: "Regular meeting capture, transcript review, sharing with team", painPoints: "Information overload, difficult retrieval, manual organization required", thoughts: "\"Is this capturing everything?\" \"How do I find what I need?\"", opportunities: "Smart summaries, automatic organization, intelligent search", emotions: "Growing trust or frustration depending on accuracy" },
                                { stage: "Advanced Features & Integration", touchpoints: "Exploring advanced features, integrating with other tools, team sharing", painPoints: "Limited integrations, no customization, unclear pricing for teams", thoughts: "\"How can I make this work better for me?\" \"Can my team use this too?\"", opportunities: "Workflow integration, personalization, team collaboration features", emotions: "Engaged if working well, frustrated if hitting limitations" },
                                { stage: "Retention & Advocacy", touchpoints: "Subscription renewal, recommending to others, expanding usage", painPoints: "Cost vs value perception, missing features in competitors", thoughts: "\"Is this worth continuing to pay for?\" \"Should I recommend this?\"", opportunities: "Clear ROI demonstration, referral incentives, community building", emotions: "Satisfied and loyal, or considering alternatives" }
                            ].map(item => (
                                <motion.div key={item.stage} variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl hover:border-[#C5A059]/20 transition-colors">
                                    <h3 className="text-xl font-bold text-[#C5A059] mb-6 uppercase tracking-widest">{item.stage}</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 text-xs">
                                        <div><h4 className="font-bold text-gray-200 mb-2 uppercase">Touchpoints</h4><p className="text-gray-400">{item.touchpoints}</p></div>
                                        <div><h4 className="font-bold text-gray-200 mb-2 uppercase">Pain Points</h4><p className="text-gray-400">{item.painPoints}</p></div>
                                        <div><h4 className="font-bold text-gray-200 mb-2 uppercase">Thoughts</h4><p className="text-gray-400 italic">**{item.thoughts}**</p></div>
                                        <div><h4 className="font-bold text-gray-200 mb-2 uppercase">Opportunities</h4><p className="text-gray-400">{item.opportunities}</p></div>
                                        <div><h4 className="font-bold text-gray-200 mb-2 uppercase">Emotions</h4><p className="text-gray-400">{item.emotions}</p></div>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </div>
                </motion.section>

                {/* Outcome & Impact */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-24">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <OutcomeImpactIcon />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E6EAF2]">Outcome & Impact</h2>
                    </div>
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Existing Deliverables */}
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl">
                                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">Research Deliverables</h3>
                                <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm leading-relaxed">
                                    <li>Comprehensive user research report (127 survey responses, 18 interviews)</li>
                                    <li>Four detailed user personas with behavioral patterns</li>
                                    <li>Complete customer journey map identifying 12 touchpoints</li>
                                    <li>Prioritized problem list using RICE framework</li>
                                    <li>Actionable product recommendations for MVP</li>
                                </ul>
                            </motion.div>
                            {/* Existing Insights */}
                            <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl">
                                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">Key Insights</h3>
                                <div className="space-y-3">
                                    <div>
                                        <h4 className="font-bold text-xs uppercase tracking-widest text-[#C5A059]">Primary Opportunity</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">Shift from "transcription tool" to "meeting intelligence platform" focusing on context over completeness. Users want intelligence, not just transcripts.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xs uppercase tracking-widest text-[#C5A059]">Critical Success Factors</h4>
                                        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                                            <li>Accuracy threshold: 95%+ for user trust</li>
                                            <li>Summarization: Reduce transcript review time by 80%</li>
                                            <li>Privacy: Clear data policies for enterprise</li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* New Section: Product Implications */}
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-widest">Product Implications</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-widest text-green-400 mb-4">MVP Features (Must Have)</h4>
                                    <ul className="list-disc list-inside text-gray-400 text-xs space-y-3 leading-relaxed marker:text-green-400">
                                        <li>Intelligent summarization showing key points only</li>
                                        <li>Real-time tagging with one-click moment marking</li>
                                        <li>Automatic action item extraction</li>
                                        <li>Basic integration with calendar and productivity tools</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-widest text-blue-400 mb-4">Phase 2 Features (Should Have)</h4>
                                    <ul className="list-disc list-inside text-gray-400 text-xs space-y-3 leading-relaxed marker:text-blue-400">
                                        <li>Speaker identification and tracking</li>
                                        <li>Cross-meeting search and reference</li>
                                        <li>Team collaboration and sharing</li>
                                        <li>Advanced analytics on meeting patterns</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-widest text-purple-400 mb-4">Phase 3 Features (Nice to Have)</h4>
                                    <ul className="list-disc list-inside text-gray-400 text-xs space-y-3 leading-relaxed marker:text-purple-400">
                                        <li>Personalization based on usage patterns</li>
                                        <li>Industry-specific terminology training</li>
                                        <li>Video highlight creation</li>
                                        <li>Multi-language support</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* New Section: Market Positioning Recommendation */}
                        <motion.div variants={itemVariants} className="bg-[#111623] p-8 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">Market Positioning Recommendation</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Position as <span className="text-[#C5A059] font-bold">"AI Meeting Partner"</span> rather than note-taking tool. Focus messaging on staying present and focused rather than capture efficiency. Target enterprise with privacy-first architecture addressing security concerns that block current tool adoption.
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Methodology Overview */}
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-24">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <MethodologyOverviewIcon />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E6EAF2]">Methodology Overview</h2>
                    </div>
                    <motion.div variants={itemVariants} className="bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Complete Research Process */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-widest">Complete Research Process</h3>
                                <div className="space-y-8">
                                    <div>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                            Understanding Problem Statement & Requirement → Approach Taken → Categorization into User Research I & II
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-widest text-[#C5A059] mb-3">User Research I (Quantitative):</h4>
                                        <p className="text-gray-400 text-xs leading-relaxed italic">
                                            Identifying Objectives → Problem Prioritization → Strategy & Process → Building Hypothesis → Conducting Surveys → Result & Insights Generation → Identifying JTBD → Identifying User Personas → Building Summary
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-widest text-[#C5A059] mb-3">User Research II (Qualitative):</h4>
                                        <p className="text-gray-400 text-xs leading-relaxed italic">
                                            Identifying Right Users to Interview → Building Questions as per MOM's Test → Strategy & Process → Building Hypothesis around Objectives → Conducting User Interviews → Generating insights → Opportunity Areas → Discovery in Context → Problem Prioritization using Customer Voice & Analytics Data → Customer Journey Map
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Research Rigor */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-widest">Research Rigor</h3>
                                <ul className="space-y-6">
                                    {[
                                        "Mixed methods approach combining quantitative and qualitative data",
                                        "Sample size: 127 survey respondents + 18 interview participants",
                                        "Validated findings across multiple data sources",
                                        "Used established frameworks (JTBD, MOM's Test, RICE, Impact/Effort)",
                                        "Iterative analysis with hypothesis validation"
                                    ].map((point, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0"></div>
                                            <p className="text-gray-400 text-sm leading-relaxed">{point}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* View Full Case Study */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
                    className="mt-24 text-center bg-[#111623] p-10 rounded-xl border border-gray-800 shadow-2xl"
                >
                    <h2 className="text-3xl font-bold uppercase tracking-widest mb-4">View Full Case Study</h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-relaxed">Access the complete research presentation with detailed interview transcripts, survey data analysis, persona profiles, and product recommendations.</p>
                    <a href="https://pitch.com/v/user-research-product-discovery-automated-ai-note-taking-app-group-16-bd478s" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 mt-10 px-10 py-4 text-xs font-bold uppercase tracking-widest text-[#0C0F1D] bg-[#C5A059] rounded-sm transition-transform duration-300 hover:scale-105 hover:neon-glow">
                        Open on Pitch.com 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                </motion.section>

                 {/* Final CTA Section from Screenshot */}
                <motion.section
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-extrabold tracking-tight text-[#E6EAF2] uppercase tracking-widest">Have a similar challenge?</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-[#A8B0C2] leading-relaxed">Let’s collaborate on uncovering user insights and building intelligent AI products that solve real-world problems.</p>
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

export default AINoteTakerCaseStudy;