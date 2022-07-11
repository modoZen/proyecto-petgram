import React from "react"
import { UserForm } from "../components/UseForm";
import { useRegisterMutation } from "../hooks/useRegisterMutation";
import { useDispatch } from "react-redux";
import { activateAuth } from "../store/authReducer";

export const NotRegisteredUser = ()=>{
  const dispath = useDispatch();
  const { registerMutation, mutationLoading, mutationError } = useRegisterMutation();
  const handlerRegister = ({email, password})=>{
    const input = { email, password };
    const variables = { input };
    registerMutation({variables}).then(handlerAuth);
  };
  const handlerAuth = ()=>{
    dispath(activateAuth());
  };
  const errorMsg = mutationError && 'El usuario ya existe';

  return (
    <>
      <UserForm onSubmit={handlerRegister} disabled={mutationLoading} error={errorMsg} title="Registrarse" />
      <UserForm onSubmit={handlerAuth} title="Iniciar sesión" />
    </>
  )
}
