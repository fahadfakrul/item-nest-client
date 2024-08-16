import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      {/* min-h-[calc(100vh-68px)] */}
      <div className='pt-20  '>
        <p>Hello world</p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
