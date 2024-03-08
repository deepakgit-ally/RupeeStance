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

const Valuations = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo');
        setStockData(response.data);
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
      <h3 className='mb-4'>Valuation</h3>
      <div className='row'>
        <div className='col-md-6'>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className='card'>
              <div className='card-header'>Low Prices</div>
              <div className='card-body'>
                <ResponsiveContainer width='100%' height={300}>
                  <LineChart
                    width={400}
                    height={300}
                    data={stockData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray='1 0' />
                    <XAxis dataKey='volume' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type='monotone' dataKey='low' stroke='#8884d8' />
                    <Line type='monotone' dataKey='high' stroke='#82ca9d' />
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
              <div className='card-header'>High Prices</div>
              <div className='card-body'>
                <ResponsiveContainer width='100%' height={300}>
                  <LineChart
                    width={400}
                    height={300}
                    data={stockData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray='1 0' />
                    <XAxis dataKey='volume' />
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

export default Valuations;
