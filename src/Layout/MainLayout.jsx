import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* navar */}
      <Navbar />
      <div>
        {/* dynamic */}
        <Outlet />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
