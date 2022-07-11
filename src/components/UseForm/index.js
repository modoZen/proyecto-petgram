import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Button, Error, Form, Input, Title } from './styles'

const UserForm = ({ onSubmit, title, disabled, error })=>{
  const email     = useInputValue('');
  const password  = useInputValue('');
  const handlerSubtmit = (event) =>{
    event.preventDefault();
    onSubmit({email: email.value, password: password.value});
  }
  
  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handlerSubtmit}>
        <Input disabled={disabled} placeholder='email' {...email} />
        <Input disabled={disabled} placeholder='password' type='password' {...password} />  
        <Button disabled={disabled} >{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>

  )
}

export { UserForm }
