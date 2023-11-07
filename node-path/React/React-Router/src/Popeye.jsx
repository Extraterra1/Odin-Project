import { Link } from 'react-router-dom';

const Popeye = () => {
  return (
    <>
      <h1>I'm hipster Popeye</h1>
      <p>I do not like spinach</p>
      <Link to="/">Go back</Link>
    </>
  );
};

export default Popeye;
