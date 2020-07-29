import api from '../../../pages/api/api';
import {TYPE} from '../filters/types';


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
