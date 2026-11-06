import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ProjectModal from './ProjectModal';
import { projectsData } from '../data/projectsData';

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
            <h2 className="text-4xl font-bold">Projects</h2>
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
                key={project.id || index}
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
                    {project.liveLink && project.liveLink !== '#' && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-info flex-1">
                        Live Demo <FaExternalLinkAlt size={14} />
                      </a>
                    )}
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
