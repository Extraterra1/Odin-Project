import { createBrowserRouter } from 'react-router-dom';
import { RequireAuth } from 'react-auth-kit';

import Landing from './components/Landing';
import LogIn from './components/LogIn';
import Secure from './components/Secure';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/login',
    element: <LogIn />
  },
  {
    path: '/secure',
    element: (
      <RequireAuth loginPath="/login">
        <Secure />
      </RequireAuth>
    )
  }
]);

export default router;
