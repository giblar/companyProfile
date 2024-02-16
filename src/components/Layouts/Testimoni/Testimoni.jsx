import React from "react";
import Slider from "react-slick";
import Card from "./fragments/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        {/* Tambahkan lebih banyak slide di sini sesuai kebutuhan */}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
