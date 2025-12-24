import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '#home', page: 'home' },
  { name: 'About', href: 'about', page: 'about' },
  { name: 'Projects', href: 'projects', page: 'projects' },
  { name: 'Skills', href: 'skills', page: 'skills' },
  { name: 'Experience', href: 'experience', page: 'experience' },
  { name: 'Education', href: 'education', page: 'education' },
  { name: 'Contact', href: 'contact', page: 'contact' },
  { name: 'Resume', href: 'resume', page: 'resume'}
];

interface HeaderProps {
  currentPage: string;
  navigateTo: (page: string) => void;
  theme: string;
  toggleTheme: () => void;
}

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page: string, href: string) => {
    setIsOpen(false);
    if (page !== 'home') {
      navigateTo(page);
    } else {
      if (currentPage !== 'home') {
        navigateTo('home');
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
         if (href === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // Fix: Explicitly type variants as Variants to resolve ease and orchestration property inference issues
  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1], // Custom ease-out expo for subtle feel
        when: 'beforeChildren',
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  // Fix: Explicitly type variants as Variants
  const itemVariants: Variants = {
    closed: { opacity: 0, x: -8 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-theme-primary/50 border-b border-theme-accent transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a onClick={() => handleNavClick('home', '#home')} className="text-2xl font-bold tracking-wider neon-text text-glow cursor-pointer transition-colors duration-500">
              Shubhasree
              <span className="text-theme-primary"> Sarkar</span>
            </a>
          </div>
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {NAV_LINKS.map((link) => {
              const isProjectPage = currentPage.includes('case-study') && link.page === 'projects';
              const isActive = (link.page === currentPage) || isProjectPage;
              return (
                <a
                  key={link.name}
                  onClick={() => handleNavClick(link.page, link.href)}
                  className={`cursor-pointer text-base font-medium transition-colors duration-300 relative group ${isActive ? 'neon-text' : 'text-theme-secondary hover:neon-text'}`}
                >
                  {link.name}
                  <span className={`absolute bottom-[-4px] left-0 h-0.5 bg-[#88FF55] transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : 'w-0'}`}></span>
                </a>
              );
            })}
          </nav>
          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => navigateTo('contact')}
              className="cursor-pointer px-5 py-2.5 text-base font-semibold text-[#0C0F1D] bg-[#88FF55] rounded-lg transition-all duration-300 hover:scale-105 hover:neon-glow"
            >
              Get In Touch
            </button>
          </div>
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-theme-secondary hover:neon-text focus:outline-none p-2 flex items-center justify-center"
              aria-label="Toggle mobile menu"
            >
              <svg width="23" height="23" viewBox="0 0 23 23">
                <Path
                  variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                  }}
                  animate={isOpen ? "open" : "closed"}
                  transition={{ duration: 0.3 }}
                />
                <Path
                  d="M 2 9.423 L 20 9.423"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.1 }}
                  animate={isOpen ? "open" : "closed"}
                />
                <Path
                  variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                  }}
                  animate={isOpen ? "open" : "closed"}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden absolute top-20 left-0 w-full bg-theme-primary/95 backdrop-blur-md transition-colors duration-500 overflow-hidden border-b border-theme-accent shadow-2xl"
          >
            <nav className="flex flex-col items-center py-8 space-y-6">
              {NAV_LINKS.map((link) => (
                <motion.a 
                  key={link.name} 
                  variants={itemVariants}
                  onClick={() => handleNavClick(link.page, link.href)} 
                  className={`text-lg font-medium transition-colors duration-300 cursor-pointer ${currentPage === link.page ? 'neon-text' : 'text-theme-secondary hover:neon-text'}`}
                >
                  {link.name}
                </motion.a>
              ))}
               <motion.button
                variants={itemVariants}
                onClick={() => { setIsOpen(false); navigateTo('contact'); }}
                className="px-8 py-3 text-base font-semibold text-[#0C0F1D] bg-[#88FF55] rounded-lg transition-all duration-300 hover:scale-105 hover:neon-glow"
              >
                Get In Touch
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;