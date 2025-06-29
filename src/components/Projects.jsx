import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import ProjectModal from './ProjectModal';
import project1Img1 from '../assets/projects/1.1.png';
import project1Img2 from '../assets/projects/1.2.png';
import project1Img3 from '../assets/projects/1.3.png';
import project2Img1 from '../assets/projects/2.1.png';
import project2Img2 from '../assets/projects/2.2.png';
import project2Img3 from '../assets/projects/2.3.png';
import project3Img1 from '../assets/projects/3.1.png';
import project3Img2 from '../assets/projects/3.2.png';
import project3Img3 from '../assets/projects/3.3.png';

const projectsData = [
  {
    name: "SharedSpoon - Food Sharing Platform",
    images: [project1Img1, project1Img2, project1Img3],
    description: "A full-stack web application designed to connect individuals with surplus food to those in need, aiming to reduce food waste.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Firebase", "JWT", "Tailwind CSS", "DaisyUI"],
    liveLink: "https://a11-food-sharing.web.app/",
    repoLink: "https://github.com/siam-sk/a11-food-sharing-client",
    keyFeatures: [
      "Secure user authentication with Firebase and JWT.",
      "Full CRUD functionality for managing food listings.",
      "Interactive UI with sorting and searching capabilities.",
      "Protected routes for authenticated users.",
      "Responsive design for all screen sizes."
    ],
    challenges: "The primary challenge was building a secure, full-stack application with JWT-based API communication for authenticated users. Implementing CRUD operations for food listings and managing user-specific requests required careful state management and secure backend logic.",
    futurePlans: "Future plans include adding real-time notifications for new food listings in a user's area, creating a dashboard for organizational donors, and enhancing the search with map-based filtering."
  },
  {
    name: "TalentSphere - Freelance Marketplace",
    images: [project2Img1, project2Img2, project2Img3],
    description: "A full-stack freelance marketplace connecting clients with skilled freelancers, featuring task posting, a bidding system, and user dashboards.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Tailwind CSS", "DaisyUI"],
    liveLink: "https://a10-freelance-marketpace.web.app/",
    repoLink: "https://github.com/siam-sk/a10-freelance-marketplace-client",
    keyFeatures: [
      "Comprehensive user dashboard for clients and freelancers.",
      "Advanced bidding system for tasks.",
      "Full task management (post, view, update, delete).",
      "Dynamic page titles and dark/light theme support.",
      "Secure user authentication and profile management."
    ],
    challenges: "Key challenges included designing a comprehensive user dashboard with multiple states (client vs. freelancer), implementing a real-time bidding system, and ensuring secure task management with appropriate user permissions.",
    futurePlans: "Future enhancements could include a direct messaging system, integration of a payment gateway for secure transactions, and a reputation system with user reviews and ratings."
  },
  {
    name: "OAHMS - Old Age Home Management System",
    images: [project3Img1, project3Img2, project3Img3],
    description: "A full-stack web application that allows users to manage old age home operations, including resident management, staff scheduling, and resource allocation.",
    tags: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
    liveLink: "#",
    repoLink: "https://github.com/saleheen110282/Old-Age-Home-Management-System-OAHMS-",
    keyFeatures: [
      "Resident and staff management modules.",
      "Resource allocation and scheduling features.",
      "Integrated payment gateway (SSLCommerz).",
      "User-friendly interface for administrative tasks."
    ],
    challenges: "Adding a payment gateway for the first time was a significant challenge. I had to learn SSLCommerz integration and ensure secure transactions for paid services.",
    futurePlans: "Future plans include adding a real-time chat feature for residents and staff, implementing a mobile-friendly design, and enhancing the reporting features for better management insights."
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <>
      <section id="projects" className="py-16 bg-base-200 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            ref={ref}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold">My Projects</h2>
            <p className="text-lg text-base-content/60 mt-2">A selection of my recent work.</p>
            <div className="w-24 h-1 bg-info mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-base-100 rounded-xl shadow-lg overflow-hidden flex flex-col group border border-base-300/50 hover:bg-base-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img src={project.images[0]} alt={project.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-base-content/70 mb-4 flex-grow">{project.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <div key={tag} className="badge badge-sm bg-info/10 text-info border border-info/20">{tag}</div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-info flex-1">
                      Live Demo <FaExternalLinkAlt size={14} />
                    </a>
                    <button onClick={() => setSelectedProject(project)} className="btn btn-outline flex-1">
                      View Detail <FaExternalLinkAlt size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;