import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const [isAdmin, adminLoading] = useAdmin();
  const { user, loading } = useAuth();

  if ((loading, adminLoading)) return <LoadingSpinner />;
  return user && isAdmin ? children : <Navigate to="/" replace={true} />;
};

export default AdminRoute;
