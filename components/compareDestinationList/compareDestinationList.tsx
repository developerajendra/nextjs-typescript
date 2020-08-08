import React,{useEffect, useState} from 'react'
import {Row, Col} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";

//Custom imports
import {API} from '../../pages/api';
import {fetchHospialsByCountry, fetchCountryLisByTreatment} from '../../store/reducers/filters/filters.action';
import {CompareDestinationCard, SelectBox, MedicalButton, Loader} from '../common';


/**
 * API data fetching from redux
 * Fetch the country list if it's not exist on redux store
 */
const fetchTopHospialsByCountryData = (selectedCountry:any, dispatch)=>{
    return dispatch(fetchHospialsByCountry(API.HOSPITALS_BY_COUNTRY, selectedCountry))
}

 
const cardsInitialValue = [
    {index:0, data:[],loader:false},
    {index:1, data:[],loader:false},
    {index:2, data:[],loader:false},
    {index:3, data:[],loader:false}
];


const hospitalInitialValue = [
    {index:0, id:null},
    {index:1, id:null},
    {index:2, id:null},
    {index:3, id:null}
];

/**
 * Compare product route URL
 * @param selectedHospital 
 */
const generateRouteURL = (selectedHospital)=>{
    let route = '';
    selectedHospital.map(hospital=>{
        hospital.id ? route += `&hospital=${hospital.id}` : '';
    });
   return route.lastIndexOf("=")>10 ? `/hospital/compareResult?${route.substring(1)}` : '';
}


function CompareDestinationList() {
    const dispatch = useDispatch();
    const {countryListByTreatmentData, countryListByTratementLoader} = useSelector(state => state.countryListByTreatment);
    const [hospitalList, setHospitalList] = useState(cardsInitialValue);
    const [clearInputs, setclearInputs] = useState(false);
    const [selectedHospital, setselectedHospital] = useState(hospitalInitialValue);
    const {treatmentTypeData, treatmentTypesLoader} = useSelector(state => state.treatmentTypes)

    //on treatement list select
    const onTreatmentSelect = (selectedValue)=>{
        return dispatch(fetchCountryLisByTreatment(API.COUNTRY_LIST_BY_TREATMENT, selectedValue.crtdUser))
    }

    //on country change set hospital list based on selected country
    const onCountrySelect = (selectedValue, card)=>{
        const index = card.name;
        const array = [...hospitalList];
        array[index] = {...array[index], loader:true}
        setHospitalList(array);


        fetchTopHospialsByCountryData(selectedValue.crtdUser, dispatch).then(hospitalData=>{
            const array = [...hospitalList];
            array[index] = {...array[index], index:index, data:hospitalData, loader:false}
            setHospitalList(array);
        });
    }
 

    //clear inputs on select
    const onSelectClearInputs = ()=>{
        setHospitalList(cardsInitialValue);
    }


    //on Select hospital
    const onHospitalSelect = (selectedValue, card)=>{
        const index = card.name;
        const array = [...selectedHospital];
        array[index] = {...array[index], id:selectedValue.value}
        setselectedHospital(array);
    }
    const routeURL = generateRouteURL(selectedHospital);
      
    
    return (
        <div className='destination-compare-wrapper'>
             <div className="list-header">
                <span>EASY TO CHOOSE</span>
                <h2>Compare Best Medical Destination</h2>
            </div>
            <div className="select-desease">
                {treatmentTypesLoader && <Loader/>}
                <SelectBox styleTypeDefault={true} options={treatmentTypeData} placeholder="Select Disease Type" onSelect={onTreatmentSelect}/>
            </div>
            <div className="destination-cards">
                <Row>
                    {
                        hospitalList.map((card, index)=>{
                            return (
                                <Col lg={3} md={6} xs={12}>
                                    <CompareDestinationCard 
                                    image={index == 0 ? 'india' : ''}
                                    index={index}
                                    onHospitalSelect={onHospitalSelect}
                                    onDropDownSelect={onCountrySelect} 
                                    countryList={countryListByTreatmentData} 
                                    loader={countryListByTratementLoader || card.loader}   
                                    hospitalList={card.data} 
                                    clearInputs={clearInputs}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row> 
                <Row className="button-wrapper">
                        <MedicalButton onButtonOutlineClick={onSelectClearInputs} text="Clear Inputs" type="outline" />
                        <MedicalButton disabled={!Boolean(routeURL)} text="COMPARE NOW" type="primary" routeLink={routeURL} />
                </Row> 
            </div>
        </div>
    )
}

export default CompareDestinationList
