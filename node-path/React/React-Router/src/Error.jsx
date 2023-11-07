import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h1>Route not found!</h1>
      <p>That's weird</p>
      <Link to="/">Click here to go back</Link>
    </div>
  );
};

export default Error;
