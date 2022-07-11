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
    },
    removeAuth: (state, action) =>{
      sessionStorage.removeItem('token');
      state.isAuth = false;
    }
  }
})

export const { activateAuth, removeAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;
