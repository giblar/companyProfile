import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
const Card = () => {
  
  return (
    <div className="p-4 max-w-xs my-10 text-white lg:mx-auto md:mx-auto sm:mx-auto"> {/* Tambahkan kelas mx-auto */}
    <div className="aspect-square">
      <div className="flex items-center justify-center bg-white rounded-full w-max h-max p-10">
        <FontAwesomeIcon icon={faWallet} className="text-blue-900 text-3xl md:text-7xl" />
      </div>
      <h2 className="lg:text-2xl font-semibold mb-2">Lorem Ipsum</h2>
      <p className="mt-2 text-sm md:text-sm font-thin">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nisi.
        Nihil omnis consequatur, quas nam labore et quasi. Blanditiis, sed.
      </p>
    </div>
  </div>
  
  );
};

export default Card;
