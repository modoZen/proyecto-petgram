import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isAuth : false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    activateAuth: (state, action) => {
      state.isAuth = true;
    }
  }
})

export const { activateAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;
