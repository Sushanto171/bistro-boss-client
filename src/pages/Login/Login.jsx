import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import bgImage from "../../assets/others/authentication.png";
import sideImage from "../../assets/others/authentication2.png";
import LoadingSpinner from "../../components/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import LoginWithGoogle from "../shared/logInWithGoogle/LoginWithGoogle";
const Login = () => {
  const [disable, setDisable] = useState(true);
  const { logInUser, loading, setLoading } = useAuth();
  const { state } = useLocation();
  console.log(state);
  const navigate = useNavigate();
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleValidateCaptcha = (text) => {
    if (validateCaptcha(text)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const formHandle = async (e) => {
    e.preventDefault();
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;

      await logInUser(email, password);
      navigate(`${state?.form ? state?.form : "/"}`);
      toast.success("log in success");
    } catch (error) {
      setLoading(false);
      toast.success(error.message);
    }
  };
  return (
    <div
      className="hero w-full bg-base-200 min-h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url("${bgImage}")` }}
    >
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={sideImage} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow">
          <h1 className="text-center text-gray-800 font-semibold mt-8 text-4xl">
            Log in
          </h1>
          <form onSubmit={(e) => formHandle(e)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <div>
                <LoadCanvasTemplate />
                <input
                  type="text"
                  onBlur={(e) => handleValidateCaptcha(e.target.value)}
                  placeholder="type the Captcha here"
                  className="input input-bordered w-full"
                  name=""
                  id=""
                  aria-level="input Captcha"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button
                disabled={disable}
                className="btn bg-yellow-200 hover:bg-yellow-300"
              >
                {loading ? <LoadingSpinner /> : "Login"}
              </button>
            </div>
          </form>
          <LoginWithGoogle />
          <p className="mb-8 px-9">
            <small>
              Don't heave an account?
              <Link to="/signup" className="underline">
                Sign up
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
