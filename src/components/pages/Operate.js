import React from 'react';
import { Slide } from "react-awesome-reveal";
import LapImage from '../../assets//images/penTesting/Lap.png'
import RealtTimeReportImage from '../../assets/images/penTesting/RealtTimeReport.png'
import RegresstionTestingImage from '../../assets/images/penTesting/RegresstionTesting.png'
import PrioritizeFindingImage from '../../assets/images/penTesting/PrioritizeFinding.png'
import Video from '../../assets/images/penTesting/PentestMarketingVideo.mp4'

function Operate() {
    return (
        <div>
            <header className='header d-flex align-items-center'>

                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>

                            <h1 className='fw-700'>
                                A Modern Approach to Penetration Testing
                            </h1>

                            <p>
                                Reduce the time from find to fix using real time data and actionable intelligence to enable developers to efficiently remediate bugs.
                            </p>

                            <a href='https://calendly.com/securestate/lets-talk-security?month=2022-03' target="_blank" className='btn btn-primary'>
                                Start a Pentest
                            </a>
                        </div>
                        <div className='col-md-6 d-flex justify-content-center'>
                            <Slide direction='up' triggerOnce='true'>
                                <img src={LapImage} className='img-fluid mt-3' />

                            </Slide>
                        </div>
                    </div>
                </div>

            </header>

            <section className='py-5'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-12'>
                            <h2 className='fw-700 text-center mb-5'>
                                Features
                            </h2>
                        </div>




                    </div>


                </div>
            </section>

            <section className='py-5'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>

                            <h3 className='fw-700'>
                                Real Time Reporting
                            </h3>

                            <p className=''>
                                Findings are reported in real time as they are identified allowing for DevOps teams to ﻿quickly remidate vulnerabilities and immediately increase security posture
                            </p>


                        </div>

                        <div className='col-md-6 d-flex align-items-center justify-content-center'>
                            <Slide direction='right' triggerOnce='true'>
                                <img src={RealtTimeReportImage} className='img-fluid' />
                            </Slide>
                        </div>

                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className='container'>
                    <div className='row align-items-center'>


                        <div className='col-md-6 d-flex align-items-center justify-content-center'>
                            <Slide direction='left' triggerOnce='true'>
                                <img src={RegresstionTestingImage} className='img-fluid mb-3' />
                            </Slide>
                        </div>

                        <div className='col-md-6'>

                            <h3 className='fw-700'>
                                Regression Testing
                            </h3>

                            <p className=''>
                                Regression testing is provided free of charge for the entirety of the subscription by our security researchers
                            </p>


                        </div>

                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className='container'>
                    <div className='row align-items-center'>




                        <div className='col-md-6'>

                            <h2 className='fw-700'>
                                Prioritize Findings
                            </h2>

                            <p className=''>
                                The platform provides actionable intelligence to help DevOps prioritize findings and ensure all bugs are patched appropriately
                            </p>


                        </div>

                        <div className='col-md-6 d-flex align-items-center justify-content-center'>
                            <Slide direction='right' triggerOnce='true'>
                                <img src={PrioritizeFindingImage} className='img-fluid' />
                            </Slide>
                        </div>

                    </div>
                </div>
            </section>

            <section className='py-5 bg-orange'>
                <div className='container'>
                    <div className='row py-5'>

                        <div className='col-12'>
                            <h2 className='fw-700 mb-5 color-light text-center'>
                                Benefits
                            </h2>
                        </div>

                        <div className='col-md-6'>


                            <h3 className='fw-700 mt-3 color-light'>
                                Be Compliant
                            </h3>

                            <p className='color-light'>
                                Compliance is complicated. Many companies struggle with compliance and its confusing requirements.  Penetration tests help address the compliance and security obligations that are mandated by industry standards and regulations such as PCI, HIPAA, FISMA, and  ISO 27001. Our methodology uses a combination of manual testing and automated tools to achieve the best coverage of your attack surface.
                            </p>

                        </div>

                        <div className='col-md-6'>



                            <h3 className='fw-700 mt-3 color-light'>
                                Identify & Remediate Vulnerabilities
                            </h3>

                            <p className='color-light'>
                                Recovering from a breach can cost millions of dollars and impacr your brands reputation.  Penetration testing helps identify and remediate vulnerabilities before they are explioted and prevent expensive breaches. Our methodology provides periodic penetration testing to optimize testing and provide ontinous testing throughout the product development lifecycle
                            </p>



                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className='container'>
                    <div className='row align-items-center py-4'>
                        <div className='col-md-8 offset-md-2 d-flex align-items-center flex-column justify-content-center'>
                            <video width="100%" controls>
                                <source src={Video} type="video/mp4" />
                                <source src={Video} type="video/ogg" />
                                Your browser does not support HTML video.
                            </video>

                            <h2 className='fw-700 text-center mt-5'>
                                Providing Real Time, Actionable Intelligence
                            </h2>

                            <p className='text-center'>
                                Findings are reported as they are discovered and provide the data you need to prioritize your risks & take action.  Our reporting includes data around severity, risk, finding details, and recommendations.
                            </p>

                            <a href='https://calendly.com/securestate/lets-talk-security?month=2022-03' target="_blank" className='btn btn-primary'>
                                Get a Pentest Today
                            </a>



                        </div>

                    </div>


                </div>
            </section>



        </div>
    )
}

export default Operate;
