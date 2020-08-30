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


 

/**
 * hospital list reducer
 * @param state 
 * @param action 
 */
let products = [];
export const hospitalListReducer = (state = [], action)=>{
    switch(action.type){
       case TYPE.HOSPITAL_LIST:           
       products = [];
           products.push(...action.data);
           return {...state, hospitalListData:action.data, filter:action.filter, hospitalListDataLoader: false};

        case TYPE.HOSPITAL_LIST+'LOAD_MORE':
            
            products.push(...action.data);
           return {...state, hospitalListData:products, filter:action.filter, hospitalListDataLoader: false};

       case TYPE.HOSPITAL_LIST_LOADER:
           return {...state, hospitalListDataLoader: true};
   }
   return state;
}

 

/**
 * Compare product reducer
 * @param state 
 * @param action 
 */
export const compareProductReducer = (state = [], action)=>{
    // console.log('cccc', action.type);

    switch(action.type){
        case TYPE.COMPARE_PRODUCT_TYPE_HOSPITALS:
           return { compareHospitals:true,  ...state, selectedProduct: action.data};

        case TYPE.COMPARE_PRODUCT_TYPE_DOCTORS:
           return { compareDoctors: true, selectedProduct:action.data};
       
        case TYPE.COMPARE_PRODUCT_TYPE_CLEANUP:
            return [];
   }
   return state;
}


