import React, { useEffect, useState } from 'react'
import {SelectBox, MedicalButton, Loader} from '../common';
import { Col, Row } from 'react-bootstrap'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  
function HealthCarefilter() {
    const [loader, setloader] = useState(false);
    const [countryData, setcountryData] = useState([])
     

    const getCountryList = async ()=>{
        setloader(true);
       const response = await fetch('https://restcountries.eu/rest/v2/all');
       const data = await response.json();

       setloader(false);
        setcountryData(data);
    }

    useEffect(() => {
        !countryData.length && getCountryList();
    }, [])

    return (
        <Col lg={8} md={12}>
            <div className="health-care">
                <h1>Choose the Right Healthcare.<i className="icon-heartbeat"></i></h1>
                <div>
                    {loader && <Loader /> }
                    <SelectBox options={options} label="COUNTRY OF ORIGIN"/>
                    <SelectBox options={options} label="TREATMENT TYPE"/> 
                    <SelectBox options={options} label="COUNTRY OF TREATMNET"/> 
                    <MedicalButton text="SEARCH NOW" type="primary" />
                </div>
            </div>
        </Col>
    )
}

export default HealthCarefilter

