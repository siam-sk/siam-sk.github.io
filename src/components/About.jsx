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
      transition: { staggerChildren: 0.3 }
    }
  };

  const imageVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const textVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="about" className="py-24 bg-base-200 overflow-hidden"> 
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">About Me</h2>
          <div className="w-24 h-1 bg-info mx-auto mt-4"></div>
        </div>
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          
          <motion.div variants={imageVariant} className="relative w-full max-w-sm mx-auto">
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-info rounded-3xl transform -rotate-3"></div>
            <img 
              src={aboutPhoto} 
              alt="Siam Sheikh" 
              className="relative w-full h-auto object-cover rounded-3xl shadow-2xl"
            />
          </motion.div>

          
          <motion.div 
            variants={textVariant}
            className="space-y-6 text-lg text-base-content/80 text-center lg:text-left"
          >
            <p>
              My journey into programming began with a simple 'Hello, World!' that sparked a deep curiosity for how things work on the web. What started as a hobby quickly evolved into a full-fledged passion for building and refining my skills, transforming me into a developer who loves to bring ideas to life.
            </p>
            <p>
              I thrive on solving complex problems and have a particular love for frontend development. There's a unique satisfaction in crafting an intuitive, beautiful user interface that not only looks great but also provides a seamless experience.
            </p>
            <p>
              Outside of coding, I'm an avid photographer and love exploring new trails. I believe creativity isn't confined to a single medium, and my hobbies often inspire a fresh perspective in my professional work.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;