import React, { CSSProperties, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import side1 from "../../images/slide-img1.jpg";
import side2 from "../../images/slide-img2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchForm from "../../components/SearchForm";

const Banner: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="p-0">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
          } as CSSProperties
        }
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        // autoplay={{
        //   delay: 10000,
        //   disableOnInteraction: true,
        // }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="relative" src={side1} alt="" />
          <div className="absolute lg:top-[25%] top-[10%] left-[5%] md:left-[15%] md:top-[20%] lg:left-[32%] ">
            <h4 className="text-[#50AEF5] font-mono lg:text-2xl md:text-2xl text-lg lg:mb-3 md:mb-2">
              TOP BRANDS 2023
            </h4>
            <h1 className="font-mono lg:text-5xl md:text-3xl text-xl text-white">
              MODERN-CLASSIC <br />{" "}
              <span className="font-bold">INCREDIBLE</span>
            </h1>
            <h4 className="font-mono lg:text-2xl md:text-xl text-lg text-white lg:mt-3 md:mt-2">
              GET 40% OFF SELECTED ITEMS
            </h4>
            <Button
              onClick={() => navigate("/")}
              variant="contained"
              className=" lg:mt-5 md:mt-2 mt-1 bg-[#FBE122]  text-black hover:text-white"
            >
              Get Started
            </Button>
          </div>
          <div className="absolute top-[15%] left-[5%] hidden lg:block">
            <SearchForm />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={side2} alt="" />
          <div className="absolute lg:top-[25%] top-[10%] left-[5%] md:left-[15%] md:top-[20%] lg:left-[32%] ">
            <h4 className="text-[#50AEF5] font-mono lg:text-2xl md:text-2xl text-lg lg:mb-3 md:mb-2">
              TOP BRANDS 2023
            </h4>
            <h1 className="font-mono lg:text-5xl md:text-3xl text-xl text-white">
              MODERN-CLASSIC <br />{" "}
              <span className="font-bold">DECORATIVE</span>
            </h1>
            <h4 className="font-mono lg:text-2xl md:text-xl text-lg text-white lg:mt-3 md:mt-2">
              GET 40% OFF SELECTED ITEMS
            </h4>
            <Button
              onClick={() => navigate("/")}
              variant="contained"
              className=" lg:mt-5 md:mt-2 mt-1 bg-[#FBE122]  text-black hover:text-white"
            >
              Get Started
            </Button>
          </div>
          <div className="absolute top-[15%] left-[5%] hidden lg:block">
            <SearchForm />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
