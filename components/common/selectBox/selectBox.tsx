import React,{useState} from 'react'
import {Form} from 'react-bootstrap'
import Select from 'react-select';

interface dropdown{
    label?:string;
    defaultSelectText?:string;
    styleTypeDefault?:boolean;
    options?:any;
    onSelect?:Function;
}
function SelectBox({label, defaultSelectText, styleTypeDefault, options, onSelect }:dropdown) {
    //  const [selectedOption, setSelectedOption] = useState(null);
     

    const handleChange = selectedOption => {
        // setSelectedOption( { selectedOption });
        onSelect && onSelect(selectedOption);
      };


      const customStyles = {
        dropdownIndicator:()=>({
          display:'none'
        })
      }
      

    return (
      <div className={styleTypeDefault ? "dropdown-wrapper-default" :"dropdown-wrapper"}>

            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    {label && <Form.Label  className="label">{label}</Form.Label>}
                    <Select
                      styles={customStyles}
                      // value={selectedOption}
                      onChange={handleChange}
                      options={options}
                    />
                </Form.Group>
                 
                </Form>

         
      </div>
    )
}

export default SelectBox
