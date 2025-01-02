import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    try {
      setLoading(true);
      const { data } = await axiosSecure.get("/menu");
      setMenu(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return [menu, loading];
};

export default useMenu;
