import React,{useState, useEffect} from 'react'
import {SelectBox, CheckBox, Loader} from '../common';
import {useSelector, useDispatch} from "react-redux";
import {useRouter} from 'next/router';

//Custom imports
import {API} from '../../pages/api';
import {fetchTreatmentTypes, fetchCountryLisByTreatment, fetchStatesByCountry} from '../../store/reducers/filters/filters.action';

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


/**
 * Fetch country list based on selected route
 * Fetch if it's redirected form home
 * @param dispatch 
 * @param router 
 */
const fetchStatesListByCountryData = (router, onCountryChange=false)=>{
    const [statesByCountry, setStatesByCountry] = useState([]);
    const [loader, setloader] = useState(false);

    if(onCountryChange){
        setloader(true);
        fetchStatesByCountry(API.TOP_STATES_BY_COUNTRY, router).then(data=>{
            setStatesByCountry(data);
            setloader(false);
        })
        return {
            listData: statesByCountry,
            statesLoader: loader
        };;
    }
    const {query} = router;
    const selectedCountry = query['country-of-treatment'];
    useEffect(() => {
        setloader(true);
          fetchStatesByCountry(API.TOP_STATES_BY_COUNTRY, selectedCountry).then(data=>{
            setStatesByCountry(data);
            setloader(false);
        })
    }, []);
    return {
        listData: statesByCountry,
        statesLoader: loader
    };
}


const HospitalAndoctorFilter = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    //Hooks 
    const {countryListByTreatmentData, countryListByTratementLoader} = useSelector(state => state.countryListByTreatment);
    const {topHospitalsByCountryData, topHospitalsByCountryLoader} = useSelector(state => state.topHospitalsByCountry);
    const [dropDownValue, setdropDownValue] = useState(initialState);

    //custom functions and declarationss - on load
    const tratmentTypeData = fetchTreatmentTypesData();
    fetchCountryLisByTreatmentData(dispatch, router);
    const statesList =  fetchStatesListByCountryData(router);
    const loader =  tratmentTypeData.loader;
    const selctedValue =  selectedValue(countryListByTreatmentData, tratmentTypeData.data, router);



    /**
     * on select treatment dropdown 
     * @param selectedValue 
     */
    const onTreatMentTypeSelect = (selectedValue)=>{
        setdropDownValue({
            ...dropDownValue,
            treatmentType: selectedValue.value
        });
         dispatch(fetchCountryLisByTreatment(API.COUNTRY_LIST_BY_TREATMENT, selectedValue.crtdUser))
    };


    /**
     * On select the country dropdown 
     * @param selectedValue 
     */
    const onCountrySelect = (selectedValue)=>{
        setdropDownValue({
            ...dropDownValue,
            country: selectedValue.value
        });

        //Fetching the top  states
        fetchStatesListByCountryData(selectedValue.value, true);
    };  


  
    return (
        <div className="filter-wrapper">
            <div className="drop-downs">
                 { loader || topHospitalsByCountryLoader ? <Loader /> : null}
                 {tratmentTypeData.data && <SelectBox selectedValue={selctedValue?.treatment} onSelect={onTreatMentTypeSelect} options={tratmentTypeData.data} label="SELECT DESEASE"/> }
                  {countryListByTreatmentData && <SelectBox selectedValue={selctedValue?.country} onSelect={onCountrySelect} options={countryListByTreatmentData} label="SELECT COUNTRY"/>}
            </div>
            <div className="check-boxes">
                <h3>TOP HOSPITALS BY STATE</h3>
                {statesList?.statesLoader ? <Loader /> : null}
                <ul>
                    {statesList?.listData?.map((data:object, index:number)=><li key={index}><CheckBox {...data}  /></li>)}
                </ul>
            </div>
        </div>
    )
}

export default HospitalAndoctorFilter
