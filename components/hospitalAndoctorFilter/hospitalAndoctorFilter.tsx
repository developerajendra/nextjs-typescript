import React from 'react'
import {Row} from  'react-bootstrap';
import {SelectBox, CheckBox} from '../common';

const filterData = [
    {text:'Ahmadabad',id:1},
    {text:'Aluva',id:2},
    {text:'Ambattur',id:3},
    {text:'Amritsar',id:4},
    {text:'Anand',id:5},
    {text:'Anekal',id:6},
    {text:'Ballabgarh',id:7},
    {text:'Banglore',id:8},
    {text:'Bhubneswar',id:10},
    {text:'Chandigarh',id:11},
    {text:'Chennai',id:12},
    {text:'Delhi',id:13},
    {text:'Dehradun',id:14},
    {text:'Dimapur',id:15},
    {text:'Dhanbad',id:16}
]
 
                

function HospitalAndoctorFilter() {
    return (
        <div className="filter-wrapper">
            <div className="drop-downs">
                <SelectBox label="SELECT DISEASE"/>
                <SelectBox label="SELECT STATE"/> 
            </div>
            <div className="check-boxes">
                <h3>TOP HOSPITALS BY COUNTRY</h3>
                <ul>
                    {filterData.map((data:object, index:number)=><li key={index}><CheckBox {...data}  /></li>)}
                </ul>
            </div>
        </div>
    )
}

export default HospitalAndoctorFilter
