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
 * country list By treatment reducer
 * @param state 
 * @param action 
 */
export const countryListByTreatmentReducer = (state = [], action)=>{
     switch(action.type){
        case TYPE.COUNTRY_LIST_BY_TREATMENT:
            return {...state, countryListByTreatmentData:action.data, countryListByTratementLoader: false};

        case TYPE.COUNTRY_LIST_BY_TREATMENT_LOADER:
            return {...state, countryListByTratementLoader: true};
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
 * hospitals by county
 * @param state 
 * @param action 
 */
export const hospitalsByCountryReducer = (state = [], action)=>{
    switch(action.type){
       case TYPE.HOSPITALS_BY_COUNTRY:
           return {...state, hospitalsByCountryData:{[action.selectedCountry]:action.data}, hospitalsByCountryLoader: {[action.selectedCountry]:false}};

       case TYPE.HOSPITALS_BY_COUNTRY_LOADER:
           return {...state, hospitalsByCountryLoader: {[action.selectedCountry]:true}};
   }
   return state;
}



/**
 * product filter reducer
 * @param state 
 * @param action 
 */
export const productFitlerReducer = (state = [], action)=>{
    switch(action.type){
       case TYPE.PRODUCT_FILTERS:
           return {productFilters:action.filters};
   }
   return state;
}