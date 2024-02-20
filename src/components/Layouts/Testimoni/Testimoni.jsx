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
    slidesToShow: 3,
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
    <div className="slider-container  px-10 my-10">
      <h1 className="text-center text-3xl text-blue-900 font-semibold mb-10">
        testimony
      </h1>
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