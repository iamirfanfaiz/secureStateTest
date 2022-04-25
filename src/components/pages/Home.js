import React, { useState } from 'react'
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import SDLCImage from '../../assets/images/icons/SDLC.png'
import DESIGNSecurity from '../../assets/images/icons/DESIGNSecurity.gif'
import DEVELOPSecurity from '../../assets/images/icons/DEVELOPSecurity.gif'
import OPERATESecurity from '../../assets/images/icons/OPERATESecurity.gif'
import DesignwSecuritylogo from '../../assets/images/icons/DesignwSecuritylogo.svg'
import DevelopwSecuritylogo from '../../assets/images/icons/DevelopwSecuritylogo.svg'
import OperatewSecuritylogo from '../../assets/images/icons/OperatewSecuritylogo.svg'
import ThreatModelasaServiceLogo from '../../assets/images/icons/ThreatModelasaServiceLogo.svg'
import ASPMlogo from '../../assets/images/icons/ASPMlogo.svg'
import ManagPlatform from '../../assets/images/home/ManagedPlatform.svg'
import PentestasaService from '../../assets/images/icons/PentestasaService.svg'
import ShiftLeftlogo from '../../assets/images/icons/shiftlefticon.svg'
import CapabilityGaplogo from '../../assets/images/icons/CapabilityGaplogo.svg'
import ActionableIntelligencelogo from '../../assets/images/icons/ActionableIntelligence.svg'
import AwsImage from '../../assets/images/clients/aws.png'
import GoogleImage from '../../assets/images/clients/google.png'
import NintendoImage from '../../assets/images/clients/Nintendo-Logo.png'
import OracleImage from '../../assets/images/clients/Oracle-Logo.png'
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import TextTransition, { presets } from "react-text-transition";
import ActionableIntel from '../../assets/images/northstar/ACTIONABLEINTELIGENCE.svg'
import CapabilityGap from '../../assets/images/northstar/CAPABILITYGAP.svg'
import ShiftLefts from '../../assets/images/northstar/SHIFTLEFT.svg'
import PlatformThreat from '../../assets/images/home/platformthreat.svg'
import IndustryCompliacted from '../../assets/images/icons/problems/industrycompliacted.png'
import industryExpensive from '../../assets/images/icons/problems/industryexpensive.png'
import industryQuestionmark from '../../assets/images/icons/problems/industryquestionmark.png'
import industryToomanytools from '../../assets/images/icons/problems/industrytoomanytools.png'
import SSaffordable from '../../assets/images/icons/problems/SSaffordable.png'
import SSCentralize from '../../assets/images/icons/problems/SSCentralize.png'
import SShelpyou from '../../assets/images/icons/problems/SShelpyou.png'
import SSOnboarding from '../../assets/images/icons/problems/SSOnboarding.png'

function Home() {
    const BannerText = [
        "Delivered Effectively",
        "With Flexible Terms",
        "End to End",
        "With 360 Degree Coverage",
        "Simplified"
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
            <header className='header d-flex align-items-center'>

                <div className='container'>
                    <Fade>
                        <div className='row'>
                            <div className='col-md-12 heading'>
                                <h1 className='fw-700 d-flex justify-content-center'>
                                    Platform Security,&nbsp;<TextTransition
                                        text={BannerText[index % BannerText.length]}
                                        springConfig={presets.wobbly}
                                    />
                                </h1>


                                <p className='d-flex justify-content-center mute'>
                                    A Product Security as a Service (PSaaS) platform integrating security at every phase of the product development lifecycle
                                </p>

                                <a href='https://calendly.com/securestate/lets-talk-security?month=2022-03' target="_blank" className='btn btn-secondary'>
                                    Learn more
                                </a>
                            </div>

                        </div>
                    </Fade>

                </div>

            </header>

            <div className='ribbon py-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col d-flex align-items-center justify-content-center'>
                            <p className='mb-0 fw-600 mr-3'>Do you know your security posture?</p> <a href='https://calendly.com/securestate/lets-talk-security?month=2022-03' target="_blank" className='btn btn-light'>Get a free Assessment</a>
                        </div>
                    </div>
                </div>

            </div>

            <section className='py-5'>
                <div className='container'>
                    <div className='row align-items-center'>


                        <div className='col-md-6 d-flex align-items-center justify-content-center'>

                            <img src={PlatformThreat} className='img-fluid mb-3' />

                        </div>

                        <div className='col-md-6'>

                            <h3 className='fw-700'>
                                Addressing The Top 10 Threats To The Platform
                            </h3>

                            <p className=''>
                                The SecureState framework addresses the most common threats ecommerce platforms face and provides users with...
                            </p>

                            <ul>
                                <li>Real Time & Actionable Intelligence</li>
                                <li>Affordable & Transparent Pricing</li>
                                <li>Dedicated Product Security Engineer</li>
                            </ul>

                            <a href='https://calendly.com/securestate/lets-talk-security?month=2022-03' target="_blank" className='btn btn-primary'>
                                Learn more
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <section className='services py-5'>
                <div className='container'>
                    <div className='row mb-4'>
                        <div className='col-md-12 text-center'>
                            <h1 className='fw-700 mb-4'>
                                Platform Features
                            </h1>

                        </div>
                    </div>


                    <div className='row'>

                        <div className='col-md-4'>

                            <div className='feature'>
                                <div className='label'>Feature #1</div>
                                <h2>Supply Chain Vulnerability Scanning</h2>
                                <p className='mute'>
                                    The supply chain is an increasing attack vector by hackers who target vulnerable components of your software. The SecureState platform regularly scans and reports on vulnerabilities at the component level of your platform to secure your supply chain.
                                </p>
                            </div>

                        </div>

                        <div className='col-md-4'>

                            <div className='feature'>
                                <div className='label'>Feature #2</div>
                                <h2>Automated Software Bill of Materials</h2>
                                <p className='mute'>As platforms scale their technology stack, they increase their reliance on third party components. SecureState's Automated Software Bill of Materials regularly scans your technology stack to keep an accurate record of your components.</p>
                            </div>

                        </div>

                        <div className='col-md-4'>

                            <div className='feature'>
                                <div className='label'>Feature #3</div>
                                <h2>Remediation Playbook & Knowledge Base</h2>
                                <p className='mute'>
                                    Security resources are difficult to come by. They are often too technical and do not translate to a particular technology stack. SecureState provides access to all our internal documentation and host it on our Knowledge Base with access to our team to help interpret.
                                </p>
                            </div>

                        </div>

                    </div>



                </div>
            </section>

            <section className='py-5'>
                <div className='container'>

                    <div className='row mb-5'>


                        <div className='col-md-12 text-center'>

                            <h1 className='fw-700'>Simplifying Platform Security</h1>
                            <p className='mb-5 text-center mute'>
                                SecureState’s mission is to secure the platforms and products that underpin our digital lives with efficiency, transparency, and affordability
                            </p>
                        </div>

                        <div className='col-md-12 text-center'>

                            <ul className='problems'>
                                <li className='d-flex'>
                                    <div className='icon'>
                                        <img src={industryQuestionmark} />
                                    </div>
                                    <div className='contents'>
                                        <small>Problem 1</small><br />
                                        <strong>Do Not Know Where to Start</strong>
                                        <p className='mute'>
                                            Planning for security is a daunting task and it’s difficult to know where to start.
                                        </p>
                                    </div>
                                    <div className='icon'>

                                        <box-icon name='arrow-back' rotate='180' color="#a7bcc6" size="md"></box-icon>
                                    </div>
                                    <div className='icon'>
                                        <img src={SShelpyou} />
                                    </div>
                                    <div className='contents'>
                                        <small></small><br />
                                        <strong>Help You Understand</strong>
                                        <p className='mute'>A vulnerability assessment will help us understand your technology stack and create an actionable plan</p>
                                    </div>

                                </li>
                                <li className='d-flex'>
                                    <div className='icon'>
                                        <img src={industryExpensive} />
                                    </div>
                                    <div className='contents'>
                                        <small>Problem 2</small><br />
                                        <strong>Cybersecurity is Expensive</strong>
                                        <p className='mute'>
                                            Cybersecurity consultants charge $250/hour and tools can range from $50-500 a month
                                        </p>
                                    </div>
                                    <div className='icon'>
                                        <box-icon name='arrow-back' rotate='180' color="#a7bcc6" size="md"></box-icon>
                                    </div>
                                    <div className='icon'>
                                        <img src={SSaffordable} />
                                    </div>
                                    <div className='contents'>
                                        <small></small><br />
                                        <strong>Affordable, Transparent Pricing</strong>
                                        <p className='mute'>Our pricing model is simple. Three different levels of security priced based on the size of the application.</p>
                                    </div>

                                </li>
                                <li className='d-flex'>
                                    <div className='icon'>
                                        <img src={IndustryCompliacted} />
                                    </div>
                                    <div className='contents'>
                                        <small>Problem 3</small><br />
                                        <strong>Complicated Buying Process</strong>
                                        <p className='mute'>Cybersecurity is notoriously difficult to buy and implement.</p>
                                    </div>
                                    <div className='icon'>

                                        <box-icon name='arrow-back' rotate='180' color="#a7bcc6" size="md"></box-icon>
                                    </div>
                                    <div className='icon'>
                                        <img src={SSOnboarding} />
                                    </div>
                                    <div className='contents'>
                                        <small></small><br />
                                        <strong>Simple, Efficient Onboarding</strong>
                                        <p className='mute'>We make the buying process simple and deliver ROI in the first 30 days</p>
                                    </div>

                                </li>
                                <li className='d-flex'>
                                    <div className='icon'>
                                        <img src={industryToomanytools} />
                                    </div>
                                    <div className='contents'>
                                        <small>Problem 4</small><br />
                                        <strong>Too Many Tools</strong>
                                        <p className='mute'>Hundreds of different tools to choose from can cause buying fatigue</p>
                                    </div>
                                    <div className='icon'>

                                        <box-icon name='arrow-back' rotate='180' color="#a7bcc6" size="md"></box-icon>
                                    </div>
                                    <div className='icon'>
                                        <img src={SSCentralize} />
                                    </div>
                                    <div className='contents'>
                                        <small></small><br />
                                        <strong>Integrate Tools, Centralize Data</strong>
                                        <p className='mute'>
                                            Centralize data from your security stack and integrate your tools into the SecureState platform
                                        </p>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className='container'>
                    <div className='row align-items-center'>


                        <div className='col-md-8 d-flex align-items-center justify-content-center'>

                            <img src={ManagPlatform} className='img-fluid mb-3' />

                        </div>

                        <div className='col-md-4'>

                            <h3 className='fw-700'>
                                Talent, tools and resources in a single place
                            </h3>

                            <p className=''>
                                The SecureState platform delivers the three main components of a robust cybersecurity program through a dynamic platform, from experienced security engineers, armed with an expansive toolkit
                            </p>


                            <a href='https://calendly.com/securestate/lets-talk-security?month=2022-03' target="_blank" className='btn btn-primary'>
                                Learn more
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <section className='services py-5'>
                <div className='container'>
                    <div className='row mb-4'>
                        <div className='col-md-12 text-center'>
                            <h1 className='fw-700'>
                                Integrating Security at Every Step
                            </h1>
                            <p className='mb-0 text-center mute'>
                                <TextTransition className='devopstext'
                                    text={DevSecOpsText[index % DevSecOpsText.length]}
                                    springConfig={presets.slow}
                                />

                            </p>


                        </div>
                    </div>


                    <div className='row'>


                        <div className='col-md-4'>
                            <Fade>
                                <div className={toggleState === 2 ? "services-tab mb-3 active" : "services-tab mb-3"}
                                    onClick={() => toggleTab(2)}>
                                    <div className='image'>
                                        <img src={DesignwSecuritylogo} />
                                    </div>
                                    <h2 className='fw-700'>Design with Security</h2>
                                    <p className='mute'>Finding and fixing bugs during design provides instant ROI as bugs found in production are 10X more expensive to fix</p>
                                </div>
                            </Fade>
                        </div>


                        <div className='col-md-4'>
                            <Fade>
                                <div className={toggleState === 3 ? "services-tab active mb-3" : "services-tab mb-3"}
                                    onClick={() => toggleTab(3)}>
                                    <div className='image'>
                                        <img src={DevelopwSecuritylogo} />
                                    </div>

                                    <h2 className='fw-700'>Develop with Security</h2>
                                    <p className='mute'>Integrating security activities in the development phase allows you to ship secure code and protect user data</p>
                                </div>
                            </Fade>


                        </div>
                        <div className='col-md-4'>
                            <Fade>
                                <div className={toggleState === 4 ? "services-tab active mb-3" : "services-tab mb-3"}
                                    onClick={() => toggleTab(4)}>
                                    <div className='image'>
                                        <img src={OperatewSecuritylogo} />
                                    </div>

                                    <h2 className='fw-700'>Operate with Security</h2>
                                    <p className='mute'>Security doesnt stop after development.  Operating with security means continuous security testing</p>
                                </div>
                            </Fade>
                        </div>

                        <div className='col-12'>
                            <div className="services-tabs mt-4">
                                <div
                                    className={toggleState === 1 ? "content  active" : "content"}
                                >
                                    <img src={SDLCImage} className='img-fluid' />

                                </div>

                                <div
                                    className={toggleState === 2 ? "content  active" : "content"}
                                >
                                    <img src={DESIGNSecurity} />

                                </div>
                                <div
                                    className={toggleState === 3 ? "content  active" : "content"}
                                >
                                    <img src={DEVELOPSecurity} />

                                </div>
                                <div
                                    className={toggleState === 4 ? "content  active" : "content"}
                                >
                                    <img src={OPERATESecurity} />

                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>

            <section className='solutions py-5'>
                <div className='container'>
                    <div className='row mb-5'>
                        <div className='col-md-12 text-center'>
                            <h1 className='fw-700'>
                                Solutions
                            </h1>

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
                                        <h4 className='fw-700 text-center'>Threat Model as a  Service (TMaaS)</h4>
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
                                        <h4 className='fw-700 text-center'>Pentest as a Service
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
                                        <h4 className='fw-700 text-center'>Application Security Posture

                                            Management (ASPM)</h4>
                                    </div>
                                </Link>
                            </Fade>
                        </div>
                    </div>



                </div>
            </section>

            {/* <section className='north-star py-5'>
                <div className='container'>
                    <div className='row mb-5'>
                        <div className='col-md-12 text-center'>
                            <h1 className='fw-700'>
                                Our North Star
                            </h1>

                            <h2>
                                Securing the Platform Development Lifecycle
                            </h2>
                            <p className='mute'>
                                To protect your SDLC, we become an extension of it
                            </p>

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-12'>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>

                                    <Col sm={{ span: 5, offset: 1 }} offset>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <div className='d-flex justify-content-center'>
                                                    <img src={ShiftLefts} alt='ShiftLefts' className='img-fluid' />
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <div className='d-flex justify-content-center'>
                                                    <img src={CapabilityGap} alt='CapabilityGap' className='img-fluid' />
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <div className='d-flex justify-content-center'>
                                                    <img src={ActionableIntel} alt='ActionableIntel' className='img-fluid' />
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                    <Col sm={5}>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">
                                                    <div className='tabs-list'>
                                                        <div className='image'>
                                                            <img src={ShiftLeftlogo} />
                                                        </div>
                                                        <div className='content'>
                                                            <h3>Shift Left</h3>
                                                            <p>Bring security to the table on day one
                                                                to help build in security</p>
                                                        </div>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">
                                                    <div className='tabs-list'>
                                                        <div className='image'>
                                                            <img src={CapabilityGaplogo} />
                                                        </div>

                                                        <div className='content'>
                                                            <h3>Capability Gap</h3>
                                                            <p>Most organizations cant get past the
                                                                capability gap, we can help you.</p>
                                                        </div>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">
                                                    <div className='tabs-list'>
                                                        <div className='image'>
                                                            <img src={ActionableIntelligencelogo} />
                                                        </div>

                                                        <div className='content'>
                                                            <h3>Actionable Intelligence</h3>
                                                            <p>Findings come with actionable data that
                                                                allows for efficient remediation</p>
                                                        </div>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </div>

                    </div>



                </div>
            </section> */}

            {/* <section className='clients py-5'>
                <div className='container'>
                    <div className='row mb-5'>
                        <div className='col-md-12 text-center'>
                            <h1 className='fw-400'>
                                Built By The Team That Has Helped Secure:
                            </h1>
                        </div>
                    </div>
                    <div className='row mb-5'>
                        <div className='col-md-8 text-center offset-md-2'>
                            <div className='client-slider'>
                                <div class="img">
                                    <img src={AwsImage} className='img-fluid' />
                                </div>

                                <div class="img">
                                    <img src={GoogleImage} className='img-fluid' />
                                </div>

                                <div class="img">
                                    <img src={NintendoImage} className='img-fluid' />
                                </div>

                                <div class="img">
                                    <img src={OracleImage} className='img-fluid' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className='py-5'>
                <div className='container'>
                    <div className='row mb-5'>
                        <div className='col-md-12 text-center'>
                            <h1 className='fw-700'>
                                By The Numbers
                            </h1>
                            <p className='mute'>Secure your technology stack today.</p>
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
                            <a href='https://calendly.com/securestate/lets-talk-security?month=2022-03' target="_blank" className='btn btn-primary btn-lg'>
                                Schedule a Demo Today
                            </a>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default Home
