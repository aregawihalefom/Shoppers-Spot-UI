import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { act } from 'react-dom/test-utils'

const initialState ={
    error:null,
    success:null,
    category: false
}

export const messageSlice = createSlice({

    name:"message",
    initialState,
    reducers:{
        setMessages:(state , action)=>{ 
            state.error = action.payload.error
            state.success = action.payload.success
            state.category = action.payload.category
        },
        unsetMessages:(state)=>{
            state.error = null
            state.success = null
            state.category = null
        }
    }
})
export const {setMessages , unsetMessages} = messageSlice.actions
export default messageSlice.reducer

