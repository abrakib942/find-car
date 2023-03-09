import React, { CSSProperties } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { Button } from "@mui/material";

const SideSlide = () => {
  const slideData = [
    {
      image: "/assets/slide1.jpg",
      heading: "50% OFF",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "/assets/slide2.jpg",
      heading: "HOT COLLECTION",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "/assets/slide3.jpg",
      heading: "SUMMER COLLECTION",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div>
      <Swiper
        style={
          {
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-bullet-inactive-color": "#999999",
          } as CSSProperties
        }
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {slideData.map((data, i) => (
          <SwiperSlide key={i} className="">
            <img className="relative w-full" src={data.image} alt="" />
            <div className="absolute top-10 text-white flex flex-col text-center gap-3 px-8">
              <h1 className="font-sans font-bold text-4xl">{data.heading}</h1>
              <p>{data.description}</p>
              <Button className="text-[#FBE122] underline">BUY NOW</Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SideSlide;
