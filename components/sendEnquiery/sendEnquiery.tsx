import React, { useState } from 'react'

import {MedicalModal, Input, MedicalButton} from '../common';

interface SendEnquiery {
    id:number;
    name:string;
    closeModal: Function;
}

function SendEnquiery({id, name, closeModal}:SendEnquiery) {
    const [cancelModal, setcancelModal] = useState(false);
    const [formValues, setformValues] = useState({name:'name'})
    const onButtonOutlineClick = ()=>{
        closeModal();
    }
     
    const onButtonPrimaryClick = ()=>{
        console.log('submit clicked...');
        closeModal();
    }

    const onInputChange = (e)=>{
        console.log('form values', e);
        
    }

    return (
        <div>
            <form action="">
                <Input {...formValues} onInputChange={onInputChange} label="NAME" id="name" placeholder="Enter Name" />
                <Input label="EMAIL" type="email" id="email" placeholder="Enter Email ID" />
                <Input label="MESSAGE" type="textarea" id="message" placeholder="Write here…" />
                <Input label="UPLOAD FILE" type="file" id="file" />
                <div className="form-button-wrapper">
                    <MedicalButton text="CANCEL" type="outline" onButtonOutlineClick={onButtonOutlineClick} />
                    <MedicalButton text="SUBMIT NOW" type="primary" onButtonPrimaryClick={onButtonPrimaryClick}  />
                </div>
            </form>
        </div>
    )
}

export default SendEnquiery
