import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";
import DesignwithSecutiyImage from '../../assets//images/threatModeling/DesignwithSecutiy.png'
import ActionableReportImage from '../../assets/images/threatModeling/ActionableReport.png'
import HowitWorksImage from '../../assets/images/icons/Step1.svg'
import HowitWorks2Image from '../../assets/images/icons/Step2.svg'
import HowitWorks3Image from '../../assets/images/icons/Step3.svg'
import ThumbsDownImage from '../../assets/images/icons/ThumbsDown.svg'
import ThumbsUpImage from '../../assets/images/icons/ThumbsUp.svg'
import SecurityDrivenDesignImage from '../../assets/images/icons/SecurityDrivenDesign.svg'
import FlexibleTermsImage from '../../assets/images/icons/FlexibleTerms.svg'

function Develop() {
    return (
        <div>
            <header className='header d-flex align-items-center'>

                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>

                            <h1 className='fw-700'>
                                Design with Security in Mind
                            </h1>

                            <p>
                                Bring security to the table on day one with a design review before you write a single line of code.
                            </p>

                            <a href='https://calendly.com/securestate/lets-talk-security?month=2022-03' target="_blank" className='btn btn-primary'>
                                Get a theat Model
                            </a>
                        </div>
                        <div className='col-md-6 d-flex justify-content-center'>
                            <Slide direction='right' triggerOnce='true'>
                                <img src={DesignwithSecutiyImage} className='img-fluid mt-4' />
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
                                What is Threat Model as a Service (TMaaS)
                            </h2>

                            <p className='text-center'>
                                Understanding your threats is a critical part of secure design.  Just as you build features for your users, you build defenses for your threats. Threat modeling is the process of analyzing your assets, attack surfaces, and threats, and building defenses in from day one.
                            </p>

                        </div>

                    </div>


                </div>
            </section>


            <section className='py-5'>
                <div className='container'>
                    <div className='row align-items-center'>


                        <div className='col-md-4 d-flex align-items-center justify-content-center'>
                            <Slide direction='left' triggerOnce='true'>
                                <img src={ActionableReportImage} className='img-fluid' width={300} />
                            </Slide>
                        </div>

                        <div className='col-md-8'>

                            <h3 className='fw-700'>
                                Actionable Report
                            </h3>

                            <p>
                                Our threat Models are easy to read and allow for developers to effectively prevent the introduction of common vulnerabilities into software.  As an added bonus, Threat Model will test bugs during Penetration testing free of charge that are discovered during the design phase.
                            </p>

                            <h3 className='fw-700 mt-5'>
                                Efficient Delivery
                            </h3>

                            <p>
                                Traditional threat modeling is expensive and delivered by top dollar consulting  firms.  With lead times of 4-6 weeks and costs as high as $10-20K, traditional threat modeling is out of reach for most. The Threat Model platform provides high quality threat models within days at a fraction of the cost delivered by highly expierenced security researchers.
                            </p>


                        </div>

                    </div>
                </div>
            </section>


            <section className='py-5 bg-grey how-it-works'>
                <div className='container'>
                    <div className='row py-5'>

                        <div className='col-12'>
                            <h2 className='fw-700 text-center color-orange mb-5'>
                                How It Works
                            </h2>
                        </div>

                        <div className='col-md-4'>
                            <Fade>
                                <div className='box d-flex align-items-center flex-column'>
                                    <img src={HowitWorksImage} width='80' />
                                    <h5>
                                        Submit request

                                        on the asset
                                    </h5>
                                </div>
                            </Fade>


                        </div>

                        <div className='col-md-4'>
                            <Fade>
                                <div className='box d-flex align-items-center flex-column'>
                                    <img src={HowitWorks2Image} width='80' />


                                    <h5>
                                        Schedule design

                                        review with our

                                        security team
                                    </h5>
                                </div>
                            </Fade>
                        </div>

                        <div className='col-md-4'>
                            <Fade>
                                <div className='box d-flex align-items-center flex-column'>
                                    <img src={HowitWorks3Image} width='80' />


                                    <h5>
                                        Recieve threat

                                        model
                                    </h5>
                                </div>
                            </Fade>
                        </div>

                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className='container'>
                    <div className='row align-items-center py-4'>
                        <div className='col-md-8 offset-md-2 d-flex align-items-center flex-column justify-content-center'>

                            {/* <h2 className='fw-700 text-center'>
                                Sell Security as a Benefit
                            </h2> */}

                            <h5 className='text-center'>
                                Use security as a sales differentiator when speaking with prospective clients.  Most organizations wait until the end of the sales cycle, which creates an oppurtunity.
                            </h5>
                           

                            <a href='https://calendly.com/securestate/lets-talk-security?month=2022-03' target="_blank" className='btn btn-primary'>
                                Learn More
                            </a>



                        </div>

                    </div>


                </div>
            </section>


            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>

                            <div className='lie-truth-panel'>
                                <div className='img'>
                                    <img src={ThumbsDownImage} width={80}></img>
                                </div>
                                <div className='content'>
                                    <h2 className='fw-700'>
                                    FICTION:
                                    </h2>

                                    <p>
                                        Security testing should be performed towards the end of the development lifecycle before it is released to customers.
                                    </p>
                                </div>
                            </div>

                            <div className='lie-truth-panel'>
                                <div className='img'>
                                    <img src={ThumbsUpImage} width={80}></img>
                                </div>
                                <div className='content'>
                                    <h2 className='fw-700'>
                                        FACT:
                                    </h2>

                                    <p >
                                        Discovering a bug in the design phase can cost a fraction of the price of finding in it production.  Security done earlier is significantly cheaper then dealing with it in production.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>


            <section className='py-5 bg-orange'>
                <div className='container'>
                    <div className='row py-5'>

                        <div className='col-md-6'>

                            <img src={FlexibleTermsImage} width='40' className='filter-light' />
                            <h3 className='fw-700 mt-3 color-light'>
                                Flexible Terms
                            </h3>

                            <p className='color-light'>
                                Traditional methods of getting cybersecurity resources include long lead times and high hourly rates.  With the increasing talent gap in cybersecurity, finding and retaining talent is becoming difficult. The Threat Model platform provides affordable pricing plans and the ability to purchase add on services.
                            </p>

                        </div>

                        <div className='col-md-6'>

                            <img src={SecurityDrivenDesignImage} width='40' className='filter-light' />

                            <h3 className='fw-700 mt-3 color-light'>
                                Security Driven Product Design
                            </h3>

                            <p className='color-light'>
                                The traditional SDLC is broken.  Security is an afterthought and  creates highers costs the further in the SDLC that it is performed. The Threat Model approach incorprates security from day one, by providing a tool for developers to easily generate threat models and discuss with vetted, expierenced Product Security Engineers.
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
                                Get Ahead of Threats With Threat Modeling
                            </h2>

                            <p className='text-center'>
                            Security is cheaper if implemented earlier. Threat models provide an instant ROI by eliminating >90% of the common vulnerabilities discovered at the end of the development lifecycle.  Bugs found later in the lifecycle require additional developer hours and impact the release timeline.
                            </p>

                            <a href='https://calendly.com/securestate/lets-talk-security?month=2022-03' target="_blank" className='btn btn-primary'>
                                Start Threat Model
                            </a>



                        </div>

                    </div>


                </div>
            </section>
        </div>
    )
}

export default Develop;
