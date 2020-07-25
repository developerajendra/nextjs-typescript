import React from 'react'

interface checkbox {
    text:string;
    id:number;
}
function CheckBox({text, id}:checkbox) {
    return (
        <>
            <input type="checkbox" id={`checkbox${id}`} name={`checkbox${id}`} value="Bike" />
            <label htmlFor={`checkbox${id}`} > {text}</label> 
        </>
    )
}

export default CheckBox
