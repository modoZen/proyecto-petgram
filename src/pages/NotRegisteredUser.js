import React from "react"
import { useDispatch } from "react-redux"
import { activaAuth } from "../store/authReducer";

export const NotRegisteredUser = ()=>{
  const dispath = useDispatch();
  const activateAuth = ()=>{
    dispath(activaAuth())
  }
  return (
    <>
      <form onSubmit={activateAuth}>
        <button>Iniciar sesión</button>
      </form>
    </>
  )
}
