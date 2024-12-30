import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = () => {
    try {
      setLoading(true);
      fetch("http://localhost:5000/menu")
        .then((res) => res.json())
        .then((data) => {
          setMenu(data.data);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return [menu, loading];
};

export default useMenu;
