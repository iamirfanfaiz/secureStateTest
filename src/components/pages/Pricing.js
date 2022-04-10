import React from 'react';
import { Slide } from "react-awesome-reveal";

import Accordion from 'react-bootstrap/Accordion';
function Pricing() {
    return (
        <div>
            <header className='pt-60 d-flex align-items-center'>

                <div className='container pt-5'>
                    <div className='row align-items-center py-5 pb-3'>
                        <div className='col-md-8 offset-md-2'>

                            <h1 className='fw-700 text-center mb-4'>
                            Simple, transparent pricing
                            </h1>

                            <p className='text-center mute'>
                                Plans are priced on a per single medium-complexity web application basis.  For pricing on Mobile Apps, APIs or AWS Cloud email: support@securestate.io
                            </p>

                        </div>

                    </div>
                </div>

            </header>

            <section className='py-5'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12'>

                            <Slide direction='up' triggerOnce='true'>
                                <div className='plan'>

                                    <div className='plan-col'>
                                        <div className='head d-flex align-items-start flex-column'>
                                            <div className='fs-md'>Select Plan</div>
                                            <button className='btn btn-primary mt-3'>Monthly</button>
                                        </div>

                                        <div className='body'>
                                            <ul className='features'>
                                                <li>
                                                    <span className='feature'>
                                                        Application Security Posture Management
                                                    </span>

                                                </li>
                                                <li>
                                                    <span className='feature'>
                                                        Vulnerability Assessment
                                                    </span>

                                                </li>
                                                <li>
                                                    <span className='feature'>
                                                        Security Review
                                                    </span>

                                                </li>
                                                <li>
                                                    <span className='feature'>
                                                        Penetration Testing
                                                    </span>

                                                </li>
                                                <li>
                                                    <span className='feature'>
                                                        Threat Modeling
                                                    </span>

                                                </li>
                                                <li>
                                                    <span className='feature'>
                                                        Quarterly Business Reviews
                                                    </span>

                                                </li>
                                                <li>
                                                    <span className='feature'>
                                                        Cybersecurity Program Manager
                                                    </span>

                                                </li>
                                            </ul>
                                        </div>

                                        <div className='foot'>

                                        </div>

                                    </div>

                                    <div className='plan-col'>
                                        <div className='head d-flex align-items-center flex-column'>
                                            <div className='fs-xs'>Operate</div>
                                            <div className='fs-lg'><sup>$</sup>199</div>
                                            <div className='fs-xs mute'>Starting at /app</div>
                                        </div>

                                        <div className='body'>
                                            <ul className='features'>
                                                <li className='justify-content-center'>
                                                    <span className='feature d-block d-sm-block d-md-none'>
                                                        Application Security Posture Management
                                                    </span>
                                                    <span className='d-none d-md-block text-center'>
                                                        <box-icon name='check' color='#000'></box-icon>
                                                    </span>
                                                </li>
                                                <li className='justify-content-center'>
                                                    <span className='feature d-block d-sm-block d-md-none'>
                                                        Vulnerability Assessment
                                                    </span>
                                                    <span className='d-none d-md-block text-center'>
                                                        <box-icon name='check' color='#000'></box-icon>
                                                    </span>
                                                </li>
                                                <li className='justify-content-center d-none d-md-block text-center'>
                                                    <span className='feature d-none'>
                                                        Security Review
                                                    </span>
                                                    <span className='d-none d-md-block text-center'>
                                                        <box-icon name='minus' color='#c9d3dd'></box-icon>
                                                    </span>
                                                </li>
                                                <li className='justify-content-center d-none d-md-block text-center'>
                                                    <span className='feature d-none'>
                                                        Penetration Testing
                                                    </span>
                                                    <span className='d-none d-md-block text-center'>
                                                        <box-icon name='minus' color='#c9d3dd'></box-icon>
                                                    </span>
                                                </li>
                                                <li className='justify-content-center d-none d-md-block text-center'>
                                                    <span className='feature d-none'>
                                                        Threat Modeling
                                                    </span>
                                                    <span className='d-none d-md-block text-center'>
                                                        <box-icon name='minus' color='#c9d3dd'></box-icon>
                                                    </span>
                                                </li>
                                                <li className='justify-content-center d-none d-md-block text-center'>
                                                    <span className='feature d-none'>
                                                        Quarterly Business Reviews
                                                    </span>
                                                    <span className='d-none d-md-block text-center'>
                                                        <box-icon name='minus' color='#c9d3dd'></box-icon>
                                                    </span>
                                                </li>
                                                <li className='justify-content-center d-none d-md-block text-center'>
                                                    <span className='feature d-none'>
                                                        Cybersecurity Program Manager
                                                    </span>
                                                    <span className='d-none d-md-block text-center'>
                                                        <box-icon name='minus' color='#c9d3dd'></box-icon>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className='foot'>
                                            <a href='https://www.securestate.io/demo' className='btn btn-primary'>SELECT PLAN</a>
                                        </div>

                                    </div>
                                    <div className='plan-col'>
                                        <div className='head d-flex align-items-center flex-column'>
                                            <div className='fs-xs'>Develop + Operate</div>
                                            <div className='fs-lg'><sup>$</sup>999</div>
                                            <div className='fs-xs mute'>Starting at /app</div>
                                        </div>

                                        <div className='body'>
                                            <ul className='features'>
                                                <li className='justify-content-center'>
                                                    <span className='feature d-block d-sm-block d-md-none'>
                                                        Application Security Posture Management
                                                    </span>
                                                    <span className='d-none d-md-block text-center'>
                                                        <box-icon name='check' color='#000'></box-icon>
                                                    </span>
                                                </li>
                                                <li className='justify-content-center'>
                                                    <span className='feature d-block d-sm-block d-md-none'>
                                                        Vulnerability Assessment
                                                    </span>
                                                    <span className='d-none d-md-block text-center'>
                                                        <box-icon name='check' color='#000'></box-icon>
                                                    </span>
                                                </li>
                                                <li className='justify-content-center'>
                                                    <span className='feature d-block d-sm-block d-md-none'>
                                                        Security Review
                                                    </span>
                                                    <span className='d-none d-md-block text-center'>
                                                        <box-icon name='check' color='#000'></box-icon>
                                                    </span>
                                                </li>
                                                <li className='justify-content-center'>
                                                    <span className='feature d-block d-sm-block d-md-none'>
                                                        Penetration Testing
                                                    </span>
                                                    <span className='d-none d-md-block text-center'>
                                                        <box-icon name='check' color='#000'></box-icon>
                                                    </span>
                                                </li>
                                                <li className='justify-content-center d-none d-md-block text-center'>
                                                    <span className='feature d-none'>
                                                        Threat Modeling
                                                    </span>
                                                    <span className='d-none d-md-block text-center'>
                                                        <box-icon name='minus' color='#c9d3dd'></box-icon>
                                                    </span>
                                                </li>
                                                <li className='justify-content-center d-none d-md-block text-center'>
                                                    <span className='feature d-none'>
                                                        Quarterly Business Reviews
                                                    </span>
                                                    <span className='d-none d-md-block text-center'>
                                                        <box-icon name='minus' color='#c9d3dd'></box-icon>
                                                    </span>
                                                </li>
                                                <li className='justify-content-center'>
                                                    <span className='feature d-block d-sm-block d-md-none'>
                                                        Cybersecurity Program Manager
                                                    </span>
                                                    <span className='d-none d-md-block text-center'>
                                                        <box-icon name='check' color='#000'></box-icon>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className='foot'>
                                            <a href='https://www.securestate.io/demo' className='btn btn-primary'>SELECT PLAN</a>
                                        </div>

                                    </div>
                                    <div className='plan-col'>
                                        <div className='head d-flex align-items-center flex-column'>
                                            <div className='fs-xs'>Design + Develop + Operate</div>
                                            <div className='fs-lg'><sup>$</sup>2,499</div>
                                            <div className='fs-xs mute'>Starting at /app</div>
                                        </div>

                                        <div className='body'>
                                            <ul className='features'>
                                                <li className='justify-content-center'>
                                                    <span className='feature d-block d-sm-block d-md-none'>
                                                        Application Security Posture Management
                                                    </span>
                                                    <span className='d-none d-md-block text-center'>
                                                        <box-icon name='check' color='#000'></box-icon>
                                                    </span>
                                                </li>
                                                <li className='justify-content-center'>
                                                    <span className='feature d-block d-sm-block d-md-none'>
                                                        Vulnerability Assessment
                                                    </span>
                                                    <span className='d-none d-md-block text-center'>
                                                        <box-icon name='check' color='#000'></box-icon>
                                                    </span>
                                                </li>
                                                <li className='justify-content-center'>
                                                    <span className='feature d-block d-sm-block d-md-none'>
                                                        Security Review
                                                    </span>
                                                    <span className='d-none d-md-block text-center'>
                                                        <box-icon name='check' color='#000'></box-icon>
                                                    </span>
                                                </li>
                                                <li className='justify-content-center'>
                                                    <span className='feature d-block d-sm-block d-md-none'>
                                                        Penetration Testing
                                                    </span>
                                                    <span className='d-none d-md-block text-center'>
                                                        <box-icon name='check' color='#000'></box-icon>
                                                    </span>
                                                </li>
                                                <li className='justify-content-center'>
                                                    <span className='feature  d-block d-sm-block d-md-none'>
                                                        Threat Modeling
                                                    </span>
                                                    <span className='d-none d-md-block text-center'>
                                                        <box-icon name='check' color='#000'></box-icon>
                                                    </span>
                                                </li>
                                                <li className='justify-content-center'>
                                                    <span className='feature  d-block d-sm-block d-md-none'>
                                                        Quarterly Business Reviews
                                                    </span>
                                                    <span className='d-none d-md-block text-center'>
                                                        <box-icon name='check' color='#000'></box-icon>
                                                    </span>
                                                </li>
                                                <li className='justify-content-center'>
                                                    <span className='feature d-block d-sm-block d-md-none'>
                                                        Cybersecurity Program Manager
                                                    </span>
                                                    <span className='d-none d-md-block text-center'>
                                                        <box-icon name='check' color='#000'></box-icon>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className='foot'>
                                            <a href='https://www.securestate.io/demo' className='btn btn-primary'>SELECT PLAN</a>
                                        </div>

                                    </div>

                                </div>
                            </Slide>




                        </div>

                    </div>


                </div>
            </section>


            <section className='py-5 d-flex align-items-center'>

                <div className='container pt-5'>
                    <div className='row align-items-center'>
                        <div className='col-md-12'>

                            <h2 className='fw-700 text-center mb-2 color-orange'>
                                Frequently Asked Questions
                            </h2>

                            {/* <p className='text-center mute'>
                                Use this section to reassure customers by proactively addressing their questions and concerns.
                            </p> */}

                        </div>

                    </div>
                </div>

            </section>

            <section className='pb-5 d-flex align-items-center'>

                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6 offset-md-3'>

                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What integrations do you offer?</Accordion.Header>
                                    <Accordion.Body>
                                        <p className='mute'>
                                            We are constantly working on integrations to add to our platform from popular bug tracking tools, dynamic analysis security tools, static analysis security tools and other application security tools.
                                        </p>

                                        <p className='mute'>
                                            To see what we have we have to offer, or suggest one, email <a href='mailto:support@securestate.io'>support@securestate.io</a>
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What if I don't know what security I need?</Accordion.Header>
                                    <Accordion.Body>
                                        <p className='mute'>Not a problem! Our mission is to simplify the cybersecurity process and create an easy way for product leaders to integrate security and prove it.</p>

                                        <p className='mute'>
                                            We provide 3 subscription levels that each offer their own level of security based on your needs and risk appetite.
                                        </p>
                                        <p className='mute'>
                                            We will provide a free consultation to help determine what's the best option.  Schedule a call now! <a href='https://calendly.com/securestate/lets-talk-security' target='_blank'>https://calendly.com/securestate/lets-talk-security</a>
                                        </p>


                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>What about my existing security tools?</Accordion.Header>
                                    <Accordion.Body>
                                        <p className='mute'>
                                            Our DevSecOps platform integrates with many of the most popular security tools to enable you to continue to leverage your existing security solutions.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                              
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>What if I just need a penetration test?</Accordion.Header>
                                    <Accordion.Body>
                                        <p className='mute'>
                                        SecureState offers one time penetration testing or threat modeling services, for a quote reach out to sales@securestate.io
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Do you offer add on services?</Accordion.Header>
                                    <Accordion.Body>
                                        <p className='mute'>
                                        SecureState offers a variety of security services that are carried out by highly experienced Product Security Engineers.  Some of the services offered include...</p>
                                        <ul className='mute fs-xs'>
                                            <li>Penetration Tests</li>
                                            <li>Threat Models</li>
                                            <li>Code Review</li>
                                            <li>Security Review</li>
                                            <li>Strategic Program Planning</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>

                        </div>

                    </div>
                </div>

            </section>


        </div>
    )
}

export default Pricing;
