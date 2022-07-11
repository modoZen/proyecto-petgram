import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { SubmitButton } from '../SubmitButton';
import { Error, Form, Input, Spinner, Title } from './styles'

const UserForm = ({ onSubmit, title, disabled, error })=>{
  const email     = useInputValue('');
  const password  = useInputValue('');
  const handlerSubtmit = (event) =>{
    event.preventDefault();
    onSubmit({email: email.value, password: password.value});
  };
  
  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handlerSubtmit}>
        <Input disabled={disabled} placeholder='email' {...email} />
        <Input disabled={disabled} placeholder='password' type='password' {...password} />
        <SubmitButton disabled={disabled} text={title} />
      </Form>
      {disabled && <Spinner />}
      {error && <Error>{error}</Error>}
    </>
  )
}

export { UserForm }
