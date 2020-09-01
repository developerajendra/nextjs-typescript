import React, { useEffect, useState } from 'react';
import { MedicalButton, Loader, Breadcrumb, MedicalModal, VideoCarousel} from '../../components/common';
import {Row, Col} from 'react-bootstrap';
import { useRouter } from 'next/router';
import {NewsCard} from '../common';



//Custom imports
import {API} from '../../pages/api';
import { fetchNews} from '../../store/reducers/filters/filters.action';


function NewsDetails() {
    const router = useRouter();
    let title = 'this is news title';

    const breadCrumbConfig = [
        {label:'Knowledges Bank', route:'/knowledgeBank'},
        {label:title}
    ];


    const [news, setnews] = useState([]);
    const [newsLoader, setnewsLoader] = useState(false);
     
    
    

    useEffect(() => {
        console.log('router',router.query.id);
        setnewsLoader(true);
        fetchNews(API.NEWS_AND_MEDIA, router.query.id).then(news=>{
            setnews(news);
            setnewsLoader(false);
        })
    }, [router.query]);

    console.log('news',news);
    

    return (
        <div style={{background:'#F8F8F8', padding:'20px', marginTop:'50px  '}}>
            <Breadcrumb breadcrumbConfig={breadCrumbConfig}/>
            <NewsCard  {...news} type="details"/>
        </div>
    )
}

export default NewsDetails
