import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
// eslint-disable-next-line import/no-absolute-path
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

function App() {
  const [user, setUser] = useState(null);
  const [post, setPost] = useState(null);

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/login');
      setUser({ ...response.data.user, token: response.data.token });
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      console.log(err);
    }
  };

  const createPost = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/posts', null, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      setPost(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setUser({ ...decodedToken.user, token });
    }
  }, []);

  const clickLogo = (e) => {
    console.log(e.nativeEvent.offsetX);
  };

  return (
    <>
      <div>
        <a target="_blank" rel="noreferrer" onClick={clickLogo}>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {!user && <button onClick={login}>Log In</button>}
        {user && <h1>Token is {'...' + user.token.slice(user.token.length - 10)}</h1>}
        {user && !post && <button onClick={createPost}>Test Post Auth</button>}
        {post && <p>{post}</p>}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
