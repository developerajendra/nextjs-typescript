import React from 'react'
import {HospitalProductCard} from '../common';

const hospitalListData = [{
        routes:'/hospital/hospitals/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/hospitals/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/hospitals/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/hospitals/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/hospitals/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/hospitals/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/hospitals/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/hospitals/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/hospitals/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/hospitals/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/hospitals/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/hospitals/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/hospitals/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/hospitals/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/hospitals/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/hospitals/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    }
];

function HospitalList() {
    return (
        <div>
            {hospitalListData.map((data)=>{
                return <HospitalProductCard data={data} />
            })}
            
        </div>
    )
}

export default HospitalList
