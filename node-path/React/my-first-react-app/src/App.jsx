// import { useState } from 'react';
import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import Greeting from './Greeting';
import FavFood from './FavFood';
import List from './List';
import Colors from './Colors';
import Person from './Person';
import Clock from './Clock';
import ClassInput from './ClassInput';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);
  const animals = ['Lion', 'Cow', 'Snake', 'Lizard'];

  return (
    <>
      <h1>Hello World</h1>
      <img src={reactLogo} alt="" srcSet="" />
      <ClassInput />
      <Clock />
      <Person />
      <Greeting />
      <FavFood />
      <List animals={animals} />
      <Colors />
    </>
  );
}

export default App;
