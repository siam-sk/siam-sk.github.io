import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBriefcase, FaExternalLinkAlt, FaGlobe, FaLaptopCode, FaCheckCircle } from 'react-icons/fa';
import { SiWix, SiSquarespace } from 'react-icons/si';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ProjectModal from '../components/ProjectModal';
import { experienceData } from '../data/experienceData';
import { projectsData } from '../data/projectsData';
import { clientProjectsData } from '../data/clientProjectsData';

const Home = ({ theme }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const currentExperience = experienceData[0];
  const featuredClients = clientProjectsData.filter(p => p.featured).slice(0, 4);
  const featuredFullStack = projectsData.slice(0, 2);

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Hero Section */}
      <Hero theme={theme} />

      {/* Work Experience Spotlight (Softvence IT Ltd) */}
      {currentExperience && (
        <section className="container mx-auto px-4 max-w-5xl">
          <div className="bg-base-200/90 rounded-3xl p-6 md:p-10 border border-base-300 shadow-xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="badge badge-info badge-outline px-3 py-2 text-xs font-bold uppercase tracking-wider mb-2">
                  Current Role
                </span>
                <h2 className="text-3xl font-extrabold flex items-center gap-2">
                  <FaBriefcase className="text-info text-2xl" />
                  {currentExperience.role}
                </h2>
                <p className="text-info font-semibold text-lg mt-1">{currentExperience.company}</p>
              </div>
              <div className="text-sm font-semibold text-base-content/70">
                <span className="badge badge-info text-white mr-2">{currentExperience.period}</span>
                <span>{currentExperience.location}</span>
              </div>
            </div>

            <p className="text-base-content/80 text-base leading-relaxed mb-6 max-w-3xl">
              {currentExperience.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {currentExperience.responsibilities.slice(0, 4).map((resp, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-base-content/80">
                  <FaCheckCircle className="text-info mt-1 flex-shrink-0 text-xs" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-base-300 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap gap-2">
                {currentExperience.technologies.slice(0, 5).map((tech) => (
                  <span key={tech} className="badge badge-sm bg-info/10 text-info border border-info/20 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                to="/experience"
                className="btn btn-info btn-sm md:btn-md rounded-full shadow-md text-white group whitespace-nowrap"
              >
                Full Experience
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Featured Client Websites Showcase */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="badge badge-info badge-outline px-3 py-2 text-xs font-bold uppercase tracking-wider mb-2">
              Production Work
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold flex items-center gap-2">
              <FaGlobe className="text-info text-3xl" />
              Client Websites (34+ Built)
            </h2>
            <div className="w-20 h-1 bg-info mt-3 rounded-full"></div>
          </div>
          <Link
            to="/projects"
            className="btn btn-outline btn-sm md:btn-md rounded-full group"
          >
            Browse All 34 Sites
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredClients.map((client) => {
            const PlatformIcon = client.platform === 'Wix' ? SiWix : client.platform === 'Squarespace' ? SiSquarespace : FaLaptopCode;
            const screenshotSrc = `/screenshots/${client.id}.png`;

            return (
              <motion.div
                key={client.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-base-100 rounded-2xl shadow-md overflow-hidden flex flex-col border border-base-300 hover:border-info/40 hover:shadow-xl transition-all"
              >
                <div className="relative h-36 bg-gradient-to-br from-base-200 to-base-300 flex items-center justify-center p-4 overflow-hidden">
                  <img
                    src={screenshotSrc}
                    alt={`${client.name} screenshot`}
                    onError={(e) => { e.target.style.display = 'none'; }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="text-center z-0 p-2">
                    <PlatformIcon className="text-3xl mx-auto mb-1 text-info/70" />
                    <h4 className="font-bold text-sm text-base-content/90 line-clamp-1">{client.name}</h4>
                  </div>
                  <div className="absolute top-2 left-2 z-10">
                    <span className="badge badge-xs bg-base-100/90 text-base-content font-bold border border-base-300">
                      {client.platform}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2 z-10">
                    <span className="badge badge-xs badge-info text-white font-medium">
                      {client.industry}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg mb-1">{client.name}</h3>
                  <p className="text-xs text-base-content/70 mb-3 flex-grow line-clamp-2">
                    {client.description}
                  </p>
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-xs btn-info text-white rounded-lg w-full flex items-center justify-center gap-1.5"
                  >
                    Live Site <FaExternalLinkAlt size={9} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Featured Full-Stack Web Apps */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="badge badge-info badge-outline px-3 py-2 text-xs font-bold uppercase tracking-wider mb-2">
              Software Engineering
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold flex items-center gap-2">
              <FaLaptopCode className="text-info text-3xl" />
              Full-Stack Applications
            </h2>
            <div className="w-20 h-1 bg-info mt-3 rounded-full"></div>
          </div>
          <Link
            to="/projects"
            className="btn btn-outline btn-sm md:btn-md rounded-full group"
          >
            All Projects
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredFullStack.map((project, index) => (
            <motion.div
              key={project.id || index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-base-100 rounded-2xl shadow-lg overflow-hidden flex flex-col border border-base-300/60 hover:border-info/40 hover:shadow-2xl transition-all"
            >
              <div className="overflow-hidden relative h-56 bg-base-200">
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span className="badge badge-info text-white font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-base-content/70 mb-4 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.slice(0, 5).map(tag => (
                    <span key={tag} className="badge badge-sm bg-info/10 text-info border border-info/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  {project.liveLink && project.liveLink !== '#' && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-info btn-sm flex-1 text-white"
                    >
                      Demo <FaExternalLinkAlt size={12} className="ml-1" />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-outline btn-sm flex-1"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Skills Marquee */}
      <Skills />

      {/* Call to Action Banner */}
      <section className="container mx-auto px-4 max-w-4xl pb-12">
        <div className="bg-gradient-to-r from-base-200 to-base-100 p-8 md:p-12 rounded-3xl border border-base-300 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Looking for a versatile web developer?</h2>
          <p className="text-base-content/70 max-w-lg mx-auto mb-6">
            From modern CMS setups (Wix, Squarespace) to bespoke full-stack applications with React & Node.js, I deliver end-to-end digital solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-info rounded-full px-8 text-white shadow-lg shadow-info/20">
              Get In Touch
            </Link>
            <Link to="/experience" className="btn btn-outline rounded-full px-8">
              Explore Experience
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
