import React, { useState } from 'react'
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
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

function NewHome() {

    return (
        <div>
            <header className='header blur-bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5 d-flex align-items-center flex-column justify-content-around'>
                            <span>
                                <h1 className='mb-4 fw-700'>Take The First Step
                                    Toward <span className='highlight'>Security</span></h1>
                                <p className='mt-1'>
                                    Startups trust SecureState to help introduce enterprise-grade product security. Leverage a highly skilled team of security engineers and a robust DevSecOps platform as your security partner of choice.
                                </p>

                                <button className='btn btn-primary btn-lg mb-4'>Request A Demo</button>
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
                        <div className='col-8 text-center offset-2'>
                            <h1 className='mb-3 fw-700'>Get a Free Product Security Risk Assessment Today!</h1>
                            <button className='btn btn-primary btn-lg'>Get A Free Assessment</button>
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
                            <h2 className='mb-2 fw-600'>Thousands of Dollars Saved, to Invest in Scaling Your Business</h2>
                            <p>Product security teams involve significant investment in people and infrastructure. SecureState provides the same value at a fraction of the cost through a DevSecOps platform that scales with your business.</p>
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
                            <h2 className='mb-2 fw-600'>Support From Product Security Experts</h2>
                            <p>Get support from our team of product security engineers. We strive to respond to questions in 1 business day or less.</p>
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
                               

                                <button className='btn btn-primary btn-lg'>Request A Demo</button>
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

export default NewHome
