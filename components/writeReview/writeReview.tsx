import React, { useState } from 'react'

import {Loader, Input, MedicalButton, WriteRating} from '../common';
import {writeReview} from '../../store/reducers/sendEnquiry/writeReview.action';
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
        writeReview(API.REVIEW_DETAILS, payload).then(data=>{
            
            setsendEnquiryLoader(false);
            closeModal();
        });
}

const initialPayload = {
    id:'',
    name:'',
    title:'', 
    message:'', 
    file:'', 
    agree:true, 
    rating:{
        hospitalAmbience:1,
        hospitalStaffBehaviour:1,
        waitTime:1,
        admissionAndDischargeProcess:1,
        supportFromHospitalStaff:1,
        careInHospital:1
    }
}

function WriteReview({id, name, closeModal}:WriteReview) {
    const [formValues, setformValues] = useState({...initialPayload, id});
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
            [id]: e.target.type == 'checkbox' ? e.target.checked : e.target.value
        })
        
    }
    // const disableButton = formValues.name && formValues.email &&  formValues.email.indexOf('@')>-1 && formValues.email.indexOf('.')>-1;

      
     const getValues = (value)=>{
        
        setformValues({
            ...formValues,
            rating:  { ...formValues.rating, ...value}
        })
     }

     console.log('rate value', formValues);

    return (
        <div className="write-review-wrapper">
            
            <div className="review">
                <ul className="review-list">
                    <li>
                        <div className="text">Hospital Ambience</div>
                        <WriteRating getValues={getValues} value={0} ratingType='hospitalAmbience' />
                    </li>
                    <li>
                        <div className="text">Hospital Staff Behaviour</div>
                        <WriteRating getValues={getValues} value={0} ratingType='hospitalStaffBehaviour' />
                    </li>
                    <li>
                        <div className="text">Wait Time</div>
                        <WriteRating getValues={getValues} value={0} ratingType='waitTime' />
                    </li>
                    <li>
                        <div className="text">Admission & Discharge Process</div>
                         <WriteRating getValues={getValues} value={0} ratingType='admissionAndDischargeProcess' />
                    </li>
                    <li>
                        <div className="text">Support from Hospital Staff</div>
                         <WriteRating getValues={getValues} value={0} ratingType='supportFromHospitalStaff' />
                    </li>
                    <li>
                        <div className="text">Care in Hospital</div>
                        <WriteRating getValues={getValues} value={0} ratingType='careInHospital' />
                    </li>
                </ul>
            </div>
            <form action="" className="form">
                {sendEnquiryLoader && <Loader/>}
                <Input values={formValues} onInputChange={onInputChange}  mandatory={true} label="YOUR NAME" id="name" placeholder="Enter Name" />
                <Input values={formValues} onInputChange={onInputChange} mandatory={true} label="Title of your review" type="text" id="title" placeholder="Summarise your visit" />
                <Input values={formValues} onInputChange={onInputChange}  label="PLEASE WRITE THE REVIEW" type="textarea" id="message" placeholder="Tell people about your experience…" />
                <Input values={formValues} onInputChange={onInputChange}  label="UPLOAD FILE" type="file" id="file" />
                <div className="terms-condition">
                    <Input values={formValues} onInputChange={onInputChange} checked={true} label="I agree with the Terms and Conditions." type="checkbox" id="agree" />
                </div>
                <div className="form-button-wrapper">
                    <MedicalButton text="CANCEL" type="outline" onButtonOutlineClick={onButtonOutlineClick} />
                    <MedicalButton   text="SUBMIT NOW" type="primary" onButtonPrimaryClick={onButtonPrimaryClick}  />
                </div>
            </form>
        </div>
    )
}

export default WriteReview
 