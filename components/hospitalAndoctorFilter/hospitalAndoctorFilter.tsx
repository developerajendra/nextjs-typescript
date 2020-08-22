import React,{useState, useEffect} from 'react'
import {SelectBox, CheckBox, Loader} from '../common';
import {useSelector, useDispatch} from "react-redux";
import {useRouter} from 'next/router';

//Custom imports
import {API} from '../../pages/api';
import {fetchTreatmentTypes, fetchCountryLisByTreatment, fetchStatesByCountry, productFilter} from '../../store/reducers/filters/filters.action';

const initialState = {
    country: null,
    treatmentType: null
};


const filtersValue = {
    states:[],
    country:'',
    crtdUser:''
}
 


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
const selectedValue = (country:[], treatment:[], router, dispatch , productFilters)=>{
        const {query, route} = router;
 
        const search = query['search'];
        const selectedCountry = query['country-of-treatment'];
        const selectedTreatment = query['treatment-type'] || query.treatmentId;  
         
        const currentCountry:any =  country?.find((data:any)=>data.value == selectedCountry) || {};
        const currentTreatment:any =  treatment?.find((data:any)=>data.value == selectedTreatment) || {};


        //Filtering the product when selecting reloading the page
        //If query exist in the url filter the product or else send the default products
        if(!productFilters?.country && !productFilters?.crtdUser && !productFilters?.crtdUser?.length){
            const selectedTab =  route.indexOf('doctors')>-1 ? 'DOCTORS' : 'HOSPITALS';
            useEffect(() => {
                currentTreatment && dispatch(productFilter({crtdUser:currentTreatment.crtdUser || selectedTreatment, country:currentCountry.value || selectedCountry, search}, selectedTab));
            }, [route, query])
            
        }
        
        
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
        selectedTreatment && dispatch(fetchCountryLisByTreatment(API.COUNTRY_LIST_BY_TREATMENT,  selectedTreatment))
    }, [query]);
}




const HospitalAndoctorFilter = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    //Product filters
    const [productFilters, setproductFilters] = useState(filtersValue);

    // states by country state
    const [statesByCountry, setStatesByCountry] = useState([]);
    const [stateLoader, setStateLoader] = useState(false);


    //Hooks 
    const {countryListByTreatmentData, countryListByTratementLoader} = useSelector(state => state.countryListByTreatment);
    const [dropDownValue, setdropDownValue] = useState(initialState);
    
    
    //custom functions and declarationss - on load
    const tratmentTypeData = fetchTreatmentTypesData();
    fetchCountryLisByTreatmentData(dispatch, router);
    const loader =  tratmentTypeData.loader || countryListByTratementLoader;

    const selctedValueDropdownValue = selectedValue(countryListByTreatmentData, tratmentTypeData.data, router, dispatch, productFilters );    
 
    

     /**
      *  fetching the sates list based on selected country
      * @param router 
      * @param onCountryChange 
      */
    const fetchStatesListByCountryData = (router, onCountryChange=false)=>{
        if(onCountryChange){
            setStateLoader(true);
            fetchStatesByCountry(API.TOP_STATES_BY_COUNTRY, router).then(data=>{
                setStatesByCountry(data);
                setStateLoader(false);
            })
            return;
        }
        const {query} = router;
        const selectedCountry = query['country-of-treatment'];
        
        useEffect(() => {
            setStateLoader(true);
             fetchStatesByCountry(API.TOP_STATES_BY_COUNTRY, selectedCountry).then(data=>{
                setStatesByCountry(data);
                setStateLoader(false);
            })
        }, [query]);
    }
    fetchStatesListByCountryData(router);




    /**
     * on select treatment dropdown 
     * @param selectedValue 
     */
    const onTreatMentTypeSelect = (selectedValue)=>{
       //Update query params
       router.push(`${router.route}?treatment-type=${selectedValue.value}`)

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
        
        //Update query params
        router.push(`${router.route}?treatment-type=${router.query['treatment-type']}&country-of-treatment=${selectedValue.value}`)

        setdropDownValue({
            ...dropDownValue,
            country: selectedValue.value
        });

        //Fetching the top  states
        fetchStatesListByCountryData(selectedValue.value, true);
    };  


    
    const onStateValueChanged = (e, state)=>{
        if(e.target.checked){
             setproductFilters({...productFilters, states:[...productFilters.states, state]});
        }else{
            const array = productFilters.states;
            const index = array.indexOf(state);
            array.splice(index, 1);
            setproductFilters({...productFilters, states:array});
        }
    }


    //updating the filtered value
    useEffect(() => {
        let {query, route } = router;
        const selectedTab =  route.indexOf('doctors')>-1 ? 'DOCTORS' : 'HOSPITALS';
        productFilters.states.length && dispatch(productFilter({crtdUser:query['treatment-type'], country:query['country-of-treatment'], states:productFilters.states, search:query['search']}, selectedTab))
    }, [productFilters]);
  
    
    return (
    
        <div className="filter-wrapper">
        <h5 className="d-hide">FILTERS</h5>
            <div className="drop-downs">
                 { loader ? <Loader /> : null}
                 {tratmentTypeData.data && <SelectBox selectedValue={selctedValueDropdownValue?.treatment} onSelect={onTreatMentTypeSelect} options={tratmentTypeData.data} label="SELECT DESEASE"/> }
                  {countryListByTreatmentData && <SelectBox selectedValue={selctedValueDropdownValue?.country} onSelect={onCountrySelect} options={countryListByTreatmentData} label="SELECT COUNTRY"/>}
            </div>
            <div className="check-boxes">
                <h3>TOP HOSPITALS BY STATE</h3>
                {stateLoader ? <Loader /> : null}
                <ul>
                    {statesByCountry?.map((data:any, index:number)=><li key={index}><CheckBox onChange={onStateValueChanged} {...data} id={data?.stateCode} /></li>)}
                </ul>
            </div>
        </div>
    )
}

export default HospitalAndoctorFilter
