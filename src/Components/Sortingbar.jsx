import { Link } from "react-router-dom";

const Sortingbar = () => {
 
  return (
    <div className="navbar bg-base-100 hidden md:flex ">
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
        <button  className="btn btn-square btn-ghost">
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
  );
};

export default Sortingbar;
