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
                            <DeseaseCard route={'/hospital/hospitals?service=cardiology'} iconClass="icon-cardiology" text="Cardiology" />
                        </li>
                    </Col>
                    <Col lg={3} xs={6} className="col">

                    <li>
                        <DeseaseCard  route={'/hospital/hospitals?service=cancer'} iconClass="icon-cancer" text="Cancer" />
                    </li>
                    </Col>
                    <Col className="col" lg={3} xs={6}>
                    <li>
                    <DeseaseCard route={'/hospital/hospitals?service=transplant'} iconClass="icon-transplant" text="Transplant" />
                    </li>
                    </Col>
                    
                    <Col className="col" lg={3} xs={6}>
                    <li>
                    <DeseaseCard route={'/hospital/hospitals?service=fertility'} iconClass="icon-fertility" text="Fertility" />
                    </li>
                    </Col>
                    </Row>
                    <Row> 
                    <Col className="col" lg={3} xs={6}>
                    <li>
                    <DeseaseCard route={'/hospital/hospitals?service=orthopadic'} iconClass="icon-orthopadic" text="Orthopadic" />
                    </li>
                    </Col>
                    <Col className="col" lg={3} xs={6}>
                    <li>
                    <DeseaseCard route={'/hospital/hospitals?service=neuro-and-brian'} iconClass="icon-neuro-and-brain" text="Neuro and Brain" />
                    </li>
                    </Col>
                    <Col className="col" lg={3} xs={6}>
                    <li>
                    <DeseaseCard route={'/hospital/hospitals?service=weight-loss'} iconClass="icon-weight-loss" text="Weight Loss" />
                    </li>
                    </Col>
                    
                    <Col className="col" lg={3} xs={6}>
                    <li>
                    <DeseaseCard route={'/hospital/hospitals?service=spine'} iconClass="icon-spine" text="Spine" />
                    </li>
                    </Col>
                    </Row> 
                    <Row> 
                    <Col className="col" lg={3} xs={6}>
                    <li>
                    <DeseaseCard route={'/hospital/hospitals?service=urology'} iconClass="icon-urology" text="Urology" />
                    </li>
                    </Col>
                    <Col className="col" lg={3} xs={6}>
                    <li>
                    <DeseaseCard route={'/hospital/hospitals?service=gstroenterlogy'} iconClass="icon-gastroenterlogy" text="Gastroenterlogy" />
                    </li>
                    </Col>
                    <Col className="col" lg={3} xs={6}>
                    <li>
                    <DeseaseCard route={'/hospital/hospitals?service=dentistry'} iconClass="icon-dentistry" text="Dentistry" />
                    </li>
                    </Col>
                    <Col className="col" lg={3} xs={6}>
                    <li>
                    <DeseaseCard route={'/hospital/hospitals?service=plastic-surgery'} iconClass="icon-plastic-surgery" text="Plastic Surgery" />
                    </li>
                    </Col>
                    </Row> 
            </ul>
        </div> 
    )
}

export default DeseaseList