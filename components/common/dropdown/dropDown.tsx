import React from 'react'
import {Form} from 'react-bootstrap'

interface dropdown{
    label?:string;
    defaultSelectText?:string;
    styleTypeDefault?:boolean;
}
function DropDown({label, defaultSelectText, styleTypeDefault }:dropdown) {
    return (
        <div className={styleTypeDefault ? "dropdown-wrapper-default" :"dropdown-wrapper"}>
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    {label && <Form.Label  className="label">{label}</Form.Label>}
                    <Form.Control as="select" className="select">
                   {defaultSelectText ? <option>{defaultSelectText}</option> : <option>Select</option>}
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                 
                </Form>
                 
        </div>
    )
}

export default DropDown
