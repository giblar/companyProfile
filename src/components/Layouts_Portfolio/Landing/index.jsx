import React from "react";
import Card from "./fragments/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { EffectFade,EffectFlip } from "swiper/modules";


const index = () => {
  return (
    <div className="overflow-hidden">
      <h2 className="mt-5 mx-5 lg:text-4xl text-2xl text-center font-semibold ">
        this is an <span className="text-blue-800">aplication</span> we have
        made <span className="text-blue-800">for</span> a{" "}
        <span className="text-blue-800">client</span>
      </h2>
      <div className="my-10 ">
        <Swiper
          modules={[Navigation, Pagination,  A11y, EffectFade, EffectFlip]}
          spaceBetween={50}
          effect="Flip"
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        
        >
         <SwiperSlide> <Card /></SwiperSlide>
         <SwiperSlide> <Card /></SwiperSlide>
         <SwiperSlide> <Card /></SwiperSlide>
         <SwiperSlide> <Card /></SwiperSlide>
           
          
        </Swiper>
      </div>
    </div>
  );
};

export default index;
