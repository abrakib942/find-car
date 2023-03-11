// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { Divider, Typography } from "@mui/material";
import { CSSProperties } from "react";
import Marquee from "react-fast-marquee";

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

      <Marquee speed={60} gradient={false}>
        {brands.map((item, i) => {
          return (
            <div
              className="grid items-center p-2 shadow-sm shadow-gray-300"
              key={i}
            >
              <img className="w-36" src={item?.logo} alt="" />
              {/* <h4 className="font-mono">{item?.name.toUpperCase()}</h4> */}
            </div>
          );
        })}
      </Marquee>
      <Divider />
    </div>
  );
};

export default PopularBrand;
