import { useState, useEffect } from 'react';
// import Profile from './Profile';
import { Link } from 'react-router-dom';
import fetchJSON from './helpers/fetchJSON';
import './App.css';

function App() {
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {}, []);

  return (
    <div>
      <img src="" alt="" />
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
