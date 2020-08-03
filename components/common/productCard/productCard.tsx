import React from 'react';
import {Card, Row} from 'react-bootstrap';
import Link from 'next/link';

import {MedicalButton} from '../../common';
import {API, ratingUI} from '../../../pages/api/'
import {SendEnquiery} from '../../index';



function ProductCard({data, primaryButtonText, outlineButtonText, buttonOutlineRoute}) {
    return (
             <Card className="product-card-wrapper">
                 <div className="image-wrapper">
                    <Card.Img variant="top" src={ API.IMAGE_BASE_URL.DOCTORS + data.image} />
                    <div className="rating">
                        {ratingUI(data.rating)}
                    </div>
                </div>
                <Card.Body style={{flex:'2'}}>
                    <input className="product-compare-checkbox" type="checkbox" id="test" name="test" value="Bike" />
                    <Card.Title>{data.name}</Card.Title>
                        <span>{data.hospitalName},{data.location}</span>
                    <Card.Text>
                        {data.education}
                    </Card.Text>
                    <a style={{color:' #22222299'}} href="#">{data.buttonText}</a>
                    <Row className="button-wrapper">
                        <MedicalButton text={outlineButtonText} type="outline" routeOutlineLink={`${buttonOutlineRoute}/[id]`} routeOutlineAs={`${buttonOutlineRoute}/${data.productId}`} />
                        <SendEnquiery id={data.productId} name={data.name}>
                            <MedicalButton text={primaryButtonText} type="primary"  />
                        </SendEnquiery>
                    </Row> 
                </Card.Body>
            </Card>  
    )
}

export default ProductCard
