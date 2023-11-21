import { createContext, useReducer } from 'react';
import reactLogo from './assets/react.svg';
// eslint-disable-next-line import/no-absolute-path
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Header';
import Cart from './Cart';

export const AppContext = createContext({
  title: null,
  age: null
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment_count':
      return state + 1;

    default:
      break;
  }
};

function App() {
  const [count, dispatchCount] = useReducer(reducer, 0);

  return (
    <>
      <AppContext.Provider value={{ title: 'Welcome to Context', age: 312 }}>
        <Header />
      </AppContext.Provider>
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
        <button onClick={() => dispatchCount({ type: 'increment_count' })}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Cart />
    </>
  );
}

export default App;
