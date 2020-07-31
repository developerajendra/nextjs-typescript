import React,{useEffect, useState} from 'react'
import { Card, Button, Tabs, Tab, Row, Col} from 'react-bootstrap';
import { MedicalButton, Loader, Breadcrumb} from '../../components/common';
import { useRouter } from 'next/router';

//Custom imports
import {API, ratingUI} from '../../pages/api';
import {fetchDoctorDetails} from '../../store/reducers/productDetails/productDetails.action';


/**
* fetchig the doctor details..
 */
const fetchDoctorDetailsData = (route)=>{
      const [doctorDetails, setdoctorDetails] = useState([])
      const [loader, setloader] = useState(true);
      const payload = route.query.id;

    useEffect(() => {
        fetchDoctorDetails(API.DOCTOR_DETAILS, payload).then(data=>{
            setdoctorDetails(data);
            setloader(false);
        });
    }, [])
    return {
        loader,
        data:doctorDetails
    }
}

const makeList = (content = '')=>{
    const list = content.split('#');
    return list.map(data=>{
        return data && <li>{data}</li>
    });
}


function DoctorDetails() {
    const route = useRouter();
    const doctorName = "Dr Anupama Dua"
    const breadCrumbConfig = [
        {label:'Doctors', route:'/hospital/doctors'},
        {label:doctorName}
    ];

    const doctorDetails = fetchDoctorDetailsData(route);
    const {data} = doctorDetails;
    

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
                             {ratingUI(data.rating)}
                        </Card.Body>
                        
                    </Card>
                    <MedicalButton text="SEND ENQUIRY" type="primary" />
                </Col>
                <Col lg={10} className="detail-right-content">
                    <h4>{data.name}</h4>
                    <address>{data.hospital}, {data.location}</address>
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
                            {makeList(data.qulification)}
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
