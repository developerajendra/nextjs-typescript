import React from 'react'
import {Button} from 'react-bootstrap'

function MedicalButton({type, text}) {
    return (
            <>
               {type =='primary' && <Button className="button-primary" variant="primary">{text}</Button>}
            </>
    )
}

export default MedicalButton
