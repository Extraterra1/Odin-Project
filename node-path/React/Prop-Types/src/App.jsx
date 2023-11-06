import { useState } from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return <Counter count={count} onClick={() => setCount((count) => count + 1)} />;
}

export default App;
