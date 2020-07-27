import React,{useState} from 'react'
import {Form} from 'react-bootstrap'
import Select from 'react-select';

interface dropdown{
    label?:string;
    defaultSelectText?:string;
    styleTypeDefault?:boolean;
    options?:any;
}
function SelectBox({label, defaultSelectText, styleTypeDefault, options }:dropdown) {
     const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = selectedOption => {
        setSelectedOption( { selectedOption });
      };


      const customStyles = {
        dropdownIndicator:()=>({
          display:'none'
          // background-mage:"<svg  width='8' height='4.001'  xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path class='a' d='M714,825.756l.933-.757L718,827.486,721.067,825l.933.757L718,829Z' transform='translate(-714 -824.999)'/></svg>"
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
