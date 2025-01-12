import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import AddItem from "../pages/Dashboard/admin/AddItem";
import ManageBookings from "../pages/Dashboard/admin/ManageBookings";
import MyCarts from "../pages/Dashboard/user/MyCarts";
import Payment from "../pages/Dashboard/user/Payment";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import OurMenu from "../pages/ourMenu/ourMenu/OurMenu";
import OurShop from "../pages/ourShop/OurShop/OurShop";
import Secret from "../pages/secret/Secret";
import AdminHome from "./../pages/Dashboard/admin/AdminHome";
import AllUsers from "./../pages/Dashboard/admin/AllUsers";
import ManageItems from "./../pages/Dashboard/admin/ManageItems";
import MyBooking from "./../pages/Dashboard/user/MyBooking";
import PaymentHistory from "./../pages/Dashboard/user/PaymentHistory";
import Reservation from "./../pages/Dashboard/user/Reservation";
import UserHome from "./../pages/Dashboard/user/UserHome";
import SignUp from "./../pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
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
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // admin route
      {
        path: "/dashboard/all-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manage-bookings",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageBookings />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manage-items",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageItems />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-item",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddItem />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin-home",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminHome />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      // user route
      {
        path: "/dashboard/user-home",
        element: (
          <PrivateRoute>
            <UserHome />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/reservation",
        element: (
          <PrivateRoute>
            <Reservation />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment-history",
        element: (
          <PrivateRoute>
            <PaymentHistory />
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
            <MyBooking />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
