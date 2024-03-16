import React, { useState, useEffect } from 'react';
import './Calculater.css';
import Navabr from '../Navbar/Navabr';
import Footer from '../Component/Footer/Footer';
const MutualFundCalculator = () => {
    const [investedAmount, setInvestedAmount] = useState(500);
    const [expectedReturnRate, setExpectedReturnRate] = useState(1);
    const [timePeriod, setTimePeriod] = useState(1);
    const [totalValue, setTotalValue] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        calculateTotalValue();
    }, [investedAmount, expectedReturnRate, timePeriod]);

    const handleInvestedAmountChange = (event) => {
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

        const totalProgress = ((investedAmount / 100000) * 100) + ((expectedReturnRate / 10) * 50) + ((timePeriod / 10) * 40);
        setProgress(totalProgress);
    };

    const calculateEstimatedReturns = () => {
        return Math.floor((investedAmount * expectedReturnRate * timePeriod) / 100);
    };
    const getCircleColor = () => {
        // Example conditions, you can modify them as per your requirements
        if (progress > 70) {
            return "#FF0000"; // Red color
        } else if (progress > 40) {
            return "#FFFF00"; // Yellow color
        } else {
            return "#28411B"; // Default color
        }
    };

    return (
        <>
        <Navabr/>
            <div className='container card box-showd mt-4 shadow-lg p-3 mb-5 bg-white rounded d-flex col-md-12'>
                <h2 className='text-center'>Mutual Fund Calculator</h2>
                <div className='col-md-6 ms-auto ' style={{ right: '0'}}>
                    <div className='' >
                        <div className='text-center'>
                            <button type='submit' className='btn btn-primary w-50 h-25 p-2' onClick={calculateTotalValue}>
                                Invest
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-md-6' >
                    <div className='d-flex py-1'>
                        <label htmlFor='invested-amount-input' className='input-group'>
                            Invested Amount:
                        </label>
                        <div className='d-flex '  style={{ backgroundColor:"#EBF9F5"}}>
                            <span className='' style={{ lineHeight: '2' }}>
                                INR
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
                                className='right-0 border-0 '
                                type='text'
                                id='invested-amount-input'
                                value={investedAmount}
                                onChange={handleInvestedAmountChange}
                            />
                        </div>
                    </div>
                    <div className='meter-info'>
                        <input id='meter--ranger' type='range' value={investedAmount} min='0' max='1000000' onChange={handleInvestedAmountChange} />
                    </div>
                    <div className='d-flex py-1'>
                        <label htmlFor='expectedReturnRate' className='input-group'>
                            Expected Return Rate:
                        </label>
                        <div className='d-flex '  style={{ backgroundColor:"#EBF9F5"}}>
                            <input
                                style={{
                                    background: 'transparent',
                                    textAlign: 'right',
                                    flexGrow: '1',
                                    outline: '0px',
                                    opacity: '1',
                                }}
                                className=' right-0 border-0 '
                                type='text'
                                id='expectedReturnRate'
                                value={expectedReturnRate}
                                onChange={handleExpectedReturnRateChange}
                            />
                            <span className='' style={{ lineHeight: '2' }}>
                                %
                            </span>
                        </div>
                    </div>
                    <div className='meter-info'>
                        <input id='meter--ranger' type='range' value={expectedReturnRate} min='0' max='50' onChange={handleExpectedReturnRateChange} />
                    </div>
                    <div className='d-flex py-1'>
                        <label htmlFor='timePeriod' className='input-group'>
                            Time Period:
                        </label>
                        <div className='d-flex '
                        style={{ backgroundColor:"#EBF9F5"}}
                        >
                            <input
                                className=' border-0 '
                                style={{
                                    background: 'transparent',
                                    textAlign: 'right',
                                    flexGrow: '1',
                                    outline: '0px',
                                    opacity: '1',
                                  backgroundColor:"#EBF9F5"
                                }}
                                type='text'
                                id='timePeriod'
                                value={timePeriod}
                                onChange={handleTimePeriodChange}
                            />
                            <span className='' style={{ lineHeight: '2' }}>
                                Year
                            </span>
                        </div>
                    </div>
                    <div className='meter-info'>
                        <input id='meter--ranger' type='range' value={timePeriod} min='0' max='20' onChange={handleTimePeriodChange} />
                    </div>
                    <br />
                    <br />
                    <div className='d-flex py-1'>
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
                            <span className='ms-4 w-100'>INR: {investedAmount}</span>
                        </div>
                    </div>
                    <div className='d-flex py-1'>
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
                            <span className='ms-4 w-100'>INR: {calculateEstimatedReturns()}</span>
                        </div>
                    </div>
                    <div className='d-flex py-1'>
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
                            <span className='ms-4 w-100'>INR: {Math.floor(totalValue)}</span>
                        </div>
                    </div>
                  
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default MutualFundCalculator;
