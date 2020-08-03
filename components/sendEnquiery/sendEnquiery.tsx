import React from 'react'

import {MedicalModal, Input, MedicalButton} from '../common';

interface SendEnquiery {
    children:object;
    id:number;
    name:string;
}

function SendEnquiery({children, id, name}:SendEnquiery) {
    return (
        <div>
            {/* {children} */}
            <MedicalModal header={{title:'Send Enquiry', subTitle:name}} openButton={children}>
                {/* <h2>Model content</h2> */}
                {/* <span>{name}</span> */}
                <form action="">
                    <Input label="NAME" id="name" placeholder="Enter Name" />
                    <Input label="EMAIL" type="email" id="email" placeholder="Enter Email ID" />
                    <Input label="MESSAGE" type="textarea" id="message" placeholder="Write here…" />
                    <Input label="UPLOAD FILE" type="file" id="file" />
                    <div className="form-button-wrapper">
                        <MedicalButton text="CANCEL" type="outline" />
                        <MedicalButton text="SUBMIT NOW" type="primary"  />
                    </div>
                </form>
            </MedicalModal>
        </div>
    )
}

export default SendEnquiery
