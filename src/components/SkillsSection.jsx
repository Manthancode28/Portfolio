  // import React from 'react';
  // import { motion } from 'framer-motion';
  // import { FaJava, FaGitAlt } from 'react-icons/fa';
  // import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiCplusplus, SiJavascript, SiMysql } from 'react-icons/si';
  // import AnimatedSection from './AnimatedSection';

  //  const mernSkills = [
  //         { letter: 'M', name: 'MongoDB', icon: <SiMongodb size={32} className="text-green-500" /> },
  //         { letter: 'E', name: 'Express', icon: <SiExpress size={32} className="text-gray-400" /> },
  //         { letter: 'R', name: 'React', icon: <SiReact size={32} className="text-blue-400" /> },
  //         { letter: 'N', name: 'Node.js', icon: <SiNodedotjs size={32} className="text-green-600" /> },
  //     ];

  //     const otherSkills = [
  //         { name: 'JavaScript', icon: <SiJavascript size={80} className="text-yellow-400" /> },
  //         { name: 'Java', icon: <FaJava size={80} className="text-red-500" /> },
  //         { name: 'C++', icon: <SiCplusplus size={80} className="text-blue-600" /> },
  //         { name: 'MySQL', icon: <SiMysql size={80} className="text-blue-500" /> },
  //         { name: 'Git', icon: <FaGitAlt size={80} className="text-orange-600" /> },
  //     ];



  // const SkillsSection = () => (
  //     <section id="skills" className="py-24">
  //         <AnimatedSection>
  //             <h2 className="text-3xl font-bold text-center mb-16 text-gray-100 relative inline-block">
  //                 My Skills
  //                 <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-green-500 rounded-full"></span>
  //             </h2>
  //             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 text-center mb-20">
  //                 {mernSkills.map((skill) => (
  //                     <motion.div 
  //                         key={skill.name} 
  //                         className="flex flex-col items-center"
  //                         whileHover={{ scale: 1.05 }}
  //                     >
  //                         <h3 className="text-8xl font-black text-gray-500 transition-colors duration-300 group-hover:text-green-400">{skill.letter}</h3>
  //                         <div className="flex items-center gap-2 mt-2">
  //                             {skill.icon}
  //                             <p className="font-semibold text-lg text-gray-300">{skill.name}</p>
  //                         </div>
  //                     </motion.div>
  //                 ))}
  //             </div>
  //             <h3 className="text-2xl font-bold text-center mb-12 text-gray-200">Also Proficient In</h3>
  //             <div className="flex flex-wrap justify-center gap-12 md:gap-12">
  //                 {otherSkills.map((skill) => (
  //                     <motion.div
  //                         key={skill.name}
  //                         className="flex flex-col items-center gap-2 text-center"
  //                         whileHover={{ scale: 1.1 }}
  //                         transition={{ type: 'spring', stiffness: 300 }}
  //                     >
  //                         {skill.icon}
  //                         <p className="font-semibold text-gray-300">{skill.name}</p>
  //                     </motion.div>
  //                 ))}
  //             </div>
  //         </AnimatedSection>
  //     </section>
  // );

  // export default SkillsSection;


  import React from 'react';
  import { motion } from 'framer-motion'; 
  import { FaJava, FaGitAlt, FaAws, FaFigma } from 'react-icons/fa';
  import { SiTypescript , SiReact, SiNodedotjs, SiExpress, SiMongodb, SiCplusplus, SiJavascript, SiMysql, SiTailwindcss, SiRedux, SiFirebase, SiPostman, SiVercel } from 'react-icons/si';
import { transition } from 'three/examples/jsm/tsl/display/TransitionNode.js';

  const SkillsSection = () => {
    const mernSkills = [
      { letter: 'M', name: 'MongoDB', icon: <SiMongodb size={32} className="text-green-500" /> },
      { letter: 'E', name: 'Express', icon: <SiExpress size={32} className="text-gray-300" /> },
      { letter: 'R', name: 'React', icon: <SiReact size={32} className="text-blue-400" /> },
      { letter: 'N', name: 'Node.js', icon: <SiNodedotjs size={32} className="text-green-600" /> },
    ];

    const programmingLanguages = [
      { name: 'JavaScript', icon: <SiJavascript size={50} className="text-yellow-400" />, level: 90 },
      { name: 'Java', icon: <FaJava size={50} className="text-red-500" />, level: 85 },
      { name: 'C++', icon: <SiCplusplus size={50} className="text-blue-600" />, level: 88 },
      { name: 'TypeScript', icon: <SiTypescript size={50} className="text-blue-600" />, level: 75 },    ];

    const frontendSkills = [
      { name: 'React', icon: <SiReact size={40} className="text-blue-400" /> },
      { name: 'Redux', icon: <SiRedux size={40} className="text-purple-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-cyan-400" /> },
      { name: 'HTML5/CSS3', icon: <div className="w-10 h-10 flex items-center justify-center bg-orange-500 rounded text-white font-bold text-xs">HC</div> },
    ];

    const backendSkills = [
      { name: 'Node.js', icon: <SiNodedotjs size={40} className="text-green-600" /> },
      { name: 'Express.js', icon: <SiExpress size={40} className="text-gray-300" /> },
      { name: 'REST APIs', icon: <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded text-white font-bold text-xs">API</div> },
    ];

    const databaseSkills = [
      { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-500" /> },
      { name: 'MySQL', icon: <SiMysql size={40} className="text-blue-500" /> },
      { name: 'Firebase', icon: <SiFirebase size={40} className="text-orange-400" /> },
    ];

    const toolsSkills = [
      { name: 'Git', icon: <FaGitAlt size={40} className="text-orange-600" /> },
      { name: 'Postman', icon: <SiPostman size={40} className="text-orange-500" /> },
      { name: 'Vercel', icon: <SiVercel size={40} className="text-black" /> },
      { name: 'Figma', icon: <FaFigma size={40} className="text-purple-500" /> },
    ];

    // Animation variants (reusable animation patterns)
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

const SkillCategory = ({ title, skills }) => (
    <div className="bg-[#112240] rounded-xl p-6 shadow-lg h-full ">
      <h3 className="text-xl font-bold text-gray-100 mb-4 text-center">{title}</h3>
      <div className="grid grid-cols-2 gap-4 ">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center p-3 bg-[#0a192f] rounded-lg transition-transform "
          >
            <div className="mb-2">
              {skill.icon}
            </div>
            <p className="text-sm font-medium text-gray-300 text-center group-hover:text-green-400">{skill.name}</p>
            
          </div>
        ))}
      </div>
    </div>
  );

    return (
      <section id="skills" className="py-24 bg-[#0a192f]/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4 text-gray-100 relative inline-block"
            initial={{ opacity: 0, y: 20 }} // Start state: invisible and 20px down
            whileInView={{ opacity: 1, y: 0 }} // End state: visible and in normal position
            viewport={{ once: true }} // Only animate once
            transition={{ duration: 0.5 }} // Animation duration
          >
            Technical Skills
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-green-400 rounded-full"></span>
          </motion.h2>
          
          <motion.p 
              className="text-center text-gray-400 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }} // Added 0.2s delay
              >
              Here's an overview of my technical expertise across different domains of development.
          </motion.p>

          {/* MERN Stack Highlight */}
          <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {mernSkills.map((skill, index) => {
            const isLeft = index < 2;

            return (
              <motion.div
                key={skill.name}
                className="group bg-[#112240] rounded-xl p-6 text-center cursor-pointer transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.8, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <h3 className="text-7xl font-black text-gray-500 mb-3 transition-colors duration-300 group-hover:text-green-400">
                  {skill.letter}
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <div className="transition-colors duration-300 group-hover:text-green-400">
                    {skill.icon}
                  </div>
                  <p className="font-semibold text-gray-300 transition-colors duration-300 group-hover:text-green-400">
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            );
          })}


        </motion.div>

          {/* Skills Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.4
                }
              }
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <SkillCategory title="Programming Languages" skills={programmingLanguages} />
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }  }}>
              <SkillCategory title="Frontend" skills={frontendSkills} />
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <SkillCategory title="Backend" skills={backendSkills} />
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <SkillCategory title="Database & Tools" skills={[...databaseSkills, ...toolsSkills]} />
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Continuously learning and expanding my skill set</p>
            <div className="flex justify-center gap-3 flex-wrap">
              {['TypeScript', 'AWS', 'Docker', 'Next.js'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-green-400/10 text-green-300 rounded-full text-sm border border-green-400/20"
                >
                  Learning {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default SkillsSection;