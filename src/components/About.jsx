import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaGraduationCap, FaPalette, FaGlobeAmericas } from 'react-icons/fa';

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

  const highlights = [
    {
      icon: <FaReact className="text-info" />,
      title: "MERN Stack Developer",
      text: "Building full-stack applications with MongoDB, Express.js, React, and Node.js."
    },
    
    {
      icon: <FaPalette className="text-info" />,
      title: "Diverse Interests",
      text: "Exploring graphics design, sysadmin, and networking."
    },
    {
      icon: <FaGlobeAmericas className="text-info" />,
      title: "Curious Mind",
      text: "Passionate about geopolitics, history, and caring for my pet birds."
    }
  ];

  return (
    <section id="about" className="py-16 bg-base-200 overflow-hidden"> 
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariant} className="text-center mb-12">
            <h2 className="text-4xl font-bold">About Me</h2>
            <div className="w-24 h-1 bg-info mx-auto mt-4 rounded-full"></div>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              variants={itemVariant}
              className="space-y-6 text-lg text-base-content/80 text-center lg:text-left"
            >
              <p>
                As a Junior Full Stack Developer with hands-on experience in the MERN stack, I'm passionate about building complete web solutions. My journey is supported by a strong academic foundation, as I'm currently pursuing my Bachelor's degree in Computer Science and Engineering, with prior familiarity in languages like C, Java, and PHP.
              </p>
              <p>
                While my core focus is on modern web technologies, my curiosity extends to a wide range of fields including Graphics Design, Computer network and System Administration. This diverse interest allows me to approach problems with a holistic perspective, blending technical logic with creative design.
              </p>
            </motion.div>

            <motion.div variants={itemVariant} className="space-y-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-base-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <span className="text-2xl mt-1 text-info">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                    <p className="text-base-content/70">{item.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;