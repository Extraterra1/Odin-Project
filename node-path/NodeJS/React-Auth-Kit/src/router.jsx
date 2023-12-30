import { createBrowserRouter } from 'react-router-dom';
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
]);

export default router;
