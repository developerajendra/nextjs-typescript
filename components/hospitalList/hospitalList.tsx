import React from 'react'
import {ProductCard} from '../common';

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
                return <ProductCard data={data} />
            })}
            
        </div>
    )
}

export default HospitalList
