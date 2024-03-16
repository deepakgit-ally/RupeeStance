import React from 'react'
import Footer from '../Footer/Footer'
import Navabr from '../../Navbar/Navabr.jsx'
import Landing from '../Content/RuppePage.jsx'
import ServicesSection from '../Content/Servicespage.jsx'

function Layout() {
  return (
    <div>
  <Navabr/>
  <Landing />
  <ServicesSection/>
 
      <Footer />
    </div>
  )
}

export default Layout