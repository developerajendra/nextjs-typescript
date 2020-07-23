import React from 'react'
import {Col, Row} from 'react-bootstrap';

function mMedicalLifeCycle() {
    return (
        <div className="medical-lifecycle-wrapper">
            <div className="list-header">
                <span>Happy to share</span>
                <h2>Patient Stories</h2>
            </div>
           
            <ul>
            <Row>
                <Col lg={4}>
                <li>
                    <ul className="card-wrapper">
                        <li className="number">01</li>
                        <li className="card">
                            <i className="icon-treansparency"></i>
                        </li>
                        <li className="content">
                            <h4>TRANSPARENCY</h4>
                            <article>
                                <p>Help you choose right Destination for your Medical Treatment as per your budget, choice and ease.</p>
                            </article>
                        </li>
                    </ul>
                </li>
                </Col>
                <Col lg={4}>
                <li>
                     <ul className="card-wrapper">
                        <li className="number">01</li>
                        <li className="card">
                            <i className="icon-professional"></i>
                        </li>
                        <li className="content">
                            <h4>Professionalism</h4>
                            <article>
                                <p>Support you with your Documentation, Travel and Appointment with Treating Doctor and Hospital.</p>
                            </article>
                        </li>
                    </ul>
                </li>
                </Col>
                <Col lg={4}>
                <li>
                    <ul className="card-wrapper">
                        <li className="number">01</li>
                        <li className="card">
                            <i className="icon-care"></i>
                        </li>
                        <li className="content">
                            <h4>CARE</h4>
                            <article>
                                <p>Provide Personalized care during Hospitalisation and Post Hospitalisation.</p>
                            </article>
                        </li>
                    </ul>
                </li>
            </Col>
            </Row>

            </ul>
        </div>
    )
}

export default mMedicalLifeCycle
