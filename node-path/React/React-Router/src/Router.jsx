import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Profile from './Profile.jsx';
import Error from './Error.jsx';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />
    },
    {
      path: '/profile',
      element: <Profile />
    },
    {
      path: 'profile/:name',
      element: <Profile />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
