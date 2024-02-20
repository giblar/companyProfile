import React from "react";
import Card from "./fragments/Card";

const Person = () => {
  return (
    <div className="mt-10 mb-10">
      <div className="w-full">
        <h1 className="text-3xl text-center  font-semibold font-mono">
          This is a <span className="text-blue-800">person</span> who{" "}
          <span className="text-blue-800">works</span> in{" "}
          <span className="text-blue-800">our company</span>
        </h1>
      </div>

      <div className="mx-5 lg:bg-slate-500 md:bg-red-200 sm:bg-lime-500">
        <div className="flex justify-center">
        <div className="grid lg:grid-cols-4 gap-y-10 md:grid-cols-3 sm:grid-cols-2 gap-4">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            
        </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
