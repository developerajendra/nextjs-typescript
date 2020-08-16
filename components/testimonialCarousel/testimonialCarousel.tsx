import React,{useEffect, useState} from 'react'
import {Carousel, Col, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";

//Custom imports
import {SelectBox, Loader} from '../common';
import {API, ratingUI} from '../../pages/api';
import {fetchStatesByCountry} from '../../store/reducers/filters/filters.action';
import {fetchTestimonial} from '../../store/reducers/testimonial/testimonial.action';




function TestimonialCarousel() {
    const {countryListData, countryListLoader} = useSelector(state => state.countryList);
    const [statesList, setStateList] = useState([]);
    const [stateLoader, setStateLoader] = useState(false);
    const [testimonialData, settestimonialData] = useState([]);
    const [testimonialLoader, setTestimonialLoader] = useState(false);

    /**
    * fetchig the doctor details..
    */
    const fetchStatesListData = (selectedCountry)=>{
        const payload = selectedCountry.value;
        setStateLoader(true);
        fetchStatesByCountry(API.STATES_LIST_BY_COUNTRY, payload).then(data=>{
            setStateList(data);
            setStateLoader(false);
        });
    }


     /**
    * fetchig the testimonial data
    */
   const fetchTestimonialData = (selectedState)=>{
        const payload = selectedState;
        setTestimonialLoader(true);
        fetchTestimonial(API.TESTIMONIAL, payload).then(data=>{
            settestimonialData(data);
            setTestimonialLoader(false);
        });
    }

    useEffect(() => {
        const payload = {value:'IN', label:'India'};
        
        fetchStatesListData(payload);
        fetchTestimonialData(defaultState);
    }, [])
    const defaultState = statesList && statesList.length ? statesList[0] : null;


    return (
        <div className="testimonial-carousel-wrapper">
            <div className="select-container">
                <Col className="select-wrapper" lg={3}>
                    <div className="list-header">
                        <span>Happy to share</span>
                        <h2>Patient Stories</h2>
                    </div>
                    {countryListLoader || stateLoader && <Loader/>}
                    <SelectBox label="SELECT COUNTRY" selectedValue={{value:'IN', label:'India'}} onSelect={fetchStatesListData} options={countryListData}/>
                    {defaultState &&  <SelectBox label="SELECT STATE" selectedValue={defaultState} options={statesList} onSelect={fetchTestimonialData}  /> }
                </Col>
            </div>

            {testimonialLoader && <Loader/>}
            <Carousel>
                {
                    testimonialData.length && testimonialData?.map((item, index)=>{
                        return  <Carousel.Item>
                                <Row>
                                    <Col className="flex-contentcontent"  lg={5}>
                                    
                                        <Col className="review-wrapper" lg={10}>
                                            <div className="testimonials">
                                                <h3>{item.userName}</h3>
                                                <address>  -----, {item.state}</address>
                                                 {ratingUI(item.rating)}
                                                <article><p>“ {item.quotes} “</p></article>
                                            </div>
                                        </Col>
                                    
                                    </Col>
                                    <Col lg={7}>
                                        <div className="carousel-image-wrapper">
                                            <i className="quotes-top icon-carousel-quotes"></i>
                                            <img
                                            className="carousel-image"
                                            src={API.IMAGE_BASE_URL.TESTIMONIAL + item.image}
                                            alt={item.userName}
                                            />
                                            <i className="quotes-bottom icon-carousel-quotes"></i>
                                        </div>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                    })
                }

                  
                </Carousel>
        </div>
    )
}
import { format } from 'path'

export default TestimonialCarousel
