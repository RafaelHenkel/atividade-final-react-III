import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error404 from '../pages/Error404';
import { Home } from '../pages/Home';
import { PokePage } from '../pages/PokePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: '/:name',
    element: <PokePage />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
