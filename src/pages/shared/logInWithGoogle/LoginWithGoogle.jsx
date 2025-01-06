import React from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { createUserToDB } from "../../../utilis/utilis";

const LoginWithGoogle = () => {
  const axiosPublic = useAxiosPublic();
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const loginHandler = async () => {
    try {
      const { user } = await loginWithGoogle();
      const userData = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        role: "user",
      };

      // 3. create user to db
      const id = await createUserToDB(userData, axiosPublic);
      id && toast.success("log in success");
      id && navigate(`${state ? state.form : "/"}`);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="px-8">
      <button onClick={loginHandler} className="btn btn-outline w-full">
        Log in with Google
      </button>
    </div>
  );
};

export default LoginWithGoogle;
