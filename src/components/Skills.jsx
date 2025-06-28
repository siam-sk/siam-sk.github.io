import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFramer, SiVite } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io5";

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact className="text-sky-400" /> },
      { name: 'JavaScript', icon: <IoLogoJavascript className="text-yellow-400" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-500" /> },
      { name: 'Framer Motion', icon: <SiFramer className="text-purple-500" /> },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-400" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    ]
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
      { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
      { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
    ]
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">
            My Technical Skills
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillsData.map((categoryItem) => (
              <motion.div 
                key={categoryItem.category}
                variants={itemVariants}
                className="card bg-base-100 shadow-xl border border-base-300"
              >
                <div className="card-body">
                  <h3 className="card-title text-2xl justify-center mb-4">{categoryItem.category}</h3>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {categoryItem.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center gap-2 bg-base-200 p-2 rounded-lg">
                        <span className="text-2xl">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;