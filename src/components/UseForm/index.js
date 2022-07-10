import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'


const UserForm = ({ onSubmit })=>{
  const email     = useInputValue('')
  const password  = useInputValue('')
  return (
    <form onSubmit={onSubmit}>
      <input placeholder='email' {...email} />
      <input placeholder='password' type='password' {...password} />  
      <button>Iniciar sesión</button>
    </form>
  )
}

export { UserForm }
