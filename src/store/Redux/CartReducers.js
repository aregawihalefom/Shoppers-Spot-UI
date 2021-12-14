import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items:[]
}

export const cartSlice = createSlice({

    name:"cart",
    initialState,
    reducers:{

        addingItem: (state, action)=>{
           return [...state, action.payload ] 

        },
        removeItem:(state, action)=>{
            return []
        }

    }
})

export const {addingItem, removeItem} = cartSlice.actions
export default cartSlice.reducer