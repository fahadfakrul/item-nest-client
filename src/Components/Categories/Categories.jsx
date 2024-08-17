import { useContext } from "react";
import "./Categories.css";
import ReactSlider from "react-slider";
import { ProductContext } from "../../Providers/ProductProvider";

const Categories = () => {
  const { setBrand, setCategory, setPriceRange, category, brand } = useContext(ProductContext);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;

    // If checked, add the category to the array
    if (checked) {
      setCategory((prevCategories) => [...prevCategories, value]);
    } else {
      // If unchecked, remove the category from the array
      setCategory((prevCategories) =>
        prevCategories.filter((category) => category !== value)
      );
    }
  };

  const handleBrandChange = (e) => {
    const {value , checked} = e.target;
    if (checked) {
      setBrand((prevBrands) => [...prevBrands, value]);
    } else {
      // If unchecked, remove the category from the array
      setBrand((prevBrands) =>
        prevBrands.filter((brand) => brand !== value)
      );
    }
    setBrand(e.target.value);
  };
  const handlePriceChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };
  return (
    <div>
      <h2 className="text- font-bold">Price Range</h2>
      <div className="w-9/12 mx-auto h-12">
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={[50, 1500]}
          min={0}
          max={3000}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          renderThumb={(props, state) => (
            <div {...props} key={state.index}>
              {state.valueNow}
            </div>
          )}
          pearling
          minDistance={10}
          onAfterChange={handlePriceChange}
        />
      </div>

      <h2 className="text- font-bold">Category Names</h2>
      <form className="my-2">
        {[
          "Electronics",
          "Computers",
          "Cameras",
          "Audio",
          "Mobile Phones",
          "Wearables",
          "Home Automation",
          "Kitchen Appliances",
          "Home Appliances",
          "Personal Care",
          "Furniture",
          "Mobile Accessories",
          "Accessories",
          "Security",
          "Tools",
          "Home Comfort",
          "Outdoor",
          "Health",
        ].map((cat) => (
          <div className="form-control" key={cat}>
            <label className="label cursor-pointer">
              <span className="label-text">{cat}</span>
              <input
                type="checkbox"
                value={cat}
                onChange={handleCategoryChange}
                className="checkbox bg-gray-200"
                checked={category.includes(cat)}
              />
            </label>
          </div>
        ))}
      </form>
      <h2 className="text- font-bold">Brand Names</h2>
      <form className="my-2">
        {[
          "BrandX", "SoundPro", "GameTech", "AdventureCam", "BeatBox", "PhoneX",
          "FitLife", "EcoHome", "QuickBoil", "CookMaster", "CleanBot",
          "SmileCare", "WorkComfort", "ChargeQuick", "ProjectPro", "BagElite",
          "SafeWatch", "PureAir", "Foodie"
        ].map((brandName) => (
          <div className="form-control" key={brandName}>
            <label className="label cursor-pointer">
              <span className="label-text">{brandName}</span>
              <input
                type="checkbox"
                value={brandName}
                onChange={handleBrandChange}
                className="checkbox bg-gray-200"
                checked={brand.includes(brandName)}
              />
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Categories;
