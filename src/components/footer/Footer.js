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
                                © 2021 - securestate.io <a href="https://securestate.notion.site/Terms-of-Service-6d60ced6d38747f6b61357dd7a23dd7b" target="_blank">Terms of Service</a> | <a href="https://securestate.notion.site/Privacy-Policy-5a1fce3f303447a283ae68ec0d61c597">Privacy Policy</a> 
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <ul className='sitemap'>
                                <li className='heading'>RESOURCES</li>
                                <li><a href="https://www.notion.so/securestate/Link-BLOG-in-Footer-6ef2ef5f5851485dab9f20e445810c5b#095c5302598f44d0b8682cce7360efe9" target="_blank">Blog</a></li>
                                <li><a href="https://securestate.notion.site/Job-Board-e10182de9ad74961a28540790c4cb541" target="_blank">Careers</a></li>
                            </ul>
                        </div>

                        <div className='col-md-2'>
                            <ul className='sitemap'>
                                <li className='heading'><a href="" target="_blank">SUPPORT</a></li>
                                <li><a href="https://securestate.notion.site/Contact-Us-3f39bdff3219494284017ad431c04578" target="_blank">Contact Us</a></li>
                                <li><a href="">What is Pentesting</a></li>
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