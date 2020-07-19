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
        <Nav className="mr-auto">
            {navItems.map((nav:routes)=>{
                const isSelected = router.pathname === nav.route || router.pathname.indexOf(nav.name.toLowerCase())>-1;
                return <Link href={nav.route}><a className={isSelected ? "nav-link route-selected"  : "nav-link"} href="#">{nav.name} <span className="sr-only">(current)</span></a></Link>
            })}
        </Nav>
    )
}

export default Navigation


 