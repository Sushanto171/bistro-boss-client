import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import bgImage from "../../assets/others/authentication.png";
import sideImage from "../../assets/others/authentication2.png";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { photo } = data;
    if (photo && photo[0]) {
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
            Sign up
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", { required: "Name is required." })}
              />
              {errors.name && (
                <p>
                  <small className="text-error">{errors.name.message}</small>
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: "Email is required." })}
              />
              {errors.email && (
                <p>
                  <small className="text-error">{errors.email.message}</small>
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                accept="img/*"
                {...register("photo", { required: "Photo is required." })}
              />
              {errors.photo && (
                <p>
                  <small className="text-error">{errors.photo.message}</small>
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: "Password is required",
                  validate: {
                    minLength: (value) =>
                      value.length > 6 ||
                      "Password must be at least 6 character or log.",
                    hasUppercase: (value) =>
                      /[A-Z]/.test(value) ||
                      "Password must include an uppercase latter.",
                    hasLowercase: (value) =>
                      /[a-z]/.test(value) ||
                      "Password must include a lowercase letter",
                    hasNumber: (value) =>
                      /\d/.test(value) || "Password must include a number",
                    hasSpecialChar: (value) =>
                      /[@$!%*?&]/.test(value) ||
                      "Password must include a special character (@$!%*?&)",
                  },
                })}
              />
              {errors.password?.type === "required" && (
                <p>
                  <small className="text-error">
                    {errors.password.message}
                  </small>
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p>
                  <small className="text-error">
                    {errors.password.message}
                  </small>
                </p>
              )}
              {errors.password?.type === "hasUppercase" && (
                <p>
                  <small className="text-error">
                    {errors.password.message}
                  </small>
                </p>
              )}
              {errors.password?.type === "hasLowercase" && (
                <p>
                  <small className="text-error">
                    {errors.password.message}
                  </small>
                </p>
              )}
              {errors.password?.type === "hasNumber" && (
                <p>
                  <small className="text-error">
                    {errors.password.message}
                  </small>
                </p>
              )}
              {errors.password?.type === "hasSpecialChar" && (
                <p>
                  <small className="text-error">
                    {errors.password.message}
                  </small>
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-yellow-200 hover:bg-yellow-300">
                Sign up
              </button>
            </div>
          </form>
          <p className="mb-8 px-9">
            <small>
              Already heave an account?
              <Link to="/login" className="underline">
                Log in
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
