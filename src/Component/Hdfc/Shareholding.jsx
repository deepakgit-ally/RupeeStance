import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const Shareholding = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=4Dzz8o5hafun63SzXfEgseImq92Q0rAR');
        
        // Check if response.data has the necessary structure
        if (response.data && response.data.length > 0 && response.data[0].technical_indicator) {
          setStockData(response.data[0].technical_indicator);
        } else {
          console.error('Invalid API response:', response.data);
        }

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="#8884d8" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className='container mt-4'>
      <h3 className='mb-4'>Shareholding</h3>
      <div className='row'>
        <div className='col-md-6'>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className='card'>
              <div className='card-header'>Shareholding pattern</div>
              <div className='card-body'>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart width={400} height={300}>
                    <Pie
                      data={stockData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="percentageHeld"
                    >
                      {stockData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
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
              <div className='card-header'>Shareholding History</div>
              <div className='card-body'>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart width={400} height={300} data={stockData}>
                    <Line type="monotone" dataKey="percentageHeld" stroke="#8884d8" strokeWidth={2} />
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

export default Shareholding;
