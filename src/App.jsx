import { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; 

function App() {
  const [theme, setTheme] = useState('business');

  const toggleTheme = () => {
    const newTheme = theme === 'business' ? 'corporate' : 'business';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="font-sans relative max-w-screen-1440 mx-auto">
      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <About /> 
      </div>
    </div>
  );
}

export default App;