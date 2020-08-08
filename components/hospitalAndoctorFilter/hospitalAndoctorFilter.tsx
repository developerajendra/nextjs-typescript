import React,{useState, useEffect} from 'react'
import {SelectBox, CheckBox, Loader} from '../common';
import {useSelector, useDispatch} from "react-redux";
import {useRouter} from 'next/router';

//Custom imports
import {API} from '../../pages/api';
import {fetchTreatmentTypes, fetchCountryLisByTreatment, fetchTopHospialsByCountry} from '../../store/reducers/filters/filters.action';

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
        !treatmentTypeData && dispatch(fetchTreatmentTypes(API.TREATMENT_TYPE)).then(data=>{
            console.log('...data', data);
        })
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
// const fetchCountryListData = ()=>{
    // const dispatch = useDispatch();
    // const {countryListData, countryListLoader} = useSelector(state => state.countryList)

    // useEffect(() => {
    //     !countryListData && dispatch(fetchCountryList(API.COUNTRY_LIST))
    // }, []);
    // return {
    //     loader: countryListLoader,
    //     data:countryListData
    // };
// }



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
const selectedValue = (country:[], treatment:[], router)=>{
        const {query} = router;
 
        const selectedCountry = query['country-of-treatment'];
        const selectedTreatment = query['treatment-type'] || query.treatmentId;  
         
        const currentCountry =  country?.find((data:any)=>data.value == selectedCountry);
        const currentTreatment =  treatment?.find((data:any)=>data.value == selectedTreatment);

        return {
            country:currentCountry,
            treatment:currentTreatment
        }
}


/**
 * Fetch country list based on selected route
 * Fetch if it's redirected form home
 * @param dispatch 
 * @param router 
 */
const fetchCountryLisByTreatmentData = (dispatch, router)=>{
    const {query} = router;
    const selectedTreatment = query['treatment-type'] || query.treatmentId;  
     
    useEffect(() => {
          dispatch(fetchCountryLisByTreatment(API.COUNTRY_LIST_BY_TREATMENT,  selectedTreatment))
    }, []);
}


const HospitalAndoctorFilter = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const {countryListByTreatmentData, countryListByTratementLoader} = useSelector(state => state.countryListByTreatment);
    const {topHospitalsByCountryData, topHospitalsByCountryLoader} = useSelector(state => state.topHospitalsByCountry);

    const [dropDownValue, setdropDownValue] = useState(initialState);
    const tratmentTypeData = fetchTreatmentTypesData();
    fetchCountryLisByTreatmentData(dispatch, router);

    const loader =  tratmentTypeData.loader;
    const selctedValue =  selectedValue(countryListByTreatmentData, tratmentTypeData.data, router);


    //on select treatment dropdown
    const onTreatMentTypeSelect = (selectedValue)=>{
        setdropDownValue({
            ...dropDownValue,
            treatmentType: selectedValue.value
        });
         dispatch(fetchCountryLisByTreatment(API.COUNTRY_LIST_BY_TREATMENT, selectedValue.crtdUser))
    };

    //On select the country dropdown
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
         !topHospitalsByCountryData && fetchTopHospialsByCountryData(selectedCountry, dispatch);
    }, []);



    return (
        <div className="filter-wrapper">
            <div className="drop-downs">
                 { loader || topHospitalsByCountryLoader ? <Loader /> : null}
                 {tratmentTypeData.data && <SelectBox selectedValue={selctedValue?.treatment} onSelect={onTreatMentTypeSelect} options={tratmentTypeData.data} label="SELECT DESEASE"/> }
                  {countryListByTreatmentData && <SelectBox selectedValue={selctedValue?.country} onSelect={onOriginSelect} options={countryListByTreatmentData} label="SELECT COUNTRY"/>}
            </div>
            <div className="check-boxes">
                <h3>TOP HOSPITALS BY STATE</h3>
                <ul>
                    {topHospitalsByCountryData?.map((data:object, index:number)=><li key={index}><CheckBox {...data}  /></li>)}
                </ul>
            </div>
        </div>
    )
}

export default HospitalAndoctorFilter
