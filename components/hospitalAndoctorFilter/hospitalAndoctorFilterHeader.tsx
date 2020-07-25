import React from 'react'
import {Col, Row} from 'react-bootstrap';
import {
    Navigation,
    MedicalButton
} from '../../components/common';
 

const headerNavigation = [
    {name:'Hospitals',route:'/hospital/hospitals'},
    {name:'Doctors',route:'/hospital/doctors'},
];


function HospitalAndoctorFilterHeader() {
    return (
        <div className="hospital-secondary-header">
            <Row className="secondary-header-row">
                    <Col lg={3}>
                        <div>
                            <h2>Hospitals & Doctors (387)</h2>
                            <h3>FILTERS</h3>
                        </div> 
                    </Col>
                    <Col lg={7}>
                        <Navigation navItems={headerNavigation} />
                    </Col>
                    <Col lg={2}>
                        <MedicalButton text="Compare Now" type="outline" />
                    </Col>
                    
                </Row>
        </div>
    )
}

export default HospitalAndoctorFilterHeader
