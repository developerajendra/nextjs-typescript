import React from 'react'
import {
    Layout,
    CostEstimate
} from '../../components'

import {Col, Row} from 'react-bootstrap';

function CostEstimates({children}) {
    return (
        <Layout>
            <section className="home-section background cost-estimates">
                <CostEstimate/>
            </section>
        </Layout>
    )
}

export default CostEstimates
