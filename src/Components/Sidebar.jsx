import { useState } from "react";
import { Link } from "react-router-dom";
import Categories from "./Categories/Categories";
import { MdFilterList } from "react-icons/md";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="">
      {/* small screen filter side bar */}
      <div className=" md:hidden">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link to="/">
              <div className="flex items-center gap-3">
                <p className="text-lg md:text-xl font-semibold font-niramit">
                  Proximity <br />{" "}
                  <span className=" md:text-sm  text-[#7c8fda]">Picks</span>
                </p>
              </div>
            </Link>
          </div>
          <div className="flex-none">
            <button
              onClick={handleToggle}
              className="btn btn-square btn-ghost px-10 text-gray-500"
            >
              <div className="flex items-center gap-2">
                Filter <MdFilterList size={24}></MdFilterList>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`z-10  overflow-x-hidden w-64 space-y-5 px-2 py-4 transform mt-[67px] absolute inset-y-0 left-0 bg-white text-black ${
          !isActive && "-translate-x-full"
        } md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <Categories></Categories>
      </div>
    </div>
  );
};

export default Sidebar;
