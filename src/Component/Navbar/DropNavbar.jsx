import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const AppNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownHover = () => {
    setShowDropdown(true);
  };

  const handleDropdownLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div className="col-12 col-md-10 col-lg-9 pr-md-0">
      <Navbar expand="md" className="btco-hover-menu py-lg-2">
        <Navbar.Brand href="index.html">
          <img src="assets/custom/images/fables-logo.png" alt="Fables Template" className="fables-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="fablesNavDropdown" aria-label="Toggle navigation">
          <span className="fables-iconmenu-icon text-white font-16"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="fablesNavDropdown">
          <Nav className="mx-auto fables-nav">
            <NavDropdown
              title="Loans"
              id="sub-nav1"
              show={showDropdown}
              onMouseOver={handleDropdownHover}
              onMouseLeave={handleDropdownLeave}
            >
              <NavDropdown.Item href="home1.html">Home 1</NavDropdown.Item>
              <NavDropdown.Item href="home2.html">Home 2</NavDropdown.Item>
              <NavDropdown.Item href="home3.html">Home 3</NavDropdown.Item>
              <NavDropdown.Item href="home4.html">Home 4</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Mutual funds"
              id="sub-nav2"
              show={showDropdown}
              onMouseOver={handleDropdownHover}
              onMouseLeave={handleDropdownLeave}
            >
              <NavDropdown.Item href="home1.html">Home 1</NavDropdown.Item>
              <NavDropdown.Item href="home2.html">Home 2</NavDropdown.Item>
              <NavDropdown.Item href="home3.html">Home 3</NavDropdown.Item>
              <NavDropdown.Item href="home4.html">Home 4</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Deposits"
              id="sub-nav3"
              show={showDropdown}
              onMouseOver={handleDropdownHover}
              onMouseLeave={handleDropdownLeave}
            >
              <NavDropdown.Item href="home1.html">Home 1</NavDropdown.Item>
              <NavDropdown.Item href="home2.html">Home 2</NavDropdown.Item>
              <NavDropdown.Item href="home3.html">Home 3</NavDropdown.Item>
              <NavDropdown.Item href="home4.html">Home 4</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Bullion"
              id="sub-nav4"
              show={showDropdown}
              onMouseOver={handleDropdownHover}
              onMouseLeave={handleDropdownLeave}
            >
              <NavDropdown.Item href="home1.html">Home 1</NavDropdown.Item>
              <NavDropdown.Item href="home2.html">Home 2</NavDropdown.Item>
              <NavDropdown.Item href="home3.html">Home 3</NavDropdown.Item>
              <NavDropdown.Item href="home4.html">Home 4</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Stocks"
              id="sub-nav5"
              show={showDropdown}
              onMouseOver={handleDropdownHover}
              onMouseLeave={handleDropdownLeave}
            >
              <NavDropdown.Item href="home1.html">Home 1</NavDropdown.Item>
              <NavDropdown.Item href="home2.html">Home 2</NavDropdown.Item>
              <NavDropdown.Item href="home3.html">Home 3</NavDropdown.Item>
              <NavDropdown.Item href="home4.html">Home 4</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="FSO"
              id="sub-nav6"
              show={showDropdown}
              onMouseOver={handleDropdownHover}
              onMouseLeave={handleDropdownLeave}
            >
              <NavDropdown.Item href="home1.html">Home 1</NavDropdown.Item>
              <NavDropdown.Item href="home2.html">Home 2</NavDropdown.Item>
              <NavDropdown.Item href="home3.html">Home 3</NavDropdown.Item>
              <NavDropdown.Item href="home4.html">Home 4</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Insurance"
              id="sub-nav7"
              show={showDropdown}
              onMouseOver={handleDropdownHover}
              onMouseLeave={handleDropdownLeave}
            >
              <NavDropdown.Item href="home1.html">Home 1</NavDropdown.Item>
              <NavDropdown.Item href="home2.html">Home 2</NavDropdown.Item>
              <NavDropdown.Item href="home3.html">Home 3</NavDropdown.Item>
              <NavDropdown.Item href="home4.html">Home 4</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Pension Schemes"
              id="sub-nav8"
              show={showDropdown}
              onMouseOver={handleDropdownHover}
              onMouseLeave={handleDropdownLeave}
            >
              <NavDropdown.Item href="home1.html">Home 1</NavDropdown.Item>
              <NavDropdown.Item href="home2.html">Home 2</NavDropdown.Item>
              <NavDropdown.Item href="home3.html">Home 3</NavDropdown.Item>
              <NavDropdown.Item href="home4.html">Home 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
