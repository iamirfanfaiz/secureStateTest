import React, { useState } from 'react'
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import { Player } from 'video-react';
import banner from '../../assets/main-banner.svg'
import security_one from '../../assets/security/one.svg'
import security_two from '../../assets/security/two.svg'
import security_three from '../../assets/security/three.svg'
import security_four from '../../assets/security/four.svg'
import feature_one from '../../assets/feature_one.svg'
import feature_two from '../../assets/feature_two.svg'
import feature_three from '../../assets/feature_three.svg'
import feature_four from '../../assets/feature_four.svg'
import power_one from '../../assets/power/power-one.svg'
import power_two from '../../assets/power/power-two.svg'
import power_three from '../../assets/power/power-three.svg'
import power_four from '../../assets/power/power-four.svg'
import power_five from '../../assets/power/power-five.svg'
import power_six from '../../assets/power/power-six.svg'
import power_seven from '../../assets/power/power-seven.svg'
import power_eight from '../../assets/power/power-eight.svg'
import scale from '../../assets/scale.svg'
import webapp from '../../assets/images/home/webapp.svg'
import mobileapp from '../../assets/images/home/mobileapp.svg'
import sslaptop from '../../assets/images/home/sslaptop.svg'
import people from '../../assets/images/home/people.svg'
import iterate from '../../assets/images/home/iterate.svg'
import graph from '../../assets/images/home/graph.svg'

import plus from '../../assets/images/home/plus.svg'
import equal from '../../assets/images/home/equal.svg'


function Home() {

    return (
        <div>
            <header className='header blur-bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5 d-flex align-items-center flex-column justify-content-around'>
                            <span>
                                {/* <h1 className='mb-4 fw-700'>Take The First Step
                                    Toward <span className='highlight'>Security</span></h1> */}
                                <h1>
                                    Integrate Security at Every Phase of the Development Lifecycle
                                </h1>
                                <p className='mt-1'>
                                    Gain access to a dedicated product security engineer available through slack and a robust DevSecOps platform to build an enterprise grade development program at scale.
                                </p>

                                <a href='https://calendly.com/securestate/lets-talk-security' className='btn btn-primary btn-lg mb-4'>Request A Demo</a>
                            </span>
                        </div>
                        <div className='col-md-7'>
                            <img className='img-fluid' src={banner} />
                        </div>
                    </div>
                </div>
            </header>

            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h2 className='mb-3 fw-700'>Get a Free Product Security Risk Assessment Today!</h2>
                            <a href='https://yt754yiloe6.typeform.com/to/flmCjEku' className='btn btn-primary btn-lg'>Get A Free Assessment</a>
                        </div>
                    </div>

                    <div className='cols'>
                        <div className='center-row'>
                            <div className='icons'>
                                <img className='img-fluid' src={plus} />
                            </div>

                            <div className='icons'>
                                <img className='img-fluid' src={equal} />
                            </div>
                        </div>
                        <div className='col-one'>
                            <h3>Your platform...</h3>
                            <div className='figure'>
                                <img src={webapp} />
                                <p>Web Applications</p>
                            </div>

                            <div className='figure'>
                                <img src={mobileapp} />
                                <p>Mobile Applications</p>
                            </div>
                        </div>
                        <div className='col-two'>
                            <h3>...our engineers and security platform</h3>
                            <div className='figure'>
                                <img src={sslaptop} />
                                <p>Cloud Security Platform</p>
                            </div>

                            <div className='figure'>
                                <img src={people} />
                                <p>Analysts & Engineers</p>
                            </div>
                        </div>
                        {/* <div className='equal'>

                        </div> */}
                        <div className='col-three'>
                            <h3>Simplifying cybersecurity</h3>
                            <div className='figure'>
                                <img src={iterate} />
                                <p>End to End Security Coverage</p>
                            </div>

                            <div className='figure'>
                                <img src={graph} />
                                <p>At a fraction of the cost</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center mb-4'>
                            <h3>HOW IT WORKS</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            {/* <Player>
                                poster="/assets/poster.png"
                                <source src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/33dcdbf6-1308-4002-ad34-e7b605108f10/Final_Website_Upload-1080p-221101.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221120T164358Z&X-Amz-Expires=86400&X-Amz-Signature=1c863a709d74bc0f05110a0c52fc39c505361bad6caec733ab54a91d4c39ddd3&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Final%2520Website%2520Upload-1080p-221101.mp4%22&x-id=GetObject" />
                            </Player> */}

                            <Player
                                playsInline
                                poster="/assets/images/home/graph.svg"
                                src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/33dcdbf6-1308-4002-ad34-e7b605108f10/Final_Website_Upload-1080p-221101.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221121T190132Z&X-Amz-Expires=86400&X-Amz-Signature=522b1bf359438949013e5e0e38063c73dec2d40d8dcbc8e65ba071b4f9f421c6&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Final%2520Website%2520Upload-1080p-221101.mp4%22&x-id=GetObject"
                            />

                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className='container'>
                    <div className='row mb-5'>
                        <div className='col-8 text-center offset-2'>
                            <h1 className='mb-3 fw-700'>End-to-End Product Security That Scales With You</h1>
                            <p>We help you stay secure at every stage of growth</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-3 text-center'>
                            <img src={security_one} height={80} className="mb-4" />
                            <p className='fs-16'>Create a baseline product security program in weeks</p>
                        </div>
                        <div className='col-md-3 text-center'>
                            <img src={security_two} height={80} className="mb-4" />
                            <p className='fs-16'>Develop a product with the power of an enterprise security program</p>
                        </div>
                        <div className='col-md-3 text-center'>
                            <img src={security_three} height={80} className="mb-4" />
                            <p className='fs-16'>Pay only for what you use, with flexible payment options</p>
                        </div>
                        <div className='col-md-3 text-center'>
                            <img src={security_four} height={80} className="mb-4" />
                            <p className='fs-16'>Take an educational approach with Knowledge Centered Learning</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-8 text-center offset-2'>
                            <h1 className='mb-3 fw-700'>The SecureState Advantage</h1>
                            <p>We help you stay secure at every stage of growth</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='pb-5 pt-2'>
                <div className='container'>
                    <div className='row d-flex align-items-center py-4 col-reverse text-center-xs'>
                        <div className='col-md-6'>
                            <h2 className='mb-2 fw-600'>Transparent Process and Pricing</h2>
                            <p>We believe achieving best-in-class security should be transparent at every step. With our straightforward pricing and process, know exactly what you’re getting from the start.</p>
                        </div>
                        <div className='col-md-6'>
                            <img src={feature_one} className='img-fluid mb-3' />
                        </div>
                    </div>

                    <div className='row d-flex align-items-center py-4 text-center-xs'>
                        <div className='col-md-6'>
                            <img src={feature_two} className='img-fluid mb-3' />
                        </div>
                        <div className='col-md-6'>
                            <h2 className='mb-2 fw-600'>Targeted Security Services Following a Risk-Based Approach</h2>
                            <p>We integrate security into every phase of the development lifecycle by providing targeted security services to maximize coverage of the attack surface.  They are delivered by highly expierenced security engineers.</p>
                        </div>

                    </div>

                    <div className='row d-flex align-items-center py-4 col-reverse text-center-xs'>
                        <div className='col-md-6'>
                            <h2 className='mb-2 fw-600'>Fix Issues Quickly With Real-Time Alerts</h2>
<p>Maintain product security with ease. Our reactive software and proactive scanning notify you when there’s a vulnerability, so you can fix it quickly. Get detailed guidance for correcting each issue so you know you’ve done it right.</p>
                        </div>

                        <div className='col-md-6'>
                            <img src={feature_three} className='img-fluid mb-3' />
                        </div>


                    </div>

                    <div className='row d-flex align-items-center py-4 text-center-xs'>
                        <div className='col-md-6'>
                            <img src={feature_four} className='img-fluid mb-3' />
                        </div>

                        <div className='col-md-6'>
                            <h2 className='mb-2 fw-600'>Actively Engage with Product Security Experts</h2>
                           <p>Get support from a dedicated product security engineer through Slack.  Security is continous, so is our engagement with your team. As you design, develop and deploy software, we enable you to ask questions and get feedback to integrate security at every step.</p>
                        </div>
                    </div>

                </div>

            </section>

            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-8 text-center offset-2'>
                            <h1 className='mb-3 fw-700'>One Powerful Platform</h1>
                            <p>Everything you need to maintain strong product security posture</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='box green'>
                                <div className='icon green-gradient'>
                                    <div className='img'>
                                        <img src={power_one} />
                                    </div>
                                </div>
                                <div className='content'>
                                    Software Bill of Materials
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='box red'>
                                <div className='icon red-gradient'>
                                    <div className='img'>
                                        <img src={power_two} />
                                    </div>
                                </div>
                                <div className='content'>
                                    Security Knowledge Base
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='box blue'>
                                <div className='icon blue-gradient'>
                                    <img src={power_three} />
                                </div>
                                <div className='content'>
                                    Real-Time Reporting
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='box yellow'>
                                <div className='icon yellow-gradient'>
                                    <img src={power_four} />
                                </div>
                                <div className='content'>
                                    Product Integrations
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='box purple'>
                                <div className='icon purple-gradient'>
                                    <img src={power_five} />
                                </div>
                                <div className='content'>
                                    Access to Security Engineers
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='box darkyellow'>
                                <div className='icon darkyellow-gradient'>
                                    <img src={power_six} />
                                </div>
                                <div className='content'>
                                    Regular Security Testing
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='box maroon'>
                                <div className='icon maroon-gradient'>
                                    <img src={power_seven} />
                                </div>
                                <div className='content'>
                                    Quarterly Security Program Review
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='box organge'>
                                <div className='icon organge-gradient'>
                                    <img src={power_eight} />
                                </div>
                                <div className='content'>
                                    Expanding Partner Network
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='header blur-bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5 d-flex align-items-center flex-column justify-content-around'>
                            <span>
                                <h1 className='mb-4 fw-700'>
                                    Ready To Scale With Security?
                                </h1>


                                <a href='https://calendly.com/securestate/lets-talk-security' className='btn btn-primary btn-lg'>Request A Demo</a>
                            </span>
                        </div>
                        <div className='col-md-7'>
                            <img className='img-fluid' src={scale} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Home
