import React from 'react'
import {Layout, NewsDetails} from '../../../components';
import { useRouter } from 'next/router'

function HospitalDetail(props) {
    return (
        <Layout>
            <NewsDetails />
        </Layout>
    )
}

export default HospitalDetail
