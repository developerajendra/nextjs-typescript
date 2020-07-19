import React from 'react'
import Layout from '../../components/layout'
import {Navigation} from '../../components/common';

const headerNavigation = [
    {name:'Hospitals',route:'/hospital/hospitals'},
    {name:'Doctors',route:'/hospital/doctors'},
   
];

function Hospital({children}) {
    return (
        <Layout>
            <h5>This is hospital page</h5>
            <Navigation navItems={headerNavigation} />
            {children}
        </Layout>
    )
}

export default Hospital
