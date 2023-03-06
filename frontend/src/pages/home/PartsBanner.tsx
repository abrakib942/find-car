// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import speakers from "../../images/speakers.png";
import schedule from "../../images/schedule.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const PartsBanner = () => {
  return (
    <div className="mb-12 lg:mx-12 ">
      <Swiper
        slidesPerView={1}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="">
          <SwiperSlide>
            <img className="md:w-full" src={speakers} alt="" />
          </SwiperSlide>
          <SwiperSlide className="">
            <img className="md:w-full" src={schedule} alt="" />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default PartsBanner;
