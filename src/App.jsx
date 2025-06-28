import { useState, useEffect } from 'react';
import './App.css'

function App() {
  // Set 'business' as the default dark theme
  const [theme, setTheme] = useState('business');
  const [count, setCount] = useState(0)

  const toggleTheme = () => {
    setTheme(theme === 'business' ? 'corporate' : 'business');
  };

  // Set the theme on the html element
  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App