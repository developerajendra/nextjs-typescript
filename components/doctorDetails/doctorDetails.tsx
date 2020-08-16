import React,{useEffect, useState} from 'react'
import { Card, Button, Tabs, Tab, Row, Col} from 'react-bootstrap';
import { MedicalButton, Loader, Breadcrumb, MedicalModal, VideoCarousel} from '../../components/common';
import { useRouter } from 'next/router';

//Custom imports
import {API, ratingUI, makeList} from '../../pages/api';
import {fetchDoctorDetails} from '../../store/reducers/productDetails/productDetails.action';
import {SendEnquiery} from '../index';

const doctorInitialValue = [{
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
* fetchig the doctor details..
 */
const fetchDoctorDetailsData = (route)=>{
      const [doctorDetails, setdoctorDetails] = useState(doctorInitialValue)
      const [loader, setloader] = useState(true);
      const payload = route.query.id;

    useEffect(() => {
        payload && fetchDoctorDetails(API.DOCTOR_DETAILS, payload).then(data=>{
            setdoctorDetails(data);
            setloader(false);
        });
    }, [payload])
    return {
        loader,
        data:doctorDetails
    }
}

 

function DoctorDetails() {
    const route = useRouter();
    const doctorName = "Dr Anupama Dua"
    const breadCrumbConfig = [
        {label:'Doctors', route:'/hospital/doctors'},
        {label:doctorName}
    ];

    interface doctor {
        name:string
   
    }
    const doctorDetails = fetchDoctorDetailsData(route);
    const {data}:{data:any} = doctorDetails;   
     console.log('data', data);
     
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
            {doctorDetails?.loader && <Loader/>}
                <Col lg={2} className="card-column">
                    <Card>
                        <Card.Img variant="top" src={API.IMAGE_BASE_URL.DOCTORS + data.image} alt={data.name} />
                        <Card.Body>
                             {ratingUI(data?.rating)}
                        </Card.Body>
                        
                    </Card>
                    <MedicalModal header={{title:'Send Enquiry', subTitle:data.name}} ModalComponent={SendEnquiery} data={{id:data.id}}  >
                        <MedicalButton text="SEND ENQUIRY" type="primary"  />
                    </MedicalModal>
                </Col>
                <Col lg={10} className="detail-right-content">
                    <h4>{data.name}</h4>
                    <address><i className="icon-map"></i> {data.hospitalName} {data.location}</address>
                     <ul>
                         <li>{data.speciality}</li>
                         <li>DNB. {data.experience} years of experience. {data.location}</li>
                     </ul>
                    <Tabs defaultActiveKey="about" id="uncontrolled-tab-example">
                        <Tab eventKey="about" title="ABOUT">
                        <h5>Package details</h5>
                            <ul>
                                {makeList(data.about)}
                            </ul>
                        </Tab>
                        <Tab eventKey="specialization" title="SPECIALIZATION">
                            {makeList(data.specialization)}
                        </Tab>
                        <Tab eventKey="treatmentList" title="TREATMENT LIST" >
                            {makeList(data.tratementLists)}
                        </Tab>
                        <Tab eventKey="education" title="EDUCATION" >
                            {makeList(data?.qulification)}
                        </Tab>
                        <Tab eventKey="video" title="VIDEO"  >
                            <div className="video">
                                <VideoCarousel />
                            </div>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </div>
    )
}

export default DoctorDetails
