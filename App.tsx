import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Transition, useMotionValue, useTransform } from 'framer-motion';
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
import ReadingProgressBar from './components/ReadingProgressBar';

const BackgroundParallax: React.FC<{ theme: string }> = ({ theme }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Map to -40 to 40 px range
      mouseX.set((clientX / innerWidth - 0.5) * 80);
      mouseY.set((clientY / innerHeight - 0.5) * 80);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Subtle opposite movement for parallax depth
  const backgroundX = useTransform(mouseX, (v) => -v);
  const backgroundY = useTransform(mouseY, (v) => -v);

  if (theme === 'light') return null;

  return (
    <motion.div 
      style={{ x: backgroundX, y: backgroundY }}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      <div className="absolute top-[10%] right-[15%] w-[800px] h-[800px] bg-[#C5A059]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[15%] left-[10%] w-[600px] h-[600px] bg-[#C5A059]/3 rounded-full blur-[100px]" />
    </motion.div>
  );
};

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
  
  // horizontal wipe variants
  const pageVariants = {
      initial: { 
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
        opacity: 0,
        filter: 'blur(10px)'
      },
      in: { 
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        opacity: 1,
        filter: 'blur(0px)'
      },
      out: { 
        clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
        opacity: 0,
        filter: 'blur(10px)'
      }
  };

  const pageTransition: Transition = {
      type: 'tween',
      ease: [0.22, 1, 0.36, 1], // Smooth premium ease
      duration: 0.8
  };

  const isDetailedCaseStudy = [
    'perplexity-case-study',
    'ai-note-taking-app',
    'reachifyme-gtm-strategy',
    'product-growth-naukri',
    'product-analytics-langys-dashboard',
    'product-improvement-of-youtube'
  ].includes(currentPage);

  return (
    <div className={`bg-theme-primary text-theme-primary antialiased overflow-x-hidden transition-colors duration-500 min-h-screen`}>
      <div className="noise-overlay" aria-hidden="true" />
      <BackgroundParallax theme={theme} />
      <CursorGlow theme={theme} />
      {isDetailedCaseStudy && <ReadingProgressBar />}
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