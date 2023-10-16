import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../client";

export const signin = createAsyncThunk("signin", async (data) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, data);
    localStorage.setItem("token", res?.data?.token);
    return { status: res?.status, data: res?.data?.data };
  } catch (error) {
    return {
      message: error?.response?.data?.error,
      status: error?.response?.status,
    };
  }
});
