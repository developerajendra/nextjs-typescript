import React from 'react'
import Layout from '../components/layout'
import {Navigation} from '../components/common';

const headerNavigation = [
    {name:'Hospitals',route:'/hospitals'},
    {name:'Doctors',route:'/doctors'},
   
];

function Hospital() {
    return (
        <Layout>
            <h1>This is hospital page</h1>
            <Navigation navItems={headerNavigation} />
        </Layout>
    )
}

export default Hospital
