import React, { useEffect, useState } from 'react';
// import { Line, LineChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const HdfcHeading = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://financialmodelingprep.com/api/v3/historical-chart/5min/AAPL?from=2023-08-10&to=2023-09-10&apikey=ep0RD4RRJI7XDUG6YQVkewPuKuEwAWYI');
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log(data); // You can use the data as needed
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchData();
      }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://financialmodelingprep.com/api/v3/stock/list?apikey=sK67VwO6qEHignNOAB51WZpRY0T2dprZ');
                const result = await response.json();

                // Check if the result contains data
                if (result && result.length > 0) {
                    // Filter data based on a condition, for example, if symbol is 'HDFCBANK.BO'
                    const filteredData = result.filter(stock => stock.symbol === 'HDFCBANK.BO');

                    // Get only the first item from the filtered array
                    const firstItem = filteredData[0];

                    // Check if there's data after filtering
                    if (firstItem) {
                        console.log("Filtered item:", firstItem);
                        setData(firstItem); // Set the first filtered item in the state
                    } else {
                        setError("No data available for the specified condition");
                    }
                } else {
                    setError("No data available");
                }
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    // Check if data is still being fetched
    if (!data && !error) {
        return <div>Loading...</div>;
    }
    return (
        <div className="container mt-5" id='#'>
            <p>Overview</p>
            <div className="flexBox VD04m" style={{
                boxSizing: 'border-box',
                WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'baseline',
                gap: '7px'
            }}>
                <h1 className="fs-22 fw-600 nOsiS" style={{
                    boxSizing: 'border-box',
                    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    letterSpacing: '0px',
                    margin: '0px',
                    fontWeight: 600,
                    fontSize: '22px',
                    lineHeight: '14px',
                    color: 'var(--color-primary-text)',
                    fontFamily: 'Inter'
                }}>
                    {data.name}
                </h1>
                <br />
                <p className="fs-12 textMediumGray" style={{
                    boxSizing: 'border-box',
                    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    letterSpacing: '0.1px',
                    margin: '0px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    fontSize: '12px !important',
                    color: 'var(--text-medium-gray)',
                    fontFamily: 'Inter'
                }}>
                    (   {data.symbol})
                </p>
            </div>
            <p className='fs-1 '>  {data.price}</p>
            <div class="row">
                <div class="col">
                    <div class="column-stack alignCenter">
                        <div class="fs-11">Today's low</div>
                        <div class="fw-600 fs-14">₹500.50</div>
                    </div>
                </div>
                <div className="col " style={{ marginLeft: "-38%" }} >
                    <div className='position-relative'>
                        <hr style={{ border: "1px solid blue", marginTop: "5%", fontWeight: "bolder", borderRadius: "" }} />
                    </div>

                </div>
          
                <div className="col">
                    <div className="column-stack alignCenter">
                        <div className="fs-11 EGLHr">Today's high</div>
                        <div className="fw-600 fs-14">4534.4</div>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col">
                    <div class="column-stack alignCenter">
                        <div class="fs-11">45'sweek low</div>
                        <div class="fw-600 fs-14">₹5000.50</div>
                    </div>
                </div>
                <div className="col " style={{ marginLeft: "-38%" }} >
                    <div className='position-relative'>
                        <hr style={{ border: "1px solid blue", marginTop: "5%", fontWeight: "bolder", borderRadius: "" }} />
                    </div>

                </div>
                <div className="col">
                    <div className="column-stack alignCenter">
                        <div className="fs-11 EGLHr">67's week high</div>
                        <div className="fw-600 fs-14">₹6000.55</div>
                    </div>
                </div>
            </div>

            <div class=" mt-5 border border-3 container rounded ms-2" style={{ width: "65%", marginLeft: "-3%", }} >
                <div class="row align-items-start mt-3">
                    <div class="col">
                        <p>open</p>
                        <p> <span>&#8377;</span>400</p>
                    </div>
                    <div class="col ml-4">
                        <p>Prev Close</p>
                        <p> <span>&#8377;</span>500</p>
                    </div>
                    <div class="col">
                        <p>Volume (shares)</p>
                        <hr style={{ border: "1px dotted primary", width: "50%", marginTop: "-5%" }} />
                        <p style={{ marginTop: "-5%" }}>265,746</p>
                    </div>
                    <div class="col">
                        <p>Total Trading Value</p>
                        <hr style={{ border: "1px dotted primary", width: "50%", marginTop: "-5%" }} />
                        <p style={{ marginTop: "-5%" }}>30.cr</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HdfcHeading
