import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Card = (props) => {
 

  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className="card aspect-square max-w-xs max-h-xs relative" data-aos="flip-up">
    <img
      src="/image/inovation.jpg"
      alt=""
      className="object-cover w-full h-full"
    />
    <div className="z-10 bg-white mx-4 absolute bottom-[-10%] left-0 right-0 p-4 flex flex-col justify-center items-center font-mono font-semibold text-blue-900">
      <h1 className="text-center mb-2">Software Development</h1>
      <h1 className="text-center">Mobile Development</h1>
    </div>
  </div>
  )
}

export default Card
