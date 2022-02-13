import React, { useState } from 'react'
import './NavBar.scss';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/images/logo.png';
import ThreatModelasaServiceLogo from '../../assets/images/icons/ThreatModelasaServiceLogo.svg'
import ASPMlogo from '../../assets/images/icons/ASPMlogo.svg'
import PentestasaService from '../../assets/images/icons/PentestasaService.svg'

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <div>
            <nav className='nav-bar'>

                <div className='logo'>
                    <Link to='/' className="nav-item">
                        <img src={mainLogo} />
                    </Link>
                </div>

                <div className='menu'>

                    <div className='nav-items'>
                        <Link to='/' className="nav-item">
                            Products
                        </Link>
                        <div className='sub-items'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <p>PRODUCTS</p>
                                    <Link to='/design' className="sub-item">
                                        <div className='icon'>
                                            <img src={ThreatModelasaServiceLogo} />
                                        </div>
                                        <div className='content'>
                                            <h1>Design with Security</h1>
                                            <p>Integrating security at every phase of the product development lifecycle</p>
                                        </div>
                                    </Link>
                                    <Link to='/develop' className="sub-item">
                                        <div className='icon'>
                                            <img src={ASPMlogo} />
                                        </div>
                                        <div className='content'>
                                            <h1>Application Security Posture Management</h1>
                                                <p>Integrating security at every phase of the product development lifecycle</p>
                                        </div>
                                    </Link>
                                    <Link to='/operate' className="sub-item">
                                        <div className='icon'>
                                            <img src={PentestasaService} />
                                        </div>
                                        <div className='content'>
                                            <h1>Pentest as a Service</h1>
                                            <p>Integrating security at every phase of the product development lifecycle</p>
                                        </div>
                                    </Link>
                                </div>

                                <div className='col-md-6'>
                                    <p>SOLUTIONS</p>
                                    <Link to='/design' className="sub-item">
                                        <div className='icon'>
                                            <img src={ThreatModelasaServiceLogo} />
                                        </div>
                                        <div className='content'>
                                            <h1>Supply Chain Security</h1>
                                            <p>Integrating security at every phase of the product development lifecycle</p>
                                        </div>
                                    </Link>
                                    <Link to='/design' className="sub-item">
                                        <div className='icon'>
                                            <img src={ASPMlogo} />
                                        </div>
                                        <div className='content'>
                                            <h1>Vendor Security & Privacy Standards</h1>
                                                <p>Integrating security at every phase of the product development lifecycle</p>
                                        </div>
                                    </Link>
                                    <Link to='/operate' className="sub-item">
                                        <div className='icon'>
                                            <img src={PentestasaService} />
                                        </div>
                                        <div className='content'>
                                            <h1>Dev SecOps Orchestration</h1>
                                            <p>Integrating security at every phase of the product development lifecycle</p>
                                        </div>
                                    </Link>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='nav-items'>
                        <Link to='/pricing' className="nav-item">
                            Pricings
                        </Link>
                    </div>
                    <div className='nav-items'>
                        <Link to='/platform' className="nav-item">
                            Platform
                        </Link>
                    </div>

                </div>

                <Link to='/' className="btn btn-primary login-btn">
                    Log in
                </Link>



                <button className='menu-icon btn' onClick={handleClick}>
                    <box-icon name='menu-alt-right' size='md' color='#ccc'></box-icon>
                </button>


                <div className={click ? 'mobile-nav active' : 'mobile-nav'}>

                    <div className='px-3 d-flex align-items-center justify-content-between'>
                        <div className='logo'>
                            <Link to='/' className="nav-item">
                                <img src={mainLogo} />
                            </Link>
                        </div>

                        <button className='menu-icon btn' onClick={closeMobileMenu}>
                            <box-icon name='x' size='md' color='#ccc'></box-icon>
                        </button>
                    </div>


                    <div className='mobile-menu active'>

                        <div className='mobile-nav-items'>
                            <Link to='/' className="mobile-nav-item">
                                Solutions
                            </Link>
                            <div className='mobile-sub-items'>
                                <Link to='/design' className="sub-item">
                                    Design with Security
                                </Link>
                                <Link to='/develop' className="sub-item">
                                    Develop with Security
                                </Link>
                                <Link to='/operate' className="sub-item">
                                    Operate with Security
                                </Link>
                            </div>
                        </div>
                        <div className='mobile-nav-items'>
                            <Link to='/pricing' className="mobile-nav-item">
                                Pricings
                            </Link>
                        </div>
                        <div className='mobile-nav-items'>
                            <Link to='/platform' className="mobile-nav-item">
                                Platform
                            </Link>
                        </div>

                    </div>

                    <div className='px-3'>
                        <Link to='/' className="btn btn-primary btn-block w-100">
                            Login
                        </Link>
                    </div>


                </div>



            </nav>
        </div>
    )
}



export default NavBar
