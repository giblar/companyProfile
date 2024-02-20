import React from "react";

const Card = () => {
  return (
    <div className="flex justify-center">
      <div className="md:mx-8 mx-10 lg:max-w-[100vh] md:max-w-[100vh] grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 bg-blue-100 rounded-lg">
  <div className="flex justify-center">
  <img src="/image/inovation.jpg" className="aspect-square " alt="" />
  </div>
        <div className="p-5">
          <h1 className="text-xl lg:text-2xl font-semibold">software development</h1>
          <h1 className="text-xl lg:text-2xl font-semibold text-blue-700">
            mobile aplication
          </h1>
          <div className="md:text-md sm:text-sm text-sm lg:text-md overflow-auto">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              dolorum accusantium sed asperiores quo quibusdam, unde facilis
              corporis autem natus perferendis recusandae cumque ullam animi,
              inventore tempora aut voluptate praesentium esse sapiente sint at
              quos. Delectus perspiciatis obcaecati sequi ipsum.
            </p>
          </div>
          <div className="bg-blue-600 w-1/2 text-center mt-5 rounded-md text-white px-5 py-2">
            <p>200 client</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Card;
