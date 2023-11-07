import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h1>This is a profile</h1>
      <h2>(It's a different route)</h2>
      <p>Nice to meet you</p>
      <Outlet />
    </div>
  );
};

export default Profile;
