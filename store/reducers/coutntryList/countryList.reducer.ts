import {TYPE} from './types';

export const countryReducer = (state = [], action)=>{
     switch(action.type){
        case TYPE.COUNTRY_LIST:
            return {...state, countryListData:action.data, countryListLoader: false};

        case TYPE.COUNTRY_LIST_LOADER:
            return {...state, countryListLoader: true};
    }
    return state;
}