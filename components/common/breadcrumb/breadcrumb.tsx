import React from 'react'
import Link from 'next/link';
import { route } from 'next/dist/next-server/server/router';

interface breadcrumb {
    breadcrumbConfig:any;
    route:string;
    label:string;
}
function Breadcrumb({breadcrumbConfig}:any) {
    return ( <div className="breadcrumb-wrapper"> {breadcrumbConfig.map((link:breadcrumb,index:number)=>{
            return link.route ? <Link key={index} href={link.route}> 
            <a style={{
                color: '#6D8081',
                fontFamily: 'ProximaNova-Regular !important'
            }}>{link.label} <span>/</span> </a> 
             </Link> : <span style={{fontSize: '12px'}}>{link.label}</span>
        })}
        </div>
    )
}

export default Breadcrumb
