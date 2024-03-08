import React from 'react';
import HdfcHeading from './HdfcHeading';
import Technicals from './Technicals';
import Valuations from './Valuations';
import Fundamentals from './Fundamentals';
import Ratios from './Ratios';
import Shareholding from './Shareholding';
import Peers from './Peers';
import Navabr from '../Navbar/Navabr';
import Footer from '../Footer/Footer';
function HdfcNavbar() {
  return (
    <>
    <Navabr/>
      <nav id="navbar-example2" className="navbar navbar-light bg-light px-3 fixed-top container" 
       style={{
        marginTop:"90px"
       }}
      >
        <ul className="nav nav-pills">
          <li className="nav-item ">
            <a className="nav-link " href="#Overview">
              Overview
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Technicals">
              Technicals
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Valuations">
              Valuations
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Fundamentals">
              Fundamentals
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Ratios">
              Ratios
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Shareholding">
              Shareholding
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Peers">
              Peers
            </a>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        className="scrollspy-example mt-5 container"
      >
        <section id="Overview">
          <HdfcHeading />
        </section>
        <section id="Technicals">
          <Technicals />
        </section>
        <section id="Valuations">
          <Valuations />
        </section>
        <section id="Fundamentals">
          <Fundamentals />
        </section>
        <section id="Ratios">
          <Ratios />
        </section>
        <section id="Shareholding">
          <Shareholding />
        </section>
        <section id="Peers">
          <Peers />
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default HdfcNavbar;
