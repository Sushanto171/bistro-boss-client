import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const fetchCarts = async () => {
    if (user) {
      const { data } = await axiosSecure.get(`/carts/${user.email}`);
      return data?.data;
    }
  };
  const {
    data: carts = [],
    refetch,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: fetchCarts,
  });

  return { carts, refetch, isLoading, error, isError };
};

export default useCart;
