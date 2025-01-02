import { Link, Outlet } from "react-router-dom";
import AdminMenu from "../pages/Dashboard/admin/AdminMenu";
import UserMenu from "../pages/Dashboard/user/UserMenu";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="w-52 min-h-screen bg-yellow-600 font-Cinzel p-4">
        <div className="mb-4">
          <Link to="/" className="uppercase text-center ">
            <span className="whitespace-nowrap block text-xl font-bold">
              Bistro boss
            </span>
            <span className="block tracking-widest text-sm font-semibold">
              Restaurant
            </span>
          </Link>
        </div>
        {/* admin menu */}
        <AdminMenu />

        {/* users menu */}
        <UserMenu />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
