import React from 'react'
import { Col, Row } from 'react-bootstrap'

import {
    Layout,
    HealthCarefilter,
    DeseaseList,
    CompareDestinationList
} from '../../components';

function Home() {
    return (
        <Layout>
            <section style={{
                paddingTop:15
            }}>
                <Row>
                <Col md={12} lg={5}>
                    <HealthCarefilter/>
                </Col>
                <Col md={12}  lg={7}>
                    <img src="/images/home-banner.jpg" title="home-banner" alt="home-banner" />
                </Col>
                </Row>
            </section>
            <section style={{margin: '70px 0'}}>
                <DeseaseList/>
            </section>
            <section style={{marginBottom: '70px'}}>
                <CompareDestinationList/>
            </section>
        </Layout>
    )
}

export default Home
