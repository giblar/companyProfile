import Card from "./fragments/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { EffectFade } from "swiper/modules";
import React, { useEffect, useState } from "react";

const Innovation = () => {
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
      <h1 className=" ml-10 lg:absolute lg:mt-[5rem] text-center text-blue-900 text-3xl font-bold ">
        Our Innovation
      </h1>
      <div className=" h-screen flex justify-center items-center">
        <Swiper
          modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
          spaceBetween={50}
          className=""
          autoplay={{ delay: 3000 }}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          // style={{
          //   "--swiper-pagination-color": "yellow", // Mengatur warna dot pagination menjadi kuning
          // }}
        >
          {" "}
          <div className="">
            {" "}
            <div className="slider-container">
              <div className="">
                <div>
                  {products.map((produk) => (
                    <SwiperSlide>
                      <Card
                        key={produk.id}
                        CardTitle={produk.title}
                        CardImage={produk.image}
                        CardDescription={produk.description}
                        CardDate="12-12-2003"
                      />
                    </SwiperSlide>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Innovation;
