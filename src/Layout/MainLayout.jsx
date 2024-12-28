import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      {/* navar */}

      <div>
        {/* dynamic */}
        <Outlet />
      </div>

      {/* footer */}
    </div>
  );
};

export default MainLayout;
