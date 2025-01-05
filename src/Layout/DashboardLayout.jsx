import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import AdminMenu from "../pages/Dashboard/admin/AdminMenu";
import UserMenu from "../pages/Dashboard/user/UserMenu";

const DashboardLayout = () => {
  const [role, setRole] = useState("admin");
  return (
    <div className="flex ">
      <div className="w-52 bg-yellow-600 font-Cinzel p-4 h-screen overflow-y-auto sticky top-0 ">
        <aside className="">
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
          {role === "admin" ? (
            <>
              {/* admin menu */}
              <AdminMenu />
            </>
          ) : (
            <>
              {/* users menu */}
              <UserMenu />
            </>
          )}
        </aside>
      </div>
      <div className="flex-1 h-[2000px] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
