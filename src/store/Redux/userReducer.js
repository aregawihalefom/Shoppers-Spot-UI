import { createSlice } from "@reduxjs/toolkit"

const initialState =  {
   username : '',
   token :'', 
   roles : ''
}
export const userSlice = createSlice({
   name:"user",
   initialState,
   reducers:{
       storeUserDetails:(state, action) =>{
           state.username = action.payload.username
           state.token = action.payload.token
           state.roles = action.payload.roles
       },
       reSetUserDetails:(state) => {
           state.username = ''
           state.token = ''
           state.roles = ''
       }
   }

})

export const {storeUserDetails, reSetUserDetails} = userSlice.actions
export default userSlice.reducer