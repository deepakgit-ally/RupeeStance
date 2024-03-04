import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './NavbarActions.css';
import { Dropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../../Assets/Images/Red with X Band Logo (1).png"

const NavbarActions = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

  return (
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
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" variant="success" >
            Loans
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/src/Component/Lons/TwoWheelerLoan.jsx'> 2-Wheeler Loan</Dropdown.Item>
            <Dropdown.Item as={Link} to='/src/Component/Lons/CarLoan.jsx'>Car loan</Dropdown.Item>
            <Dropdown.Item as={Link} to='/src/Component/Lons/Education.jsx'>Education Loan</Dropdown.Item>
            <Dropdown.Item as={Link} to='/src/Component/Lons/HomeLoan.jsx'>Home Loan</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <li><a href="#">Mutual funds</a></li>
        <li><a href="#">Deposits</a></li>
        <li><a href="#">Bullion</a></li>
        <li><a href="#">Stocks</a></li>
        <li><a href="#">FSO</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">Pension Schemes</a></li>
      </ul>
    </nav>
  );
};

export default NavbarActions;
