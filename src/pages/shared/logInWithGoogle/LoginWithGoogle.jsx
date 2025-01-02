import React from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const LoginWithGoogle = () => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const loginHandler = async () => {
    try {
      await loginWithGoogle();
      toast.success("log in success");
      navigate(`${state ? state.form : "/"}`);
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
