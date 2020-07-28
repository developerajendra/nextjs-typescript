import React from 'react'
import {Button} from 'react-bootstrap'
import Link from 'next/link';

interface button{
    text:string;
    type:string;
    routeLink?:string;
    disabled?:boolean;
}
function MedicalButton({type, text, routeLink, disabled}:button) {
    return (
            <>
               {type =='primary' && (routeLink ?  <Link href={routeLink}> 
               <Button className={disabled ? "button-primary disabled" : "button-primary"} variant="primary">{text.toUpperCase()}</Button>  
               </Link> : <Button   className={disabled ? "button-primary disabled" : "button-primary"} variant="primary">{text.toUpperCase()}</Button>)}
               {type =='outline' && <Button   className={disabled ? "button-primary button-outline disabled" : "button-primary button-outline"} variant="primary">{text.toUpperCase()}</Button>}
            </>
    )
}

export default MedicalButton
