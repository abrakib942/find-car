import React from "react";
import Banner from "./Banner";
import BrowseByType from "./BrowseByType";
import PartsBanner from "./PartsBanner";

const Home = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Banner />
      <BrowseByType />
      <PartsBanner />
    </div>
  );
};

export default Home;
