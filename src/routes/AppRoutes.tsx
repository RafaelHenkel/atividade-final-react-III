import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error404 from '../pages/Error404';
import { Home } from '../pages/Home';
import { PokePage } from '../pages/PokePage';
import { Pokedex } from '../pages/Pokedex';

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
  {
    path: '/pokedex',
    element: <Pokedex />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
