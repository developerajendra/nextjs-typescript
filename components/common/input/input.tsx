import React from 'react'

interface InputInterface{
    placeholder?: string;
    id:string;
    type?:string;
    label:string;
}
function Input({label, placeholder, id, type}:InputInterface) {
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{label}</label>
            {type == 'textarea' ? <textarea name={id} id={id} placeholder={placeholder} />  :(type=='file' ? 
             <div className="file-wrapper"> 
                 <input type={type ? type : 'text'} id={id} name={id} placeholder={placeholder}/>  <i className="icon-upload"></i>
                 <span>Supported File Format: <a href="#">pdf,</a>  <a href="#">.doc,</a> <a href="#">.csv,</a>  <a href="#">.xls</a> <span className="max-limit">(Max 10mb/file)</span></span>
            </div>: <input type={type ? type : 'text'} id={id} name={id} placeholder={placeholder}/>)    }
            {/* {type == 'file' && <input type="file" id={id} name={id} />} */}
        </div>
    )
}

export default Input
