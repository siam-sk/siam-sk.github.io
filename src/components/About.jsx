import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="about" className="py-16 bg-base-200"> 
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center" 
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-8">
            A Little More About Me
          </motion.h2>
          
          <motion.div 
            variants={itemVariants} 
            className="text-left md:text-center space-y-4 text-lg text-base-content/80"
          >
            <p>
              My journey into the world of programming began with a simple 'Hello, World!' that sparked a deep curiosity for how things work on the web. What started as a hobby quickly evolved into a full-fledged passion. I've spent countless hours learning, building, and refining my skills, transforming from a curious enthusiast into a dedicated developer who loves to bring ideas to life through code.
            </p>
            <p>
              I thrive on the challenge of solving complex problems and have a particular love for frontend development. There's a unique satisfaction in crafting an intuitive, beautiful user interface that not only looks great but also provides a seamless experience. I enjoy working with modern tools like React and Tailwind CSS to build dynamic and responsive applications.
            </p>
            <p>
              Outside of coding, I'm an avid photographer and love exploring new trails on the weekend. I believe that creativity isn't confined to a single medium, and my hobbies often inspire a fresh perspective in my professional work.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;