import React, { useEffect, useState } from 'react'
import {Row, Col} from 'react-bootstrap';
import {NewsCard} from '../common';



//Custom imports
import {API} from '../../pages/api';
import { fetchNews} from '../../store/reducers/filters/filters.action';
import {ProductCard, Loader, MedicalButton} from '../common';
 

function NewsList() {
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
        <div className="news-list-wrapper">
            {newsLoader ? <Loader/> : null}
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
