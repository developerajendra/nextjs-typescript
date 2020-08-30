import React, { useEffect, useState } from 'react'
import {FeaturedHospital} from '../common';
import {Row, Col} from 'react-bootstrap';

//Custom imports
import { Loader} from '../common';
import {API} from '../../pages/api';
import {featuredHospitals} from '../../store/reducers/productList/productList.action';

const data = [
    {countryName:'INDIA', numberOfHospitals:317, numberOfDoctors:796,image:"india-1.jpg"},
    {countryName:'TURKEY', numberOfHospitals:247, numberOfDoctors:557,image:"turkey.jpg"},
    {countryName:'USA', numberOfHospitals:610, numberOfDoctors:1090,image:"usa.jpg"},
    {countryName:'SPAIN', numberOfHospitals:518, numberOfDoctors:887,image:"spain.jpg"},
    {countryName:'United Kingdom', numberOfHospitals:610, numberOfDoctors:1390,image:"uk.jpg"}
]



function FeaturedHospitals() {
    const [featuredHospitalData, setfeaturedHospitalData] = useState([]);
    const [loader, setloader] = useState(false);
    useEffect(() => {
        setloader(true);
        featuredHospitals(API.FEATURE_DETAILS).then(data=>{
             setfeaturedHospitalData(data);
            setloader(false);
        });
    }, [ ])
    return (
        <div className="featured-hospitals">
            {loader ? <Loader/> : null}
            <div className="list-header">
                <span>Around The World</span>
                <h2>Featured Hospitals</h2>
            </div>
                <ul>
                    <Row>
                        {
                            featuredHospitalData.map((list:any, index:number)=>{
                                return <Col className="list" lg={2}><li> <FeaturedHospital {...list} /> </li></Col>
                            })
                            
                        }
                    </Row>
                </ul>    
        </div>
    )
}

export default FeaturedHospitals
