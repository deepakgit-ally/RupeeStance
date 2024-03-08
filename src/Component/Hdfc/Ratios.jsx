import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Ratios = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=4Dzz8o5hafun63SzXfEgseImq92Q0rAR');
        setStockData(response.data.historical);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container mt-4'>
      <h3 className='mb-4'>Ratio</h3>
      <div className='row'>
        <div className='col-md-6'>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className='card'>
              <div className='card-header'>Debt/Equity</div>
              <div className='card-body'>
              <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={stockData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="adjClose" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="change" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
        <div className='col-md-6'>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className='card'>
              <div className='card-header'> ROE vs ROCE</div>
              <div className='card-body'>
                <ResponsiveContainer width='100%' height={300}>
                  <LineChart
                    width={400}
                    height={300}
                    data={stockData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray='1 0' />
                    <XAxis dataKey='date' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type='monotone' dataKey='high' stroke='#8884d8' />
                    <Line type='monotone' dataKey='low' stroke='#82ca9d' />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ratios;
