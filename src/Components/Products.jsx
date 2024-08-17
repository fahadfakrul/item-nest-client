import { IoChevronDown } from "react-icons/io5";
import useProducts from "../Hooks/useProducts";
import ProductCard from "./ProductCard";
import { useState } from "react";


const Products = () => {
    const [products] = useProducts()
    const [isloading, setisLoading] = useState(true);
    if (isloading) return <p>Loading...</p>;
    return (
        <div>
             <div className="text-right mr-8 md:mr-14 mt-8">
        <details className="dropdown ">
          <summary className="m-1 btn bg-[#7c8fda] text-white px-5 text-lg font-semibold">
            Sort By <IoChevronDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 items-center">
            <li onClick={() => handleSpotsFilter("Ascending")}>
              {" "}
              <a>Ascending</a>{" "}
            </li>
            <li onClick={() => handleSpotsFilter("Descending")}>
              {" "}
              <a>Descending</a>{" "}
            </li>
          </ul>
        </details>
      </div>
             <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 m-3">
             {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
                </div>
        </div>
    );
};

export default Products;