import api from '../../../pages/api/api';
import {TYPE} from './types';
import {keyMapper} from '../../../pages/api/util';
import {DOCTOR_LIST_MODEL} from '../../../components/doctorListing/model.doctorList';
import {HOSPITAL_LIST_MODEL} from '../../../components/hospitalList/model.hospitalList';

/**
 * fetching the doctors list
 * @param API_URL 
 */
export const fetchDoctorsList =(API_URL, filters?)=> async dispatch=>{

    let payloadData = {"Count":"10","CRTD_USER":filters.crtdUser,"COUNTRY": filters.country, "STATE_CD": filters.states};
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
export const fetchHospitalList =(API_URL, filters)=> async dispatch=>{

    let payloadData = {"Count":"10","CRTD_USER":filters.crtdUser,"COUNTRY": filters.country, "STATE_CD": filters.states, search:filters.search};
    
    dispatch({
        type:TYPE.HOSPITAL_LIST_LOADER
    })
    const response =  await api.post(API_URL, payloadData);
        keyMapper(response, HOSPITAL_LIST_MODEL);
        
        dispatch({
            type:TYPE.HOSPITAL_LIST,
            data:response
        })
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

 