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
                        <a>
                            <img src={mainLogo} alt='logo' />
                        </a>
                    </Link>
                </div>

                <div className='menu'>

                    <div className='nav-items'>
                        <Link to='/' className="nav-item">
                            <a className="nav-item"> Products</a>
                        </Link>
                        <div className='sub-items'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <p>PRODUCTS</p>
                                    <Link to='/design'>
                                        <a className="sub-item">
                                            <div className='icon'>
                                                <img src={ThreatModelasaServiceLogo} alt='theat model service' />
                                            </div>
                                            <div className='content'>
                                                <h1>Threat Model as a Service (TMaaS)</h1>
                                                <p>Build secure products from Day One and eliminate bugs before they make it to production</p>
                                            </div>
                                        </a>
                                    </Link>
                                    <Link to='/operate'>
                                        <a className="sub-item">
                                            <div className='icon'>
                                                <img src={ASPMlogo} alt='' />
                                            </div>
                                            <div className='content'>
                                                <h1>Pentest as a Service (PTaaS)</h1>
                                                <p>Perform targeted penetration testing to uncover critical vulnerabilities and satisfy compliance requirements</p>
                                            </div>
                                        </a>
                                    </Link>
                                    <Link to='/develop'>
                                        <a className="sub-item">
                                            <div className='icon'>
                                                <img src={PentestasaService} />
                                            </div>
                                            <div className='content'>
                                                <h1>Product Security Posture Management (PSPM)</h1>
                                                <p>Manage end to end security of your products from a single platform</p>
                                            </div>
                                        </a>
                                    </Link>
                                </div>

                                <div className='col-md-6'>
                                    <p>SOLUTIONS</p>
                                    <Link to='/operate'>
                                        <a className="sub-item">
                                            <div className='icon'>
                                                <img src={ThreatModelasaServiceLogo} />
                                            </div>
                                            <div className='content'>
                                                <h1>Supply Chain Security</h1>
                                                <p>Secure open source components, 3rd party libraries, and plug-ins to protect your products against supply chain attacks</p>
                                            </div>
                                        </a>
                                    </Link>
                                    <Link to='/operate'>
                                        <a className="sub-item">
                                            <div className='icon'>
                                                <img src={ASPMlogo} />
                                            </div>
                                            <div className='content'>
                                                <h1>Vendor Security & Privacy Standards</h1>
                                                <p>Bet out your competitors by showing your commitment to security and privacy through our VSP Framework and compliance reporting</p>
                                            </div>
                                        </a>
                                    </Link>
                                    <Link to='/operate' >
                                        <a className="sub-item">
                                            <div className='icon'>
                                                <img src={PentestasaService} />
                                            </div>
                                            <div className='content'>
                                                <h1>DevSecOps Orchestration</h1>
                                                <p>Centralize all product security data and processes into a single platform and create a high security posture</p>
                                            </div>
                                        </a>
                                    </Link>
                                </div>


                            </div>
                        </div>
                    </div>
                  
                    <div className='nav-items'>
                        <Link to='/platform' className="nav-item">
                            <a className="nav-item">Platform</a>
                        </Link>
                    </div>
                    <div className='nav-items'>
                        <Link to='/pricing' className="nav-item">
                            <a className="nav-item">Pricing</a>
                        </Link>
                    </div>

                </div>

                <Link to='/'>
                    <a className="btn btn-primary d-none d-sm-block px-3">Log in</a>
                </Link>



                <button className='menu-icon btn' onClick={handleClick}>
                    <box-icon name='menu-alt-right' size='sm' color='#ccc'></box-icon>
                </button>


                <div className={click ? 'mobile-nav active' : 'mobile-nav'}>

                    <div className='px-3 d-flex align-items-center justify-content-between'>
                        <div className='logo'>
                            <Link to='/' className="nav-item">
                                <a>
                                    <img src={mainLogo} alt='logo' />
                                </a>
                            </Link>
                        </div>

                        <button className='menu-icon btn' onClick={closeMobileMenu}>
                            <box-icon name='x' size='sm' color='#ccc'></box-icon>
                        </button>
                    </div>


                    <div className='mobile-menu active'>

                        <div className='mobile-nav-items'>
                            <Link to='/' className="mobile-nav-item">
                                Products
                            </Link>

                            <div className='mobile-sub-items'>
                                <div className='row mx-0'>
                                    <div className='col-md-6'>
                                        <p className='px-3 pt-3'>PRODUCTS</p>
                                        <Link to='/design'>
                                            <a className="sub-item">
                                                <div className='icon'>
                                                    <img src={ThreatModelasaServiceLogo} />
                                                </div>
                                                <div className='content'>
                                                    <h1>Threat Model as a Service (TMaaS)</h1>
                                                    <p>Build secure products from Day One and eliminate bugs before they make it to production</p>


                                                </div>
                                            </a>
                                        </Link>
                                        <Link to='/operate'>
                                            <a className="sub-item">
                                                <div className='icon'>
                                                    <img src={ASPMlogo} />
                                                </div>
                                                <div className='content'>
                                                    <h1>Pentest as a Service (PTaaS)</h1>
                                                    <p>Perform targeted penetration testing to uncover critical vulnerabilities and satisfy compliance requirements</p>
                                                </div>
                                            </a>
                                        </Link>
                                        <Link to='/develop'>
                                            <a className="sub-item">
                                                <div className='icon'>
                                                    <img src={PentestasaService} />
                                                </div>
                                                <div className='content'>
                                                    <h1>Product Security Posture Management (PSPM)</h1>
                                                    <p>Manage end to end security of your products from a single platform</p>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>

                                    <div className='col-md-6'>
                                        <p className='px-3'>SOLUTIONS</p>
                                        <Link to='/design'>
                                            <a className="sub-item">
                                                <div className='icon'>
                                                    <img src={ThreatModelasaServiceLogo} />
                                                </div>
                                                <div className='content'>
                                                    <h1>Supply Chain Security</h1>
                                                    <p>Secure open source components, 3rd party libraries, and plug-ins to protect your products against supply chain attacks</p>
                                                </div>
                                            </a>
                                        </Link>
                                        <Link to='/design'>
                                            <a className="sub-item">
                                                <div className='icon'>
                                                    <img src={ASPMlogo} />
                                                </div>
                                                <div className='content'>
                                                    <h1>Vendor Security & Privacy Standards</h1>
                                                    <p>Bet out your competitors by showing your commitment to security and privacy through our VSP Framework and compliance reporting</p>
                                                </div>
                                            </a>
                                        </Link>
                                        <Link to='/operate' >
                                            <a className="sub-item">
                                                <div className='icon'>
                                                    <img src={PentestasaService} />
                                                </div>
                                                <div className='content'>
                                                    <h1>DevSecOps Orchestration</h1>
                                                    <p>Centralize all product security data and processes into a single platform and create a high security posture</p>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>


                                </div>
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

                        <div className='mobile-nav-items p-3'>
                            <Link to='/'>
                                <a className="btn btn-primary btn-block w-100">Login</a>
                            </Link>
                        </div>

                    </div>




                </div>



            </nav>
        </div>
    )
}



export default NavBar
