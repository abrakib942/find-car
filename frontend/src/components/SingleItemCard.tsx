import {
  CalendarMonth,
  FavoriteBorder,
  SettingsRounded,
  ShoppingCartOutlined,
  Speed,
  VisibilityOutlined,
} from "@mui/icons-material";
import { Badge, Divider, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";

interface CardData {
  item: {
    name: string;
    image: string;
    price: number;
    condition: string;
    mileage: number;
    transmission: string;
    year: number;
    engine: string;
    fuel: string;
    color: string;
    doors: number;
  };
}

const SingleWDCard = (props: CardData) => {
  const { name, image, price, condition, mileage, transmission, year } =
    props.item;

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="text-center relative hover:text-[#ED6663]">
        <img
          className="transform hover:scale-110 duration-500 mx-auto"
          src={image}
          alt=""
        />
        <h4 className="mt-5 font-sans text-lg font-semibold">{name}</h4>
        <div className=" border-b-4 h border-[#ED6663] w-8 mx-auto mt-3"></div>
        <h3 className="my-5 font-sans text-xl font-semibold text-black">
          ${price.toLocaleString()}
        </h3>
        <Divider />
        <div className="flex items-center justify-center gap-14 mt-5 mb-2 text-[13px]  text-gray-400">
          <div className="flex flex-col gap-2 items-center">
            <Speed className="w-5" />
            <h5>{mileage.toLocaleString()}</h5>
          </div>
          <div className="flex flex-col gap-2  items-center">
            <SettingsRounded className="w-5" />
            <h5>{transmission}</h5>
          </div>
          <div className="flex flex-col gap-2  items-center">
            <CalendarMonth className="w-5" />
            <h5>{year}</h5>
          </div>
        </div>
      </div>

      {hover && (
        <div className="absolute top-20 left-[75px] flex items-center justify-center flex-row gap-2">
          <Tooltip title="Add to Wishlist">
            <IconButton
              className=" bg-white text-black hover:bg-[#424242] hover:text-white transform hover:scale-110 duration-500 border-solid border-2 border-gray-400"
              sx={{ width: "55px", height: "55px" }}
            >
              <FavoriteBorder className="" />
            </IconButton>
          </Tooltip>
          <Tooltip title="View">
            <IconButton
              className=" bg-white text-black hover:bg-[#424242] hover:text-white transform hover:scale-110 duration-500 border-solid border-2 border-gray-400"
              sx={{ width: "55px", height: "55px" }}
            >
              <VisibilityOutlined />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add to Cart">
            <IconButton
              className=" bg-white text-black hover:bg-[#424242] hover:text-white transform hover:scale-110 duration-500 border-solid border-2 border-gray-400"
              sx={{ width: "55px", height: "55px" }}
            >
              <ShoppingCartOutlined />
            </IconButton>
          </Tooltip>
        </div>
      )}

      <Badge
        className="absolute top-10 left-10"
        badgeContent={condition.toUpperCase()}
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
    </div>
  );
};

export default SingleWDCard;
