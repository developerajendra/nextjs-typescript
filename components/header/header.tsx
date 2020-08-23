import React, { useState, useEffect } from 'react'
import {Navigation} from '../common';
import {Navbar, Form, FormControl, Col} from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';


const headerNavigation = [
    {name:'Hospital',route:'/hospital/hospitals'},
    {name:'Ayurveda',route:'/'},
    {name:'Cost Estimates',route:'/costEstimates'},
    {name:'Patient Story',route:'/'},
    {name:'Knowledges Bank',route:'/knowledgeBank'},
];
const Header =()=> {
    const [search, setsearch] = useState('');
    const router = useRouter();

    const onSearch = (e)=>{
        setsearch(e.target.value);
    }
    const onSubmitSearch = (e)=>{
        e.preventDefault();
        let isHospitalDetail = router.route.indexOf('hospitals/detail')>-1;
        const searchRoute =  router.route.indexOf('hospitals')>-1 && !isHospitalDetail ? `${router.route}?search=${search}` : `/hospital/hospitals?search=${search}`;
        router.push(searchRoute);
    }
   
    const onClearSearch  = (e)=>{
        let isHospitalDetail = router.route.indexOf('hospitals/detail')>-1;
        const searchRoute =  router.route.indexOf('hospitals')>-1 && !isHospitalDetail ? `${router.route}` : `/hospital/hospitals`;
        router.push(searchRoute);
        setsearch('');
    }

    useEffect(() => {
        let search:string = router.query.search;
        search && setsearch(search)
    }, [])
    

    return (
        <div className="main-header">
             <Navbar expand="lg">
                    <Col className="padding0" lg={2}>
                            <Link href="/home">
                                <a  href="#">
                                    <img className="logo" src="/images/logo.png" alt="karevel.com" title="karevel.com" />
                                </a>
                            </Link>
                    </Col>
                    <Col lg={7}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Navigation navItems={headerNavigation} />
                            </Navbar.Collapse>
                    </Col>

                    <Col className="padding0" md={12} lg={3}>
                        <Form inline className="search-wrapper">
                            <i className="icon-search"></i>
                            {search && <i onClick={(e)=>onClearSearch(e)}className="icon-close"></i>}
                            <FormControl onChange={(e)=>onSearch(e)} value={search} type="text" placeholder="Search Medical, Ayurveda…" className="search mr-sm-2" />
                            {search && <button onClick={(e)=>onSubmitSearch(e)}>Submit</button>}
                        </Form>
                    </Col>

                </Navbar>   
        </div>
    )
}

export default Header
