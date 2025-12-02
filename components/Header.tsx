
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
}

const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo }) => {
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

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0C0F1D]/50 border-b border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a onClick={() => handleNavClick('home', '#home')} className="text-2xl font-bold tracking-wider neon-text text-glow cursor-pointer">
              Shubhasree
              <span className="text-gray-200"> Sarkar</span>
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
                  className={`cursor-pointer text-base font-medium transition-colors duration-300 relative group ${isActive ? 'neon-text' : 'text-gray-300 hover:neon-text'}`}
                >
                  {link.name}
                  <span className={`absolute bottom-[-4px] left-0 h-0.5 bg-[#88FF55] transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : 'w-0'}`}></span>
                </a>
              );
            })}
          </nav>
          <div className="hidden lg:block">
            <button
              onClick={() => navigateTo('contact')}
              className="cursor-pointer px-5 py-2.5 text-base font-semibold text-[#0C0F1D] bg-[#88FF55] rounded-lg transition-all duration-300 hover:bg-white hover:neon-glow"
            >
              Get In Touch
            </button>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:neon-text focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-20 left-0 w-full bg-[#0C0F1D]/95 backdrop-blur-md"
          >
            <nav className="flex flex-col items-center py-4 space-y-4">
              {NAV_LINKS.map((link) => (
                <a key={link.name} onClick={() => handleNavClick(link.page, link.href)} className="text-gray-300 hover:neon-text transition-colors duration-300">
                  {link.name}
                </a>
              ))}
               <button
                onClick={() => { setIsOpen(false); navigateTo('contact'); }}
                className="px-5 py-2.5 text-sm font-semibold text-[#0C0F1D] bg-[#88FF55] rounded-lg transition-all duration-300 hover:bg-white hover:neon-glow"
              >
                Get In Touch
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
