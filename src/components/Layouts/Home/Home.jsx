import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from "../../Elements/Button_slide/Button_slide";
import CardTestimo from "./fragments/CardTestimo";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://casatech.id/compro-api/company', {
          headers: {
            Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIDEiLCJpYXQiOjE3MTEzNDEzMTV9.3w_4Ap87iNPpg9OKnCugwCfA7BMAuvTpHfa9HDQasQA'
          }
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
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
          {/* tresf */}
          
          {data ? (
        <div>
        
      
          {Array.isArray(data.data) ? (
            data.data.map(item => (
              <div key={item.id}>
                <div className=" grid grid-cols-3 lg:mt-10 mt-[5rem] ">
                 <CardTestimo
            CardType="Clients"
            CardSum={item.client}
            />
            <CardTestimo
              CardType="Sponsor"
              CardColor="bg-blue-950"
              CardText="text-white"
              CardSum={item.sponsor}
            />
           <CardTestimo
            CardType="Rating"
            CardSum={item.rating}
            />
              <img src={item.image_about} alt="" />
              </div>
              </div>
            ))
          ) : (
            <p>Data is not an array</p>
          )}
        </div>
      ) : (
        // ini adalah skeleton loading
        <div className='grid grid-cols-3 lg:mt-10 mt-[5rem]'>
          <div className={`w-20 lg:w-[10rem] md:w-15 aspect-square bg-slate-300 text-center p-2 rounded-br-xl  rounded-tl-xl flex flex-col justify-center`}>
        <p className="text-xs md:text-sm "><p className='bg-white w-1/2 mx-auto'>Up To</p></p>
        <h1 className="text-lg md:text-2xl font-bold  mt-1"><p className='bg-white w-1/2 mx-auto'>....</p></h1>
        <p className="text-xs md:text-sm">fdsaf</p>
      </div>
        
        </div>
      )}
           
          
          {/* trest */}
        </div>
      </div>

     
    </div>
  );
};

export default Home;
