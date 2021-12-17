import React from 'react'

function StatusMessageBoard({ message }) {
    
    const danger = "alert alert-danger"
    const success = "alert alert-success"
  
    return (
        <div>
            <div className={message.category ? success : danger} role="alert">
                {message.success}{message.error} 
            </div>
        </div>
    )
}

export default StatusMessageBoard
