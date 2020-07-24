import React from 'react'
import {Row, Col} from 'react-bootstrap';
import {NewsCard} from '../common';

const news = [
    {readMoreLink:'', title:'Headline will goes here. Replace it as per need.', date:'12 MAY, 2020',image:"news-image.jpg", news:"Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry’s standard."},
    {readMoreLink:'', title:'Headline will goes here. Replace it as per need.', date:'12 MAY, 2020',image:"news-image.jpg", news:"Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry’s standard."},
    {readMoreLink:'', title:'Headline will goes here. Replace it as per need.', date:'12 MAY, 2020',image:"news-image.jpg", news:"Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry’s standard."},
    {readMoreLink:'', title:'Headline will goes here. Replace it as per need.', date:'12 MAY, 2020',image:"news-image.jpg", news:"Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry’s standard."},
];

function NewsList() {
    return (
        <div className="news-list-wrapper">
             <div className="list-header">
                <span>Featured in</span>
                <h2>News and Media</h2>
            </div>
            <Row>
            { news.map((list:any)=><Col xs={12} md={6} lg={3}><NewsCard {...list}/></Col>) }
            </Row>
        </div>
    )
}

export default NewsList
