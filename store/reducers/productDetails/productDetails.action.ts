import api from '../../../pages/api/api';
import {TYPE} from './types';
import {keyMapper} from '../../../pages/api';
import {DOCTOR_DETAILS_MODEL} from '../../../components/doctorDetails/model.doctorDetails';
import {HOSPITAL_DETAIL_MODEL, HOSPITAL_REVIEW} from '../../../components/hospitalDetail/model.hospitalDetails';
import {COMPARISON_RESULT_MODEL} from '../../../components/comparisonResult/model.comparisonResult';
import {API} from '../../../pages/api';

/**
 * Compare product details
 * @param API_URL 
 */
export const fetchCompareProductList =(API_URL, payload)=> async dispatch=>{
console.log('payload.doctor',payload);

    // let payloadData = payload.doctor ? {"doctorsids": payload.doctor } : {"categoryIds":payload.hospital}
    let URL =   payload.doctorsids ? API.COMPARE_DOCTOR_PRODUCTS : API_URL

    dispatch({
        type:TYPE.COMPARE_PRODUCT_LIST_LOADER
    })
    
    const response =  await api.post(URL, payload);
        keyMapper(response, COMPARISON_RESULT_MODEL);
        dispatch({
            type:TYPE.COMPARE_PRODUCT_LIST,
            data:response
        })
}

 

/**
 * Doctor details
 * @param API_URL 
 */
export const fetchDoctorDetails = async(API_URL, payload)=>  {
    // dispatch({
    //     type:TYPE.COMPARE_PRODUCT_LIST_LOADER
    // })
    
    
    const response =  await api.get(API_URL+payload);
        let _response = response[0]
        keyMapper(response, DOCTOR_DETAILS_MODEL);
        // dispatch({
        //     type:TYPE.COMPARE_PRODUCT_LIST,
        //     data:response
        // });
        return _response
}

 

/**
 * Doctor details
 * @param API_URL 
 */
export const fetchHospitalDetails = async(API_URL, payload)=>  {
    // dispatch({
    //     type:TYPE.COMPARE_PRODUCT_LIST_LOADER
    // })
    console.log("payload route", payload);
    const response =  await api.get(API_URL+payload);
    let _response = response[0];
    
    keyMapper(_response, HOSPITAL_DETAIL_MODEL);
    // dispatch({
    //     type:TYPE.COMPARE_PRODUCT_LIST,
    //     data:response
    // });
    return _response
}



 
 
export const hospitalReviewAndRating = async (API_URL, payload)=> {
    const response =  await api.get(API_URL+payload);
    keyMapper(response, HOSPITAL_REVIEW);
    return response;
}
 