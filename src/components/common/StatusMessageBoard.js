import React, {useState, useEffect} from 'react'

function StatusMessageBoard({ message }) {

    const danger = "alert alert-danger"
    const success = "alert alert-success"

    const [showElement, setShowElement] = useState(true)
    useEffect(() => {
        setTimeout(function () {
            setShowElement(false)
        }, 3000);
    },
        [])
     const alert = () =>{
         return (
            <div className={message.type ? success : danger} role="alert">
            {message.message}
        </div> 
         )
     }   
    
    return (
        <div>
            {showElement ? alert() : ''}
        </div>
    )
}

export default StatusMessageBoard
