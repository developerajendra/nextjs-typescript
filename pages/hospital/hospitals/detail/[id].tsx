import React from 'react'
import {Layout, HospitalDetails} from '../../../../components';
import { useRouter } from 'next/router';


function HospitalDetail(props) {
    return (
        <Layout>
            <HospitalDetails/>
        </Layout>
    )
}

export default HospitalDetail
