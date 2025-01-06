import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: admin,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["admin", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/user/admin/${user?.email}`);
      return data?.data;
    },
  });

  return [admin, isLoading, isError, error];
};

export default useAdmin;
