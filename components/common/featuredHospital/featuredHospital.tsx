import React from 'react'
interface featuredHospital{
    image:string;
    countryName:string;
    numberOfHospitals:number;
    numberOfDoctors:number
}
function FeaturedHospital({image,countryName, numberOfHospitals, numberOfDoctors}:featuredHospital) {
    return (
        <div className="featured-hospital-wrapper">
            <img src={`/images/${image}`} alt=""/>
            <h3 className="country-name">{countryName}</h3>
            <div className="content">
                <div>No. Of Hospitals: <span>{numberOfHospitals}</span></div>
                <div>No. Of Hospitals: <span>{numberOfDoctors}</span></div>
            </div>
            
        </div>
    )
}

export default FeaturedHospital
