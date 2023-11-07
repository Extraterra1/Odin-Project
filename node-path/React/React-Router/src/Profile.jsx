import { Link, useParams } from 'react-router-dom';
import Popeye from './Popeye';
import Spinach from './Spinach';

const Profile = () => {
  const { name } = useParams();

  if (name === 'popeye') return <Popeye />;
  if (name === 'spinach') return <Spinach />;
  return (
    <div>
      <h1>Profiles</h1>
      <ul>
        <li>
          <Link to="/profile/popeye">Popeye</Link>
        </li>
        <li>
          <Link to="/profile/spinach">Spinach</Link>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
