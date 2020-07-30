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
    hospitalListLoader?:object;
    index?:number;
}

function CompareDestinationCard({image, countryList, loader, onDropDownSelect, hospitalList, index}:destinationCard) {
    
     
    return (
        <Card style={{ width: '17rem' }}>
            { image ?  <Card.Img variant="top" src={`/images/${image}.jpg`} /> :
            <div className="add-destination">
                <span className="icon">+</span>
                <span className="text">Add Destination</span>
            </div> }

            <Card.Body>
                {loader &&   <Loader/> }
                 <SelectBox groupName={index} onSelect={onDropDownSelect} options={countryList} label="SELECT COUNTRY"/>
                  <SelectBox  options={hospitalList}  onSelect={onDropDownSelect}  label="SELECT HOSPITAL"/> 
            </Card.Body>
        </Card>
    )
}

export default CompareDestinationCard
