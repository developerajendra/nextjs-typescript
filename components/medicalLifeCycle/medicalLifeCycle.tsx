import React from 'react'
import {Col, Row} from 'react-bootstrap';

function mMedicalLifeCycle() {
    return (
        <div className="medical-lifecycle-wrapper">
            <div className="list-header">
                <span>We CARE FOR YOU</span>
                <h2>We Manage Your Complete Medical Life Cycle</h2>
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
                        <div className="path-ui">
                            <i className="path icon-path">
                                <i className="arrow1 icon-arrow-filled-next"></i>
                             </i>
                        </div>
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
                        <li className="number">02</li>
                        <li className="card">
                            <i className="icon-professional"></i>
                        </li>
                        <i className="arrow2 icon-arrow-filled-next"></i>
                        {/* <div className="path-ui">
                            <i className="icon-path"></i>
                            <i className="icon-arrow-filled-next"></i>
                        </div> */}
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
                        <li className="number">03</li>
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
