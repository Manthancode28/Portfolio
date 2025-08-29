import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => (
    <footer className="py-6">
        <div className="container mx-auto text-center text-gray-500">
            <div className="flex justify-center space-x-6 mb-4">
                <a href="https://github.com/Manthancode28" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors"><FaGithub size={24} /></a>
                <a href="https://www.linkedin.com/in/manthan-nimonkar-082987297/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors"><FaLinkedin size={24} /></a>
                <a href="https://leetcode.com/u/user5296ON/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors"><SiLeetcode size={24} /></a>
            </div>
            <p>Designed & Built by Manthan Nimonkar</p>
            <p>&copy; 2025. All Rights Reserved.</p>
        </div>
    </footer>
);

export default Footer;