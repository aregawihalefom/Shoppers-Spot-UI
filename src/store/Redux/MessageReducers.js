import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { act } from 'react-dom/test-utils'

const initialState ={
    message:null,
    type: false // False = > error, True => success
}

export const messageSlice = createSlice({

    name:"message",
    initialState,
    reducers:{
        setMessages:(state , action)=>{ 
            state.message = action.payload.message
            state.type = action.payload.type
        },
        unsetMessages:(state)=>{
            state.message = null
        }
    }
})
export const {setMessages , unsetMessages} = messageSlice.actions
export default messageSlice.reducer

