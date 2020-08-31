import React, { useEffect, useState } from 'react'
import {Row, Col} from 'react-bootstrap';
import {NewsCard} from '../common';



//Custom imports
import {API} from '../../pages/api';
import { fetchNews} from '../../store/reducers/filters/filters.action';
import {ProductCard, Loader, MedicalButton} from '../common';

 

function KnowledgeBank() {

    const [news, setnews] = useState([]);
    const [newsLoader, setnewsLoader] = useState(false);
     

    useEffect(() => {
        setnewsLoader(true);
        fetchNews(API.NEWS_AND_MEDIA).then(news=>{
            setnews(news);
            setnewsLoader(false);
        })
    }, [])

    return (
        <div className="knowledge-bank-wrapper">
             {newsLoader ? <Loader/> : null}
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
