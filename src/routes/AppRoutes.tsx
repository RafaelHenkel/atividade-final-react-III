import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    // errorElement: <Error404 />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
