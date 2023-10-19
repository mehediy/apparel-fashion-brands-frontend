import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import AddProduct from "./Pages/AddProduct";
import UpdateProduct from "./Pages/UpdateProduct";
import ProductDetails from "./Pages/ProductDetails";
import Products from "./Pages/Products";

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
        loader: () => fetch("/brands.json"),
        element: <AddProduct />,
      },
      {
        path: "/brand/:brand",
        element: <Products />,
      },
      {
        path: "/brand/:brand/update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.brand}/${params.id}`),
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
