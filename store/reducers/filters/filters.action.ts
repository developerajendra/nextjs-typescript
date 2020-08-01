import {api, keyMapper} from '../../../pages/api';
import {TYPE} from '../filters/types';
import {COMPARE_DESTINATION_MODEL} from '../../../components/compareDestinationList/model.compareDestinationList';
import {STATES_MODEL} from './model.filters';

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
 * fetching the states based on selected country
 * @param API_URL 
 */
export const fetchStatesByCountry = async (API_URL, payload)=> {
    // dispatch({
    //     type:TYPE.COUNTRY_LIST_LOADER
    // })
    const response =  await api.get(API_URL);
        keyMapper(response, STATES_MODEL);
        const data = response.map((list)=>{
            return {label:list.stateName, value:list.stateName}
        });

        // dispatch({
        //     type:TYPE.COUNTRY_LIST,
        //     data
        // })
        
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
        return {value:list.id, label:list.name}
    });

    dispatch({
        type:TYPE.TREATMENT_LIST,
        data
    })
}




/**
 * treatment type action
 * @param API_URL 
 */
export const fetchTopHospialsByCountry =(API_URL, payload)=> async dispatch=>{
    console.log('payload', payload);
    
    dispatch({
        type:TYPE.TOP_HOSPITALS_BY_COUNTRY_LOADER
    })
    const response =  await api.get(API_URL);
    const data = response.map((list)=>{
        return {value:list.id, label:list.name}
    });

    dispatch({
        type:TYPE.TOP_HOSPITALS_BY_COUNTRY,
        data
    })
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
