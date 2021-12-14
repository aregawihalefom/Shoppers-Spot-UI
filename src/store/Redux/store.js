import { configureStore } from "@reduxjs/toolkit";
import CartReducers from "./CartReducers";
import MessageReducers from "./MessageReducers";
import userReducer from "./userReducer";

const store = configureStore({
    reducer:{
        user:userReducer,
        message:MessageReducers,
        cart:CartReducers
    }
})
export default store