import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Import all the new components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="bg-[#1a202c] text-gray-300 font-sans leading-relaxed selection:bg-green-500 selection:text-white">
            <motion.div
                className="pointer-events-none fixed -inset-10 z-50"
                style={{
                    background: `radial-gradient(600px at ${cursorPos.x}px ${cursorPos.y}px, rgba(34, 197, 94, 0.15), transparent 80%)`
                }}
            />
            <Header />
            <main className="container mx-auto px-6 md:px-12">
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;