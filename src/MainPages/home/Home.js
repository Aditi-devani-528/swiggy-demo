import React from "react";
import MainNavbar from "../../Navbar-Footer/MainNavbar";
import SliderHome from "../../MainPages/home/SliderHome";
import TopRestro from "./TopRestro";
import FoodDelivery from "./FoodDelivery";
import BestPlaces from "./BestPlaces";
function Home() {
  return (
    <>
      <MainNavbar />
      <SliderHome />
      <TopRestro/>
      <FoodDelivery/>
      <BestPlaces/>
    </>
  );
}

export default Home;
