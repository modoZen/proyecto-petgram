import React from "react"
import { useDispatch } from "react-redux"
import { UserForm } from "../components/UseForm";
import { useRegisterMutation } from "../hooks/useRegisterMutation";
import { activateAuth } from "../store/authReducer";

export const NotRegisteredUser = ()=>{
  const dispath = useDispatch();
  const { registerMutation } = useRegisterMutation();
  const handlerRegister = ({email, password})=>{
    const input = { email, password };
    registerMutation({
      variables:{
        input
      }
    }).then(activateAuth);
  };
  const handlerAuth = ()=>{
    dispath(activateAuth())
  };

  return (
    <>
      <UserForm onSubmit={handlerRegister} title="Registrarse" />
      <UserForm onSubmit={handlerAuth} title="Iniciar sesión" />
    </>
  )
}
