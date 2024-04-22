import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from './fragments/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const Consul = () => {

  const [consul, setConsul] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIDEiLCJpYXQiOjE3MTEzNDEzMTV9.3w_4Ap87iNPpg9OKnCugwCfA7BMAuvTpHfa9HDQasQA');

  useEffect(()=>{
    const fetchConsul = async () => {
      try {
        const response = await axios.get("https://casatech.id/compro-api/service", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setConsul(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
      };
      fetchConsul();

    }, [token]);
 
  

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

{loading ? (
                    <p>Loading...</p>
                  ) : error ? (
                    <p>Error: {error.message}</p>
                  ) : consul.length > 0 ? (
                    consul.map((consul, index) => (
                      <SwiperSlide>
                      <Card
                      key={index}
                      title={consul.tittle}
                      description={consul.description}
                      />
                     </SwiperSlide>
                    ))
                  ) : (
                    <p>No data available</p>
                  )}
  
  
  
  </Swiper>
        
      </div>
    </div>
  );
};

export default Consul;
