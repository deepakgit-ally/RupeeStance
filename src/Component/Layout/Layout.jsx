import React from 'react'
import NavbarActions from '../Navbar/NavbarActions'
import Footer from '../Footer/Footer'
import Home from '../Content/Home'
import Aboutus from '../Content/Aboutus'
function Layout() {
  return (
    <div>
        <NavbarActions/>
        <Home/>
        <Aboutus/>
        <Footer/>
    </div>
  )
}

export default Layout