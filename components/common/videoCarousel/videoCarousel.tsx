import React from 'react'
import {Carousel, Col, Row} from 'react-bootstrap';

function VideoCarousel() {
    return (
        <div className="video-carousel-wrapper">
                <Carousel>
                    <Carousel.Item>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/gv5WstOox-A"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/K7pgpYIdd4o"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default VideoCarousel
