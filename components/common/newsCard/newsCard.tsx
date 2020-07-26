import React from 'react';
import {Card} from 'react-bootstrap';
import Link from 'next/link';
interface news{
    readMoreLink:string;
    title: string;
    date?:string;
    image:string;
    news:string;
    icon?:string;
}
// {readMoreLink:'', title:'Headline will goes here. Replace it as per need.', date:'12 MAY, 2020',image:"news-image.jpg"},
function NewsCard({ readMoreLink, title, date, image, news, icon}: news) {
    return (
        <div className="news-card-wrapper">
            <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" src={`/images/${image}`} />
            <Card.Body>
                {date ? <span className="date"><small> {date}</small></span> : null}
                <Card.Title className="news-title">{title}</Card.Title>
                <Card.Text className="content">
                {news}
                </Card.Text>
                <Link href={readMoreLink}><a className="read-more" href="#">Read More
                 {icon ? <i className={icon}></i>  : <i className="icon-read-mores"></i> }
                 </a></Link>
            </Card.Body>
            </Card>
        </div>
    )
}

export default NewsCard
