import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row items-center justify-center">
        <div className="w-full max-w-6xl text-center md:text-left px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-xl md:text-4xl text-green-400 mb-4">Hi, my name is</h1>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-100">Manthan Nimonkar</h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <h3 className="text-3xl sm:text-4xl md:text-7xl font-bold text-gray-400 mt-2">I build things for the web.</h3>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
                <p className="max-w-xl mt-6 text-lg mx-auto md:mx-0">
                    I build full-stack web apps using the MERN stack and solve DSA problems in C++ to level up my problem-solving and logic-building skills.
                </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
                <a href="#projects" className="inline-block mt-8 px-6 py-3 md:px-8 md:py-4 border border-green-400 text-green-400 rounded-md hover:bg-green-400/10 transition-colors duration-300">
                    Check out my work!
                </a>
                <a href="https://drive.google.com/file/d/148LIuhbn7gLkbATSBrzMI3W6sScPMoc7/view?usp=sharing" target='_blank' rel="noopener noreferrer" className="inline-block mt-8 mx-4 px-6 py-3 md:px-8 md:py-4 border border-green-400 text-green-400 rounded-md hover:bg-green-400/10 transition-colors duration-300">
                    Resume
                </a>
            </motion.div>
        </div>
    </section>
);

export default HeroSection;