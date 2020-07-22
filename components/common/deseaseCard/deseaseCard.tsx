import React from 'react'
import Link from 'next/link';

interface cardIterface{
    iconClass: string;
    text:string;
    route?:string;
}

function DeseaseCard({iconClass, text, route}:cardIterface) {
    return (
        route ? <Link href={route}>
            <div className="desease-card-wrapper">
              <i className={iconClass}></i>
              <span>{text}</span>
            </div>
        </Link> : 
        <div className="desease-card-wrapper">
        <i className={iconClass}></i>
        <span>{text}</span>
      </div>
    )
}

export default DeseaseCard
