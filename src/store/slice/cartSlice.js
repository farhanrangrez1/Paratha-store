import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartService from "./cartService";
const initialState={
    user:[],
    isLoading:false,
    isError:false,
    isSiccess:false,
    message:"",
    addCart : []
}
const cartSlice=createSlice({
    name:"cart",
    initialState ,
    reducers:{

     add: (state,action)=>{
      state.addCart.push(action.payload)
     },

     remove:(state,action)=>{
      return state.addCart.filter(item=>item.id !==action.payload)
     }
    },
    extraReducers:(builder)=>{
    builder 
    .addCase(register.pending,state=>{
        state.isLoading=true
    })
    .addCase(register.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isSiccess=true
        state.isError=false
        state.user=action.payload
    })
    .addCase(register.rejected,(state,action)=>{
      state.isLoading=false
       state.isError=true
        state.isSiccess=false
        state.user=null
        state.message=action.payload
    })
    .addCase(logOuteUser.fulfilled,(state)=>{
        state.user=null
        state.isSiccess=true
    })
    },
   
})
export const register=createAsyncThunk("register/user",async(userData)=>{
 try {
    cartService.register(userData)
 } catch (error) {
   const message=error;
   console.log(message);
 }
})


export const logOuteUser=createAsyncThunk("cart/logout",async()=>{
   localStorage.removeItem("user")
})
export default cartSlice.reducer
export const {add,remove}=cartSlice.actions

