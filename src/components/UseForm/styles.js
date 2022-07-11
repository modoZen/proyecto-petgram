import styled from "styled-components";

export const Form = styled.form`
  padding: 16px 0;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled]{
    opacity: 0.3;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`

export const Error = styled.span`
  font-size: 14px;
  color: red;
`
export const Spinner = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  
  }
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #09f;
  margin:auto;
  animation: spin 1s ease infinite;
`
