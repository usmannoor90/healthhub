import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const submitAppointment = createAsyncThunk(
  "form/submitAppointment",
  async (appointmentData) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/appointments`,
      appointmentData
    );
    return response.data;
  }
);

export const submitContact = createAsyncThunk(
  "form/submitContact",
  async (contactData) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/contact`,
      contactData
    );
    return response.data;
  }
);

const formSlice = createSlice({
  name: "form",
  initialState: {
    appointmentStatus: "idle",
    contactStatus: "idle",
    appointmentError: null,
    contactError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitAppointment.pending, (state) => {
        state.appointmentStatus = "loading";
      })
      .addCase(submitAppointment.fulfilled, (state) => {
        state.appointmentStatus = "succeeded";
      })
      .addCase(submitAppointment.rejected, (state, action) => {
        state.appointmentStatus = "failed";
        state.appointmentError = action.error.message;
      })
      .addCase(submitContact.pending, (state) => {
        state.contactStatus = "loading";
      })
      .addCase(submitContact.fulfilled, (state) => {
        state.contactStatus = "succeeded";
      })
      .addCase(submitContact.rejected, (state, action) => {
        state.contactStatus = "failed";
        state.contactError = action.error.message;
      });
  },
});

export default formSlice.reducer;
