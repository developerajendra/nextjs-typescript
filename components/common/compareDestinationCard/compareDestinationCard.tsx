import React from 'react';
import {Card} from 'react-bootstrap';
import {SelectBox} from '../';
import {Loader} from '../../common';

interface destinationCard{ 
    image?:string;
    countryList?:[];
    hospitalList?:any;
    loader?:boolean;
    onDropDownSelect?:Function;
    selectedCountry?:string;
    hospitalListLoader?:object;
}

function CompareDestinationCard({image, countryList, loader, onDropDownSelect, hospitalList, selectedCountry, hospitalListLoader}:destinationCard) {
    
    const hospitalData = selectedCountry && hospitalList && hospitalList[selectedCountry]
    const hospitalLoader = hospitalListLoader && hospitalListLoader[selectedCountry];
    console.log('hospitalLoader', selectedCountry);
    
    
    return (
        <Card style={{ width: '17rem' }}>
            { image ?  <Card.Img variant="top" src={`/images/${image}.jpg`} /> :
            <div className="add-destination">
                <span className="icon">+</span>
                <span className="text">Add Destination</span>
            </div> }

            <Card.Body>
                {(loader || hospitalLoader) &&   <Loader/> }
                 <SelectBox onSelect={onDropDownSelect} options={countryList} label="SELECT COUNTRY"/>
                  <SelectBox isDisable={!selectedCountry} options={hospitalData}  onSelect={onDropDownSelect}  label="SELECT HOSPITAL"/> 
            </Card.Body>
        </Card>
    )
}

export default CompareDestinationCard
