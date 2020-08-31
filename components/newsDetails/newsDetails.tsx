import React, { useEffect, useState } from 'react';
import { MedicalButton, Loader, Breadcrumb, MedicalModal, VideoCarousel} from '../../components/common';
import {Row, Col} from 'react-bootstrap';
import {NewsCard} from '../common';



//Custom imports
import {API} from '../../pages/api';
import { fetchNews} from '../../store/reducers/filters/filters.action';


function NewsDetails() {
    let title = 'this is news title';

    const breadCrumbConfig = [
        {label:'Knowledges Bank', route:'/knowledgeBank'},
        {label:title}
    ];


    const [news, setnews] = useState([]);
    const [newsLoader, setnewsLoader] = useState(false);
     

    useEffect(() => {
        setnewsLoader(true);
        fetchNews(API.NEWS_AND_MEDIA).then(news=>{
            setnews(news);
            setnewsLoader(false);
        })
    }, []);

    console.log('news',news[0]);
    
    let newsDetails = news[0];

    return (
        <div style={{background:'#F8F8F8', padding:'20px', marginTop:'50px  '}}>
            <Breadcrumb breadcrumbConfig={breadCrumbConfig}/>
            <NewsCard  {...newsDetails} type="details"/>
        </div>
    )
}

export default NewsDetails
