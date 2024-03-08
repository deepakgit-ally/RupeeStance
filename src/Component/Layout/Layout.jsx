import React from 'react'

import Footer from '../Footer/Footer'

import Aboutus from '../Content/Aboutus'
import Navabr from '../Navbar/Navabr'
import Landing from '../Content/RuppePage.jsx'
import ServicesSection from '../Content/Servicespage.jsx'
import Amc from '../Amc/Amc.jsx'
function Layout() {
  return (
    <div>

  <Navabr/>
  <Landing/>
  <ServicesSection/>
 
      <Aboutus />
      <Amc/>
      <Footer />
    </div>
  )
}

export default Layout