import React from 'react'
import {Layout, DoctorDetails} from '../../../../components';
import { useRouter } from 'next/router'

function HospitalDetail(props) {
    return (
        <Layout>
            <DoctorDetails />
        </Layout>
    )
}

export default HospitalDetail
