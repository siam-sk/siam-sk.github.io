import { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar';

function App() {
  const [theme, setTheme] = useState('business');
  const [count, setCount] = useState(0)

  const toggleTheme = () => {
    const newTheme = theme === 'business' ? 'corporate' : 'business';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="p-8">
        <h1 className="text-4xl font-bold">MERN Stack Developer</h1>
        <p className="py-6">
          Building beautiful and functional web applications.
        </p>
      </main>
    </>
  )
}

export default App