import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "United International University, Dhaka",
    duration: "Expected April 2026",
    type: "degree",
    description: "Focusing on core computer science principles, software architecture, algorithms, and full-stack development."
  },
  {
    degree: "Complete Web Development with Programming Hero",
    institution: "Programming Hero",
    duration: "July 2025",
    type: "certificate",
    description: "Comprehensive professional certification in modern web development, mastering React, Node.js, Express, MongoDB, RESTful APIs, and full-stack system architecture."
  },
  {
    degree: "Higher Secondary School Certificate (HSC)",
    institution: "Dhaka College, Dhaka",
    duration: "2019",
    type: "degree",
    description: "Completed higher secondary education in the Science discipline, building analytical and mathematical problem-solving fundamentals."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Banani Bidyaniketan School & College, Dhaka",
    duration: "2017",
    type: "degree",
    description: "Completed secondary school education in Science with academic excellence."
  }
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="education" className="py-16 bg-base-100 overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          ref={ref}
          className="text-center mb-12"
        >
          <span className="badge badge-info badge-outline px-4 py-3 text-sm font-semibold mb-3">
            Academic & Certifications
          </span>
          <h2 className="text-4xl font-bold">Education & Training</h2>
          <p className="text-lg text-base-content/60 mt-2">My academic foundations and specialized technical credentials.</p>
          <div className="w-24 h-1 bg-info mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-base-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border-t-4 border-info"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-info/10 p-3 rounded-xl flex-shrink-0 mt-1">
                  {edu.type === 'certificate' ? (
                    <FaCertificate className="text-info text-2xl" />
                  ) : (
                    <FaGraduationCap className="text-info text-2xl" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-snug">{edu.degree}</h3>
                  <p className="text-base-content/80 font-medium text-sm mt-1">{edu.institution}</p>
                </div>
              </div>
              <div className="mb-3">
                <span className="badge badge-sm badge-info badge-outline font-semibold">
                  {edu.duration}
                </span>
              </div>
              <p className="text-base-content/70 text-sm leading-relaxed flex-grow">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
