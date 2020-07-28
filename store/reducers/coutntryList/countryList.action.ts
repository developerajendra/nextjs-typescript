import api from '../../../pages/api/api';
import {TYPE} from './types';

export const countryList =(API_URL)=> async dispatch=>{
    dispatch({
        type:TYPE.COUNTRY_LIST_LOADER
    })
    const response =  await api.get(API_URL);
        const data = response.map((list)=>{
            return {value:list.name, label:list.name}
        });

        dispatch({
            type:TYPE.COUNTRY_LIST,
            data
        })
}
