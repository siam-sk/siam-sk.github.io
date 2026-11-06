import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaLayerGroup, FaLock, FaGlobe, FaLaptopCode, FaCheck } from 'react-icons/fa';
import { SiWix, SiSquarespace } from 'react-icons/si';
import ProjectModal from '../components/ProjectModal';
import { projectsData } from '../data/projectsData';
import { clientProjectsData } from '../data/clientProjectsData';

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState('clients'); // 'clients' | 'fullstack'
  const [platformFilter, setPlatformFilter] = useState('All');
  const [industryFilter, setIndustryFilter] = useState('All');
  const [selectedFullStackProject, setSelectedFullStackProject] = useState(null);

  // Client industries list
  const industries = ['All', ...new Set(clientProjectsData.map(p => p.industry))];

  // Filter client projects
  const filteredClients = clientProjectsData.filter(project => {
    const matchesPlatform = platformFilter === 'All' || project.platform === platformFilter;
    const matchesIndustry = industryFilter === 'All' || project.industry === industryFilter;
    return matchesPlatform && matchesIndustry;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="badge badge-info badge-outline px-4 py-3 text-sm font-semibold mb-3">
            Work Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Projects & Client Work</h1>
          <p className="text-lg text-base-content/70 mt-3 max-w-2xl mx-auto">
            Explore 34+ live client websites built for international businesses alongside full-stack engineering applications.
          </p>
          <div className="w-24 h-1 bg-info mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Primary Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-base-200 p-1.5 rounded-full inline-flex border border-base-300 shadow-inner">
            <button
              onClick={() => setActiveTab('clients')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'clients'
                  ? 'bg-info text-white shadow-md'
                  : 'text-base-content/70 hover:text-base-content'
              }`}
            >
              <FaGlobe />
              Client Websites ({clientProjectsData.length})
            </button>
            <button
              onClick={() => setActiveTab('fullstack')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'fullstack'
                  ? 'bg-info text-white shadow-md'
                  : 'text-base-content/70 hover:text-base-content'
              }`}
            >
              <FaLaptopCode />
              Full-Stack Web Apps ({projectsData.length})
            </button>
          </div>
        </div>

        {/* ================= CLIENT WEBSITES TAB ================= */}
        {activeTab === 'clients' && (
          <div>
            {/* Filters Row */}
            <div className="bg-base-200/80 p-4 md:p-6 rounded-2xl border border-base-300 mb-8 space-y-4">
              {/* Platform Filters */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs uppercase font-bold tracking-wider text-base-content/60 mr-2">
                  Platform:
                </span>
                {['All', 'Squarespace', 'Wix', 'Custom'].map(plat => (
                  <button
                    key={plat}
                    onClick={() => setPlatformFilter(plat)}
                    className={`btn btn-xs md:btn-sm rounded-full ${
                      platformFilter === plat ? 'btn-info text-white shadow-sm' : 'btn-ghost bg-base-100'
                    }`}
                  >
                    {plat === 'Wix' && <SiWix className="mr-1" />}
                    {plat === 'Squarespace' && <SiSquarespace className="mr-1" />}
                    {plat}
                  </button>
                ))}
              </div>

              {/* Industry Filters */}
              <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-base-300/50">
                <span className="text-xs uppercase font-bold tracking-wider text-base-content/60 mr-2">
                  Industry:
                </span>
                {industries.map(ind => (
                  <button
                    key={ind}
                    onClick={() => setIndustryFilter(ind)}
                    className={`btn btn-xs rounded-full ${
                      industryFilter === ind ? 'btn-info text-white font-semibold' : 'btn-ghost bg-base-100'
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>

            {/* Client Cards Grid */}
            <motion.div
              key={`${platformFilter}-${industryFilter}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredClients.map((client) => {
                // Determine icon
                const PlatformIcon = client.platform === 'Wix' ? SiWix : client.platform === 'Squarespace' ? SiSquarespace : FaLaptopCode;
                const screenshotSrc = `/screenshots/${client.id}.png`;

                return (
                  <motion.div
                    key={client.id}
                    variants={itemVariants}
                    className="bg-base-100 rounded-2xl shadow-md overflow-hidden flex flex-col group border border-base-300/70 hover:border-info/50 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Header Banner / Screenshot Area */}
                    <div className="relative h-44 bg-gradient-to-br from-base-200 to-base-300 flex items-center justify-center p-6 overflow-hidden">
                      {/* Image Preview with fallback to stylized banner */}
                      <img
                        src={screenshotSrc}
                        alt={`${client.name} screenshot`}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Stylized Fallback Art */}
                      <div className="text-center z-0 p-4">
                        <PlatformIcon className="text-4xl mx-auto mb-2 text-info/70 group-hover:scale-110 group-hover:text-info transition-all duration-300" />
                        <h4 className="font-extrabold text-lg text-base-content/90 line-clamp-1">{client.name}</h4>
                        <span className="text-xs text-base-content/60">{client.industry}</span>
                      </div>

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="badge badge-sm bg-base-100/90 backdrop-blur-sm text-base-content font-bold border border-base-300 flex items-center gap-1 shadow-sm">
                          <PlatformIcon className="text-info text-xs" />
                          {client.platform}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3 z-10">
                        <span className="badge badge-sm badge-info text-white shadow-sm font-medium">
                          {client.industry}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold group-hover:text-info transition-colors">
                          {client.name}
                        </h3>
                      </div>

                      <p className="text-sm text-base-content/70 mb-4 flex-grow leading-relaxed">
                        {client.description}
                      </p>

                      {/* Password Note if site has preview password */}
                      {client.password && (
                        <div className="mb-4 flex items-center gap-2 p-2 rounded-lg bg-warning/10 border border-warning/30 text-warning text-xs font-medium">
                          <FaLock className="text-xs flex-shrink-0" />
                          <span>Preview Password: <code className="font-bold underline">{client.password}</code></span>
                        </div>
                      )}

                      {/* CTA Button */}
                      <div className="mt-auto pt-3 border-t border-base-200">
                        <a
                          href={client.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-info w-full text-white rounded-xl shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                        >
                          Visit Live Website
                          <FaExternalLinkAlt size={11} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        )}

        {/* ================= FULL-STACK APPLICATIONS TAB ================= */}
        {activeTab === 'fullstack' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id || index}
                variants={itemVariants}
                className="bg-base-100 rounded-2xl shadow-lg overflow-hidden flex flex-col group border border-base-300/60 hover:border-info/40 hover:shadow-2xl transition-all duration-300"
              >
                <div className="overflow-hidden relative h-56 bg-base-200">
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="badge badge-info text-white shadow-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-info transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-base-content/70 mb-4 flex-grow text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="badge badge-sm bg-info/10 text-info border border-info/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto pt-4 border-t border-base-200">
                    {project.liveLink && project.liveLink !== '#' ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-info btn-sm md:btn-md flex-1 text-white"
                      >
                        Live Demo <FaExternalLinkAlt size={12} className="ml-1" />
                      </a>
                    ) : null}
                    <button
                      onClick={() => setSelectedFullStackProject(project)}
                      className="btn btn-outline btn-sm md:btn-md flex-1"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Modal for Full-Stack Detail */}
      <AnimatePresence>
        {selectedFullStackProject && (
          <ProjectModal
            project={selectedFullStackProject}
            onClose={() => setSelectedFullStackProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPage;
