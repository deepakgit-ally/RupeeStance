import React from 'react';

import Logo from "../../Assets/Images/logobackwhite.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Navabr.css';
import { Dropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navabr() {
    // const [isMenuActive, setMenuActive] = useState(false);

    // const toggleMenu = () => {
    //     setMenuActive(!isMenuActive);
    // };
    return (
        <div className="">
            {/* Header Section */}
            <header className="">
                <div className="container-fluid">
                    <Navbar className=" text-black" >
                        <a href="#/" 
                       style={{textDecoration:"none"}}
                        >
                            <img
                                src={Logo}
                                width="100"
                                height="75"
                                alt=""
                                className='rounded'
                                
                            />
                            Rupee₹stance
                        </a>

                        {/* <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu} /> */}
                        <ul className="" style={{
                            margin: "10px",
                            listStyle: " none",
                            transition: "transform 0.3s ease-in-out",
                            position: "absolute",
                            display: "flex",
                            right: " 0",
                            gap: "4px",
                            color: 'whitesmoke'
                        }}>

                            <Dropdown className=''
                                style={{
                                    background: "none",
                                    backgroundColor: "none",
                                    color: 'black'
                                }}>
                                <Dropdown.Toggle id="dropdown-basic"  >
                                    Loans
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/TwoWheelerLoan.jsx'>
                                        2-Wheeler Loan</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/CarLoan.jsx'>Car
                                        loan</Dropdown.Item>
                                    <Dropdown.Item as={Link}
                                        to='/src/Component/Lons/Education.jsx'>Education
                                        Loan</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/HomeLoan.jsx'>Home
                                        Loan</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" variant="success" >
                                    Mutual fund
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/TwoWheelerLoan.jsx'>
                                        2-Wheeler Loan</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/CarLoan.jsx'>Car
                                        loan</Dropdown.Item>
                                    <Dropdown.Item as={Link}
                                        to='/src/Component/Lons/Education.jsx'>Education
                                        Loan</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/HomeLoan.jsx'>Home
                                        Loan</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" variant="success" >
                                    Deposits
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/TwoWheelerLoan.jsx'>
                                        2-Wheeler Loan</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/CarLoan.jsx'>Car
                                        loan</Dropdown.Item>
                                    <Dropdown.Item as={Link}
                                        to='/src/Component/Lons/Education.jsx'>Education
                                        Loan</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/HomeLoan.jsx'>Home
                                        Loan</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" variant="success" >
                                    Bullion
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/TwoWheelerLoan.jsx'>
                                        2-Wheeler Loan</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/CarLoan.jsx'>Car
                                        loan</Dropdown.Item>
                                    <Dropdown.Item as={Link}
                                        to='/src/Component/Lons/Education.jsx'>Education
                                        Loan</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/HomeLoan.jsx'>Home
                                        Loan</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" variant="success" >
                                    Stocks
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to='/src/Component/Hdfc/HdfcN.jsx'>
                                      Hdfc stocks</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/CarLoan.jsx'>Car
                                        loan</Dropdown.Item>
                                    <Dropdown.Item as={Link}
                                        to='/src/Component/Lons/Education.jsx'>Education
                                        Loan</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/HomeLoan.jsx'>Home
                                        Loan</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" variant="success" >
                                    F&O
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/TwoWheelerLoan.jsx'>
                                        2-Wheeler Loan</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/CarLoan.jsx'>Car
                                        loan</Dropdown.Item>
                                    <Dropdown.Item as={Link}
                                        to='/src/Component/Lons/Education.jsx'>Education
                                        Loan</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/HomeLoan.jsx'>Home
                                        Loan</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" variant="success" >
                                insurance
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/TwoWheelerLoan.jsx'>
                                        2-Wheeler Loan</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/CarLoan.jsx'>Car
                                        loan</Dropdown.Item>
                                    <Dropdown.Item as={Link}
                                        to='/src/Component/Lons/Education.jsx'>Education
                                        Loan</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/HomeLoan.jsx'>Home
                                        Loan</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" variant="success" >
                                  Pension Schemes
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/TwoWheelerLoan.jsx'>
                                        2-Wheeler Loan</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/CarLoan.jsx'>Car
                                        loan</Dropdown.Item>
                                    <Dropdown.Item as={Link}
                                        to='/src/Component/Lons/Education.jsx'>Education
                                        Loan</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/src/Component/Lons/HomeLoan.jsx'>Home
                                        Loan</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </ul>
                    </Navbar>
                </div>
            </header>
            {/* End Header Section */}


        </div>
    )
}

export default Navabr