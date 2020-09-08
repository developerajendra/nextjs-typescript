import React from 'react';
import {Card, Media} from 'react-bootstrap';
import Link from 'next/link';
import moment from 'moment';

import {API} from '../../../pages/api';
interface news{
    id?:any;
    readMoreLink?:string;
    title?: string;
    date?:string;
    image?:string;
    news?:string;
    icon?:string;
    type?:string;
}
// {readMoreLink:'', title:'Headline will goes here. Replace it as per need.', date:'12 MAY, 2020',image:"news-image.jpg"},
function NewsCard({ id, title, date, image, news, icon, type} : news) {
    return (
        type === 'details'? 
         
        <Media>
           
            <Media.Body>
                <h5>Media Heading</h5>
                <div id="container">
                    <div id="floated"> <img
                width={600}
                // height={}
                className="mr-3"
                src={API.IMAGE_BASE_URL.NEWS + image}
                alt="Generic placeholder"
            /></div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>

            </Media.Body>
            </Media>:
        <div className="news-card-wrapper">
        <Card style={{ width: '17rem' }}>
        <Card.Img variant="top" src={API.IMAGE_BASE_URL.NEWS + image} />
        <Card.Body>
            {date ? <span className="date"><small> {moment(date).format('MMM DD YYYY')}</small></span> : null}
            <Card.Title className="news-title">{title}</Card.Title>
            <Card.Text className="content">
            {news}
            </Card.Text>
            {id ? <Link href={'/knowledgeBank/detail/[id]'} as={`/knowledgeBank/detail/${id}`}><a className="read-more" href="#">Read More
             {icon ? <i className={icon}></i>  : <i className="icon-read-more"></i> }
             </a></Link> : null}
        </Card.Body>
        </Card>
    </div>
    )
}

export default NewsCard
