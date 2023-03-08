import React from "react";
import Banner from "./components/Banner";
import BestSeller from "./components/BestSeller";
import BrowseByType from "./components/BrowseByType";
import Newsletter from "./components/Newsletter";
import PartsBanner from "./components/PartsBanner";
import PopularBrand from "./components/PopularBrand";
import Testimonial from "./components/Testimonial";
import WeekDeals from "./components/WeekDeals";

const Home = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Banner />
      <BrowseByType />
      <PartsBanner />
      <WeekDeals />
      <BestSeller />
      <Testimonial />
      <PopularBrand />
      <Newsletter />
    </div>
  );
};

export default Home;
