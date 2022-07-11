import React from "react"
import { SubmitButton } from "../components/SubmitButton"
import { useDispatch } from 'react-redux'
import { removeAuth } from "../store/authReducer";

export const User = ()=>{
  const dispatch = useDispatch();
  const handlerLoguot = ()=>{
    dispatch(removeAuth());
  }

  return (
    <>
      <SubmitButton text={'Cerrar sesión'} onClick={handlerLoguot} />
    </>
  )
}
