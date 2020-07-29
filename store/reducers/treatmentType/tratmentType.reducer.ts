import {TYPE} from './types';

export const treatTypeReducer = (state = [], action)=>{
     switch(action.type){
        case TYPE.TREATMENT_LIST:
            return {...state, treatmentTypeData:action.data, treatmentTypesLoader: false};

        case TYPE.TREATMENT_LIST_LOADER:
            return {...state, treatmentTypesLoader: true};
    }
    return state;
}