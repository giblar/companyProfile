import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Giblar = () => {
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
    <div>
      {data ? (
        <div>
          {Array.isArray(data.data) ? (
            data.data.map(item => (
              <div key={item.id}>
                <p>Client: {item.client}</p>
                <p>Sponsor: {item.sponsor}</p>
                <p>Rating: {item.rating}</p>
              </div>
            ))
          ) : (
            <p>Data is not an array</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Giblar;
