import api from '../../../pages/api/api';
import {TYPE} from './types';
import {keyMapper} from '../../../pages/api/util';
import {DOCTOR_LIST_MODEL} from '../../../components/doctorListing/model.doctorList';

/**
 * fetching the doctors list
 * @param API_URL 
 */
export const fetchDoctorsList =(API_URL)=> async dispatch=>{
    dispatch({
        type:TYPE.DOCTORS_LIST_LOADER
    })
    const response =  await api.get(API_URL);
        keyMapper(response, DOCTOR_LIST_MODEL);
        dispatch({
            type:TYPE.DOCTORS_LIST,
            data:response
        })
}

 