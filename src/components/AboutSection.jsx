import React from 'react';
import AnimatedSection from './AnimatedSection';
import myPhoto from '../assets/MyPhoto.png'; // Corrected path

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
                        I'm a final-year IT student with a strong passion for full-stack web development and problem-solving. I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have built real-world projects that focus on functionality, responsiveness, and clean user experiences.
                    </p>
                    <p className="mb-4">
                        Alongside development, I actively solve Data Structures and Algorithms (DSA) problems in C++, helping me strengthen my logical thinking and coding efficiency. I've also participated in hackathons and coding contests, and I'm always eager to learn, build, and contribute to impactful tech solutions.
                    </p>
                    <p>
                        When I'm not coding, you can find me exploring new tech articles, playing chess, or enjoying a good cup of coffee.
                    </p>
                </div>
                <div className="hidden md:flex md:w-1/3 justify-center items-center mt-8 md:mt-0">
                    <div className="w-74 h-90 relative group">
                        <div className="absolute top-0 left-0 w-full h-70 bg-green-500/10 rounded-tl-[50%] rounded-tr-[50%] border-green-400 transition-transform duration-300 shadow-[0_20px_25px_rgba(0,0,0,0.5)]"></div>
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

export default AboutSection;