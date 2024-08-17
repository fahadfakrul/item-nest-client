import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import Sidebar from "../Components/Sidebar";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="pt-[64px] relative md:flex">
        <Sidebar></Sidebar>
        <div className="flex-1 min-h-[calc(100vh-67px)] md:ml-64 border-l-2 border-gray-300">
          <Products></Products>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
