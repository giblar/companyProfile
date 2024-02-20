import React from 'react'
import Card from './fragments/Card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return (
        <div
          style={{
            width: "30px",
            height: "4px",
            background: "#ddd",
            borderRadius: "5px",
          }}
        />
      );
    },
    appendDots: (dots) => (
      <div style={{ marginBottom: "-20px" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    dotsClass: "slick-dots slick-thumb",
  };
  return (
    <div>
      <h2 className='mt-5 mx-5 lg:text-4xl text-2xl text-center font-semibold '>this is an <span className='text-blue-800'>aplication</span> we have made <span className='text-blue-800'>for</span> a <span className='text-blue-800'>client</span></h2> 
      <div className='my-10'>
      <Slider {...settings}>
       
          <div>
             <Card/>
          </div>
   
  
      </Slider>
      </div>
    </div>
  )
}

export default index
