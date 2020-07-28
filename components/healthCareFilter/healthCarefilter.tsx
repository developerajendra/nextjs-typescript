import React, { useEffect } from 'react'
import {SelectBox, MedicalButton, Loader} from '../common';
import { Col } from 'react-bootstrap'
import {countryList} from '../../store/reducers/coutntryList/countryList.action';
import {useDispatch, useSelector} from "react-redux";

 
function HealthCarefilter() {

    const dispatch = useDispatch();
    const {data, countryListLoader} = useSelector(state => state.countryList)

    useEffect(() => {
        dispatch(countryList())
    }, []);

  
    return (
        <Col lg={8} md={12}>
            {countryListLoader ? <Loader /> : null}
            <div className="health-care">
                <h1>Choose the Right Healthcare.<i className="icon-heartbeat"></i></h1>
                {data && <div>
                    <SelectBox options={data} label="COUNTRY OF ORIGIN"/>
                    <SelectBox options={data} label="TREATMENT TYPE"/> 
                    <SelectBox options={data} label="COUNTRY OF TREATMNET"/> 
                    <MedicalButton text="SEARCH NOW" type="primary" />
                </div>}

            </div>
        </Col>
    )
}

export default HealthCarefilter;

