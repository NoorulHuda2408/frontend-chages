import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signin} from "../middleware/sigin";

const initialState = {
  loading: false,
  error: "",
  signInData: [],
};
const singUpSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signin.fulfilled, (state, action) => {
      state.loading = false;
      state.signInData = action.payload;
    });
    builder.addCase(signin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error || "something wrong";
    });
  },
});
export default singUpSlice.reducer;


