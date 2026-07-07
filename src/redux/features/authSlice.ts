import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;

  user: any | null;
}

const initialState: AuthState = {
  token: localStorage.getItem("accessToken"),

  user: null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    setCredentials(state, action) {
      state.token = action.payload.token;

      state.user = action.payload.user;

      localStorage.setItem("accessToken", action.payload.token);
    },

    logout(state) {
      state.token = null;

      state.user = null;

      localStorage.removeItem("accessToken");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;