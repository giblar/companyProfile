import React from "react";
import Card from "./fragments/Card";

const Portfolio = () => {



  return (
    <div className="bg-cover bg-center bg-no-repeat relative pb-10" style={{backgroundImage: "linear-gradient(to left, rgba(95, 145, 255, 0.7), rgba(0, 0, 139, 0.9)), url('/image/building.png')"}}>
      <div className=" pt-10 pb-10 lg:pl-10">
        <div className="mx-10">
          <h1 className="text-3xl font-bold text-white mb-10">Portfolio</h1>
          <a href="/portfolio" className="bg-white rounded-md font-semibold text-blue-900 px-4 py-2 fol absolute top-10 right-10 transition duration-300 ease-in-out hover:bg-gray-300 hover:text-white">See More</a>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-12 md:grid-cols-1 gap-3 justify-center items-center" >
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
