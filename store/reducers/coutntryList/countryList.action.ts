import api from '../../../pages/api/api';
import {TYPE} from './types';

export const countryList =(API_URL)=> async dispatch=>{
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
