import React from 'react'
import { Col, Row } from 'react-bootstrap'

import {
    Layout,
    HealthCarefilter,
    DeseaseList,
    CompareDestinationList,
    TestimonialCarousel,
    MedicalLifeCycle
} from '../../components';

function Home() {
    return (
        <Layout>
            <section className="home-section">
                <Row>
                <Col style={{padding:0}} md={12} lg={5}>
                    <HealthCarefilter/>
                </Col>
                <Col   md={12}  lg={7}>
                    <img src="/images/home-banner.jpg" title="home-banner" alt="home-banner" />
                </Col>
                </Row>
            </section>
            <section  className="home-section background">
                <DeseaseList/>
            </section>
            <section  className="home-section ">
                <CompareDestinationList/>
            </section>
            <section  className="home-section background testimonial-carousel">
                <TestimonialCarousel />
            </section>
            <section className="home-section">
                <MedicalLifeCycle/>
            </section>
            <section className="home-section background"></section>
            <section className="home-section"></section>

        </Layout>
    )
}

export default Home
