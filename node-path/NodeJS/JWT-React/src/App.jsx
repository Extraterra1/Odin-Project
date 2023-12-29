import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
// eslint-disable-next-line import/no-absolute-path
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const login = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/login');
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    login();
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {user && <h1>Token is {user}</h1>}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
