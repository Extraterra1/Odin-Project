// import { useState } from 'react';
import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import Greeting from './Greeting';
import FavFood from './FavFood';
import List from './List';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World</h1>
      <img src={reactLogo} alt="" srcSet="" />
      <Greeting />
      <FavFood />
      <List />
    </>
  );
}

export default App;
