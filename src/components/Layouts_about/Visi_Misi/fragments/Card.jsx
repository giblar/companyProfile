import Aos from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";

const Card = (props) => {
  useEffect(()=>{
    Aos.init();
  },[])
    const {cardTitle, cardDescription, animation, duration} = props;
  return (
    <div className='w-full lg:w-2/3 mx-auto bg-blue-100 rounded-md my-4' data-aos={animation} data-aos-duration={duration}>
      <p className='p-5 text-md text-center italic'>{cardDescription}</p>
      <div className='w-full h-10 bg-blue-700 rounded-sm text-white'>
        <h1 className='text-center text-2xl'>{cardTitle}</h1>
      </div>
    </div>
  )
}

export default Card
