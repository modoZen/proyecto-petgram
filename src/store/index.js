import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { authReducer } from "./authReducer";

const rootReducer = {
  auth: authReducer
}

const store = configureStore({
  reducer: rootReducer
});



export const ReduxComponent = ({children}) =>{
  return (
    <Provider store={store} >
      {children}
    </Provider>
  )
}



