import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import logoLight from '../assets/logo-white.png'; 
import logoDark from '../assets/logo-black.png'; 


const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3, 
    }
  }
};

const navItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Navbar = ({ theme, toggleTheme }) => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeLink, setActiveLink] = useState('About');
  const navItems = ['About', 'Projects', 'Contact'];

  const navLinks = (
    <>
      {navItems.map((item) => (
        <motion.li 
          key={item}
          className="relative"
          onMouseEnter={() => setHoveredLink(item)}
          onMouseLeave={() => setHoveredLink(null)}
          variants={navItemVariants} 
          whileHover={{ y: -3 }}
        >
          <a 
            
            onClick={() => setActiveLink(item)}
            
            className={`text-base font-medium transition-colors duration-300 block px-3 py-2 cursor-pointer ${activeLink === item ? 'text-primary' : ''}`}
          >
            {item}
          </a>
          {hoveredLink === item && (
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-primary w-full"
              layoutId="underline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.li>
      ))}
    </>
  );

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
     
      className="navbar sticky top-0 z-50 bg-base-100/80 backdrop-blur-lg shadow-md border-b border-base-200/50 lg:px-12 sm:px-8"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-square btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        
        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-ghost px-2">
          <img 
            src={theme === 'business' ? logoLight : logoDark} 
            alt="Logo" 
            className="h-9 w-auto"
          />
        </motion.a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <motion.ul 
          className="menu menu-horizontal px-1"
          variants={navContainerVariants} 
          initial="hidden"
          animate="visible"
        >
          {navLinks}
        </motion.ul>
      </div>
      <div className="navbar-end space-x-4">
        <motion.label whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="swap swap-rotate">
          <input type="checkbox" onChange={toggleTheme} checked={theme === 'corporate'} />
          
          <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
          
          <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
        </motion.label>
        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-primary">
          Resume
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Navbar;