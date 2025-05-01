import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider1 from "../assets/slider_pictures/1.webp";
import slider2 from "../assets/slider_pictures/2.webp";
import slider3 from "../assets/slider_pictures/3.webp";
import slider4 from "../assets/slider_pictures/4.webp";
import Slide from "./Slide";





const Slider = () => {
  return (
    <div className="mt-10 mx-5 md:mx-0">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg"
      >
        
          <SwiperSlide>
            <Slide image={slider1} text={'Post your event or community need in minutes and reach eager volunteers ready to help.'}></Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide image={slider2} text={'Explore volunteer opportunities in your area and sign up with a single click.'}></Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide image={slider3} text={'Stay organized with your personal dashboard – view your posts and volunteer signups in one place.'}></Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide image={slider4} text={'Connect with people who care and make a positive impact in your community.'}></Slide>
          </SwiperSlide>
      
        
      </Swiper>
    </div>
  );
};

export default Slider;
