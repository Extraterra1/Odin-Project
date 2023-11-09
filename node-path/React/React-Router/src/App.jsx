import { useState, useEffect } from 'react';
// import Profile from './Profile';
import { Link } from 'react-router-dom';
import fetchJSON from './helpers/fetchJSON';
import './App.css';

function App() {
  const [img, setImg] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchJSON('https://jsonplaceholder.typicode.com/photos');
      setImg({ url: res[0].url, title: res[0].title });
    };
    fetchData();
  }, []);

  return (
    <div>
      <img src={img.url} alt="" />
      <h4>{img.title}</h4>
      <h1>This is the main page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat a quam natus. Repellat nisi ad aspernatur officiis quae? Eum aliquid distinctio animi
        dolorem libero vel unde ducimus sit et atque.
      </p>
      <nav>
        <ul>
          <li>
            <Link to="/profile">Go to Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default App;
