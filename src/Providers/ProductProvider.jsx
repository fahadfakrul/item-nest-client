import { createContext, useState } from "react";

export const ProductContext = createContext();
const ProductProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState([]);
    const [brand, setBrand] = useState('');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [sortOption, setSortOption] = useState('');

    
    return (
        <ProductContext.Provider
        value={{
          searchTerm,
          setSearchTerm,
          category,
          setCategory,
          brand,
          setBrand,
          priceRange,
          setPriceRange,
          sortOption,
          setSortOption
        }}
      >
        {children}
      </ProductContext.Provider>
    );
};

export default ProductProvider;
