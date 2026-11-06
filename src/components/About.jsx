import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaLaptopCode, FaCogs, FaGlobeAmericas, FaLanguage } from 'react-icons/fa';
import { SiWix, SiSquarespace } from 'react-icons/si';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const highlights = [
    {
      icon: <FaLaptopCode className="text-info text-2xl" />,
      title: "CMS Specialist (Wix & Squarespace)",
      text: "Crafted 34+ bespoke, high-converting client websites with custom code injection, e-commerce, and third-party integrations."
    },
    {
      icon: <FaCogs className="text-info text-2xl" />,
      title: "Full Stack & Modern Web Engineering",
      text: "Building scalable web applications with React, Node.js, Express, MongoDB, TypeScript, and Tailwind CSS."
    },
    {
      icon: <FaGlobeAmericas className="text-info text-2xl" />,
      title: "International Client Delivery",
      text: "Experienced in managing end-to-end deliverables, international stakeholder consultations, and technical support under tight deadlines."
    },
    {
      icon: <FaLanguage className="text-info text-2xl" />,
      title: "Languages & Communication",
      text: "Bengali (Native) • English (Fluent Professional Proficiency) for cross-border collaboration."
    }
  ];

  return (
    <section id="about" className="py-16 bg-base-200 overflow-hidden"> 
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariant} className="text-center mb-12">
            <span className="badge badge-info badge-outline px-4 py-3 text-sm font-semibold mb-3">
              Professional Profile
            </span>
            <h2 className="text-4xl font-bold">About Me</h2>
            <div className="w-24 h-1 bg-info mx-auto mt-4 rounded-full"></div>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={itemVariant}
              className="space-y-6 text-lg text-base-content/80 text-center lg:text-left"
            >
              <p className="leading-relaxed">
                I am a highly motivated and detail-oriented <strong className="text-base-content">Web Developer & Foreign Communication Executive</strong> with proven expertise in building responsive, user-centric websites using modern CMS platforms (<strong className="text-info">Wix</strong>, <strong className="text-info">Squarespace</strong>) and modern full-stack web technologies (<strong className="text-info">React</strong>, <strong className="text-info">Node.js</strong>, <strong className="text-info">Tailwind CSS</strong>).
              </p>
              <p className="leading-relaxed">
                Currently working at <strong className="text-base-content">Softvence IT Ltd</strong>, I spearhead client consultations, translate complex business requirements into high-performance web solutions, and collaborate with cross-functional teams to deliver exceptional digital experiences across global markets.
              </p>
              <p className="leading-relaxed">
                Supported by my ongoing Bachelor's degree in Computer Science and Engineering at <strong className="text-base-content">United International University</strong>, I combine rigorous software engineering fundamentals with real-world client agility.
              </p>
            </motion.div>

            <motion.div variants={itemVariant} className="grid grid-cols-1 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-base-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-base-300/50">
                  <div className="mt-1 flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-base-content/70 text-sm leading-relaxed">{item.text}</p>
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
