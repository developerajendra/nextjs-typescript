import axios from 'axios';
import {COUNTRY_LIST} from '../../../services/apiURLS';
import api from '../../../pages/api/api';
import {TYPE} from './types';

export const countryList =()=> async dispatch=>{
    dispatch({
        type:TYPE.COUNTRY_LIST_LOADER
    })
    const response =  await api.get(COUNTRY_LIST);
        const data = response.map((list)=>{
            return {value:list.name, label:list.name}
        });

        dispatch({
            type:TYPE.COUNTRY_LIST,
            data
        })
}
