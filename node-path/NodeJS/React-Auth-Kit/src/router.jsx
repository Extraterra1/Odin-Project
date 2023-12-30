import { createBrowserRouter } from 'react-router-dom';
import Landing from './components/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  }
]);

export default router;
