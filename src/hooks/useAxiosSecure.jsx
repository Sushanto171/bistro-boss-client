import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();

  // request interceptors
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // response interceptors
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    async (error) => {
      // check status 403 , 401
      const status = error?.response?.status;
      if (status === 403 || status === 401) {
        console.log("The incident happen");
        await signOutUser();
        // navigate to login page
        navigate("login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
