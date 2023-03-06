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

const WeekDeals = () => {
  const dealsData = [
    {
      name: "Mercedes-Benz M-Class",
      image: "https://i.ibb.co/NtjSNQz/mb-m-class.jpg",
      price: 95000,
      condition: "used",
      mileage: 85000,
      transmission: "Automatic",
      Year: 2015,
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
      Year: 2016,
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
      Year: 2013,
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
      Year: 2009,
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
      Year: 2015,
      engine: "I-4 1,8 l",
      fuel: "Regular",
      color: "Red",
      doors: 5,
    },
  ];

  const [hover, setHover] = useState(false);

  return (
    <div className="my-12 lg:mx-12 bg-white">
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
        {dealsData.map((item, i) => {
          return (
            <div>
              <SwiperSlide
                className="py-5 px-2 shadow-sm shadow-gray-300"
                key={i}
              >
                <div
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  className="text-center relative"
                >
                  <img src={item.image} alt="" />
                  <h4 className="mt-5 font-sans text-lg font-semibold">
                    {item.name}
                  </h4>
                  <div className=" border-b-4 h border-[#ED6663] w-8 mx-auto mt-3"></div>
                  <h3 className="my-5 font-sans text-xl font-semibold">
                    ${item.price.toLocaleString()}
                  </h3>
                  <Divider />
                  <div className="flex items-center justify-center gap-14 mt-5 mb-2 text-[13px]  text-gray-400">
                    <div className="flex flex-col gap-2 items-center">
                      <Speed className="w-5" />
                      <h5>{item.mileage.toLocaleString()}</h5>
                    </div>
                    <div className="flex flex-col gap-2  items-center">
                      <SettingsRounded className="w-5" />
                      <h5>{item.transmission}</h5>
                    </div>
                    <div className="flex flex-col gap-2  items-center">
                      <CalendarMonth className="w-5" />
                      <h5>{item.Year}</h5>
                    </div>
                  </div>
                </div>

                {hover && (
                  <div className="absolute top-24 left-28 flex flex-row gap-5">
                    <FavoriteBorder
                      style={{
                        width: "80px",
                        height: "60px",
                        transform: "skew(150deg)",
                        background: "white",
                      }}
                    />
                    <VisibilityOutlined />
                    <ShoppingCartOutlined />
                  </div>
                )}
                <Badge
                  className="absolute top-10 left-10"
                  badgeContent={item.condition.toUpperCase()}
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "white",
                      backgroundColor: "#ED6663",
                      borderRadius: "10%",
                      padding: "10px",
                      fontSize: "11px",
                    },
                  }}
                />
              </SwiperSlide>
            </div>
          );
        })}
        <Divider />
      </Swiper>
    </div>
  );
};

export default WeekDeals;
