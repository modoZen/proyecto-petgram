import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isAuth : sessionStorage.getItem('token')
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    activateAuth: (state, action) => {
      sessionStorage.setItem('token', action.payload)
      state.isAuth = action.payload;
    }
  }
})

export const { activateAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;
