import { useSignIn, useIsAuthenticated } from 'react-auth-kit';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const LogIn = () => {
  const signIn = useSignIn();
  const isAuthenticated = useIsAuthenticated();
  const onLogin = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/login');
      signIn({
        token: res.data.token,
        tokenType: 'Bearer',
        authState: res.data.user,
        expiresIn: 60
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {isAuthenticated() && <Navigate to="/?logged" />}
      <Header />
      <button onClick={onLogin}>Log In</button>
    </>
  );
};

export default LogIn;
