import { gql, useMutation } from '@apollo/client';

const LOGIN = gql`
mutation login($input: UserCredentials!) {
  login(input:$input)
}
`

export const useLoginMutation = ()=> {
  const [loginMutation, {data: loginData, loading: loginLoading, error: loginError}] = useMutation(LOGIN);
  return { loginMutation, loginData, loginLoading, loginError }
}
