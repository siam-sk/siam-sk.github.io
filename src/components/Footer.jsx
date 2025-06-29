import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logoDark from '../assets/logo-black.png';
import logoLight from '../assets/logo-white.png';

const socialLinks = [
  { icon: <FaGithub />, url: 'https://github.com/siam-sk' },
  { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/siammsheikh/' },
  { icon: <FaFacebook />, url: 'https://www.facebook.com/siam.sheikh11/' },
];

const Footer = ({ theme }) => {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center md:text-left">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center md:justify-start"
        >
          <a href="#top" onClick={handleScrollTop} className="inline-block">
            <img 
              src={logoDark} 
              alt="Logo" 
              className={`h-8 w-auto ${theme === 'winter' ? 'block' : 'hidden'}`}
            />
            <img 
              src={logoLight} 
              alt="Logo" 
              className={`h-8 w-auto ${theme === 'dim' ? 'block' : 'hidden'}`}
            />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm text-base-content/70 order-last md:order-none"
        >
          &copy; {currentYear} Siam Sheikh. All Rights Reserved.
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-5 justify-center md:justify-end"
        >
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xl hover:text-info hover:scale-110 transition-all duration-300"
              aria-label={`Link to ${link.url}`}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;