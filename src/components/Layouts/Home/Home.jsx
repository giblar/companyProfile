import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../Elements/Button_slide/Button_slide";
import CardTestimo from "./fragments/CardTestimo";
import SceletonT from "./fragments/SceletonT";
import SceletonD from "./fragments/SceletonD";

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
        const response = await axios.get(
          "https://casatech.id/compro-api/company",
          {
            headers: {
              Authorization:
                "Bearer " +
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIDEiLCJpYXQiOjE3MTEzNDEzMTV9.3w_4Ap87iNPpg9OKnCugwCfA7BMAuvTpHfa9HDQasQA",
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen w-full overflow-x-hidden ">
      <img
        className="w-full h-full object-cover"
        src="/image/building.png"
        alt="logo"
      />

      <div className="absolute mt-10 top-10 grid grid-cols-1  items-center md:grid-cols-2">
        <div className=" w-auto flex justify-center"></div>

        <div className=" w-auto aspect-square text-white mx-10">
          <h1 className="text-4xl mb-10 mt-10 font-bold md:text-4xl  lg:text-6xl">
            <span className="text-blue-950">Deep</span> Understanding,
            Inspirational <span className="text-blue-950">Solutions</span>
          </h1>
          {/* ini batas */}

          {data ? (
            <div>
              {Array.isArray(data.data) ? (
                data.data.map((item) => (
                  <div key={item.id}>
                    <p
                      className="text-sm mb-10 md:text-lg"
                      dangerouslySetInnerHTML={{
                        __html: item.description_company,
                      }}
                    ></p>
                  </div>
                ))
              ) : (
                <p>Data is not an array</p>
              )}
            </div>
          ) : (
            // sceleton loading
            <div>
              <SceletonD></SceletonD>
            </div>
          )}

          <a href="/" className="">
            {" "}
            <Button Color="border-white">contact now</Button>
          </a>

          {data ? (
            <div className="">
              {Array.isArray(data.data) ? (
                data.data.map((item) => (
                  <div key={item.id}>
                    <div className=" grid grid-cols-3 lg:mt-10 mt-[5rem] ">
                      <CardTestimo CardType="Clients" CardSum={item.client} />
                      <CardTestimo
                        CardType="Sponsor"
                        CardColor="bg-blue-950"
                        CardText="text-white"
                        CardSum={item.sponsor}
                      />
                      <CardTestimo CardType="Rating" CardSum={item.rating} />
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
            <div className="grid grid-cols-3 lg:mt-10 mt-[5rem]">
              <SceletonT />
              <SceletonT />
              <SceletonT />
            </div>
          )}

          {/* trest */}
        </div>
      </div>
    </div>
  );
};

export default Home;
