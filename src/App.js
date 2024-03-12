
import React from 'react';
import Layout from './Component/Layout/Layout.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TwoWheelerLoan from './Lons/TwoWheelerLoan.jsx';
import CarLoan from './Lons/CarLoan.jsx';
import Education from './Lons/Education.jsx';
import HomeLoan from './Lons/HomeLoan.jsx';


import Aboutus from './Component/Content/Contactus.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route excte path='/' element={<Layout />} />
       <Route path='Loans/two-WheelerLoan' element={<TwoWheelerLoan/>} />
       <Route path='Loans/car-Loan' element={<CarLoan/>} />
       <Route path='Loans/education-Loan' element={<Education/>} />
       <Route path='Loans/home-Loan' element={<HomeLoan/>} />
       <Route path='contactus' element={<Aboutus/>} />
        </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;

