import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state) => {
      return { ...state, isAuthenticated: true };
    },
    logout: (state) => {
      return { ...state, isAuthenticated: false };
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
