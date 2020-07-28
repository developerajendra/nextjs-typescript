import React from 'react'
import {Row, Col} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";

import {CompareDestinationCard, SelectBox, MedicalButton} from '../common';


function CompareDestinationList() {

    const {data, countryListLoader} = useSelector(state => state.countryList);
     
    

    return (
        <div className='destination-compare-wrapper'>
             <div className="list-header">
                <span>EASY TO CHOOSE</span>
                <h2>Compare Best Medical Destination</h2>
            </div>
            <div className="select-desease">
                <SelectBox styleTypeDefault={true} defaultSelectText="Select Disease Type"/>
            </div>
            <div className="destination-cards">
                <Row>
                    <Col lg={3} md={6} xs={12}>
                        <CompareDestinationCard countryList={data} loader={countryListLoader} image="india"/>
                    </Col>
                    <Col lg={3} md={6} xs={12}>
                        <CompareDestinationCard countryList={data} loader={countryListLoader}  />
                        </Col>
                    <Col lg={3} md={6} xs={12}>
                        <CompareDestinationCard countryList={data} loader={countryListLoader}  />
                        </Col>
                    <Col lg={3} md={6} xs={12}>
                        <CompareDestinationCard countryList={data} loader={countryListLoader}  />
                        </Col>
                </Row> 
                <Row className="button-wrapper">
                        <MedicalButton text="Clear Inputs" type="outline" />
                        <MedicalButton text="COMPARE NOW" type="primary" routeLink="/hospital/compareResult" />
                </Row> 
            </div>
        </div>
    )
}

export default CompareDestinationList
