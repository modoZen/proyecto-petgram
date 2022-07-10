import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isAuth : false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    activaAuth: (state, action) => {
      state.isAuth = true;
    }
  }
})

export const { activaAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;
