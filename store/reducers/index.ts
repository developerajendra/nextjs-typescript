import { combineReducers } from 'redux';
import {
    countryReducer, 
    countryListByTreatmentReducer,
    treatTypeReducer, 
    productFitlerReducer,
    hospitalsByCountryReducer
} from './filters/filters.reducer';
import {doctorListReducer, hospitalListReducer, compareProductReducer} from './productList/productList.reducer';
import {compareProductListReducer} from './productDetails/productDetails.reducer';


export default combineReducers({
    countryList: countryReducer,
    countryListByTreatment:countryListByTreatmentReducer,
    treatmentTypes:treatTypeReducer,
    productFitler:productFitlerReducer,
    hospitalsByCountry:hospitalsByCountryReducer,
    doctorList:doctorListReducer,
    compareProductList:compareProductListReducer,
    hospitalList:hospitalListReducer,
    compareProduct:compareProductReducer
});