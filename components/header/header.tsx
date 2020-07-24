import React from 'react'
import {Navigation} from '../common';
import {Navbar, Form, FormControl, Col} from 'react-bootstrap';
import Link from 'next/link';


const headerNavigation = [
    {name:'Hospital',route:'/hospital/hospitals'},
    {name:'Ayurveda',route:'/ayurveda'},
    {name:'Cost Estimates',route:'/cost-estimates'},
    {name:'Patient Story',route:'/patient-story'},
    {name:'Knowledges Bank',route:'/knowledge-bank'},
];

const Header =()=> {
   
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
                            <FormControl type="text" placeholder="Search Medical, Ayurveda…" className="search mr-sm-2" />
                        </Form>
                    </Col>

                </Navbar>   
        </div>
    )
}

export default Header
