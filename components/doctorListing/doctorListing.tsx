import React from 'react'
import {ProductCard} from '../common';

const doctorListData = [{
        routes:'/hospital/doctors/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/doctors/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/doctors/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/doctors/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/doctors/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/doctors/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/doctors/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/doctors/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/doctors/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/doctors/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/doctors/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/doctors/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/doctors/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/doctors/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/doctors/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    },{
        routes:'/hospital/doctors/detail',
        routesID:'1',
        buttonText:'LEARN MORE'
    }
];

function DoctorListing() {
    return (
        <div>
            {doctorListData.map((data)=>{
                return <ProductCard data={data} />
            })}
            
        </div>
    )
}

export default DoctorListing


 
