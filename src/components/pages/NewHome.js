import React, { useState } from 'react'
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import TextTransition, { presets } from "react-text-transition";
import Banner from '../../assets/images/landing/banner.png'
import PlatformThreat from '../../assets/images/landing/platform.png'
import Accordion from 'react-bootstrap/Accordion';
import ThreatModelasaServiceLogo from '../../assets/images/icons/ThreatModelasaServiceLogo.svg'
import ASPMlogo from '../../assets/images/icons/ASPMlogo.svg'
import ManagPlatform from '../../assets/images/home/ManagedPlatform.svg'
import PentestasaService from '../../assets/images/icons/PentestasaService.svg'
import icon1 from '../../assets/images/landing/icon1.png'
import icon2 from '../../assets/images/landing/icon2.png'
import icon3 from '../../assets/images/landing/icon3.png'
import icon4 from '../../assets/images/landing/icon4.png'
import icon5 from '../../assets/images/landing/icon5.png'
import icon6 from '../../assets/images/landing/icon6.png'
import icon7 from '../../assets/images/landing/icon7.png'
import icon8 from '../../assets/images/landing/icon8.png'
import icon9 from '../../assets/images/landing/icon9.png'
import icon10 from '../../assets/images/landing/icon10.png'

function NewHome() {
    const BannerText = [
        "With 360-Degree Coverage",
        "Made Affordable",
        "Simplified",
        "Fully Managed"
    ];

    const DevSecOpsText = [
        "Eliminating the chaos within application security",
        "Centralize security data from mulitple sources into a single dashboard",
        "Manage your application security program from a single program",
        " End to end security management of your product development lifecycle"
    ];

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className='pt-6'>
            <div className='ribbon py-2'>
                <div className='container'>
                    <div className='row'>
                        <div className='col d-flex flex-start align-items-center justify-content-between'>
                            <p className='mb-0 fw-600 mr-3'>Do you know your security posture?</p>
                            <a href='https://calendly.com/securestate/lets-talk-security?month=2022-03' target="_blank" className='btn d-flex align-items-center px-0'><box-icon name="chat" color="#578fff"></box-icon> <div className='mx-2'>Get a Free Assistant</div> </a>
                        </div>
                    </div>
                </div>
            </div>

            <header className='header d-flex align-items-center'>

                <div className='container'>
                    <Fade>
                        <div className='row'>
                            <div className='col-md-10 heading offset-md-1'>
                                <h1 className='d-flex justify-content-center color-primary fw-400'>
                                    Platform Security,&nbsp;<TextTransition
                                        text={BannerText[index % BannerText.length]}
                                        springConfig={presets.wobbly}
                                    />
                                </h1>

                                <p className='d-flex justify-content-center text-center'>
                                SecureState Cloud Security Platform makes the complex simple with customized vetted strategies that identify risks, detect threats, and implement security controls through a data driven framework
                                </p>

                                <img src={Banner} className="banner-image" />


                            </div>

                        </div>
                    </Fade>

                </div>

            </header>

            <section className='py-5'>
                <div className='banner'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h4>Do you know your security posture?</h4>
                            <p>Take the first step towards security and get a free vulnerability assessment to understand your threats and vulnerabilities </p>
                            <a className="btn btn-primary  px-3">Get A Free Assessment</a>
                        </div>
                    </div>
                </div>

            </section>

            <section className='py-5'>
                <div className='container'>
                    <div className='row align-items-center'>


                        <div className='col-md-7 d-flex align-items-center justify-content-center'>

                            <img src={PlatformThreat} className='img-fluid mb-3' />

                        </div>

                        <div className='col-md-5'>

                            <h3 className='fw-300 col-400px'>
                                Addressing The Top 10 Threats To The Platform
                            </h3>

                            <hr />

                            <p className=''>
                                The SecureState framework addresses the most common threats ecommerce platforms face and provides users with...
                            </p>

                            <ul className='square-list'>
                                <li>Real Time & Actionable Intelligence</li>
                                <li>Affordable & Transparent Pricing</li>
                                <li>Dedicated Product Security Engineer</li>
                            </ul>



                            <ul className='threats-list'>
                                <li>
                                    <img src={icon1} />
                                    <div>APIs</div>
                                </li>
                                <li>
                                    <img src={icon2} />
                                    <div>SQL Injections</div>
                                </li>
                                <li>
                                    <img src={icon3} />
                                    <div>Plug-Ins</div>
                                </li>
                                <li>
                                    <img src={icon4} />
                                    <div>Firewall</div>
                                </li>
                                <li>
                                    <img src={icon5} />
                                    <div>Open Source</div>
                                </li>
                                <li>
                                    <img src={icon6} />
                                    <div>Cross Site</div>
                                </li>
                                <li>
                                    <img src={icon7} />
                                    <div>Payments Gateway</div>
                                </li>
                                <li>
                                    <img src={icon8} />
                                    <div>3rd Party Libraries</div>
                                </li>
                                <li>
                                    <img src={icon9} />
                                    <div>Injections</div>
                                </li>
                                <li>
                                    <img src={icon10} />
                                    <div>Database</div>
                                </li>
                            </ul>

                            <a href='https://calendly.com/securestate/lets-talk-security?month=2022-03' target="_blank" className='btn btn-primary'>
                                Learn more
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className='container'>
                    <div className='row mb-5'>
                        <div className='col text-center d-flex align-items-center flex-column'>
                            <h1 className='fw-300'>Platform Features</h1>
                            <hr />
                        </div>
                    </div>
                    <div className='row align-items-center'>


                        <div className='col-md-4'>
                            <div className='panel-card'>
                                <div className='color-primary mb-2'>FEATURE 1</div>
                                <h4 className='fw-300'>Regular Vulnerability Scanning
                                </h4>
                                <p>We use a comprehensive dynamic analysis security tool to uncover vulnerabilities within your platform. Our testing goes beyond OWASP top ten and leverage manual testing to dive deeper where needed to provide maximum coverage</p>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='panel-card'>
                                <div className='color-primary mb-2'>FEATURE 1</div>
                                <h4 className='fw-300'>Regular Vulnerability Scanning
                                </h4>
                                <p>We use a comprehensive dynamic analysis security tool to uncover vulnerabilities within your platform. Our testing goes beyond OWASP top ten and leverage manual testing to dive deeper where needed to provide maximum coverage</p>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='panel-card'>
                                <div className='color-primary mb-2'>FEATURE 1</div>
                                <h4 className='fw-300'>Regular Vulnerability Scanning
                                </h4>
                                <p>We use a comprehensive dynamic analysis security tool to uncover vulnerabilities within your platform. Our testing goes beyond OWASP top ten and leverage manual testing to dive deeper where needed to provide maximum coverage</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className='py-5 d-flex align-items-center color-bg-primary-light'>

                <div className='container'>
                    <div className='row align-items-center my-5'>
                        <div className='col text-center d-flex align-items-center flex-column'>
                            <h1 className='fw-300'>Simplifying Platform Security</h1>
                            <hr />
                            <p>We use a comprehensive dynamic analysis security tool to uncover vulnerabilities within your platform. Our testing goes beyond OWASP top ten and leverage manual testing to dive deeper where needed to provide maximum coverage</p>
                        </div>


                    </div>

                    <div className='row align-items-center'>
                        <div className='col-md-8 offset-md-2'>

                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <div className='d-flex flex-column'>
                                            <strong className='mb-2'>It is Hard to Know Where to Start</strong>
                                            <p>Cybersecurity is complicated, figuring out where to start can be a daunting task that curtail a security program before it gets off the ground.</p>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            SecureState Will Help You Understand
                                        </p>

                                        <p>
                                            The SecureState platform performs a vulnerability assessment that allows us to understand your technology stack, and its unique threats and vulnerabilities. We use a hybrid approach, leveraging automated tools and manual testing to achieve the highest level of coverage and build a custom strategy session.

                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <div className='d-flex flex-column'>
                                            <strong className='mb-2'>Cybersecurity is Expensive </strong>
                                            <p>
                                                Security Consultants charge $250+/hour and tools range between $50-500 making it out of reach for most startups and small businesses
                                            </p>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Affordable, Transparent Pricing

                                        </p>

                                        <p>
                                            Our pricing model is simple. We offer three levels of security billed monthly based on the size of our application and level of security you require.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <div className='d-flex flex-column'>
                                            <strong className='mb-2'>Complicated Buying Process</strong>
                                            <p>Cybersecurity is notoriously difficult to buy and implement.</p>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Simple, Efficient Onboarding
                                        </p>

                                        <p>
                                            We make the buying process simple and deliver ROI in the first 30 days

                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        <div className='d-flex flex-column'>
                                            <strong className='mb-2'>Too Many Tools</strong>
                                            <p>With hundreds of tools to choose from people suffer from buying fatigue </p>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Integrate Tools, Centralize Data
                                        </p>

                                        <p>
                                            SecureState centralizes security data into a single platform by integrating your security tools into our platform and filtering out false positives
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>

                        </div>

                    </div>
                </div>

            </section>


            <section className='solutions py-5'>
                <div className='container'>
                    <div className='row mb-5'>
                        <div className='col text-center d-flex align-items-center flex-column'>
                            <h1 className='fw-300'>Solutions</h1>
                            <hr />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-4'>
                            <Fade>
                                <Link to='/design'>
                                    <div className='card mb-3'>
                                        <div className='image mb-4'>
                                            <img src={ThreatModelasaServiceLogo} />
                                        </div>
                                        <h4 className='fw-300 text-center'>Threat Model as a  Service (TMaaS)</h4>
                                    </div>
                                </Link>
                            </Fade>

                        </div>
                        <div className='col-md-4'>
                            <Fade>
                                <Link to='/operate'>
                                    <div className='card mb-3'>
                                        <div className='image mb-4'>
                                            <img src={ASPMlogo} />
                                        </div>
                                        <h4 className='fw-300 text-center'>Pentest as a Service
                                            <br></br>
                                            (PTaaS)</h4>
                                    </div>
                                </Link>
                            </Fade>
                        </div>
                        <div className='col-md-4'>
                            <Fade>
                                <Link to='/develop'>
                                    <div className='card mb-3'>
                                        <div className='image mb-4'>
                                            <img src={PentestasaService} />
                                        </div>
                                        <h4 className='fw-300 text-center'>Application Security Posture

                                            Management (ASPM)</h4>
                                    </div>
                                </Link>
                            </Fade>
                        </div>
                    </div>



                </div>
            </section>

            <section className='py-5 color-bg-primary color-white'>
                <div className='container'>
                    <div className='row mb-5'>
                        <div className='col-md-12 text-center flex-column d-flex justify-content-center align-items-center'>
                            <h1 className='fw-300'>
                                By The Numbers
                            </h1>
                            <hr className='hr-white' />
                            <p className=''>Secure your technology stack today.</p>
                        </div>
                    </div>
                    <div className='row mb-5'>
                        <div className='col-md-4'>
                            <div className='counter'>
                                <h1>$
                                    <CountUp start={3000000} end={3920000} redraw={false} useEasing={true} separator=",">
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h1>
                                <p>Average cost of data breach</p>
                            </div>

                        </div>

                        <div className='col-md-4'>
                            <div className='counter'>
                                <h1>
                                    <CountUp start={24000} end={25575} redraw={false} useEasing={true} separator=",">
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h1>
                                <p>Number of Records Lost</p>
                            </div>

                        </div>

                        <div className='col-md-4'>
                            <div className='counter'>
                                <h1>$
                                    <CountUp start={50} end={150} redraw={false} useEasing={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h1>
                                <p>Cost of a Single Record</p>
                            </div>

                        </div>

                        <div className='col-12 mt-5 d-flex align-items-center justify-content-center'>
                            <a href='https://calendly.com/securestate/lets-talk-security?month=2022-03' target="_blank" className='btn btn-light btn-lg'>
                                Schedule a Demo Today
                            </a>
                        </div>
                    </div>
                </div>
            </section>







        </div>
    )
}

export default NewHome
