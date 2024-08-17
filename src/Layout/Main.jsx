import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Sortingbar from "../Components/Sortingbar";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      {/* min-h-[calc(100vh-68px)] */}
      <div className='pt-[64px] relative md:flex'>
            <Sidebar></Sidebar>
          
            <div className="flex-1 min-h-[calc(100vh-67px)] md:ml-64 border-l-2 border-gray-300">
              <Sortingbar></Sortingbar>
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
            <h2>jkdfgh</h2>
            </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
