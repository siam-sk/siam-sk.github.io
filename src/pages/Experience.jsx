import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaBuilding, FaGlobe, FaLayerGroup, FaExternalLinkAlt } from 'react-icons/fa';
import { SiWix, SiSquarespace } from 'react-icons/si';
import { FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { experienceData } from '../data/experienceData';
import { clientProjectsData } from '../data/clientProjectsData';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const wixCount = clientProjectsData.filter(p => p.platform === 'Wix').length;
  const sqCount = clientProjectsData.filter(p => p.platform === 'Squarespace').length;
  const customCount = clientProjectsData.filter(p => p.platform === 'Custom').length;

  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="badge badge-info badge-outline px-4 py-3 text-sm font-semibold mb-3">
            Professional Track Record
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Work Experience</h1>
          <p className="text-lg text-base-content/70 mt-3 max-w-2xl mx-auto">
            Engineering CMS and full-stack solutions for global clients, handling requirements, design translation, and performance optimization.
          </p>
          <div className="w-24 h-1 bg-info mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Quick Career Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          <div className="bg-base-200 p-5 rounded-2xl border border-base-300 text-center shadow-sm">
            <span className="text-3xl md:text-4xl font-extrabold text-info">{clientProjectsData.length}+</span>
            <p className="text-xs md:text-sm font-semibold text-base-content/70 mt-1">Client Websites</p>
          </div>
          <div className="bg-base-200 p-5 rounded-2xl border border-base-300 text-center shadow-sm">
            <span className="text-3xl md:text-4xl font-extrabold text-info">{sqCount}</span>
            <p className="text-xs md:text-sm font-semibold text-base-content/70 mt-1">Squarespace Sites</p>
          </div>
          <div className="bg-base-200 p-5 rounded-2xl border border-base-300 text-center shadow-sm">
            <span className="text-3xl md:text-4xl font-extrabold text-info">{wixCount}</span>
            <p className="text-xs md:text-sm font-semibold text-base-content/70 mt-1">Wix Solutions</p>
          </div>
          <div className="bg-base-200 p-5 rounded-2xl border border-base-300 text-center shadow-sm">
            <span className="text-3xl md:text-4xl font-extrabold text-info">10+</span>
            <p className="text-xs md:text-sm font-semibold text-base-content/70 mt-1">Industries Served</p>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative border-l-2 border-info/40 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12"
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id || index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-base-100 border-4 border-info flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-md shadow-info/40">
                <span className="w-2 h-2 rounded-full bg-info"></span>
              </div>

              {/* Experience Card */}
              <div className="bg-base-100 p-6 md:p-8 rounded-2xl shadow-lg border border-base-300/60 hover:border-info/40 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-base-200 pb-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl font-bold text-base-content">{exp.role}</h3>
                      {exp.current ? (
                        <span className="badge badge-info text-white font-semibold">Current Role</span>
                      ) : (
                        <span className="badge badge-outline">{exp.type}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-info font-medium mt-1">
                      <FaBuilding className="text-sm" />
                      <span className="text-lg font-semibold">{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end text-sm text-base-content/70 gap-1">
                    <span className="flex items-center gap-1.5 font-semibold text-info">
                      <FaCalendarAlt className="text-xs" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-xs" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Overview Description */}
                <p className="text-base-content/80 text-base mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div className="mb-6 space-y-2">
                    <h4 className="text-sm uppercase tracking-wider font-bold text-base-content/60">
                      Key Responsibilities & Contributions
                    </h4>
                    <ul className="space-y-2.5 mt-3">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3 text-base-content/80 text-sm md:text-base leading-relaxed">
                          <FaCheckCircle className="text-info mt-1 flex-shrink-0 text-sm" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies Badges */}
                {exp.technologies && (
                  <div className="pt-4 border-t border-base-200">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-base-content/50 mb-2.5">
                      Core Competencies & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="badge badge-sm bg-info/10 text-info border border-info/20 font-medium px-3 py-2.5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Callout to client websites */}
                <div className="mt-6 p-4 bg-base-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-base-300">
                  <div className="flex items-center gap-3">
                    <FaGlobe className="text-info text-2xl flex-shrink-0" />
                    <div>
                      <p className="font-bold text-sm">34+ Live Client Websites Built</p>
                      <p className="text-xs text-base-content/70">Wix, Squarespace & Custom web platforms</p>
                    </div>
                  </div>
                  <Link to="/projects" className="btn btn-sm btn-info text-white rounded-lg whitespace-nowrap">
                    View Client Sites <FaExternalLinkAlt size={11} className="ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA & Resume Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center bg-base-200 p-8 rounded-2xl border border-base-300"
        >
          <h3 className="text-2xl font-bold mb-2">Want to review my complete CV?</h3>
          <p className="text-base-content/70 mb-6 max-w-lg mx-auto text-sm md:text-base">
            Download the official updated PDF curriculum vitae or connect directly for client references and project inquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/SIAM_SHEIKH_Resume.pdf"
              download="SIAM_SHEIKH_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-info rounded-full shadow-lg shadow-info/20 text-white"
            >
              Download CV (PDF)
              <FiDownload className="ml-2" />
            </a>
            <Link to="/contact" className="btn btn-outline rounded-full">
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
