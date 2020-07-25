import React from 'react'
import {
    Layout,
    HospitalAndoctorFilterHeader,
    HospitalAndoctorFilter
} from '../../components'

 
import {Col, Row} from 'react-bootstrap';

function Hospital({children}) {
    return (
        <Layout>
                <HospitalAndoctorFilterHeader />
                <Row>
                <Col lg={3}>
                <Row className="sticky" style={{top: '100px'}}>
                    <HospitalAndoctorFilter  />
                </Row>
                    </Col>
                    <Col style={{background:'#f8f8f8'}} lg={9}>
                        {children}
                    </Col>
                </Row>
        </Layout>
    )
}

export default Hospital
