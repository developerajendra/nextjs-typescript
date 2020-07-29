import React,{useState, useEffect} from 'react'
import {SelectBox, CheckBox, Loader} from '../common';
import {useSelector, useDispatch} from "react-redux";
import {useRouter} from 'next/router';

//Custom imports
import {API} from '../../pages/api';
import {fetchTreatmentTypes, fetchCountryList, fetchTopHospialsByCountry} from '../../store/reducers/filters/filters.action';


const filterData = [
    {"name":"Ahmadabad","id":1, "countryCode":"IN"},
    {"name":"Aluva","id":2, "countryCode":"IN"},
    {"name":"Ambattur","id":3, "countryCode":"IN"},
    {"name":"Amritsar","id":4, "countryCode":"IN"},
    {"name":"Anand","id":5, "countryCode":"IN"},
    {"name":"Anekal","id":6, "countryCode":"IN"},
    {"name":"Ballabgarh","id":7, "countryCode":"IN"},
    {"name":"Banglore","id":8, "countryCode":"IN"},
    {"name":"Bhubneswar","id":10, "countryCode":"IN"},
    {"name":"Chandigarh","id":11, "countryCode":"IN"},
    {"name":"Chennai","id":12, "countryCode":"IN"},
    {"name":"Delhi","id":13, "countryCode":"IN"},
    {"name":"Dehradun","id":14, "countryCode":"IN"},
    {"name":"Dimapur","id":15, "countryCode":"IN"},
    {"name":"Dhanbad","id":16, "countryCode":"IN"}
];
 
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
const fetchCountryListData = ()=>{
    const dispatch = useDispatch();
    const {countryListData, countryListLoader} = useSelector(state => state.countryList)

    useEffect(() => {
        !countryListData && dispatch(fetchCountryList(API.COUNTRY_LIST))
    }, []);
    return {
        loader: countryListLoader,
        data:countryListData
    };
}



/**
 * API data fetching from redux
 * Fetch the country list if it's not exist on redux store
 */
const fetchTopHospialsByCountryData = (selectedCountry:any, dispatch)=>{
    dispatch(fetchTopHospialsByCountry(API.TOP_HOSPITALS_BY_COUNTRY, selectedCountry))
}



/**
 * placing the default selected valud from homepage to filter
 * @param country 
 * @param treatment 
 */
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




const HospitalAndoctorFilter = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const {topHospitalsByCountryData, topHospitalsByCountryLoader} = useSelector(state => state.topHospitalsByCountry)
    const [dropDownValue, setdropDownValue] = useState(initialState);
    const countryList = fetchCountryListData();
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

        //Fetching the top hospitals by country data while changing the country dropdown
        fetchTopHospialsByCountryData(selectedValue.value, dispatch);
    };  


    //Fetching the top hospitals by country data while reloading the page
    useEffect(() => {
        const {query} = router;
        const selectedCountry = query['country-of-treatment'];
          fetchTopHospialsByCountryData(selectedCountry, dispatch);
    }, []);


    
    return (
        <div className="filter-wrapper">
            <div className="drop-downs">
                 { loader || topHospitalsByCountryLoader ? <Loader /> : null}
                 {tratmentTypeData.data && <SelectBox selectedValue={selctedValue?.treatment} onSelect={onTreatMentTypeSelect} options={tratmentTypeData.data} label="SELECT DESEASE"/> }
                 {countryList.data && <SelectBox selectedValue={selctedValue?.country} onSelect={onOriginSelect} options={countryList.data} label="SELECT COUNTRY"/>}
            </div>
            <div className="check-boxes">
                <h3>TOP HOSPITALS BY COUNTRY</h3>
                <ul>
                    {topHospitalsByCountryData?.map((data:object, index:number)=><li key={index}><CheckBox {...data}  /></li>)}
                </ul>
            </div>
        </div>
    )
}

export default HospitalAndoctorFilter
