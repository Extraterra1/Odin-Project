import PropTypes from 'prop-types';

function Title({ children }) {
  return <h1>{children}</h1>;
}

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default Title;
