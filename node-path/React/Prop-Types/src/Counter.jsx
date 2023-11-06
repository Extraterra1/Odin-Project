const Counter = ({ count, onClick }) => {
  return <h1 onClick={onClick}>Clicked {count} times</h1>;
};

export default Counter;
