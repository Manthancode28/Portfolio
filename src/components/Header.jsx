import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinks = ["About", "Projects", "Skills", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a192f]/95 py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo/Name */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-green-400 z-50"
        >
          <a href="#hero" className="flex items-center hover:text-green-300 transition-colors">
            <span className="text-green-400 font-mono text-lg md:text-xl">{'<MN />'}</span>
            <span className="hidden md:inline ml-2 text-gray-100">Manthan Nimonkar</span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-green-400 transition-colors duration-300 relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
          <motion.a
            href="https://drive.google.com/file/d/1ZuE2I_K9nGJU50BQTwg6B-eTLLPSmFy1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-green-400 text-green-400 rounded-md hover:bg-green-400/10 transition-colors duration-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Resume
          </motion.a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden z-50">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-gray-300 focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute left-0 top-2.5 h-0.5 w-6 bg-green-400 transform transition duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-1'}`}></span>
              <span className={`absolute left-0 top-2.5 h-0.5 w-6 bg-green-400 transform transition duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-0 top-2.5 h-0.5 w-6 bg-green-400 transform transition duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <motion.nav 
        className={`md:hidden bg-[#0a192f] p-6 absolute w-full top-full left-0 shadow-xl ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          height: isMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map(link => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-lg py-2 border-b border-gray-800 last:border-b-0"
            >
              {link}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1ZuE2I_K9nGJU50BQTwg6B-eTLLPSmFy1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-green-400 text-green-400 rounded-md hover:bg-green-400/10 transition-colors duration-300 text-center mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;