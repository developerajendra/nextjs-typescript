import { combineReducers } from 'redux';
import {countryReducer} from './coutntryList/countryList.reducer';
import {treatTypeReducer} from './treatmentType/tratmentType.reducer';


export default combineReducers({
    countryList: countryReducer,
    treatmentTypes:treatTypeReducer
});
