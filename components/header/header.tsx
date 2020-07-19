import React from 'react'
import {Navigation} from '../common';
import {Navbar, Form, FormControl} from 'react-bootstrap';
import Link from 'next/link';

const headerNavigation = [
    {name:'Hospital',route:'/hospital'},
    {name:'Ayurveda',route:'/ayurveda'},
    {name:'Cost Estimates',route:'/cost-estimates'},
    {name:'Patient Story',route:'/patient-story'},
    {name:'Accreditation',route:'/accreditation'},
];

const Header =()=> {
    return (
        <div>
             <Navbar bg="light" expand="lg">
                <Link href="/home"><h1><a href="#">Kareval.com</a></h1></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navigation navItems={headerNavigation} />
                    <Form inline>
                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                </Navbar.Collapse>
                </Navbar>                  
        </div>
    )
}

export default Header
