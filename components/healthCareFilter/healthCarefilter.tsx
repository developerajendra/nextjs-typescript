import React, { useEffect, useState } from 'react'
import {SelectBox, MedicalButton, Loader} from '../common';
import { Col } from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import useSWR from 'swr'

//Custom imports
import {API} from '../../pages/api';
import {fetchTreatmentTypes, fetchCountryList, fetchCountryLisByTreatment} from '../../store/reducers/filters/filters.action';


/**
 * API data treatment types from redux
 * Fetch the treatment types if it's not exist on redux store
 */
const fetchTreatmentTypesData = ()=>{
    const dispatch = useDispatch();
    const {treatmentTypeData, treatmentTypesLoader} = useSelector(state => state.treatmentTypes)

    useEffect(() => {
        !treatmentTypeData && dispatch(fetchTreatmentTypes(API.TREATMENT_TYPE))
    }, []);
    return {
        loader: treatmentTypesLoader,
        data:treatmentTypeData
    };
}

 

/**
 * API data fetching from redux
 * Fetch the country list if it's not exist on redux store
 */
const fetchCountryListData = ()=>{
    const dispatch = useDispatch();
    const {countryListData, countryListLoader} = useSelector(state => state.countryList)

    useEffect(() => {
        !countryListData && dispatch(fetchCountryList(API.COUNTRY_LIST))
    }, []);
    return {
        loader: countryListLoader,
        data:countryListData
    };
}

const initialState = {
    isSelcted:false,
    countryOfOrigin: null,
    treatmentType: null,
    countryOfTreatment: null
};

const HealthCarefilter = ()=> {
    const dispatch = useDispatch();
    const {countryListByTreatmentData, countryListByTratementLoader} = useSelector(state => state.countryListByTreatment);
    const [dropDownValue, setdropDownValue] = useState(initialState);
    const countryList = fetchCountryListData();
    const tratmentTypeData = fetchTreatmentTypesData();
    const loader = countryList.loader || tratmentTypeData.loader || countryListByTratementLoader;


    const onOriginSelect = (selectedValue)=>{
        setdropDownValue({
            ...dropDownValue,
            isSelcted:true,
            countryOfOrigin: selectedValue.value
        });
    };
    const onTreatMentTypeSelect = (selectedValue)=>{
        setdropDownValue({
            ...dropDownValue,
            isSelcted:true,
            treatmentType: selectedValue.value
        });
        
        return dispatch(fetchCountryLisByTreatment(API.COUNTRY_LIST_BY_TREATMENT, selectedValue.crtdUser))
    };
    const onCountryOfTreatmentSelect = (selectedValue)=>{
        setdropDownValue({
            ...dropDownValue,
            isSelcted:true,
            countryOfTreatment: selectedValue.value
        });
    };
     const isOneSelected = dropDownValue.isSelcted;
     const {
        treatmentType,
        countryOfTreatment
     } = dropDownValue;
     const routesQuery = `/hospital/hospitals?treatment-type=${treatmentType}&country-of-treatment=${countryOfTreatment}`
     
      
     
    
    return (
        <Col lg={8} md={12}>
            {loader ? <Loader /> : null}
            <div className="health-care">
                <h1>Choose the Right Healthcare.<i className="icon-heartbeat"></i></h1>
                <div>
                    {countryList.data && <SelectBox onSelect={onOriginSelect} options={countryList.data} label="COUNTRY OF ORIGIN"/>}
                    {tratmentTypeData.data && <SelectBox onSelect={onTreatMentTypeSelect} options={tratmentTypeData.data} label="TREATMENT TYPE"/> }
                    {countryListByTreatmentData && <SelectBox onSelect={onCountryOfTreatmentSelect} options={countryListByTreatmentData} label="COUNTRY OF TREATMNET"/> }
                    <MedicalButton disabled={loader || !isOneSelected} text="SEARCH NOW" type="primary" routeLink={routesQuery} />
                </div>

            </div>
        </Col>
    )
}

export default HealthCarefilter;

