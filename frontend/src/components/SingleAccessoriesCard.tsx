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
    discount: number;
    rating: number;
    description: string;
  };
}

const SingleAccessoriesCard = (props: CardData) => {
  const { name, image, price, discount, rating, description } = props.item;

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
          className="w-[100%] transform hover:scale-110 duration-500 mx-auto"
          src={image}
          alt=""
        />
        <h4 className="mt-5 font-sans text-lg font-semibold">{name}</h4>
        <div className=" ">{rating}</div>
        <h3 className="my-5 font-sans text-xl font-semibold text-black">
          ${price.toLocaleString()}
        </h3>
        <Divider />
      </div>

      {hover && (
        <div className="absolute top-32 left-[70px] flex items-center justify-center flex-row gap-2">
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
              className=" bg-[#FBE122] text-black hover:bg-[#424242] hover:text-white transform hover:scale-110 duration-500 border-solid border-2 border-gray-400"
              sx={{ width: "55px", height: "55px" }}
            >
              <ShoppingCartOutlined />
            </IconButton>
          </Tooltip>
        </div>
      )}

      <Badge
        className="absolute top-10 right-10"
        badgeContent={`${discount}%`}
        sx={{
          "& .MuiBadge-badge": {
            color: "white",
            backgroundColor: "#50B2FC",
            borderRadius: "10%",
            padding: "10px",
            fontSize: "11px",
          },
        }}
      />
    </div>
  );
};

export default SingleAccessoriesCard;
