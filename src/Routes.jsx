import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import AddProduct from "./Pages/AddProduct";
import Shop from "./Pages/Shop";
import UpdateProduct from "./Pages/UpdateProduct";

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
    ],
  },
]);

export default routes;
