import {TYPE} from './types';

/**
 * compare product details
 * @param state 
 * @param action 
 */
export const compareProductListReducer = (state = [], action)=>{
     switch(action.type){
        case TYPE.COMPARE_PRODUCT_LIST:
            return {...state, compareProductListData:action.data, compareProductListLoader: false};

        case TYPE.COMPARE_PRODUCT_LIST_LOADER:
            return {...state, compareProductListLoader: true};
    }
    return state;
}


 