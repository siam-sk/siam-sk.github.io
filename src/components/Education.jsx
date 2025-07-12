import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "United International University, Dhaka",
    duration: "Present",
    description: "Focusing on core computer science principles, software development, and system design. Engaged in various projects involving web technologies and algorithms."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Dhaka College, Dhaka",
    duration: "2019",
    description: "Completed my higher secondary education with a focus on Science, building a strong foundation in mathematics and physics."
  }
];

const Education = () => {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="education" className="py-16 bg-base-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          ref={ref}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">Education</h2>
          <p className="text-lg text-base-content/60 mt-2">My academic journey and qualifications.</p>
          <div className="w-24 h-1 bg-info mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-base-200 p-6 rounded-xl shadow-lg flex flex-col h-full border-t-4 border-info"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-info/10 p-3 rounded-full">
                  <FaGraduationCap className="text-info text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-base-content/80 font-medium">{edu.institution}</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-info mb-3">{edu.duration}</p>
              <p className="text-base-content/70 flex-grow">{edu.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;