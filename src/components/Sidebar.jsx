import React, { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, Layers, Mail, Moon, Sun, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon, TwitterIcon } from './Icons';

const Sidebar = ({ isMobileMenuOpen, closeMobileMenu, toggleTheme, isDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'services', 'projects', 'contact'];
      // A point 1/3 down the screen to detect what section we are currently viewing
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
      
      // Special case: if we are at the very bottom of the page, activate the last section
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <aside 
        className={`fixed lg:sticky top-0 h-screen w-72 bg-gradient-to-br from-primaryDark to-primary dark:from-gray-800 dark:to-gray-900 text-white p-6 flex flex-col z-40 transform transition-transform duration-300 shadow-2xl overflow-y-auto 
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="text-center mb-8 mt-12 lg:mt-0">
          <div className="relative inline-block mb-4">
            <img 
              src="/assets/images/profileImg.jpg" 
              alt="Samuel Idakwo" 
              className="w-24 h-24 rounded-full border-4 border-accent object-cover mx-auto shadow-lg" 
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/3B82F6/ffffff?text=S.I.'; }} 
            />
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-primary dark:border-gray-800"></div>
          </div>
          <h1 className="text-2xl font-bold tracking-wide">Samuel Idakwo</h1>
          <p className="text-sm text-gray-200 mt-1 font-light uppercase tracking-wider">
            Backend-Focused Full-Stack Engineer
          </p>
        </div>

        <nav className="flex-1 px-2">
          <ul className="space-y-2">
            <li><a href="#home" onClick={closeMobileMenu} className={`nav-link block py-3 px-4 rounded-lg hover:bg-white/10 hover:translate-x-2 transition-all duration-300 flex items-center gap-3 ${activeSection === 'home' ? 'nav-active' : ''}`}><Home className="w-5 h-5" /> Home</a></li>
            <li><a href="#about" onClick={closeMobileMenu} className={`nav-link block py-3 px-4 rounded-lg hover:bg-white/10 hover:translate-x-2 transition-all duration-300 flex items-center gap-3 ${activeSection === 'about' ? 'nav-active' : ''}`}><User className="w-5 h-5" /> About</a></li>
            <li><a href="#skills" onClick={closeMobileMenu} className={`nav-link block py-3 px-4 rounded-lg hover:bg-white/10 hover:translate-x-2 transition-all duration-300 flex items-center gap-3 ${activeSection === 'skills' ? 'nav-active' : ''}`}><Code className="w-5 h-5" /> Skills</a></li>
            <li><a href="#experience" onClick={closeMobileMenu} className={`nav-link block py-3 px-4 rounded-lg hover:bg-white/10 hover:translate-x-2 transition-all duration-300 flex items-center gap-3 ${activeSection === 'experience' ? 'nav-active' : ''}`}><Briefcase className="w-5 h-5" /> Experience</a></li>
            <li><a href="#services" onClick={closeMobileMenu} className={`nav-link block py-3 px-4 rounded-lg hover:bg-white/10 hover:translate-x-2 transition-all duration-300 flex items-center gap-3 ${activeSection === 'services' ? 'nav-active' : ''}`}><Briefcase className="w-5 h-5" /> Services</a></li>
            <li><a href="#projects" onClick={closeMobileMenu} className={`nav-link block py-3 px-4 rounded-lg hover:bg-white/10 hover:translate-x-2 transition-all duration-300 flex items-center gap-3 ${activeSection === 'projects' ? 'nav-active' : ''}`}><Layers className="w-5 h-5" /> Projects</a></li>
            <li><a href="#contact" onClick={closeMobileMenu} className={`nav-link block py-3 px-4 rounded-lg hover:bg-white/10 hover:translate-x-2 transition-all duration-300 flex items-center gap-3 ${activeSection === 'contact' ? 'nav-active' : ''}`}><Mail className="w-5 h-5" /> Contact</a></li>
          </ul>
        </nav>

        <div className="px-2 py-4 border-t border-white/10">
          <button onClick={toggleTheme} className="w-full py-2 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center gap-2 text-sm font-semibold">
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />} 
            <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>

        <div className="pt-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://www.linkedin.com/in/idakwosamuel/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors transform hover:scale-110"><LinkedinIcon className="w-5 h-5" /></a>
            <a href="https://github.com/mildsam" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors transform hover:scale-110"><GithubIcon className="w-5 h-5" /></a>
            <a href="https://web.facebook.com/idakwo.samuel.902/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors transform hover:scale-110"><FacebookIcon className="w-5 h-5" /></a>
            <a href="https://x.com/SamuelIdak21521" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors transform hover:scale-110"><TwitterIcon className="w-5 h-5" /></a>
          </div>
        </div>

        <button onClick={closeMobileMenu} className="absolute top-4 right-4 lg:hidden text-white">
          <X className="w-6 h-6" />
        </button>
      </aside>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
          onClick={closeMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
