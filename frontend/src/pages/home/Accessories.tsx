import { DoubleArrow } from "@mui/icons-material";
import { Divider, Pagination } from "@mui/material";
import React from "react";
import SideSlide from "../../components/SideSlide";
import SingleAccessoriesCard from "../../components/SingleAccessoriesCard";

const Accessories = () => {
  const accessories = [
    {
      name: "Gorgeous Mercedes-Benz E-Class All-Terrain Luxury",
      image: "https://i.ibb.co/tBd7P1Y/p31.jpg",
      price: 310,
      discount: 12,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.",
    },
    {
      name: "Diesel Turbocharger HX35 HX35W Turbo Charger",
      image: "https://i.ibb.co/vzP3T98/p36.jpg",
      price: 159,
      discount: 17,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.",
    },
    {
      name: "Best Cell Phone Car TurboCharges Mercedes-Benz",
      image: "https://i.ibb.co/KsnjHh2/p37.jpg",
      price: 36,
      discount: 28,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.",
    },
    {
      name: "STICKERS ETRIER DE FREIN ALFA ROMEO",
      image: "https://i.ibb.co/88xWQm7/p38.jpg",
      price: 25,
      discount: 50,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.",
    },
    {
      name: "Brembo – Cross Drilled 2-Piece Rotor Big Brake Kit",
      image: "https://i.ibb.co/TtsQgky/p39.jpg",
      price: 90,
      discount: 25,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.",
    },
    {
      name: "Black Wheel Cover – 14 inch Matte Black Hubcap",
      image: "https://i.ibb.co/cFh0jzK/p40.jpg",
      price: 120,
      discount: 34,
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.",
    },
    {
      name: "Car and Truck Throttle Bodies for Mercedes Benz",
      image: "https://i.ibb.co/v18bkVr/p41.jpg",
      price: 65,
      discount: 19,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.",
    },
    {
      name: "Mercedes Benz E W212 C W204 GENUINE Oil Filter",
      image: "https://i.ibb.co/TDXnK2h/p42.jpg",
      price: 135,
      discount: 13,
      rating: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.",
    },
    {
      name: "Car Ford Ranger Ford Motor Company Rim Wheel",
      image: "https://i.ibb.co/KwncZBH/p43.jpg",
      price: 50,
      discount: 38,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.",
    },
    {
      name: "WRX Custom Gauge Pods & Bezels",
      image: "https://i.ibb.co/FHqCGMm/p44.jpg",
      price: 140,
      discount: 16,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.",
    },
    {
      name: "Budge B-3 Blue Size 3: Fits 16’8″ Long Car Cover",
      image: "https://i.ibb.co/cLkFnCN/p45.jpg",
      price: 90,
      discount: 40,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.",
    },
  ];

  const topRated = [
    {
      name: "Car and Truck Throttle Bodies for Mercedes Benz",
      image: "https://i.ibb.co/v18bkVr/p41.jpg",
      price: 65,
      discount: 19,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.",
    },
    {
      name: "STICKERS ETRIER DE FREIN ALFA ROMEO",
      image: "https://i.ibb.co/88xWQm7/p38.jpg",
      price: 25,
      discount: 50,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.",
    },
    {
      name: "Best Cell Phone Car TurboCharges Mercedes-Benz",
      image: "https://i.ibb.co/KsnjHh2/p37.jpg",
      price: 36,
      discount: 28,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.",
    },
    {
      name: "Diesel Turbocharger HX35 HX35W Turbo Charger",
      image: "https://i.ibb.co/vzP3T98/p36.jpg",
      price: 159,
      discount: 17,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.",
    },
    {
      name: "Gorgeous Mercedes-Benz E-Class All-Terrain Luxury",
      image: "https://i.ibb.co/tBd7P1Y/p31.jpg",
      price: 310,
      discount: 12,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.",
    },
  ];

  return (
    <div>
      <div
        style={{
          background: `url(assets/category-bg.jpg)`,
          backgroundSize: "cover",
        }}
        className="p-28"
      >
        <div className="flex items-center justify-center gap-2 font-semibold text-white text-[12px] font-sans">
          <p>Home</p>
          <DoubleArrow className="w-3 text-gray-400" />
          <p>Shop</p>
        </div>
        <h1 className="text-center font-bold text-4xl font-sans text-white">
          {" "}
          PRODUCTS
        </h1>
      </div>
      <div className="bg-[#F5F5F5] lg:flex justify-between gap-10 px-10 py-8">
        {/* side */}

        <div className=" lg:w-[25%] flex flex-col gap-5">
          <div>
            <h3 className="bg-[#23292E] font-sans text-lg font-semibold  p-5 text-white">
              PRODUCT CATEGORIES
            </h3>
          </div>
          <div className="">
            <SideSlide />
          </div>
          <div>
            <h3 className="bg-[#23292E] font-sans text-lg font-semibold  p-5 text-white">
              TOP RATED PRODUCTS
            </h3>
            <div>
              {topRated.map((item, i) => (
                <div>
                  <div className="flex py-4 gap-2 bg-white">
                    <div>
                      <img className="w-[90px] " src={item.image} alt="" />
                    </div>
                    <div className="flex flex-col gap-1 text-gray-600 px-3 text-sm">
                      <div>{item.name}</div>
                      <div className="text-xs">{item.rating}</div>
                      <div className="text-[#F07763]">
                        ${item.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <Divider />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* grid */}

        <div className=" lg:w-[75%] bg-white">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 ">
            {accessories.map((product, i) => (
              <div className=" pt-5 px-2 shadow-sm  shadow-gray-300 relative">
                <SingleAccessoriesCard item={product} key={i} />
                {/* <Divider /> */}
              </div>
            ))}
          </div>
          <Divider />
          <div className="p-8">
            <Pagination count={10} variant="outlined" color="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
