import { combineReducers } from 'redux';
import {countryReducer, treatTypeReducer, topHospitalsByCountryReducer} from './filters/filters.reducer';


export default combineReducers({
    countryList: countryReducer,
    treatmentTypes:treatTypeReducer,
    topHospitalsByCountry:topHospitalsByCountryReducer
});
