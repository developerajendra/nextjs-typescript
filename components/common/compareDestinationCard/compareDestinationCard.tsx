import React from 'react';
import {Card} from 'react-bootstrap';
import {SelectBox} from '../';

interface destinationCard{ 
    image?:string
}

function CompareDestinationCard({image}:destinationCard) {
    return (
        <Card style={{ width: '17rem' }}>
            { image ?  <Card.Img variant="top" src={`/images/${image}.jpg`} /> :
            <div className="add-destination">
                <span className="icon">+</span>
                <span className="text">Add Destination</span>
            </div> }

            <Card.Body>
                <SelectBox label="SELECT COUNTRY"/>
                <SelectBox label="SELECT HOSPITAL"/> 
            </Card.Body>
        </Card>
    )
}

export default CompareDestinationCard
