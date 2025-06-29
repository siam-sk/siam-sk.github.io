import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaLightbulb, FaRocket, FaTimes, FaTools, FaStar, FaCheckCircle } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal modal-open">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="modal-box w-11/12 max-w-7xl bg-base-200 p-0"
      >
        <div className="p-4 sticky top-0 bg-base-200/80 backdrop-blur-sm z-10 flex justify-between items-center border-b border-base-300">
          <h2 className="text-2xl lg:text-3xl font-bold">{project.name}</h2>
          <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost">
            <FaTimes />
          </button>
        </div>
        
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                  {project.images.map((img, i) => (
                      <div key={i}>
                          <img src={img} alt={`${project.name} screenshot ${i + 1}`} />
                      </div>
                  ))}
                </Carousel>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-info">
                  Live Site <FaExternalLinkAlt className="ml-2" />
                </a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  GitHub Repo <FaGithub className="ml-2" />
                </a>
              </div>
              <div className="bg-base-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><FaStar className="text-info" /> Key Features</h3>
                <ul className="space-y-2">
                  {project.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-base-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Description</h3>
                <p className="text-base-content/80">{project.description}</p>
              </div>
              <div className="bg-base-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><FaTools className="text-info" /> Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <div key={tag} className="badge badge-outline">{tag}</div>
                  ))}
                </div>
              </div>
              <div className="bg-base-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><FaLightbulb className="text-info" /> Challenges</h3>
                <p className="text-base-content/80">{project.challenges}</p>
              </div>
              <div className="bg-base-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><FaRocket className="text-info" /> Future Plans</h3>
                <p className="text-base-content/80">{project.futurePlans}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
};

export default ProjectModal;