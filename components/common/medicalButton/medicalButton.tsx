import React from 'react'
import {Button} from 'react-bootstrap'

function MedicalButton({type, text}) {
    return (
            <>
               {type =='primary' && <Button className="button-primary" variant="primary">{text.toUpperCase()}</Button>}
               {type =='outline' && <Button className="button-primary button-outline" variant="primary">{text.toUpperCase()}</Button>}
            </>
    )
}

export default MedicalButton
