import React from 'react'

interface InputInterface{
    placeholder?: string;
    id:string;
    type?:string;
    label:string;
    onInputChange?: Function;
}
function Input({label, placeholder, id, type, onInputChange}:InputInterface) {
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{label}</label>
            {type == 'textarea' ? <textarea  onChange={(e)=>{onInputChange(e)}}  name={id} id={id} placeholder={placeholder} />  :(type=='file' ? 
             <div className="file-wrapper"> 
                 <input  onChange={(e)=>{onInputChange(e)}} type={type ? type : 'text'} id={id} name={id} placeholder={placeholder}/>  <i className="icon-upload"></i>
                 <span>Supported File Format: <a href="#">pdf,</a>  <a href="#">.doc,</a> <a href="#">.csv,</a>  <a href="#">.xls</a> <span className="max-limit">(Max 10mb/file)</span></span>
            </div>: <input value={id} onChange={(e)=>{onInputChange(e)}}  type={type ? type : 'text'} id={id} name={id} placeholder={placeholder}/>)    }
            {/* {type == 'file' && <input type="file" id={id} name={id} />} */}
        </div>
    )
}

export default Input
