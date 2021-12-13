import { configureStore } from "@reduxjs/toolkit";
import MessageReducers from "./MessageReducers";
import userReducer from "./userReducer";

const store = configureStore({
    reducer:{
        user:userReducer,
        message:MessageReducers
    }
})
export default store