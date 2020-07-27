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
    SelectBox,
    Breadcrumb,
} from '../../components/common';



function DoctorDetails() {
    const doctorName = "Dr Anupama Dua"
    const breadCrumbConfig = [
        {label:'Hospitals', route:'/hospital/hospitals'},
        {label:doctorName}
    ];

    return (
        <div className="doctor-detail-wrapper">
            <Row className="product-detail-header">
                <Col lg={10}>
                    <div>
                        <Breadcrumb breadcrumbConfig={breadCrumbConfig}/>
                        <h2>Hospitals & Doctors (387)</h2>
                    </div>
                </Col>
            </Row>
            <Row className="detail-wrapper">
                <Col lg={2} className="card-column">
                    <Card>
                        <Card.Img variant="top" src="/images/doctors/d1.jpg" />
                        <Card.Body>
                            <ul className="rating">
                                <li> <i className="icon-rated-star"></i> </li>
                                <li> <i className="icon-rated-star"></i></li>
                                <li> <i className="icon-rated-star"></i></li>
                                <li> <i className="icon-rated-star"></i></li>
                                <li className="not-rated"> <i className="icon-rated-star"></i></li>
                            </ul>
                        </Card.Body>
                        
                    </Card>
                    <MedicalButton text="SEND ENQUIRY" type="primary" />
                </Col>
                <Col lg={10} className="detail-right-content">
                    <h4>Dr Anupama Dua</h4>
                    <address>Primus Super Speciality Hospital, New Delhi</address>
                     <ul>
                         <li>Orthopaedic and Joint Replacement Surgeon.Senior Consultant.MBBS.</li>
                         <li>DNB.13 years of experience.New Delhi.</li>
                     </ul>
                    <Tabs defaultActiveKey="about" id="uncontrolled-tab-example">
                        <Tab eventKey="about" title="ABOUT">
                        <h5>Package details</h5>
                            <ul>
                                <li>Thou blind fool, Love, what dost thou to mine eyes, That they behold, and see not what they see? They know what beauty is, see where it lies, Yet what the best is take the worst to be. If eyes, corrupt common place?</li>
                                <li>Thou blind fool, Love, what dost thou to mine eyes, That they behold, and see not what they see? They know what beauty is, see where it lies, Yet what the best is take the worst to be. If eyes, corrupt common place?</li>
                                <li>Thou blind fool, Love, what dost thou to mine eyes, That they behold, and see not what they see? They know what beauty is, see where it lies, Yet what the best is take the worst to be. If eyes, corrupt common place?</li>
                                <li>Thou blind fool,ost and see not what they see? They know what beaut</li>
                            </ul>

                            
                        </Tab>
                        <Tab eventKey="specialization" title="SPECIALIZATION">
                            Thou blind fool, Love, what dost thou to mine eyes, That they behold, and see not what they see? They know what beauty is, see where it lies, Yet what the best is take the worst to be. If eyes, corrupt by over-partial looks, Be anchor'd in the bay where all men ride, Why of eyes' falsehood hast thou forged hooks, Whereto the judgment of my heart is tied? Why should my heart think that a several plot, Which my heart knows the wide world's common place?
                        </Tab>
                        <Tab eventKey="treatmentList" title="TREATMENT LIST" >
                            Thou blind fool, Love, what dost thou to mine eyes, That they behold, and see not what they see? They know what beauty is, see where it lies, Yet what the best is take the worst to be. If eyes, corrupt by over-partial looks, Be anchor'd in the bay where all men ride, Why of eyes' falsehood hast thou forged hooks, Whereto the judgment of my heart is tied? Why should my heart think that a several plot, Which my heart knows the wide world's common place?
                        </Tab>
                        <Tab eventKey="education" title="EDUCATION" >
                            Thou blind fool, Love, what dost thou to mine eyes, That they behold, and see not what they see? They know what beauty is, see where it lies, Yet what the best is take the worst to be. If eyes, corrupt by over-partial looks, Be anchor'd in the bay where all men ride, Why of eyes' falsehood hast thou forged hooks, Whereto the judgment of my heart is tied? Why should my heart think that a several plot, Which my heart knows the wide world's common place?
                        </Tab>
                        <Tab eventKey="video" title="VIDEO" >
                        
                         <h5>Package details</h5>
                            <ul>
                                <li>Thou blind fool,ost and see not what they see? They know what beaut</li>
                                <li>Thou blind fool,ost and see not what they see? They know what beaut</li>
                                <li>Thou blind fool,ost and see not what they see? They know what beaut</li>
                                <li>Thou blind fool,ost and see not what they see? They know what beaut</li>
                                <li>Thou blind fool,ost and see not what they see? They know what beaut</li>
                                
                                <li>Thou blind fool,ost and see not what they see? They know what beaut</li>
                                <li>Thou blind fool,ost and see not what they see? They know what beaut</li>
                            </ul>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </div>
    )
}

export default DoctorDetails
