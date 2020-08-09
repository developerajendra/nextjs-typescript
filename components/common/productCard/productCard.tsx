import React from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import LazyLoad from 'react-lazyload';


import {MedicalButton, MedicalModal} from '../../common';
import {API, ratingUI} from '../../../pages/api/'
import {SendEnquiery} from '../../index';

interface productCard {
    data:any;
    primaryButtonText?:string;
    outlineButtonText?:string;
    buttonOutlineRoute?:string;
    isHospital?:boolean;
    compareProduct?:any;
    onproductCompareChange?:any;
    dispatcher?:any;
}

function ProductCard({data, primaryButtonText, outlineButtonText, buttonOutlineRoute, isHospital, compareProduct, onproductCompareChange, dispatcher}:productCard) {
    return (
        isHospital ? 
        <LazyLoad height={200}>
                <Card className="product-card-wrapper hospital">
                    <div className="image-wrapper">
                    <Card.Img variant="top" src={ API.IMAGE_BASE_URL.HOSPITALS + data.image} />
                    <div className="rating">
                        {ratingUI(data.rating)}
                    </div>
                </div>
                <Card.Body style={{flex:'2'}}>
                    {compareProduct && <input onChange={(e)=>onproductCompareChange(e, data.medProviderId, dispatcher)} className="product-compare-checkbox" type="checkbox" id="test" name="test" value="Bike" />}
                    <Card.Title>{data.hospitalName}</Card.Title>
                        {/* <span>{data.hospitalName},{data.location}</span> */}
                        <ul className="contact">
                            <li> <i className="icon-map"></i> {data.cityName}, {data.districtName}, {data.stateName}</li>
                            <li>
                                <span><i className="icon-call"></i> {data.phone1},</span>
                                <span>{data.phone2}</span>
                            </li>
                            <li><i className="icon-earth"></i><a target="blank" href={data.website}>Visit website</a></li>
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
                        <MedicalButton text={outlineButtonText} type="outline" routeOutlineLink={`${buttonOutlineRoute}/[id]`} routeOutlineAs={`${buttonOutlineRoute}/${data.medProviderId}`} />
                        <MedicalModal header={{title:'Send Enquiry', subTitle:data.name}} ModalComponent={SendEnquiery} data={{id:data.productId}}>
                            <MedicalButton text={primaryButtonText} type="primary"  />
                        </MedicalModal>
                    </Row> 
                </Card.Body>
            </Card>  
            </LazyLoad>
        :  <LazyLoad height={200}> <Card className="product-card-wrapper doctor">
                 <div className="image-wrapper">
                    <Card.Img variant="top" src={ API.IMAGE_BASE_URL.DOCTORS + data.image} />
                    <div className="rating">
                        {ratingUI(data.rating)}
                    </div>
                </div>
                <Card.Body style={{flex:'2'}}>
                {compareProduct && <input onChange={(e)=>onproductCompareChange(e, data.productId, dispatcher)} className="product-compare-checkbox" type="checkbox" id="test" name="test" value="Bike" />}
                    <Card.Title>{data.name}</Card.Title>
                        <span><i className="icon-map"></i> {data.hospitalName}, {data.location}</span>
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
            </LazyLoad>
    )
}

export default ProductCard
