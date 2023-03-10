import { DoubleArrow } from "@mui/icons-material";
import { Divider, Pagination } from "@mui/material";
import React from "react";
import SideSlide from "../../components/SideSlide";
import SingleWDCard from "../../components/SingleItemCard";
import { DirectionsCarFilledTwoTone } from "@mui/icons-material";

const Vehicles = () => {
  const vehicles = [
    {
      name: "Mercedes-Benz M-Class",
      image: "https://i.ibb.co/NtjSNQz/mb-m-class.jpg",
      brand: "Mercedes-Benz",
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
      brand: "Mercedes-Benz",
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
      brand: "Mercedes-Benz",
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
      brand: "Mazda",
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
      brand: "Hyundai",
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
      condition: "Used",
      mileage: 40000,
      transmission: "Automatic",
      year: 2017,
      engine: "I-4 2,0 l",
      fuel: "Premium",
      color: "Black",
      doors: 5,
    },
  ];

  const popularVehicle = [
    {
      name: "Mercedes-Benz M-Class",
      image: "https://i.ibb.co/NtjSNQz/mb-m-class.jpg",
      brand: "Mercedes-Benz",
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
      brand: "Mercedes-Benz",
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
      brand: "Mercedes-Benz",
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
      brand: "Mazda",
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
      brand: "Hyundai",
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
          <p>Vehicles</p>
        </div>
        <h1 className="text-center font-bold text-4xl font-sans text-white">
          {" "}
          VEHICLE GRID
        </h1>
      </div>
      <div className="bg-[#F5F5F5] lg:flex justify-between gap-10 px-10 py-8">
        {/* side */}

        <div className=" lg:w-[25%] flex flex-col gap-5">
          <div className="">
            <SideSlide />
          </div>
          <div>
            <h3 className="bg-[#23292E] font-sans text-lg font-semibold  p-5 text-white">
              POPULAR VEHICLES
            </h3>
            <div>
              {popularVehicle.map((item, i) => (
                <div>
                  <div className="flex py-4 gap-2 bg-white">
                    <div>
                      <img className="w-[90px] " src={item.image} alt="" />
                    </div>
                    <div className="flex flex-col gap-1 text-gray-600 px-3 text-sm">
                      <div>{item.name}</div>
                      <div className="text-xs">
                        <DirectionsCarFilledTwoTone className="w-4" />{" "}
                        {item.brand}
                      </div>
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
            {vehicles.map((item, i) => (
              <div className=" pt-5 px-2 shadow-sm  shadow-gray-300 relative">
                <SingleWDCard item={item} key={i} />
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

export default Vehicles;
