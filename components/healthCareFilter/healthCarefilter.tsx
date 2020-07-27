import React, { useEffect, useState } from 'react'
import {SelectBox, MedicalButton, Loader} from '../common';
import { Col, Row } from 'react-bootstrap'
import useSWR from 'swr';
// import fetch from 'unfetch';


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

const API_URL = 'https://restcountries.eu/rest/v2/all';
   const fetcher = async (URL)=>{
   const response = await fetch(URL);
   const _data = await response.json();
   const data = _data.map((list)=>{
        return {value:list.name, label:list.name}
   });
    return data;
}

  
function HealthCarefilter() {
    const { data, error } = useSWR(API_URL, fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return  <Loader />;
  
    

    return (
        <Col lg={8} md={12}>
            <div className="health-care">
                <h1>Choose the Right Healthcare.<i className="icon-heartbeat"></i></h1>
                <div>
                    <SelectBox options={data} label="COUNTRY OF ORIGIN"/>
                    <SelectBox options={data} label="TREATMENT TYPE"/> 
                    <SelectBox options={data} label="COUNTRY OF TREATMNET"/> 
                    <MedicalButton text="SEARCH NOW" type="primary" />
                </div>

            </div>
        </Col>
    )
}

export default HealthCarefilter

