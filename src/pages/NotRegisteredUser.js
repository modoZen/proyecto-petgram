import React from "react"
import { UserForm } from "../components/UseForm";
import { useRegisterMutation } from "../hooks/useRegisterMutation";
import { useDispatch } from "react-redux";
import { activateAuth } from "../store/authReducer";
import { useLoginMutation } from "../hooks/useLoginMutation";

export const NotRegisteredUser = ()=>{
  const dispath = useDispatch();

  const { registerMutation, mutationLoading, mutationError } = useRegisterMutation();
  const handlerRegister = ({email, password})=>{
    const input = { email, password };
    const variables = { input };
    registerMutation({variables}).then(({data})=>{
      const { signup } = data;
      dispath(activateAuth(signup));
    });
  };
  const errorMsgRegister = mutationError && 'El usuario ya existe';
  
  const { loginMutation, loginLoading, loginError } = useLoginMutation();
  const handlerAuth = ({email, password})=>{
    const input = { email, password };
    const variables = { input };
    loginMutation({variables}).then(({data})=>{
      const {login} = data;
      dispath(activateAuth(login));
    })
  };
  const errorMsgLogin = loginError && 'La contraseña no es correcta o el usuario no existe';

  return (
    <>
      <UserForm onSubmit={handlerRegister} disabled={mutationLoading} error={errorMsgRegister} title="Registrarse" />
      <UserForm onSubmit={handlerAuth} disabled={loginLoading} error={errorMsgLogin} title="Iniciar sesión" />
    </>
  )
}
