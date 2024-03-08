import React from 'react'
import { Link } from 'react-router-dom'

function Amc() {
  return (
    <div className='container mb-4'>
      <h1>
        Coming soon Asset Management Company (AMC)
      </h1>
      <Link to="/src/Component/Amc/StockBroker.jsx" className='btn btn-success'
      style={{
        textDecoration:"none"
      }}
      > Bajaj Finserv </Link>
    </div>
  )
}

export default Amc
