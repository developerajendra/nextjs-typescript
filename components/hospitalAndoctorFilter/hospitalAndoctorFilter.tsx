import React,{useState, useEffect} from 'react'
import {SelectBox, CheckBox, Loader} from '../common';
import {useSelector, useDispatch} from "react-redux";
import {useRouter} from 'next/router';

//Custom imports
import {API} from '../../pages/api';
import {fetchTreatmentTypes} from '../../store/reducers/treatmentType/treatmentType.action';
import {countryList} from '../../store/reducers/coutntryList/countryList.action';


const filterData = [
    {text:'Ahmadabad',id:1},
    {text:'Aluva',id:2},
    {text:'Ambattur',id:3},
    {text:'Amritsar',id:4},
    {text:'Anand',id:5},
    {text:'Anekal',id:6},
    {text:'Ballabgarh',id:7},
    {text:'Banglore',id:8},
    {text:'Bhubneswar',id:10},
    {text:'Chandigarh',id:11},
    {text:'Chennai',id:12},
    {text:'Delhi',id:13},
    {text:'Dehradun',id:14},
    {text:'Dimapur',id:15},
    {text:'Dhanbad',id:16}
]
 
const initialState = {
    country: null,
    treatmentType: null
};





/**
 * API data treatment types from redux
 * Fetch the treatment types if it's not exist on redux store
 */
const fetchTreatmentTypesData = ()=>{
    const dispatch = useDispatch();
    const {treatmentTypeData, treatmentTypesLoader} = useSelector(state => state.treatmentTypes)

    useEffect(() => {
        !treatmentTypeData && dispatch(fetchTreatmentTypes(API.TREATMENT_TYPE))
    }, []);
    return {
        loader: treatmentTypesLoader,
        data:treatmentTypeData
    };
}

 

/**
 * API data fetching from redux
 * Fetch the country list if it's not exist on redux store
 */
const fetchCountryList = ()=>{
    const dispatch = useDispatch();
    const {countryListData, countryListLoader} = useSelector(state => state.countryList)

    useEffect(() => {
        !countryListData && dispatch(countryList(API.COUNTRY_LIST))
    }, []);
    return {
        loader: countryListLoader,
        data:countryListData
    };
}


const selectedValue = (country:[], treatment:[])=>{
        const router = useRouter();
        const {query} = router;
        const selectedCountry = query['country-of-treatment'];
        const selectedTreatment = query['treatment-type'];  
        const currentCountry =  country?.find((data:any)=>data.value == selectedCountry);
        const currentTreatment =  treatment?.find((data:any)=>data.value == selectedTreatment);
        return {
            country:currentCountry,
            treatment:currentTreatment
        }
}

function HospitalAndoctorFilter() {
    const [dropDownValue, setdropDownValue] = useState(initialState);
    const countryList = fetchCountryList();
    const tratmentTypeData = fetchTreatmentTypesData();
    const loader = countryList.loader || tratmentTypeData.loader;
    const selctedValue =  selectedValue(countryList.data, tratmentTypeData.data);

    const onTreatMentTypeSelect = (selectedValue)=>{
        setdropDownValue({
            ...dropDownValue,
            treatmentType: selectedValue.value
        });
    };

    const onOriginSelect = (selectedValue)=>{
        setdropDownValue({
            ...dropDownValue,
            country: selectedValue.value
        });
    };
    
    
    return (
        <div className="filter-wrapper">
            <div className="drop-downs">
                 { loader ? <Loader /> : null}
                 {tratmentTypeData.data && <SelectBox selectedValue={selctedValue?.treatment} onSelect={onTreatMentTypeSelect} options={tratmentTypeData.data} label="SELECT DESEASE"/> }
                 {countryList.data && <SelectBox selectedValue={selctedValue?.country} onSelect={onOriginSelect} options={countryList.data} label="SELECT COUNTRY"/>}
            </div>
            <div className="check-boxes">
                <h3>TOP HOSPITALS BY COUNTRY</h3>
                <ul>
                    {filterData.map((data:object, index:number)=><li key={index}><CheckBox {...data}  /></li>)}
                </ul>
            </div>
        </div>
    )
}

export default HospitalAndoctorFilter
