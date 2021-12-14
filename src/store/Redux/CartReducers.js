import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";


const initialState = {
    items:[]
}

export const cartSlice = createSlice({

    name:"cart",
    initialState,
    reducers:{

        addingItem: (state, action)=>{
            state.items = action.payload
        },
        removeItem:(state, action)=>{
            return []
        }

    }
})

export const {addingItem, removeItem} = cartSlice.actions
export default cartSlice.reducer