import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/ourMenu/ourMenu/OurMenu";
import OurShop from "../pages/ourShop/OurShop/OurShop";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <OurMenu />,
      },
      {
        path: "/shop",
        element: <OurShop />,
      },
    ],
  },
]);
