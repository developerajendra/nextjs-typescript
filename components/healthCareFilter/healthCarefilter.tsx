import React from 'react'
import {DropDown, MedicalButton} from '../common';
import { Col, Row } from 'react-bootstrap'

function HealthCarefilter() {
    return (
        <Col md={8}>
            <div className="health-care">
                <h1>Choose the Right Healthcare.<i className="icon-heartbeat"></i></h1>
                <div>
                <DropDown/>
                <DropDown/> 
                <DropDown/> 
                <MedicalButton text="SEARCH NOW" type="primary" />
                </div>
            </div>
        </Col>
    )
}

export default HealthCarefilter

