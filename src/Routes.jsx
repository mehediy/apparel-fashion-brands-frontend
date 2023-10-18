import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import AddProduct from "./Pages/AddProduct";
import Shop from "./Pages/Shop";
import UpdateProduct from "./Pages/UpdateProduct";
import ProductDetails from "./Pages/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/brand/:brand",
        element: <Shop />,
      },
      {
        path: "/brand/:brand/update/:id",
        element: <UpdateProduct />,
      },
      {
        path: "/brand/:brand/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default routes;
