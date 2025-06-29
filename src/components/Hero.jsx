import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaFacebook, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { SiTailwindcss, SiJavascript, SiMongodb, SiExpress } from 'react-icons/si';

import profilePhoto from '../assets/hero.jpg';

const Hero = ({ theme }) => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/siam-sk' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/siammsheikh/' },
    { icon: <FaFacebook />, url: 'https://www.facebook.com/siam.sheikh11/' },
  ];

  return (
    <div className="hero bg-transparent">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 lg:gap-40 z-10 min-h-screen pb-28 lg:pb-52">
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1
          }}
          transition={{ 
            duration: 0.8, 
            ease: 'easeOut'
          }}
          className="w-64 h-64 md:w-72 md:h-72 relative" 
        >
          
          <motion.div
            className="w-full h-full relative flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {[
              { icon: <FaReact className="text-sky-400" />, position: 'top-0' },
              { icon: <FaNodeJs className="text-green-500" />, position: 'top-1/4 right-0' },
              { icon: <SiMongodb className="text-green-600" />, position: 'bottom-1/4 right-0' },
              { icon: <SiTailwindcss className="text-sky-500" />, position: 'bottom-0' },
              { icon: <SiExpress />, position: 'bottom-1/4 left-0' },
              { icon: <SiJavascript className="text-yellow-400" />, position: 'top-1/4 left-0' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`absolute ${item.position} flex items-center justify-center w-16 h-16 bg-base-100/50 backdrop-blur-sm rounded-full shadow-lg`}
                style={{ margin: '-2rem' }} 
                animate={{ rotate: -360 }} 
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                <span className="text-4xl">{item.icon}</span>
              </motion.div>
            ))}
          </motion.div>
          
        </motion.div>

        <div className="text-center lg:text-left">
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-info font-mono"
          >
            Hi, my name is
          </motion.p>
          <motion.h1 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mt-1"
          >
            Siam Sheikh.
          </motion.h1>
          
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              key={theme}
              sequence={[
                "I'm a Full Stack Developer", 2000,
                "I'm a MERN Stack Expert", 2000,
                "I'm a React Enthusiast", 2000,
                "I'm a Frontend Specialist", 2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-2xl md:text-4xl font-bold text-info mt-2"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="py-6 max-w-lg"
          >
            I build beautiful, responsive, and highly performant web applications. Passionate about creating seamless user experiences with modern technologies.
          </motion.p>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center gap-6 justify-center lg:justify-start mt-8"
          >
            <motion.a 
              href="#" 
              className="btn btn-info rounded-full shadow-lg shadow-info/30"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Download Resume
              <FiDownload className="ml-2 h-5 w-5" />
            </motion.a>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 border-2 border-base-content/30 rounded-full text-base-content/70 hover:text-info hover:border-info transition-colors duration-300"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300 }}
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