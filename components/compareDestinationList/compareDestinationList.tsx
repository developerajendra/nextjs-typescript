import React,{useEffect, useState} from 'react'
import {Row, Col} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";

//Custom imports
import {API} from '../../pages/api';
import {fetchTreatmentTypes, fetchCountryList, fetchHospialsByCountry} from '../../store/reducers/filters/filters.action';
import {CompareDestinationCard, SelectBox, MedicalButton} from '../common';


/**
 * API data fetching from redux
 * Fetch the country list if it's not exist on redux store
 */
const fetchTopHospialsByCountryData = (selectedCountry:any, dispatch)=>{
    dispatch(fetchHospialsByCountry(API.HOSPITALS_BY_COUNTRY, selectedCountry))
}

const initialState = {
    cardOne:'',
    cardTwo:'',
    cardThree:'',
    cardFour:''
}
 

function CompareDestinationList() {
    const dispatch = useDispatch();
    const {countryListData, countryListLoader} = useSelector(state => state.countryList);
    const {hospitalsByCountryData, hospitalsByCountryLoader} = useSelector(state => state.hospitalsByCountry)

    const [selectedCountry, setSelectedCountry] = useState(initialState);


    const onSecondCardHospitalSelect = (selectedValue)=>{
        //Fetching the top hospitals by country data while changing the country dropdown
        fetchTopHospialsByCountryData(selectedValue.value, dispatch);
        
     setSelectedCountry({
            ...selectedCountry,
            cardTwo:selectedValue.value
        });
    };  

    const onThirdCardHospitalSelect = (selectedValue)=>{
        //Fetching the top hospitals by country data while changing the country dropdown
        fetchTopHospialsByCountryData(selectedValue.value, dispatch);
        
        setSelectedCountry({
            ...selectedCountry,
            cardThree:selectedValue.value
        });
    };  

    const onFourthCardHospitalSelect = (selectedValue)=>{
        //Fetching the top hospitals by country data while changing the country dropdown
        fetchTopHospialsByCountryData(selectedValue.value, dispatch);
        setSelectedCountry({
            ...selectedCountry,
            cardFour:selectedValue.value
        });
    };  


    console.log('selectedCountry', selectedCountry);
    
     
      
    
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
                    <Col lg={3} md={6} xs={12}>
                        <CompareDestinationCard countryList={countryListData} loader={countryListLoader} image="india"/>
                    </Col>
                    <Col lg={3} md={6} xs={12}>
                        <CompareDestinationCard 
                        onDropDownSelect={onSecondCardHospitalSelect} 
                        countryList={countryListData} 
                        loader={countryListLoader}  
                        hospitalList={hospitalsByCountryData} 
                        selectedCountry={selectedCountry.cardTwo}
                        hospitalListLoader={hospitalsByCountryLoader}
                        />
                        </Col>
                    <Col lg={3} md={6} xs={12}>
                    <CompareDestinationCard 
                        onDropDownSelect={onThirdCardHospitalSelect} 
                        countryList={countryListData} 
                        loader={countryListLoader}   
                        hospitalList={hospitalsByCountryData} 
                        selectedCountry={selectedCountry.cardThree}
                        />
                        </Col>
                    <Col lg={3} md={6} xs={12}>
                    <CompareDestinationCard 
                        onDropDownSelect={onFourthCardHospitalSelect} 
                        countryList={countryListData} 
                        loader={countryListLoader}  
                        hospitalList={hospitalsByCountryData} 
                        selectedCountry={selectedCountry.cardFour}
                        />

                    </Col>
                </Row> 
                <Row className="button-wrapper">
                        <MedicalButton text="Clear Inputs" type="outline" />
                        <MedicalButton text="COMPARE NOW" type="primary" routeLink="/hospital/compareResult" />
                </Row> 
            </div>
        </div>
    )
}

export default CompareDestinationList
