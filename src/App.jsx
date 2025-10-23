import Header from "./header/header";
import NavBar from "./navbar/navbar";
import Banner from "./banner/banner";
import Banner1 from "./banner/banner1";
import Arrivals from "./arrivals/arrivals";
import Blogs from "./blogs/blogs";
import Bottom from "./bottom/bottom";
import "./App.css"
function App(){
  return (
    <div>
       <Header />
       <NavBar />
       <Banner />
       <Banner1 />
       <Arrivals />
       <Blogs />
       <Bottom />
    </div>
  );
}
export default App;