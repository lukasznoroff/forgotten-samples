import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomePage, Samples, Cart } from './pages';
import { ROUTE } from './data/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ROUTE.HOME,
        element: <HomePage />,
      },
      {
        path: ROUTE.SAMPLES,
        element: <Samples />,
      },
      {
        path: ROUTE.CART,
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
