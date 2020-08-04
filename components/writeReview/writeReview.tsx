import React, { useState } from 'react'

import {Loader, Input, MedicalButton, WriteRating} from '../common';
import {sendEnquiry} from '../../store/reducers/sendEnquiry/sendEnquiry.action';
import {API} from '../../pages/api';

interface WriteReview {
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

function WriteReview({id, name, closeModal}:WriteReview) {
    const [cancelModal, setcancelModal] = useState(false);
    const [formValues, setformValues] = useState({id:id, name:'', email:'', message:'', file:'', agree:true, rating:{}});
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

      
     const getValues = (value)=>{
        
        setformValues({
            ...formValues,
            rating:  { ...formValues.rating, ...value}
        })
     }

     console.log('rate value', formValues);

    return (
        <div>
            {sendEnquiryLoader && <Loader/>}
            <div className="review">
                <ul>
                    <li>
                        <div className="text">Hospital Ambience</div>
                        <div className="rating"><WriteRating getValues={getValues} value={0} ratingType='hospitalAmbience' /></div>
                    </li>
                    <li>
                        <div className="text">Hospital Staff Behaviour</div>
                        <div className="rating"><WriteRating getValues={getValues} value={0} ratingType='hospitalStaffBehaviour' /></div>
                    </li>
                    <li>
                        <div className="text">Wait Time</div>
                        <div className="rating"><WriteRating getValues={getValues} value={0} ratingType='waitTime' /></div>
                    </li>
                    <li>
                        <div className="text">Admission & Discharge Process</div>
                        <div className="rating"> <WriteRating getValues={getValues} value={0} ratingType='admissionAndDischargeProcess' /></div>
                    </li>
                    <li>
                        <div className="text">Support from Hospital Staff</div>
                        <div className="rating"> <WriteRating getValues={getValues} value={0} ratingType='supportFromHospitalStaff' /></div>
                    </li>
                    <li>
                        <div className="text">Care in Hospital</div>
                        <div className="rating"><WriteRating getValues={getValues} value={0} ratingType='careInHospital' /></div>
                    </li>
                </ul>
            </div>
            <form action="">
                <Input values={formValues} onInputChange={onInputChange} label="NAME" id="name" placeholder="Enter Name" />
                <Input values={formValues} onInputChange={onInputChange}  label="EMAIL" type="email" id="email" placeholder="Enter Email ID" />
                <Input values={formValues} onInputChange={onInputChange}  label="MESSAGE" type="textarea" id="message" placeholder="Write here…" />
                <Input values={formValues} onInputChange={onInputChange}  label="UPLOAD FILE" type="file" id="file" />
                <div className="agree">
                    <Input values={formValues} onInputChange={onInputChange}  label="I agree with the Terms and Conditions." type="checkbox" id="agree" />
                </div>
                <div className="form-button-wrapper">
                    <MedicalButton text="CANCEL" type="outline" onButtonOutlineClick={onButtonOutlineClick} />
                    <MedicalButton disabled={!disableButton} text="SUBMIT NOW" type="primary" onButtonPrimaryClick={onButtonPrimaryClick}  />
                </div>
            </form>
        </div>
    )
}

export default WriteReview
 