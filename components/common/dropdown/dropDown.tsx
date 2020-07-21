import React from 'react'
import {Form} from 'react-bootstrap'

function DropDown({label}) {
    return (
        <div className="dropdown-wrapper">
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label  className="label">{label}</Form.Label>
                    <Form.Control as="select" className="select">
                    <option>Select</option>
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
