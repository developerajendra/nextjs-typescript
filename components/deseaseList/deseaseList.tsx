import React from 'react'
import {Col, Row} from "react-bootstrap"
import {DeseaseCard} from '../common';

function DeseaseList() {
    return (
        <div className="desease-list-wrapper" >
            <div className="list-header">
                <span>Best in the world</span>
                <h2>4500+ Hospitals and Doctors from 24 Countries on one Platform</h2>
            </div>
            <ul>
                <Row> 
                    <Col className="col" lg={3} xs={6}>
                        <li>
                            <DeseaseCard route={'/hospital/hospitals?service=cardiology&treatmentId=37'} iconClass="icon-cardiology" text="Cardiology" />
                        </li>
                    </Col>
                    <Col lg={3} xs={6} className="col">

                    <li>
                        <DeseaseCard  route={'/hospital/hospitals?service=cancer&treatmentId=38'} iconClass="icon-cancer" text="Cancer" />
                    </li>
                    </Col>
                    <Col className="col" lg={3} xs={6}>
                    <li>
                    <DeseaseCard route={'/hospital/hospitals?service=transplant&treatmentId=39'} iconClass="icon-transplant" text="Transplant" />
                    </li>
                    </Col>
                    
                    <Col className="col" lg={3} xs={6}>
                    <li>
                    <DeseaseCard route={'/hospital/hospitals?service=fertility&treatmentId=40'} iconClass="icon-fertility" text="Fertility" />
                    </li>
                    </Col>
                    </Row>
                    <Row> 
                    <Col className="col" lg={3} xs={6}>
                    <li>
                    <DeseaseCard route={'/hospital/hospitals?service=orthopadic&treatmentId=41'} iconClass="icon-orthopadic" text="Orthopadic" />
                    </li>
                    </Col>
                    <Col className="col" lg={3} xs={6}>
                    <li>
                    <DeseaseCard route={'/hospital/hospitals?service=neuro-and-brian&treatmentId=42'} iconClass="icon-neuro-and-brain" text="Neuro and Brain" />
                    </li>
                    </Col>
                    <Col className="col" lg={3} xs={6}>
                    <li>
                    <DeseaseCard route={'/hospital/hospitals?service=weight-loss&treatmentId=43'} iconClass="icon-weight-loss" text="Weight Loss" />
                    </li>
                    </Col>
                    
                    <Col className="col" lg={3} xs={6}>
                    <li>
                    <DeseaseCard route={'/hospital/hospitals?service=spine&treatmentId=44'} iconClass="icon-spine" text="Spine" />
                    </li>
                    </Col>
                    </Row> 
                    <Row> 
                    <Col className="col" lg={3} xs={6}>
                    <li>
                    <DeseaseCard route={'/hospital/hospitals?service=urology&treatmentId=45'} iconClass="icon-urology" text="Urology" />
                    </li>
                    </Col>
                    <Col className="col" lg={3} xs={6}>
                    <li>
                    <DeseaseCard route={'/hospital/hospitals?service=gstroenterlogy&treatmentId=46'} iconClass="icon-gastroenterlogy" text="Gastroenterlogy" />
                    </li>
                    </Col>
                    <Col className="col" lg={3} xs={6}>
                    <li>
                    <DeseaseCard route={'/hospital/hospitals?service=dentistry&treatmentId=47'} iconClass="icon-dentistry" text="Dentistry" />
                    </li>
                    </Col>
                    <Col className="col" lg={3} xs={6}>
                    <li>
                    <DeseaseCard route={'/hospital/hospitals?service=plastic-surgery&treatmentId=48'} iconClass="icon-plastic-surgery" text="Plastic Surgery" />
                    </li>
                    </Col>
                    </Row> 
            </ul>
        </div> 
    )
}

export default DeseaseList