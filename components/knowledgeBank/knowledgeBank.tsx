import React from 'react'
import {Row, Col} from 'react-bootstrap';
import {NewsCard} from '../common';

const news = [
    {readMoreLink:'', title:'News or Blog Title will foes here..',image:"knowledge-bank/news1.jpg", news:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {readMoreLink:'', title:'News or Blog Title will foes here..',image:"knowledge-bank/news1.jpg", news:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {readMoreLink:'', title:'News or Blog Title will foes here..',image:"knowledge-bank/news1.jpg", news:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {readMoreLink:'', title:'News or Blog Title will foes here..',image:"knowledge-bank/news1.jpg", news:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
];

function KnowledgeBank() {
    return (
        <div className="knowledge-bank-wrapper">
            <div className="list-header">
                <span>PROUD TO SHARE WITH YOU</span>
                <h2>Knowledge Bank</h2>
            </div>
            <Row>
            { news.map((list:any)=><Col lg={12}><NewsCard {...list} icon="icon-arrow"/></Col>) }
            </Row>
        </div>
    )
}

export default KnowledgeBank
