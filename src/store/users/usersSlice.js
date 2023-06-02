import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 const url =`https://randomuser.me/api/?results=5`;

  export const getUsers = createAsyncThunk ('users/getUsers', async () =>{
    try{
        const resp = await axios.get(url);
        return resp.data.results;
    }
    catch(err) {
        return err.message
    }
  })
const initialState = {
users: [],
isLoading: true,
err: null,
}

const userSlice = createSlice({
    name:'users',
    initialState,
    extraReducers:   (builder) => {
     builder
     .addCase( getUsers.pending, (state) => {
        state.isLoading = false;
     })
     .addCase (getUsers.fulfilled,(state, action) =>{
        state.users = action.payload;
        state.isLoading = false;

     } )
     .addCase(getUsers.rejected, (state,action) => {
        state.isLoading = false;
        state.err = action.err.message
     })
    },

});
 
export default userSlice.reducer;