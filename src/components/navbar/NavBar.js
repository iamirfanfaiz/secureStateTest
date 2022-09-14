import React, { useState } from 'react'
import './NavBar.scss';
import { NavLink, Link } from 'react-router-dom';
import mainLogo from '../../assets/images/logo-new.png';


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


            </nav>
        </div>
    )
}



export default NavBar
