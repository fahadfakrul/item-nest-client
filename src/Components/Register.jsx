import { Link, useNavigate } from "react-router-dom";
import signupImg from "../assets/pictures/signup.jpg";
import useAuth from "../Hooks/useAuth";
import { FaSpinner } from "react-icons/fa";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const navigate = useNavigate();
  const {
    loading,
    createUser,
    signInWithGoogle,
    updateUserProfile,
    setLoading,
  } = useAuth();
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.image.value;

    try {
      setLoading(true);
      const result = await createUser(email, password);
      console.log(result);
      //update user name and photo url
      await updateUserProfile(name, photo);
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
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <img src={signupImg} alt="" width={600} className="rounded-lg" />
          </div>
          <div className="card  w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div>
                <p className="text-4xl text-center font-medium text-[#2d3663] ">
                  Sign Up
                </p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name here"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email here"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your photo url here"
                  name="image"
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
                    "Sign Up"
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
                  Already have an account?{" "}
                  <Link to="/login">
                    <span className="underline">Login your account.</span>
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

export default Register;
