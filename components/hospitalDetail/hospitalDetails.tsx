import React,{useEffect, useState} from 'react'
import {Card, Button, Tabs, Tab, Row,Col} from 'react-bootstrap';
import { useRouter } from 'next/router';

//Custom imports
import {MedicalButton, MedicalModal, SelectBox, Breadcrumb, Loader, VideoCarousel} from '../../components/common';
import {WriteReview, SendEnquiery} from '../index';
import {fetchHospitalDetails} from '../../store/reducers/productDetails/productDetails.action';
import {API, ratingUI, makeList} from '../../pages/api';

const hospitalInitialValue = [{
    "name":'',
    "specialization":'',
    "qulification":'',
     "location":'',
     "about":'',
     "tratementLists":'',
     "education":'',
     "speciality":'',
     "experience":'',
     "image":''
  }];

/**
* fetchig the hospital details..
 */
const fetchHospitalDetailsData = (route)=>{
    const [hospitalDetails, setHospitalDetails] = useState(hospitalInitialValue)
    const [loader, setloader] = useState(true);
    const payload = route.query.id;

  useEffect(() => {
    payload && fetchHospitalDetails(API.HOSPITAL_DETAILS, payload).then(data=>{
          setHospitalDetails(data);
          setloader(false);
      });
  }, [payload])
  return {
      loader,
      data:hospitalDetails
  }
}


function HospitalDetails() {
    const route = useRouter();
    
    const hospitalName = "NARAYANA MULTI SPECIALITY HOSPITAL"
    const breadCrumbConfig = [
        {label:'Hospitals', route:'/hospital/hospitals'},
        {label:hospitalName}
    ];

    const hospitalDetails = fetchHospitalDetailsData(route);
    const {data}:{data:any} = hospitalDetails;   

console.log('data',data);

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
                    <MedicalModal header={{title:'Write Review', subTitle:'(1450 Votes)'}} ModalComponent={WriteReview} data={{id:1}} customClass={'doctor-details'}>
                        <MedicalButton text="WRITE A REVIEW" type="outline"  />
                    </MedicalModal>
                    
                </Col>
            </Row>
            <Row className="detail-wrapper">
            {hospitalDetails?.loader && <Loader/>}
                <Col lg={6}>
                    <Card>
                    <Card.Img variant="top" src={ API.IMAGE_BASE_URL.HOSPITALS + data.image} />
                        <Card.Body>
                            <Row className="content-row">
                                <Col lg={4} className="content-column">
                                    <Card.Title>92% Liked</Card.Title>
                                    <Card.Text>
                                    {ratingUI(4)}
                                    </Card.Text>
                                </Col>

                                <Col lg={4} className="content-column">
                                    <Card.Title>Accreditation</Card.Title>
                                    <Card.Text>
                                    <ul className="iso">
                                        <li><i className="icon-iso1"></i></li>
                                        <li><i className="icon-iso2"></i></li>
                                        <li><i className="icon-iso1"></i></li>
                                    </ul>
                                    </Card.Text>
                                </Col>

                                <Col lg={4} className="content-column no-border number-of-bed">
                                    <Card.Title>{data.numberOfBed} <i className="icon-bed"></i> </Card.Title>
                                    <Card.Text>
                                    Total No. of Beds
                                    </Card.Text>
                                </Col>
                            </Row>

                            <Row className="content-row">
                                <Col lg={4} className="content-column number-of-icu-bed">
                                    <Card.Title >{data.numberOfICUBeds}<i className="icon-icu-bed"></i> </Card.Title>
                                    <Card.Text>
                                    Total No. of ICU Beds
                                    </Card.Text>
                                </Col>

                                <Col lg={4} className="content-column number-of-operation">
                                    <Card.Title>{data.numberOfOperationRoom}<i className="icon-operation"></i> </Card.Title>
                                    <Card.Text>
                                    No. of Operation Rooms
                                    </Card.Text>
                                </Col>

                                <Col lg={4} className="content-column no-border domestic-patient">
                                    <Card.Title >{data.domesticPatients}<i className="icon-domestic-patient"></i> </Card.Title>
                                    <Card.Text>
                                    Domestic Patients
                                    </Card.Text>
                                </Col>
                            </Row>

                            <Row className="content-row no-border">
                                <Col lg={4} className="content-column international-patient">
                                    <Card.Title >{data.internationalPatients}<i className="icon-international-patient"></i> </Card.Title>
                                    <Card.Text>
                                    International Patients
                                    </Card.Text>
                                </Col>

                                <Col lg={4} className="content-column airport-distance">
                                    <Card.Title>{data.domesticAirportDistance}<i className="icon-plane"></i> </Card.Title>
                                    <Card.Text>
                                    Distance from Airport
                                    </Card.Text>
                                </Col>

                                <Col lg={4} className="content-column no-border">
                                    {/* <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build.
                                    </Card.Text> */}
                                </Col>
                            </Row>

                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} className="detail-right-content">
                    <h4>{data.hospitalName}</h4>
                    <address><i className="icon-map"/> Plot No. 1355, Unit No. 302, Niharika Jubilee one, Road No. 1, Jubilee Hills,Hyderabad Telangana 5</address>
                    <span className="call"> <i className="icon-call"/> {data.phone1} , <i className="icon-call"/> {data.phone2}</span> <span><a  target="blank"  href={data.website} className="visit-website">Visit website</a></span>
                    <Tabs defaultActiveKey="about" id="uncontrolled-tab-example">
                        <Tab eventKey="about" title="ABOUT">
                        <ul className="tab-about">
                            {data.about}
                            <MedicalModal header={{title:'Send Enquiry', subTitle:data.name}} ModalComponent={SendEnquiery} data={{id:data.productId}}>
                                <MedicalButton  text="SEND ENQUIRY" type="primary"  />
                            </MedicalModal>
                        </ul>
                        </Tab>
                        <Tab eventKey="facilityService" title="FACILITY & SERVICE">
                            <ul className="tab-about">
                                {makeList(data.shortDescription)}
                                <MedicalModal header={{title:'Send Enquiry', subTitle:data.name}} ModalComponent={SendEnquiery} data={{id:data.productId}}>
                                <MedicalButton  text="SEND ENQUIRY" type="primary"  />
                            </MedicalModal>
                            </ul>
                        </Tab>
                        <Tab eventKey="reviewRating" title="REVIEWS & Rating" >
                            Thou blind fool, Love, what dost thou to mine eyes, That they behold, and see not what they see? They know what beauty is, see where it lies, Yet what the best is take the worst to be. If eyes, corrupt by over-partial looks, Be anchor'd in the bay where all men ride, Why of eyes' falsehood hast thou forged hooks, Whereto the judgment of my heart is tied? Why should my heart think that a several plot, Which my heart knows the wide world's common place?
                        </Tab>
                        <Tab eventKey="videos" title="VIDEOS" >
                        <VideoCarousel />
                        </Tab>
                        <Tab eventKey="package" title="PACKAGE" >
                        
                            <SelectBox styleTypeDefault={true} defaultSelectText="Select Disease Type"/>

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
