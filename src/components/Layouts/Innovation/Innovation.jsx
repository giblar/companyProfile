import Card from "./fragments/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { EffectFade } from "swiper/modules";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Innovation = () => {
 const [innovation, setInnovation] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIDEiLCJpYXQiOjE3MTEzNDEzMTV9.3w_4Ap87iNPpg9OKnCugwCfA7BMAuvTpHfa9HDQasQA');

  useEffect(()=>{
    const fetchInnovation = async () => {
      try {
        const response = await axios.get("https://casatech.id/compro-api/innovation", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setInnovation(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
      };
      fetchInnovation();

    }, [token]);
 
  
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
         
        >
          {" "}
          <div className="">
            {" "}
            <div className="slider-container">
              <div className="">
                <div>
                  {loading ? (
                    <p>Loading...</p>
                  ) : error ? (
                    <p>Error: {error.message}</p>
                  ) : innovation.length > 0 ? (
                    innovation.map((innovation, index) => (
                      <SwiperSlide>
                      <Card
                        key={index}
                        CardTitle={innovation.tittle}
                        CardImage="/image/innovation.jpg"
                        CardDescription={innovation.description}
                        CardDate="12-12-2003"
                      />
                    </SwiperSlide>
                    ))
                  ) : (
                    <p>No data available</p>
                  )}
                
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
