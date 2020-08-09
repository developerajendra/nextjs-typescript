import {api, keyMapper} from '../../../pages/api';
import {TYPE} from '../filters/types';
import {COMPARE_DESTINATION_MODEL} from '../../../components/compareDestinationList/model.compareDestinationList';
import {STATES_MODEL} from './model.filters';
import {COST_ESTIMATE_MODEL} from '../../../components/costEstimate/model.costEstimate';

/**
 * Country list action
 * @param API_URL 
 */
export const fetchCountryList =(API_URL)=> async dispatch=>{
    dispatch({
        type:TYPE.COUNTRY_LIST_LOADER
    })
    const response =  await api.get(API_URL);
        const data = response.map((list)=>{
            return {label:list.name, value:list.alpha2Code}
        });

        dispatch({
            type:TYPE.COUNTRY_LIST,
            data
        })
}


/**
 * Country list by treatment action
 * @param API_URL 
 */
export const fetchCountryLisByTreatment =(API_URL, treatmentType)=> async dispatch=>{
    dispatch({
        type:TYPE.COUNTRY_LIST_BY_TREATMENT_LOADER
    })
    const response =  await api.get(API_URL);
        const data = response.map((list)=>{
            return {label:list.COUNTRY_NM, value:list.COUNTRY_CD, crtdUser:list.CRTD_USR}
        });

        dispatch({
            type:TYPE.COUNTRY_LIST_BY_TREATMENT,
            data
        })
}


/**
 * fetching the states based on selected country
 * @param API_URL 
 */
export const fetchStatesByCountry = async (API_URL, payload)=> {
    const response =  await api.get(API_URL);
    keyMapper(response, STATES_MODEL);
    const data = response.map((list)=>{
        return {label:list.stateName, value:list.stateName}
    });
    return data;
}



/**
 * treatment type action
 * @param API_URL 
 */
export const fetchTreatmentTypes =(API_URL)=> async dispatch=>{
    dispatch({
        type:TYPE.TREATMENT_LIST_LOADER
    })
    const response =  await api.get(API_URL);
    const data = response.map((list)=>{
        return {value:list.id, crtdUser:list.CRTD_USR, label:list.SPECIALITY_DESC}
    });

    dispatch({
        type:TYPE.TREATMENT_LIST,
        data
    })
    return data;
}


/**
 * fetching hospitals by country
 * @param API_URL 
 */
export const fetchHospialsByCountry =(API_URL, selectedCountry)=> async dispatch=>{
    
    dispatch({
        type:TYPE.HOSPITALS_BY_COUNTRY_LOADER
    })
    const response =  await api.get(API_URL);
    keyMapper(response, COMPARE_DESTINATION_MODEL);
    
    const data = response.map((list)=>{
        return {value:list.hospitalId, label:list.hospitalName}
    });



    dispatch({
        type:TYPE.HOSPITALS_BY_COUNTRY,
        data,
        selectedCountry
    })
    return data;
}



/**
 * Fetching the cost estimate
 * @param API_URL 
 */
export const fetchCostEstimatesList = async(API_URL)=>  {
    const response =  await api.get(API_URL);
        keyMapper(response, COST_ESTIMATE_MODEL);
        const data = response.map((list)=>{
            return {label:list.packageName, value:list.packageId}
        });

    return data;
}

/**
 * Fetch cost estimate details
 * @param API_URL 
 */
export const fetchCostEstimatesDetail = async(API_URL, payload)=>  {
    const response =  await api.get(API_URL);
        keyMapper(response, COST_ESTIMATE_MODEL);
        return response
}
