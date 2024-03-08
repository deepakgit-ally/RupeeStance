
import React, { useState, useEffect } from 'react';


const Peers = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://financialmodelingprep.com/api/v3/delisted-companies?apikey=4Dzz8o5hafun63SzXfEgseImq92Q0rAR');
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
            <h1 id='Techn_nical'>peers</h1>
            <table className="table table-bordered container">
                <thead>
                    <tr>
                        <th>Peer companies</th>
                        <th>
                        exchange
                        </th>
                        <th>
                        ipoDate
                        </th>
                        <th>
                        delistedDate
                        </th>
                        <th>
                        symbol</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.companyName}</td>
                            <td>{item.exchange}</td>
                            <td>{item.ipoDate}</td>
                            <td>{item.delistedDate}</td>
                            <td>{item.symbol}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};






export default Peers
