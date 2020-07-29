import {TYPE} from './types';

/**
 * doctor list reducer
 * @param state 
 * @param action 
 */
export const doctorListReducer = (state = [], action)=>{
     switch(action.type){
        case TYPE.DOCTORS_LIST:
            return {...state, doctorListData:action.data, doctorListDataLoader: false};

        case TYPE.DOCTORS_LIST_LOADER:
            return {...state, doctorListDataLoader: true};
    }
    return state;
}


 