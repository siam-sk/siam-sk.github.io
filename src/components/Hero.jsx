import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import profilePhoto2 from '../assets/hero2.jpg';

const Hero = ({ theme }) => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/siam-sk', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/siammsheikh/', label: 'LinkedIn' },
    { icon: <FaFacebook />, url: 'https://www.facebook.com/siam.sheikh11/', label: 'Facebook' },
  ];

  return (
    <div className="hero bg-transparent">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 lg:gap-32 z-10 min-h-[85vh] py-12 lg:py-20">
        
        {/* Profile Image with animated rings */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-64 h-64 md:w-80 md:h-80 relative hidden lg:block"
        >
          <motion.img
            src={profilePhoto2}
            alt="Siam Sheikh"
            className="relative w-full h-full object-cover rounded-3xl shadow-2xl z-10 border-2 border-info/40"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />

          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border-2 border-info/30 rounded-3xl"
              style={{
                scale: 1 + i * 0.15,
                rotate: i * 20,
              }}
              animate={{
                rotate: 360 + i * 20,
              }}
              transition={{
                duration: 25 + i * 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </motion.div>

        {/* Mobile Profile Photo */}
        <div className="lg:hidden w-44 h-44 rounded-full shadow-2xl border-4 border-info/50 overflow-hidden">
          <img src={profilePhoto2} alt="Siam Sheikh" className="w-full h-full object-cover" />
        </div>

        {/* Hero Text */}
        <div className="text-center lg:text-left max-w-2xl">
          <motion.p
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-info font-mono font-semibold"
          >
            Hi, my name is
          </motion.p>
          <motion.h1 
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold mt-1 tracking-tight"
          >
            Siam Sheikh.
          </motion.h1>
          
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              key={theme}
              sequence={[
                "I'm a Web Developer", 2000,
                "I'm a Foreign Communication Executive", 2000,
                "I'm a CMS Specialist (Wix & Squarespace)", 2000,
                "I'm a Full Stack Developer", 2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-2xl md:text-3xl font-bold text-info mt-2"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p 
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="py-6 text-base md:text-lg text-base-content/80 leading-relaxed"
          >
            Web Developer & Foreign Communication Executive at <strong className="text-base-content font-bold">Softvence IT Ltd</strong>. Expert in building responsive, high-converting client websites with modern CMS platforms (<span className="text-info font-semibold">Wix</span>, <span className="text-info font-semibold">Squarespace</span>) and full-stack engineering (<span className="text-info font-semibold">React</span>, <span className="text-info font-semibold">Node.js</span>), paired with international client consultation and stakeholder management.
          </motion.p>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-4"
          >
            <a 
              href="/SIAM_SHEIKH_Resume.pdf" 
              download="SIAM_SHEIKH_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-info rounded-full shadow-lg shadow-info/30 text-white w-full sm:w-auto"
            >
              Download CV
              <FiDownload className="ml-2 h-5 w-5" />
            </a>

            <Link
              to="/experience"
              className="btn btn-outline rounded-full w-full sm:w-auto"
            >
              Work Experience
            </Link>

            <div className="flex gap-3 mt-2 sm:mt-0">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border-2 border-base-content/20 rounded-full text-base-content/80 hover:text-info hover:border-info transition-colors duration-300"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <span className="text-xl">{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
