import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Transition } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Explore from './components/Explore';
import CTA from './components/CTA';
import Footer from './components/Footer';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import PerplexityCaseStudy from './components/PerplexityCaseStudy';
import AINoteTakerCaseStudy from './components/AINoteTakerCaseStudy';
import ReachifyMeCaseStudy from './components/ReachifyMeCaseStudy';
import NaukriCaseStudy from './components/NaukriCaseStudy';
import LangysCaseStudy from './components/LangysCaseStudy';
import YouTubeCaseStudy from './components/YouTubeCaseStudy';
import ScrollToTop from './components/ScrollToTop';

const CursorGlow: React.FC<{ theme: string }> = ({ theme }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  if (theme === 'light') return null;

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-50 transition duration-300 hidden lg:block"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(197, 160, 89, 0.08), transparent 80%)`
      }}
    />
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const navigateTo = (page: string) => {
    if (page === 'resume') {
        window.open('https://drive.google.com/file/d/1mmVPWqlDcpKV84SFTg4xGeGkTbIJXCCU/view', '_blank');
        return;
    }
    
    const pageId = page.startsWith('projects/') ? page.split('/')[1] : page;

    if (pageId === currentPage) {
      if (pageId === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setCurrentPage(pageId);
    window.scrollTo(0, 0);
  };
  
  const pageVariants = {
      initial: { opacity: 0, filter: 'blur(4px)' },
      in: { opacity: 1, filter: 'blur(0px)' },
      out: { opacity: 0, filter: 'blur(4px)' }
  };

  const pageTransition: Transition = {
      type: 'tween',
      ease: 'anticipate',
      duration: 0.5
  };

  return (
    <div className={`bg-theme-primary text-theme-primary antialiased overflow-x-hidden transition-colors duration-500`}>
      <div className="noise-overlay" aria-hidden="true" />
      <CursorGlow theme={theme} />
      <div className="relative z-10">
        <Header currentPage={currentPage} navigateTo={navigateTo} theme={theme} toggleTheme={toggleTheme} />
        <main>
           <AnimatePresence mode="wait">
            {currentPage === 'home' && (
              <motion.div
                key="home"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Hero navigateTo={navigateTo} />
                <Metrics />
                <Explore navigateTo={navigateTo} />
                <CTA navigateTo={navigateTo} />
              </motion.div>
            )}
            {currentPage === 'about' && (
              <motion.div
                key="about"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <About navigateTo={navigateTo}/>
              </motion.div>
            )}
            {currentPage === 'projects' && (
              <motion.div
                key="projects"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Projects navigateTo={navigateTo} />
              </motion.div>
            )}
            {currentPage === 'case-study' && (
              <motion.div
                key="case-study"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <CaseStudy navigateTo={navigateTo} />
              </motion.div>
            )}
            {currentPage === 'perplexity-case-study' && (
                <motion.div
                    key="perplexity-case-study"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                    <PerplexityCaseStudy navigateTo={navigateTo} />
                </motion.div>
            )}
             {currentPage === 'ai-note-taking-app' && (
                <motion.div
                    key="ai-note-taking-app"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                    <AINoteTakerCaseStudy navigateTo={navigateTo} />
                </motion.div>
            )}
            {currentPage === 'reachifyme-gtm-strategy' && (
                <motion.div
                    key="reachifyme-gtm-strategy"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                    <ReachifyMeCaseStudy navigateTo={navigateTo} />
                </motion.div>
            )}
             {currentPage === 'product-growth-naukri' && (
                <motion.div
                    key="product-growth-naukri"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                    <NaukriCaseStudy navigateTo={navigateTo} />
                </motion.div>
            )}
             {currentPage === 'product-analytics-langys-dashboard' && (
                <motion.div
                    key="product-analytics-langys-dashboard"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                    <LangysCaseStudy navigateTo={navigateTo} />
                </motion.div>
            )}
            {currentPage === 'product-improvement-of-youtube' && (
                <motion.div
                    key="product-improvement-of-youtube"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                    <YouTubeCaseStudy navigateTo={navigateTo} />
                </motion.div>
            )}
            {currentPage === 'experience' && (
              <motion.div
                key="experience"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Experience navigateTo={navigateTo} />
              </motion.div>
            )}
             {currentPage === 'skills' && (
              <motion.div
                key="skills"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Skills navigateTo={navigateTo} />
              </motion.div>
            )}
            {currentPage === 'education' && (
              <motion.div
                key="education"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Education navigateTo={navigateTo} />
              </motion.div>
            )}
             {currentPage === 'contact' && (
              <motion.div
                key="contact"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Contact />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        <Footer currentPage={currentPage} navigateTo={navigateTo}/>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default App;