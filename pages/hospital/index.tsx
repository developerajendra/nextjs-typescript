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
                <Row>
                        <HospitalAndoctorFilter  />
                        </Row>
                    </Col>
                    <Col lg={9}>
                        {children}
                    </Col>
                </Row>
        </Layout>
    )
}

export default Hospital
