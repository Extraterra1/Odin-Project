import { useSignIn, useAuthUser } from 'react-auth-kit';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const LogIn = () => {
  const signIn = useSignIn();
  const auth = useAuthUser();
  const onLogin = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/login');
      if (
        signIn({
          token: res.data.token,
          tokenType: 'Bearer',
          authState: res.data.user,
          expiresIn: 60
        })
      ) {
        console.log('good');
      } else {
        console.log('no good');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Header />
      {auth() && <Navigate to="/?logged" />}
      <button onClick={onLogin}>Log In</button>
    </>
  );
};

export default LogIn;
