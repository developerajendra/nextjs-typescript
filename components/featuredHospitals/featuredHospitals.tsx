import React from 'react'
import {FeaturedHospital} from '../common';
import {Row, Col} from 'react-bootstrap';

const data = [
    {countryName:'INDIA', numberOfHospitals:317, numberOfDoctors:796,image:"india-1.jpg"},
    {countryName:'TURKEY', numberOfHospitals:247, numberOfDoctors:557,image:"turkey.jpg"},
    {countryName:'USA', numberOfHospitals:610, numberOfDoctors:1090,image:"usa.jpg"},
    {countryName:'SPAIN', numberOfHospitals:518, numberOfDoctors:887,image:"spain.jpg"},
    {countryName:'United Kingdom', numberOfHospitals:610, numberOfDoctors:1390,image:"uk.jpg"}
]

function FeaturedHospitals() {
    return (
        <div className="featured-hospitals">
            <div className="list-header">
                <span>Around The World</span>
                <h2>Featured Hospitals</h2>
            </div>
                <ul>
                    <Row>
                        {
                            data.map((list:any, index:number)=>{
                                return <Col className="list" lg={2}><li> <FeaturedHospital {...list} /> </li></Col>
                            })
                            
                        }
                    </Row>
                </ul>    
        </div>
    )
}

export default FeaturedHospitals
