import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaGitAlt } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiCplusplus, SiJavascript, SiMysql } from 'react-icons/si';
import AnimatedSection from './AnimatedSection';

 const mernSkills = [
        { letter: 'M', name: 'MongoDB', icon: <SiMongodb size={32} className="text-green-500" /> },
        { letter: 'E', name: 'Express', icon: <SiExpress size={32} className="text-gray-400" /> },
        { letter: 'R', name: 'React', icon: <SiReact size={32} className="text-blue-400" /> },
        { letter: 'N', name: 'Node.js', icon: <SiNodedotjs size={32} className="text-green-600" /> },
    ];

    const otherSkills = [
        { name: 'JavaScript', icon: <SiJavascript size={80} className="text-yellow-400" /> },
        { name: 'Java', icon: <FaJava size={80} className="text-red-500" /> },
        { name: 'C++', icon: <SiCplusplus size={80} className="text-blue-600" /> },
        { name: 'MySQL', icon: <SiMysql size={80} className="text-blue-500" /> },
        { name: 'Git', icon: <FaGitAlt size={80} className="text-orange-600" /> },
    ];



const SkillsSection = () => (
    <section id="skills" className="py-24">
        <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-100 relative inline-block">
                My Skills
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-green-500 rounded-full"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 text-center mb-20">
                {mernSkills.map((skill) => (
                    <motion.div 
                        key={skill.name} 
                        className="flex flex-col items-center"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-8xl font-black text-gray-500 transition-colors duration-300 group-hover:text-green-400">{skill.letter}</h3>
                        <div className="flex items-center gap-2 mt-2">
                            {skill.icon}
                            <p className="font-semibold text-lg text-gray-300">{skill.name}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <h3 className="text-2xl font-bold text-center mb-12 text-gray-200">Also Proficient In</h3>
            <div className="flex flex-wrap justify-center gap-12 md:gap-12">
                {otherSkills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 text-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        {skill.icon}
                        <p className="font-semibold text-gray-300">{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    </section>
);

export default SkillsSection;