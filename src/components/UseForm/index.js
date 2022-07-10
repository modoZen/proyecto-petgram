import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Button, Form, Input, Title } from './styles'

const UserForm = ({ onSubmit, title })=>{
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
        <Input placeholder='email' {...email} />
        <Input placeholder='password' type='password' {...password} />  
        <Button>{title}</Button>
      </Form>
    </>

  )
}

export { UserForm }
