import React from 'react';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';

const AboutPage = () => {
  return (
    <div className="py-6">
      <About />
      <Education />
      <Skills />
    </div>
  );
};

export default AboutPage;
