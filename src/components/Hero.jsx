import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

import profilePhoto from '../assets/hero.jpg';
import profilePhoto2 from '../assets/hero2.jpg';

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
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-64 h-64 md:w-72 md:h-72 relative hidden lg:block"
        >
          
          <motion.img
            src={profilePhoto2}
            alt="Siam Sheikh"
            className="relative w-full h-full object-cover rounded-3xl shadow-2xl z-10"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />

          
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border-2 border-info/30 rounded-3xl"
              style={{
                scale: 1 + i * 0.2,
                rotate: i * 25,
              }}
              animate={{
                rotate: 360 + i * 25,
              }}
              transition={{
                duration: 25 + i * 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </motion.div>

        
        <div className="lg:hidden w-48 h-48 rounded-full shadow-2xl border-4 border-info/50">
          <img src={profilePhoto2} alt="Siam Sheikh" className="w-full h-full object-cover rounded-full" />
        </div>

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
                "I'm a MERN Stack Developer", 2000,
                "I'm a React Enthusiast", 2000,
                "I'm a Frontend Specialist", 2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-2xl md:text-3xl font-bold text-info mt-2"
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
            className="flex flex-col lg:flex-row items-center gap-6 justify-center lg:justify-start mt-8"
          >
            <motion.a 
              href="https://drive.google.com/file/d/1gTAVZKuPsOwwyxqAzAeKkBMyDnE2mcVn/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
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