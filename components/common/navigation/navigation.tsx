import React from 'react'
import {Nav} from 'react-bootstrap';
import Link from 'next/link';

 interface routes {
    name:string;
    route:string;
    navItems:[]
}

function Navigation(props:any) {
    const {navItems} = props;
    return (
        <Nav className="mr-auto">
            {navItems.map((nav:routes)=>{
                return <Link href={nav.route}><a className="nav-link" href="#">{nav.name} <span className="sr-only">(current)</span></a></Link>
            })}
        </Nav>
    )
}

export default Navigation


 