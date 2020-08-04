import React from 'react'
import {Button} from 'react-bootstrap'
import Link from 'next/link';

interface button{
    text:string;
    type:string;
    routeLink?:string;
    disabled?:boolean;
    routeOutlineLink?:string;
    routeOutlineAs?:string;
    onButtonOutlineClick?:any;
    onButtonPrimaryClick?: any;
}
function MedicalButton({type, text, routeLink, disabled, routeOutlineLink, routeOutlineAs, onButtonOutlineClick, onButtonPrimaryClick}:button) {
    
    return (
            <>
               {type =='primary' && (routeLink ?  <Link href={routeLink } as={routeLink}> 
               <Button  className={disabled ? "button-primary disabled" : "button-primary"} variant="primary">{text.toUpperCase()}</Button>  
               </Link> : (onButtonPrimaryClick ? <Button  onClick={(e)=>onButtonPrimaryClick(e)}  className={disabled ? "button-primary disabled" : "button-primary"} variant="primary">{text.toUpperCase()}</Button> : 
               <Button className={disabled ? "button-primary disabled" : "button-primary"} variant="primary">{text.toUpperCase()}</Button>))}
               {type =='outline' && (routeOutlineLink ? <Link href={routeOutlineLink} as={routeOutlineAs}> 
                    <Button   className={disabled ? "button-primary button-outline disabled" : "button-primary button-outline"} variant="primary">{text.toUpperCase()}</Button>
                </Link> :  <Button onClick={(e)=>onButtonOutlineClick(e)}  className={disabled ? "button-primary button-outline disabled" : "button-primary button-outline"} variant="primary">{text.toUpperCase()}</Button>)}
            </>
    )
}

export default MedicalButton
