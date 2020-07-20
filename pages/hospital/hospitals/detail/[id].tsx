import React from 'react'
import {Layout, HospitalDetails} from '../../../../components';
import { useRouter } from 'next/router';


function HospitalDetail(props) {
    const router = useRouter();
    const {id} = router.query;
    console.log('router', router);
    
    
    return (
        <Layout>
            <HospitalDetails/>
        </Layout>
    )
}

export default HospitalDetail
