import React from 'react'
import {Carousel, Col, Row} from 'react-bootstrap';
import {DropDown} from '../common';

function TestimonialCarousel() {
    return (
        <div className="testimonial-carousel-wrapper">
            <Carousel>
                <Carousel.Item>
                    <Row>
                        <Col lg={5}>
                            <Col className="select-wrapper" lg={7}>
                                <div className="list-header">
                                    <span>Happy to share</span>
                                    <h2>Patient Stories</h2>
                                </div>
                                <DropDown label="SELECT COUNTRY"/>
                                <DropDown label="SELECT STATE"/> 
                            </Col>
                            <Col className="select-wrapper" lg={10}>
                                <div className="testimonials">
                                    <h3>Abhimanyu Das Patel</h3>
                                    <address>  Saket, New Delhi</address>
                                    <ul>
                                        <li> <i className="icon-rated-star"></i> </li>
                                        <li> <i className="icon-rated-star"></i></li>
                                        <li> <i className="icon-rated-star"></i></li>
                                        <li> <i className="icon-rated-star"></i></li>
                                        <li className="not-rated"> <i className="icon-rated-star"></i></li>
                                    </ul>
                                    <article>“ Excellent service during my stay, he also went out of the way to assist me and my wife. I can not suggest any thing better in the service.Excellent work by team, thank you so much “</article>
                                </div>
                            </Col>
                        
                        </Col>
                        <Col lg={7}>
                            <div className="carousel-image-wrapper">
                                <i className="quotes-top icon-carousel-quotes"></i>
                                <img
                                className="carousel-image"
                                src="/images/carousel-image.png"
                                alt="First slide"
                                />
                                <i className="quotes-bottom icon-carousel-quotes"></i>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>


                <Carousel.Item>
                    <Row>
                        <Col lg={5}>
                            <Col className="select-wrapper" lg={7}>
                                <div className="list-header">
                                    <span>Happy to share</span>
                                    <h2>Patient Stories</h2>
                                </div>
                                <DropDown label="SELECT COUNTRY"/>
                                <DropDown label="SELECT STATE"/> 
                            </Col>
                            <Col className="select-wrapper" lg={10}>
                                <div className="testimonials">
                                    <h3>Abhimanyu Das Patel</h3>
                                    <address>  Saket, New Delhi</address>
                                    <ul>
                                        <li> <i className="icon-rated-star"></i> </li>
                                        <li> <i className="icon-rated-star"></i></li>
                                        <li> <i className="icon-rated-star"></i></li>
                                        <li> <i className="icon-rated-star"></i></li>
                                        <li className="not-rated"> <i className="icon-rated-star"></i></li>
                                    </ul>
                                    <article>“ Excellent service during my stay, he also went out of the way to assist me and my wife. I can not suggest any thing better in the service.Excellent work by team, thank you so much “</article>
                                </div>
                            </Col>
                        
                        </Col>
                        <Col lg={7}>
                            <div className="carousel-image-wrapper">
                                <i className="quotes-top icon-carousel-quotes"></i>
                                <img
                                className="carousel-image"
                                src="/images/carousel-image.png"
                                alt="First slide"
                                />
                                <i className="quotes-bottom icon-carousel-quotes"></i>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>


                 <Carousel.Item>
                    <Row>
                        <Col lg={5}>
                            <Col className="select-wrapper" lg={7}>
                                <div className="list-header">
                                    <span>Happy to share</span>
                                    <h2>Patient Stories</h2>
                                </div>
                                <DropDown label="SELECT COUNTRY"/>
                                <DropDown label="SELECT STATE"/> 
                            </Col>
                            <Col className="select-wrapper" lg={10}>
                                <div className="testimonials">
                                    <h3>Abhimanyu Das Patel</h3>
                                    <address>  Saket, New Delhi</address>
                                    <ul>
                                        <li> <i className="icon-rated-star"></i> </li>
                                        <li> <i className="icon-rated-star"></i></li>
                                        <li> <i className="icon-rated-star"></i></li>
                                        <li> <i className="icon-rated-star"></i></li>
                                        <li className="not-rated"> <i className="icon-rated-star"></i></li>
                                    </ul>
                                    <article>“ Excellent service during my stay, he also went out of the way to assist me and my wife. I can not suggest any thing better in the service.Excellent work by team, thank you so much “</article>
                                </div>
                            </Col>
                        
                        </Col>
                        <Col lg={7}>
                            <div className="carousel-image-wrapper">
                                <i className="quotes-top icon-carousel-quotes"></i>
                                <img
                                className="carousel-image"
                                src="/images/carousel-image.png"
                                alt="First slide"
                                />
                                <i className="quotes-bottom icon-carousel-quotes"></i>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>

                  
                </Carousel>
        </div>
    )
}
import { format } from 'path'

export default TestimonialCarousel
