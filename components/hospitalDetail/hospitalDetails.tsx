import React from 'react'
import {
    Card, 
    Button, 
    Tabs,
    Tab, 
    Row,
    Col
} from 'react-bootstrap';
import {
    MedicalButton,
    DropDown,
    Breadcrumb
} from '../../components/common';



function HospitalDetails() {
    const hospitalName = "NARAYANA MULTI SPECIALITY HOSPITAL"
    const breadCrumbConfig = [
        {label:'Hospitals', route:'/hospital/hospitals'},
        {label:hospitalName}
    ];

    return (
        <div className="hospital-detail-wrapper">
            <Row className="product-detail-header">
                <Col lg={10}>
                    <div>
                        <Breadcrumb breadcrumbConfig={breadCrumbConfig}/>
                        <h2>Hospitals & Doctors (387)</h2>
                    </div>
                </Col>
                <Col lg={2}>
                    <MedicalButton text="Compare Now" type="outline" />
                </Col>
            </Row>
            <Row className="detail-wrapper">
                <Col lg={6}>
                    <Card>
                        <Card.Img variant="top" src="/images/hospital/hospital-detail.jpg" />
                        <Card.Body>
                            <Row className="content-row">
                                <Col lg={4} className="content-column">
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build.
                                    </Card.Text>
                                </Col>

                                <Col lg={4} className="content-column">
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build.
                                    </Card.Text>
                                </Col>

                                <Col lg={4} className="content-column no-border">
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build.
                                    </Card.Text>
                                </Col>
                            </Row>

                            <Row className="content-row">
                                <Col lg={4} className="content-column">
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build.
                                    </Card.Text>
                                </Col>

                                <Col lg={4} className="content-column">
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build.
                                    </Card.Text>
                                </Col>

                                <Col lg={4} className="content-column no-border">
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build.
                                    </Card.Text>
                                </Col>
                            </Row>

                            <Row className="content-row no-border">
                                <Col lg={4} className="content-column">
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build.
                                    </Card.Text>
                                </Col>

                                <Col lg={4} className="content-column">
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build.
                                    </Card.Text>
                                </Col>

                                <Col lg={4} className="content-column no-border">
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build.
                                    </Card.Text>
                                </Col>
                            </Row>

                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} className="detail-right-content">
                    <h4>NARAYANA MULTI SPECIALITY HOSPITAL</h4>
                    <address>Plot No. 1355, Unit No. 302, Niharika Jubilee one, Road No. 1, Jubilee Hills,Hyderabad Telangana 5</address>
                    <span className="call"> <i className="icon-call-small"></i>91-8980008163 , 8980008381</span> <span><a href="#" className="visit-website">Visit website</a></span>
                    <Tabs defaultActiveKey="package" id="uncontrolled-tab-example">
                        <Tab eventKey="about" title="ABOUT">
                            Thou blind fool, Love, what dost thou to mine eyes, That they behold, and see not what they see? They know what beauty is, see where it lies, Yet what the best is take the worst to be. If eyes, corrupt by over-partial looks, Be anchor'd in the bay where all men ride, Why of eyes' falsehood hast thou forged hooks, Whereto the judgment of my heart is tied? Why should my heart think that a several plot, Which my heart knows the wide world's common place?
                        </Tab>
                        <Tab eventKey="facilityService" title="FACILITY & SERVICE">
                            Thou blind fool, Love, what dost thou to mine eyes, That they behold, and see not what they see? They know what beauty is, see where it lies, Yet what the best is take the worst to be. If eyes, corrupt by over-partial looks, Be anchor'd in the bay where all men ride, Why of eyes' falsehood hast thou forged hooks, Whereto the judgment of my heart is tied? Why should my heart think that a several plot, Which my heart knows the wide world's common place?
                        </Tab>
                        <Tab eventKey="reviewRating" title="REVIEWS & Rating" >
                            Thou blind fool, Love, what dost thou to mine eyes, That they behold, and see not what they see? They know what beauty is, see where it lies, Yet what the best is take the worst to be. If eyes, corrupt by over-partial looks, Be anchor'd in the bay where all men ride, Why of eyes' falsehood hast thou forged hooks, Whereto the judgment of my heart is tied? Why should my heart think that a several plot, Which my heart knows the wide world's common place?
                        </Tab>
                        <Tab eventKey="videos" title="VIDEOS" >
                            Thou blind fool, Love, what dost thou to mine eyes, That they behold, and see not what they see? They know what beauty is, see where it lies, Yet what the best is take the worst to be. If eyes, corrupt by over-partial looks, Be anchor'd in the bay where all men ride, Why of eyes' falsehood hast thou forged hooks, Whereto the judgment of my heart is tied? Why should my heart think that a several plot, Which my heart knows the wide world's common place?
                        </Tab>
                        <Tab eventKey="package" title="PACKAGE" >
                        
                            <DropDown styleTypeDefault={true} defaultSelectText="Select Disease Type"/>

                            <Card>
                                <Card.Body>
                                    <Card.Title>Disease or Treatment Name</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">6100 INR Avg. Cost</Card.Subtitle>
                                    <Card.Text>
                                        <h5>Package details</h5>
                                        <ul>
                                            <li>Thou blind fool,ost and see not what they see? They know what beaut</li>
                                            <li>Thou blind fool,ost and see not what they see? They know what beaut</li>
                                            <li>Thou blind fool,ost and see not what they see? They know what beaut</li>
                                            <li>Thou blind fool,ost and see not what they see? They know what beaut</li>
                                            <li>Thou blind fool,ost and see not what they see? They know what beaut</li>
                                            <li>Thou blind fool,ost and see not what they see? They know what beaut</li>
                                            <li>Thou blind fool,ost and see not what they see? They know what beaut</li>
                                            <li>Thou blind fool,ost and see not what they see? They know what beaut</li>
                                            <li>Thou blind fool,ost and see not what they see? They know what beaut</li>
                                            <li>Thou blind fool,ost and see not what they see? They know what beaut</li>
                                            <li>Thou blind fool,ost and see not what they see? They know what beaut</li>
                                            <li>Thou blind fool,ost and see not what they see? They know what beaut</li>
                                            <li>Thou blind fool,ost and see not what they see? They know what beaut</li>
                                        </ul>
                                        <MedicalButton text="Send enquirY" type="primary" />
                                    </Card.Text>
                                     
                                </Card.Body>
                                </Card>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </div>
    )
}

export default HospitalDetails
