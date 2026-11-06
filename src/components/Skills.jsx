import React from 'react';
import Marquee from "react-fast-marquee";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaComments, FaUsers, FaClock, FaHandshake } from 'react-icons/fa';
import { TbBrandVscode } from 'react-icons/tb';
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFramer,
  SiVite,
  SiFirebase,
  SiVercel,
  SiDaisyui,
  SiJsonwebtokens,
  SiAxios,
  SiWix,
  SiSquarespace,
  SiShopify,
  SiWordpress,
  SiTypescript,
  SiCanva,
  SiFigma
} from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io5";

const skillsData = [
  {
    category: 'CMS Platforms & No-Code',
    skills: [
      { name: 'Wix', icon: <SiWix className="text-blue-500" /> },
      { name: 'Squarespace', icon: <SiSquarespace className="text-base-content" /> },
      { name: 'Shopify', icon: <SiShopify className="text-emerald-500" /> },
      { name: 'WordPress', icon: <SiWordpress className="text-sky-600" /> },
    ]
  },
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React', icon: <FaReact className="text-sky-400" /> },
      { name: 'JavaScript (ES6+)', icon: <IoLogoJavascript className="text-yellow-400" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-500" /> },
      { name: 'DaisyUI', icon: <SiDaisyui className="text-teal-400" /> },
      { name: 'Framer Motion', icon: <SiFramer className="text-purple-500" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    ]
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Express.js', icon: <SiExpress className="text-base-content" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      { name: 'RESTful APIs', icon: <SiAxios className="text-indigo-400" /> },
      { name: 'JWT Auth', icon: <SiJsonwebtokens className="text-purple-500" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
    ]
  },
  {
    category: 'Tools & Design',
    skills: [
      { name: 'Git & GitHub', icon: <FaGithub className="text-base-content" /> },
      { name: 'VS Code', icon: <TbBrandVscode className="text-blue-500" /> },
      { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
      { name: 'Vercel', icon: <SiVercel className="text-base-content" /> },
      { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
      { name: 'Canva', icon: <SiCanva className="text-cyan-400" /> },
    ]
  },
  {
    category: 'Client & Project Management',
    skills: [
      { name: 'Overseas Client Communication', icon: <FaComments className="text-info" /> },
      { name: 'Stakeholder Management', icon: <FaHandshake className="text-emerald-400" /> },
      { name: 'Timeline & Delivery Management', icon: <FaClock className="text-amber-400" /> },
      { name: 'Cross-functional Collaboration', icon: <FaUsers className="text-sky-400" /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-base-200 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="badge badge-info badge-outline px-4 py-3 text-sm font-semibold mb-3">
            Technical Proficiency
          </span>
          <h2 className="text-4xl font-bold">Core Competencies & Skills</h2>
          <p className="text-lg text-base-content/60 mt-2">
            CMS platforms, modern engineering stacks, and client management methodologies.
          </p>
          <div className="w-24 h-1 bg-info mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-10">
          {skillsData.map((category, index) => (
            <div key={category.category} className="bg-base-100/60 p-5 rounded-2xl border border-base-300/60 shadow-sm">
              <h3 className="text-xl font-bold text-center mb-5 text-base-content/90 flex items-center justify-center gap-2">
                {category.category}
              </h3>
              <Marquee 
                direction={index % 2 === 0 ? "left" : "right"}
                speed={45}
                pauseOnHover={true}
                gradient={true}
                gradientColor="hsl(var(--b1))" 
                gradientWidth={80}
              >
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 mx-3 px-5 py-3 bg-base-100 rounded-xl shadow-sm border border-base-300 hover:border-info/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-sm font-semibold text-base-content/90 whitespace-nowrap">{skill.name}</span>
                  </div>
                ))}
              </Marquee>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
