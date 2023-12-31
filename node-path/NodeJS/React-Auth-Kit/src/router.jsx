import { createBrowserRouter } from 'react-router-dom';
import { RequireAuth } from 'react-auth-kit';

import Landing from './components/Landing';
import LogIn from './components/LogIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/login',
    element: <LogIn />
  }
  // {
  //   path: '/secure',
  //   element: <RequireAuth loginPath='/login'>

  //   </RequireAuth>
  // }
]);

export default router;
