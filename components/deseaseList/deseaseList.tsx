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
                    <Col>
                        <li>
                            <DeseaseCard iconClass="icon-cardiology" text="Cardiology" />
                        </li>
                    </Col>
                    <Col className="active">

                    <li>
                        <DeseaseCard iconClass="icon-cancer" text="Cancer" />
                    </li>
                    </Col>
                    <Col>
                    <li>
                    <DeseaseCard iconClass="icon-transplant" text="Transplant" />
                    </li>
                    </Col>
                    
                    <Col>
                    <li>
                    <DeseaseCard iconClass="icon-fertility" text="Fertility" />
                    </li>
                    </Col>
                    </Row>
                    <Row> 
                    <Col>
                    <li>
                    <DeseaseCard iconClass="icon-orthopadic" text="Orthopadic" />
                    </li>
                    </Col>
                    <Col>
                    <li>
                    <DeseaseCard iconClass="icon-neuro-and-brain" text="Neuro and Brain" />
                    </li>
                    </Col>
                    <Col>
                    <li>
                    <DeseaseCard iconClass="icon-weight-loss" text="Weight Loss" />
                    </li>
                    </Col>
                    
                    <Col>
                    <li>
                    <DeseaseCard iconClass="icon-spine" text="Spine" />
                    </li>
                    </Col>
                    </Row> 
                    <Row> 
                    <Col>
                    <li>
                    <DeseaseCard iconClass="icon-urology" text="Urology" />
                    </li>
                    </Col>
                    <Col>
                    <li>
                    <DeseaseCard iconClass="icon-gastroenterlogy" text="Gastroenterlogy" />
                    </li>
                    </Col>
                    <Col>
                    <li>
                    <DeseaseCard iconClass="icon-dentistry" text="Dentistry" />
                    </li>
                    </Col>
                    <Col>
                    <li>
                    <DeseaseCard iconClass="icon-plastic-surgery" text="Plastic Surgery" />
                    </li>
                    </Col>
                    </Row> 
            </ul>
        </div> 
    )
}

export default DeseaseList