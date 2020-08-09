import React from 'react'

interface checkbox {
    label?:string;
    value?:number;
    onChange?:Function;
    id?:string;
}
function CheckBox({value, label, onChange, id}:checkbox) {
    return (
        <>
            <input onChange={(e)=>onChange(e, id)} type="checkbox" id={`checkbox${value}`} name={`checkbox${value}`} value="Bike" />
            <label htmlFor={`checkbox${value}`} > {label}</label> 
        </>
    )
}

export default CheckBox
