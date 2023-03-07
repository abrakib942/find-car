import React from "react";
import Banner from "./Banner";
import BestSeller from "./BestSeller";
import BrowseByType from "./BrowseByType";
import PartsBanner from "./PartsBanner";
import WeekDeals from "./WeekDeals";

const Home = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Banner />
      <BrowseByType />
      <PartsBanner />
      <WeekDeals />
      <BestSeller />
    </div>
  );
};

export default Home;
