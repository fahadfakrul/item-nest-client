import "./Categories.css";
import ReactSlider from "react-slider";

const Categories = () => {
  return (
    <div>
      <h2 className="text- font-bold">Price Range</h2>
      <div className="w-9/12 mx-auto  h-12 ">
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={[500, 50000]}
          min={0}
          max={100000}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          pearling
          minDistance={10}
          onBeforeChange={(value, index) =>
            console.log(`onBeforeChange: ${JSON.stringify({ value, index })}`)
          }
          onChange={(value, index) =>
            console.log(`onChange: ${JSON.stringify({ value, index })}`)
          }
          onAfterChange={(value, index) =>
            console.log(`onAfterChange: ${JSON.stringify({ value, index })}`)
          }
        />
      </div>
      <h2 className="text- font-bold">Brand Names</h2>
      <form className="my-2">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" defaultChecked className="checkbox bg-gray-200" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" defaultChecked className="checkbox bg-gray-200" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" defaultChecked className="checkbox bg-gray-200" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" defaultChecked className="checkbox bg-gray-200" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" defaultChecked className="checkbox bg-gray-200" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" defaultChecked className="checkbox bg-gray-200" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" defaultChecked className="checkbox bg-gray-200" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" defaultChecked className="checkbox bg-gray-200" />
          </label>
        </div>
      </form>
      <h2 className="text- font-bold">Category Names</h2>
      <form className="my-2">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" defaultChecked className="checkbox bg-gray-200" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" defaultChecked className="checkbox bg-gray-200" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" defaultChecked className="checkbox bg-gray-200" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" defaultChecked className="checkbox bg-gray-200" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" defaultChecked className="checkbox bg-gray-200" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" defaultChecked className="checkbox bg-gray-200" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" defaultChecked className="checkbox bg-gray-200" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" defaultChecked className="checkbox bg-gray-200" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Categories;
