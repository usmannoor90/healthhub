import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/service`
    );
    return response.data;
  }
);

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    services: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.services = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default servicesSlice.reducer;
