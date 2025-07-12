import React from 'react';
import Marquee from "react-fast-marquee";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFramer, SiVite, SiReactrouter, SiFirebase, SiVercel, SiNeovim, SiDaisyui, SiJsonwebtokens, SiAxios } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io5";

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact className="text-sky-400" /> },
      { name: 'JavaScript', icon: <IoLogoJavascript className="text-yellow-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-500" /> },
      { name: 'DaisyUI', icon: <SiDaisyui className="text-teal-400" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'Framer Motion', icon: <SiFramer className="text-purple-500" /> },
      { name: 'React Router', icon: <SiReactrouter className="text-red-500" /> },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-400" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
      { name: 'JWT', icon: <SiJsonwebtokens className="text-purple-500" /> },
      { name: 'Axios', icon: <SiAxios className="text-purple-600" /> },
    ]
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
      { name: 'GitHub', icon: <FaGithub className="text-base-content" /> },
      { name: 'Vercel', icon: <SiVercel className="text-base-content" /> },
      { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
      { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
      { name: 'Neovim', icon: <SiNeovim className="text-green-400" /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-base-200 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Technical Skills</h2>
          <p className="text-lg text-base-content/60 mt-2">Technologies I use to build modern web applications.</p>
          <div className="w-24 h-1 bg-info mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-12">
          {skillsData.map((category, index) => (
            <div key={category.category}>
              <h3 className="text-3xl font-bold text-center mb-8">{category.category}</h3>
              <Marquee 
                direction={index % 2 === 0 ? "left" : "right"}
                speed={50}
                pauseOnHover={true}
                gradient={true}
                gradientColor="hsl(var(--b2))" 
                gradientWidth={150}
              >
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-4 mx-4 p-4 bg-base-100 rounded-lg shadow-md border border-base-300/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <span className="text-4xl">{skill.icon}</span>
                    <span className="text-lg font-semibold text-base-content/90 whitespace-nowrap">{skill.name}</span>
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