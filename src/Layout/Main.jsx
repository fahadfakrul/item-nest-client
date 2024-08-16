import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      {/* min-h-[calc(100vh-68px)] */}
      <div className='pt-[64px] relative md:flex'>
            <Sidebar></Sidebar>
          
            <div className="flex-1 min-h-[calc(100vh-67px)] md:ml-64 border border-l-1 border-gray-400"><h2>jkdfgh</h2>
            <h2>jkdfgh</h2>
            <h2>jkdfgh</h2>
            <h2>jkdfgh</h2>
            <h2>jkdfgh</h2>
            <h2>jkdfgh</h2>
            <h2>jkdfgh</h2>
            <h2>jkdfgh</h2>
            <h2>jkdfgh</h2>
            <h2>jkdfgh</h2>
            <h2>jkdfgh</h2>
            <h2>jkdfgh</h2>
            <h2>jkdfgh</h2>
            </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
