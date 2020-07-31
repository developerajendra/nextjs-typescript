import React,{useEffect, useState} from 'react'
import {Row, Col} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";

//Custom imports
import {API} from '../../pages/api';
import {fetchHospialsByCountry} from '../../store/reducers/filters/filters.action';
import {CompareDestinationCard, SelectBox, MedicalButton} from '../common';


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
    const {countryListData, countryListLoader} = useSelector(state => state.countryList);
    const [hospitalList, setHospitalList] = useState(cardsInitialValue);
    const [clearInputs, setclearInputs] = useState(false);
    const [selectedHospital, setselectedHospital] = useState(hospitalInitialValue);

    //on country change set hospital list based on selected country
    const onCountrySelect = (selectedValue, card)=>{
        const index = card.name;
        const array = [...hospitalList];
        array[index] = {...array[index], loader:true}
        setHospitalList(array);

        fetchTopHospialsByCountryData(selectedValue.value, dispatch).then(hospitalData=>{
            const array = [...hospitalList];
            array[index] = {...array[index], index:index, data:hospitalData, loader:false}
            setHospitalList(array);
        });
    }

    const onSelectClearInputs = ()=>{
        setHospitalList(cardsInitialValue);
    }


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
                <SelectBox styleTypeDefault={true} defaultSelectText="Select Disease Type"/>
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
                                    countryList={countryListData} 
                                    loader={countryListLoader || card.loader}   
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
