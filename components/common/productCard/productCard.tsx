import React from 'react';
import {Card, Row} from 'react-bootstrap';
import Link from 'next/link';

import {MedicalButton} from '../../common';
import {API} from '../../../pages/api/'


const rating = (rating)=>{
    const rateValue = Math.floor(rating);
    const tempArray = [1,2,3,4,5];
    return (<ul className="rating">
            {
             tempArray.map((data, index)=>{
                return data <= rateValue ? <li> <i className="icon-rated-star"></i> </li>  : <li className="not-rated"> <i className="icon-rated-star"></i> </li> 
            })  
        }         
    </ul>)
}

function ProductCard({data, primaryButtonText, outlineButtonText, buttonOutlineRoute}) {
    return (
             <Card className="product-card-wrapper">
                 <div className="image-wrapper">
                    <Card.Img variant="top" src={ API.IMAGE_BASE_URL.DOCTORS + data.image} />
                    <div className="rating">
                    {rating(data.rating)}
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
                        <MedicalButton text={primaryButtonText} type="primary" routeLink="/hospital/compareResult" />
                    </Row> 
                </Card.Body>
            </Card>  
    )
}

export default ProductCard
