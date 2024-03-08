import React, { useState, useEffect } from 'react';

const Fundamentals = () => {
  const [earningsData, setEarningsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://financialmodelingprep.com/api/v3/technical_indicator/5min/AAPL?type=adx&period=10&apikey=ep0RD4RRJI7XDUG6YQVkewPuKuEwAWYI'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setEarningsData(data.slice(0, 5));
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
    {earningsData && (
      <div>
        <h2>Fundamentals</h2>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Symbol</th>
             <th>volume</th>
            </tr>
          </thead>
          <tbody>
            {earningsData.map((earnings, index) => (
              <tr key={index}>
                <td>{earnings.date}</td>
                <td>{earnings.adx}</td>
                <td>{earnings.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
  );
};




export default Fundamentals