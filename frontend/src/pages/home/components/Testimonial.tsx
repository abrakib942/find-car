import React, { CSSProperties } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import testimonialBg from "../../../images/others/testimonial-bg.jpg";
import people1 from "../../../images/others/people1.png";
import people2 from "../../../images/others/people2.png";
import people3 from "../../../images/others/people3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import { Avatar } from "@mui/material";

const testimonialData = [
  {
    name: "Smith John",
    image: people1,
    comment:
      "I found amazing car with details in this site. I bought a car and their delivery time is so first",
  },
  {
    name: "Stephen Smith",
    image: people2,
    comment:
      "Their behavior, support and response has been amazing. I bought a car and got it first.",
  },
  {
    name: "Devon Conway",
    image: people3,
    comment:
      "I bought some accessories, their behavior is good and I got first delivery",
  },
];

const Testimonial: React.FC = () => {
  return (
    <div
      style={{
        background: `url(${testimonialBg})`,
      }}
      className="lg:pb-96 lg:p-20 p-8"
    >
      <Swiper
        style={
          {
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-bullet-inactive-color": "#999999",
          } as CSSProperties
        }
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        {testimonialData.map((data, i) => (
          <SwiperSlide key={i} className="text-center text-white">
            <Avatar
              className="w-36 h-36 border-solid border-8 border-[#494949] mt-8 mx-auto"
              src={data.image}
              alt=""
            />
            <div className="my-4 font-sans text-xl">{data.comment}</div>
            <div className="my-5 text-white mb-12">
              <span className="text-[#FBE122] text-xl font-sans">
                {data.name}{" "}
              </span>{" "}
              Happy Customer
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
