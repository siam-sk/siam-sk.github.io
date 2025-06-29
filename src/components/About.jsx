import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import aboutPhoto from '../assets/hero.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const technologies = [
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Tailwind CSS',
  ];

  return (
    <section id="about" className="py-24 bg-base-200 overflow-hidden"> 
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariant} className="text-center mb-16">
            <h2 className="text-4xl font-bold">About Me</h2>
            <div className="w-24 h-1 bg-info mx-auto mt-4 rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            
            <motion.div variants={itemVariant} className="lg:col-span-2 w-full max-w-sm mx-auto group">
              <div className="relative">
                <div className="absolute inset-0 bg-info rounded-3xl transform -rotate-3 transition-transform duration-300 group-hover:rotate-0"></div>
                <img 
                  src={aboutPhoto} 
                  alt="Siam Sheikh" 
                  className="relative w-full h-auto object-cover rounded-3xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariant}
              className="lg:col-span-3 space-y-6 text-lg text-base-content/80"
            >
              <p>
                My journey into programming began with a simple 'Hello, World!' that sparked a deep curiosity for how things work on the web. What started as a hobby quickly evolved into a full-fledged passion for building and refining my skills, transforming me into a developer who loves to bring ideas to life.
              </p>
              <p>
                I thrive on solving complex problems and have a particular love for frontend development. There's a unique satisfaction in crafting an intuitive, beautiful user interface that not only looks great but also provides a seamless experience.
              </p>
              <div>
                <p className="mb-4">Here are a few technologies I've been working with recently:</p>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {technologies.map((tech, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-info">▹</span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;