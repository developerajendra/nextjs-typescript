import {countryReducer} from './coutntryList/countryList.reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    countryList: countryReducer
});
