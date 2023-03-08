import React from "react";
import Banner from "./Banner";
import BestSeller from "./BestSeller";
import BrowseByType from "./BrowseByType";
import PartsBanner from "./PartsBanner";
import Testimonial from "./Testimonial";
import WeekDeals from "./WeekDeals";

const Home = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Banner />
      <BrowseByType />
      <PartsBanner />
      <WeekDeals />
      <BestSeller />
      <Testimonial />
    </div>
  );
};

export default Home;
