import React from 'react'

interface checkbox {
    name?:string;
    id?:number;
}
function CheckBox({name, id}:checkbox) {
    return (
        <>
            <input type="checkbox" id={`checkbox${id}`} name={`checkbox${id}`} value="Bike" />
            <label htmlFor={`checkbox${id}`} > {name}</label> 
        </>
    )
}

export default CheckBox
