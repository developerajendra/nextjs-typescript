import React from 'react';
import {Card, Row} from 'react-bootstrap';
import Link from 'next/link';

import {MedicalButton} from '../../common';
import {API} from '../../../pages/api/'


function ProductCard({data, primaryButtonText, outlineButtonText, buttonOutlineRoute}) {
    console.log('data', data);
    
    return (
             <Card className="product-card-wrapper">
                <Card.Img variant="top" src={ API.IMAGE_BASE_URL.DOCTORS + data.image} />
                <Card.Body style={{flex:'2'}}>
                    <input className="product-compare-checkbox" type="checkbox" id="test" name="test" value="Bike" />
                    <Card.Title>{data.name}</Card.Title>
                        <span>{data.location}</span>
                    <Card.Text>
                        {data.qulification}
                    </Card.Text>
                    <a style={{color:' #22222299'}} href="#">{data.buttonText}</a>
                    <Row className="button-wrapper">
                        <MedicalButton text={outlineButtonText} type="outline" routeOutlineLink={`${buttonOutlineRoute}/[id]`} routeOutlineAs={`${buttonOutlineRoute}/${data.productId}`} />
                        <MedicalButton text={primaryButtonText} type="primary" routeLink="/hospital/compareResult" />
                    </Row> 
                </Card.Body>
            </Card>  
    )
}

export default ProductCard
