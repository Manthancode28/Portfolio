import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter, FaJava, FaGitAlt } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiCplusplus, SiJavascript, SiMysql, SiLeetcode  } from 'react-icons/si';


import myPhoto from './assets/MyPhoto.png'; 


// --- Reusable Animated Component ---
const AnimatedSection = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
            {children}
        </motion.div>
    );
};


// --- Main App Component ---
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



const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = ["About", "Projects", "Skills", "Contact"];

    return (
        <header className="fixed w-full z-40 bg-[#1a202c]/80 backdrop-blur-sm">
            {/* The main container is now relative to position the absolute nav */}
            <div className="container mx-auto flex items-center justify-between p-4 relative">
                {/* Name on the left */}
                <div className="text-2xl font-bold text-green-400 z-10">
                    <a href="#hero" className="hidden md:block hover:text-green-300 transition-colors">Manthan Nimonkar</a>
                </div>

                {/* Centered navigation for medium screens and up */}
                <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {navLinks.map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                            {link}
                        </a>
                    ))}
                </nav>

                {/* Mobile menu button on the right */}
                <div className="md:hidden z-10">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
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
                <a href="https://drive.google.com/file/d/148LIuhbn7gLkbATSBrzMI3W6sScPMoc7/view?usp=sharing" target='blank' className="inline-block mt-8 mx-4 px-6 py-3 md:px-8 md:py-4 border border-green-400 text-green-400 rounded-md hover:bg-green-400/10 transition-colors duration-300">
                    Resume
                </a>
            </motion.div>
        </div>

    </section>
);


    const AboutSection = () => (

        <section id="about" className="py-24">

            <AnimatedSection>

                <h2 className="text-3xl font-bold text-center mb-12 text-gray-100 relative inline-block">

                    About Me

                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-green-500 rounded-full"></span>

                </h2>

                <div className="flex flex-col md:flex-row items-center gap-12">

                    <div className="md:w-2/3">

                        <p className="mb-4">

                            {/* Hello! I'm a full-stack developer with a strong foundation in computer science principles, thanks to my background in C++. This allows me to approach problems with a focus on efficiency and scalability. I thrive on turning complex ideas into elegant, interactive web applications. */}
                            I'm a final-year IT student with a strong passion for full-stack web development and problem-solving. I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have built real-world projects that focus on functionality, responsiveness, and clean user experiences.
                        </p>

                        <p className="mb-4">

                                {/* My primary focus is the MERN stack (MongoDB, Express.js, React, Node.js), where I enjoy the challenge of building seamless front-to-back experiences. I'm a continuous learner, always exploring new technologies to enhance my skillset and deliver better products. */}
                            Alongside development, I actively solve Data Structures and Algorithms (DSA) problems in C++, helping me strengthen my logical thinking and coding efficiency. I've also participated in hackathons and coding contests, and I'm always eager to learn, build, and contribute to impactful tech solutions.
                        </p>

                        <p>

                            When I'm not coding, you can find me exploring new tech articles, playing chess, or enjoying a good cup of coffee.
                        </p>

                    </div>

                    <div className="hidden md:flex md:w-1/3 justify-center items-center mt-8 md:mt-0">

                        <div className="w-74 h-90 relative group">

                            <div className="absolute top-0 left-0 w-full h-70 bg-green-500/10 rounded-tl-[50%] rounded-tr-[50%] border-green-400 transition-transform duration-300 shadow-[0_20px_25px_rgba(0,0,0,0.5)]" ></div>

                            <img

                                src={myPhoto} 

                                alt="Manthan Nimonkar"

                                className="absolute bottom-20 left-0 w-full h-auto object-contain transition-transform duration-300 z-10 drop-shadow-[0_5px_10px_rgba(52,211,153,0.6)]"

                            />

                        </div>

                    </div>

                </div>
            </AnimatedSection>

        </section>

    );

    
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
            {/* Changed from grid to flex for automatic alignment */}
            <div className="flex flex-wrap justify-center gap-8">
                {projects.map((project) => (
                    <motion.div
                        key={project.title}
                        // Added width classes to control wrapping
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
                              {
                                project.liveLink !== "#"  && (
                                   <a href={project.liveLink} className="hover:text-green-400 transition-colors" target='blank'>Live Demo</a>
                                )
                              }
                               {
                                project.repoLink !== "#" && (
                                    <a href={project.repoLink} className="hover:text-green-400 transition-colors" target='blank'><FaGithub /></a>
                                )
                               }
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    </section>
);

const SkillsSection = () => {
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

    return (
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
};

const ContactSection = () => (
    <section id="contact" className="py-24 text-center">
        <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-100">Get In Touch</h2>
           <p className="max-w-3xl text-xl mx-auto my-6">
                I'm actively seeking exciting full-time opportunities where I can contribute, learn, and grow as a developer. If you're looking for someone who's passionate about building impactful web applications and eager to take on new challenges—I'd love to connect. Feel free to drop a message—I'm quick to respond!
            </p>

            <a href="mailto:manthan.nimon28@gmail.com" className="inline-block px-8 py-4 border border-green-400 text-green-400 rounded-md hover:bg-green-400/10 transition-colors duration-300">
                Contact Me
            </a>
        </AnimatedSection>
    </section>
);

const Footer = () => (
    <footer className="py-6">
        <div className="container mx-auto text-center text-gray-500">
            <div className="flex justify-center space-x-6 mb-4">
                <a href="https://github.com/Manthancode28" target='blank' className="hover:text-green-400 transition-colors"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/manthan-nimonkar-082987297/" target = "_blank" className="hover:text-green-400 transition-colors"><FaLinkedin /></a>
                <a href="https://leetcode.com/u/user5296ON/" target='blank' className="hover:text-green-400 transition-colors"><SiLeetcode /></a>
            </div>
            <p>Designed & Built by Manthan Nimonkar</p>
            <p>&copy; 2025. All Rights Reserved.</p>
        </div>
    </footer>
);

export default App;
