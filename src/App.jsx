import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Experience from './pages/Experience';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dim';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dim' ? 'winter' : 'dim';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans relative max-w-screen-1440 mx-auto bg-base-100 text-base-content transition-colors duration-300">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Home theme={theme} />} />
          </Routes>
        </main>
        <Footer theme={theme} />
      </div>
    </BrowserRouter>
  );
}

export default App;
