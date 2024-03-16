import React, { useState, useEffect } from 'react';
import './Calculater.css';

const MutualFundCalculator = () => {
    const [investedAmount, setInvestedAmount] = useState(500);
    const [expectedReturnRate, setExpectedReturnRate] = useState(1);
    const [timePeriod, setTimePeriod] = useState(1);
    const [progress, setProgress] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        const newProgress = (investedAmount / 100000) * 100;
        setProgress(newProgress);
    }, [investedAmount]);

    useEffect(() => {
        calculateTotalValue();
    }, [investedAmount, expectedReturnRate, timePeriod]);

    const handleInvestmentAmountChange = (event) => {
        setInvestedAmount(event.target.value);
    };
    const handleExpectedReturnRateChange = (event) => {
        setExpectedReturnRate(event.target.value);
    };
    const handleTimePeriodChange = (event) => {
        setTimePeriod(event.target.value);
    };

    const calculateTotalValue = () => {
        const calculatedTotalValue = investedAmount * (1 + expectedReturnRate / 100) ** timePeriod;
        setTotalValue(calculatedTotalValue);
       
    };

    const calculateEstimatedReturns = () => {
        return Math.floor((investedAmount * expectedReturnRate * timePeriod) / 100);
    };

    // Function to determine circle color based on conditions
    const getCircleColor = () => {
        // Example conditions, you can modify them as per your requirements
        if (investedAmount > 1000 && expectedReturnRate > 5) {
            return "#FF0000"; // Red color
        } else {
            return "#28411B"; // Default color
        }
    };

    return (
        <>
            <div className='container card box-showd mt-4 shadow-lg p-3 mb-5 bg-white rounded d-flex col-md-12'>
                <h2 className='text-center'>Mutual Fund Calculator</h2>
                <div className='col-md-6 ms-auto' style={{ right: '0' }}>
                    <div id='progress-bar--container'>
                        <svg viewBox='0 0 100 100'>
                            <circle stroke='#EAEAEA' strokeWidth='5.5' cx='50' cy='50' r='30' fill='none' />
                            <circle id='progress--circle' stroke={getCircleColor()} strokeWidth='5.5' cx='50' cy='50' r='30' fill='none' pathLength='100' />
                            <text id='progress--text' x='50' y='48' textAnchor='middle' dominantBaseline='middle'>
                              
                            </text>
                            <text id='progress--text' className='progress--text--second' x='50' y='55' textAnchor='middle' dominantBaseline='middle'></text>
                        </svg>
                    </div>
                </div>
                <div className='col-md-6' style={{ marginTop: '-400px' }}>
                    <div className='d-flex py-3'>
                        <label htmlFor='invested-amount-input' className='input-group'>
                            Invested Amount:
                        </label>
                        <div className='d-flex bg-info'>
                            <span className='text-white' style={{ lineHeight: '2' }}>
                                ₹
                            </span>
                            <input
                                style={{
                                    background: 'transparent',
                                    textAlign: 'right',
                                    flexGrow: '1',
                                    outline: '0px',
                                    opacity: '1',
                                    border: 'none',
                                    lineHeight: '1',
                                }}
                                className='right-0 border-0 my-1 text-white'
                                type='text'
                                id='invested-amount-input'
                                value={investedAmount}
                                onChange={handleInvestmentAmountChange}
                            />
                        </div>
                    </div>
                    <div className='meter-info'>
                        <input id='meter--ranger' type='range' value={progress} min='0' max='100' onChange={handleInvestmentAmountChange} />
                    </div>
                    <div className='d-flex py-3'>
                        <label htmlFor='expectedReturnRate' className='input-group'>
                            Expected Return Rate:
                        </label>
                        <div className='d-flex bg-info'>
                            <input
                                style={{
                                    background: 'transparent',
                                    textAlign: 'right',
                                    flexGrow: '1',
                                    outline: '0px',
                                    opacity: '1',
                                }}
                                className='bg-info right-0 border-0 my-1 text-white'
                                type='text'
                                id='expectedReturnRate'
                                value={expectedReturnRate}
                                onChange={handleExpectedReturnRateChange}
                            />
                            <span className='text-white' style={{ lineHeight: '2' }}>
                                %
                            </span>
                        </div>
                    </div>
                    <div className='meter-info'>
                        <input id='meter--ranger' type='range' value={progress} min='0' max='100' onChange={handleExpectedReturnRateChange} />
                    </div>
                    <div className='d-flex py-3'>
                        <label htmlFor='timePeriod' className='input-group'>
                            Time Period:
                        </label>
                        <div className='d-flex bg-info'>
                            <input
                                className='bg-info border-0 my-1 text-white'
                                style={{
                                    background: 'transparent',
                                    textAlign: 'right',
                                    flexGrow: '1',
                                    outline: '0px',
                                    opacity: '1',
                                }}
                                type='text'
                                id='timePeriod'
                                value={timePeriod}
                                onChange={handleTimePeriodChange}
                            />
                            <span className='text-white' style={{ lineHeight: '2' }}>
                                Yr
                            </span>
                        </div>
                    </div>
                    <div className='meter-info'>
                        <input id='meter--ranger' type='range' value={progress} min='0' max='100' onChange={handleTimePeriodChange} />
                    </div>
                    <br />
                    <br />
                    <div className='d-flex py-3'>
                        <h3>Invested Amount:</h3>
                        <div
                            className='d-flex gap-4'
                            style={{
                                background: 'transparent',
                                textAlign: 'right',
                                flexGrow: '1',
                                outline: '0px',
                                opacity: '1',
                            }}>
                            <span className='ms-4 w-100'>₹{investedAmount}</span>
                        </div>
                    </div>
                    <div className='d-flex py-3'>
                        <h3>Estimated Returns:</h3>
                        <div
                            className='d-flex'
                            style={{
                                background: 'transparent',
                                textAlign: 'right',
                                flexGrow: '1',
                                outline: '0px',
                                opacity: '1',
                            }}>
                            <span className='ms-4 w-100'>₹{calculateEstimatedReturns()}</span>
                        </div>
                    </div>
                    <div className='d-flex py-3'>
                        <h3>Total Value:</h3>
                        <div
                            className='d-flex'
                            style={{
                                background: 'transparent',
                                textAlign: 'right',
                                flexGrow: '1',
                                outline: '0px',
                                opacity: '1',
                            }}>
                            <span className='ms-4 w-100'>₹{Math.floor(totalValue)}</span>
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-center'>
                            <button type='submit' className='btn btn-primary w-100 h-25 p-2' onClick={calculateTotalValue}>
                                Invest
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MutualFundCalculator;
