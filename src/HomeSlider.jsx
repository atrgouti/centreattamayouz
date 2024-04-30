// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HomeSlider.css";

import { Link } from "react-scroll";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function HomeSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        className="mySwiper"
      >
        <SwiperSlide
          className="SwiperSlide1"
          style={{
            backgroundImage: `url(/background1.png)`,
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="SwiperSlide2"
          style={{
            backgroundImage: `url(/background2.png)`,
            backgroundSize: "cover",
            backgroundPosition: "right",
          }}
        ></SwiperSlide>
      </Swiper>
    </>
  );
}
