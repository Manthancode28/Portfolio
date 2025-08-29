import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const projects = [
    {
        title: 'QuickFix Project',
        description: 'A real-time facility management app for colleges. Faculty can report equipment issues by scanning QR codes; admins track and manage these reports.',
        tags: ['HTML','CSS','JavaScript','Node.js','Express.js', 'Firebase'],
        liveLink: '#',
        repoLink: '#',
    },
    {
        title: 'E-commerce Project',
        description: 'A full-stack e-commerce platform featuring product catalogs, a shopping cart, secure user authentication, and an admin dashboard.',
        tags: ['React', 'Redux,','Tailwind','REST API','Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe'],
        liveLink: 'https://mern-ecommerce-flashkart-1.onrender.com',
        repoLink: 'https://github.com/Manthancode28/mern-ecommerce-flashkart',
    },
    {
        title: 'Staysphere',
        description: 'A modern hotel booking application. Users can search for rooms, view details, check availability in real-time, and make secure reservations.',
        tags: ['HTML', 'CSS','JavaScript','Node.js','Express.js', 'API Integration', 'MongoDB'],
        liveLink: 'https://staysphere-4t14.onrender.com/listings',
        repoLink: 'https://github.com/Manthancode28/StaySphere-MERN',
    },
    {
        title: 'ADmyBRAND Landing Page',
        description: 'A responsive and visually appealing landing page for a marketing brand, designed to capture user interest and generate leads.',
        tags: ['React', 'Tailwind', 'Responsive Design'],
        liveLink: 'https://admybrand-landing-page-two.vercel.app',
        repoLink: 'https://github.com/Manthancode28/admybrand-landing-page.',
    },
    {
        title: 'TaskFlow: Task Management',
        description: 'A task management application to help users organize their to-do lists, set priorities, and track progress with an intuitive interface.',
        tags: ['React', 'Redux', 'Node.js','Express.js', 'MongoDB'],
        liveLink: '#',
        repoLink: 'https://github.com/Manthancode28/TaskFlow-todo-app',
    },

];

const ProjectsSection = () => (
    <section id="projects" className="py-24">
        <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-100 relative inline-block">
                My Projects
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-green-500 rounded-full"></span>
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
                {projects.map((project) => (
                    <motion.div
                        key={project.title}
                        className="bg-[#2d3748] rounded-lg shadow-lg overflow-hidden flex flex-col group w-full sm:w-5/6 md:w-[45%] lg:w-[30%]"
                        whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-6 flex-grow">
                            <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-green-400 transition-colors">{project.title}</h3>
                            <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="flex flex-wrap mb-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="bg-green-900/50 text-green-300 text-xs font-semibold mr-2 mb-2 px-2.5 py-1 rounded-full">{tag}</span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center text-gray-400">
                                {project.liveLink !== "#" && (
                                    <a href={project.liveLink} className="hover:text-green-400 transition-colors" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                )}
                                {project.repoLink !== "#" && (
                                    <a href={project.repoLink} className="hover:text-green-400 transition-colors" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    </section>
);

export default ProjectsSection;