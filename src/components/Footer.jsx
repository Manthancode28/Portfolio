import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/Manthancode28",
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/manthan-nimonkar-082987297/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: <SiLeetcode size={20} />,
      href: "https://leetcode.com/u/Manthancode25/",
      label: "LeetCode",
      color: "hover:text-orange-400"
    },
    {
      icon: <FaEnvelope size={20} />,
      href: "mailto:manthan.nimon28@gmail.com",
      label: "Email",
      color: "hover:text-green-400"
    }
  ];

  return (
    <footer className="py-8 bg-[#0a192f] border-t border-gray-800/50">
      <div className="container mx-auto px-6">
        {/* Social Links */}
        <motion.div 
          className="flex justify-center space-x-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 bg-[#112240] rounded-lg text-gray-400 transition-all duration-300 ${link.color} hover:bg-[#112240]/80 group`}
              aria-label={link.label}
              whileHover={{ 
                y: -5,
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
        
        {/* Copyright Text */}
        <motion.div
          className="text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="flex items-center justify-center gap-2 mb-2">
            Designed & Built with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              className="text-red-500"
            >
              <FaHeart size={16} />
            </motion.span>
            by Manthan Nimonkar
          </p>
          <p className="text-sm">
            &copy; {currentYear}. All Rights Reserved.
          </p>
        </motion.div>
        
      </div>
    </footer>
  );
};

export default Footer;