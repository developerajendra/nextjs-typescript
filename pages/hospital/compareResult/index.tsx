import React from 'react'
import {
    Layout,
    ComparisonResult
} from '../../../components'

 
import {Col, Row} from 'react-bootstrap';

function Compare({children}) {
    return (
        <Layout>
                 <ComparisonResult/>
        </Layout>
    )
}

export default Compare
