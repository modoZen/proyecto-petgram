import React from "react"
import { useDispatch } from "react-redux"
import { UserForm } from "../components/UseForm";
import { activaAuth } from "../store/authReducer";

export const NotRegisteredUser = ()=>{
  const dispath = useDispatch();
  const activateAuth = ()=>{
    dispath(activaAuth())
  }
  return (
    <>
      <UserForm onSubmit={activateAuth} title="Registrarse" />
      <UserForm onSubmit={activateAuth} title="Iniciar sesión" />
    </>
  )
}
