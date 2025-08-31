import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLightbulb, FaHeart } from 'react-icons/fa';
import myPhoto from '../assets/MyPhoto.png';

const AboutSection = () => {
  const strengths = [
    { icon: <FaCode className="text-green-400" />, title: "Quick Learner", desc: "Able to quickly grasp new technologies and concepts" },
    { icon: <FaLightbulb className="text-green-400" />, title: "Problem Solver", desc: "Strong analytical and logical thinking skills" },
    { icon: <FaHeart className="text-green-400" />, title: "Passionate", desc: "Genuine enthusiasm for coding and creating solutions" },
  ];

  const education = [
    { degree: "Bachelor of Technology", branch: "Information Technology", institute: "D. Y. Patil College of Engineering Akurdi, Pune", year: "2022-2026" },
  ];

  return (
    <section id="about" className="py-12 bg-[#0a192f]/50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-4 text-gray-100 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-green-400 rounded-full"></span>
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Section */}
          <motion.div 
            className="hidden lg:flex lg:w-2/5 mt-20 justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="w-92 h-82 border-2 border-green-400 absolute -top-2 -left-4 rounded-lg z-0 border-b-16"></div>
              <div className="w-92 h-104 relative z-10 -top-25  overflow-hidden shadow-lg">
                <img
                  src={myPhoto}
                  alt="Manthan Nimonkar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-8 -right-4 w-20 h-20 border-2 border-green-400 rounded-lg z-0"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Hello! I'm Manthan</h3>
            
            <div className="space-y-4 text-gray-300 mb-8">
              <p>
                I'm a final-year Information Technology student passionate about full-stack development 
                and creating digital solutions that make a difference. While I may be new to the professional 
                world, I've spent my academic years building a strong foundation in web technologies and 
                problem-solving.
              </p>
              <p>
                I specialize in the MERN stack and have developed several projects that demonstrate my ability 
                to create functional, responsive applications. My approach to coding combines technical knowledge 
                with creativity, and I'm constantly exploring new technologies to expand my skill set.
              </p>
              <p>
                I'm actively looking for opportunities where I can apply my knowledge, learn from experienced 
                developers, and contribute to meaningful projects that solve real-world problems.
              </p>
            </div>

            {/* Strengths */}
            <div className="mb-10">
              <h4 className="text-xl font-bold text-gray-100 mb-6">My Strengths</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {strengths.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-[#112240] p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-2xl mb-3 flex justify-center">{item.icon}</div>
                    <h5 className="text-lg font-semibold text-gray-100 text-center mb-2">{item.title}</h5>
                    <p className="text-gray-400 text-center text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-100 mb-6 flex items-center">
                <FaGraduationCap className="mr-2 text-green-400" /> Education
              </h4>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    className="bg-[#112240] p-5 rounded-lg border-l-4 border-green-400"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h5 className="text-lg font-semibold text-gray-100">{edu.degree} - {edu.branch}</h5>
                    <p className="text-green-400">{edu.institute}</p>
                    <div className="flex justify-between mt-2 text-gray-400">
                      <span>{edu.year}</span>
                      <span>{edu.score}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4 mt-8"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-green-400 text-[#0a192f] font-medium rounded-md hover:bg-green-300 transition-colors duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-green-400 text-green-400 rounded-md hover:bg-green-400/10 transition-colors duration-300"
              >
                Let's Connect
              </a>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;