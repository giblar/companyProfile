import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./fragments/Card";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIDEiLCJpYXQiOjE3MTEzNDEzMTV9.3w_4Ap87iNPpg9OKnCugwCfA7BMAuvTpHfa9HDQasQA');

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get("https://casatech.id/compro-api/portfolio", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setPortfolio(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchPortfolio();
  }, [token]);

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat relative pb-10" style={{backgroundImage: "linear-gradient(to left, rgba(95, 145, 255, 0.7), rgba(0, 0, 139, 0.9)), url('/image/building.png')"}}>
      <div className="pt-10 pb-10 lg:pl-10">
        <div className="mx-10">
          <h1 className="text-3xl font-bold text-white mb-10">Portfolio</h1>
          <a href="/portfolio" className="bg-white rounded-md font-semibold text-blue-900 px-4 py-2 absolute top-10 right-10 transition duration-300 ease-in-out hover:bg-gray-300 hover:text-white">See More</a>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-12 gap-3 justify-center items-center">
            {loading ? (
              // batas
              <div className="card aspect-square max-w-xs max-h-xs relative" >
             <div className="h-full w-full bg-gray-300 animate-pulse">

             </div>
              <div className="z-10 bg-gray-300 shadow-2xl  mx-4 absolute bottom-[-10%] left-0 right-0 p-4 flex flex-col justify-center items-center font-mono font-semibold text-gray-400">
                <h1 className="text-center mb-2 bg-gray-400 animate-pulse rounded-md">...........</h1>
                <h1 className="text-center rounded-md bg-gray-400 animate-pulse" >................</h1>
                
              </div>
            </div>
              // batas
            ) : error ? (
              <p>Error: {error.message}</p>
            ) : portfolio.length > 0 ? (
              portfolio.map((item, index) => (
                <Card
                  key={index}
                  CardTitle={item.title}
                  CardImage={item.image}
                  CardDescription={item.software_name}
                  // truncateString(item.description, 50)
                  />
              ))
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
