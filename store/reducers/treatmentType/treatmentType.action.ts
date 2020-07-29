import api from '../../../pages/api/api';
import {TYPE} from './types';

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
