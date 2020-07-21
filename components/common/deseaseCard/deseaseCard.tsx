import React from 'react'

interface cardIterface{
    iconClass: string;
    text:string;
    isActive?:string;
}

function DeseaseCard({iconClass, text, isActive}:cardIterface) {
    return (
        <div className="desease-card-wrapper">
          <i className={iconClass}></i>
          <span>{text}</span>
        </div>
    )
}

export default DeseaseCard
