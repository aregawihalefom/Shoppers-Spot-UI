import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { act } from 'react-dom/test-utils'

const initialState ={
    error:'',
    success:'',
    category:false
}

export const messageSlice = createSlice({

    name:"message",
    initialState,
    reducers:{
        setMessages:(state , action)=>{ 
            state.error = action.payload
            state.success = action.payload
            state.category = action.payload
        },
        unsetMessages:(state)=>{
            state.error = ''
            state.success = ''
            state.category = ''
        }
    }
})
export const {setMessages , unsetMessages} = messageSlice.actions
export default messageSlice.reducer

