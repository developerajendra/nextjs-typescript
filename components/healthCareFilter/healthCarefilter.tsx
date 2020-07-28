import React, { useEffect } from 'react'
import {SelectBox, MedicalButton, Loader} from '../common';
import { Col } from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import useSWR from 'swr'

//Custom imports
import {API} from '../../pages/api';
import {fetchTreatmentTypes} from '../../store/reducers/treatmentType/treatmentType.action';
import {countryList} from '../../store/reducers/coutntryList/countryList.action';


/**
 * Static API data fetching
 */
const fetchTreatmentTypeData = ():any =>{
    const { data, error } = useSWR(API.BASE_URL+API.TREATMENT_TYPE, fetchTreatmentTypes)
    if (error) return <div>failed to load</div>
    if (!data) return <Loader /> 
    
    return {
        loader:!data,
        data
    };
}
 

/**
 * API data fetching from redux
 */
const fetchCountryList = ()=>{
    const dispatch = useDispatch();
    const {data, countryListLoader} = useSelector(state => state.countryList)

    useEffect(() => {
        dispatch(countryList(API.COUNTRY_LIST))
    }, []);
    return {
        loader: countryListLoader,
        data
    };
}

const HealthCarefilter = ()=> {
    const countryList = fetchCountryList();
    const tratmentTypeData = fetchTreatmentTypeData();
    
    return (
        <Col lg={8} md={12}>
            {(countryList.loader || tratmentTypeData.loader) ? <Loader /> : null}
            <div className="health-care">
                <h1>Choose the Right Healthcare.<i className="icon-heartbeat"></i></h1>
                <div>
                    {countryList.data && <SelectBox options={countryList.data} label="COUNTRY OF ORIGIN"/>}
                    {tratmentTypeData.data && <SelectBox options={tratmentTypeData.data} label="TREATMENT TYPE"/> }
                    {countryList.data && <SelectBox options={countryList.data} label="COUNTRY OF TREATMNET"/> }
                    <MedicalButton text="SEARCH NOW" type="primary" />
                </div>

            </div>
        </Col>
    )
}

export default HealthCarefilter;

