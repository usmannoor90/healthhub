import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Country: null,
  Email: null,
  Referal_Id: null,
  UID: null,
  UserName: null,
  WalletAddress: null,
  Phone: null,
  IsVerified: null,
  ProfilePicture: null,
};

export const authSlice = createSlice({
  name: "authen",
  initialState: initialState,
  reducers: {
    setLogin: (state, action) => {
      state.Country = action.payload.Country;
      state.Email = action.payload.Email;
      state.UserName = action.payload.UserName;
      state.UID = action.payload.UID;
      state.Referal_Id = action.payload.Referal_Id;
      state.WalletAddress = action.payload.WalletAddress;
      state.IsVerified = action.payload.IsVerified;
      state.ProfilePicture = action.payload.ProfilePicture;
      state.Phone = action.payload.Phone;
    },
    setLogOut: (state) => {
      state.Country = null;
      state.Email = null;
      state.UserName = null;
      state.UID = null;
      state.Referal_Id = null;
      state.WalletAddress = null;
      state.IsVerified = null;
      state.ProfilePicture = null;
      state.Phone = null;
    },

    setWalletAddress: (state, action) => {
      state.WalletAddress = action.payload.WalletAddress;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLogin, setLogOut, setWalletAddress } = authSlice.actions;

export default authSlice.reducer;
