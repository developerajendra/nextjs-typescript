import React from 'react';
import {Card} from 'react-bootstrap';
import Link from 'next/link';
import moment from 'moment';

import {API} from '../../../pages/api';
interface news{
    readMoreLink?:string;
    title?: string;
    date?:string;
    image?:string;
    news?:string;
    icon?:string;
}
// {readMoreLink:'', title:'Headline will goes here. Replace it as per need.', date:'12 MAY, 2020',image:"news-image.jpg"},
function NewsCard({ readMoreLink, title, date, image, news, icon}: news) {
    return (
        <div className="news-card-wrapper">
            <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" src={API.IMAGE_BASE_URL.NEWS + image} />
            <Card.Body>
                {date ? <span className="date"><small> {moment(date).format('MMM DD YYYY')}</small></span> : null}
                <Card.Title className="news-title">{title}</Card.Title>
                <Card.Text className="content">
                {news}
                </Card.Text>
                {readMoreLink ? <Link href={readMoreLink}><a className="read-more" href="#">Read More
                 {icon ? <i className={icon}></i>  : <i className="icon-read-more"></i> }
                 </a></Link> : null}
            </Card.Body>
            </Card>
        </div>
    )
}

export default NewsCard
