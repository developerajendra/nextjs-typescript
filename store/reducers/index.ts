import { combineReducers } from 'redux';
import {countryReducer, treatTypeReducer} from './filters/filters.reducer';


export default combineReducers({
    countryList: countryReducer,
    treatmentTypes:treatTypeReducer
});
