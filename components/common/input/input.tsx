import React from 'react'

interface InputInterface{
    placeholder?: string;
    id:string;
    type?:string;
    label:string;
    onInputChange?: Function;
    values?:any;
    checked?:boolean;
    mandatory?:boolean;
}
function Input({label, placeholder, id, type, onInputChange, values, mandatory}:InputInterface) {
    
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{label}{mandatory ? <sup>*</sup> : ''}</label>
            {type == 'textarea' ? <textarea value={values[id]}  onChange={(e)=>{onInputChange(e, id)}}  name={id} id={id} placeholder={placeholder} />  :(type=='file' ? 
             <div className="file-wrapper"> 
                 <input accept=".pdf,.doc,.xls,.csv" onChange={(e)=>{onInputChange(e, id)}} type={type ? type : 'text'} id={id} name={id} placeholder={placeholder}/>  <i className="icon-upload"></i>
                 <span>Supported File Format: <a href="#">pdf,</a>  <a href="#">.doc,</a> <a href="#">.csv,</a>  <a href="#">.xls</a> <span className="max-limit">(Max 10mb/file)</span></span>
            </div>: type == 'checkbox' ? <input checked={values[id]}  onChange={(e)=>{onInputChange(e, id)}}  type={type ? type : 'text'} id={id} name={id} placeholder={placeholder}/> : <input value={values[id]} onChange={(e)=>{onInputChange(e, id)}}  type={type ? type : 'text'} id={id} name='inputName' placeholder={placeholder}/>)    }
        </div>
    )
}

export default Input
