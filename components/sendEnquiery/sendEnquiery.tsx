import React, { useState } from 'react'

import {Loader, Input, MedicalButton} from '../common';
import {sendEnquiry} from '../../store/reducers/sendEnquiry/sendEnquiry.action';
import {API} from '../../pages/api';

interface SendEnquiery {
    id:number;
    name:string;
    closeModal: Function;
}


/**
 * On submit send enquiry form 
 * @param formValues 
 * @param setsendEnquiryLoader 
 * @param closeModal 
 */
const submitSendEnquiryForm = (formValues, setsendEnquiryLoader, closeModal)=>{
    let formData = new FormData();
        formData.append('file', formValues.file);
        
        const payload = {
            ...formValues,
            file:formData
        }
        setsendEnquiryLoader(true);
        sendEnquiry(API.SEND_ENQUIRY, payload).then(data=>{
            
            setsendEnquiryLoader(false);
            closeModal();
        });
}

function SendEnquiery({id, name, closeModal}:SendEnquiery) {
    const [cancelModal, setcancelModal] = useState(false);
    const [formValues, setformValues] = useState({id:id, name:'', email:'', message:'', file:''});
    const [sendEnquiryLoader, setsendEnquiryLoader] = useState(false);

    const onButtonOutlineClick = ()=>{
        closeModal();
    }
     
    const onButtonPrimaryClick = ()=>{
        submitSendEnquiryForm(formValues, setsendEnquiryLoader, closeModal)
    }

    const onInputChange = (e, id)=>{
        
        setformValues({
            ...formValues,
            [id]: e.target.value
        })
        
    }
    const disableButton = formValues.name && formValues.email &&  formValues.email.indexOf('@')>-1 && formValues.email.indexOf('.')>-1;

    return (
        <div>
            {sendEnquiryLoader && <Loader/>}
            <form action="">
                <Input values={formValues} onInputChange={onInputChange} label="NAME" id="name" placeholder="Enter Name" />
                <Input values={formValues} onInputChange={onInputChange}  label="EMAIL" type="email" id="email" placeholder="Enter Email ID" />
                <Input values={formValues} onInputChange={onInputChange}  label="MESSAGE" type="textarea" id="message" placeholder="Write here…" />
                <Input values={formValues} onInputChange={onInputChange}  label="UPLOAD FILE" type="file" id="file" />
                <div className="form-button-wrapper">
                    <MedicalButton text="CANCEL" type="outline" onButtonOutlineClick={onButtonOutlineClick} />
                    <MedicalButton disabled={!disableButton} text="SUBMIT NOW" type="primary" onButtonPrimaryClick={onButtonPrimaryClick}  />
                </div>
            </form>
        </div>
    )
}

export default SendEnquiery
 