import api from '../../../pages/api/api';
import {TYPE} from './types';
import {keyMapper} from '../../../pages/api/util';
import {DOCTOR_LIST_MODEL} from '../../../components/doctorListing/model.doctorList';
import {HOSPITAL_LIST_MODEL} from '../../../components/hospitalList/model.hospitalList';
import {FEATURED_HOSPITALS_MOEDEL} from '../../../components/featuredHospitals/model.featuredHospitals';
import {API} from '../../../pages/api';

/**
 * fetching the doctors list
 * @param API_URL 
 */
export const fetchDoctorsList =(API_URL, filters?)=> async dispatch=>{

    let state = filters.states?.length ? {
        "STATE_CD": filters.states,
    } : {};

    let payloadData = {"limit":"2",OffSet:0,"CRTD_USER":filters.crtdUser,"COUNTRY_CD": filters.country, ...state,};
    dispatch({
        type:TYPE.DOCTORS_LIST_LOADER
    })
    const response =  await api.post(API_URL, payloadData);
        keyMapper(response, DOCTOR_LIST_MODEL);
        dispatch({
            type:TYPE.DOCTORS_LIST,
            data:response
        })
}

 
/**
 * fetching the hospital list
 * @param API_URL 
 */
export const fetchHospitalList =(API_URL, filters, loadMore?:string)=> async dispatch=>{
    
    let state = filters.states?.length ? {
        "STATE_CD": filters.states,
    } : {};

    let payloadData = filters.search ?  {searchitem:filters.search} : {Limit:filters.limit || 2, OffSet:filters.offset || 0, CRTD_USER:filters.crtdUser, COUNTRY_CD: filters.country, ...state};
    let URL = filters.search ? API.HOSPITAL_SEARCH : API_URL;

    
    dispatch({
        type:TYPE.HOSPITAL_LIST_LOADER
    })
    const response =  await api.post(URL, payloadData);
    
    
        keyMapper(response.Data, HOSPITAL_LIST_MODEL);
        keyMapper(response.Filter, HOSPITAL_LIST_MODEL);
        
        dispatch({
            type:loadMore ? TYPE.HOSPITAL_LIST+loadMore : TYPE.HOSPITAL_LIST,
            data:response.Data,
            filter:response.Filter
        });
        
}


/**
 * comparing the product
 * @param API_URL 
 */
export const compareProduct =(PRODUCT_TYPE, selectedProducts = [])=> dispatch=>{
    
    if(!selectedProducts.length){
        dispatch({
            type:TYPE.COMPARE_PRODUCT_TYPE+PRODUCT_TYPE
        });
        return ;
    }

    dispatch({
        type:TYPE.COMPARE_PRODUCT_TYPE+PRODUCT_TYPE,
        data: selectedProducts
    });
}

 


 
export const featuredHospitals = async (API_URL)=> {
    const response =  await api.get(API_URL);
    keyMapper(response, FEATURED_HOSPITALS_MOEDEL);
    return response;
}
 