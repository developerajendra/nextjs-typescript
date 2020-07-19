import React from 'react'
import {Layout} from '../../../../components';
import { useRouter } from 'next/router'

function HospitalDetail(props) {
    const router = useRouter();
    const {id} = router.query;
    console.log('router', router);
    
    
    return (
        <Layout>
            <h5>Doctors details</h5>
        </Layout>
    )
}

export default HospitalDetail
