
import React, { useState, useEffect } from 'react';


const Technicals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://financialmodelingprep.com/api/v3/technical_indicator/5min/AAPL?type=sma&period=10&apikey=4Dzz8o5hafun63SzXfEgseImq92Q0rAR');
        const result = await response.json();
        setData(result.slice(0, 8)); 
         console.log(result)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      <h1 id='Techn_nical'>Technical</h1>
      <table className="table table-bordered container">
        <thead>
          <tr>
            <th>Date</th>
            <th>Open</th>
            <th>low</th>
           <th>volume</th>
        
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.open}</td>
              <td>{item.low}</td>
              <td>{item.volume}</td>
         
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};




export default Technicals