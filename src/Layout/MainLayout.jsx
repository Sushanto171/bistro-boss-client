import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signup");

  return (
    <div>
      {/* navar */}
      {noHeaderFooter || <Navbar />}
      <div>
        {/* dynamic */}
        <Outlet />
      </div>

      {/* footer */}
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default MainLayout;
