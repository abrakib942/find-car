// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { Divider, Typography } from "@mui/material";
import { CSSProperties } from "react";

const PopularBrand = () => {
  const brands = [
    { logo: "/assets/brands/audi-logo.png" },
    { logo: "/assets/brands/bmw-logo.png" },
    { logo: "/assets/brands/bugatti-logo.png" },
    { logo: "/assets/brands/ferrari-logo.png" },
    { logo: "/assets/brands/honda-logo.png" },
    { logo: "/assets/brands/hyundai-logo.png" },
    { logo: "/assets/brands/lamborghini-logo.png" },
    { logo: "/assets/brands/mazda-logo.png" },
    { logo: "/assets/brands/mercedes-benz-logo.png" },
    { logo: "/assets/brands/rolls-royce-logo.png" },
    { logo: "/assets/brands/tesla-logo.png" },
    { logo: "/assets/brands/toyota-logo.png" },
    { logo: "/assets/brands/volkswagen-logo.png" },
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
          POPULAR BRANDS
        </span>
      </Typography>
      <Divider />
      <Swiper
        // style={
        //   {
        //     "--swiper-pagination-color": "black",
        //     "--swiper-pagination-bullet-inactive-color": "#999999",
        //   } as CSSProperties
        // }
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
        autoplay={{
          delay: 1200,
          disableOnInteraction: true,
          reverseDirection: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {brands.map((item, i) => {
          return (
            <div>
              <SwiperSlide
                className="flex flex-col items-center gap-6 py-6 px-2 shadow-sm shadow-gray-300"
                key={i}
              >
                <img src={item?.logo} alt="" />
                {/* <h4 className="font-mono">{item?.name.toUpperCase()}</h4> */}
              </SwiperSlide>
            </div>
          );
        })}
        <Divider />
      </Swiper>
    </div>
  );
};

export default PopularBrand;
