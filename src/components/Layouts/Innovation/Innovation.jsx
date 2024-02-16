import React from "react";
import Card from "./fragments/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Innovation = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="lg:h-screen flex flex-col justify-center items-center relative md:px-10 px-2">
      <h1 className="text-center lg:text-right lg:mt-8 text-blue-900 text-3xl font-bold mt-8">
        Our Innovation
      </h1>

      <div className="flex justify-center">
        <Slider {...settings}>
          <div>
            <Card
              CardImage="inovation.jpg"
              CardTitle="Mobile App"
              CardDescription="Lorem ipsum dolor sit amet consectetur adipisi cingelit.Excepturi provident, cum ratione itaque doloribus blanditiis obcaecati saepe molestias debitis dolor dicta earum? Praesentium aliquid aperiam non animi, quam fuga consequatur."
              CardDate="20-01-2023"
            />
         
          </div>
         
        </Slider>
      </div>
    </div>
  );
};

export default Innovation;
