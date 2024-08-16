import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useAuth();
  return (
    <div className="navbar flex justify-between  bg-[#1b263b] fixed z-10">
      <div >
        
        <p className="btn btn-ghost text-2xl font-extrabold text-[#65ade3] logo">ItemNest</p>
      </div>
      <div className="form-control">
          <input
            type="text"
            placeholder="Search "
            className="input input-bordered w-28 md:w-auto"
          />
        </div>
      <div >
        
      {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar tooltip hover:tooltip-open tooltip-left "
                  data-tip={user?.displayName || "no name available"}
                >
                  <div className="w-10 rounded-full ">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        user?.photoURL ||
                        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60  text-lg"
                >
                  <li>
                    <a>{user?.email || "email not found"}</a>
                  </li>

                  <li className="text-[#3A516E]">
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <button
                  className="btn rounded-full px-6  dark:bg-[#47CCC8] dark:text-gray-50
            hover:text-[#2d3663] hover:bg-gray-50 lg:mr-2"
                >
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button
                  className="btn rounded-full px-6 hidden md:inline-block dark:bg-[#47CCC8] dark:text-gray-50
            hover:text-[#2d3663] hover:bg-gray-50"
                >
                  Sign up
                </button>
              </Link>
            </>
          )}
      </div>
    </div>
  );
};

export default Navbar;
