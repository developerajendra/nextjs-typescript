import React from 'react'
import {
    Layout,
    KnowledgeBank
} from '../../components'

import {Col, Row} from 'react-bootstrap';

function PageKnowLedgeBank({children}) {
    return (
        <Layout>
            <section className="home-section background knowledge-bank">
                <KnowledgeBank />
            </section>
        </Layout>
    )
}

export default PageKnowLedgeBank
