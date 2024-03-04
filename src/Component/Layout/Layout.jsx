import React from 'react'

import Footer from '../Footer/Footer'
import Home from '../Content/Home'
import Aboutus from '../Content/Aboutus'
import Navabr from '../Navbar/Navabr'
function Layout() {
  return (
    <div>
  <Navabr/>
      <Home />
      <Aboutus />
      <Footer />
    </div>
  )
}

export default Layout