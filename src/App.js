import { Route, Routes } from "react-router-dom";
import FoodDelivery from "./MainPages/home/FoodDelivery";
import Home from "./MainPages/home/Home";
import TopRestro from "./MainPages/home/TopRestro";
import AddProduct from "./form/AddProduct";


function App() {
  return (
    <>
      {/* <TopRestro/> */}
      {/* <MainNavbar/> */}
      {/* <Mainhome/> */}
      {/* <Home/> */}
      {/* <HomePage/> */}
      {/* <Home /> */}
      {/* <TopRestro/> */}
      {/* <Swiper/> */}
      {/* <Aditi/> */}
      {/* <Muislider/> */}
      {/* <FoodDelivery/> */}
      {/* <Hedar/> */}
      {/* <MainMenu/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default App;
