import {TYPE} from '../filters/types';

/**
 * country list reducer
 * @param state 
 * @param action 
 */
export const countryReducer = (state = [], action)=>{
     switch(action.type){
        case TYPE.COUNTRY_LIST:
            return {...state, countryListData:action.data, countryListLoader: false};

        case TYPE.COUNTRY_LIST_LOADER:
            return {...state, countryListLoader: true};
    }
    return state;
}




/**
 * treatment type reducer
 * @param state 
 * @param action 
 */
export const treatTypeReducer = (state = [], action)=>{
     switch(action.type){
        case TYPE.TREATMENT_LIST:
            return {...state, treatmentTypeData:action.data, treatmentTypesLoader: false};

        case TYPE.TREATMENT_LIST_LOADER:
            return {...state, treatmentTypesLoader: true};
    }
    return state;
}



/**
 * treatment type reducer
 * @param state 
 * @param action 
 */
export const topHospitalsByCountryReducer = (state = [], action)=>{
    switch(action.type){
       case TYPE.TOP_HOSPITALS_BY_COUNTRY:
           return {...state, topHospitalsByCountryData:action.data, topHospitalsByCountryLoader: false};

       case TYPE.TOP_HOSPITALS_BY_COUNTRY_LOADER:
           return {...state, topHospitalsByCountryLoader: true};
   }
   return state;
}