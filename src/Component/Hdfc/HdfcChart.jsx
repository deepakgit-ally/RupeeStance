import React, { useState, useEffect } from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';

const HdfcChart = () => {
  const [selectedDayChart, setSelectedDayChart] = useState("1D");
  const [data, setData] = useState([]);

  const handleTabClick = (dayChart) => {
    setSelectedDayChart(dayChart);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://financialmodelingprep.com/api/v3/stock/list?apikey=4Dzz8o5hafun63SzXfEgseImq92Q0rAR');
        const result = await response.json();
        setData(result);
        console.log(result)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="DayChart" className="DayChart">
      <div className="container" data-aos="fade-up">
        <div className="d-flex flex-row  mb-3 border border-2 w-25 rounded mt-2 ms-3 p-1 shadow nav-pills">
            <div className="nav nav-pills " id="pills-tab" role="tablist">
          <p href="#ID" id="pills-home-1D" data-toggle="pill"  role="tab" aria-controls="pills-home" className={`p-2 nav-link active  ms-2 ${selectedDayChart === "1D" ? "active show" : ""}`} onClick={() => handleTabClick("1D")}>1D</p>
          <p href="#2D"id="pills-profile-2d" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false" className="p-2 nav-link nav-item" onClick={() => handleTabClick("2D")}>2D</p>
          <p href="#3D"id="pills-profile-3D" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false" className="p-2 nav-link nav-item" onClick={() => handleTabClick("3D")}>3D</p>
          {/* <p href="#4D" id="pills-profile-4D" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false" className="p-2 nav-link nav-item" onClick={() => handleTabClick("4D")}>4D</p> */}
          <p href="#5D" id="pills-profile-5D" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false" className="p-2 nav-link nav-item" onClick={() => handleTabClick("5D")}>5D</p>
          <p href="#MAX" id="pills-profile-MAX" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false" className="p-2 nav-link nav-item" onClick={() => handleTabClick("MAX")}>MAX</p>
        </div>
        </div>
      </div>

      <div id="tab-1" className="1D" style={{ display: selectedDayChart === "1D" ? "block" : "none" }}>
        <AreaChart width={730} height={250} data={data} id='ID'
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="low" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </div>

      <div className="2D" id='2D' style={{ display: selectedDayChart === "2D" ? "block" : "none" }}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
       <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="open" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </div>

      <div className="3D" id='3D' style={{ display: selectedDayChart === "3D" ? "block" : "none" }}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
       <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="date" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="high" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </div>

      <div className="4D" id='4D' style={{ display: selectedDayChart === "4D" ? "block" : "none" }}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
       <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="high" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </div>

      <div className="5D" id='5D' style={{ display: selectedDayChart === "5D" ? "block" : "none" }}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="close" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </div>

      <div className="MAX" id='MAX' style={{ display: selectedDayChart === "MAX" ? "block" : "none" }}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="volume" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </div>

    </section>
  );
};

export default HdfcChart;
