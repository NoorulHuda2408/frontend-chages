import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postSignUp } from '../middleware/postSingup';
const initialState = {
    loading: false,
    error: '',
    signUpData: [],
  };
const singUpSlice=createSlice({
    name:"postSignUp",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(postSignUp.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(
            postSignUp.fulfilled,
            (state, action) => {
              state.loading = false;
      
              state.signUpData = action.payload;
            }
          );
          builder.addCase(postSignUp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error || "something wrong";
          });
    }


})
export default singUpSlice.reducer;