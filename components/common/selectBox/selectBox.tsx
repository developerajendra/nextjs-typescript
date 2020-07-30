import React,{useState} from 'react'
import {Form} from 'react-bootstrap'
import Select from 'react-select';

interface dropdown{
    label?:string;
    defaultSelectText?:string;
    styleTypeDefault?:boolean;
    options?:any;
    onSelect?:Function;
    selectedValue?: object;
    isDisable?:boolean;
    groupName?:any;
}
function SelectBox({label, defaultSelectText, styleTypeDefault, options, onSelect, selectedValue, isDisable, groupName }:dropdown) {
    const handleChange = (selectedOption, index) => {
        onSelect && onSelect(selectedOption, index);
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
                      name={groupName}
                      defaultValue={selectedValue}
                      styles={customStyles}
                      // value={selectedOption}
                      onChange={handleChange}
                      options={options}
                      isDisabled={isDisable}
                    />
                </Form.Group>
                 
                </Form>

         
      </div>
    )
}

export default SelectBox
