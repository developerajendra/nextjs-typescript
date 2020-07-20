import React from 'react'

import Layout from '../../components/layout'
import { Col, Row } from 'react-bootstrap'

function Home() {
    return (
        <Layout>
            <section>
                <Row>
                <Col xs={12} md={5}>
                    <p>sidebar</p>
                </Col>
                <Col xs={12}  md={7}>
                    <img src="/images/home-banner.jpg" title="home-banner" alt="home-banner" />
                </Col>
                </Row>
            </section>
        </Layout>
    )
}

export default Home
