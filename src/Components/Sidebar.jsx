import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="">
      <div className=" md:hidden">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link to="/">
              <div className="flex items-center gap-3">
                {/* <img className="h-10 w-10" src={logo} alt="" /> */}
                <a className="text-lg md:text-xl font-semibold font-niramit">
                  Proximity <br />{" "}
                  <span className=" md:text-sm  text-[#65ade3]">Picks</span>
                </a>
              </div>
            </Link>
          </div>
          <div className="flex-none">
            <button onClick={handleToggle} className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`z-10 md:fixed  overflow-x-hidden w-64 space-y-5 px-2 py-4 transform mt-[67px] absolute inset-y-0 left-0 bg-white text-black ${
          isActive && "-translate-x-full"
        } md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <h1>JHGk</h1>
        <h1>JHGk</h1>
        <h1>JHGk</h1>
        <h1>JHGk</h1>
        <h1>JHGk</h1>
        <h1>JHGk</h1>
        <h1>JHGk</h1>
        <h1>JHGk</h1>
        <h1>JHGk</h1>
        <h1>JHGk</h1>
      </div>
    </div>
  );
};

export default Sidebar;
