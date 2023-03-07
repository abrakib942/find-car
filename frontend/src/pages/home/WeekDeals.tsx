// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  SettingsRounded,
  Speed,
  CalendarMonth,
  VisibilityOutlined,
  FavoriteBorder,
  ShoppingCartOutlined,
} from "@mui/icons-material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import { Badge, Button, Divider, Typography } from "@mui/material";
import { useState } from "react";
import SingleWDCard from "../../components/SingleWDCard";

const WeekDeals = () => {
  const dealsData = [
    {
      name: "Mercedes-Benz M-Class",
      image: "https://i.ibb.co/NtjSNQz/mb-m-class.jpg",
      price: 95000,
      condition: "used",
      mileage: 85000,
      transmission: "Automatic",
      year: 2015,
      engine: "V6 3,0 1",
      fuel: "Diesel",
      color: "White",
      doors: 5,
    },
    {
      name: "Mercedes-Benz GLE-Class",
      image: "https://i.ibb.co/pLzRD0w/mb-gle-class.jpg",
      price: 80900,
      condition: "used",
      mileage: 60000,
      transmission: "Automatic",
      year: 2016,
      engine: "V8 4,7 l",
      fuel: "Premium",
      color: "Red",
      doors: 5,
    },
    {
      name: "Mercedes-Benz GL-Class",
      image: "https://i.ibb.co/WV4xpZd/mb-gl-class.jpg",
      price: 110500,
      condition: "used",
      mileage: 72500,
      transmission: "Automatic",
      year: 2013,
      engine: "V6 3,0 l",
      fuel: "Diesel",
      color: "Blue",
      doors: 5,
    },
    {
      name: "Mazda Mazda3",
      image: "https://i.ibb.co/hy6PNdf/mazda3.jpg",
      price: 17000,
      condition: "new",
      mileage: 150000,
      transmission: "Manual",
      year: 2009,
      engine: "I-4 2,3 l",
      fuel: "Regular",
      color: "Black",
      doors: 5,
    },
    {
      name: "Hyundai Elantra",
      image: "https://i.ibb.co/qF6DFJN/huandai-elantra.jpg",
      price: 25600,
      condition: "used",
      mileage: 90000,
      transmission: "Manual",
      year: 2015,
      engine: "I-4 1,8 l",
      fuel: "Regular",
      color: "Red",
      doors: 5,
    },
  ];

  return (
    <div className="my-12 lg:mx-12 bg-white ">
      <div className="bg-[#23292E]">
        <Typography
          style={{
            borderTop: " 60px solid rgb(251,225,34)",
            borderRight: "40px solid transparent",
            width: "320px",

            position: "relative",
          }}
          className=" text-black font-semibold italic text-[18px]  font-sans"
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
            DEALS OF THE WEEK
          </span>
        </Typography>
      </div>
      <Divider />
      <Swiper
        slidesPerView={2}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dealsData.map((item, i) => (
          <SwiperSlide className="py-5 px-2 shadow-sm shadow-gray-300">
            <SingleWDCard item={item} key={i} />
          </SwiperSlide>
        ))}
        <Divider />
      </Swiper>
    </div>
  );
};

export default WeekDeals;
