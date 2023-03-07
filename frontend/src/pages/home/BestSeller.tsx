// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import { Divider, Typography } from "@mui/material";
import SingleWDCard from "../../components/SingleItemCard";

const BestSeller = () => {
  const bestSellData = [
    {
      name: "Acura Elite Specifications",
      image: "https://i.ibb.co/rdyY9PZ/acura-elit.jpg",
      price: 49500,
      condition: "New",
      mileage: 85000,
      transmission: "Automatic",
      year: 2014,
      engine: "I-4 1,5 l",
      fuel: "Regular",
      color: "Blue",
      doors: 5,
    },
    {
      name: "Chevrolet Volt",
      image: "https://i.ibb.co/47GCZW9/chevron-volt.jpg",
      price: 43500,
      condition: "New",
      mileage: 15000,
      transmission: "Automatic",
      year: 2017,
      engine: "V6 3,0 1",
      fuel: "Diesel",
      color: "White",
      doors: 5,
    },
    {
      name: "2016 Toyota Higlander Limited",
      image: "https://i.ibb.co/x3mvp2L/toyota-hl.jpg",
      price: 35000,
      condition: "Used",
      mileage: 22500,
      transmission: "Automatic",
      year: 2015,
      engine: "3.5L V6 DOHC 24V",
      fuel: "Gasoline",
      color: "Biscuit",
      doors: 5,
    },
    {
      name: "BMW 550i",
      image: "https://i.ibb.co/gmhvBkP/bmw-550i.jpg",
      price: 60000,
      condition: "Used",
      mileage: 90000,
      transmission: "Automatic",
      year: 2011,
      engine: "V8 4,4 l",
      fuel: "Premium",
      color: "Silver Gray",
      doors: 5,
    },
    {
      name: "Audi Q5",
      image: "https://i.ibb.co/h8JSysN/audi-q5.jpg",
      price: 65000,
      condition: "Nsed",
      mileage: 40000,
      transmission: "Automatic",
      year: 2017,
      engine: "I-4 2,0 l",
      fuel: "Premium",
      color: "Black",
      doors: 5,
    },
  ];

  return (
    <div className="my-12 lg:mx-12 bg-white ">
      <div>
        <Typography
          style={{
            borderTop: " 60px solid rgb(80,178,252)",
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
            BEST SELLER VEHICLES
          </span>
        </Typography>
      </div>
      <Divider />
      <Swiper
        slidesPerView={2}
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
        {bestSellData.map((item, i) => (
          <SwiperSlide className="py-5 px-2 shadow-sm shadow-gray-300">
            <SingleWDCard item={item} key={i} />
          </SwiperSlide>
        ))}
        <Divider />
      </Swiper>
    </div>
  );
};

export default BestSeller;
