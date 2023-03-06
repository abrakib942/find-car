import React from "react";
import Banner from "./Banner";
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
    </div>
  );
};

export default Home;
