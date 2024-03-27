import Aos from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";
import Card from "./fragments/Card";
import axios from "axios";

const Visi = () => {
  const [visi, setVisi] = useState("");
  const [misi, setMisi] = useState("");
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIDEiLCJpYXQiOjE3MTEzNDEzMTV9.3w_4Ap87iNPpg9OKnCugwCfA7BMAuvTpHfa9HDQasQA';

  useEffect(() => {
    fetchData();
    Aos.init();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://casatech.id/compro-api/company', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setVisi(response.data.visi);
      setMisi(response.data.misi);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="mt-10 lg:h-screen flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl font-bold" data-aos="fade-down" data-aos-duration="1000">
        <span className="text-blue-800">Visi & Misi</span> Casatech
      </h1>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 w-10/12 mx-auto mt-10">
        <Card
          cardTitle="Visi"
          cardDescription={visi}
          animation="fade-right"
          duration="900"
        />
        <Card
          cardTitle="Misi"
          cardDescription={misi}
          animation="fade-left"
          duration="900"
        />
      </div>
    </div>
  );
};

export default Visi;
