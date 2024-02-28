import React, { useEffect, useState } from "react";

import Card from "./fragments/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { EffectFade } from 'swiper/modules';

function SimpleSlider() {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const getDataProduct = async () => {
    const response = await fetch(url);
    const dataProduct = await response.json();
    setProducts(dataProduct);
  };

  useEffect(() => {
    getDataProduct();
  });

  return (
   <div>
    <h1 className="text-center lg:text-left lg:m-10 text-3xl text-blue-900 font-semibold mb-10">
        testimony
      </h1>
     <Swiper 
    modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade]}
    spaceBetween={50}
   
   
    navigation
    pagination={{ clickable: true, className: '' }}
    className=""
    // autoplay={{ delay: 3000 }}
    breakpoints={{
      // Saat lebar layar kurang dari 640px, tampilkan hanya satu slide per view
      640: {
        slidesPerView: 1
      },
      // Saat lebar layar kurang dari 768px, tampilkan dua slide per view
      768: {
        slidesPerView: 2
      },
      // Saat lebar layar kurang dari 1024px, tampilkan tiga slide per view
      1024: {
        slidesPerView: 3
      }
    }}
    
    >
    <div className="slider-container  ">
      
        {products.map((produk) => (
          <SwiperSlide key={produk.id}>
            <Card 
            CardImage={produk.image}
            CardDescription={produk.description}
            CardName={produk.title}
            />
          </SwiperSlide>)
        )}
         
     
         
         
        
    </div>
    </Swiper>
   </div>
  );
}

export default SimpleSlider;
