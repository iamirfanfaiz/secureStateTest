import React, { useState } from 'react'
import './NavBar.scss';
import { NavLink, Link } from 'react-router-dom';
import mainLogo from '../../assets/images/logo-new.png';
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
                <div className='wrapper'>
                    <div className='logo'>
                        <Link to='/' className="nav-item">
                            <a>
                                <img src={mainLogo} alt='logo' />
                            </a>
                        </Link>
                    </div>

                    <div className='menu hide-xs'>

                        <div className='nav-items'>
                            <NavLink to='/platform' className='nav-item' activeClassName="selected">
                                Products
                            </NavLink>
                            <div className='sub-items'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <p className='fs-md'>PRODUCTS</p>
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
                                        <p className='fs-md'>SOLUTIONS</p>
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
                            <NavLink to='/pricing' className='nav-item' activeClassName="selected">
                                Pricing
                            </NavLink>
                        </div>

                    </div>

                    <div className='btns hide-xs'>
                        <Link to='/' className='mx-4'>
                            <a className="btn btn-secondary border-gradient border-gradient-purple btn-block w-100 px-3">Sign In</a>
                        </Link>
                        <a href='https://calendly.com/securestate/lets-talk-security' className="btn btn-primary d-none d-sm-block px-3">Request a Demo</a>

                    </div>


                    <button className='menu-icon btn hide-md  show-xs' onClick={handleClick}>
                        <box-icon name='menu-alt-right' size='sm' color='#ccc'></box-icon>
                    </button>

                    <div className={click ? 'mobile-nav active' : 'mobile-nav'}>

                        <div className='headers px-3 d-flex align-items-center justify-content-between'>
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

                        <div className='mobile'>

                            <div className='menu'>

                                <div className='nav-items'>
                                    <NavLink to='/platform' className='nav-item' activeClassName="selected">
                                        Products
                                    </NavLink>
                                </div>

                                <div className='nav-items'>
                                    <NavLink to='/pricing' className='nav-item' activeClassName="selected">
                                        Pricing
                                    </NavLink>
                                </div>

                            </div>

                            <div className='btns'>
                                <Link to='/' className='mx-4'>
                                    <a className="btn btn-secondary border-gradient border-gradient-purple px-3 mb-3">Sign In</a>
                                </Link>


                                <a href='https://calendly.com/securestate/lets-talk-security' className="btn btn-primary px-3">Request a Demo</a>

                            </div>
                        </div>



                    </div>
                </div>


            </nav >
        </div >
    )
}



export default NavBar
