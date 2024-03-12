import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from "../Assets/Images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Navabr() {
    const [isMenuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!isMenuActive);
    };

    return (
        <Container fluid>
            <Navbar expand="lg" className="text-black  py-4 h-100" variant="light" >
                <Navbar.Brand href="/" style={{ textDecoration: "none" }} className=''>
                    <img src={Logo}  alt="" className='rounded'
                    width="100"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} className="menu-icon" />
                </Navbar.Toggle>
                <Navbar.Collapse id="navbar-nav " style={{
                    right: "0",

                }}>
                    <Nav className={`ml-auto ${isMenuActive ? 'active' : ''}`} style={{ color: 'whitesmoke' }}>
                    <Nav.Link className="nav-link"as={Link} to='/'>Home</Nav.Link>
                        <NavDropdown title="Loans" id="loan-dropdown">
                            <NavDropdown.Item as={Link} to='/Loans/two-WheelerLoan'>2-Wheeler Loan</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/Loans/car-Loan'>Car Loan</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/Loans/education-Loan'>Education Loan</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/Loans/home-Loan'>Home Loan</NavDropdown.Item>
                        </NavDropdown>
                        {/* Add similar NavDropdown components for other menu items */}
                        <Nav.Link className="nav-link">Mutual Fund</Nav.Link>
                        <Nav.Link className="nav-link">Deposits</Nav.Link>
                        <Nav.Link className="nav-link">Bullion</Nav.Link>
                        <Nav.Link className="nav-link">Stocks</Nav.Link>
                      
                        <Nav.Link className="nav-link">Insurance</Nav.Link>
                        <Nav.Link className="nav-link">Pension Schemes</Nav.Link>
                        <Link className="nav-link" as={Link} to='/contactus'>Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Navabr;
