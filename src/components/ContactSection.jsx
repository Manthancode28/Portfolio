import React from 'react';
import AnimatedSection from './AnimatedSection';

const ContactSection = () => (
    <section id="contact" className="py-24 text-center">
        <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-100">Get In Touch</h2>
            <p className="max-w-5xl text-xl mx-auto my-6">
                I'm actively seeking exciting full-time opportunities where I can contribute, learn, and grow as a developer. If you're looking for someone who's passionate about building impactful web applications and eager to take on new challenges—I'd love to connect. Feel free to drop a message—I'm quick to respond!
            </p>
            <a href="mailto:manthan.nimon28@gmail.com" className="inline-block px-8 py-4 border border-green-400 text-green-400 rounded-md hover:bg-green-400/10 transition-colors duration-300">
                Contact Me
            </a>
        </AnimatedSection>
    </section>
);

export default ContactSection;