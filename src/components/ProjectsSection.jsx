import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import QuickFixImage from "../assets/QuickFix.jpg";
import StaySphereImage from "../assets/StaySphereVector2.png";
import EcommerceImage from "../assets/EcommerceVectorImg.jpg";
import AdmyBRANDimg from "../assets/LandingImg.png";
import SimonImg from "../assets/SimonImg.png";
import TaskImg from "../assets/Task.jpg";
import { image } from 'framer-motion/client';
const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'QuickFix Campus Facility Management',
      description: 'A comprehensive facility management system for educational institutions with QR-based issue reporting.',
      detailedDescription: `QuickFix is a real-time facility management solution designed specifically for college campuses. The system enables faculty and staff to report maintenance issues instantly by scanning QR codes placed on equipment. Each QR code is linked to specific equipment and location data, automatically populating report forms to minimize manual entry.

Administrators receive instant notifications about new issues and can assign them to maintenance staff based on priority and expertise. The platform features a dashboard for tracking repair status, generating performance reports, and analyzing maintenance trends over time. The system reduces equipment downtime by 40% and improves communication between faculty and maintenance teams.

Key technical challenges included implementing real-time notifications, optimizing QR code generation and scanning, and creating an intuitive admin interface for managing multiple concurrent requests.`,
      tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'Firebase', 'QR Integration', 'Real-time Updates'],
      liveLink: '#',
      repoLink: '#',
      image: QuickFixImage,
      category: 'fullstack',
      features: [
        'QR code-based issue reporting',
        'Real-time notifications',
        'Admin dashboard with analytics',
        'Priority-based task assignment',
        'Maintenance history tracking'
      ]
    },


    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce solution with product management, user authentication, and payment processing.',
      detailedDescription: `FlashKart is a comprehensive MERN stack e-commerce platform that provides a seamless shopping experience. The application features a responsive product catalog with advanced filtering, search functionality, and product recommendations. Users can create accounts, manage profiles, and save items to their wishlist for future purchases.

The shopping cart system supports quantity adjustments, price calculations, and promotional code applications. The checkout process integrates with Stripe for secure payment processing and includes order confirmation emails. Administrators have access to a dedicated dashboard for managing products, inventory, orders, and customer data.

I implemented Redux for state management to ensure consistent data flow across components and JWT authentication for secure user sessions. The platform handles image uploads for products, implements pagination for better performance with large catalogs, and includes user review functionality.`,
      tags: ['React', 'Redux', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe API', 'RESTful APIs'],
      liveLink: 'https://mern-ecommerce-flashkart-1.onrender.com',
      repoLink: 'https://github.com/Manthancode28/mern-ecommerce-flashkart',
      image: EcommerceImage,
      category: 'fullstack',
      features: [
        'User authentication & authorization',
        'Product search and filtering',
        'Shopping cart with persistent data',
        'Stripe payment integration',
        'Admin dashboard for inventory management',
        'Order tracking system'
      ]
    },
    {
      title: 'Property Rental & Booking Platform',
      description: 'A modern hotel reservation platform with real-time availability checking and secure booking system.',
      detailedDescription: `StaySphere is a feature-rich hotel booking application that allows users to discover, compare, and book accommodations. The platform includes advanced search functionality with filters for price range, amenities, location, and guest ratings. Each hotel listing displays high-quality images, detailed descriptions, amenities, and genuine user reviews.

The booking system features real-time availability checking, preventing double bookings and ensuring accurate room inventory. Users can create accounts to manage their bookings, receive confirmation emails, and modify reservations. The responsive design ensures optimal viewing experience across mobile devices, tablets, and desktops.

I implemented secure user authentication, integrated multiple payment gateways, and created an admin panel for hotel managers to update room availability, prices, and special offers. The application also includes a review system where users can rate their stay and provide feedback.`,
      tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'API Integration', 'Responsive Design'],
      liveLink: 'https://staysphere-4t14.onrender.com/listings',
      repoLink: 'https://github.com/Manthancode28/StaySphere-MERN',
      image: StaySphereImage,
      category: 'fullstack',
      features: [
        'Advanced search with multiple filters',
        'Real-time availability checking',
        'User review and rating system',
        'Booking management dashboard',
        'Responsive mobile-first design',
        'Secure payment processing'
      ]
    },


    {
      title: 'ADmyBRAND Marketing Landing Page',
      description: 'A high-conversion landing page for a digital marketing agency with optimized user experience.',
      detailedDescription: `ADmyBRAND is a conversion-optimized landing page designed for a digital marketing agency. The single-page application features smooth animations, engaging content sections, and clear call-to-action elements strategically placed to guide users through the conversion funnel.

I implemented a mobile-first responsive design that maintains visual appeal and functionality across all device sizes. The page includes a services section with interactive cards, a portfolio gallery with filtering options, client testimonials with automatic rotation, and a contact form with validation.

Performance optimization was a key focus—I achieved a 95+ Google PageSpeed score by optimizing images, implementing lazy loading, and minimizing render-blocking resources. The design system uses consistent spacing, typography, and color schemes to create a professional brand identity. A/B testing revealed a 35% increase in conversion rates compared to the previous design.`,
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      liveLink: 'https://admybrand-landing-page-two.vercel.app',
      repoLink: 'https://github.com/Manthancode28/admybrand-landing-page',
      image: AdmyBRANDimg,
      category: 'frontend',
      features: [
        'Mobile-first responsive design',
        'Smooth animations and transitions',
        'Optimized for conversion rates',
        'SEO-friendly structure',
        'High performance scoring',
        'Contact form with validation'
      ]
    },

    
    {
      title: 'Task Management Application',
      description: 'A comprehensive task management system with collaborative features and progress tracking.',
      detailedDescription: `TaskFlow is a productivity application designed to help individuals and teams organize their workflow efficiently. The platform allows users to create projects, break them down into tasks, set priorities and deadlines, and track progress through visual indicators.

The application features a drag-and-drop interface for organizing tasks, color-coded priority levels, and due date reminders. Users can collaborate on projects by assigning tasks to team members, adding comments, and attaching relevant files. The dashboard provides an overview of upcoming deadlines, completed tasks, and overall productivity metrics.

I implemented real-time updates using WebSocket connections for collaborative features, ensuring all team members see changes instantly. The application includes data visualization charts to help users analyze their productivity patterns over time. User authentication and authorization ensure that each user only accesses their assigned tasks and projects.`,
      tags: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'WebSockets', 'Drag & Drop', 'Data Visualization'],
      liveLink: '#',
      repoLink: 'https://github.com/Manthancode28/TaskFlow-todo-app',
      image: TaskImg,
      category: 'fullstack',
      features: [
        'Drag-and-drop task organization',
        'Team collaboration features',
        'Progress tracking with visual indicators',
        'Due date reminders and notifications',
        'Productivity analytics dashboard',
        'Real-time updates for team projects'
      ]
    },
    {
  title: 'Simon Says Memory Game',
  description: 'An interactive memory challenge game that tests and improves pattern recognition skills with increasing difficulty levels.',
  detailedDescription: `This Simon Says game is a classic memory challenge implemented with modern web technologies. The game generates increasingly complex sequences of colors and sounds that players must remember and repeat. I developed this project to demonstrate strong frontend development skills including DOM manipulation, event handling, audio integration, and game state management.

The application features multiple difficulty levels (Easy, Medium, Hard) that adjust the speed and complexity of sequences. I implemented a responsive design that works seamlessly across desktop and mobile devices, with touch-friendly controls for mobile users. The game includes visual feedback through CSS animations and auditory feedback with distinct sounds for each color.

Key technical aspects include efficient sequence generation algorithms, precise timing control using JavaScript intervals, and local storage integration to track high scores across sessions. The UI provides clear feedback for correct/incorrect patterns and includes a strict mode option for added challenge. This project showcases my ability to create engaging, interactive web applications with polished user experiences.`,
  tags: ['HTML', 'CSS', 'JavaScript', 'Game Development', 'DOM Manipulation', 'Audio API', 'Responsive Design', 'Local Storage'],
  liveLink: '#', // Add your live demo link if available
  repoLink: 'https://github.com/Manthancode28/Simon-Says-Game',
  image: SimonImg,
  category: 'frontend',
  features: [
    'Multiple difficulty levels (Easy, Medium, Hard)',
    'Visual and auditory feedback system',
    'Responsive design for all devices',
    'High score tracking with local storage',
    'Strict mode for added challenge',
    'Smooth CSS animations and transitions',
    'Progressive difficulty increase',
    'Accessible color scheme and UI'
  ]
}
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Full Stack', value: 'fullstack' },
    { name: 'Frontend', value: 'frontend' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const nextProject = () => {
    setCurrentProject((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-4 text-gray-100 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-green-400 rounded-full"></span>
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Here are some of my recent works. Each project represents my skills and dedication to creating effective solutions.
        </motion.p>

        {/* Project Filters */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => {
                  setActiveFilter(filter.value);
                  setCurrentProject(0);
                }}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeFilter === filter.value
                    ? 'bg-green-400 text-[#0a192f]'
                    : 'bg-[#112240] text-gray-300 hover:bg-[#1e3a5f]'
                } transition-colors duration-300 first:rounded-r-none last:rounded-l-none`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Project */}
        <motion.div 
          className="hidden md:block mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-[#112240] rounded-xl overflow-hidden shadow-2xl">
            <div className="md:flex">
              {/* Project Image */}
              <div className="md:w-1/2 relative">
                <div className="h-64 md:h-full overflow-hidden">
                  <img
                    src={filteredProjects[currentProject].image}
                    alt={filteredProjects[currentProject].title}
                    className="w-full h-full object-cover transition-transform duration-700 "
                  />
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <button
                    onClick={prevProject}
                    className="p-2 bg-[#0a192f] rounded-full text-green-400 hover:bg-green-400 hover:text-[#0a192f] transition-colors"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={nextProject}
                    className="p-2 bg-[#0a192f] rounded-full text-green-400 hover:bg-green-400 hover:text-[#0a192f] transition-colors"
                  >
                    <FaChevronRight />
                  </button>
                </div>
                {/* <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-green-400/20 text-green-300 text-sm font-medium rounded-full">
                    {filteredProjects[currentProject].category === 'fullstack' ? 'Full Stack' : 'Frontend'}
                  </span>
                </div> */}
              </div>

              {/* Project Details */}
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">
                  {filteredProjects[currentProject].title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {filteredProjects[currentProject].description}
                </p>
                <p className="text-gray-400 text-sm mb-6">
                  {filteredProjects[currentProject].detailedDescription}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-md font-semibold text-gray-100 mb-3">Key Features:</h4>
                  <ul className="text-gray-400 text-sm space-y-2">
                    {filteredProjects[currentProject].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-2">•</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {filteredProjects[currentProject].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-green-400/10 text-green-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {filteredProjects[currentProject].liveLink !== "#" && (
                    <a
                      href={filteredProjects[currentProject].liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-green-400 text-[#0a192f] font-medium rounded-md hover:bg-green-300 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                  {filteredProjects[currentProject].repoLink !== "#" && (
                    <a
                      href={filteredProjects[currentProject].repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 border border-green-400 text-green-400 rounded-md hover:bg-green-400/10 transition-colors"
                    >
                      <FaGithub className="mr-2" /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0  }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-[#112240] rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              initial={{ opacity: 0, y: 40, x : -40 }}
              whileInView={{ opacity: 1, y: 0, x:0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => setCurrentProject(filteredProjects.findIndex(p => p.title === project.title))}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                {/* <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-green-400/20 text-green-300 text-xs font-medium rounded-full">
                    {project.category === 'fullstack' ? 'Full Stack' : 'Frontend'}
                  </span>
                </div> */}
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-green-400 transition-colors ">
                  {project.title}
                </h4>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-green-400/10 text-green-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex justify-between text-gray-400">
                  {project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.repoLink !== "#" && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;