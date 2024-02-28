import { useEffect } from "react";
import Button from "../../Elements/Button_slide/Button_slide";
import CardTestimo from "./fragments/CardTestimo";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="h-screen w-full overflow-x-hidden">
      <img
        className="w-full h-full object-cover"
        src="/image/building.png"
        alt="logo"
      />

      <div className="absolute mt-10 top-10 grid grid-cols-1  items-center md:grid-cols-2">
        <div className=" w-auto flex justify-center">
         
        </div>

        <div className=" w-auto aspect-square text-white mx-10">
          <h1 className="text-4xl mb-10 mt-10 font-bold md:text-4xl  lg:text-6xl">
            <span className="text-blue-950">Deep</span> Understanding,
            Inspirational <span className="text-blue-950">Solutions</span>
          </h1>
          <p className="text-sm mb-10 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            explicabo numquam odit corrupti fugit exercitationem cupiditate,
            nostrum libero! Aliquid, eius.
          </p>
          <a href="/" className="">
            {" "}
            <Button Color="border-white">contact now</Button>
          </a>
          <div className=" grid grid-cols-3 lg:mt-10 mt-[5rem] ">
            <CardTestimo></CardTestimo>
            <CardTestimo
              CardColor="bg-blue-950"
              CardText="text-white"
            ></CardTestimo>
            <CardTestimo></CardTestimo>
          </div>
        </div>
      </div>

      {/* <div className="bg-slate-600 flex top-14">
        <div className="flex flex-col">
          <img src="/image/rounded.jpg" className="w-1/4 mb-4" alt="Rounded" />
          <img src="/image/rounded.jpg" className="w-1/3" alt="Rounded" />
        </div>

        <div className="">
          <h1 className="text-xl md:text-7xl font-bold text-white">
            <span className="text-blue-950">Deep</span> Understanding,
          </h1>
          <h1 className="text-xl md:text-7xl font-bold text-white">
            Inspirational <span className="text-blue-950">Solutions</span>
          </h1>
        </div>
</div> */}
    </div>
  );
};

export default Home;
