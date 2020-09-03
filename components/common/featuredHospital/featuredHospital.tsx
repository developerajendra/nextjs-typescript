import React from 'react'
import {API, ratingUI} from '../../../pages/api/'

interface featuredHospital{
    image:string;
    countryName:string;
    numberOfHospitals:number;
    numberOfDoctors:number
}
function FeaturedHospital({image, countryName, numberOfHospitals, numberOfDoctors}:featuredHospital) {
    return (
        <div className="featured-hospital-wrapper">
            <img src={API.IMAGE_BASE_URL.FEATURED_HOSPITALS + image} alt=""/>
            <h3 className="country-name">{countryName}</h3>
            <div className="content">
                <div>No. Of Hospitals: <span>{numberOfHospitals}</span></div>
                <div>No. Of Doctors: <span>{numberOfDoctors}</span></div>
            </div>
            
        </div>
    )
}

export default FeaturedHospital
