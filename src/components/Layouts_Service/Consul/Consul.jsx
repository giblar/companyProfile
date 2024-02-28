import React from 'react';
import Card from './fragments/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const Consul = () => {
  return (

    <div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 mt-10">
      <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
   
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    
 
  >
   <SwiperSlide>
    <Card/>
   </SwiperSlide>
   <SwiperSlide>
    <Card/>
   </SwiperSlide>
   <SwiperSlide>
    <Card/>
   </SwiperSlide>
   <SwiperSlide>
    <Card/>
   </SwiperSlide>
  
  </Swiper>
        
      </div>
    </div>
  );
};

export default Consul;
