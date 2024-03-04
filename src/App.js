
import React from 'react';
import Layout from './Component/Layout/Layout.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TwoWheelerLoan from './Component/Lons/TwoWheelerLoan';
import CarLoan from './Component/Lons/CarLoan.jsx';
import Education from './Component/Lons/Education.jsx';
import HomeLoan from './Component/Lons/HomeLoan.jsx';
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route excte path='/' element={<Layout />} />
       <Route path='/src/Component/Lons/TwoWheelerLoan.jsx' element={<TwoWheelerLoan/>} />
       <Route path='/src/Component/Lons/CarLoan.jsx' element={<CarLoan/>} />
       <Route path='/src/Component/Lons/Education.jsx' element={<Education/>} />
       <Route path='/src/Component/Lons/HomeLoan.jsx' element={<HomeLoan/>} />
        </Routes>
      </Router>
   
    </>
  );
}

export default App;

