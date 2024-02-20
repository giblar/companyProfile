import React from "react";
import Card from "./fragments/Card";

const Visi = () => {
  return (
    <div className="mt-10 lg:h-screen flex flex-col justify-center items-center">
  <h1 className="text-center text-4xl font-bold">
    <span className="text-blue-800">Visi & Misi</span> Casatech
  </h1>

  <div className="grid lg:grid-cols-2 md:grid-cols-1 w-10/12 mx-auto">
    <Card
      cardTitle="visi"
      cardDescription=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae doloremque eligendi beatae aliquam sapiente unde omnis ullam perferendis cum ipsam odio, expedita ea eos, maxime ducimus maiores hic quidem facere quos non sint reiciendis? Ex voluptatem voluptate commodi nam rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam laboriosam in illo tempore quia sed voluptatibus inventore repellendus quos."
    />
    <Card
      cardTitle="misi"
      cardDescription=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae doloremque eligendi beatae aliquam sapiente unde omnis ullam perferendis cum ipsam odio, expedita ea eos, maxime ducimus maiores hic quidem facere quos non sint reiciendis? Ex voluptatem voluptate commodi nam rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam laboriosam in illo tempore quia sed voluptatibus inventore repellendus quos."
    />
  </div>
</div>

  );
};

export default Visi;
