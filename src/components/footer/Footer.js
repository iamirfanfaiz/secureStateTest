import React from 'react'
import './Footer.scss';
import mainLogo from '../../assets/images/logo-new.png';

function Footer() {

    return (
        <div>
            <footer className='footer'>
                <div className='container'>

                    <div className='row'>
                        <div className='col-md-4 d-flex flex-column'>

                            <img src={mainLogo} className='img-fluid mb-3' width="60px" />

                            <div className='copy-rights mb-4'>
                                © 2021 - securestate.io Terms of Service     Privacy Policy
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <ul className='sitemap'>
                                <li className='heading'>RESOURCES</li>
                                <li>Blog</li>
                                <li>Careers</li>
                            </ul>
                        </div>

                        <div className='col-md-2'>
                            <ul className='sitemap'>
                                <li className='heading'>SUPPORT</li>
                                <li>Contact Us</li>
                                <li>What is Pentesting</li>
                            </ul>
                        </div>

                        <div className='col-md-4 d-flex align-items-center justify-content-center'>
                            <ul className='social-media'>
                                <li>
                                    <box-icon name='twitter' type='logo' color="#798da3" size="md"></box-icon>
                                </li>
                                <li>
                                    <box-icon name='instagram-alt' type='logo' color="#798da3" size="md"></box-icon>
                                </li>
                                <li>
                                    <box-icon name='facebook-square' type='logo' color="#798da3" size="md"></box-icon>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}



export default Footer