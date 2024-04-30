import React, { useState, useEffect } from "react";
import Card from "./fragments/Card";
import axios from "axios";
const Person = () => {

  const [person, setPerson] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIDEiLCJpYXQiOjE3MTEzNDEzMTV9.3w_4Ap87iNPpg9OKnCugwCfA7BMAuvTpHfa9HDQasQA');

  useEffect(()=>{
    const fetchPerson = async () => {
      try {
        const response = await axios.get("https://casatech.id/compro-api/team", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setPerson(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
      };
      fetchPerson();

    }, [token]); 

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
          {loading ? (
            <p>Loading...</p>
          ): error ? (
            <p>{error.message}</p>
          ): person.length > 0 ? (
            person.map((person, index) => (
              <Card 
              key={index}
            CardImage={person.image}
            CardName={person.name}
            CardPosition={person.position}
            />
            ))
          ): (
            <p>no data</p>
          )
          }
            
          
            
            
        </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
