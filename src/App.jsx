import { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; 
import Education from './components/Education';
import Skills from './components/Skills'; 
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('dim');

  const toggleTheme = () => {
    const newTheme = theme === 'dim' ? 'winter' : 'dim';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="font-sans relative max-w-screen-1440 mx-auto">
      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero theme={theme} />
        <About />
        <Education />
        <Skills /> 
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;