import React from "react";
import Card from "./fragments/Card";

const Person = () => {
  return (
    <div className="mt-[10rem] mb-[10rem]">
      <div className="w-full">
        <h1 className="text-3xl text-center mb-10 font-semibold font-mono">
          This is a <span className="text-blue-800">person</span> who{" "}
          <span className="text-blue-800">works</span> in{" "}
          <span className="text-blue-800">our company</span>
        </h1>
      </div>

      <div className="mx-5 ">
        <div className="flex justify-center">
        <div className="grid lg:grid-cols-4 gap-y-[6rem] gap-x-[5rem] md:grid-cols-3 sm:grid-cols-2 gap-4">
            <Card 
            CardImage="person.png"
            CardName="alfar"
            CardPosition="backend developer"
            />
          
            
            
        </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
