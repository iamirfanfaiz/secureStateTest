import React, { useState } from 'react'
import './NavBar.scss';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/images/logo-new.png';

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
                            Solutions
                        </Link>
                        <div className='sub-items'>
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
