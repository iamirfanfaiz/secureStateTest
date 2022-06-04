import React from 'react'
import './Footer.scss';
import mainLogo from '../../assets/images/landing/footer-logo.svg';
import facebook from '../../assets/images/landing/fb.png';
import instagram from '../../assets/images/landing/instagram.png';
import twitter from '../../assets/images/landing/twitter.png';

function Footer() {

    return (
        <div>
            <footer className='footer'>
                <div className='container'>

                    <div className='row mb-4'>
                        <div className='col-md-4 d-flex flex-column'>

                            <img src={mainLogo} className='img-fluid mb-3' width="200px" />


                        </div>
                        <div className='col-md-2'>
                            <ul className='sitemap'>
                                <li className='heading'>Resources</li>
                                <li><a href="https://securestate.notion.site/Blogs-Resources-2d2033995fce4e4d84f66e2975b0310a" target="_blank">Blog</a></li>
                                <li><a href="https://securestate.notion.site/Job-Board-e10182de9ad74961a28540790c4cb541" target="_blank">Careers</a></li>
                            </ul>
                        </div>

                        <div className='col-md-2'>
                            <ul className='sitemap'>
                                <li className='heading'>Support</li>
                                <li><a href="https://securestate.notion.site/Contact-Us-3f39bdff3219494284017ad431c04578" target="_blank">Contact Us</a></li>
                                <li><a href="">What is Pentesting</a></li>
                            </ul>
                        </div>

                        <div className='col-md-4 d-flex align-items-center justify-content-center'>
                            <ul className='sitemap'>
                                <li className='heading'>Follow us</li>
                                <li className='d-flex socialicons-group' >
                                    <div className='social-icon'>
                                        <img src={facebook} className='img-fluid mb-3' width="60px" />
                                    </div>
                                    <div className='social-icon'>
                                        <img src={instagram} className='img-fluid mb-3' width="60px" />
                                    </div>
                                    <div className='social-icon'>
                                        <img src={twitter} className='img-fluid mb-3' width="60px" />
                                    </div>
                                </li>
                            </ul>


                        </div>
                    </div>
                </div>

                <div className='copy-rights'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                Copyright © 2022 Secure State.IQ All Rights Reserved
                            </div>
                        </div>
                    </div>

                </div>

            </footer>
        </div>
    )
}



export default Footer