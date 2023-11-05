import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../client";
import axios from "axios";

export const postSignUp = createAsyncThunk("postSignUp", async (data) => {
  try {
    const res = await axios.post(`${API_URL}/auth/signup`, data)
    console.log('res', res?.data?.data);
    return { status: res.status, data: res?.data?.data };
  } catch (error) {
    return {
      message: error?.response?.data?.error,
      status: error?.response?.status,
    };

  }
});
