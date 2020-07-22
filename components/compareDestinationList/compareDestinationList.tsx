import React from 'react'
import {CompareDestinationCard, DropDown, MedicalButton} from '../common';
import {Row, Col} from 'react-bootstrap';

function CompareDestinationList() {
    return (
        <div className='destination-compare-wrapper'>
             <div className="list-header">
                <span>EASY TO CHOOSE</span>
                <h2>Compare Best Medical Destination</h2>
            </div>
            <div className="select-desease">
                <DropDown styleTypeDefault={true} defaultSelectText="Select Disease Type"/>
            </div>
            <div className="destination-cards">
                <Row>
                    <Col lg={3} md={6} xs={12}>
                        <CompareDestinationCard image="india"/>
                    </Col>
                    <Col lg={3} md={6} xs={12}>
                        <CompareDestinationCard/>
                        </Col>
                    <Col lg={3} md={6} xs={12}>
                        <CompareDestinationCard/>
                        </Col>
                    <Col lg={3} md={6} xs={12}>
                        <CompareDestinationCard/>
                        </Col>
                </Row> 
                <Row className="button-wrapper">
                    <MedicalButton text="Clear Inputs" type="outline" />
                    <MedicalButton text="COMPARE NOW" type="primary" />
                </Row> 
            </div>
        </div>
    )
}

export default CompareDestinationList
