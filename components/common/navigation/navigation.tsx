import React from 'react'
import {Nav} from 'react-bootstrap';
import Link from 'next/link';
import {useRouter} from 'next/router';

 interface routes {
    name:string;
    route:string;
    navItems:[]
}

function Navigation(props:any) {
    const {navItems} = props;
    const router = useRouter();
    return (
        // <Nav>
            <ul className="mr-auto navbar-nav">
            {navItems.map((nav:routes)=>{
                const isSelected = router.pathname === nav.route || router.pathname.indexOf(nav.name.toLowerCase())>-1;
                return <li><Link href={nav.route}><a className={isSelected ? "nav-link route-selected"  : "nav-link"} href="#">{nav.name} <span className="sr-only">(current)</span></a></Link></li>
            })}
            </ul>
        // </Nav>
    )
}

export default Navigation


 