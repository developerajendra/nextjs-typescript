import React, { useState, useEffect } from 'react'
import {Col, Row} from 'react-bootstrap';
import {useSelector, useDispatch} from "react-redux";
import { useRouter } from 'next/router';

import {Navigation,  MedicalButton} from '../../components/common';
import {compareProduct} from '../../store/reducers/productList/productList.action';

const headerNavigation = [
    {name:'Hospitals',route:'/hospital/hospitals'},
    {name:'Doctors',route:'/hospital/doctors'},
];



/**
 * Compare product route URL
 * @param selectedHospital 
 */
const generateRouteURL = (selectedHospital)=>{
    let route = '';
    selectedHospital.map(product=>{
         route += `&hospital=${product}`
    });
   return route.lastIndexOf("=")>10 ? `/hospital/compareResult?${route.substring(1)}` : '';
}


function HospitalAndoctorFilterHeader() {
    const route = useRouter();
    const dispatch = useDispatch();
    const {selectedProduct} = useSelector(state => state.compareProduct)
    
    const compareNow = ()=>{
        const selectedRoute = route.route.indexOf("doctors")>-1 ? 'DOCTORS' : 'HOSPITALS';
        dispatch(compareProduct(selectedRoute))
    }

    const onButtonPrimaryClick = ()=>{
            // dispatch(compareProduct('cleanup')) 
            const routePath = generateRouteURL(selectedProduct);
            route.push(routePath);
    }

    useEffect(() => {
        return ()=>{
            dispatch(compareProduct('CLEANUP')) 
        }
    }, [])
    

    return (
        <div className="hospital-secondary-header sticky">
            <Row className="secondary-header-row">
                    <Col lg={3}>
                        <div>
                            <h2>Hospitals & Doctors (387)</h2>
                            <h3>FILTERS</h3>
                        </div> 
                    </Col>
                    <Col lg={7}>
                        <Navigation navItems={headerNavigation} />
                    </Col>
                    <Col lg={2}>
                        <MedicalButton onButtonPrimaryClick={onButtonPrimaryClick} text="Compare Now" type={selectedProduct?.length>1 ? 'primary' : "outline"} onButtonOutlineClick={compareNow} />
                    </Col>
                    
                </Row>
        </div>
    )
}

export default HospitalAndoctorFilterHeader
