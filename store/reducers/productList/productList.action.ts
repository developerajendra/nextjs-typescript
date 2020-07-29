import api from '../../../pages/api/api';
import {TYPE} from './types';


/**
 * fetching the doctors list
 * @param API_URL 
 */
export const fetchDoctorsList =(API_URL)=> async dispatch=>{
    dispatch({
        type:TYPE.DOCTORS_LIST_LOADER
    })
    const response =  await api.get(API_URL);
        // const data = response.map((list)=>{
        //     return {label:list.name, value:list.alpha2Code}
        // });

        dispatch({
            type:TYPE.DOCTORS_LIST,
            data:response
        })
}

 