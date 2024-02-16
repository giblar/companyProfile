import React from "react";
import Card from "./fragments/Card";

const Solutions = () => {
  return (
    <>
      <div className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(to left, rgba(95, 145, 255, 0.7), rgba(0, 0, 139, 0.9)), url('/image/building.png')"}}>
      <div className=" pt-10 pb-10 lg:pl-10">
        <div className="mx-10">
          <h1 className="text-3xl font-bold text-white mb-10">Portfolio</h1>
          <div className="grid lg:grid-cols-3 gap-y-12 md:grid-cols-1 gap-3 justify-center items-center">

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
    </>
  );
};

export default Solutions;
