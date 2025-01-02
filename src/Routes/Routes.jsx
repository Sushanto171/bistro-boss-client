import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import MyCarts from "../pages/Dashboard/user/MyCarts";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import OurMenu from "../pages/ourMenu/ourMenu/OurMenu";
import OurShop from "../pages/ourShop/OurShop/OurShop";
import Secret from "../pages/secret/Secret";
import MyBooking from "./../pages/Dashboard/user/MyBooking";
import PaymentHistory from "./../pages/Dashboard/user/PaymentHistory";
import Reservation from "./../pages/Dashboard/user/Reservation";
import UserHome from "./../pages/Dashboard/user/UserHome";
import SignUp from "./../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />,
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/user-home",
        element: (
          <PrivateRoute>
            <UserHome />,
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/reservation",
        element: (
          <PrivateRoute>
            <Reservation />,
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment-history",
        element: (
          <PrivateRoute>
            <PaymentHistory />,
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/carts",
        element: (
          <PrivateRoute>
            <MyCarts />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-booking",
        element: (
          <PrivateRoute>
            <MyBooking />,
          </PrivateRoute>
        ),
      },
    ],
  },
]);
