import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = ["About", "Projects", "Skills", "Contact"];

    return (
        <header className="fixed w-full z-40 bg-[#1a202c]/80 backdrop-blur-sm">
            <div className="container mx-auto flex items-center justify-between p-4 relative">
                <div className="text-2xl font-bold text-green-400 z-10">
                    <a href="#hero" className="hidden md:block hover:text-green-300 transition-colors">Manthan Nimonkar</a>
                </div>
                <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {navLinks.map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                            {link}
                        </a>
                    ))}
                </nav>
                <div className="md:hidden z-10">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <nav className="md:hidden bg-[#1a202c] p-4">
                    {navLinks.map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="block py-2 text-center text-gray-300 hover:text-green-400 transition-colors duration-300">
                            {link}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Header;