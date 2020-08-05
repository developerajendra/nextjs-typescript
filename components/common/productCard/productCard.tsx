import React from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import Link from 'next/link';

import {MedicalButton, MedicalModal} from '../../common';
import {API, ratingUI} from '../../../pages/api/'
import {SendEnquiery} from '../../index';



function ProductCard({data, primaryButtonText, outlineButtonText, buttonOutlineRoute, isHospital}) {
    return (
        isHospital ? 
        
                <Card className="product-card-wrapper hospital">
                    <div className="image-wrapper">
                    <Card.Img variant="top" src={ API.IMAGE_BASE_URL.HOSPITALS + data.image} />
                    <div className="rating">
                        {ratingUI(data.rating)}
                    </div>
                </div>
                <Card.Body style={{flex:'2'}}>
                    <input className="product-compare-checkbox" type="checkbox" id="test" name="test" value="Bike" />
                    <Card.Title>{data.name}Hospital Name</Card.Title>
                        {/* <span>{data.hospitalName},{data.location}</span> */}
                        <ul className="contact">
                            <li> <i className="icon-map"></i> Mithakhali, Ellis Bridge</li>
                            <li>
                                <span><i className="icon-call"></i> 91-7933669999,</span>
                                <span>8033712391</span>
                            </li>
                            <li><i className="icon-earth"></i><a href="">Visit website</a></li>
                        </ul>
                        <ul className="iso">
                            <li><i className="icon-iso1"></i></li>
                            <li><i className="icon-iso2"></i></li>
                        </ul>
                    <Card.Text>
                        {data.shortDescription}
                    </Card.Text>
                    <a style={{color:' #22222299'}} href="#">{data.buttonText}</a>
                    <Row className="button-wrapper">
                        <MedicalButton text={outlineButtonText} type="outline" routeOutlineLink={`${buttonOutlineRoute}/[id]`} routeOutlineAs={`${buttonOutlineRoute}/${data.productId}`} />
                        <MedicalModal header={{title:'Send Enquiry', subTitle:data.name}} ModalComponent={SendEnquiery} data={{id:data.productId}}>
                            <MedicalButton text={primaryButtonText} type="primary"  />
                        </MedicalModal>
                    </Row> 
                </Card.Body>
            </Card>  

        : <Card className="product-card-wrapper doctor">
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
                        <MedicalModal header={{title:'Send Enquiry', subTitle:data.name}} ModalComponent={SendEnquiery} data={{id:data.productId}}>
                            <MedicalButton text={primaryButtonText} type="primary"  />
                        </MedicalModal>
                    </Row> 
                </Card.Body>
            </Card>  
    )
}

export default ProductCard
