import api from '../../../pages/api/api';
import {TYPE} from './types';
import {keyMapper} from '../../../pages/api/util';
import {COMPARISON_RESULT_MODEL} from '../../../components/comparisonResult/model.comparisonResult';

/**
 * Compare product details
 * @param API_URL 
 */
export const fetchCompareProductList =(API_URL, payload)=> async dispatch=>{
    dispatch({
        type:TYPE.COMPARE_PRODUCT_LIST_LOADER
    })
    const response =  await api.get(API_URL);
        keyMapper(response, COMPARISON_RESULT_MODEL);
        dispatch({
            type:TYPE.COMPARE_PRODUCT_LIST,
            data:response
        })
}

 