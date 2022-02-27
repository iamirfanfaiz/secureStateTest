import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";
import ASPMImage from '../../assets//images/aspm/ASPM.png'
import CentralizeDataImage from '../../assets/images/aspm/CentralizeData.png'
import PrioritzeRiskImage from '../../assets/images/aspm/PrioritzeRisk.png'
import ActionalbleRecommendationsImage from '../../assets/images/aspm/ActionalbleRecommendations.png'
import AutorenewIconImage from '../../assets/images/icons/AutorenewIcon.png'
import EmojiEventsiconImage from '../../assets/images/icons/EmojiEventsicon.png'



function Design() {
    return (
        <div>
            <header className='header d-flex align-items-center'>

                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>

                            <h1 className='fw-700'>
                                Application Security Posture Management
                            </h1>

                            <p>
                                Centralize data from all your product security tools including DAST, SAST, SCA, Pentest and Threat Models in a single place
                            </p>

                            <a href='https://www.securestate.io/demo' className='btn btn-primary'>
                                Get Secure
                            </a>
                        </div>
                        <div className='col-md-6 d-flex justify-content-center'>
                            <Slide direction='up' triggerOnce='ture'>
                                <img src={ASPMImage} className='img-fluid' />
                            </Slide>
                        </div>
                    </div>
                </div>

            </header>

            <section className='py-5'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-10 offset-md-1'>

                            <h2 className='fw-700 text-center'>
                                Application Security Posture Management
                            </h2>

                            <p className='text-center'>
                                ASPM is a compliance tool that enables organizations to create visibility into their technology stack and measure portfolio risk.  It aggregates data from all your security tool and provides a security score and actionable recommedations to increase security posture.
                            </p>

                        </div>

                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6'>
                            <div className='panel mt-3'>
                                <h3>Without Securestate</h3>
                                <ul>
                                    <li>
                                        <span className='cross'>
                                            <box-icon name='x' color='#e61610'></box-icon>
                                        </span>
                                        Historical data on mulitple services and tools
                                    </li>
                                    <li>
                                        <span className='cross'>
                                            <box-icon name='x' color='#e61610'></box-icon>
                                        </span>
                                        Empolyee Turnover creates loss of critical tribal knowledge
                                    </li>
                                    <li>
                                        <span className='cross'>
                                            <box-icon name='x' color='#e61610' ></box-icon>
                                        </span>
                                        Inability to measure effectiveness of cybersecurity program
                                    </li>
                                    <li>
                                        <span className='cross'>
                                            <box-icon name='x' color='#e61610' ></box-icon>
                                        </span>
                                        Manual administrative tasks to manage tech stack
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='panel mt-3'>
                                <h3>With Securestate</h3>
                                <ul>
                                    <li>
                                        <span className='tick'>
                                            <box-icon name='check' color='#72bb53'></box-icon>
                                        </span>
                                        Centrazalize all critical application data in a single place
                                    </li>
                                    <li>
                                        <span className='tick'>
                                            <box-icon name='check' color='#72bb53'></box-icon>
                                        </span>
                                        Create business continuity for mission critical applications
                                    </li>
                                    <li>
                                        <span className='tick' >
                                            <box-icon name='check' color='#72bb53'></box-icon>
                                        </span>
                                        Clearly communicate ROI of your security investment
                                    </li>
                                    <li>
                                        <span className='tick'>
                                            <box-icon name='check' color='#72bb53'></box-icon>
                                        </span>
                                        Automate application security posture management
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>

                            <h2 className='fw-700'>
                                Centralize Data
                            </h2>

                            <p className=''>
                                Bring disparate data from your security toolset into a centralized platform.  Traditional security involves many tools and tons of unfiltered data, and results in ineffective action. Securestate brings all your data into a single place, empowering developers to effectively prioritize and mitigate security issues
                            </p>

                            <a href='https://www.securestate.io/demo' className='btn btn-primary'>
                                Learn More
                            </a>

                        </div>

                        <div className='col-md-6 d-flex align-items-center justify-content-center'>
                            <Slide direction='right' triggerOnce='ture'>
                                <img src={CentralizeDataImage} className='img-fluid mt-3' width={300} />
                            </Slide>
                        </div>

                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className='container'>
                    <div className='row align-items-center'>


                        <div className='col-md-6 d-flex align-items-center justify-content-center'>
                        <Slide direction='left' triggerOnce='ture'>
                            <img src={PrioritzeRiskImage} className='img-fluid mb-3' width={300} />
                            </Slide>
                        </div>

                        <div className='col-md-6'>

                            <h2 className='fw-700'>
                                Prioritize Risk
                            </h2>

                            <p className=''>
                                Traditional tools produce false positives and unactionable data which creates confusion on what to proritize. The securestate platform shows reliable findings and provides actionable recommendations and access to our  security researchers for additional support.
                            </p>

                            <button className='btn btn-primary'>
                                Learn More
                            </button>

                        </div>

                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className='container'>
                    <div className='row align-items-center'>




                        <div className='col-md-6'>

                            <h2 className='fw-700'>
                                Actionable Recommendations
                            </h2>

                            <p className=''>
                                Our proactive approach enables DevOps teams to remediate findings based on actionable intelligence. We eliminate the overhead typically seen in consulting which allows our team to focus on testing. The result is end-to-end transparency and measurable ROI on cybersecurity investments.
                            </p>

                            <button className='btn btn-primary'>
                                Learn More
                            </button>

                        </div>

                        <div className='col-md-6 d-flex align-items-center justify-content-center'>
                        <Slide direction='right' triggerOnce='ture'>
                            <img src={ActionalbleRecommendationsImage} className='img-fluid mt-3' />
                            </Slide>
                        </div>

                    </div>
                </div>
            </section>

            <section className='py-5 bg-grey'>
                <div className='container'>
                    <div className='row py-5'>

                        <div className='col-md-6'>

                            <img src={AutorenewIconImage} width='40' />

                            <h3 className='fw-700 mt-3'>
                                Be The Winning Vendor
                            </h3>

                            <p className=''>
                                With the increasing threat to the supply chain, companies are requiring vendors to provide more transperancy into their software.  Security has become an integral part of the buying process. Our platform provides easy reporting features to show compliance for vendor requirements to secure your sales pipeline based on our proprietary vendor security framework
                            </p>

                        </div>

                        <div className='col-md-6'>
                            <img src={EmojiEventsiconImage} width='40' />

                            <h3 className='fw-700 mt-3'>
                                Create Business Continuity
                            </h3>

                            <p className=''>
                                As teams shift, so does critical tribal and technical knowledge which creates a security threat.  Our ASPM solution creates security continuity through the lifetime of your product and centralizes important historical data to ensure highly consistent security standards. Automatation of manual admin tasks enables developers to focus on the design, development and operation of secure solutions
                            </p>



                        </div>



                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className='container'>
                    <div className='row align-items-center py-4'>
                        <div className='col-md-8 offset-md-2 d-flex align-items-center flex-column justify-content-center'>

                            <h2 className='fw-700 text-center'>
                                Sell Security as a Benefit
                            </h2>

                            <p className='text-center'>
                                Use security as a sales differentiator when speaking with prospective clients.  Most organizations wait until the end of the sales cycle, which creates an oppurtunity.
                            </p>

                            <button className='btn btn-primary'>
                                Learn More
                            </button>



                        </div>

                    </div>


                </div>
            </section>

        </div>
    )
}

export default Design;
