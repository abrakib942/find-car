import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import convertible from "../../images/type/convertible.png";
import coupe from "../../images/type/coupe.png";
import sedan from "../../images/type/sedan.png";
import suv from "../../images/type/suv.png";
import truck from "../../images/type/track.png";
import wagon from "../../images/type/wagon.png";
import hatchback from "../../images/type/hatchback.png";
import hybrid from "../../images/type/hybrid.png";
import luxury from "../../images/type/luxury.png";
import pickup from "../../images/type/pickup.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Box } from "@mui/system";
import { Divider, Typography } from "@mui/material";

const BrowseByType = () => {
  const vehicleType = [
    {
      image: convertible,
      name: "Convertible",
    },
    {
      image: coupe,
      name: "Coupe",
    },
    {
      image: sedan,
      name: "Sedan",
    },
    {
      image: suv,
      name: "Suv",
    },
    {
      image: truck,
      name: "Truck",
    },
    {
      image: wagon,
      name: "Wagon",
    },
    {
      image: hatchback,
      name: "Hatchback",
    },
    {
      image: hybrid,
      name: "Hybrid",
    },
    {
      image: luxury,
      name: "Luxury",
    },
    {
      image: pickup,
      name: "Pickup",
    },
  ];

  return (
    <div className="my-12 lg:mx-12 bg-white">
      <Typography
        style={{
          borderTop: " 60px solid rgb(35,41,46)",
          borderRight: "40px solid transparent",
          width: "320px",

          position: "relative",
        }}
        className=" text-white font-semibold italic text-[18px]  font-sans"
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          display: { xs: "block", sm: "block", md: "block" },
        }}
      >
        <span
          style={{
            position: "absolute",
            bottom: "10%",
            left: "5%",

            transform: "translate(5%, -50%)",
          }}
        >
          BROWSE BY VEHICLE TYPE
        </span>
      </Typography>
      <Divider />
      <Swiper
        slidesPerView={2}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {vehicleType.map((vehicle, i) => {
          return (
            <div>
              <SwiperSlide
                className="flex flex-col items-center gap-6 py-6 px-2 shadow-sm shadow-gray-300"
                key={i}
              >
                <img src={vehicle?.image} alt="" />
                <h4 className="font-mono">{vehicle?.name.toUpperCase()}</h4>
              </SwiperSlide>
            </div>
          );
        })}
        <Divider />
      </Swiper>
    </div>
  );
};

export default BrowseByType;
