import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setMessages } from '../../store/Redux/MessageReducers'

function StatusMessageBoard({ message }) {

    const danger = "alert alert-danger"
    const success = "alert alert-success"

    const [showElement, setShowElement] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(function () {
            setShowElement(false)
            const message ={message : null, type: false}
            dispatch(setMessages(message))
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
