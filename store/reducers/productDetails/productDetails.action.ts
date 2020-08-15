import api from '../../../pages/api/api';
import {TYPE} from './types';
import {keyMapper} from '../../../pages/api';
import {DOCTOR_DETAILS_MODEL} from '../../../components/doctorDetails/model.doctorDetails';
import {HOSPITAL_DETAIL_MODEL} from '../../../components/hospitalDetail/model.hospitalDetails';

/**
 * Compare product details
 * @param API_URL 
 */
export const fetchCompareProductList =(API_URL, payload)=> async dispatch=>{
    dispatch({
        type:TYPE.COMPARE_PRODUCT_LIST_LOADER
    })
    const response =  await api.get(API_URL);
        keyMapper(response, DOCTOR_DETAILS_MODEL);
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
    const response =  await api.get(API_URL);
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
    const response =  await api.get(API_URL);
        keyMapper(response, HOSPITAL_DETAIL_MODEL);
        // dispatch({
        //     type:TYPE.COMPARE_PRODUCT_LIST,
        //     data:response
        // });
        return response
}

 