import { combineReducers } from 'redux';
import {
    countryReducer, 
    treatTypeReducer, 
    topHospitalsByCountryReducer,
    hospitalsByCountryReducer
} from './filters/filters.reducer';
import {doctorListReducer} from './productList/productList.reducer';


export default combineReducers({
    countryList: countryReducer,
    treatmentTypes:treatTypeReducer,
    topHospitalsByCountry:topHospitalsByCountryReducer,
    hospitalsByCountry:hospitalsByCountryReducer,
    doctorList:doctorListReducer
});
