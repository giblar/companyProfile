import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadAnim from '../../../LoadAnim';

const Letter = () => {
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

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  return (
    <div className=''>
     {data ? (
        <div>
          {Array.isArray(data.data) ? (
            data.data.map(item => (
              <div key={item.id}>
                 <div dangerouslySetInnerHTML={{ __html: item.description_about }}></div>
                <p>{formatDate(item.created_at)}</p>
               
              </div>
            ))
          ) : (
            <p>Data is not an array</p>
          )}
        </div>
      ) : (
       <LoadAnim></LoadAnim>
      )}

      
   
    </div>
  );
}

export default Letter;
