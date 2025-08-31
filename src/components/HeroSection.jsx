import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-24 pb-16 md:pt-32 md:pb-24"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <p className="text-green-400 font-mono text-lg md:text-xl">Hi, my name is</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-100">
            Manthan Nimonkar.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-400">
            <ReactTyped
              strings={["I build things for the web."]}
              typeSpeed={50}
              backSpeed={30}
              showCursor={true}
              cursorChar="|"
              loop={false}
            />
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-lg text-gray-400">
            I'm a full-stack developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products using the MERN stack 
            while solving complex problems with efficient algorithms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-green-400 text-[#0a192f] font-medium rounded-md hover:bg-green-300 transition-colors duration-300"
          >
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1pDXryTM9vvOuX7NHW4jO91FhKf4JjckT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-green-400 text-green-400 rounded-md hover:bg-green-400/10 transition-colors duration-300"
          >
            View Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="flex flex-col items-center text-green-400">
          <span className="text-sm mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-green-400 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;