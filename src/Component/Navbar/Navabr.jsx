import React, { useState } from 'react';
import HeroImage from "../../Assets/Images/hero-bg.png"
import RupeeIcon from "../../Assets/Images/SL-020622-4930-02.jpg"
import Logo from "../../Assets/Images/Red with X Band Logo (1).png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './NavbarActions.css';
import './Navabr.css';
function Navabr() {
    const [isMenuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };
  return (
    <div className="hero_area">
    <div className="hero_bg_box">
      <div className="bg_img_box">
        <img src={HeroImage} alt="" />
      </div>
    </div>

    {/* Header Section */}
    <header className="header_section">
      <div className="container-fluid">
      <nav className="navbar container  " style={{
      borderRadius: " 20px 0  20px"
    }}>
      <a class="navbar-brand ms-2 rounded" href="#">
        <img src={Logo} width="70" height="75" alt="" className='rounded' style={{
          marginTop: "-15%",
          background: "transparent",
          borderRadius: "25px 0  25px"
        }} />
      </a>
      <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu} />
      <ul className={isMenuActive ? 'menu active' : 'menu'} style={{
        margin: "10px"
      }}>
        <li><a href="#">Loans</a></li>
        <li><a href="#">Mutual funds</a></li>
        <li><a href="#">Deposits</a></li>
        <li><a href="#">Bullion</a></li>
        <li><a href="#">Stocks</a></li>
        <li><a href="#">FSO</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">Pension Schemes</a></li>
      </ul>
    </nav>
      </div>
    </header>
    {/* End Header Section */}

    {/* Slider Section */}
    <section className="slider_section">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1 className="text-center">   Rupee  Stance  </h1>
                    <h3 className="text-center text-light">Personalized and Professional Financial Services</h3>
                    <p className="lead text-center ">RupeeStance is a financial advisory firm that helps individuals and businesses achieve their financial goals. We offer a range of solutions, such as investment planning, retirement planning, tax planning, estate planning, and risk management. We are independent, experienced, and client-focused, and we provide high-quality advice and guidance to our clients.</p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src={RupeeIcon} alt=""
                   
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      </div>
    </section>
    {/* End Slider Section */}
  </div>
  )
}

export default Navabr