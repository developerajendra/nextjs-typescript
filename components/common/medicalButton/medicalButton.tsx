import React from 'react'
import {Button} from 'react-bootstrap'
import Link from 'next/link';

interface button{
    text:string;
    type:string;
    routeLink?:string;
}
function MedicalButton({type, text, routeLink}:button) {
    return (
            <>
               {type =='primary' && (routeLink ?  <Link href="/hospital/compareResult"> 
               <Button className="button-primary" variant="primary">{text.toUpperCase()}</Button>  
               </Link> : <Button className="button-primary" variant="primary">{text.toUpperCase()}</Button>)}
               {type =='outline' && <Button className="button-primary button-outline" variant="primary">{text.toUpperCase()}</Button>}
            </>
    )
}

export default MedicalButton
