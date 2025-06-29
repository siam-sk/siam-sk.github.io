import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFramer, SiVite, SiReactrouter, SiFirebase, SiVercel, SiNeovim } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io5";

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact className="text-sky-400" /> },
      { name: 'JavaScript', icon: <IoLogoJavascript className="text-yellow-400" /> },
      { name: 'React Router', icon: <SiReactrouter className="text-red-500" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-500" /> },
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
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
      { name: 'Vercel', icon: <SiVercel className="text-white" /> },
      { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
      { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
      { name: 'Neovim', icon: <SiNeovim className="text-green-400" /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">
            My Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((categoryItem) => (
              <div 
                key={categoryItem.category}
                className="card bg-base-100 shadow-xl border border-base-300"
              >
                <div className="card-body">
                  <h3 className="card-title text-2xl justify-center mb-4">{categoryItem.category}</h3>
                  <div className="grid grid-cols-2 gap-4 text-left">
                    {categoryItem.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center gap-3">
                        <span className="text-3xl">{skill.icon}</span>
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;