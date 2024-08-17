import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../assets/pictures/login.jpg";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaSpinner } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, loading, setLoading, signInWithGoogle } = useAuth();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          icon: "success",
          title: "Logged in successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Log in failed",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();

      navigate("/");
      Swal.fire({
        icon: "success",
        title: "Signed up successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Sign up failed",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <img src={loginImg} alt="" width={600} className="rounded-lg" />
          </div>
          <div className="card  w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div>
                <p className="text-4xl text-center font-medium text-[#2d3663] ">
                  Log In
                </p>
              </div>
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
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  disabled={loading}
                  className="disabled:cursor-not-allowed btn rounded-full px-6 border-none dark:bg-[#7c8fda] dark:text-gray-50
              hover:text-[#7c8fda] hover:bg-gray-50"
                  type="submit"
                >
                  {loading ? (
                    <FaSpinner className="animate-spin m-auto"></FaSpinner>
                  ) : (
                    "Log in"
                  )}
                </button>
              </div>
              <button
                disabled={loading}
                onClick={handleGoogleSignIn}
                className="disabled:cursor-not-allowed flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 rounded-full cursor-pointer"
              >
                <FcGoogle size={32} />

                <p>Continue with Google</p>
              </button>
              <p>
                <small>
                  New Here?{" "}
                  <Link to="/signup">
                    <span className="underline">Create an account.</span>
                  </Link>{" "}
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
