import PropTypes from 'prop-types';

const Counter = ({ count, onClick }) => {
  return <h1 onClick={onClick}>Clicked {count} times</h1>;
};

Counter.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.func
};

export default Counter;
