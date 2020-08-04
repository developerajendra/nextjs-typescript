import React from 'react'

interface InputInterface{
    placeholder?: string;
    id:string;
    type?:string;
    label:string;
    onInputChange?: Function;
    values?:any;
}
function Input({label, placeholder, id, type, onInputChange, values}:InputInterface) {
    // console.log('values', values);
    
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{label}</label>
            {type == 'textarea' ? <textarea value={values[id]}  onChange={(e)=>{onInputChange(e, id)}}  name={id} id={id} placeholder={placeholder} />  :(type=='file' ? 
             <div className="file-wrapper"> 
                 <input value={values[id]}  onChange={(e)=>{onInputChange(e, id)}} type={type ? type : 'text'} id={id} name={id} placeholder={placeholder}/>  <i className="icon-upload"></i>
                 <span>Supported File Format: <a href="#">pdf,</a>  <a href="#">.doc,</a> <a href="#">.csv,</a>  <a href="#">.xls</a> <span className="max-limit">(Max 10mb/file)</span></span>
            </div>: <input value={values[id]} onChange={(e)=>{onInputChange(e, id)}}  type={type ? type : 'text'} id={id} name='inputName' placeholder={placeholder}/>)    }
            {/* {type == 'file' && <input type="file" id={id} name={id} />} */}
        </div>
    )
}

export default Input
