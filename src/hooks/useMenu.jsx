import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: menu = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/menu");
      return data?.data;
    },
  });
  return [menu, isLoading, isError, error];
};

export default useMenu;
