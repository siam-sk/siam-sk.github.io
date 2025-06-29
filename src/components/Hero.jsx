import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profilePhoto from '../assets/hero.jpg';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Hero = ({ theme }) => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/siam-sk' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/siammsheikh/' },
    { icon: <FaFacebook />, url: 'https://www.facebook.com/siam.sheikh11/' },
  ];

  return (
    <div className="hero bg-transparent">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 lg:gap-40 z-10 min-h-screen pb-28">
        
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
          className="w-80 h-80 md:w-96 md:h-[26rem]" 
        >
          <img 
            src={profilePhoto} 
            className="rounded-3xl shadow-2xl w-full h-full object-cover border-4 border-neutral" 
            alt="Siam Sheikh"
          />
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
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            <a href="#" className="btn btn-info rounded-full">
              Download Resume
            </a>
            <div className="flex gap-2">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle">
                  <span className="text-2xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;