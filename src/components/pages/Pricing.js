import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
function Pricing() {
    return (
        <div>
            <header className='pt-60 d-flex align-items-center'>

                <div className='container pt-5'>
                    <div className='row align-items-center py-5 pb-3'>
                        <div className='col-md-8 offset-md-2'>

                            <h1 className='fw-700 text-center mb-4'>
                                Compare Plans
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

                            <div className='plan'>

                                <div className='plan-col'>
                                    <div className='head d-flex align-items-start flex-column'>
                                        <div className='fs-md'>Select Plan</div>
                                        <button className='btn btn-secondary mt-3'>Monthly</button>
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
                                                    Code Review
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
                                                    Code Review
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
                                        <button className='btn btn-secondary'>SELECT PLAN</button>
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
                                                    Code Review
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
                                        <button className='btn btn-secondary'>SELECT PLAN</button>
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
                                                    Code Review
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
                                        <button className='btn btn-secondary'>SELECT PLAN</button>
                                    </div>

                                </div>

                            </div>



                        </div>

                    </div>


                </div>
            </section>


            <section className='py-5 d-flex align-items-center'>

                <div className='container pt-5'>
                    <div className='row align-items-center'>
                        <div className='col-md-6 offset-md-3'>

                            <h2 className='fw-700 text-center mb-4'>
                                Frequently Asked Questions
                            </h2>

                            <p className='text-center mute'>
                                Use this section to reassure customers by proactively addressing their questions and concerns.
                            </p>

                        </div>

                    </div>
                </div>

            </section>

            <section className='py-5 d-flex align-items-center'>

                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6 offset-md-3'>

                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Can I add on additional services?</Accordion.Header>
                                    <Accordion.Body>
                                        <p className='mute'>
                                            We provide flexible pricing and only charge you for what you use, and we take the size and complexity of your application into account.
                                        </p>

                                        <p className='mute'>
                                            Services that can be purchased as add-ons including Threat Modeling, Penetration Testing, Vulnerability Assessments and Automated Testing.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What Integrations do you have?</Accordion.Header>
                                    <Accordion.Body>
                                        <p className='mute'>What Integrations do you have?</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>What If I dont know what security I need?</Accordion.Header>
                                    <Accordion.Body>
                                        <p className='mute'>What If I dont know what security I need?</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>How many hours of manual testing am I entitled to?</Accordion.Header>
                                    <Accordion.Body>
                                        <p className='mute'>How many hours of manual testing am I entitled to?</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>What about my existing security tools?</Accordion.Header>
                                    <Accordion.Body>
                                        <p className='mute'>What about my existing security tools?</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>What if I dont have a security team?</Accordion.Header>
                                    <Accordion.Body>
                                        <p className='mute'>What if I dont have a security team?</p>
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
