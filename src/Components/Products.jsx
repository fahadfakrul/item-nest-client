import { IoChevronDown } from "react-icons/io5";
import useProducts from "../Hooks/useProducts";
import ProductCard from "./ProductCard";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Providers/ProductProvider";
import axios from "axios";

const Products = () => {
  const [products] = useProducts();
  const { searchTerm ,brand,priceRange,category } = useContext(ProductContext);
  const [isloading, setIsLoading] = useState(false);
  const [finalProducts, setFinalProducts] = useState(products);

  const handleSpotsFilter = (sortOption) => {
    setIsLoading(true);
    let sortedProducts = [...products];
    if (sortOption === "Ascending") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Descending") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "Newest") {
      sortedProducts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }
    setFinalProducts(sortedProducts);
    setIsLoading(false);
  };
  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products`, {
          params: {
            search: searchTerm,
            brand: brand,
            category: category,
            minPrice: priceRange[0],
            maxPrice: priceRange[1],
          },
        });
        setFinalProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [searchTerm, brand, category, priceRange]);

  if (isloading) return <p>Loading...</p>;
  return (
    <div>
      <div className="text-left ml-8 mt-8">
        <details className="dropdown ">
          <summary className="m-1 btn bg-[#7c8fda] text-white px-5 text-lg font-semibold">
            Sort By <IoChevronDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 items-center">
            <li onClick={() => handleSpotsFilter("Ascending")}>
              {" "}
              <a>Price Low to High</a>{" "}
            </li>
            <li onClick={() => handleSpotsFilter("Descending")}>
              {" "}
              <a>Price High to Low</a>{" "}
            </li>
            <li onClick={() => handleSpotsFilter("Newest")}>
              {" "}
              <a>Date Added: Newest First</a>{" "}
            </li>
          </ul>
        </details>
      </div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 m-3">
        {finalProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
