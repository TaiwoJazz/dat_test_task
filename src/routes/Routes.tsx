import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';

const router = createBrowserRouter([
  {
    element: (
      <>
        <Layout />
      </>
    ),
    //errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/about-us', element: <AboutPage /> },
      { path: '/product-catalog', element: <ProductPage /> }
    ]
  }
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
