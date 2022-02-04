import React from 'react';
import { InlineWidget } from "react-calendly";
import DevsecopsImage from '../../assets/images/platform/devsecops.png'
import Report_Cover_Page from '../../assets/images/platform/Report_Cover_Page.png'
import { Tab, Row, Col, Nav } from 'react-bootstrap';

function Platform() {



  return (
    <div>
      <header className='header d-flex align-items-center'>

        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-4'>

              <h1 className='fw-700'>
                DevSecOps Orchestration
              </h1>

              <p>
                Create end to end visibility of your product security lifecycle and integrate testing at every phase
              </p>

              <button className='btn btn-secondary'>
                LEARN MORE
              </button>
            </div>
            <div className='col-md-8 d-flex justify-content-center vh-100 mt-5 pt-5'>
              <img src={DevsecopsImage} className='img-fluid' />
            </div>


          </div>

          <div className='row align-items-center py-5'>
            <div className='col-md-8 offset-md-2 text-center'>
              <p className='fw-700'>We integrate security into every phase of the product development lifecycle.  Our DevSecOps orchastration solution allows developers to design, develop and operate with security.</p>
            </div>
          </div>
        </div>

      </header>


      <section className='py-5 custom-tabs'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={12}>
                    <Nav variant="pills" className="flex-row justify-content-center tab-nav">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Design With Security</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Develop with Security</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="thrid">Operate With Security</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <strong>Activities</strong>
                        <ul className='mt-2'>
                          <li>Complete Asset Onboarding Survey to help us understand your threats</li>
                          <li>Submit an Architecture Diagram for our security team to review before the design review</li>
                          <li>Schedule a Design Review for our security team to discuss the product with your development team</li>
                        </ul>
                        <strong>Deliverables</strong>
                        <ul className='mt-2'>
                          <li>Threat Model with actionable data for development </li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <strong>Activities</strong>
                        <ul className='mt-2'>
                          <li>Our team performs targted penetration testing to uncover critical vulnerabiliites not uncovered in earlier phases adding an additional layer of security </li>
                          <li>We provide actionable recommendations that enable developers to priortize findings and take action</li>
                          <li>We create a Slack channel to allow developers to communicate with our highly expierenced Security Researchers</li>
                        </ul>
                        <strong>Deliverables</strong>
                        <ul className='mt-2'>
                          <li>Penetration Testing Report</li>
                          <li>Real-Time Reporting of Findings</li>
                          <li>Certification Letter</li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="thrid">

                        <strong>Activities</strong>
                        <ul className='mt-2'>
                          <li>Manage critical security data in a single place</li>
                          <li>Continuous scanning of vulnerabilities in open source software and 3rd party components</li>
                        </ul>
                        <strong>Deliverables</strong>
                        <ul className='mt-2'>
                          <li>Software Bill Of Materials Report</li>
                        </ul>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5 bg-orange'>
        <div className='container'>
          <div className='row py-5'>

            <div className='col-12'>
              <p className='color-light text-center'>What's in the SecureState platform?</p>
              <h2 className='color-light text-center'>a simple solution packed with capabilities</h2>
            </div>
          </div>
          <div className='row py-5'>

            <div className='col-md-4'>
              <div className='box-white'>
                <div className=' mb-2'>
                  <strong>
                    Bring Your Own Data
                  </strong>

                  <p>
                    Bring in data from other security tools including DAST, SCA, SAST and internal tools
                  </p>
                </div>

                <a href=''>
                  <span>
                    LEARN MORE
                  </span>

                  <box-icon className='pl-2' name='chevron-right' color="#fd7b33"></box-icon>
                </a>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='box-white'>
                <div className=' mb-2'>
                  <strong>
                    Prioritize Findings
                  </strong>

                  <p>
                    Filter through the noise and priotize what issues need to be addressed first through automated risk scoring
                  </p>
                </div>

                <a href=''>
                  <span>
                    LEARN MORE
                  </span>

                  <box-icon className='pl-2' name='chevron-right' color="#fd7b33"></box-icon>
                </a>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='box-white'>
                <div className=' mb-2'>
                  <strong>
                    Create Visibility
                  </strong>

                  <p>
                    Provide full transperancy into your technology stack and the security posture of your application at any point in time
                  </p>
                </div>

                <a href=''>
                  <span>
                    LEARN MORE
                  </span>

                  <box-icon className='pl-2' name='chevron-right' color="#fd7b33"></box-icon>
                </a>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='box-white'>
                <div className=' mb-2'>
                  <strong>
                    Create Continuity
                  </strong>

                  <p>
                    Help create continuity within your security program by centralizing critical security data in one place
                  </p>
                </div>

                <a href=''>
                  <span>
                    LEARN MORE
                  </span>

                  <box-icon className='pl-2' name='chevron-right' color="#fd7b33"></box-icon>
                </a>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='box-white'>
                <div className=' mb-2'>
                  <strong>
                    Manage Assets
                  </strong>

                  <p>
                    Manage the security metrics of all your applications from a single dashboard
                  </p>
                </div>

                <a href=''>
                  <span>
                    LEARN MORE
                  </span>

                  <box-icon className='pl-2' name='chevron-right' color="#fd7b33"></box-icon>
                </a>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='box-white'>
                <div className=' mb-2'>
                  <strong>
                    Make Informed Decisions
                  </strong>

                  <p>
                    Have access to our security researchers and knowledge base to help answer your security questions and gain knowledge
                  </p>
                </div>

                <a href=''>
                  <span>
                    LEARN MORE
                  </span>

                  <box-icon className='pl-2' name='chevron-right' color="#fd7b33"></box-icon>
                </a>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='box-white'>
                <div className=' mb-2'>
                  <strong>
                    Provide Training
                  </strong>

                  <p>
                    Use data from the platform to understand where developers could use additional training
                  </p>
                </div>

                <a href=''>
                  <span>
                    LEARN MORE
                  </span>

                  <box-icon className='pl-2' name='chevron-right' color="#fd7b33"></box-icon>
                </a>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='box-white'>
                <div className=' mb-2'>
                  <strong>
                    Sell Security as a Benefit
                  </strong>

                  <p>
                    Beat out your competitors by using security as a sales tool.
                  </p>
                </div>

                <a href=''>
                  <span>
                    LEARN MORE
                  </span>

                  <box-icon className='pl-2' name='chevron-right' color="#fd7b33"></box-icon>
                </a>
              </div>
            </div>


            <div className='col-md-4'>
              <div className='box-white'>
                <div className=' mb-2'>
                  <strong>
                    End to End Security
                  </strong>

                  <p>
                    The SecureState platform allows developers to design, develop and operate with security through a central platform and access to expierenced security reseachers
                  </p>
                </div>

                <a href=''>
                  <span>
                    LEARN MORE
                  </span>

                  <box-icon className='pl-2' name='chevron-right' color="#fd7b33"></box-icon>
                </a>
              </div>
            </div>

            <div className='col-md-12 text-center'>
              <button className='btn btn-light'>Learn More</button>
            </div>


          </div>
        </div>
      </section>

      <section className='py-5'>
        <div className='container'>
          <div className='row'>

            <div className='col-12'>
              <h2 className='text-center'>innovating an antiquated process</h2>
            </div>
          </div>

          <div className='row py-5'>

            <div className='col-md-4'>
              <h5>You Move Fast, So Do We</h5>

              <p className='mute mt-3'>
                Sprints move fast, and  don’t traditionally allow for proactive security testing during development.  Between scoping, requirements gathering, and scheduling, you can already be in production by the time a consulting firm would step in to help.  We integrate into your SDLC and provide flexible, on-demand scheduling to fit into your development timeline.
              </p>
            </div>

            <div className='col-md-4'>
              <h5>The Affordable Option</h5>

              <p className='mute mt-3'>
                Security Engineering is a fast growing and high demand career path.  With a rapid digital transformation and disruptive global events, security talent is even more scarce and expensive.  Annual salaries can exceed $150k for a full time security resource.  Our solution is an affordable subscription model that provides access to a pool of experienced security experts
              </p>
            </div>

            <div className='col-md-4'>
              <h5>Bias Towards Action</h5>

              <p className='mute mt-3'>
                The platform uses data to help make informed decisions and take immediate action.  Traditional pentest reports present obscure data that’s difficult to act on and often forgotten.  Our approach provides clear prioritization of vulnerabilities through widely used risk-rating standards and in-house algorithms which eliminates the “politics” of remediation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5 pb-0'>
        <div className='container'>
          <div className='row'>

            <div className='col-12'>
              <h1 className='text-center'>Let's Talk Security</h1>
            </div>

            <div className='col-12'>
              <InlineWidget url="https://calendly.com/securestate/lets-talk-security?month=2022-02"
                styles={{
                  height: '1000px'
                }}
                pageSettings={{
                  primaryColor: 'fd7b33',
                }} 
                />
            </div>
          </div>


        </div>
      </section>

      <section className='py-5'>
        <div className='container'>


          <div className='row'>

            <div className='col-md-6'>
              <h2 className='mb-4'>Leveraging Security As a Sales Tool</h2>

              <p className='mute'>
                Supply Chains are under attack, and its vital to ensure customers feel safe using your product.  The Securestate platform provides one click report generation that creates different types of reports for different audiences.
              </p>

              <p className='mute'>
                For Sales, as a tool to build trust with prospective clients
              </p>

              <p className='mute'>
                For Executives, to effectively get a high level understanding of security posture and measure the effectiveness of their cybersecurity investment
              </p>

              <p className='mute'>
                For Developers, to quickly remediate vulnerabilities and shift left in the development lifecycle
              </p>
            </div>

            <div className='col-md-6 d-flex align-items-center justify-content-center'>
              <img src={Report_Cover_Page} className='img-fluid' />
            </div>


          </div>
        </div>
      </section>
    </div>
  )
}

export default Platform;