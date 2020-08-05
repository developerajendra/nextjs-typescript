import { combineReducers } from 'redux';
import {
    countryReducer, 
    treatTypeReducer, 
    topHospitalsByCountryReducer,
    hospitalsByCountryReducer
} from './filters/filters.reducer';
import {doctorListReducer, hospitalListReducer} from './productList/productList.reducer';
import {compareProductListReducer} from './productDetails/productDetails.reducer';


export default combineReducers({
    countryList: countryReducer,
    treatmentTypes:treatTypeReducer,
    topHospitalsByCountry:topHospitalsByCountryReducer,
    hospitalsByCountry:hospitalsByCountryReducer,
    doctorList:doctorListReducer,
    compareProductList:compareProductListReducer,
    hospitalList:hospitalListReducer
});