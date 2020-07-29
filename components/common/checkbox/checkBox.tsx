import React from 'react'

interface checkbox {
    label?:string;
    value?:number;
}
function CheckBox({value, label}:checkbox) {
    return (
        <>
            <input type="checkbox" id={`checkbox${value}`} name={`checkbox${value}`} value="Bike" />
            <label htmlFor={`checkbox${value}`} > {label}</label> 
        </>
    )
}

export default CheckBox
