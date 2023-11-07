import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h1>This is a profile</h1>
      <h2>(It's a different route)</h2>
      <p>Nice to meet you</p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
};

export default Profile;
